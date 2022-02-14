import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder } from '@angular/forms'
import { NgRecaptcha3Service } from '../../services/ng-recaptcha3.service';
import { AuthService } from '../../services/auth.service';
import { ApiService } from '../../services/api.service';
import 'rxjs/add/operator/toPromise';
import { headers } from 'environments/environment';



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
    needCaptchaForSignIn:   boolean =   false;


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


    /**
     * Login function and redirect to the Dashboard
     * And check credentials is valid or not
     * and also show error messages on the UI
     */
//    async loginSubmit(model: User, isValid: boolean){
//         if(isValid){
//             this.loading = true;
//             this.submitted = true;
//             await this.recaptcha3.getToken().then(async (captcha)=> {
//                 await this.api.singIn(model.username, model.password).then(async (response) => {
//                         this.loading = false;
//                         console.log(response, 'data')
//                             if(response){
//                                 this.message = ""
//                                 this.destroyRecaptcha()
//                                 this.router.navigate(['provider'])
//                             }else{
//                             if(response.errorMessage){
//                                 this.message = response.errorMessage
//                             }else{
//                                 this.message = response.message
//                             }
//                             }
        
//     				});	
//                 })        
//             }            
//         }

    loginSubmit(model: User, isValid: boolean){
        if(isValid){
            this.loading = true;
            let headers = {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json'
                })
            }
            let bodydata = {
                email: model.username,
                password: model.password,
            }
            this.submitted = true;
            this.http.post('http://www.api.psd2htmlx.com/api/login', bodydata, headers).subscribe((result:any) => {
                this.loading = false;   
                this.router.navigate(['provider']) 
                this.auth.setToken(result.jwt)
            })
        }
    }

                
    // Destroy captcha function
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

    // Resend OTP when user want to new code and code expire.
    resendOTP(){
        this.sendOTP(this.option)

    }

    /**
     * Send OTP for forget Password to the registered mobile and email address.
     */
    async sendOTP(option){
         await this.api.forgotPasswordStep3(option).then(async (response) => {
                            if(response.isOK){
                            this.message = ""
                            this.forgotPassStep = 4;
                            this.forgotPassBtnText ='Submit';
                            this.loading = false;
                            this.submitted = false;
                            } else {
                                this.message = response.message;
                                this.loading = false;
                            }
                        
                    });  
    }

    /**
     * Forget Password function
     * Step 1
     * Check entered username is valid or not if valid move on the Step 2
     */
    async submitForgotPassword(model: ForgetPassword, isValid: boolean){
        this.submitted = true;
        if(isValid){
        this.loading = true;
        await this.recaptcha3.getToken().then(async(captcha) => {
            if(this.forgotPassStep ==1){  
                await this.api.forgotPasswordStep1(model.username,captcha).then(async (response) => {
                        if(response.isOK){
                            this.ques = response.params
                            this.message = ""
                            this.forgotPassStep = 2;
                            this.loading = false;
                            this.submitted = false;
                        } else{
                            this.message = response.message
                            this.loading = false;
                            
                        }
                 });
                
                }else if(this.forgotPassStep ==2){ 

                /**
                 * Step 2
                 * Check entered security answer is valid or not if valid move on the Step 3
                 */
                    
                await this.api.forgotPasswordStep2(this.ques[0],model.answer,captcha).then(async (response) => {
                        if(response.isOK){
                            this.cred = response.params
                            this.message = ""
                            this.forgotPassStep = 3;
                            this.loading = false;
                            this.submitted = false;
                        } else {
                            this.message = response.message;
                            this.loading = false;
                        }
                    
                    
                });

                }else if(this.forgotPassStep ==3){ 

                /**
                 * Step 3
                 * send OTP on selected communication medium and move on the Step 4
                 */

                    this.option =  Number(model.selectedOption)
                    this.sendOTP(this.option);

                }else if(this.forgotPassStep ==4){

                /**
                 * Step 4
                 * Check comfirm password is valid or not if valid move on the Step 5
                 */    
                if(model.newpassword != model.newpassword2){
                    this.message = "Password does not match";
                    this.loading = false;
                } else {

                /**
                 * Step 5
                 * Check entered fields or OTP is valid or not if valid redirect to the Dashboarde
                 */
                
                await this.api.forgotPasswordStep4(model.secretcode,model.newpassword).then(async (response) => {
                            if(response.isOK){
                            this.message = ""
                            this.destroyRecaptcha();
                            this.router.navigate(['provider'])
                        } else {
                            this.message = response.message;
                            this.loading = false;
                        }
                       
                     });
                            
                    }
                    
                }
            }, error => {
                this.loading = false;
                this.message = error.message   
                });
            }

}
    
   
    
    
    /**
     * Forget Username Function
     * Check entered email address is valid or not if valid move on the Step 1
     */
    async forgetUsername(model: ForgetPassword, isValid: boolean){
        if(isValid){
            this.loading = true;
            await this.recaptcha3.getToken().then(async (captcha) => {
                if(this.forgotUserstep ==1){
                
            /**
             * Forget Username Function
             * Send username to the entered email address and move on the step 2
             */
                    
            await this.api.usernameReminder(model.email,captcha).then(async (response) => {
                        if(response.isOK){
                        this.message = ""
                                this.loading = false;
                                this.forgotUserstep = 2;
                                this.forgetUserBtnText ='Done'
                        } else {
                            this.message = response.message;
                            this.loading = false;
                        }
                    
                    
                });
                    
                   
               }else if(this.forgotUserstep == 2){

            /**
             * Forget Username Function
             * After successfully send the Username on the registered email addres and redirect to the login page.
             */
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
