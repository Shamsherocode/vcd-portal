import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { baseUrl, headers } from 'environments/environment';
import { NgRecaptcha3Service } from './ng-recaptcha3.service';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})

export class ApiService implements OnInit{
  incodeURL: any;
  apiheader: any;
  httpResponse: any;
  private siteKey     = '6LdhHnodAAAAANT35rUOPEZ0TnF31D6qOqSfby81';
  

  constructor(private http: HttpClient, 
    private authService: AuthService, 
    private router: Router, 
    private recaptcha3: NgRecaptcha3Service,
    ) { }

  ngOnInit(){
    this.recaptcha3.init(this.siteKey);
  }


   /**
   * Create API request method function.
   * And convert data into the encoded form data.
   * Convert api request to the POST, GET, and PUT method.
   * And take baseURL, incodedData, and header.
   */
  async _httpRequest(method: string,url: string, data) {
  
  // if (withAuth) {
  //     if(this.checkAccessToken()){
  //     }else{
  //       this.router.navigate(['login'])
  //     }
  //   }else{
  //     this.apiheader = this.Header();
  //   }
    
    if(data){
    this.incodeURL = this.incodedData(data)
    }
    if(method =='post'){
		  try{
		  this.httpResponse =  await this.http.post(`${baseUrl}${url}`, this.incodeURL, this.apiheader).toPromise()
		  } catch (e) {
		  this.httpResponse = e
		  }
    
    }else if(method =='put'){
		  try{
		  this.httpResponse =  await this.http.put(`${baseUrl}${url}`, this.incodeURL, this.apiheader).toPromise()
		  } catch (e) {
		  this.httpResponse = e
		 }
   
    }else{
		try{
		  this.httpResponse =  await this.http.get(`${baseUrl}${url}`, this.apiheader).toPromise()
		 } catch (e) {
		  this.httpResponse = e
		 }
    }
    
    
    // if (withAuth && this.httpResponse.status == 401) {
    //      return  this._httpRequest(method, url, data, withAuth);
    // }else{
    //     return this.httpResponse
    // }
   
        
    
    

  }

   /**
   * Request Json function
   * convert data into JSON data.
   * Pass Auth Permission and Form Parameter.
   */
  async _requestJson(method: string, url: string, formParams) {
      let response = await this._httpRequest(method, url, formParams);
      if (response == null) return null;
        try {
              return response;
          } catch (e) {
              return e
          }
        
      }


  /**
   * Request Auth Response function
   * Check Every has Auth permission or not.
   * If Response is ok then Set Token, Refresh Token.
   * And Save User Data.
   */
  async requestAuthResponse(method: string, url: string, formParams) {
      var response = await this._requestJson(method, url, formParams);
      if (response == null) return null;
        try {
          if (response.authData != null) {
          var tokenDataArray = jwt_decode(response.authData.accessToken);
            if(tokenDataArray['role'] !=30){
              response.errorMessage= 'This application is only for Provider user accounts.'
              response.isOK = false;
              return response
              }else{
                this.authService.setToken(response.authData.accessToken)
                // this.authService.setRefreshToken(response.authData.refreshToken)
                // this.authService.setUser({
                //   email: response.authData.email,
                //   username: response.authData.username,
                //   fullname: response.authData.fullName,
                //   organizationName: response.authData.organizationName,
                //   organizationAddress: response.authData.organizationAddress
                // });
            return response
            }
            
          }else{
        return response
        }
      
      } catch (e) {
      return e
    } 
      
      
    }
  
  /**
   * Check Access Token funtion
   * Decode Access Token and take expiry time.
   * Check if Access Token Expiry time will be left 5 seconds then Generate new one.
   * And Generate RefreshToken
   */
  checkAccessToken(){
    var AccessToken = this.authService.getAccessToken();
    if(AccessToken){
      var tokenData = jwt_decode(AccessToken);
      var _accessTokenCurrentTime = new Date();
      var _accessTokenExpTime = new Date(tokenData['exp'] * 1000);
      var TokenExpAfter = Math.floor((_accessTokenExpTime.getTime() - _accessTokenCurrentTime.getTime())/ 1000) ;
    
    }else{
        return false
    }
 
  }
  
  /**
   * Refresh Access Token function
   * Get Access Token, incodedData, and device Info from the LocalStorage.
   * And Call POST API and pass headers, incodeData.
   * And set Access Token, Refresh Token.
   * If refresh Token expire and automcatically logout from the Current Session.
   */
  // refreshAccessToken(){
  //   const url = 'jwtRefreshSessions';
  //   var data = {'refreshToken': this.authService.getRefreshToken(), 'deviceID': this.authService.getDeviceID()};
  //   const incodeURL = this.incodedData(data)
  //    try{
  //    return this.http.post<any>(`${baseUrl}${url}`, incodeURL, { headers: headers }).subscribe((result: any) => {
  //     if(result.isOK){
  //     	this.authService.setToken(result.authData.accessToken)
  //       this.authService.setRefreshToken(result.authData.refreshToken)
  //       this.apiheader = this.HeaderWithToken();
  //    	return true;
  //     }else{
  //     	this.authService.logout();
  //     	return false;
  //     }
  //   })
    
