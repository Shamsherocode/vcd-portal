(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/my/Documents/GitHub/VCD-ProviderPortal/src/main.ts */"zUnb");


/***/ }),

/***/ "0Aw5":
/*!***********************************************!*\
  !*** ./src/app/locations/charts.component.ts ***!
  \***********************************************/
/*! exports provided: ChartsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsComponent", function() { return ChartsComponent; });
/* harmony import */ var _raw_loader_charts_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./charts.component.html */ "EJep");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let ChartsComponent = class ChartsComponent {
    constructor() {
        this.chartColor = "#FFFFFF";
    }
    ngOnInit() {
        this.dataTable = {
            headerRow: ['name', 'city', 'zip code', 'state'],
            dataRows: [
                ['Peter Parker', 'Phoenix', '86556', 'Arizona [AZ]',],
                ['Peter Parker', 'Phoenix', '86556', 'Arizona [AZ]',],
                ['Peter Parker', 'Phoenix', '86556', 'Arizona [AZ]',],
                ['John Parker', '	Sacramento', '86556', 'California [CA]',],
                ['John Parker', '	Sacramento', '86556', 'California [CA]',],
                ['John Parker', '	Sacramento', '86556', 'California [CA]',],
                ['John Parker', '	Sacramento', '86556', 'California [CA]',],
                ['John Parker', '	Sacramento', '86556', 'California [CA]',],
                ['John Parker', '	Sacramento', '86556', 'California [CA]',],
                ['Peter Parker', 'Phoenix', '86556', 'Arizona [AZ]',],
                ['John Parker', '	Sacramento', '86556', 'California [CA]',],
                ['Peter Parker', 'Phoenix', '86556', 'Arizona [AZ]',],
                ['John Parker', '	Sacramento', '86556', 'California [CA]',],
                ['Peter Parker', 'Phoenix', '86556', 'Arizona [AZ]',],
                ['John Parker', '	Sacramento', '86556', 'California [CA]',],
                ['Peter Parker', 'Phoenix', '86556', 'Arizona [AZ]',],
                ['John Parker', '	Sacramento', '86556', 'California [CA]',],
                ['Peter Parker', 'Phoenix', '86556', 'Arizona [AZ]',],
                ['John Parker', '	Sacramento', '86556', 'California [CA]',],
                ['Peter Parker', 'Phoenix', '86556', 'Arizona [AZ]',],
                ['John Parker', '	Sacramento', '86556', 'California [CA]',],
            ]
        };
    }
    ngAfterViewInit() {
        $('#datatable1').DataTable({
            "pagingType": "full_numbers",
            "lengthMenu": [
                [10, 25, 50, -1],
                [10, 25, 50, "All"]
            ],
            responsive: true,
            language: {
                search: "_INPUT_",
                searchPlaceholder: "Search locations",
            }
        });
        var table = $('#datatable').DataTable();
        // Edit record
        table.on('click', '.edit', function () {
            let $tr = $(this).closest('tr');
            var data = table.row($tr).data();
            alert('You press on Row: ' + data[0] + ' ' + data[1] + ' ' + data[2] + '\'s row.');
        });
        // Delete a record
        table.on('click', '.remove', function (e) {
            let $tr = $(this).closest('tr');
            table.row($tr).remove().draw();
            e.preventDefault();
        });
        //Like record
        table.on('click', '.like', function () {
            alert('You clicked on Like button');
        });
    }
};
ChartsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'charts-cmp',
        template: _raw_loader_charts_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
    })
], ChartsComponent);



/***/ }),

/***/ "47Jg":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: ROUTES, SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./sidebar.component.html */ "zvoc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//Menu Items
const ROUTES = [{
        path: '/provider',
        title: 'Dashboard',
        type: 'link',
        icontype: 'nc-icon nc-bank'
    },
    // {
    //     path: '/components',
    //     title: 'Components',
    //     type: 'sub',
    //     collapse: 'components',
    //     icontype: 'nc-icon nc-layout-11',
    //     children: [
    //         {path: 'buttons', title: 'Buttons', ab:'B'},
    //         {path: 'grid', title: 'Grid System', ab:'GS'},
    //         {path: 'panels', title: 'Panels', ab:'P'},
    //         {path: 'sweet-alert', title: 'Sweet Alert', ab:'SA'},
    //         {path: 'notifications', title: 'Notifications', ab:'N'},
    //         {path: 'icons', title: 'Icons', ab:'I'},
    //         {path: 'typography', title: 'Typography', ab:'T'}
    //     ]
    // },
    // {
    //     path: '/forms',
    //     title: 'Forms',
    //     type: 'sub',
    //     collapse: 'forms',
    //     icontype: 'nc-icon nc-ruler-pencil',
    //     children: [
    //         {path: 'regular', title: 'Regular Forms', ab:'RF'},
    //         {path: 'extended', title: 'Extended Forms', ab:'EF'},
    //         {path: 'validation', title: 'Validation Forms', ab:'VF'},
    //         {path: 'wizard', title: 'Wizard', ab:'W'}
    //     ]
    // },
    {
        path: '/doctors',
        title: 'Doctors',
        type: 'link',
        icontype: 'nc-icon nc-ambulance',
    },
    {
        path: '/locations',
        title: 'Locations',
        type: 'link',
        icontype: 'nc-icon nc-pin-3',
    },
    // {
    //     path: '/maps',
    //     title: 'Maps',
    //     type: 'sub',
    //     collapse: 'maps',
    //     icontype: 'nc-icon nc-pin-3',
    //     children: [
    //         {path: 'google', title: 'Google Maps', ab:'GM'},
    //         {path: 'fullscreen', title: 'Full Screen Map', ab:'FSM'},
    //         {path: 'vector', title: 'Vector Map', ab:'VM'}
    //     ]
    // },
    // {
    //     path: '/widgets',
    //     title: 'Widgets',
    //     type: 'link',
    //     icontype: 'nc-icon nc-box'
    // },
    // {
    //     path: '/charts',
    //     title: 'Charts',
    //     type: 'link',
    //     icontype: 'nc-icon nc-chart-bar-32'
    // },
    // {
    //     path: '/calendar',
    //     title: 'Calendar',
    //     type: 'link',
    //     icontype: 'nc-icon nc-calendar-60'
    // },
    {
        path: '/payments',
        title: 'payments',
        type: 'link',
        icontype: 'nc-icon nc-money-coins',
    }
];
let SidebarComponent = class SidebarComponent {
    isNotMobileMenu() {
        if (window.outerWidth > 991) {
            return false;
        }
        return true;
    }
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    ngAfterViewInit() {
    }
};
SidebarComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sidebar-cmp',
        template: _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
    })
], SidebarComponent);



/***/ }),

