(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~dashboard-dashboard-module~dashboard-doctors-widgets-module~sign-pages-module"], {
    /***/
    "H+bZ":
    /*!*****************************************!*\
      !*** ./src/app/services/api.service.ts ***!
      \*****************************************/

    /*! exports provided: ApiService */

    /***/
    function HBZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApiService", function () {
        return ApiService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./auth.service */
      "lGQG");
      /* harmony import */


      var environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! environments/environment */
      "AytR");
      /* harmony import */


      var _ng_recaptcha3_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./ng-recaptcha3.service */
      "uLhy");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var jwt_decode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! jwt-decode */
      "EjJx");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
          });
        }

        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }

          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }

          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }

          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };

      var ApiService = /*#__PURE__*/function () {
        function ApiService(http, authService, router, recaptcha3) {
          _classCallCheck(this, ApiService);

          this.http = http;
          this.authService = authService;
          this.router = router;
          this.recaptcha3 = recaptcha3;
          this.siteKey = '6LdhHnodAAAAANT35rUOPEZ0TnF31D6qOqSfby81';
        }

        _createClass(ApiService, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.recaptcha3.init(this.siteKey);
          }
          /**
          * Create API request method function.
          * And convert data into the encoded form data.
          * Convert api request to the POST, GET, and PUT method.
          * And take baseURL, incodedData, and header.
          */

        }, {
          key: "_httpRequest",
          value: function _httpRequest(method, url, data) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
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

                      if (!(method == 'post')) {
                        _context.next = 13;
                        break;
                      }

                      _context.prev = 2;
                      _context.next = 5;
                      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_3__["baseUrl"]).concat(url), this.incodeURL, this.apiheader).toPromise();

                    case 5:
                      this.httpResponse = _context.sent;
                      _context.next = 11;
                      break;

                    case 8:
                      _context.prev = 8;
                      _context.t0 = _context["catch"](2);
                      this.httpResponse = _context.t0;

                    case 11:
                      _context.next = 34;
                      break;

                    case 13:
                      if (!(method == 'put')) {
                        _context.next = 25;
                        break;
                      }

                      _context.prev = 14;
                      _context.next = 17;
                      return this.http.put("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_3__["baseUrl"]).concat(url), this.incodeURL, this.apiheader).toPromise();

                    case 17:
                      this.httpResponse = _context.sent;
                      _context.next = 23;
                      break;

                    case 20:
                      _context.prev = 20;
                      _context.t1 = _context["catch"](14);
                      this.httpResponse = _context.t1;

                    case 23:
                      _context.next = 34;
                      break;

                    case 25:
                      _context.prev = 25;
                      _context.next = 28;
                      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_3__["baseUrl"]).concat(url), this.apiheader).toPromise();

                    case 28:
                      this.httpResponse = _context.sent;
                      _context.next = 34;
                      break;

                    case 31:
                      _context.prev = 31;
                      _context.t2 = _context["catch"](25);
                      this.httpResponse = _context.t2;

                    case 34:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this, [[2, 8], [14, 20], [25, 31]]);
            }));
          }
          /**
          * Request Json function
          * convert data into JSON data.
          * Pass Auth Permission and Form Parameter.
          */

        }, {
          key: "_requestJson",
          value: function _requestJson(method, url, formParams) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var response;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this._httpRequest(method, url, formParams);

                    case 2:
                      response = _context2.sent;

                      if (!(response == null)) {
                        _context2.next = 5;
                        break;
                      }

                      return _context2.abrupt("return", null);

                    case 5:
                      _context2.prev = 5;
                      return _context2.abrupt("return", response);

                    case 9:
                      _context2.prev = 9;
                      _context2.t0 = _context2["catch"](5);
                      return _context2.abrupt("return", _context2.t0);

                    case 12:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this, [[5, 9]]);
            }));
          }
          /**
           * Request Auth Response function
           * Check Every has Auth permission or not.
           * If Response is ok then Set Token, Refresh Token.
           * And Save User Data.
           */

        }, {
          key: "requestAuthResponse",
          value: function requestAuthResponse(method, url, formParams) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var response, tokenDataArray;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this._requestJson(method, url, formParams);

                    case 2:
                      response = _context3.sent;

                      if (!(response == null)) {
                        _context3.next = 5;
                        break;
                      }

                      return _context3.abrupt("return", null);

                    case 5:
                      _context3.prev = 5;

                      if (!(response.authData != null)) {
                        _context3.next = 18;
                        break;
                      }

                      tokenDataArray = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_6__["default"])(response.authData.accessToken);

                      if (!(tokenDataArray['role'] != 30)) {
                        _context3.next = 14;
                        break;
                      }

                      response.errorMessage = 'This application is only for Provider user accounts.';
                      response.isOK = false;
                      return _context3.abrupt("return", response);

                    case 14:
                      this.authService.setToken(response.authData.accessToken); // this.authService.setRefreshToken(response.authData.refreshToken)
                      // this.authService.setUser({
                      //   email: response.authData.email,
                      //   username: response.authData.username,
                      //   fullname: response.authData.fullName,
                      //   organizationName: response.authData.organizationName,
                      //   organizationAddress: response.authData.organizationAddress
                      // });

                      return _context3.abrupt("return", response);

                    case 16:
                      _context3.next = 19;
                      break;

                    case 18:
                      return _context3.abrupt("return", response);

                    case 19:
                      _context3.next = 24;
                      break;

                    case 21:
                      _context3.prev = 21;
                      _context3.t0 = _context3["catch"](5);
                      return _context3.abrupt("return", _context3.t0);

                    case 24:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this, [[5, 21]]);
            }));
          }
          /**
           * Check Access Token funtion
           * Decode Access Token and take expiry time.
           * Check if Access Token Expiry time will be left 5 seconds then Generate new one.
           * And Generate RefreshToken
           */

        }, {
          key: "checkAccessToken",
          value: function checkAccessToken() {
            var AccessToken = this.authService.getAccessToken();

            if (AccessToken) {
              var tokenData = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_6__["default"])(AccessToken);

              var _accessTokenCurrentTime = new Date();

              var _accessTokenExpTime = new Date(tokenData['exp'] * 1000);

              var TokenExpAfter = Math.floor((_accessTokenExpTime.getTime() - _accessTokenCurrentTime.getTime()) / 1000);
            } else {
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

        }, {
          key: "HeaderWithToken",
          value: function HeaderWithToken() {
            var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
            header = header.append('Authorization', 'Bearer ' + this.authService.getAccessToken());
            return {
              headers: header
            };
          } //Header function

        }, {
          key: "Header",
          value: function Header() {
            return {
              headers: environments_environment__WEBPACK_IMPORTED_MODULE_3__["headers"]
            };
          } //Incodeed data function

        }, {
          key: "incodedData",
          value: function incodedData(data) {
            var toUrlEncoded = function toUrlEncoded(obj) {
              return Object.keys(obj).map(function (k) {
                return encodeURIComponent(k) + '=' + encodeURIComponent(obj[k]);
              }).join('&');
            };

            return toUrlEncoded(data);
          }
          /**
           * Sign in api function
           * Pass username, password, and Captcha in the bodydata.
           * Check Captcha ID is required or not. If required then add in the bodydata.
           * Call Sign API and pass auth Permission and bodydata in the API.
           */

        }, {
          key: "singIn",
          value: function singIn(username, password) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var params;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      params = {
                        email: username,
                        password: password
                      };
                      console.log(params, 'body');
                      _context4.next = 4;
                      return this.requestAuthResponse('post', 'api/login', params);

                    case 4:
                      return _context4.abrupt("return", _context4.sent);

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
          /**
           * Forget password step1 API function
           * Check entered username is valid or not if valid move on Step 2
           * Check Captcha ID is required or not. If required then add in the bodydata.
           * And Send device ID.
           */

        }, {
          key: "forgotPasswordStep1",
          value: function forgotPasswordStep1(username, captcha) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var params;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      params = {
                        username: username,
                        deviceID: this.authService.getDeviceID()
                      };
                      if (captcha != null) params['captcha'] = captcha;
                      _context5.next = 4;
                      return this.requestAuthResponse('post', 'users/forgotPassword/step1', params);

                    case 4:
                      return _context5.abrupt("return", _context5.sent);

                    case 5:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
          /**
           * Forget password step2 API function
           * Check entered Answer is valid or not if valid move on Step 3
           * Check Captcha ID is required or not. If required then add in the bodydata.
           * And Send device ID.
           */

        }, {
          key: "forgotPasswordStep2",
          value: function forgotPasswordStep2(question, answer, captcha) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var params;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      params = {
                        question: question,
                        answer: answer,
                        deviceID: this.authService.getDeviceID()
                      };
                      if (captcha != null) params['captcha'] = captcha;
                      _context6.next = 4;
                      return this.requestAuthResponse('post', 'users/forgotPassword/step2', params);

                    case 4:
                      return _context6.abrupt("return", _context6.sent);

                    case 5:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
          /**
           * Forget password step3 API function
           * Check selected communication channel is valid or not if valid move on Step 4
           * And Send device ID.
           */

        }, {
          key: "forgotPasswordStep3",
          value: function forgotPasswordStep3(channel) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var params;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      params = {
                        channel: channel,
                        deviceID: this.authService.getDeviceID()
                      };
                      _context7.next = 3;
                      return this.requestAuthResponse('post', 'users/forgotPassword/step3', params);

                    case 3:
                      return _context7.abrupt("return", _context7.sent);

                    case 4:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
          /**
           * Forget password step4 API function
           * Check entered secret code is valid or not.
           * Check entered password fulfill all validators if valid then Redirect to the Login Page.
           * And Send device ID.
           */

        }, {
          key: "forgotPasswordStep4",
          value: function forgotPasswordStep4(resetCode, newPassword) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var params;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      params = {
                        resetCode: resetCode,
                        newPassword: newPassword,
                        deviceID: this.authService.getDeviceID()
                      };
                      _context8.next = 3;
                      return this.requestAuthResponse('post', 'users/forgotPassword/step4', params);

                    case 3:
                      return _context8.abrupt("return", _context8.sent);

                    case 4:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
          /**
           * Username reminder API function
           * Check entered email address is valid or not.
           * And Send device ID.
           * Check Captcha ID is required or not. If required then add in the bodydata.
           */

        }, {
          key: "usernameReminder",
          value: function usernameReminder(email, captcha) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var params;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      params = {
                        deviceID: this.authService.getDeviceID()
                      };
                      if (captcha != null) params['captcha'] = captcha;
                      _context9.next = 4;
                      return this.requestAuthResponse('post', '/users/' + email + '/emails/usernameReminder', params);

                    case 4:
                      return _context9.abrupt("return", _context9.sent);

                    case 5:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
          /**
           * Search Member API function
           * Check url parameter is not be blank.
           * And Pass the ID, page, and page size in the API.
           * And Call API and pass the bodydata.
           */

        }, {
          key: "searchMember",
          value: function searchMember(lastname, dob, id, _page, _pageSize) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var urlparams;
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      urlparams = '';

                      if (id) {
                        urlparams = 'id=' + id + '&_page=' + _page + '&_pageSize=' + _pageSize;
                      } else if (lastname && dob) {
                        urlparams = 'lastname=s:' + lastname + '&dob=' + dob + '&_page=' + _page + '&_pageSize=' + _pageSize;
                      }

                      if (!(urlparams != '')) {
                        _context10.next = 8;
                        break;
                      }

                      _context10.next = 5;
                      return this.requestAuthResponse('get', 'members?' + urlparams, false);

                    case 5:
                      return _context10.abrupt("return", _context10.sent);

                    case 8:
                      return _context10.abrupt("return", null);

                    case 9:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));
          }
          /**
           * Location Provider API function
           * Check url parameter is not be blank.
           * And Pass the ID, page, and page size in the API.
           * And Call API and pass the bodydata.
           */

        }, {
          key: "locationProvider",
          value: function locationProvider(id, _page, _pageSize) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              var urlparams1;
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      urlparams1 = id + '&_page=' + _page + '&_pageSize=' + _pageSize;
                      _context11.next = 3;
                      return this.requestAuthResponse('get', 'providers/current/locations?' + urlparams1, false);

                    case 3:
                      return _context11.abrupt("return", _context11.sent);

                    case 4:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));
          }
          /**
           * Payment Provider API function
           * And Pass the ID, page, and page size in the API.
           * And Call API and pass the bodydata.
           */

        }, {
          key: "paymentProvider",
          value: function paymentProvider(id, _page, _pageSize) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              var urlparams2;
              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      urlparams2 = id + '&_page=' + _page + '&_pageSize=' + _pageSize;
                      _context12.next = 3;
                      return this.requestAuthResponse('get', 'providers/current/payments?' + urlparams2, false);

                    case 3:
                      return _context12.abrupt("return", _context12.sent);

                    case 4:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this);
            }));
          }
          /**
           * Payment Provider details API function
           * And Pass the ID, page, and page size in the API.
           * And Call API and pass the bodydata.
           */

        }, {
          key: "paymentProviderDetails",
          value: function paymentProviderDetails(id) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      _context13.next = 2;
                      return this.requestAuthResponse('get', 'payments/' + id, false);

                    case 2:
                      return _context13.abrupt("return", _context13.sent);

                    case 3:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this);
            }));
          }
        }]);

        return ApiService;
      }();

      ApiService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _ng_recaptcha3_service__WEBPACK_IMPORTED_MODULE_4__["NgRecaptcha3Service"]
        }];
      };

      ApiService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
      }), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _ng_recaptcha3_service__WEBPACK_IMPORTED_MODULE_4__["NgRecaptcha3Service"]])], ApiService);
      /***/
    },

    /***/
    "uLhy":
    /*!***************************************************!*\
      !*** ./src/app/services/ng-recaptcha3.service.ts ***!
      \***************************************************/

    /*! exports provided: NgRecaptcha3Service */

    /***/
    function uLhy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgRecaptcha3Service", function () {
        return NgRecaptcha3Service;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var NgRecaptcha3Service = /*#__PURE__*/function () {
        function NgRecaptcha3Service() {
          var _this = this;

          _classCallCheck(this, NgRecaptcha3Service);

          this.baseUrl = 'https://www.google.com/recaptcha/api.js';
          this.siteKey = '';
          this.isLoaded = false;

          window['ngRecaptcha3Loaded'] = function () {
            _this.isLoaded = true;
          };

          this.scriptId = +new Date();
        }

        _createClass(NgRecaptcha3Service, [{
          key: "getToken",
          value: function getToken(action) {
            try {
              return window['grecaptcha'].execute(this.siteKey, action);
            } catch (e) {
              return new Promise(function (resolve, reject) {
                reject(e);
              });
            }
          }
        }, {
          key: "init",
          value: function init(siteKey) {
            var _this2 = this;

            return new Promise(function (resolve, reject) {
              if (_this2.isLoaded) {
                resolve('success');
                return;
              } else {
                _this2.siteKey = siteKey;
                var script = document.createElement('script');
                script.innerHTML = '';
                script.src = _this2.baseUrl + "?render=".concat(_this2.siteKey, "&onload=ngRecaptcha3Loaded");
                script.id = "recapthcha-".concat(_this2.scriptId);
                script.async = true;
                script.defer = true;

                script.onload = function () {
                  resolve('success');
                };

                script.onerror = function () {
                  reject('error');
                };

                document.head.appendChild(script);
              }
            });
          }
        }, {
          key: "destroy",
          value: function destroy() {
            this.isLoaded = false;
            var script = document.getElementById("recapthcha-".concat(this.scriptId));

            if (script) {
              script.remove();
            }

            var badge = document.getElementsByClassName('grecaptcha-badge')[0];

            if (badge) {
              badge.remove();
            }
          }
        }]);

        return NgRecaptcha3Service;
      }();

      NgRecaptcha3Service.ctorParameters = function () {
        return [];
      };

      NgRecaptcha3Service = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
      }), __metadata("design:paramtypes", [])], NgRecaptcha3Service);
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~dashboard-dashboard-module~dashboard-doctors-widgets-module~sign-pages-module-es5.js.map