(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-pages-full-pages-user-user-module"],{

/***/ "EZTA":
/*!******************************************************!*\
  !*** ./src/app/pages/full-pages/user/user.module.ts ***!
  \******************************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-routing.module */ "Tlpc");
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.component */ "bL/w");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "7g+E");






var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UserModule });
    UserModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UserModule_Factory(t) { return new (t || UserModule)(); }, providers: [], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _user_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserRoutingModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerModule"]
            ]] });
    return UserModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserModule, { declarations: [_user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _user_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserRoutingModule"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _user_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserRoutingModule"],
                    ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerModule"]
                ],
                exports: [],
                declarations: [
                    _user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"]
                ],
                providers: [],
            }]
    }], null, null); })();


/***/ }),

/***/ "Tlpc":
/*!**************************************************************!*\
  !*** ./src/app/pages/full-pages/user/user-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.component */ "bL/w");





var routes = [
    {
        path: '',
        component: _user_component__WEBPACK_IMPORTED_MODULE_2__["UserComponent"],
        data: {
            title: 'Kullanıcılar'
        }
        // children: [
        //   {
        //     path: 'page',
        //     component: PageComponent,
        //     data: {
        //       title: 'Page'
        //     }
        //   }
        // ]
    }
];
var UserRoutingModule = /** @class */ (function () {
    function UserRoutingModule() {
    }
    UserRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UserRoutingModule });
    UserRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UserRoutingModule_Factory(t) { return new (t || UserRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return UserRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "bL/w":
/*!*********************************************************!*\
  !*** ./src/app/pages/full-pages/user/user.component.ts ***!
  \*********************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "7g+E");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/user.service */ "qfBg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");








function UserComponent_p_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "y\u00FCkleniyor...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserComponent_tr_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", row_r2.imageUrl ? row_r2.imageUrl : "assets/img/portrait/small/user.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r2.id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", row_r2.firstName, " ", row_r2.lastName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r2.email, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r2.msisdn, " ");
} }
var UserComponent = /** @class */ (function () {
    function UserComponent(spinner, userService) {
        this.spinner = spinner;
        this.userService = userService;
        this.isLoading = false;
        this.loadUserList(null);
    }
    UserComponent.prototype.loadUserList = function (event) {
        var _this = this;
        this.isLoading = true;
        this.spinner.show("spinner1");
        this.userService.query({}).subscribe(function (res) { return _this.onSuccess(res.body, res.headers); }, function (res) { return _this.onError(res.body); });
    };
    UserComponent.prototype.onSuccess = function (data, headers) {
        this.userList = data.content;
        this.isLoading = false;
        this.spinner.hide("spinner1");
    };
    UserComponent.prototype.onError = function (error) {
        this.isLoading = false;
        this.spinner.hide("spinner1");
    };
    UserComponent.ɵfac = function UserComponent_Factory(t) { return new (t || UserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"])); };
    UserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserComponent, selectors: [["app-user"]], decls: 34, vars: 3, consts: [[1, "row"], [1, "col-12"], [1, "content-header"], [1, "content-sub-header", "mb-1"], ["id", "extended"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "d-flex", "justify-content-end", "flex-sm-row", "flex-column"], ["type", "button", "routerLink", "/user-create/", 1, "btn", "btn-info"], [1, "card-content"], [1, "card-body"], [1, "table-responsive"], ["name", "spinner1", "size", "medium", 3, "fullScreen"], ["style", "font-size: 20px; color: white", 4, "ngIf"], [1, "table", "table-striped", "table-striped", "m-0"], [1, "thead-light"], ["scope", "col", "width", "40px"], ["scope", "col"], [4, "ngFor", "ngForOf"], [2, "font-size", "20px", "color", "white"], ["scope", "row"], ["alt", "avatar", "height", "35", "width", "35", 1, "avatar", 3, "src"]], template: function UserComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Kullan\u0131c\u0131lar");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "You can define your sub-header here");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "h4", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Kullan\u0131c\u0131 Yarat");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ngx-spinner", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, UserComponent_p_19_Template, 2, 0, "p", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "table", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "thead", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "th", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Id");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Ad Soyad");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "E-mail");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Msisdn");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "tbody");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, UserComponent_tr_33_Template, 11, 6, "tr", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullScreen", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.userList);
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return UserComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user',
                templateUrl: './user.component.html',
                styleUrls: ['./user.component.scss']
            }]
    }], function () { return [{ type: ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"] }, { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }]; }, null); })();


/***/ }),

/***/ "qfBg":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _shared_app_config_app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/app-config/app-config */ "lx5/");