/***/ "550G":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/fixedplugin/fixedplugin.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"fixed-plugin\">\n    <div class=\"dropdown\">\n        <a href=\"javascript:void(0)\" data-toggle=\"dropdown\">\n        <i class=\"fa fa-cog fa-2x\"> </i>\n        </a>\n        <ul class=\"dropdown-menu\">\n            <li class=\"header-title\">Sidebar Background</li>\n            <li class=\"adjustments-line text-center\">\n                <a href=\"javascript:void(0)\" class=\"switch-trigger background-color\">\n                  <span class=\"badge filter badge-default\" data-color=\"brown\"></span>\n                  <span class=\"badge filter badge-light\" data-color=\"white\"></span>\n                </a>\n            </li>\n\n            <li class=\"header-title\">Sidebar Active Color</li>\n            <li class=\"adjustments-line text-center\">\n                <a href=\"javascript:void(0)\" class=\"switch-trigger active-color\">\n                    <span class=\"badge filter badge-primary\" data-color=\"primary\"></span>\n                    <span class=\"badge filter badge-info\" data-color=\"info\"></span>\n                    <span class=\"badge filter badge-success\" data-color=\"success\"></span>\n                    <span class=\"badge filter badge-warning\" data-color=\"warning\"></span>\n                    <span class=\"badge filter badge-danger active\" data-color=\"danger\"></span>\n                </a>\n            </li>\n        </ul>\n    </div>\n</div>\n");

/***/ }),

/***/ "5My1":
/*!**********************************************************!*\
  !*** ./src/app/shared/fixedplugin/fixedplugin.module.ts ***!
  \**********************************************************/
/*! exports provided: FixedPluginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedPluginModule", function() { return FixedPluginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _fixedplugin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fixedplugin.component */ "Pqk8");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let FixedPluginModule = class FixedPluginModule {
};
FixedPluginModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        declarations: [_fixedplugin_component__WEBPACK_IMPORTED_MODULE_3__["FixedPluginComponent"]],
        exports: [_fixedplugin_component__WEBPACK_IMPORTED_MODULE_3__["FixedPluginComponent"]]
    })
], FixedPluginModule);



/***/ }),

/***/ "71dJ":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/doctors/calendar.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<style>\n  .tbody{\n  cursor: pointer;\n}\n</style>\n\n<div class=\"main-content\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n\n            <div class=\"card\">\n              <div class=\"card-header\">\n                <h4 class=\"card-title\">DOCTORS</h4>\n              </div>\n                <div class=\"card-body\">\n                  <div class=\"toolbar\">\n                        <!--        Here you can write extra buttons/actions for the toolbar              -->\n                    </div>\n                      <table id=\"datatable2\" class=\"table table-striped table-bordered\" cellspacing=\"0\" width=\"100%\">\n                            <thead>\n                                <tr>\n                                  <th>{{ dataTable.headerRow[0] }}</th>\n                                  <th>{{ dataTable.headerRow[1] }}</th>\n                                  <th>{{ dataTable.headerRow[2] }}</th>\n                                  <th>{{ dataTable.headerRow[3] }}</th>\n                                  <th>{{ dataTable.headerRow[4] }}</th>\n                                </tr>\n                            </thead>\n                            \n                            <tbody>\n                                <tr *ngFor=\"let row of dataTable.dataRows\" class=\"tbodyTable\">\n                                    <td>{{row[0]}}</td>\n                                    <td>{{row[1]}}</td>\n                                    <td>{{row[2]}}</td>\n                                    <td>{{row[3]}}</td>\n                                    <td>{{row[4]}}</td>\n\n                                </tr>\n                            </tbody>\n                        </table>\n                </div>\n                <!-- end content-->\n            </div>\n            <!--  end card  -->\n        </div>\n        <!-- end col-md-12 -->\n    </div>\n    <!-- end row -->\n</div>\n");

/***/ }),

/***/ "A3xY":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "A6KR":
/*!*********************************************!*\
  !*** ./src/app/doctors/calendar.routing.ts ***!
  \*********************************************/
/*! exports provided: CalendarRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarRoutes", function() { return CalendarRoutes; });
/* harmony import */ var _calendar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar.component */ "viCY");

const CalendarRoutes = [{
        path: '',
        children: [{
                path: '',
                component: _calendar_component__WEBPACK_IMPORTED_MODULE_0__["CalendarComponent"]
            }]
    }];


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment, baseUrl, headers, captchaKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseUrl", function() { return baseUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headers", function() { return headers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "captchaKey", function() { return captchaKey; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
    recaptchaSitekey: '6LdhHnodAAAAANT35rUOPEZ0TnF31D6qOqSfby81',
    production: false
};
// export const baseUrl = 'https://api.vcdplans.com/';
const baseUrl = 'http://www.api.psd2htmlx.com/';
const headers = { 'Content-Type': 'application/json' };
const captchaKey = '6LdhHnodAAAAANT35rUOPEZ0TnF31D6qOqSfby81';


/***/ }),

/***/ "CpO+":
/*!************************************************!*\
  !*** ./src/app/shared/navbar/navbar.module.ts ***!
  \************************************************/
/*! exports provided: NavbarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarModule", function() { return NavbarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar.component */ "EtQq");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let NavbarModule = class NavbarModule {
};
NavbarModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        declarations: [_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"]],
        exports: [_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"]]
    })
], NavbarModule);



/***/ }),

/***/ "EJep":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/locations/charts.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<style>\n  .tbody{\n  cursor: pointer;\n}\n</style>\n\n<div class=\"main-content\">\n  <div class=\"row\">\n      <div class=\"col-md-12\">\n\n          <div class=\"card\">\n            <div class=\"card-header\">\n              <h4 class=\"card-title\">LOCATIONS</h4>\n            </div>\n              <div class=\"card-body\">\n                <div class=\"toolbar\">\n                      <!--        Here you can write extra buttons/actions for the toolbar              -->\n                  </div>\n                    <table id=\"datatable1\" class=\"table table-striped table-bordered\" cellspacing=\"0\" width=\"100%\">\n                          <thead>\n                              <tr>\n                                <th>{{ dataTable.headerRow[0] }}</th>\n                                <th>{{ dataTable.headerRow[1] }}</th>\n                                <th>{{ dataTable.headerRow[2] }}</th>\n                                <th>{{ dataTable.headerRow[3] }}</th>\n                              </tr>\n                          </thead>\n                          \n                          <tbody>\n                              <tr *ngFor=\"let row of dataTable.dataRows\" class=\"tbodyTable\">\n                                  <td>{{row[0]}}</td>\n                                  <td>{{row[1]}}</td>\n                                  <td>{{row[2]}}</td>\n                                  <td>{{row[3]}}</td>\n\n                              </tr>\n                          </tbody>\n                      </table>\n              </div>\n              <!-- end content-->\n          </div>\n          <!--  end card  -->\n      </div>\n      <!-- end col-md-12 -->\n  </div>\n  <!-- end row -->\n</div>\n");

/***/ }),

