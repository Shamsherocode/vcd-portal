(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~dashboard-dashboard-module~dashboard-doctors-widgets-module~sign-pages-module"],{

/***/ "H+bZ":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "lGQG");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! environments/environment */ "AytR");
/* harmony import */ var _ng_recaptcha3_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ng-recaptcha3.service */ "uLhy");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jwt-decode */ "EjJx");
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







let ApiService = class ApiService {
    constructor(http, authService, router, recaptcha3) {
        this.http = http;
        this.authService = authService;
        this.router = router;
        this.recaptcha3 = recaptcha3;
        this.siteKey = '6LdhHnodAAAAANT35rUOPEZ0TnF31D6qOqSfby81';
    }
    ngOnInit() {
        this.recaptcha3.init(this.siteKey);
    }
    /**
    * Create API request method function.
    * And convert data into the encoded form data.
    * Convert api request to the POST, GET, and PUT method.
    * And take baseURL, incodedData, and header.
    */
    _httpRequest(method, url, data) {
        return __awaiter(this, void 0, void 0, function* () {
            // if (withAuth) {
            //     if(this.checkAccessToken()){
            //     }else{
            //       this.router.navigate(['login'])
            //     }
            //   }else{
            //     this.apiheader = this.Header();
            //   }
            if (data) {
                this.incodeURL = this.incodedData(data);
            }
            if (method == 'post') {
                try {
                    this.httpResponse = yield this.http.post(`${environments_environment__WEBPACK_IMPORTED_MODULE_3__["baseUrl"]}${url}`, this.incodeURL, this.apiheader).toPromise();
                }
                catch (e) {
                    this.httpResponse = e;
                }
            }
            else if (method == 'put') {
                try {
                    this.httpResponse = yield this.http.put(`${environments_environment__WEBPACK_IMPORTED_MODULE_3__["baseUrl"]}${url}`, this.incodeURL, this.apiheader).toPromise();
                }
                catch (e) {
                    this.httpResponse = e;
                }
            }
            else {
                try {
                    this.httpResponse = yield this.http.get(`${environments_environment__WEBPACK_IMPORTED_MODULE_3__["baseUrl"]}${url}`, this.apiheader).toPromise();
                }
                catch (e) {
                    this.httpResponse = e;
                }
            }
            // if (withAuth && this.httpResponse.status == 401) {
            //      return  this._httpRequest(method, url, data, withAuth);
            // }else{
            //     return this.httpResponse
            // }
        });
    }
    /**
    * Request Json function
    * convert data into JSON data.
    * Pass Auth Permission and Form Parameter.
    */
    _requestJson(method, url, formParams) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield this._httpRequest(method, url, formParams);
            if (response == null)
                return null;
            try {
                return response;
            }
            catch (e) {
                return e;
            }
        });
    }
    /**
     * Request Auth Response function
     * Check Every has Auth permission or not.
     * If Response is ok then Set Token, Refresh Token.
     * And Save User Data.
     */
    requestAuthResponse(method, url, formParams) {
        return __awaiter(this, void 0, void 0, function* () {
            var response = yield this._requestJson(method, url, formParams);
            if (response == null)
                return null;
            try {
                if (response.authData != null) {
                    var tokenDataArray = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_6__["default"])(response.authData.accessToken);
                    if (tokenDataArray['role'] != 30) {
                        response.errorMessage = 'This application is only for Provider user accounts.';
                        response.isOK = false;
                        return response;
                    }
                    else {
                        this.authService.setToken(response.authData.accessToken);
                        // this.authService.setRefreshToken(response.authData.refreshToken)
                        // this.authService.setUser({
                        //   email: response.authData.email,
                        //   username: response.authData.username,
                        //   fullname: response.authData.fullName,
                        //   organizationName: response.authData.organizationName,
                        //   organizationAddress: response.authData.organizationAddress
                        // });
                        return response;
                    }
                }
                else {
                    return response;
                }
            }
            catch (e) {
                return e;
            }
        });
    }
    /**
     * Check Access Token funtion
     * Decode Access Token and take expiry time.
     * Check if Access Token Expiry time will be left 5 seconds then Generate new one.
     * And Generate RefreshToken
     */
    checkAccessToken() {
        var AccessToken = this.authService.getAccessToken();
        if (AccessToken) {
            var tokenData = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_6__["default"])(AccessToken);
            var _accessTokenCurrentTime = new Date();
            var _accessTokenExpTime = new Date(tokenData['exp'] * 1000);
            var TokenExpAfter = Math.floor((_accessTokenExpTime.getTime() - _accessTokenCurrentTime.getTime()) / 1000);
        }
        else {
            return false;
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
        let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        header = header.append('Authorization', 'Bearer ' + this.authService.getAccessToken());
        return { headers: header };
    }
    //Header function
    Header() {
        return { headers: environments_environment__WEBPACK_IMPORTED_MODULE_3__["headers"] };
    }
    //Incodeed data function
    incodedData(data) {
        const toUrlEncoded = obj => Object.keys(obj).map(k => encodeURIComponent(k) + '=' + encodeURIComponent(obj[k])).join('&');
        return (toUrlEncoded(data));
    }
    /**
     * Sign in api function
     * Pass username, password, and Captcha in the bodydata.
     * Check Captcha ID is required or not. If required then add in the bodydata.
     * Call Sign API and pass auth Permission and bodydata in the API.
     */
    singIn(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            let params = {
                email: username,
                password: password,
            };
            console.log(params, 'body');
            return yield this.requestAuthResponse('post', 'api/login', params);
        });
    }
    /**
     * Forget password step1 API function
     * Check entered username is valid or not if valid move on Step 2
     * Check Captcha ID is required or not. If required then add in the bodydata.
     * And Send device ID.
     */
    forgotPasswordStep1(username, captcha) {
        return __awaiter(this, void 0, void 0, function* () {
            let params = {
                username: username,
                deviceID: this.authService.getDeviceID()
            };
            if (captcha != null)
                params['captcha'] = captcha;
            return yield this.requestAuthResponse('post', 'users/forgotPassword/step1', params);
        });
    }
    /**
     * Forget password step2 API function
     * Check entered Answer is valid or not if valid move on Step 3
     * Check Captcha ID is required or not. If required then add in the bodydata.
     * And Send device ID.
     */
    forgotPasswordStep2(question, answer, captcha) {
        return __awaiter(this, void 0, void 0, function* () {
            let params = {
                question: question,
                answer: answer,
                deviceID: this.authService.getDeviceID()
            };
            if (captcha != null)
                params['captcha'] = captcha;
            return yield this.requestAuthResponse('post', 'users/forgotPassword/step2', params);
        });
    }
    /**
     * Forget password step3 API function
     * Check selected communication channel is valid or not if valid move on Step 4
     * And Send device ID.
     */
    forgotPasswordStep3(channel) {
        return __awaiter(this, void 0, void 0, function* () {
            let params = {
                channel: channel,
                deviceID: this.authService.getDeviceID()
            };
            return yield this.requestAuthResponse('post', 'users/forgotPassword/step3', params);
        });
    }
    /**
     * Forget password step4 API function
     * Check entered secret code is valid or not.
     * Check entered password fulfill all validators if valid then Redirect to the Login Page.
     * And Send device ID.
     */
    forgotPasswordStep4(resetCode, newPassword) {
        return __awaiter(this, void 0, void 0, function* () {
            let params = {
                resetCode: resetCode,
                newPassword: newPassword,
                deviceID: this.authService.getDeviceID()
            };
            return yield this.requestAuthResponse('post', 'users/forgotPassword/step4', params);
        });
    }
    /**
     * Username reminder API function
     * Check entered email address is valid or not.
     * And Send device ID.
     * Check Captcha ID is required or not. If required then add in the bodydata.
     */
    usernameReminder(email, captcha) {
        return __awaiter(this, void 0, void 0, function* () {
            let params = {
                deviceID: this.authService.getDeviceID()
            };
            if (captcha != null)
                params['captcha'] = captcha;
            return yield this.requestAuthResponse('post', '/users/' + email + '/emails/usernameReminder', params);
        });
    }
    /**
     * Search Member API function
     * Check url parameter is not be blank.
     * And Pass the ID, page, and page size in the API.
     * And Call API and pass the bodydata.
     */
    searchMember(lastname, dob, id, _page, _pageSize) {
        return __awaiter(this, void 0, void 0, function* () {
            var urlparams = '';
            if (id) {
                var urlparams = 'id=' + id + '&_page=' + _page + '&_pageSize=' + _pageSize;
            }
            else if (lastname && dob) {
                var urlparams = 'lastname=s:' + lastname + '&dob=' + dob + '&_page=' + _page + '&_pageSize=' + _pageSize;
            }
            if (urlparams != '') {
                return yield this.requestAuthResponse('get', 'members?' + urlparams, false);
            }
            else {
                return null;
            }
        });
    }
    /**
     * Location Provider API function
     * Check url parameter is not be blank.
     * And Pass the ID, page, and page size in the API.
     * And Call API and pass the bodydata.
     */
    locationProvider(id, _page, _pageSize) {
        return __awaiter(this, void 0, void 0, function* () {
            var urlparams1 = id + '&_page=' + _page + '&_pageSize=' + _pageSize;
            return yield this.requestAuthResponse('get', 'providers/current/locations?' + urlparams1, false);
        });
    }
    /**
     * Payment Provider API function
     * And Pass the ID, page, and page size in the API.
     * And Call API and pass the bodydata.
     */
    paymentProvider(id, _page, _pageSize) {
        return __awaiter(this, void 0, void 0, function* () {
            var urlparams2 = id + '&_page=' + _page + '&_pageSize=' + _pageSize;
            return yield this.requestAuthResponse('get', 'providers/current/payments?' + urlparams2, false);
        });
    }
    /**
     * Payment Provider details API function
     * And Pass the ID, page, and page size in the API.
     * And Call API and pass the bodydata.
     */
    paymentProviderDetails(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.requestAuthResponse('get', 'payments/' + id, false);
        });
    }
};
ApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ng_recaptcha3_service__WEBPACK_IMPORTED_MODULE_4__["NgRecaptcha3Service"] }
];
ApiService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
        _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _ng_recaptcha3_service__WEBPACK_IMPORTED_MODULE_4__["NgRecaptcha3Service"]])
], ApiService);



