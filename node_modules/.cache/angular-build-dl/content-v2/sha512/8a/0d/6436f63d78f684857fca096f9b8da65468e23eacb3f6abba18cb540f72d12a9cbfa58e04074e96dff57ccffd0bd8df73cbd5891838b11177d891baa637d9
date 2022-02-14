(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sign-pages-module"],{

/***/ "+3qj":
/*!***************************************!*\
  !*** ./src/app/sign/pages.routing.ts ***!
  \***************************************/
/*! exports provided: PagesRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesRoutes", function() { return PagesRoutes; });
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.component */ "k6U5");

const PagesRoutes = [{
        path: '',
        children: [{
                path: 'login',
                component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"]
            }
        ]
    }];


/***/ }),

/***/ "5S1J":
/*!**************************************!*\
  !*** ./src/app/sign/pages.module.ts ***!
  \**************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _pages_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages.routing */ "+3qj");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register.component */ "l53n");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "k6U5");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









let PagesModule = class PagesModule {
};
PagesModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_pages_routing__WEBPACK_IMPORTED_MODULE_5__["PagesRoutes"]),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ],
        declarations: [
            _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
            _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
        ]
    })
], PagesModule);



/***/ }),

/***/ "E3PI":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sign/login/login.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<style>\n  .form-control{border-color:#DDDDDD!important;}\n  .input-group .form-control:not(:first-child):not(:last-child), .input-group-btn:not(:first-child):not(:last-child){\n      border-top-right-radius: 0!important;\n       border-bottom-right-radius: 0!important; \n  }\n  h4.header{margin-top:0px;}\n  small, .small {\n      margin-bottom: 10px;\n      float: left;\n  }\n  </style>\n  <nav class=\"navbar navbar-expand-lg navbar-absolute fixed-top navbar\">\n    <div class=\"container\" >\n      <div class=\"navbar-wrapper\">\n        <div class=\"navbar-toggle\" (click)=\"sidebarToggle()\">\n          <button type=\"button\" class=\"navbar-toggler\">\n            <span class=\"navbar-toggler-bar bar1\"></span>\n            <span class=\"navbar-toggler-bar bar2\"></span>\n            <span class=\"navbar-toggler-bar bar3\"></span>\n          </button>\n        </div>\n        <img src=\"./assets/img/logo(1).png\" alt=\"image\" style=\"margin: 20px; height: 50px;\">\n      </div>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navigation\" aria-controls=\"navigation-index\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n        <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n        <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse justify-content-end\" id=\"navigation\">\n      </div>\n    </div>\n  </nav>\n  <div class=\"text-white bg-dark\">\n  <div class=\"wrapper wrapper-full-page\">\n    <div class=\"full-page\" style=\"color: #1e4b63\">\n      <div class=\"content\">\n        <div class=\"container\">\n          <div class=\"col-lg-4 col-md-6 ml-auto mr-auto\">\n  \n            <div class=\"card card-login\">\n              <div class=\"card-header \">\n                <div class=\"card-header \">\n                  <h4 class=\"header text-center\">{{this.formHeading}}</h4>\n                </div>\n              </div>\n  \n            <!-- login form -->\n            <div *ngIf=\"formName=='login'\">\n            <form #f1=\"ngForm\" novalidate  (ngSubmit)=\"loginSubmit(f1.value, f1.valid)\">\n              \n                <div class=\"card-body \">\n                  <div class=\"input-group\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\">\n                        <i class=\"nc-icon nc-single-02\"></i>\n                      </span>\n                    </div>\n                   <input type=\"text\" class=\"form-control\" name=\"username\" [ngModel]=\"login.username\" required  #username=\"ngModel\" placeholder=\"Username\">\n                   \n                  </div>\n                  <small [hidden]=\"username.valid || (username.pristine && !f1.submitted)\" class=\"text-danger\">\n                                    Username is required.\n                                  </small>\n                  <div class=\"input-group mb-3\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\">\n                        <i class=\"nc-icon nc-lock-circle-open\"></i>\n                      </span>\n                    </div>\n                     <input type=\"{{this.passwordType}}\" class=\"form-control\" name=\"password\"  [ngModel]=\"login.password\" required validateEqual=\"confirmPassword\" reverse=\"true\" #password=\"ngModel\" placeholder=\"Password\">\n                     <div class=\"input-group-append\">\n                      <span class=\"input-group-text\">\n                        <i class=\"{{this.iconType}}\" style=\"margin-left: 4px;\" (click)=\"TogglePasswordType()\"></i>\n                      </span>\n                    </div>\n                    </div>\n                   <small [hidden]=\"password.valid || (password.pristine && !f1.submitted)\" class=\"text-danger\">\n                                    Password is required\n                                  </small>\n                    <div style=\"text-align: right; font-size: small;\">\n                        <a href=\"#\" (click)=\"forgetPassword()\">Forgot Password?</a>\n                  </div>\n                  \n                  \n                </div>\n               \n  \n                <div class=\"card-footer\">\n                <small class=\"text-danger\">{{this.message}}</small>\n                  <div *ngIf=\"loading\"><button class=\"btn btn-warning btn-round btn-block mb-3\">\n                  <i class=\"fa fa-spinner fa-spin\"  style=\"align-items: center;\"></i></button>\n                  </div>\n                   <div *ngIf=\"!loading\">\n                   <button type=\"submit\" class=\"btn btn-warning btn-round btn-block mb-3\">Sign in</button>\n                   </div>\n                </div>\n  \n            </form>\n            </div>\n            <!-- end -->\n  \n            <!-- forget password form -->\n            <div *ngIf=\"formName=='forgotPassForm'\">\n                <form #f2=\"ngForm\" novalidate  (ngSubmit)=\"submitForgotPassword(f2.value, f2.valid)\">\n  \n                   \n                    <div style=\"text-align: right; font-size: small; padding-right: 4%; color: darkgray;\">\n                      <span>Step {{this.forgotPassStep}}/4</span>\n                  </div>\n                    \n                    <div *ngIf=\"forgotPassStep==1\">\n                    <div class=\"card-body \">\n                      \n                      <div class=\"input-group\">\n                        \n                        <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\">\n                            <i class=\"nc-icon nc-single-02\"></i>\n                          </span>\n                        </div>\n                       <input type=\"text\" class=\"form-control\" name=\"username\" [ngModel]=\"login.username\" required  #username=\"ngModel\" placeholder=\"Username\">\n                       \n                      </div>\n                      <small [hidden]=\"username.valid || (username.pristine && !submitted)\" class=\"text-danger\">\n                          Username is required.\n                      </small>\n                     \n                      \n                      <div style=\"text-align: right; font-size: small;\">\n                        <a href=\"#\" (click)=\"usernameRedirect()\">Forgot Username?</a>\n                      </div>\n                      \n                    </div>\n                    </div>\n                    \n                    <div *ngIf=\"forgotPassStep==2\">\n                    <span style=\"padding-left: 5%;\">Answer Your Secret Question</span>\n                    <div class=\"card-body \">\n                  \n                     <div class=\"input\" style=\"margin-bottom:10px;\">\n                       <select class=\"form-control\">\n                          <option value=`{{this.ques[0]}}` aria-readonly=\"true\">{{this.ques[1]}}</option>\n                      </select>\n                    </div>\n                  \n                    <div class=\"input-group\">\n                      <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\">\n                          <i class=\"nc-icon nc-bulb-63\"></i>\n                        </span>\n                      </div>\n                     <input ype=\"text\" class=\"form-control\" name=\"answer\" [ngModel]=\"forgetPass.answer\" required  #answer=\"ngModel\" placeholder=\"Answer\" autocomplete=\"off\">    \n                    </div>\n                    <small [hidden]=\"answer.valid || (answer.pristine && !submitted)\" class=\"text-danger\">\n                      Answer is required.\n                    </small>\n  \n                  <div style=\"text-align: right; font-size: small;\">\n                    <a href=\"#\" (click)=\"loginRedirect()\">Sign in</a>\n                </div>\n  \n                </div>\n                    </div>\n                    \n                    <div *ngIf=\"forgotPassStep==3\">\n                    \n                    <span style=\"padding-left: 5%;\">Receive Verification Code</span>\n                  <div class=\"card-body\">\n                          <input type=\"radio\" id=\"css\" name=\"selectedOption\" [ngModel]=\"forgetPass.selectedOption\" required  #selectedOption=\"ngModel\" value=1 style=\"margin-top: 10px;\">\n                          <label for=\"css\" style=\"color: black; font-size: 0.971em;\"> Email to address {{this.cred[0]}}</label><br>\n                          <input type=\"radio\" id=\"javascript\" name=\"selectedOption\" [ngModel]=\"forgetPass.selectedOption\" required  #selectedOption=\"ngModel\" value=2>\n                          <label for=\"javascript\" style=\"color: black; font-size: 0.981em;\">SMS to phone number {{this.cred[1]}}</label>\n  \n                    <div style=\"text-align: right; font-size: small;\">\n                      <a href=\"#\" (click)=\"loginRedirect()\">Sign in</a>\n                  </div>\n                  <small [hidden]=\"selectedOption.valid || (selectedOption.pristine && !submitted)\" class=\"text-danger\">\n                    Please Select..\n                  </small>\n  \n                  </div>\n                  \n                    \n                    </div>\n                    \n                    <div *ngIf=\"forgotPassStep==4\">\n                    <span style=\"padding: 5%;float:left;width:100%;text-align:left;font-size:12px;\">Please retrieve the security code form your email account. Remember to check your spam folder if you cannot see the message in your inbox.</span>\n                    <div class=\"card-body \">\n                      <div class=\"input-group\">\n                        <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\">\n                            <i class=\"nc-icon nc-key-25\"></i>\n                          </span>\n                        </div>\n                       <input type=\"text\" class=\"form-control\" name=\"secretcode\" [ngModel]=\"forgetPass.secretcode\" required  #secretcode=\"ngModel\" placeholder=\"Secret Code\">\n                      </div>\n                      <small [hidden]=\"secretcode.valid || (secretcode.pristine && !submitted)\" class=\"text-danger\">\n                        Secret Code is required.\n                      </small>\n  \n                      <div style=\"text-align: right; font-size: small;\">\n                         <button type=\"button\" (click)=\"resendOTP()\" style=\"border: 0px;background: none;color:#3D5A80;margin-bottom:10px;\">Resend OTP</button>\n                      </div>\n  \n                      <div class=\"input-group mb-3\" >\n                        <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\">\n                            <i class=\"nc-icon nc-lock-circle-open\"></i>\n                          </span>\n                        </div>\n                         <input type=\"{{this.passwordType1}}\" onCopy=\"return false\" onPaste=\"return false\" class=\"form-control\" name=\"newpassword\" [ngModel]=\"forgetPass.newpassword\" required  #newpassword=\"ngModel\" placeholder=\"New Password\">\n                         <div class=\"input-group-append\">\n                          <span class=\"input-group-text\">\n                            <i class=\"{{this.iconType1}}\" style=\"margin-left: 4px;\" (click)=\"TogglePasswordType1()\"></i>\n                          </span>\n                        </div>\n                        </div>\n                      <small [hidden]=\"newpassword.valid || (newpassword.pristine &&  !submitted)\" class=\"text-danger\">\n                        New Password is required.\n                      </small>\n                      \n                      <!-- confirm Password -->\n                      <div class=\"input-group\"  [ngClass]=\"{'input-group-focus':focus2===true}\">\n                        <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\">\n                            <i class=\"nc-icon nc-lock-circle-open\"></i>\n                          </span>\n                        </div>\n                         <input type=\"{{this.passwordType2}}\" onCopy=\"return false\" onPaste=\"return false\" class=\"form-control\" name=\"newpassword2\" [ngModel]=\"forgetPass.newpassword2\" required  #newpassword2=\"ngModel\" placeholder=\"Confirm Password\">\n                         <div class=\"input-group-append\">\n                          <span class=\"input-group-text\">\n                            <i class=\"{{this.iconType2}}\" style=\"margin-left: 4px;\" (click)=\"TogglePasswordType2()\"></i>\n                          </span>\n                        </div>\n                        </div>\n                      <small [hidden]=\"newpassword2.valid || (newpassword2.pristine  && !submitted)\" class=\"text-danger\">\n                        Confirm Password is required.\n                      </small>\n  \n                      <div style=\"text-align: right; font-size: small;\">\n                        <a href=\"#\" (click)=\"loginRedirect()\">Sign in</a>\n                    </div>\n  \n                    </div>\n                    </div>\n                  \n                    \n                    \n                    <div class=\"card-footer\">\n                    <small class=\"text-danger\">{{this.message}}</small>\n                    \n                      <div *ngIf=\"loading\"><button class=\"btn btn-warning btn-round btn-block mb-3\">\n                      <i class=\"fa fa-spinner fa-spin\"  style=\"align-items: center;\"></i></button>\n                      </div>\n                       <div *ngIf=\"!loading\">\n                       <button type=\"submit\" class=\"btn btn-warning btn-round btn-block mb-3\">{{this.forgotPassBtnText}}</button>\n                       </div>\n                    </div>\n  \n                </form>\n            </div>\n            <!-- end -->\n  \n            <!-- Forget Username -->\n            <div *ngIf=\"formName=='forgetUsername'\">\n              <form #f6=\"ngForm\" (ngSubmit)=\"forgetUsername(f6.value, f6.valid)\">\n   \n                  \n                  <div style=\"text-align: right; font-size: small; padding-right: 4%; color: darkgray;\">\n                    <span>Step {{this.forgotUserstep}}/2</span>\n                </div>\n                <div *ngIf=\"forgotUserstep==1\">\n                <div class=\"card-body\">\n                    <div class=\"input-group\">\n                      <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\">\n                          <i class=\"nc-icon nc-email-85\"></i>\n                        </span>\n                      </div>\n                     <input type=\"email\" class=\"form-control\" name=\"email\" [email]=\"true\" [ngModel]=\"forgetPass.email\" required  #email=\"ngModel\" placeholder=\"Email Address\" autocomplete=\"off\">    \n                    </div>\n                    <small [hidden]=\"email.valid || (email.pristine && !f6.submitted)\" class=\"text-danger\">\n                      Please enter valid email into Email field.\n                    </small>\n  \n                  <div style=\"text-align: right; font-size: small;\">\n                    <a href=\"#\" (click)=\"loginRedirect()\">Sign in</a>\n                </div>\n  \n                </div>\n              </div>\n  \n                <div *ngIf=\"forgotUserstep==2\">\n                <div class=\"card-body\">\n                  <span>Check your email for a message from Vision Care Direct\n                    containing your username.</span>\n                </div>\n                </div>\n                \n                  \n  \n                  <div class=\"card-footer\">\n                  <small class=\"text-danger\">{{this.message}}</small>\n                    <div *ngIf=\"loading\"><button class=\"btn btn-warning btn-round btn-block mb-3\">\n                    <i class=\"fa fa-spinner fa-spin\"  style=\"align-items: center;\"></i></button>\n                    </div>\n                     <div *ngIf=\"!loading\">\n                     <button type=\"submit\" class=\"btn btn-warning btn-round btn-block mb-3\">{{this.forgetUserBtnText}}</button>\n                     </div>\n                  </div>\n  \n              </form>\n            </div>\n            <!-- end -->\n  \n            </div>\n            \n          </div>\n        </div>\n      </div>\n      <footer class=\"footer footer-black  footer-white \">\n        <div class=\"container\">\n          <div class=\"row\">\n            <nav class=\"footer-nav\">\n              <span class=\"copyright\" style=\"font-size: small;\">\n                VCD Customer Service | 405 S Holland, Suite A | Wichita, KS 67209<i class=\"\"></i> \n              </span>\n            </nav>\n            <div class=\"credits ml-auto\">\n              <span class=\"copyright\">\n                &copy; 2021 Vision Care Direct. All Rights Reserved.<i class=\"\"></i> \n              </span>\n            </div>\n          </div>\n        </div>\n      </footer>\n    </div>\n  </div>\n  </div>");

/***/ }),