/***/ "EtQq":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./navbar.component.html */ "zRkE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/services/auth.service */ "lGQG");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var misc = {
    navbar_menu_visible: 0,
    active_collapse: true,
    disabled_collapse_init: 0,
};
let NavbarComponent = class NavbarComponent {
    constructor(location, renderer, element, router, auth) {
        this.renderer = renderer;
        this.element = element;
        this.router = router;
        this.auth = auth;
        this.fullname = '';
        this.shortName = '';
        this.organizationName = '';
        this.organizationAddress = '';
        this.open = false;
        this.location = location;
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }
    ngOnInit() {
        let user = this.auth.getUser();
        this.fullname = (user.fullname);
        this.organizationName = user.organizationName;
        this.organizationAddress = user.organizationAddress;
        //short name for profile
        let nameList = this.fullname.split(" ");
        this.shortName = nameList[0][0] + (nameList.length > 1 ? (nameList[1][0]) : (""));
        // this.listTitles = ROUTES.filter(listTitle => listTitle);
        const navbar = this.element.nativeElement;
        const body = document.getElementsByTagName('body')[0];
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
        if (body.classList.contains('sidebar-mini')) {
            misc.sidebar_mini_active = true;
        }
        this._router = this.router.events.filter(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]).subscribe((event) => {
            const $layer = document.getElementsByClassName('close-layer')[0];
            if ($layer) {
                $layer.remove();
            }
        });
    }
    logout() {
        this.auth.logout();
    }
    minimizeSidebar() {
        const body = document.getElementsByTagName('body')[0];
        if (misc.sidebar_mini_active === true) {
            body.classList.remove('sidebar-mini');
            misc.sidebar_mini_active = false;
        }
        else {
            setTimeout(function () {
                body.classList.add('sidebar-mini');
                misc.sidebar_mini_active = true;
            }, 300);
        }
        // we simulate the window Resize so the charts will get updated in realtime.
        const simulateWindowResize = setInterval(function () {
            window.dispatchEvent(new Event('resize'));
        }, 180);
        // we stop the simulation of Window Resize after the animations are completed
        setTimeout(function () {
            clearInterval(simulateWindowResize);
        }, 1000);
    }
    isMobileMenu() {
        if (window.outerWidth < 991) {
            return false;
        }
        return true;
    }
    sidebarOpen() {
        var toggleButton = this.toggleButton;
        var html = document.getElementsByTagName('html')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        const mainPanel = document.getElementsByClassName('main-panel')[0];
        if (window.innerWidth < 991) {
            mainPanel.style.position = 'fixed';
        }
        html.classList.add('nav-open');
        this.sidebarVisible = true;
    }
    sidebarClose() {
        var html = document.getElementsByTagName('html')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
        const mainPanel = document.getElementsByClassName('main-panel')[0];
        if (window.innerWidth < 991) {
            setTimeout(function () {
                mainPanel.style.position = '';
            }, 500);
        }
    }
    sidebarToggle() {
        // var toggleButton = this.toggleButton;
        // var body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible == false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    }
    getTitle() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        for (var item = 0; item < this.listTitles.length; item++) {
            var parent = this.listTitles[item];
            if (parent.path === titlee) {
                return parent.title;
            }
            else if (parent.children) {
                var children_from_url = titlee.split("/")[2];
                for (var current = 0; current < parent.children.length; current++) {
                    if (parent.children[current].path === children_from_url) {
                        return parent.children[current].title;
                    }
                }
            }
        }
        return 'Dashboard';
    }
    getPath() {
        // console.log(this.location);
        return this.location.prepareExternalUrl(this.location.path());
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
NavbarComponent.propDecorators = {
    button: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ["navbar-cmp", { static: false },] }]
};
NavbarComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'navbar-cmp',
        template: _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
    }),
    __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
], NavbarComponent);



/***/ }),

/***/ "OiN0":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin/admin-layout.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n  <div class=\"wrapper\">\n    <div class=\"sidebar\" data-color=\"brown\" data-active-color=\"danger\">\n        <sidebar-cmp></sidebar-cmp>\n    </div>  \n    \n    <div class=\"main-panel\">\n        <navbar-cmp></navbar-cmp>\n        <router-outlet></router-outlet>\n        <div *ngIf=\"!isMap()\">\n            <footer-cmp></footer-cmp>\n        </div>\n    </div>\n\n</div>");

/***/ }),

/***/ "Pqk8":
/*!*************************************************************!*\
  !*** ./src/app/shared/fixedplugin/fixedplugin.component.ts ***!
  \*************************************************************/
/*! exports provided: FixedPluginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedPluginComponent", function() { return FixedPluginComponent; });
/* harmony import */ var _raw_loader_fixedplugin_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./fixedplugin.component.html */ "550G");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let FixedPluginComponent = class FixedPluginComponent {
    ngOnInit() {
        var $sidebar = $('.sidebar');
        var $off_canvas_sidebar = $('.off-canvas-sidebar');
        var window_width = window.outerWidth;
        if (window_width > 767) {
            if ($('.fixed-plugin .dropdown').hasClass('show-dropdown')) {
                $('.fixed-plugin .dropdown').addClass('open');
            }
        }
        $('.fixed-plugin a').click(function (event) {
            // Alex if we click on switch, stop propagation of the event, so the dropdown will not be hide, otherwise we set the  section active
            if ($(this).hasClass('switch-trigger')) {
                if (event.stopPropagation) {
                    event.stopPropagation();
                }
                else if (window.event) {
                    window.event.cancelBubble = true;
                }
            }
        });
        $('.fixed-plugin .background-color span').click(function () {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
            var new_color = $(this).data('color');
            if ($sidebar.length != 0) {
                $sidebar.attr('data-color', new_color);
            }
            if ($off_canvas_sidebar.length != 0) {
                $off_canvas_sidebar.attr('data-color', new_color);
            }
        });
        $('.fixed-plugin .active-color span').click(function () {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
            var new_color = $(this).data('color');
            if ($sidebar.length != 0) {
                $sidebar.attr('data-active-color', new_color);
            }
            if ($off_canvas_sidebar.length != 0) {
                $off_canvas_sidebar.attr('data-active-color', new_color);
            }
        });
    }
};
FixedPluginComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'fixedplugin-cmp',
        template: _raw_loader_fixedplugin_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
    })
], FixedPluginComponent);



/***/ }),

/***/ "PsKS":
/*!******************************************!*\
  !*** ./src/app/userpage/user.routing.ts ***!
  \******************************************/
/*! exports provided: UserRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutes", function() { return UserRoutes; });
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.component */ "YIIq");

const UserRoutes = [{
        path: '',
        children: [{
                path: '',
                component: _user_component__WEBPACK_IMPORTED_MODULE_0__["UserComponent"]
            }]
    }];


/***/ }),

/***/ "QpQ6":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth/auth-layout.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n  <router-outlet></router-outlet>\n");

