import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms'
import { NgRecaptcha3Service } from '../../services/ng-recaptcha3.service';
import { AuthService } from '../../services/auth.service';
import { ApiService } from '../../services/api.service';
import 'rxjs/add/operator/toPromise';



declare var $:any;
declare interface User {
    username?: string; //  must be valid email format
    password?: string; // required, value must be equal to confirm password.
    
}

declare interface ForgetPassword {
    username?: string;
    answer?: string; // required, value must be equal to confirm password.
    secretcode?: string;
    newpassword?: string;
    selectedOption?: string;
    email?: string;
    newpassword2?: string;
    
}

@Component({
    moduleId:module.id,
    selector: 'login-cmp',
    templateUrl: './login.component.html',
    // styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{
    message:                string  =   '';
    communicationChannel:   string  =   '';
    deviceID:               string  =   '';
    ques:                   string  =   '';
    cred:                   string  =   '';
    forgotPassBtnText:      string  =   'Next';
    forgetUserBtnText:      string  =   'Next';
    formName:               string  =   'login';
    passwordType:           string  =   'password';
    passwordType1:          string  =   'password';
    passwordType2:          string  =   'password';
    formHeading:            string  =   'WELCOME BACK';
    iconType:               string  =   'fa fa-eye-slash';
    iconType1:              string  =   'fa fa-eye-slash';
    iconType2:              string  =   'fa fa-eye-slash';
    submitted:              boolean =   false;
    forgotPassStep:         any     =   1;
    forgotUserstep:         any     =   1;
    username:               any     =   "";
    option:                 Number;


    private siteKey     = '6LdhHnodAAAAANT35rUOPEZ0TnF31D6qOqSfby81';
    public  loading     : boolean;
    public  login       : User;
    public  forgetPass  : ForgetPassword;
  

        focus;
        focus1;
        focus2;
        test : Date = new Date();
        private toggleButton;
        private sidebarVisible: boolean;
        private nativeElement:  Node;

    constructor(private element : ElementRef,
        private http: HttpClient, 
        private recaptcha3: NgRecaptcha3Service,
        private auth: AuthService,
        private router: Router,
        private formBuilder: FormBuilder,
        private api:ApiService) 
        {
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
        }
    checkFullPageBackgroundImage(){
        var $page = $('.full-page');
        var image_src = $page.data('image');

        if(image_src !== undefined){
            var image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>'
            $page.append(image_container);
        }
    };

   
    ngOnInit(){
    this.forgotPassStep     = 1;
    this.forgotUserstep     = 1;
    this.forgotPassBtnText  = 'Next';
    this.forgetUserBtnText  = 'Next'
    this.loading            = false;
    this.login = {
            username: '',
            password: '',
        }
    this.forgetPass = {
            answer: '',
            secretcode: '',
            newpassword: '',
            selectedOption: '',
            email: '',
            newpassword2: '',
        }

        this.recaptcha3.init(this.siteKey);

        this.checkFullPageBackgroundImage();
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');
        var navbar : HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];

        setTimeout(function(){
            // after 1000 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 700)
    }
    ngOnDestroy(){
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('login-page');
    }
    sidebarToggle(){
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        var sidebar = document.getElementsByClassName('navbar-collapse')[0];
        if(this.sidebarVisible == false){
            setTimeout(function(){
                toggleButton.classList.add('toggled');
            },500);
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        } else {
            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    }

    TogglePasswordType(){
        if(this.passwordType=='password' && this.iconType=='fa fa-eye-slash'){
            this.passwordType='text'
            this.iconType='fa fa-eye'
        }else{
            this.passwordType='password'
            this.iconType='fa fa-eye-slash'
            
        }
    }

    TogglePasswordType1(){
        if(this.passwordType1=='password' && this.iconType1=='fa fa-eye-slash'){
            this.passwordType1='text'
            this.iconType1='fa fa-eye'
        }else{
            this.passwordType1='password'
            this.iconType1='fa fa-eye-slash'
        }
    }

    TogglePasswordType2(){
        if(this.passwordType2=='password' && this.iconType2=='fa fa-eye-slash'){
            this.passwordType2='text'
            this.iconType2='fa fa-eye'
        }else{
            this.passwordType2='password'
            this.iconType2='fa fa-eye-slash'
        }
    }

    // Login function and redirect to the Dashboard
    
   async loginSubmit (model: User, isValid: boolean){
        if(isValid){
            this.loading = true;
            this.submitted = true;
            await this.api.authentication(model).then(async result =>{
                await result
                console.log(result,"dddddddddddddddddddddddd")
                console.log(result, "ddddddddddddddfgdfg")

            })// Data = {"result": {}, error:null}
            
            // if (authResult['result'] != null){
            //     let result = Data['result'] 
            //     if (result.isOK){
            //         this.auth.setToken(result.authData.accessToken)
            //             this.auth.setRefreshToken(result.authData.refreshToken)
            //             this.auth.setUser({
            //                 email: result.authData.email,
            //                 username: result.authData.username,
            //                 fullname: result.authData.fullName
            //             });
            //             this.message = ""
            //             window.location.href = 'dashboard'

            //     }else{
            //         this.loading = false;
            //     this.message = Data['result'].message
            //     }

            // }else{
            //     this.loading = false;
            //     this.message = Data['error'].message
            // }

            // this.recaptcha3.getToken().then(token => {
            //     let bodydata ={
            //     username :model.username,
            //     password :model.password,
            //     captcha: token,
            //     deviceID : this.auth.getDeviceID()
            //         };
            //     this.submitted = true;
            //     this.api.httpRequest('post', 'jwtSessions', bodydata,false).subscribe((result: any) => {
            //     this.submitted = false;
                  
            //         if(result.isOK){
            //             this.auth.setToken(result.authData.accessToken)
            //             this.auth.setRefreshToken(result.authData.refreshToken)
            //             this.auth.setUser({
            //                 email: result.authData.email,
            //                 username: result.authData.username,
            //                 fullname: result.authData.fullName
            //             });
            //             this.message = ""
            //             window.location.href = 'dashboard'
                    
            //         } else{
            //             this.loading = false;
            //             this.message = result.message
            //         }
            //         }, error => {
            //         this.loading = false;
            //         this.message = error.message
                       
            //         });
        
            //         }, error => {
            //             this.loading = false;
            //         this.message = error.message
            //         });
                
            }
                    
                }




    destroyRecaptcha() {
        this.recaptcha3.destroy();
      }


     // Redirect on the Forget Password Page
    forgetPassword(){
        this.submitted      =   false;
        this.loading        =   false;
        this.message        =   ""
        this.formName       =   'forgotPassForm';
        this.forgotPassStep =   1;
        this.formHeading    =   'FORGOT PASSWORD';
        
        
     }

    // Redirect on the Login Page
    loginRedirect(){
        this.message        =   ""
        this.formName       =   'login';
        this.loading        =   false;
        this.formHeading    =   'WELCOME BACK';
        
    }

    // Redirect on the Forget Username Form
    usernameRedirect(){
        this.forgotUserstep =   1;
        this.message        =   ""
        this.formName       =   'forgetUsername';
        this.loading        =   false;
        this.formHeading    =   'FORGOT USERNAME';
    }

    // Resend OTP
    resendOTP(){
        this.sendOTP(this.option)

    }

    // Send OTP
    sendOTP(option){
        this.recaptcha3.getToken().then(token => {
            let bodydata = {
                channel: option,
                deviceID: this.deviceID,
                captcha: token
                };  
                    this.api.httpRequest('post', 'users/forgotPassword/step3', bodydata,false).subscribe((result: any) => {
                        if(result.isOK){
                            this.message = ""
                            this.forgotPassStep = 4;
                            this.forgotPassBtnText ='Submit';
                            this.loading = false;
                            this.submitted = false;
                        } else {
                            this.message = result.message;
                            this.loading = false;
                        }
                    }, error => {
                this.loading = false;
                this.message = error.message
                   
                });

        }, error => {
            this.loading = false;
            this.message = error.message
               
            });

    }

    // Forget Password function
    submitForgotPassword(model: ForgetPassword, isValid: boolean){
        this.submitted = true;
        if(isValid){
        this.loading = true;
        
        this.recaptcha3.getToken().then(token => {
            this.deviceID = this.auth.getDeviceID()
            if(this.forgotPassStep ==1){  
                let bodydata ={
                    username :model.username,
                    captcha: token,
                    deviceID : this.deviceID
                    };
                        this.api.httpRequest('post', 'users/forgotPassword/step1', bodydata,false).subscribe((result: any) => {
                            if(result.isOK){
                                this.ques = result.params
                                this.message = ""
                                this.forgotPassStep = 2;
                                this.loading = false;
                                this.submitted = false;
                            } else{
                                this.message = result.message
                                this.loading = false;
                                
                            }
                            }, error => {
                                this.message = error.message;
                                this.loading = false;
                            });
                
                }
                
            if(this.forgotPassStep ==2){ 
                let bodydata = {
                    question: this.ques[0]+'',
                    captcha: token,
                    deviceID : this.deviceID,
                    answer: model.answer,
                    };
                        this.api.httpRequest('post', 'users/forgotPassword/step2', bodydata,false).subscribe((result: any) => {
                            if(result.isOK){
                                this.cred = result.params
                                this.message = ""
                                this.forgotPassStep = 3;
                                this.loading = false;
                                this.submitted = false;
                            } else {
                                this.message = result.message;
                                this.loading = false;
                            }
                        }, error => {
                    this.loading = false;
                    this.message = error.message
                       
                    });

                }


            if(this.forgotPassStep ==3){ 
                this.option =  Number(model.selectedOption)
                this.sendOTP(this.option);

                }
        
        
            if(this.forgotPassStep ==4){
                if(model.newpassword != model.newpassword2){
                    this.message = "Password does not match";
                    this.loading = false;
                } else {
                    let bodydata = {
                        deviceID: this.deviceID,
                        resetCode: model.secretcode,
                        newPassword: model.newpassword,
                        captcha: token
                        };
                            this.api.httpRequest('post', 'users/forgotPassword/step4', bodydata,false).subscribe((result: any) => {
                                if(result.isOK){
                                    this.message = ""
                                    this.auth.setToken(result.authData.accessToken)
                                    this.auth.setRefreshToken(result.authData.refreshToken)
                                    window.location.href = 'dashboard'
                                } else {
                                    this.message = result.message;
                                    this.loading = false;
                                }
                            }, error => {
                    this.loading = false;
                    this.message = error.message
                       
                    });
                        }
            
                    }
                 
                    }, error => {
                    this.loading = false;
                    this.message = error.message
                       
                    });
                    }
    
                }
    
   
    
    
    // Forget Username

    forgetUsername(model: ForgetPassword, isValid: boolean){
        if(isValid){
            this.loading = true;
            this.recaptcha3.getToken().then(token => {
                if(this.forgotUserstep ==1){
                    let bodydata = {
                        deviceID: this.auth.getDeviceID(),
                        captcha: token,
                        }; 
                            this.api.httpRequest('post', '/users/'+model.email+'/emails/usernameReminder', bodydata,false).subscribe((result: any) => {
                                if(result.isOK){
                                    this.message = ""
                                    this.loading = false;
                                    this.forgotUserstep = 2;
                                    this.forgetUserBtnText ='Done'

                                } else{
                                    this.loading = false;
                                    this.message = result.message
                                }
                            }, error => {
                    this.loading = false;
                    this.message = error.message
                       
                    });
                    }


                if(this.forgotUserstep == 2){
 						this.formName = 'login';
                        this.loading = false;
                }

                }, error => {
                    this.loading = false;
                    this.message = error.message
                       
                    });

                    }
            }

}



















import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { baseUrl, headers } from 'environments/environment';
import { NgRecaptcha3Service } from './ng-recaptcha3.service';

import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})

export class ApiService implements OnInit{
  incodeURL: any;
  apiheader: any;
  private siteKey     = '6LdhHnodAAAAANT35rUOPEZ0TnF31D6qOqSfby81';
  

 constructor(private http: HttpClient, private authService: AuthService, private recaptcha3: NgRecaptcha3Service,) { }

  ngOnInit(){
    this.recaptcha3.init(this.siteKey);
  }



 public httpRequest(method: string,url: string, data, withAuth) {
 
  if(data){
  this.incodeURL = this.incodedData(data)
  }
  
  if(withAuth){
    if(this.checkAccessToken()){
  	 this.apiheader = this.HeaderWithToken();
  	}else{
  	 window.location.href = 'login'
  	}
  }else{
  	this.apiheader = this.Header();
  }
  
  if(method =='post'){
  	return this.http.post(`${baseUrl}${url}`, this.incodeURL, this.apiheader)
  }else if(method =='put'){
  
  }else{
    
    return this.http.get(`${baseUrl}${url}`, this.apiheader);
  }
    
    
  }
  
  public checkAccessToken(){
  var AccessToken = this.authService.getAccessToken();
  if(AccessToken){
  var tokenData = jwt_decode(AccessToken);
  var _accessTokenCurrentTime = new Date();
  var _accessTokenExpTime = new Date(tokenData['exp'] * 1000);
  
  var seconds = Math.floor((_accessTokenExpTime.getTime() - _accessTokenCurrentTime.getTime())/ 1000) ;
  console.log(seconds)
  if(seconds < 5){
  	return this.refreshAccessToken();
  }else{
  	return true
  }
  
  }
 
  }
  
  
  public refreshAccessToken(){
    const url = 'jwtRefreshSessions';
    var data = {'refreshToken': this.authService.getRefreshToken(), 'deviceID': this.authService.getDeviceID()};
    const incodeURL = this.incodedData(data)
    return this.http.post<any>(`${baseUrl}${url}`, incodeURL, { headers: headers }).subscribe((result: any) => {
      if(result.isOK){
     	 this.authService.setToken(result.authData.accessToken)
     	 this.authService.setRefreshToken(result.authData.refreshToken)
     	 return true;
      }else{
      return false;
      }
      
    })
  }
  
  
  public HeaderWithToken() {
    let header = new HttpHeaders();
    header = header.append('Authorization', 'Bearer ' + this.authService.getAccessToken());
    return { headers: header };
  }
  public Header() {
    return { headers: headers };
  }
  
  public incodedData(data){
    const toUrlEncoded = obj => Object.keys(obj).map(
      k => encodeURIComponent(k) + '=' + encodeURIComponent(obj[k])).join('&');
      return(toUrlEncoded(data))
  }

  async authentication(model): Promise<any>{
    let data = {"result":null, "error":null}
        this.recaptcha3.getToken().then(token => {
            let bodydata ={
            username :model.username,
            password :model.password,
            captcha: token,
            deviceID : this.authService.getDeviceID()
                };
            this.httpRequest('post', 'jwtSessions', bodydata,false).subscribe((result: any) => {
      
                      data.result= result
                      return data
               
                }, error => {
  
                  data.error= error
                  return data
                });
    
                }, error => {
                  data.error = error
                  return data
                });
            
                
            }
  
}