/***/ "EUDy":
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/add/operator/toPromise.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! rxjs-compat/add/operator/toPromise */ "XC4j");
//# sourceMappingURL=toPromise.js.map

/***/ }),

/***/ "G0e5":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sign/register/register.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent\">\n  <div class=\"container\">\n    <div class=\"navbar-wrapper\">\n      <div class=\"navbar-toggle\" (click)=\"sidebarToggle()\">\n        <button type=\"button\" class=\"navbar-toggler\">\n          <span class=\"navbar-toggler-bar bar1\"></span>\n          <span class=\"navbar-toggler-bar bar2\"></span>\n          <span class=\"navbar-toggler-bar bar3\"></span>\n        </button>\n      </div>\n      <a class=\"navbar-brand\" routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\">Paper Dashboard PRO Angular</a>\n    </div>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navigation\" aria-controls=\"navigation-index\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse justify-content-end\" id=\"navigation\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n          <a routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\" class=\"nav-link\">\n            <i class=\"nc-icon nc-layout-11\"></i> Dashboard\n          </a>\n        </li>\n        <li class=\"nav-item \">\n          <a routerLinkActive=\"active\" [routerLink]=\"['/pages/register']\" class=\"nav-link\">\n            <i class=\"nc-icon nc-book-bookmark\"></i> Register\n          </a>\n        </li>\n        <li class=\"nav-item \">\n          <a routerLinkActive=\"active\" [routerLink]=\"['/pages/login']\"  class=\"nav-link\">\n            <i class=\"nc-icon nc-tap-01\"></i> Login\n          </a>\n        </li>\n        <li class=\"nav-item \">\n          <a routerLinkActive=\"active\" [routerLink]=\"['/pages/user']\" class=\"nav-link\">\n            <i class=\"nc-icon nc-satisfied\"></i> User\n          </a>\n        </li>\n        <li class=\"nav-item  active \">\n          <a routerLinkActive=\"active\" [routerLink]=\"['/pages/lock']\" class=\"nav-link\">\n            <i class=\"nc-icon nc-key-25\"></i> Lock\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<div class=\"wrapper wrapper-full-page \">\n  <div class=\"full-page register-page section-image\" filter-color=\"black\" data-image=\"./assets/img/bg/jan-sendereks.jpg\">\n    <div class=\"content\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-lg-5 col-md-5 ml-auto\">\n            <div class=\"info-area info-horizontal mt-5\">\n              <div class=\"icon icon-primary\">\n                <i class=\"nc-icon nc-tv-2\"></i>\n              </div>\n              <div class=\"description\">\n                <h5 class=\"info-title\">Marketing</h5>\n                <p class=\"description\">\n                  We've created the marketing campaign of the website. It was a very interesting collaboration.\n                </p>\n              </div>\n            </div>\n            <div class=\"info-area info-horizontal\">\n              <div class=\"icon icon-primary\">\n                <i class=\"nc-icon nc-html5\"></i>\n              </div>\n              <div class=\"description\">\n                <h5 class=\"info-title\">Fully Coded in HTML5</h5>\n                <p class=\"description\">\n                  We've developed the website with HTML5 and CSS3. The client has access to the code using GitHub.\n                </p>\n              </div>\n            </div>\n            <div class=\"info-area info-horizontal\">\n              <div class=\"icon icon-info\">\n                <i class=\"nc-icon nc-atom\"></i>\n              </div>\n              <div class=\"description\">\n                <h5 class=\"info-title\">Built Audience</h5>\n                <p class=\"description\">\n                  There is also a Fully Customizable CMS Admin Dashboard for this product.\n                </p>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-lg-4 col-md-6 mr-auto\">\n            <div class=\"card card-signup text-center\">\n              <div class=\"card-header \">\n                <h4 class=\"card-title\">Register</h4>\n                <div class=\"social\">\n                  <button class=\"btn btn-icon btn-round btn-twitter\">\n                    <i class=\"fa fa-twitter\"></i>\n                  </button>\n                  <button class=\"btn btn-icon btn-round btn-dribbble\">\n                    <i class=\"fa fa-dribbble\"></i>\n                  </button>\n                  <button class=\"btn btn-icon btn-round btn-facebook\">\n                    <i class=\"fa fa-facebook-f\"></i>\n                  </button>\n                  <p class=\"card-description\"> or be classical </p>\n                </div>\n              </div>\n              <div class=\"card-body \">\n                <form class=\"form\" method=\"\" action=\"\">\n                  <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\">\n                        <i class=\"nc-icon nc-single-02\"></i>\n                      </span>\n                    </div>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"First Name...\" (focus)=\"focus=true\" (blur)=\"focus=false\">\n                  </div>\n                  <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus1===true}\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\">\n                        <i class=\"nc-icon nc-circle-10\"></i>\n                      </span>\n                    </div>\n                    <input type=\"text\" placeholder=\"Last Name...\" class=\"form-control\" (focus)=\"focus1=true\" (blur)=\"focus1=false\">\n                  </div>\n                  <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus2===true}\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\">\n                        <i class=\"nc-icon nc-email-85\"></i>\n                      </span>\n                    </div>\n                    <input type=\"email\" class=\"form-control\" placeholder=\"Email...\" (focus)=\"focus2=true\" (blur)=\"focus2=false\">\n                  </div>\n                  <div class=\"form-check text-left\">\n                    <label class=\"form-check-label\">\n                      <input class=\"form-check-input\" type=\"checkbox\" checked>\n                      <span class=\"form-check-sign\"></span>\n                      I agree to the\n                      <a href=\"#something\">terms and conditions</a>.\n                    </label>\n                  </div>\n                </form>\n              </div>\n              <div class=\"card-footer \">\n                <a href=\"javascript:void(0)\" class=\"btn btn-info btn-round\">Get Started</a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <footer class=\"footer footer-black  footer-white \">\n      <div class=\"container\">\n        <div class=\"row\">\n          <nav class=\"footer-nav\">\n            <ul>\n              <li>\n                <a href=\"https://www.creative-tim.com\" target=\"_blank\">Creative Tim</a>\n              </li>\n              <li>\n                <a href=\"http://blog.creative-tim.com/\" target=\"_blank\">Blog</a>\n              </li>\n              <li>\n                <a href=\"https://www.creative-tim.com/license\" target=\"_blank\">Licenses</a>\n              </li>\n            </ul>\n          </nav>\n          <div class=\"credits ml-auto\">\n            <span class=\"copyright\">\n              &copy; {{test | date: 'yyyy'}}, made with <i class=\"fa fa-heart heart\"></i> by Creative Tim\n            </span>\n          </div>\n        </div>\n      </div>\n    </footer>\n  </div>\n</div>\n");