/***/ }),

/***/ "Saws":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/userpage/user.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <div class=\"card card-user\">\n        <div class=\"image\">\n          <img src=\"./assets/img/pk-pro-cover.jpg\" alt=\"...\">\n        </div>\n        <div class=\"card-body\">\n          <div class=\"author\">\n            <a href=\"javascript:void(0)\">\n              <img class=\"avatar border-gray\" src=\"./assets/img/default-avatar.png\" alt=\"...\">\n              <h5 class=\"title\">Chet Faker</h5>\n            </a>\n            <p class=\"description\">\n              @chetfaker\n            </p>\n          </div>\n          <p class=\"description text-center\">\n            \"I like the way you work it\n            <br> No diggity\n            <br> I wanna bag it up\"\n          </p>\n        </div>\n        <div class=\"card-footer\">\n          <hr>\n          <div class=\"button-container\">\n            <div class=\"row\">\n              <div class=\"col-lg-3 col-md-6 col-6 ml-auto\">\n                <h5>12\n                  <br>\n                  <small>Files</small>\n                </h5>\n              </div>\n              <div class=\"col-lg-4 col-md-6 col-6 ml-auto mr-auto\">\n                <h5>2GB\n                  <br>\n                  <small>Used</small>\n                </h5>\n              </div>\n              <div class=\"col-lg-3 mr-auto\">\n                <h5>24,6$\n                  <br>\n                  <small>Spent</small>\n                </h5>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- <div class=\"card\">\n        <div class=\"card-header\">\n          <h4 class=\"card-title\">Team Members</h4>\n        </div>\n        <div class=\"card-body\">\n          <ul class=\"list-unstyled team-members\">\n            <li>\n              <div class=\"row\">\n                <div class=\"col-md-2 col-2\">\n                  <div class=\"avatar\">\n                    <img src=\"./assets/img/faces/ayo-ogunseinde-2.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n                  </div>\n                </div>\n                <div class=\"col-md-7 col-7\">\n                  DJ Khaled\n                  <br />\n                  <span class=\"text-muted\">\n                    <small>Offline</small>\n                  </span>\n                </div>\n                <div class=\"col-md-3 col-3 text-right\">\n                  <button class=\"btn btn-sm btn-outline-success btn-round btn-icon\"><i class=\"fa fa-envelope\"></i></button>\n                </div>\n              </div>\n            </li>\n            <li>\n              <div class=\"row\">\n                <div class=\"col-md-2 col-2\">\n                  <div class=\"avatar\">\n                    <img src=\"./assets/img/faces/joe-gardner-2.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n                  </div>\n                </div>\n                <div class=\"col-md-7 col-7\">\n                  Creative Tim\n                  <br />\n                  <span class=\"text-success\">\n                    <small>Available</small>\n                  </span>\n                </div>\n                <div class=\"col-md-3 col-3 text-right\">\n                  <button class=\"btn btn-sm btn-outline-success btn-round btn-icon\"><i class=\"fa fa-envelope\"></i></button>\n                </div>\n              </div>\n            </li>\n            <li>\n              <div class=\"row\">\n                <div class=\"col-md-2 col-2\">\n                  <div class=\"avatar\">\n                    <img src=\"./assets/img/faces/clem-onojeghuo-2.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n                  </div>\n                </div>\n                <div class=\"col-ms-7 col-7\">\n                  Flume\n                  <br />\n                  <span class=\"text-danger\">\n                    <small>Busy</small>\n                  </span>\n                </div>\n                <div class=\"col-md-3 col-3 text-right\">\n                  <button class=\"btn btn-sm btn-outline-success btn-round btn-icon\"><i class=\"fa fa-envelope\"></i></button>\n                </div>\n              </div>\n            </li>\n          </ul>\n        </div>\n      </div> -->\n    </div>\n    <div class=\"col-md-8\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h5 class=\"title\">Edit Profile</h5>\n        </div>\n        <div class=\"card-body\">\n          <form>\n            <div class=\"row\">\n              <div class=\"col-md-5 pr-1\">\n                <div class=\"form-group\">\n                  <label>Company (disabled)</label>\n                  <input type=\"text\" class=\"form-control\" disabled=\"\" placeholder=\"Company\" value=\"VCD Provider\">\n                </div>\n              </div>\n              <div class=\"col-md-3 px-1\">\n                <div class=\"form-group\">\n                  <label>Username</label>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Username\" value=\"michael23\">\n                </div>\n              </div>\n              <div class=\"col-md-4 pl-1\">\n                <div class=\"form-group\">\n                  <label for=\"exampleInputEmail1\">Email address</label>\n                  <input type=\"email\" class=\"form-control\" placeholder=\"peter@vcdplans.org\">\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-6 pr-1\">\n                <div class=\"form-group\">\n                  <label>First Name</label>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Company\" value=\"Chet\">\n                </div>\n              </div>\n              <div class=\"col-md-6 pl-1\">\n                <div class=\"form-group\">\n                  <label>Last Name</label>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Last Name\" value=\"Faker\">\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div class=\"form-group\">\n                  <label>Address</label>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Home Address\" value=\"Melbourne, Australia\">\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-4 pr-1\">\n                <div class=\"form-group\">\n                  <label>City</label>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"City\" value=\"Melbourne\">\n                </div>\n              </div>\n              <div class=\"col-md-4 px-1\">\n                <div class=\"form-group\">\n                  <label>Country</label>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Country\" value=\"Australia\">\n                </div>\n              </div>\n              <div class=\"col-md-4 pl-1\">\n                <div class=\"form-group\">\n                  <label>Postal Code</label>\n                  <input type=\"number\" class=\"form-control\" placeholder=\"78547\">\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div class=\"form-group\">\n                  <label>About Me</label>\n                  <textarea rows=\"4\" cols=\"80\" class=\"form-control textarea\">Oh so, your weak rhyme You doubt I'll bother, reading into it</textarea>\n                </div>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.css */ "A3xY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let AppComponent = class AppComponent {
};
AppComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "WDth":
/*!**************************************************!*\
  !*** ./src/app/services/authentication.guard.ts ***!
  \**************************************************/
/*! exports provided: AuthenticationGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationGuard", function() { return AuthenticationGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "lGQG");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let AuthenticationGuard = class AuthenticationGuard {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivate(route, state) {
        if (this.auth.isAuthenticated()) {
            return true;
        }
        else {
            this.router.navigateByUrl('/login');
        }
    }
};
AuthenticationGuard.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
AuthenticationGuard = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], AuthenticationGuard);



/***/ }),

/***/ "WdiB":
/*!********************************************!*\
  !*** ./src/app/doctors/calendar.module.ts ***!
  \********************************************/
