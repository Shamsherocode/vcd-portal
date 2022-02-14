(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "M8E9":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/doctors/widgets.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<style>\n  span.mid-text {\n      color: #b9b9b9;\n      margin-top: 17px;\n  }\n  .mt-10\n  {\n    margin-top:8px;\n  }\n  #printImg{\n    width: 45px;\n    margin-left: 40%;\n    background-color: #ffffff;\n  }\n  #printHead{\n    padding-right: 4px;\n  }\n  \n  .printImg:last-child {\n     page-break-after: auto;\n  }\n\n  #button-details{\n    padding-right: 14px;\n  }\n  \n  </style>\n\n<div class=\"main-content\">\n  <div class=\"card\">\n    <div class=\"card-body\">\n      <td><h5 id=\"printHead\">Explanation of Benefits</h5></td>\n      <td><img id=\"printImg\" src=\"./assets/img/print.png\" (click)=\"printFunction()\"></td>\n      <br>\n      <span style=\"color: #A9A9AB;\">PAYMENT ID: 114021</span><br><br>\n      <div class=\"toolbar\">\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n       <div class=\"card\">\n      \n      <table class=\"table table-striped table-sm\">\n        <tbody>\n          <tr>\n            <td>Member</td>\n            <td class=\"ng-binding\">Peter Parker</td>\n            <td class=\"text-end ng-binding pull-right\">ID: {{member_ID}}</td>\n          </tr>\n          <tr>\n            <td>Plan Name</td>\n            <td class=\"ng-binding\">Gold Plus</td>\n          </tr>\n          <tr>\n            <td>Group</td>\n            <td colspan=\"2\" class=\"ng-binding\">None</td>\n          </tr>\n          <tr>\n            <td>IPA</td>\n            <td>212412</td>\n          </tr>\n          <tr>\n            <td>Date of Service</td>\n            <td colspan=\"2\" class=\"ng-binding\">\t10-feb-2022</td>\n          </tr>\n          <tr>\n            <td>Date Submitted</td>\n            <td colspan=\"2\" class=\"ng-binding\">307.1H</td>\n          </tr>\n          <tr>\n            <td>Diagnosis</td>\n            <td colspan=\"2\" class=\"ng-binding\">Yes</td>\n          </tr>\n        </tbody>\n      </table>\n\n    \n\n    </div>\n    </div>\n\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n     \n     <table class=\"table table-striped table-sm\">\n      <tbody>\n        <tr>\n          <td>Provider</td>\n          <td>VCD Plan Provider</td>\n        </tr>\n        <tr>\n          <td>Name</td>\n          <td class=\"ng-binding\">Dr. Ross killer</td>\n        </tr>\n        <tr>\n          <td>Tax ID</td>\n          <td colspan=\"2\" class=\"ng-binding\">431234567</td>\n        </tr>\n        <tr>\n          <td>Phone</td>\n          <td>+17451252041</td>\n        </tr>\n        <tr>\n          <td>Location</td>\n          <td colspan=\"2\" class=\"ng-binding\">\tSacramento</td>\n        </tr>\n        <tr>\n          <td>Address</td>\n          <td>\n           <span>514 First Floor</span>\n           <br>\n           <span>\tPhoenix</span>\n           <br>\n           <span>Arizona[AZ] 96162</span>\n           \n         </td>\n        </tr>\n      </tbody>\n     </table>\n\n   \n\n   </div>\n   </div>\n  </div>\n  \n  </div>\n  </div>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n          <div class=\"card\">\n              <div class=\"card-body\">\n                <div class=\"toolbar\">\n                      <!--        Here you can write extra buttons/actions for the toolbar              -->\n                  </div>\n                    <table id=\"datatable1\" class=\"table table-striped table-bordered\" cellspacing=\"0\" width=\"100%\">\n                          <thead style=\"background-color: #6C757D; color: #ffffff;\">\n                              <tr>\n                                <th>{{ doctorTable.headerRow[0] }}</th>\n                                <th>{{ doctorTable.headerRow[1] }}</th>\n                                <th>{{ doctorTable.headerRow[2] }}</th>\n                                <th>{{ doctorTable.headerRow[3] }}</th>\n                                <th>{{ doctorTable.headerRow[4] }}</th>\n                                <th>{{ doctorTable.headerRow[5] }}</th>\n                              </tr>\n                          </thead>\n                          <tbody>\n                              <tr *ngFor=\"let row of doctorTable.dataRows\">\n                                  <td>{{row[0]}}</td>\n                                  <td>{{row[1]}}</td>\n                                  <td>{{row[2]}}</td>\n                                  <td>{{row[3]}}</td>\n                                  <td>{{row[4]}}</td>\n                                  <td>{{row[5]}}</td>\n\n                              </tr>\n                          </tbody>\n                      </table>\n              </div>\n              <!-- end content-->\n          </div>\n          <!--  end card  -->\n      </div>\n      <!-- end col-md-12 -->\n\n      <div class=\"card-body\">\n        <div class=\"pull-right\" id=\"button-details\">\n          <button class=\"btn\">View as Patient</button>\n          <button class=\"btn btn-warning\">Delete</button>\n        </div>\n      </div>\n\n  </div>\n  <!-- end row -->\n</div>\n\n</div>\n");

/***/ }),

/***/ "slp9":
/*!********************************************************!*\
  !*** ./src/app/dashboard/doctors/widgets.component.ts ***!
  \********************************************************/
/*! exports provided: WidgetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetsComponent", function() { return WidgetsComponent; });
/* harmony import */ var _raw_loader_widgets_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./widgets.component.html */ "M8E9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ "H+bZ");
/* harmony import */ var app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let WidgetsComponent = class WidgetsComponent {
    constructor(api, auth, router) {
        this.api = api;
        this.auth = auth;
        this.router = router;
    }
    ngOnInit() {
        this.doctorTable = {
            headerRow: ['benefit type', 'charged', 'allowed', 'write off', 'paid by patient', 'paid by plan'],
            dataRows: [
                ['Peter Parker', '$1101', 'No', 'Yes', '120$', '$180'],
                ['Peter Parker', '$1101', 'No', 'Yes', '120$', '$180'],
                ['Peter Parker', '$1101', 'No', 'Yes', '120$', '$180'],
                ['Peter Parker', '$1101', 'No', 'Yes', '120$', '$180'],
                ['Peter Parker', '$1101', 'No', 'Yes', '120$', '$180'],
                ['Peter Parker', '$1101', 'No', 'Yes', '120$', '$180'],
                ['Peter Parker', '$1101', 'No', 'Yes', '120$', '$180'],
                ['Peter Parker', '$1101', 'No', 'Yes', '120$', '$180'],
                ['Peter Parker', '$1101', 'No', 'Yes', '120$', '$180'],
                ['Peter Parker', '$1101', 'No', 'Yes', '120$', '$180'],
                ['Peter Parker', '$1101', 'No', 'Yes', '120$', '$180'],
                ['Peter Parker', '$1101', 'No', 'Yes', '120$', '$180'],
                ['Peter Parker', '$1101', 'No', 'Yes', '120$', '$180'],
            ]
        };
    }
    printFunction() {
        window.print();
    }
};
WidgetsComponent.ctorParameters = () => [
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
WidgetsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-widgets',
        template: _raw_loader_widgets_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
    }),
    __metadata("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
        app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], WidgetsComponent);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map