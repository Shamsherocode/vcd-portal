(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tables-tables-module"], {
    /***/
    "GnNX":
    /*!*************************************************************!*\
      !*** ./src/app/tables/datatable.net/datatable.component.ts ***!
      \*************************************************************/

    /*! exports provided: DataTableComponent */

    /***/
    function GnNX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataTableComponent", function () {
        return DataTableComponent;
      });
      /* harmony import */


      var _raw_loader_datatable_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./datatable.component.html */
      "nDnM");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

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

      var DataTableComponent = /*#__PURE__*/function () {
        function DataTableComponent(router) {
          _classCallCheck(this, DataTableComponent);

          this.router = router;
        }

        _createClass(DataTableComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.dataTable = {
              headerRow: ['patient name', 'payment id', 'date of service', 'status', 'amount'],
              dataRows: [['Peter Parker', '1101', '10-feb-2022', 'Paid', '120$'], ['Ted Strange', '1102', '10-feb-2022', 'Due', '120$'], ['Peter Parker', '1103', '10-feb-2022', 'Due', '120$'], ['Ted Strange', '1104', '10-feb-2022', 'Due', '120$'], ['Peter Parker', '1105', '10-feb-2022', 'Paid', '120$'], ['Ted Strange', '1106', '10-feb-2022', 'Due', '120$'], ['Peter Parker', '1107', '10-feb-2022', 'Due', '120$'], ['Ted Strange', '1108', '10-feb-2022', 'Due', '120$'], ['Peter Parker', '1109', '10-feb-2022', 'Paid', '120$'], ['Ted Strange', '1101', '10-feb-2022', 'Due', '120$'], ['Peter Parker', '1101', '10-feb-2022', 'Due', '120$'], ['Ted Strange', '1101', '10-feb-2022', 'Due', '120$'], ['Peter Parker', '1101', '10-feb-2022', 'Due', '120$'], ['Ted Strange', '1101', '10-feb-2022', 'Paid', '120$'], ['Peter Parker', '1101', '10-feb-2022', 'Paid', '120$'], ['Ted Strange', '1101', '10-feb-2022', 'Due', '120$'], ['Peter Parker', '1101', '10-feb-2022', 'Paid', '120$'], ['Ted Strange', '1101', '10-feb-2022', 'Due', '120$'], ['Sam Parker', '1101', '10-feb-2022', 'Paid', '120$']]
            };
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            $('#datatable').DataTable({
              "pagingType": "full_numbers",
              "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
              responsive: true,
              language: {
                search: "_INPUT_",
                searchPlaceholder: "Search payments"
              }
            });
            var table = $('#datatable').DataTable(); // Edit record

            table.on('click', '.edit', function () {
              var $tr = $(this).closest('tr');
              var data = table.row($tr).data();
              alert('You press on Row: ' + data[0] + ' ' + data[1] + ' ' + data[2] + '\'s row.');
            }); // Delete a record

            table.on('click', '.remove', function (e) {
              var $tr = $(this).closest('tr');
              table.row($tr).remove().draw();
              e.preventDefault();
            }); //Like record

            table.on('click', '.like', function () {
              alert('You clicked on Like button');
            });
          }
        }, {
          key: "redirectPage",
          value: function redirectPage() {
            this.router.navigateByUrl('/payment-details');
          }
        }]);

        return DataTableComponent;
      }();

      DataTableComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      DataTableComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'data-table-cmp',
        template: _raw_loader_datatable_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
      }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], DataTableComponent);
      /***/
    },

    /***/
    "MdzC":
    /*!***************************************************************!*\
      !*** ./src/app/tables/regulartable/regulartable.component.ts ***!
      \***************************************************************/

    /*! exports provided: RegularTableComponent */

    /***/
    function MdzC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegularTableComponent", function () {
        return RegularTableComponent;
      });
      /* harmony import */


      var _raw_loader_regulartable_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./regulartable.component.html */
      "uRoB");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
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

      var RegularTableComponent = /*#__PURE__*/function () {
        function RegularTableComponent() {
          _classCallCheck(this, RegularTableComponent);
        }

        _createClass(RegularTableComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.tableData1 = {
              headerRow: ['ID', 'Name', 'Country', 'City', 'Salary'],
              dataRows: [['1', 'Dakota Rice', 'Niger', 'Oud-Turnhout', '$36,738'], ['2', 'Minerva Hooper', 'Curaçao', 'Sinaai-Waas', '$23,789'], ['3', 'Sage Rodriguez', 'Netherlands', 'Baileux', '$56,142'], ['4', 'Philip Chaney', 'Korea, South', 'Overland Park', '$38,735'], ['5', 'Doris Greene', 'Malawi', 'Feldkirchen in Kärnten', '$63,542'], ['6', 'Mason Porter', 'Chile', 'Gloucester', '$78,615']]
            };
            this.tableData2 = {
              headerRow: ['ID', 'Name', 'Salary', 'Country', 'City'],
              dataRows: [['1', 'Dakota Rice', '$36,738', 'Niger', 'Oud-Turnhout'], ['2', 'Minerva Hooper', '$23,789', 'Curaçao', 'Sinaai-Waas'], ['3', 'Sage Rodriguez', '$56,142', 'Netherlands', 'Baileux'], ['4', 'Philip Chaney', '$38,735', 'Korea, South', 'Overland Park'], ['5', 'Doris Greene', '$63,542', 'Malawi', 'Feldkirchen in Kärnten'], ['6', 'Mason Porter', '$78,615', 'Chile', 'Gloucester']]
            };
            this.tableData3 = {
              headerRow: ['ID', 'Name', 'Salary', 'Country', 'City'],
              dataRows: [['1', 'Dakota Rice (Success)', '$36,738', 'Niger', 'Oud-Turnhout'], ['2', 'Minerva Hooper', '$23,789', 'Curaçao', 'Sinaai-Waas'], ['3', 'Sage Rodriguez (Info)', '$56,142', 'Netherlands', 'Baileux'], ['4', 'Philip Chaney', '$38,735', 'Korea, South', 'Overland Park'], ['5', 'Doris Greene (Danger)', '$63,542', 'Malawi', 'Feldkirchen in Kärnten'], ['6', 'Mason Porter', '$78,615', 'Chile', 'Gloucester'], ['7', 'Mike Chaney (Warning)', '$38,735', 'Romania', 'Bucharest']]
            };
          }
        }]);

        return RegularTableComponent;
      }();

      RegularTableComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'regular-table-cmp',
        template: _raw_loader_regulartable_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
      })], RegularTableComponent);
      /***/
    },

    /***/
    "U+hj":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tables/extendedtable/extendedtable.component.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function UHj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h4 class=\"card-title\"> PAYMENT DETAILS</h4>\n        </div>\n        <div class=\"card-body\">\n            <table class=\"table\">\n              <thead class=\"text-primary\">\n                <th class=\"text-center\">\n                  Payment ID\n                </th>\n                <th>\n                  Patient Name\n                </th>\n                <th>\n                  Date of Service\n                </th>\n                <th class=\"text-center\">\n                  Status\n                </th>\n                <th class=\"text-right\">\n                  Amount\n                </th>\n              </thead>\n              <tbody>\n                <tr>\n                  <td class=\"text-center\">\n                    1011\n                  </td>\n                  <td>\n                    Andrew Mike\n                  </td>\n                  <td>\n                    10-feb-2022\n                  </td>\n                  <td class=\"text-center\">\n                    Paid\n                  </td>\n                  <td class=\"text-right\">\n                    € 99,225\n                  </td>\n                </tr>\n                <tr>\n                  <td class=\"text-center\">\n                    1011\n                  </td>\n                  <td>\n                    John Doe\n                  </td>\n                  <td>\n                    10-feb-2022\n                  </td>\n                  <td class=\"text-center\">\n                    Paid\n                  </td>\n                  <td class=\"text-right\">\n                    € 89,241\n                  </td>\n                </tr>\n                <tr>\n                  <td class=\"text-center\">\n                    1011\n                  </td>\n                  <td>\n                    Alex Mike\n                  </td>\n                  <td>\n                    10-feb-2022\n                  </td>\n                  <td class=\"text-center\">\n                    Paid\n                  </td>\n                  <td class=\"text-right\">\n                    € 92,144\n                  </td>\n                </tr>\n                <tr>\n                  <td class=\"text-center\">\n                    1011\n                  </td>\n                  <td>\n                    Mike Monday\n                  </td>\n                  <td>\n                    10-feb-2022\n                  </td>\n                  <td class=\"text-center\">\n                    Paid\n                  </td>\n                  <td class=\"text-right\">\n                    € 49,990\n                  </td>\n                </tr>\n                <tr>\n                  <td class=\"text-center\">\n                    1011\n                  </td>\n                  <td>\n                    Paul Dickens\n                  </td>\n                  <td>\n                    10-feb-2022\n                  </td>\n                  <td class=\"text-center\">\n                    Paid\n                  </td>\n                  <td class=\"text-right\">\n                    € 69,201\n                  </td>\n                </tr>\n                <tr>\n                  <td class=\"text-center\">\n                    1011\n                  </td>\n                  <td>\n                    Manuel Rico\n                  </td>\n                  <td>\n                    10-feb-2022\n                  </td>\n                  <td class=\"text-center\">\n                    Paid\n                  </td>\n                  <td class=\"text-right\">\n                    € 99,201\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "ZFWX":
    /*!******************************************!*\
      !*** ./src/app/tables/tables.routing.ts ***!
      \******************************************/

    /*! exports provided: TablesRoutes */

    /***/
    function ZFWX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TablesRoutes", function () {
        return TablesRoutes;
      });
      /* harmony import */


      var _datatable_net_datatable_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./datatable.net/datatable.component */
      "GnNX");

      var TablesRoutes = [{
        path: '',
        children: [{
          path: '',
          component: _datatable_net_datatable_component__WEBPACK_IMPORTED_MODULE_0__["DataTableComponent"]
        }]
      }];
      /***/
    },

    /***/
    "hq8u":
    /*!*****************************************************************!*\
      !*** ./src/app/tables/extendedtable/extendedtable.component.ts ***!
      \*****************************************************************/

    /*! exports provided: ExtendedTableComponent */

    /***/
    function hq8u(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExtendedTableComponent", function () {
        return ExtendedTableComponent;
      });
      /* harmony import */


      var _raw_loader_extendedtable_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./extendedtable.component.html */
      "U+hj");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
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

      var ExtendedTableComponent = /*#__PURE__*/function () {
        function ExtendedTableComponent() {
          _classCallCheck(this, ExtendedTableComponent);
        }

        _createClass(ExtendedTableComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            // Init Tooltips
            $('[rel="tooltip"]').tooltip();
          }
        }]);

        return ExtendedTableComponent;
      }();

      ExtendedTableComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'extended-table-cmp',
        template: _raw_loader_extendedtable_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
      })], ExtendedTableComponent);
      /***/
    },

    /***/
    "nDnM":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tables/datatable.net/datatable.component.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function nDnM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<style>\n  .tbody{\n  cursor: pointer;\n}\n</style>\n\n<div class=\"main-content\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n\n                <div class=\"card\">\n                  <div class=\"card-header\">\n                    <h4 class=\"card-title\">PAYMENT HISTORY</h4>\n                  </div>\n                    <div class=\"card-body\">\n                      <div class=\"toolbar\">\n                            <!--        Here you can write extra buttons/actions for the toolbar              -->\n                        </div>\n                          <table id=\"datatable\" class=\"table table-striped table-bordered\" cellspacing=\"0\" width=\"100%\">\n                                <thead>\n                                    <tr>\n                                      <th>{{ dataTable.headerRow[0] }}</th>\n                                      <th>{{ dataTable.headerRow[1] }}</th>\n                                      <th>{{ dataTable.headerRow[2] }}</th>\n                                      <th>{{ dataTable.headerRow[3] }}</th>\n                                      <th>{{ dataTable.headerRow[4] }}</th>\n                                    </tr>\n                                </thead>\n                                \n                                <tbody>\n                                    <tr *ngFor=\"let row of dataTable.dataRows\" class=\"tbodyTable\">\n                                        <td (click)=\"redirectPage()\">{{row[0]}}</td>\n                                        <td (click)=\"redirectPage()\">{{row[1]}}</td>\n                                        <td (click)=\"redirectPage()\">{{row[2]}}</td>\n                                        <td (click)=\"redirectPage()\">{{row[3]}}</td>\n                                        <td (click)=\"redirectPage()\">{{row[4]}}</td>\n\n                                    </tr>\n                                </tbody>\n                            </table>\n                    </div>\n                    <!-- end content-->\n                </div>\n                <!--  end card  -->\n            </div>\n            <!-- end col-md-12 -->\n        </div>\n        <!-- end row -->\n</div>\n";
      /***/
    },

    /***/
    "uRoB":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tables/regulartable/regulartable.component.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function uRoB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h4 class=\"card-title\"> Simple Table</h4>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"table-responsive\">\n            <table class=\"table\">\n              <thead class=\"\">\n                <th>\n                  Name\n                </th>\n                <th>\n                  Country\n                </th>\n                <th>\n                  City\n                </th>\n                <th class=\"text-right\">\n                  Salary\n                </th>\n              </thead>\n              <tbody>\n                <tr>\n                  <td>\n                    Dakota Rice\n                  </td>\n                  <td>\n                    Niger\n                  </td>\n                  <td>\n                    Oud-Turnhout\n                  </td>\n                  <td class=\"text-right\">\n                    $36,738\n                  </td>\n                </tr>\n                <tr>\n                  <td>\n                    Minerva Hooper\n                  </td>\n                  <td>\n                    Curaçao\n                  </td>\n                  <td>\n                    Sinaai-Waas\n                  </td>\n                  <td class=\"text-right\">\n                    $23,789\n                  </td>\n                </tr>\n                <tr>\n                  <td>\n                    Sage Rodriguez\n                  </td>\n                  <td>\n                    Netherlands\n                  </td>\n                  <td>\n                    Baileux\n                  </td>\n                  <td class=\"text-right\">\n                    $56,142\n                  </td>\n                </tr>\n                <tr>\n                  <td>\n                    Philip Chaney\n                  </td>\n                  <td>\n                    Korea, South\n                  </td>\n                  <td>\n                    Overland Park\n                  </td>\n                  <td class=\"text-right\">\n                    $38,735\n                  </td>\n                </tr>\n                <tr>\n                  <td>\n                    Doris Greene\n                  </td>\n                  <td>\n                    Malawi\n                  </td>\n                  <td>\n                    Feldkirchen in Kärnten\n                  </td>\n                  <td class=\"text-right\">\n                    $63,542\n                  </td>\n                </tr>\n                <tr>\n                  <td>\n                    Mason Porter\n                  </td>\n                  <td>\n                    Chile\n                  </td>\n                  <td>\n                    Gloucester\n                  </td>\n                  <td class=\"text-right\">\n                    $78,615\n                  </td>\n                </tr>\n                <tr>\n                  <td>\n                    Jon Porter\n                  </td>\n                  <td>\n                    Portugal\n                  </td>\n                  <td>\n                    Gloucester\n                  </td>\n                  <td class=\"text-right\">\n                    $98,615\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-12\">\n      <div class=\"card card-plain\">\n        <div class=\"card-header\">\n          <h4 class=\"card-title\"> Table on Plain Background</h4>\n          <p class=\"card-category\"> Here is a subtitle for this table</p>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"table-responsive\">\n            <table class=\"table\">\n              <thead class=\"\">\n                <th>\n                  Name\n                </th>\n                <th>\n                  Country\n                </th>\n                <th>\n                  City\n                </th>\n                <th class=\"text-right\">\n                  Salary\n                </th>\n              </thead>\n              <tbody>\n                <tr>\n                  <td>\n                    Dakota Rice\n                  </td>\n                  <td>\n                    Niger\n                  </td>\n                  <td>\n                    Oud-Turnhout\n                  </td>\n                  <td class=\"text-right\">\n                    $36,738\n                  </td>\n                </tr>\n                <tr>\n                  <td>\n                    Minerva Hooper\n                  </td>\n                  <td>\n                    Curaçao\n                  </td>\n                  <td>\n                    Sinaai-Waas\n                  </td>\n                  <td class=\"text-right\">\n                    $23,789\n                  </td>\n                </tr>\n                <tr>\n                  <td>\n                    Sage Rodriguez\n                  </td>\n                  <td>\n                    Netherlands\n                  </td>\n                  <td>\n                    Baileux\n                  </td>\n                  <td class=\"text-right\">\n                    $56,142\n                  </td>\n                </tr>\n                <tr>\n                  <td>\n                    Philip Chaney\n                  </td>\n                  <td>\n                    Korea, South\n                  </td>\n                  <td>\n                    Overland Park\n                  </td>\n                  <td class=\"text-right\">\n                    $38,735\n                  </td>\n                </tr>\n                <tr>\n                  <td>\n                    Doris Greene\n                  </td>\n                  <td>\n                    Malawi\n                  </td>\n                  <td>\n                    Feldkirchen in Kärnten\n                  </td>\n                  <td class=\"text-right\">\n                    $63,542\n                  </td>\n                </tr>\n                <tr>\n                  <td>\n                    Mason Porter\n                  </td>\n                  <td>\n                    Chile\n                  </td>\n                  <td>\n                    Gloucester\n                  </td>\n                  <td class=\"text-right\">\n                    $78,615\n                  </td>\n                </tr>\n                <tr>\n                  <td>\n                    Jon Porter\n                  </td>\n                  <td>\n                    Portugal\n                  </td>\n                  <td>\n                    Gloucester\n                  </td>\n                  <td class=\"text-right\">\n                    $98,615\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h4 class=\"card-title\"> Regular Table with Colors</h4>\n        </div>\n        <div class=\"card-body table-full-width table-hover\">\n          <div class=\"table-responsive\">\n            <table class=\"table\">\n              <thead class=\"\">\n                <th>\n                  Name\n                </th>\n                <th>\n                  Country\n                </th>\n                <th>\n                  City\n                </th>\n                <th class=\"text-right\">\n                  Salary\n                </th>\n              </thead>\n              <tbody>\n                <tr class=\"table-success\">\n                  <td>\n                    Dakota Rice\n                  </td>\n                  <td>\n                    Niger\n                  </td>\n                  <td>\n                    Oud-Turnhout\n                  </td>\n                  <td class=\"text-right\">\n                    $36,738\n                  </td>\n                </tr>\n                <tr class=\"\">\n                  <td>\n                    Minerva Hooper\n                  </td>\n                  <td>\n                    Curaçao\n                  </td>\n                  <td>\n                    Sinaai-Waas\n                  </td>\n                  <td class=\"text-right\">\n                    $23,789\n                  </td>\n                </tr>\n                <tr class=\"table-info\">\n                  <td>\n                    Sage Rodriguez\n                  </td>\n                  <td>\n                    Netherlands\n                  </td>\n                  <td>\n                    Baileux\n                  </td>\n                  <td class=\"text-right\">\n                    $56,142\n                  </td>\n                </tr>\n                <tr class=\"\">\n                  <td>\n                    Philip Chaney\n                  </td>\n                  <td>\n                    Korea, South\n                  </td>\n                  <td>\n                    Overland Park\n                  </td>\n                  <td class=\"text-right\">\n                    $38,735\n                  </td>\n                </tr>\n                <tr class=\"table-danger\">\n                  <td>\n                    Doris Greene\n                  </td>\n                  <td>\n                    Malawi\n                  </td>\n                  <td>\n                    Feldkirchen in Kärnten\n                  </td>\n                  <td class=\"text-right\">\n                    $63,542\n                  </td>\n                </tr>\n                <tr class=\"\">\n                  <td>\n                    Mason Porter\n                  </td>\n                  <td>\n                    Chile\n                  </td>\n                  <td>\n                    Gloucester\n                  </td>\n                  <td class=\"text-right\">\n                    $78,615\n                  </td>\n                </tr>\n                <tr class=\"table-warning\">\n                  <td>\n                    Jon Porter\n                  </td>\n                  <td>\n                    Portugal\n                  </td>\n                  <td>\n                    Gloucester\n                  </td>\n                  <td class=\"text-right\">\n                    $98,615\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "w7GV":
    /*!*****************************************!*\
      !*** ./src/app/tables/tables.module.ts ***!
      \*****************************************/

    /*! exports provided: TablesModule */

    /***/
    function w7GV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TablesModule", function () {
        return TablesModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _tables_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./tables.routing */
      "ZFWX");
      /* harmony import */


      var _extendedtable_extendedtable_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./extendedtable/extendedtable.component */
      "hq8u");
      /* harmony import */


      var _regulartable_regulartable_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./regulartable/regulartable.component */
      "MdzC");
      /* harmony import */


      var _datatable_net_datatable_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./datatable.net/datatable.component */
      "GnNX");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var TablesModule = /*#__PURE__*/_createClass(function TablesModule() {
        _classCallCheck(this, TablesModule);
      });

      TablesModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_tables_routing__WEBPACK_IMPORTED_MODULE_4__["TablesRoutes"]), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
        declarations: [_extendedtable_extendedtable_component__WEBPACK_IMPORTED_MODULE_5__["ExtendedTableComponent"], _datatable_net_datatable_component__WEBPACK_IMPORTED_MODULE_7__["DataTableComponent"], _regulartable_regulartable_component__WEBPACK_IMPORTED_MODULE_6__["RegularTableComponent"]]
      })], TablesModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=tables-tables-module-es5.js.map