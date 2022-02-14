import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from './api.service';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: BehaviorSubject<any> = new BehaviorSubject(null);
  public member: BehaviorSubject<any> = new BehaviorSubject(null);
  token: string = null;
  refreshToken: string = null;

  constructor(private router: Router) { 
    const tokenData = localStorage.getItem('token');
    this.refreshToken = localStorage.getItem('refreshToken');
    if (tokenData) {
      this.token = tokenData;
    }
    const userData = localStorage.getItem('user');
    if (userData) {
      const parsedData = JSON.parse(userData);
      if (parsedData) {
        this.setUser(parsedData);
      }
    }
    const memberData = localStorage.getItem('member');
    if (memberData) {
      const parsedData = JSON.parse(memberData);
      if (parsedData) {
        this.setMember(parsedData);
      }
    }
  }

  /**
   * Check user Authenticate function
   * Get token from the localStorage.
   * Check If token null return false else decode token data.
   * Get token expire time.
   */
  isAuthenticated(): boolean {
    const tokenData = localStorage.getItem('token');
    if (tokenData == null){
      return false;
    } else {
      var tokenDataDecoded = jwt_decode(tokenData);
      var _accessTokenCurrentTime = new Date();
      var _accessTokenExpTime = new Date(tokenDataDecoded['exp'] * 1000);
      var TokenExpAfter = Math.floor((_accessTokenExpTime.getTime() - _accessTokenCurrentTime.getTime())/ 1000) ;
      
      if(TokenExpAfter < 0){
        return false;
      }else{
        return true;
      }
      
    }
  }

   /**
   * Set Token function
   * Set token in the localStorage.
   */
  setToken(token:string): void {
    this.token = token;
    localStorage.setItem('token', token);
  }
  
   /**
   * Get Access Token Function
   * 
   */
  getAccessToken(): string|null {
    if (this.token) {
      return this.token;
    } else {
      return null;
    }
  }
  
  /**
   * Set Refresh Token Function
   * Set refresh token in the localStorage
   */
  setRefreshToken(Reftoken:string): void {
    this.refreshToken = Reftoken;
    localStorage.setItem('refreshToken', Reftoken);
  }
  
  /**
   * Get Refresh Token Function
   */
  getRefreshToken(): string|null {
    if (this.refreshToken) {
      return this.refreshToken;
    } else {
      return null;
    }
  }

  /**
   * Set User Function
   * Set User in the localStorage
   */
  setUser(user): void {
    this.user.next(user);
    localStorage.setItem('user', JSON.stringify(user))
  }

  /**
   * Get User Function
   * Get User from the localStorage
   */
  getUser() {
    const user = this.user.getValue();
    if (user) {
      return user;
    } else {
      return {};
    }
  }

  /**
   * Set Member Function
   * Set Member in the localStorage
   */
  setMember(member): void {
    this.member.next(member);
    localStorage.setItem('member', JSON.stringify(member))
  }

  /**
   * Get Member Function
   * Get Member from the localStorage
   */
  getMember(){
    const member = this.member.getValue();
    if (member) {
      return member;
    } else {
      return {};
    }
  }

  /**
   * Logout Function
   * Remove token from the localStorage
   * Remove refreshToken from the localStorage
   * Remove User from the localStorage
   * Remove Member from the localStorage
   */
  logout(url = '/', params = {}) {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('user');
    localStorage.removeItem('MemberSearchForms');
    this.token = null;
    this.user.next(null);
    if(url){
      this.router.navigateByUrl('/login')
    }
  }

  /**
   * Get User name Function
   * Get name from the localStorage
   */
  getUserfname(): string {
    const user = this.user.getValue();
    if (user) {
      return user.fullname;
    } else {
      return null;
    }
  }

  /**
   * EmailAddress Function
   * Get EmailAddress from the localStorage
   */
  getUseremail(): string {
    const user = this.user.getValue();
    if (user) {
      return user.email;
    } else {
      return null;
    }
  }

  /**
   * Get User username Function
   * Get username from the localStorage
   */
  getUsername(): string {
    const user = this.user.getValue();
    if (user) {
      return user.username;
    } else {
      return null;
    }
  }

  /**
  * Generate and Get DeviceID Function
  * Get DeviceID from the localStorage
  * if device not present in the LocalStorage then generate new deviceID.
  */
  getDeviceID(){
    if(localStorage.getItem('deviceID')){
    const deviceID= localStorage.getItem('deviceID');
    return deviceID;
    }else{
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const deviceID = [...crypto.getRandomValues(new Uint8Array(32)), ...crypto.getRandomValues(new Uint8Array(32))].map(v => chars[v % chars.length]).join('');
    localStorage.setItem('deviceID', deviceID)
    return deviceID;
    }
    
  }

} 