/*! exports provided: CalendarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarModule", function() { return CalendarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _calendar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calendar.component */ "viCY");
/* harmony import */ var _calendar_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calendar.routing */ "A6KR");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let CalendarModule = class CalendarModule {
};
CalendarModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_calendar_routing__WEBPACK_IMPORTED_MODULE_5__["CalendarRoutes"]),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
        ],
        declarations: [_calendar_component__WEBPACK_IMPORTED_MODULE_4__["CalendarComponent"]]
    })
], CalendarModule);



/***/ }),

/***/ "Y2kJ":
/*!**************************************************!*\
  !*** ./src/app/services/can-deacticate.guard.ts ***!
  \**************************************************/
/*! exports provided: CanDeacticateGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanDeacticateGuard", function() { return CanDeacticateGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "lGQG");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let CanDeacticateGuard = class CanDeacticateGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        if (this.authService.isAuthenticated()) {
            this.router.navigateByUrl('/provider');
            return false;
        }
        else {
            return true;
        }
    }
};
CanDeacticateGuard.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
CanDeacticateGuard = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], CanDeacticateGuard);



/***/ }),

/***/ "YGuC":
/*!*********************************************************!*\
  !*** ./src/app/layouts/admin/admin-layout.component.ts ***!
  \*********************************************************/
/*! exports provided: AdminLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return AdminLayoutComponent; });
/* harmony import */ var _raw_loader_admin_layout_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./admin-layout.component.html */ "OiN0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/filter */ "fjAU");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/navbar/navbar.component */ "EtQq");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






let AdminLayoutComponent = class AdminLayoutComponent {
    constructor(router, location) {
        this.router = router;
        this.yScrollStack = [];
        this.location = location;
    }
    ngOnInit() {
        /*
          const elemMainPanel = <HTMLElement>document.querySelector('.main-panel');
          const elemSidebar = <HTMLElement>document.querySelector('.sidebar .sidebar-wrapper');
          this.location.subscribe((ev:PopStateEvent) => {
              this.lastPoppedUrl = ev.url;
          });
           this.router.events.subscribe((event:any) => {
              if (event instanceof NavigationStart) {
                 if (event.url != this.lastPoppedUrl)
                     this.yScrollStack.push(window.scrollY);
             } else if (event instanceof NavigationEnd) {
                 if (event.url == this.lastPoppedUrl) {
                     this.lastPoppedUrl = undefined;
                     window.scrollTo(0, this.yScrollStack.pop());
                 }
                 else
                     window.scrollTo(0, 0);
             }
          });
          this._router = this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
               elemMainPanel.scrollTop = 0;
               //elemSidebar.scrollTop = 0;
          });
          const html = document.getElementsByTagName('html')[0];
          if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
              let ps = new PerfectScrollbar(elemMainPanel);
              ps = new PerfectScrollbar(elemSidebar);
              html.classList.add('perfect-scrollbar-on');
          }
          else {
              html.classList.add('perfect-scrollbar-off');
          }
          this._router = this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
            this.navbar.sidebarClose();
          });
          
          */
    }
    isMap() {
        // console.log(this.location.prepareExternalUrl(this.location.path()));
        if (this.location.prepareExternalUrl(this.location.path()) == '#/maps/fullscreen') {
            return true;
        }
        else {
            return false;
        }
    }
    isMac() {
        let bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    }
};
AdminLayoutComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }
];
AdminLayoutComponent.propDecorators = {
    sidebar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['sidebar', { static: false },] }],
    navbar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], { static: false },] }]
};
AdminLayoutComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-layout',
        template: _raw_loader_admin_layout_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
], AdminLayoutComponent);



/***/ }),

/***/ "YIIq":
/*!********************************************!*\
  !*** ./src/app/userpage/user.component.ts ***!
  \********************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _raw_loader_user_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./user.component.html */ "Saws");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let UserComponent = class UserComponent {
};
UserComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'user-cmp',
        template: _raw_loader_user_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
    })
], UserComponent);



/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _shared_fixedplugin_fixedplugin_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/fixedplugin/fixedplugin.module */ "5My1");
/* harmony import */ var _shared_footer_footer_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/footer/footer.module */ "cNqA");
/* harmony import */ var _shared_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/navbar/navbar.module */ "CpO+");
/* harmony import */ var _layouts_admin_admin_layout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layouts/admin/admin-layout.component */ "YGuC");
/* harmony import */ var _layouts_auth_auth_layout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layouts/auth/auth-layout.component */ "le+r");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.routing */ "beVS");
/* harmony import */ var _sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sidebar/sidebar.module */ "wCP4");
/* harmony import */ var _locations_charts_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./locations/charts.module */ "jnmE");
/* harmony import */ var _doctors_calendar_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./doctors/calendar.module */ "WdiB");
/* harmony import */ var _userpage_user_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./userpage/user.module */ "hU7q");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_12__["AppRoutes"], {
                useHash: true
            }),
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
            _sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_13__["SidebarModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _shared_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_9__["NavbarModule"],
            _shared_footer_footer_module__WEBPACK_IMPORTED_MODULE_8__["FooterModule"],
            _shared_fixedplugin_fixedplugin_module__WEBPACK_IMPORTED_MODULE_7__["FixedPluginModule"],
            _locations_charts_module__WEBPACK_IMPORTED_MODULE_14__["ChartsModule"],
            _doctors_calendar_module__WEBPACK_IMPORTED_MODULE_15__["CalendarModule"],
            _userpage_user_module__WEBPACK_IMPORTED_MODULE_16__["UserModule"],
        ],
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _layouts_admin_admin_layout_component__WEBPACK_IMPORTED_MODULE_10__["AdminLayoutComponent"],
            _layouts_auth_auth_layout_component__WEBPACK_IMPORTED_MODULE_11__["AuthLayoutComponent"],
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "beVS":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony import */ var _layouts_admin_admin_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts/admin/admin-layout.component */ "YGuC");
/* harmony import */ var _layouts_auth_auth_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layouts/auth/auth-layout.component */ "le+r");
/* harmony import */ var _services_can_deacticate_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/can-deacticate.guard */ "Y2kJ");
/* harmony import */ var _services_authentication_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/authentication.guard */ "WDth");




const AppRoutes = [{
        path: '',
        redirectTo: 'provider',
        pathMatch: 'full',
    }, {
        path: '',
        component: _layouts_admin_admin_layout_component__WEBPACK_IMPORTED_MODULE_0__["AdminLayoutComponent"],
        canActivate: [_services_authentication_guard__WEBPACK_IMPORTED_MODULE_3__["AuthenticationGuard"]],
        children: [{
                path: '',
                loadChildren: './dashboard/dashboard.module#DashboardModule'
            },
            // {
            //     path: 'components',
            //     loadChildren: './components/components.module#ComponentsModule'
            // },
            {
                path: 'user-profile',
                loadChildren: './userpage/user.module#UserModule'
            },
            {
                path: 'payment-details',
                loadChildren: './dashboard/doctors/widgets.module#WidgetsModule'
            },
            // {
            //     path: 'tables',
            //     loadChildren: './tables/tables.module#TablesModule'
            // },
            {
                path: 'payments',
                loadChildren: './tables/tables.module#TablesModule'
            },
            {
                path: 'locations',
                loadChildren: './locations/charts.module#ChartsModule'
            },
            {
                path: 'doctors',
                loadChildren: './doctors/calendar.module#CalendarModule'
            },
        ]
    }, {
        path: '',
        component: _layouts_auth_auth_layout_component__WEBPACK_IMPORTED_MODULE_1__["AuthLayoutComponent"],
        canActivate: [_services_can_deacticate_guard__WEBPACK_IMPORTED_MODULE_2__["CanDeacticateGuard"]],
        children: [{
                path: '',
                loadChildren: './sign/pages.module#PagesModule'
            }]
    }
];