/***/ }),

/***/ "uLhy":
/*!***************************************************!*\
  !*** ./src/app/services/ng-recaptcha3.service.ts ***!
  \***************************************************/
/*! exports provided: NgRecaptcha3Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgRecaptcha3Service", function() { return NgRecaptcha3Service; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let NgRecaptcha3Service = class NgRecaptcha3Service {
    constructor() {
        this.baseUrl = 'https://www.google.com/recaptcha/api.js';
        this.siteKey = '';
        this.isLoaded = false;
        window['ngRecaptcha3Loaded'] = () => {
            this.isLoaded = true;
        };
        this.scriptId = +(new Date());
    }
    getToken(action) {
        try {
            return window['grecaptcha'].execute(this.siteKey, action);
        }
        catch (e) {
            return new Promise((resolve, reject) => {
                reject(e);
            });
        }
    }
    init(siteKey) {
        return new Promise((resolve, reject) => {
            if (this.isLoaded) {
                resolve('success');
                return;
            }
            else {
                this.siteKey = siteKey;
                const script = document.createElement('script');
                script.innerHTML = '';
                script.src = this.baseUrl + `?render=${this.siteKey}&onload=ngRecaptcha3Loaded`;
                script.id = `recapthcha-${this.scriptId}`;
                script.async = true;
                script.defer = true;
                script.onload = () => {
                    resolve('success');
                };
                script.onerror = () => {
                    reject('error');
                };
                document.head.appendChild(script);
            }
        });
    }
    destroy() {
        this.isLoaded = false;
        const script = document.getElementById(`recapthcha-${this.scriptId}`);
        if (script) {
            script.remove();
        }
        const badge = document.getElementsByClassName('grecaptcha-badge')[0];
        if (badge) {
            badge.remove();
        }
    }
};
NgRecaptcha3Service.ctorParameters = () => [];
NgRecaptcha3Service = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [])
], NgRecaptcha3Service);



/***/ })

}]);
//# sourceMappingURL=default~dashboard-dashboard-module~dashboard-doctors-widgets-module~sign-pages-module-es2015.js.map