var requestURL = '/api/user';
var updateURL = '/api/user';
var pfTransactionsSummaryUrl = '/api/pftransaction/summary';
var pfTransactionsHistoryUrl = '/api/pftransaction/history';
var pfTransactionsHistoryExportUrl = '/api/pftransaction/history-export';
var dcbTransactionHistoryExportUrl = '/api/dcbtransaction/transaction-history-export';
var dcbCollectionHistorySummaryExportUrl = '/api/dcbtransaction/collection-history-summary-export';
var dcbTransactionHistorySummaryExportUrl = '/api/dcbtransaction/transaction-history-summary-export';
var dcbCollectionHistoryExportUrl = '/api/dcbtransaction/collection-history-export';
var createUserUrl = '/api/user';
var pfTransactionRefundUrl = '/api/pftransaction/refund';
var pfTransactionReverseUrl = '/api/pftransaction/reverse';
var dcbTransactionURL = '/api/dcbtransaction/transaction-history';
var dcbTransactionSummaryUrl = '/api/dcbtransaction/transaction-history-summary';
var dcbCollectionURL = '/api/dcbtransaction/collection-history';
var dcbCollectionSummaryUrl = '/api/dcbtransaction/collection-history-summary';
var dcbTransactionsSummaryUrl = '/api/dcbtransaction/summary';
/*
*/
var UserService = /** @class */ (function () {
    /*
      readonly allMerchantUrl = API_SERVER_URL + '/api/merchant/all'
    */
    function UserService(http, appConfig) {
        this.http = http;
        this.appConfig = appConfig;
        this.userMerchantUrl = '/api/merchant/user';
        this.childUrl = '/api/merchant';
        this.allUrl = '/api/merchant/user';
        this.userMerchantUrl2 = '/api/merchant/user/childs';
        this.userPermissionUrl = '/api/userpermission';
        this.pfTransactionRefundUrl = '/api/pftransaction/refund';
        this.pfTransactionReverseUrl = '/api/pftransaction/reverse';
        this.dcbTransactionURL = '/api/dcbtransaction/transaction-history';
        this.dcbCollectionURL = '/api/dcbtransaction/collection-history';
        this.dcbTransactionsSummaryUrl = '/api/dcbtransaction/summary';
        this.pfTransactionsSummaryUrl = '/api/pftransaction/summary';
        this.mailValidationUrl = '/api/user/mail-validation';
        this.dcbRefund = '/api/dcbtransaction/refund';
    }
    UserService.prototype.query = function (req) {
        //const params: HttpParams = createRequestOption(req);
        var params = {};
        return this.http.get(this.appConfig.formatPath(requestURL), {
            params: params,
            observe: 'response'
        });
    };
    // create(user: IUser): Observable<HttpResponse<IUser>> {
    //   return this.http.post<IUser>(this.resourceUrl, user, { observe: 'response' });
    // }
    //
    UserService.prototype.update = function (userList) {
        return this.http.post(this.appConfig.formatPath(updateURL), userList, { observe: 'response' });
    };
    UserService.prototype.pfTransactionsSummary = function (pfTransactionsSummary) {
        return this.http.post(this.appConfig.formatPath(pfTransactionsSummaryUrl), pfTransactionsSummary, { observe: 'response' });
    };
    UserService.prototype.pfTransactionsHistory = function (pfTransactionsHistory) {
        return this.http.post(this.appConfig.formatPath(pfTransactionsHistoryUrl), pfTransactionsHistory);
    };
    UserService.prototype.pfTransactionsHistoryExport = function (pfTransactionsHistory) {
        return this.http.post(this.appConfig.formatPath(pfTransactionsHistoryExportUrl), pfTransactionsHistory, { responseType: 'blob' });
    };
    UserService.prototype.pfTransactionReverse = function (pfTransactionReverse) {
        return this.http.post(this.appConfig.formatPath(pfTransactionReverseUrl), pfTransactionReverse, { observe: 'response' });
    };
    UserService.prototype.pfTransactionRefund = function (pfTransactionRefund) {
        return this.http.post(this.appConfig.formatPath(pfTransactionRefundUrl), pfTransactionRefund, { observe: 'response' });
    };
    UserService.prototype.dcbTransactionHistory = function (dcbTransactionHistory) {
        return this.http.post(this.appConfig.formatPath(dcbTransactionURL), dcbTransactionHistory);
    };
    UserService.prototype.dcbTransactionHistoryExport = function (dcbTransactionHistory) {
        return this.http.post(this.appConfig.formatPath(dcbTransactionHistoryExportUrl), dcbTransactionHistory, { responseType: 'blob' });
    };
    UserService.prototype.dcbCollectionHistory = function (dcbCollectionHistory) {
        return this.http.post(this.appConfig.formatPath(dcbCollectionURL), dcbCollectionHistory);
    };
    UserService.prototype.dcbCollectionHistorySummary = function (dcbCollectionHistorySummary) {
        return this.http.post(this.appConfig.formatPath(dcbCollectionSummaryUrl), dcbCollectionHistorySummary);
    };
    UserService.prototype.dcbCollectionHistorySummaryExport = function (dcbCollectionHistorySummary) {
        return this.http.post(this.appConfig.formatPath(dcbCollectionHistorySummaryExportUrl), dcbCollectionHistorySummary, { responseType: 'blob' });
    };
    UserService.prototype.dcbTransactionHistorySummary = function (dcbTransactionHistorySummary) {
        return this.http.post(this.appConfig.formatPath(dcbTransactionSummaryUrl), dcbTransactionHistorySummary);
    };
    UserService.prototype.dcbTransactionHistorySummaryExport = function (dcbTransactionHistorySummary) {
        return this.http.post(this.appConfig.formatPath(dcbTransactionHistorySummaryExportUrl), dcbTransactionHistorySummary, { responseType: 'blob' });
    };
    UserService.prototype.dcbCollectionHistoryExport = function (dcbCollectionHistory) {
        return this.http.post(this.appConfig.formatPath(dcbCollectionHistoryExportUrl), dcbCollectionHistory, { responseType: 'blob' });
    };
    UserService.prototype.dcbTransactionsSummary = function (dcbTransactionsSummary) {
        return this.http.post(this.appConfig.formatPath(dcbTransactionsSummaryUrl), dcbTransactionsSummary, { observe: 'response' });
    };
    // find(login: string): Observable<HttpResponse<IUser>> {
    //  return this.http.get<IUser>(`/${login}`, {observe: 'response'});
    // }
    //
    // query(req?: any): Observable<HttpResponse<IUser[]>> {
    //   const options = createRequestOption(req);
    //   return this.http.get<IUser[]>(this.resourceUrl, { params: options, observe: 'response' });
    // }
    //
    // delete(login: string): Observable<HttpResponse<any>> {
    //   return this.http.delete(`${this.resourceUrl}/${login}`, { observe: 'response' });
    // }
    UserService.prototype.createUser = function (user) {
        return this.http.post(this.appConfig.formatPath(createUserUrl), user);
    };
    UserService.prototype.userMerchant = function (userUid) {
        return this.http.get(this.appConfig.formatPath(this.userMerchantUrl) + '/' + userUid, { observe: 'response' });
    };
    UserService.prototype.allChilds = function (merchantId) {
        return this.http.get(this.appConfig.formatPath(this.childUrl) + '/' + merchantId + '/child', { observe: 'response' });
    };
    UserService.prototype.allUser = function () {
        return this.http.get(this.appConfig.formatPath(this.allUrl), { observe: 'response' });
    };
    //  userMerchantList(): Observable<HttpResponse<Merchant[]>> {
    //    return this.http.get<Merchant[]>(this.appConfig.formatPath(this.userMerchantUrl) , {observe: 'response'});
    //  }
    UserService.prototype.allPermissions = function () {
        return this.http.get(this.appConfig.formatPath(this.userPermissionUrl), { observe: 'response' });
    };
    /* updateByReset(code: string, newPassword: string): Observable<HttpResponse<any>> {
         return this.http.post<any>(updateByResetURL, {code, newPassword}, { observe: 'response' });
       }*/
    UserService.prototype.mailValidation = function (code) {
        return this.http.post(this.appConfig.formatPath(this.mailValidationUrl), { code: code });
    };
    UserService.prototype.getRefund = function (refundRequest) {
        return this.http.post(this.appConfig.formatPath(this.dcbRefund), refundRequest);
    };
    UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_app_config_app_config__WEBPACK_IMPORTED_MODULE_2__["AppConfig"])); };
    UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
    return UserService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _shared_app_config_app_config__WEBPACK_IMPORTED_MODULE_2__["AppConfig"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=app-pages-full-pages-user-user-module.js.map