/***/ }),

/***/ "cNqA":
/*!************************************************!*\
  !*** ./src/app/shared/footer/footer.module.ts ***!
  \************************************************/
/*! exports provided: FooterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterModule", function() { return FooterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer.component */ "jQpT");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let FooterModule = class FooterModule {
};
FooterModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        declarations: [_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
        exports: [_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]]
    })
], FooterModule);



/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./dashboard/dashboard.module": [
		"TDBs",
		"default~dashboard-dashboard-module~dashboard-doctors-widgets-module~sign-pages-module",
		"common",
		"dashboard-dashboard-module"
	],
	"./dashboard/doctors/widgets.module": [
		"l90r",
		"default~dashboard-dashboard-module~dashboard-doctors-widgets-module~sign-pages-module",
		"common",
		"dashboard-doctors-widgets-module"
	],
	"./doctors/calendar.module": [
		"WdiB"
	],
	"./locations/charts.module": [
		"jnmE"
	],
	"./sign/pages.module": [
		"5S1J",
		"default~dashboard-dashboard-module~dashboard-doctors-widgets-module~sign-pages-module",
		"sign-pages-module"
	],
	"./tables/tables.module": [
		"w7GV",
		"tables-tables-module"
	],
	"./userpage/user.module": [
		"hU7q"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "crnd";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "hU7q":
/*!*****************************************!*\
  !*** ./src/app/userpage/user.module.ts ***!
  \*****************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.component */ "YIIq");
/* harmony import */ var _user_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user.routing */ "PsKS");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let UserModule = class UserModule {
};
UserModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_user_routing__WEBPACK_IMPORTED_MODULE_5__["UserRoutes"]),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
        ],
        declarations: [_user_component__WEBPACK_IMPORTED_MODULE_4__["UserComponent"]]
    })
], UserModule);



/***/ }),

/***/ "jGP6":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer\">\n    <div class=\"container-fluid\">\n            <div class=\"text-center\">\n            <ul>\n                <b>VCD Customer Service</b> | 405 S Holland, Suite A | Wichita, KS 67209 | Fax: 801.466.4113 | Toll Free: 877.488.8900\n            </ul>\n            <ul style=\"font-size: small;\">\n                © 2022 Vision Care Direct. All Rights Reserved. Legal Information.\n            </ul>\n        </div>\n    </div>\n</footer>\n");

/***/ }),

/***/ "jQpT":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./footer.component.html */ "jGP6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let FooterComponent = class FooterComponent {
    constructor() {
        this.test = new Date();
    }
};
FooterComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'footer-cmp',
        template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
    })
], FooterComponent);



/***/ }),

/***/ "jnmE":
/*!********************************************!*\
  !*** ./src/app/locations/charts.module.ts ***!
  \********************************************/
/*! exports provided: ChartsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsModule", function() { return ChartsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _charts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./charts.component */ "0Aw5");
/* harmony import */ var _charts_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./charts.routing */ "zHB9");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let ChartsModule = class ChartsModule {
};
ChartsModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_charts_routing__WEBPACK_IMPORTED_MODULE_5__["ChartsRoutes"]),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
        ],
        declarations: [_charts_component__WEBPACK_IMPORTED_MODULE_4__["ChartsComponent"]]
    })
], ChartsModule);



/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jwt-decode */ "EjJx");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let AuthService = class AuthService {
    constructor(router) {
        this.router = router;
        this.user = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.member = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.token = null;
        this.refreshToken = null;
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
    isAuthenticated() {
        const tokenData = localStorage.getItem('token');
        if (tokenData == null) {
            return false;
        }
        else {
            var tokenDataDecoded = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_3__["default"])(tokenData);
            var _accessTokenCurrentTime = new Date();
            var _accessTokenExpTime = new Date(tokenDataDecoded['exp'] * 1000);
            var TokenExpAfter = Math.floor((_accessTokenExpTime.getTime() - _accessTokenCurrentTime.getTime()) / 1000);
            if (TokenExpAfter < 0) {
                return false;
            }
            else {
                return true;
            }
        }
    }
    /**
    * Set Token function
    * Set token in the localStorage.
    */
    setToken(token) {
        this.token = token;
        localStorage.setItem('token', token);
    }
    /**
    * Get Access Token Function
    *
    */
    getAccessToken() {
        if (this.token) {
            return this.token;
        }
        else {
            return null;
        }
    }
    /**
     * Set Refresh Token Function
     * Set refresh token in the localStorage
     */
    setRefreshToken(Reftoken) {
        this.refreshToken = Reftoken;
        localStorage.setItem('refreshToken', Reftoken);
    }
    /**
     * Get Refresh Token Function
     */
    getRefreshToken() {
        if (this.refreshToken) {
            return this.refreshToken;
        }
        else {
            return null;
        }
    }
    /**
     * Set User Function
     * Set User in the localStorage
     */
    setUser(user) {
        this.user.next(user);
        localStorage.setItem('user', JSON.stringify(user));
    }
    /**
     * Get User Function
     * Get User from the localStorage
     */
    getUser() {
        const user = this.user.getValue();
        if (user) {
            return user;
        }
        else {
            return {};
        }
    }
    /**
     * Set Member Function
     * Set Member in the localStorage
     */
    setMember(member) {
        this.member.next(member);
        localStorage.setItem('member', JSON.stringify(member));
    }
    /**
     * Get Member Function
     * Get Member from the localStorage
     */
    getMember() {
        const member = this.member.getValue();
        if (member) {
            return member;
        }
        else {
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
        if (url) {
            this.router.navigateByUrl('/login');
        }
    }
    /**
     * Get User name Function
     * Get name from the localStorage
     */
    getUserfname() {
        const user = this.user.getValue();
        if (user) {
            return user.fullname;
        }
        else {
            return null;
        }
    }
    /**
     * EmailAddress Function
     * Get EmailAddress from the localStorage
     */
    getUseremail() {
        const user = this.user.getValue();
        if (user) {
            return user.email;
        }
        else {
            return null;
        }
    }
    /**
     * Get User username Function
     * Get username from the localStorage
     */
    getUsername() {
        const user = this.user.getValue();
        if (user) {
            return user.username;
        }
        else {
            return null;
        }
    }
    /**
    * Generate and Get DeviceID Function
    * Get DeviceID from the localStorage
    * if device not present in the LocalStorage then generate new deviceID.
    */
    getDeviceID() {
        if (localStorage.getItem('deviceID')) {
            const deviceID = localStorage.getItem('deviceID');
            return deviceID;
        }
        else {
            const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
            const deviceID = [...crypto.getRandomValues(new Uint8Array(32)), ...crypto.getRandomValues(new Uint8Array(32))].map(v => chars[v % chars.length]).join('');
            localStorage.setItem('deviceID', deviceID);
            return deviceID;
        }
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
AuthService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], AuthService);



/***/ }),