  //   } catch (e) {
  //     this.authService.logout();
  //     return false;
  //  }
    
  // }
  

  //Header Token function
  HeaderWithToken() {
    let header = new HttpHeaders();
    header = header.append('Authorization', 'Bearer ' + this.authService.getAccessToken());
    return { headers: header };
  }
  
  //Header function
  Header() {
    return { headers: headers };
  }
  
  //Incodeed data function
  incodedData(data){
    const toUrlEncoded = obj => Object.keys(obj).map(
      k => encodeURIComponent(k) + '=' + encodeURIComponent(obj[k])).join('&');
      return(toUrlEncoded(data))
  }

  /**
   * Sign in api function
   * Pass username, password, and Captcha in the bodydata.
   * Check Captcha ID is required or not. If required then add in the bodydata.
   * Call Sign API and pass auth Permission and bodydata in the API.
   */
  async singIn(username:string, password:string){
    let params ={
        email :username,
        password :password,
      };
      console.log(params, 'body')
    return await this.requestAuthResponse('post', 'api/login', params)  
      
  }
  
  /**
   * Forget password step1 API function
   * Check entered username is valid or not if valid move on Step 2
   * Check Captcha ID is required or not. If required then add in the bodydata.
   * And Send device ID.
   */
   async forgotPasswordStep1(username:string,captcha:any){
    let params ={
        username :username,
        deviceID : this.authService.getDeviceID()
      };
    if (captcha != null) params['captcha'] = captcha;
    return await this.requestAuthResponse('post', 'users/forgotPassword/step1', params)  
  }
  
  /**
   * Forget password step2 API function
   * Check entered Answer is valid or not if valid move on Step 3
   * Check Captcha ID is required or not. If required then add in the bodydata.
   * And Send device ID.
   */
  async forgotPasswordStep2(question:string,answer:string,captcha:any){
    let params = {
        question: question,
        answer: answer,
        deviceID : this.authService.getDeviceID()
      };
                    
    if (captcha != null) params['captcha'] = captcha;
    return await this.requestAuthResponse('post', 'users/forgotPassword/step2', params)  
  }

  /**
   * Forget password step3 API function
   * Check selected communication channel is valid or not if valid move on Step 4
   * And Send device ID.
   */
  async forgotPasswordStep3(channel:string){
    let params = {
        channel: channel,
        deviceID : this.authService.getDeviceID()
      };
    return await this.requestAuthResponse('post', 'users/forgotPassword/step3', params)  
      
  }
  
  /**
   * Forget password step4 API function
   * Check entered secret code is valid or not.
   * Check entered password fulfill all validators if valid then Redirect to the Login Page.
   * And Send device ID.
   */
  async forgotPasswordStep4(resetCode:string,newPassword:string){
    let params = {
        resetCode: resetCode,
        newPassword: newPassword,
        deviceID : this.authService.getDeviceID()
      };
    return await this.requestAuthResponse('post', 'users/forgotPassword/step4', params)  
      
  }

  /**
   * Username reminder API function
   * Check entered email address is valid or not.
   * And Send device ID.
   * Check Captcha ID is required or not. If required then add in the bodydata.
   */
  async usernameReminder(email:string,captcha:any){
    let params = {
        deviceID : this.authService.getDeviceID()
      };
      if (captcha != null) params['captcha'] = captcha;
    return await this.requestAuthResponse('post', '/users/'+email+'/emails/usernameReminder', params)  
      
  }
  
  
  /**
   * Search Member API function
   * Check url parameter is not be blank.
   * And Pass the ID, page, and page size in the API.
   * And Call API and pass the bodydata.
   */
  async searchMember(lastname:string, dob:string, id:string, _page:any, _pageSize:any){
    var urlparams = '';
      if(id){
        var urlparams = 'id='+id+'&_page='+_page+'&_pageSize='+_pageSize;
      }else if(lastname && dob){
        var urlparams = 'lastname=s:'+lastname+'&dob='+dob+'&_page='+_page+'&_pageSize='+_pageSize;
      } 
      if(urlparams != ''){
        return await this.requestAuthResponse('get', 'members?'+urlparams, false) 
      }else{
        return null; 
      }
      
  }

  /**
   * Location Provider API function
   * Check url parameter is not be blank.
   * And Pass the ID, page, and page size in the API.
   * And Call API and pass the bodydata.
   */
  async locationProvider(id:string, _page:any, _pageSize:any){
    var urlparams1 = id+'&_page='+_page+'&_pageSize='+_pageSize;
    return await this.requestAuthResponse('get', 'providers/current/locations?'+urlparams1, false)
  }

  /**
   * Payment Provider API function
   * And Pass the ID, page, and page size in the API.
   * And Call API and pass the bodydata.
   */
  async paymentProvider(id:string, _page:any, _pageSize:any){
    var urlparams2 = id+'&_page='+_page+'&_pageSize='+_pageSize;
    return await this.requestAuthResponse('get', 'providers/current/payments?'+urlparams2, false)
  }

  /**
   * Payment Provider details API function
   * And Pass the ID, page, and page size in the API.
   * And Call API and pass the bodydata.
   */
  async paymentProviderDetails(id:string){
    return await this.requestAuthResponse('get', 'payments/'+id, false)
  }

}