/***/ }),

/***/ "XC4j":
/*!************************************************************!*\
  !*** ./node_modules/rxjs-compat/add/operator/toPromise.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// HACK: does nothing, because `toPromise` now lives on the `Observable` itself.
// leaving this module here to prevent breakage.
//# sourceMappingURL=toPromise.js.map

/***/ }),

/***/ "k6U5":
/*!***********************************************!*\
  !*** ./src/app/sign/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./login.component.html */ "E3PI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_ng_recaptcha3_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/ng-recaptcha3.service */ "uLhy");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/auth.service */ "lGQG");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/api.service */ "H+bZ");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "EUDy");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_8__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};









let LoginComponent = class LoginComponent {
    constructor(element, http, recaptcha3, auth, router, formBuilder, api) {
        this.element = element;
        this.http = http;
        this.recaptcha3 = recaptcha3;
        this.auth = auth;
        this.router = router;
        this.formBuilder = formBuilder;
        this.api = api;
        this.message = '';
        this.communicationChannel = '';
        this.deviceID = '';
        this.ques = '';
        this.cred = '';
        this.forgotPassBtnText = 'Next';
        this.forgetUserBtnText = 'Next';
        this.formName = 'login';
        this.passwordType = 'password';
        this.passwordType1 = 'password';
        this.passwordType2 = 'password';
        this.formHeading = 'WELCOME BACK';
        this.iconType = 'fa fa-eye-slash';
        this.iconType1 = 'fa fa-eye-slash';
        this.iconType2 = 'fa fa-eye-slash';
        this.submitted = false;
        this.forgotPassStep = 1;
        this.forgotUserstep = 1;
        this.username = "";
        this.needCaptchaForSignIn = false;
        this.siteKey = '6LdhHnodAAAAANT35rUOPEZ0TnF31D6qOqSfby81';
        this.test = new Date();
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }
    checkFullPageBackgroundImage() {
        var $page = $('.full-page');
        var image_src = $page.data('image');
        if (image_src !== undefined) {
            var image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>';
            $page.append(image_container);
        }
    }
    ;
    ngOnInit() {
        this.forgotPassStep = 1;
        this.forgotUserstep = 1;
        this.forgotPassBtnText = 'Next';
        this.forgetUserBtnText = 'Next';
        this.loading = false;
        this.login = {
            username: '',
            password: '',
        };
        this.forgetPass = {
            answer: '',
            secretcode: '',
            newpassword: '',
            selectedOption: '',
            email: '',
            newpassword2: '',
        };
        this.recaptcha3.init(this.siteKey);
        this.checkFullPageBackgroundImage();
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        setTimeout(function () {
            // after 1000 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 700);
    }
    ngOnDestroy() {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('login-page');
    }
    sidebarToggle() {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        var sidebar = document.getElementsByClassName('navbar-collapse')[0];
        if (this.sidebarVisible == false) {
            setTimeout(function () {
                toggleButton.classList.add('toggled');
            }, 500);
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        }
        else {
            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    }
    TogglePasswordType() {
        if (this.passwordType == 'password' && this.iconType == 'fa fa-eye-slash') {
            this.passwordType = 'text';
            this.iconType = 'fa fa-eye';
        }
        else {
            this.passwordType = 'password';
            this.iconType = 'fa fa-eye-slash';
        }
    }
    TogglePasswordType1() {
        if (this.passwordType1 == 'password' && this.iconType1 == 'fa fa-eye-slash') {
            this.passwordType1 = 'text';
            this.iconType1 = 'fa fa-eye';
        }
        else {
            this.passwordType1 = 'password';
            this.iconType1 = 'fa fa-eye-slash';
        }
    }
    TogglePasswordType2() {
        if (this.passwordType2 == 'password' && this.iconType2 == 'fa fa-eye-slash') {
            this.passwordType2 = 'text';
            this.iconType2 = 'fa fa-eye';
        }
        else {
            this.passwordType2 = 'password';
            this.iconType2 = 'fa fa-eye-slash';
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
    loginSubmit(model, isValid) {
        if (isValid) {
            this.loading = true;
            let headers = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                    'Content-Type': 'application/json'
                })
            };
            let bodydata = {
                email: model.username,
                password: model.password,
            };
            this.submitted = true;
            this.http.post('http://www.api.psd2htmlx.com/api/login', bodydata, headers).subscribe((result) => {
                this.loading = false;
                this.router.navigate(['provider']);
                this.auth.setToken(result.jwt);
            });
        }
    }
    // Destroy captcha function
    destroyRecaptcha() {
        this.recaptcha3.destroy();
    }
    // Redirect on the Forget Password Page
    forgetPassword() {
        this.submitted = false;
        this.loading = false;
        this.message = "";
        this.formName = 'forgotPassForm';
        this.forgotPassStep = 1;
        this.formHeading = 'FORGOT PASSWORD';
    }
    // Redirect on the Login Page
    loginRedirect() {
        this.message = "";
        this.formName = 'login';
        this.loading = false;
        this.formHeading = 'WELCOME BACK';
    }
    // Redirect on the Forget Username Form
    usernameRedirect() {
        this.forgotUserstep = 1;
        this.message = "";
        this.formName = 'forgetUsername';
        this.loading = false;
        this.formHeading = 'FORGOT USERNAME';
    }
    // Resend OTP when user want to new code and code expire.
    resendOTP() {
        this.sendOTP(this.option);
    }
    /**
     * Send OTP for forget Password to the registered mobile and email address.
     */
    sendOTP(option) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.api.forgotPasswordStep3(option).then((response) => __awaiter(this, void 0, void 0, function* () {
                if (response.isOK) {
                    this.message = "";
                    this.forgotPassStep = 4;
                    this.forgotPassBtnText = 'Submit';
                    this.loading = false;
                    this.submitted = false;
                }
                else {
                    this.message = response.message;
                    this.loading = false;
                }
            }));
        });
    }
    /**
     * Forget Password function
     * Step 1
     * Check entered username is valid or not if valid move on the Step 2
     */
    submitForgotPassword(model, isValid) {
        return __awaiter(this, void 0, void 0, function* () {
            this.submitted = true;
            if (isValid) {
                this.loading = true;
                yield this.recaptcha3.getToken().then((captcha) => __awaiter(this, void 0, void 0, function* () {
                    if (this.forgotPassStep == 1) {
                        yield this.api.forgotPasswordStep1(model.username, captcha).then((response) => __awaiter(this, void 0, void 0, function* () {
                            if (response.isOK) {
                                this.ques = response.params;
                                this.message = "";
                                this.forgotPassStep = 2;
                                this.loading = false;
                                this.submitted = false;
                            }
                            else {
                                this.message = response.message;
                                this.loading = false;
                            }
                        }));
                    }
                    else if (this.forgotPassStep == 2) {
                        /**
                         * Step 2
                         * Check entered security answer is valid or not if valid move on the Step 3
                         */
                        yield this.api.forgotPasswordStep2(this.ques[0], model.answer, captcha).then((response) => __awaiter(this, void 0, void 0, function* () {
                            if (response.isOK) {
                                this.cred = response.params;
                                this.message = "";
                                this.forgotPassStep = 3;
                                this.loading = false;
                                this.submitted = false;
                            }
                            else {
                                this.message = response.message;
                                this.loading = false;
                            }
                        }));
                    }
                    else if (this.forgotPassStep == 3) {
                        /**
                         * Step 3
                         * send OTP on selected communication medium and move on the Step 4
                         */
                        this.option = Number(model.selectedOption);
                        this.sendOTP(this.option);
                    }
                    else if (this.forgotPassStep == 4) {
                        /**
                         * Step 4
                         * Check comfirm password is valid or not if valid move on the Step 5
                         */
                        if (model.newpassword != model.newpassword2) {
                            this.message = "Password does not match";
                            this.loading = false;
                        }
                        else {
                            /**
                             * Step 5
                             * Check entered fields or OTP is valid or not if valid redirect to the Dashboarde
                             */
                            yield this.api.forgotPasswordStep4(model.secretcode, model.newpassword).then((response) => __awaiter(this, void 0, void 0, function* () {
                                if (response.isOK) {
                                    this.message = "";
                                    this.destroyRecaptcha();
                                    this.router.navigate(['provider']);
                                }
                                else {
                                    this.message = response.message;
                                    this.loading = false;
                                }
                            }));
                        }
                    }
                }), error => {
                    this.loading = false;
                    this.message = error.message;
                });
            }
        });
    }
    /**
     * Forget Username Function
     * Check entered email address is valid or not if valid move on the Step 1
     */
    forgetUsername(model, isValid) {
        return __awaiter(this, void 0, void 0, function* () {
            if (isValid) {
                this.loading = true;
                yield this.recaptcha3.getToken().then((captcha) => __awaiter(this, void 0, void 0, function* () {
                    if (this.forgotUserstep == 1) {
                        /**
                         * Forget Username Function
                         * Send username to the entered email address and move on the step 2
                         */
                        yield this.api.usernameReminder(model.email, captcha).then((response) => __awaiter(this, void 0, void 0, function* () {
                            if (response.isOK) {
                                this.message = "";
                                this.loading = false;
                                this.forgotUserstep = 2;
                                this.forgetUserBtnText = 'Done';
                            }
                            else {
                                this.message = response.message;
                                this.loading = false;
                            }
                        }));
                    }
                    else if (this.forgotUserstep == 2) {
                        /**
                         * Forget Username Function
                         * After successfully send the Username on the registered email addres and redirect to the login page.
                         */
                        this.formName = 'login';
                        this.loading = false;
                    }
                }), error => {
                    this.loading = false;
                    this.message = error.message;
                });
            }
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _services_ng_recaptcha3_service__WEBPACK_IMPORTED_MODULE_5__["NgRecaptcha3Service"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"] }
];
LoginComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'login-cmp',
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
    }),
    __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
        _services_ng_recaptcha3_service__WEBPACK_IMPORTED_MODULE_5__["NgRecaptcha3Service"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"]])
], LoginComponent);



/***/ }),

/***/ "l53n":
/*!*****************************************************!*\
  !*** ./src/app/sign/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./register.component.html */ "G0e5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let RegisterComponent = class RegisterComponent {
    constructor(element) {
        this.element = element;
        this.test = new Date();
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }
    checkFullPageBackgroundImage() {
        var $page = $('.full-page');
        var image_src = $page.data('image');
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('register-page');
        if (image_src !== undefined) {
            var image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>';
            $page.append(image_container);
        }
    }
    ;
    ngOnInit() {
        this.checkFullPageBackgroundImage();
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        setTimeout(function () {
            // after 1000 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 700);
    }
    ngOnDestroy() {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('register-page');
    }
    sidebarToggle() {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        var sidebar = document.getElementsByClassName('navbar-collapse')[0];
        if (this.sidebarVisible == false) {
            setTimeout(function () {
                toggleButton.classList.add('toggled');
            }, 500);
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        }
        else {
            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
RegisterComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'register-cmp',
        template: _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
    }),
    __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], RegisterComponent);



/***/ })

}]);
//# sourceMappingURL=sign-pages-module-es2015.js.map