/***/ "le+r":
/*!*******************************************************!*\
  !*** ./src/app/layouts/auth/auth-layout.component.ts ***!
  \*******************************************************/
/*! exports provided: AuthLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function() { return AuthLayoutComponent; });
/* harmony import */ var _raw_loader_auth_layout_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./auth-layout.component.html */ "QpQ6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let AuthLayoutComponent = class AuthLayoutComponent {
};
AuthLayoutComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-layout',
        template: _raw_loader_auth_layout_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
    })
], AuthLayoutComponent);



/***/ }),

/***/ "viCY":
/*!***********************************************!*\
  !*** ./src/app/doctors/calendar.component.ts ***!
  \***********************************************/
/*! exports provided: CalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarComponent", function() { return CalendarComponent; });
/* harmony import */ var _raw_loader_calendar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./calendar.component.html */ "71dJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let CalendarComponent = class CalendarComponent {
    ngOnInit() {
        this.dataTable = {
            headerRow: ['name', 'department', 'mobile no', 'email', 'avaliable'],
            dataRows: [
                ['Feddy Strange, O.D.', 'Cardiology', '+17451252041', 'peter@vcdcare.org', 'Yes',],
                ['Feddy Strange, O.D.', 'Cardiology', '+17451252041', 'peter@vcdcare.org', 'Yes',],
                ['Feddy Strange, O.D.', 'Cardiology', '+17451252041', 'peter@vcdcare.org', 'Yes',],
                ['Feddy Strange, O.D.', 'Cardiology', '+17451252041', 'peter@vcdcare.org', 'Yes',],
                ['Feddy Strange, O.D.', 'Cardiology', '+17451252041', 'peter@vcdcare.org', 'Yes',],
                ['Feddy Strange, O.D.', 'Cardiology', '+17451252041', 'peter@vcdcare.org', 'Yes',],
                ['Feddy Strange, O.D.', 'Cardiology', '+17451252041', 'peter@vcdcare.org', 'Yes',],
                ['Feddy Strange, O.D.', 'Cardiology', '+17451252041', 'peter@vcdcare.org', 'Yes',],
                ['Feddy Strange, O.D.', 'Cardiology', '+17451252041', 'peter@vcdcare.org', 'Yes',],
                ['John Parker, O.D.', 'Gynaecology', '+17451252041', 'peter@vcdcare.org', 'No',],
                ['John Parker, O.D.', 'Gynaecology', '+17451252041', 'peter@vcdcare.org', 'No',],
                ['John Parker, O.D.', 'Gynaecology', '+17451252041', 'peter@vcdcare.org', 'No',],
                ['John Parker, O.D.', 'Gynaecology', '+17451252041', 'peter@vcdcare.org', 'No',],
                ['John Parker, O.D.', 'Gynaecology', '+17451252041', 'peter@vcdcare.org', 'No',],
                ['John Parker, O.D.', 'Gynaecology', '+17451252041', 'peter@vcdcare.org', 'No',],
                ['John Parker, O.D.', 'Gynaecology', '+17451252041', 'peter@vcdcare.org', 'No',],
                ['John Parker, O.D.', 'Gynaecology', '+17451252041', 'peter@vcdcare.org', 'No',],
                ['John Parker, O.D.', 'Gynaecology', '+17451252041', 'peter@vcdcare.org', 'No',],
                ['John Parker, O.D.', 'Gynaecology', '+17451252041', 'peter@vcdcare.org', 'No',],
                ['John Parker, O.D.', 'Gynaecology', '+17451252041', 'peter@vcdcare.org', 'No',],
                ['John Parker, O.D.', 'Gynaecology', '+17451252041', 'peter@vcdcare.org', 'No',],
            ]
        };
    }
    ngAfterViewInit() {
        $('#datatable2').DataTable({
            "pagingType": "full_numbers",
            "lengthMenu": [
                [10, 25, 50, -1],
                [10, 25, 50, "All"]
            ],
            responsive: true,
            language: {
                search: "_INPUT_",
                searchPlaceholder: "Search doctors",
            }
        });
        var table = $('#datatable').DataTable();
        // Edit record
        table.on('click', '.edit', function () {
            let $tr = $(this).closest('tr');
            var data = table.row($tr).data();
            alert('You press on Row: ' + data[0] + ' ' + data[1] + ' ' + data[2] + '\'s row.');
        });
        // Delete a record
        table.on('click', '.remove', function (e) {
            let $tr = $(this).closest('tr');
            table.row($tr).remove().draw();
            e.preventDefault();
        });
        //Like record
        table.on('click', '.like', function () {
            alert('You clicked on Like button');
        });
    }
};
CalendarComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'calendar-cmp',
        template: _raw_loader_calendar_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
    })
], CalendarComponent);



/***/ }),

/***/ "wCP4":
/*!*******************************************!*\
  !*** ./src/app/sidebar/sidebar.module.ts ***!
  \*******************************************/
/*! exports provided: SidebarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarModule", function() { return SidebarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar.component */ "47Jg");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let SidebarModule = class SidebarModule {
};
SidebarModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]],
        declarations: [_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"]],
        exports: [_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"]]
    })
], SidebarModule);



/***/ }),

/***/ "zHB9":
/*!*********************************************!*\
  !*** ./src/app/locations/charts.routing.ts ***!
  \*********************************************/
/*! exports provided: ChartsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsRoutes", function() { return ChartsRoutes; });
/* harmony import */ var _charts_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./charts.component */ "0Aw5");

const ChartsRoutes = [{
        path: '',
        children: [{
                path: '',
                component: _charts_component__WEBPACK_IMPORTED_MODULE_0__["ChartsComponent"]
            }]
    }];


/***/ }),

/***/ "zRkE":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<style>\n  .profileImage{\n    background-color: #ffffff;\n    color: #3D5A80;\n    line-height: 43px;\n    width: 45px;\n    height: 45px;\n    border-radius: 50%;\n    font-size: 20px;\n    text-align: center;\n    margin-right: 1%;\n  }\n  .dropdown-toggle::after{\n  display:none!important;\n  }\n</style>\n\n<nav #navbar class=\"navbar navbar-expand-lg navbar-absolute\" [ngClass]=\"{ 'bg-white': open === true , 'navbar-transparent': open === false}\">\n \n  <div class=\"container-fluid\">\n    \n    <div class=\"navbar-wrapper\">\n        \n      <div style=\"color: #ffffff;\">\n        \n        <h5><a href=\"#/provider\">\n        </a> CSR Provider <span style=\"font-size: medium;\">7751 Mountain View Rd, Tooele, UT 84074</span> </h5>\n      </div>\n    </div>\n    \n    <div class=\"\" id=\"navigation\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item dropdown\">\n          <a class=\"nav-link dropdown-toggle\" href=\"pablo\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            <!-- <i class=\"nc-icon nc-circle-10\"></i> -->\n            <div class=\"profileImage\">\n              {{shortName}}\n            </div>\n          </a>\n          <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\n            <a class=\"dropdown-item\" href=\"javascript:void(0)\" style=\"background-color: #3d405c; color: #ffffff;\"><b>{{fullname}}</b></a>\n            <a class=\"dropdown-item\" href=\"#/user-profile/info/profile\"><i class=\"nc-icon nc-single-02\"></i> Profile</a>\n            <a class=\"dropdown-item\" href=\"#/user-profile/info/changepassword\"><i class=\"nc-icon nc-lock-circle-open\"></i> Change Password</a>\n            <a class=\"dropdown-item\" href=\"#/user-profile/info/account\"><i class=\"nc-icon nc-touch-id\"></i> Account & Notification</a>\n            <a class=\"dropdown-item\" (click)=\"logout()\" style=\"cursor: pointer;\"><i class=\"nc-icon nc-button-power\"></i> Logout</a>\n          </div>\n        </li>\n        \n      </ul>\n    </div>\n  </div>\n</nav>\n\n \n  \n  \n  \n  \n  \n");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/*!

 =========================================================
 * Paper Dashboard Pro Angular - v1.4.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/paper-dashboard-pro-angular
 * Copyright 2020 Creative Tim (http://www.creative-tim.com)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ "zvoc":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"logo\">\n\t<a href=\"#\" class=\"simple-text logo-mini\">\n        <div class=\"logo-image-small\">\n            <img src=\"./assets/img/angular2-logo-white.png\"/>\n        </div>\n\t</a>\n\n\t<a href=\"#\" class=\"simple-text logo-normal\">\n\t\tVCD Portal\n\t</a>\n</div>\n\n\n\n<div class=\"sidebar-wrapper\">\n\n  <div class=\"user\">\n    <div class=\"photo\">\n      <img src=\"./assets/img/default-avatar.png\" />\n    </div>\n    <div class=\"info\">\n      <a data-toggle=\"collapse\" href=\"#collapseExample\" class=\"collapsed\">\n        <span>\n          Chet Faker\n          <b class=\"caret\"></b>\n        </span>\n      </a>\n      <div class=\"clearfix\"></div>\n      <div class=\"collapse\" id=\"collapseExample\">\n        <ul class=\"nav\">\n          <li>\n            <a href=\"#/user-profile\">\n              <span class=\"sidebar-mini-icon\">MP</span>\n              <span class=\"sidebar-normal\">My Profile</span>\n            </a>\n          </li>\n          <li>\n            <a href=\"javascript:void(0)\">\n              <span class=\"sidebar-mini-icon\">EP</span>\n              <span class=\"sidebar-normal\">Edit Profile</span>\n            </a>\n          </li>\n          <li>\n            <a href=\"javascript:void(0)\">\n              <span class=\"sidebar-mini-icon\">S</span>\n              <span class=\"sidebar-normal\">Settings</span>\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n\t<!-- <div *ngIf=\"isNotMobileMenu()\">\n        <form class=\"navbar-form navbar-left navbar-search-form\" role=\"search\">\n            <div class=\"input-group\">\n                <span class=\"input-group-addon\"><i class=\"fa fa-search\"></i></span>\n                <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Search...\">\n            </div>\n        </form>\n        <ul class=\"nav nav-mobile-menu\">\n            <li>\n                <a href=\"#stats\" class=\"dropdown-toggle btn-magnify\" data-toggle=\"dropdown\">\n                    <i class=\"ti-panel\"></i>\n                    <p>Stats</p>\n                </a>\n            </li>\n            <li class=\"dropdown\">\n                <a href=\"#notifications\" class=\"dropdown-toggle btn-rotate\" data-toggle=\"dropdown\">\n                    <i class=\"ti-bell\"></i>\n                    <span class=\"notification\">5</span>\n                    <p class=\"hidden-md hidden-lg\">\n                        Notifications\n                        <b class=\"caret\"></b>\n                    </p>\n                </a>\n                <ul class=\"dropdown-menu\">\n                    <li><a href=\"#not1\">Notification 1</a></li>\n                    <li><a href=\"#not2\">Notification 2</a></li>\n                    <li><a href=\"#not3\">Notification 3</a></li>\n                    <li><a href=\"#not4\">Notification 4</a></li>\n                    <li><a href=\"#another\">Another notification</a></li>\n                </ul>\n            </li>\n            <li>\n                <a class=\"btn-rotate\">\n                    <i class=\"ti-settings\"></i>\n                    <p class=\"hidden-md hidden-lg\">\n                        Settings\n                    </p>\n                </a>\n            </li>\n        </ul>\n    </div> -->\n        <ul class=\"nav\">\n            <li routerLinkActive=\"active\" *ngFor=\"let menuitem of menuItems\">\n                <!--If is a single link-->\n                <a [routerLink]=\"[menuitem.path]\" *ngIf=\"menuitem.type === 'link'\">\n                    <i class=\"{{menuitem.icontype}}\"></i>\n                    <p>{{menuitem.title}}</p>\n                </a>\n                <!--If it have a submenu-->\n                <a data-toggle=\"collapse\" href=\"#{{menuitem.collapse}}\" *ngIf=\"menuitem.type === 'sub'\">\n                    <i class=\"{{menuitem.icontype}}\"></i>\n                    <p>{{menuitem.title}}<b class=\"caret\"></b></p>\n                </a>\n\n                <!--Display the submenu items-->\n                <div id=\"{{menuitem.collapse}}\" class=\"collapse\" *ngIf=\"menuitem.type === 'sub'\">\n                    <ul class=\"nav\">\n                        <li routerLinkActive=\"active\" *ngFor=\"let childitem of menuitem.children\">\n                            <a [routerLink]=\"[menuitem.path, childitem.path]\">\n                                <span class=\"sidebar-mini-icon\">{{childitem.ab}}</span>\n                                <span class=\"sidebar-normal\">{{childitem.title}}</span>\n                            </a>\n                        </li>\n                    </ul>\n                </div>\n            </li>\n        </ul>\n\n</div>\n");

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map