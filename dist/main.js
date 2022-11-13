(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/AoX":
/*!************************************************!*\
  !*** ./src/app/shared/auth/account.service.ts ***!
  \************************************************/
/*! exports provided: AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-webstorage */ "0uJq");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./session.service */ "52Ve");
/* harmony import */ var _app_config_app_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app-config/app-config */ "lx5/");
/* harmony import */ var _models_request_user_merchant_request__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../models/request/user-merchant-request */ "9Hm5");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../app.constants */ "dkQB");


















// import { JhiLanguageService } from 'ng-jhipster';
// import { StateStorageService } from 'app/core/auth/state-storage.service';
// import { TrackerService } from '../tracker/tracker.service';
var ACCOUNT_PATH = '/api/account';
var user_merchant = '/api/account/merchants';
var AccountService = /** @class */ (function () {
    function AccountService(sessionStorage, translate, sessionService, http, router, appConfig) {
        this.sessionStorage = sessionStorage;
        this.translate = translate;
        this.sessionService = sessionService;
        this.http = http;
        this.router = router;
        this.appConfig = appConfig;
        this.userIdentity = null;
        this.authenticationState = new rxjs__WEBPACK_IMPORTED_MODULE_4__["ReplaySubject"](1);
        this.userMerchantRequest = new _models_request_user_merchant_request__WEBPACK_IMPORTED_MODULE_9__["UserMerchantRequest"]();
        this.getUserMerchantModel();
    }
    AccountService.prototype.getUserMerchantModel = function () {
        var merchantName = JSON.parse(localStorage.getItem('merchantName'));
        this.userMerchantRequest = {
            merchantId: merchantName ? merchantName.merchantId : null
        };
    };
    AccountService.prototype.authenticate = function (identity) {
        this.userIdentity = identity;
        this.authenticationState.next(this.userIdentity);
        if (identity) {
            // this.trackerService.connect();
        }
        else {
            // this.trackerService.disconnect();
        }
    };
    AccountService.prototype.hasAnyAuthority = function (authorities) {
        if (!this.userIdentity || !this.userIdentity.authorities) {
            return false;
        }
        if (!Array.isArray(authorities)) {
            authorities = [authorities];
        }
        return this.userIdentity.authorities.some(function (authority) { return authorities.includes(authority); });
    };
    AccountService.prototype.identity = function (force) {
        var _this = this;
        if (!this.accountCache$ || force || !this.isAuthenticated()) {
            this.getUserMerchantModel();
            this.accountCache$ = this.getAccount().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function () {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (account) {
                _this.authenticate(account);
                // After retrieve the account info, the language will be changed to
                // the user's preferred language configured in the account setting
                if (account && account.langKey) {
                    var langKey = _this.sessionStorage.retrieve('locale') || account.langKey;
                    // this.languageService.changeLanguage(langKey);
                    _this.translate.use(langKey);
                }
                if (account) {
                    _this.navigateToStoredUrl();
                }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["shareReplay"])());
        }
        return this.accountCache$;
    };
    AccountService.prototype.isAuthenticated = function () {
        return this.sessionService.getToken() !== null;
    };
    AccountService.prototype.isFullyAuthenticated = function () {
        return this.isAuthenticated() && this.userIdentity !== null;
    };
    AccountService.prototype.isPreAuthenticated = function () {
        return this.sessionService.getPreAuthToken() !== null && !this.isAuthenticated();
    };
    // is not in two factor authentication step nor authenticated
    AccountService.prototype.isAnonymous = function () {
        // return !this.isAuthenticated() && !this.isPreAuthenticated();
    };
    AccountService.prototype.getAuthenticationState = function () {
        return this.authenticationState.asObservable();
    };
    AccountService.prototype.getImageUrl = function () {
        return this.userIdentity ? this.userIdentity.imageUrl : '';
    };
    AccountService.prototype.getUserName = function () {
        //  return this.userIdentity ? this.userIdentity.firstName + ' ' + this.userIdentity.lastName : '';
        var account = JSON.parse(localStorage.getItem('account'));
        if ((account === null || account === void 0 ? void 0 : account.customerType) !== _app_constants__WEBPACK_IMPORTED_MODULE_10__["POTENTIAL_CUSTOMER_TYPE"].toString()) {
            return account ? account.firstName + ' ' + account.lastName : '';
        }
        else {
            return (account === null || account === void 0 ? void 0 : account.email) ? this.translate.instant('menu.profile.welcome') + " " + (account === null || account === void 0 ? void 0 : account.email) : '';
        }
    };
    AccountService.prototype.getUserMerchant = function () {
        var merchantName = JSON.parse(localStorage.getItem('merchantName'));
        // return this.userIdentity && this.userIdentity.master ? this.userIdentity.master.merchantName : '';
        return merchantName ? merchantName === null || merchantName === void 0 ? void 0 : merchantName.merchantName : ' ';
    };
    AccountService.prototype.getAccount = function () {
        return this.http.post(this.appConfig.formatPath(ACCOUNT_PATH), this.userMerchantRequest);
    };
    AccountService.prototype.getUserAllMerchants = function () {
        return this.http.get(this.appConfig.formatPath(user_merchant));
    };
    AccountService.prototype.navigateToStoredUrl = function () {
        // previousState can be set in the authExpiredInterceptor and in the userRouteAccessService
        // if login is successful, go to stored previousState and clear previousState
        // const previousUrl = this.stateStorageService.getUrl();
        // if (previousUrl) {
        //   this.stateStorageService.clearUrl();
        //   this.router.navigateByUrl(previousUrl);
        // }
    };
    AccountService.ɵfac = function AccountService_Factory(t) { return new (t || AccountService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__["SessionStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_config_app_config__WEBPACK_IMPORTED_MODULE_8__["AppConfig"])); };
    AccountService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AccountService, factory: AccountService.ɵfac, providedIn: 'root' });
    return AccountService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__["SessionStorageService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] }, { type: _session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _app_config_app_config__WEBPACK_IMPORTED_MODULE_8__["AppConfig"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mac/Desktop/portal-web/frontend/src/main.ts */"zUnb");


/***/ }),

/***/ "4VRr":
/*!****************************************************************!*\
  !*** ./src/app/shared/interceptors/auth-header.interceptor.ts ***!
  \****************************************************************/
/*! exports provided: AuthHeaderInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthHeaderInterceptor", function() { return AuthHeaderInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-webstorage */ "0uJq");
/* harmony import */ var _auth_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/session.service */ "52Ve");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var _app_config_app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app-config/app-config */ "lx5/");










var AuthHeaderInterceptor = /** @class */ (function () {
    function AuthHeaderInterceptor(localStorage, sessionStorage, sessionService, translateService, appConfig) {
        this.localStorage = localStorage;
        this.sessionStorage = sessionStorage;
        this.sessionService = sessionService;
        this.translateService = translateService;
        this.appConfig = appConfig;
    }
    AuthHeaderInterceptor.prototype.intercept = function (request, next) {
        if (!request || !request.url || (request.url.startsWith('http') && !(this.appConfig.getApiServerUrl() && request.url.startsWith(this.appConfig.getApiServerUrl())))) {
            return next.handle(request);
        }
        //add current language on every request's header
        if (this.translateService.currentLang) {
            request = request.clone({
                setHeaders: {
                    'Accept-Language': this.translateService.currentLang,
                },
            });
        }
        var token = this.sessionService.getToken();
        if (token) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + token,
                },
            });
        }
        if (!request.url.startsWith(this.appConfig.getApiServerUrl() + '/security/login')) {
            var preAuthToken = this.sessionService.getPreAuthToken();
            if (preAuthToken) {
                request = request.clone({
                    setHeaders: {
                        Authorization: "Bearer " + preAuthToken,
                    },
                });
            }
        }
        return next.handle(request);
    };
    AuthHeaderInterceptor.ɵfac = function AuthHeaderInterceptor_Factory(t) { return new (t || AuthHeaderInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_webstorage__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_webstorage__WEBPACK_IMPORTED_MODULE_1__["SessionStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_config_app_config__WEBPACK_IMPORTED_MODULE_4__["AppConfig"])); };
    AuthHeaderInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthHeaderInterceptor, factory: AuthHeaderInterceptor.ɵfac });
    return AuthHeaderInterceptor;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthHeaderInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"] }, { type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_1__["SessionStorageService"] }, { type: _auth_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }, { type: _app_config_app_config__WEBPACK_IMPORTED_MODULE_4__["AppConfig"] }]; }, null); })();


/***/ }),

/***/ "4b9w":
/*!********************************************************!*\
  !*** ./src/app/shared/animations/custom-animations.ts ***!
  \********************************************************/
/*! exports provided: customAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customAnimations", function() { return customAnimations; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "GS7A");

var customAnimations = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slideInOut', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '*' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '0px' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('1 <=> 0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(200))
    ])
];


/***/ }),

/***/ "52Ve":
/*!************************************************!*\
  !*** ./src/app/shared/auth/session.service.ts ***!
  \************************************************/
/*! exports provided: SessionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionService", function() { return SessionService; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-webstorage */ "0uJq");






var AUTH_TOKEN_KEY = 'authenticationToken';
var PRE_AUTH_TOKEN_KEY = 'preAuthToken';
var CUSTOMER_TYPE_KEY = 'customerType';
var SessionService = /** @class */ (function () {
    function SessionService(router, $localStorage, $sessionStorage) {
        this.router = router;
        this.$localStorage = $localStorage;
        this.$sessionStorage = $sessionStorage;
    }
    SessionService.prototype.getToken = function () {
        return this.$localStorage.retrieve(AUTH_TOKEN_KEY) || this.$sessionStorage.retrieve(AUTH_TOKEN_KEY);
    };
    SessionService.prototype.clearToken = function () {
        this.$localStorage.clear(AUTH_TOKEN_KEY);
        this.$sessionStorage.clear(AUTH_TOKEN_KEY);
        this.$localStorage.clear(CUSTOMER_TYPE_KEY);
        this.$sessionStorage.clear(CUSTOMER_TYPE_KEY);
    };
    SessionService.prototype.getPreAuthToken = function () {
        return this.$localStorage.retrieve(PRE_AUTH_TOKEN_KEY) || this.$sessionStorage.retrieve(PRE_AUTH_TOKEN_KEY);
    };
    SessionService.prototype.getCustomerType = function () {
        return this.$localStorage.retrieve(CUSTOMER_TYPE_KEY);
    };
    SessionService.prototype.clearPreAuthToken = function () {
        this.$localStorage.clear(PRE_AUTH_TOKEN_KEY);
        this.$sessionStorage.clear(PRE_AUTH_TOKEN_KEY);
        this.$localStorage.clear(CUSTOMER_TYPE_KEY);
        this.$sessionStorage.clear(CUSTOMER_TYPE_KEY);
    };
    SessionService.prototype.preAuthSuccess = function (response) {
        this.clearToken();
        var jwt = response.token;
        var customerType = response.customerType;
        this.$localStorage.store(PRE_AUTH_TOKEN_KEY, jwt);
        this.$localStorage.store(CUSTOMER_TYPE_KEY, customerType);
        // this.$sessionStorage.store(PRE_AUTH_TOKEN_KEY, jwt);
    };
    SessionService.prototype.authSuccess = function (response) {
        this.clearPreAuthToken();
        var jwt = response.token;
        this.$localStorage.store(AUTH_TOKEN_KEY, jwt);
        // this.$sessionStorage.store(AUTH_TOKEN_KEY, jwt);
    };
    SessionService.ɵfac = function SessionService_Factory(t) { return new (t || SessionService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ngx_webstorage__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ngx_webstorage__WEBPACK_IMPORTED_MODULE_2__["SessionStorageService"])); };
    SessionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SessionService, factory: SessionService.ɵfac });
    return SessionService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SessionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"] }, { type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"] }, { type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_2__["SessionStorageService"] }]; }, null); })();


/***/ }),

/***/ "82/Q":
/*!********************************************************!*\
  !*** ./src/app/shared/routes/content-layout.routes.ts ***!
  \********************************************************/
/*! exports provided: CONTENT_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTENT_ROUTES", function() { return CONTENT_ROUTES; });
//Route for content layout without sidebar, navbar and footer for pages like Login, Registration etc...
var CONTENT_ROUTES = [
    {
        path: 'pages',
        loadChildren: function () { return Promise.all(/*! import() | pages-content-pages-content-pages-module */[__webpack_require__.e("default~app-pages-full-pages-dcb-collection-dcb-collection-module~app-pages-full-pages-dcb-collectio~be609dfd"), __webpack_require__.e("common"), __webpack_require__.e("pages-content-pages-content-pages-module")]).then(__webpack_require__.bind(null, /*! ../../pages/content-pages/content-pages.module */ "jsAU")).then(function (m) { return m.ContentPagesModule; }); }
    }
];


/***/ }),

/***/ "9AFB":
/*!*****************************************************************!*\
  !*** ./src/app/shared/directives/sidebar-dropdown.directive.ts ***!
  \*****************************************************************/
/*! exports provided: SidebarDropdownDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarDropdownDirective", function() { return SidebarDropdownDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");




var SidebarDropdownDirective = /** @class */ (function () {
    function SidebarDropdownDirective(router) {
        this.router = router;
        this.navlinks = [];
    }
    SidebarDropdownDirective.prototype.ngOnInit = function () {
        //write your code here!
    };
    SidebarDropdownDirective.ɵfac = function SidebarDropdownDirective_Factory(t) { return new (t || SidebarDropdownDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
    SidebarDropdownDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: SidebarDropdownDirective, selectors: [["", "appSidebarDropdown", ""]] });
    return SidebarDropdownDirective;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarDropdownDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appSidebarDropdown]'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "9Hm5":
/*!*********************************************************!*\
  !*** ./src/app/models/request/user-merchant-request.ts ***!
  \*********************************************************/
/*! exports provided: UserMerchantRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserMerchantRequest", function() { return UserMerchantRequest; });
var UserMerchantRequest = /** @class */ (function () {
    function UserMerchantRequest() {
    }
    return UserMerchantRequest;
}());



/***/ }),

/***/ "AFTa":
/*!**********************************************************************!*\
  !*** ./src/app/shared/directives/sidebar-anchor-toggle.directive.ts ***!
  \**********************************************************************/
/*! exports provided: SidebarAnchorToggleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarAnchorToggleDirective", function() { return SidebarAnchorToggleDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _sidebar_link_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar-link.directive */ "uHtA");




var SidebarAnchorToggleDirective = /** @class */ (function () {
    function SidebarAnchorToggleDirective(navlink) {
        this.navlink = navlink;
    }
    SidebarAnchorToggleDirective.prototype.onClick = function () {
        this.navlink.toggle();
    };
    SidebarAnchorToggleDirective.ɵfac = function SidebarAnchorToggleDirective_Factory(t) { return new (t || SidebarAnchorToggleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_sidebar_link_directive__WEBPACK_IMPORTED_MODULE_1__["SidebarLinkDirective"])); };
    SidebarAnchorToggleDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: SidebarAnchorToggleDirective, selectors: [["", "appSidebarAnchorToggle", ""]], hostBindings: function SidebarAnchorToggleDirective_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarAnchorToggleDirective_click_HostBindingHandler($event) { return ctx.onClick($event); });
        } } });
    return SidebarAnchorToggleDirective;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarAnchorToggleDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: "[appSidebarAnchorToggle]"
            }]
    }], function () { return [{ type: _sidebar_link_directive__WEBPACK_IMPORTED_MODULE_1__["SidebarLinkDirective"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_sidebar_link_directive__WEBPACK_IMPORTED_MODULE_1__["SidebarLinkDirective"]]
            }] }]; }, { onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["click", ["$event"]]
        }] }); })();


/***/ }),

/***/ "AqrB":
/*!*************************************************************!*\
  !*** ./src/app/layouts/content/content-layout.component.ts ***!
  \*************************************************************/
/*! exports provided: ContentLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentLayoutComponent", function() { return ContentLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/services/config.service */ "vihK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var app_shared_services_customizer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/customizer.service */ "hFtW");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");








var _c0 = ["content-wrapper"];
var ContentLayoutComponent = /** @class */ (function () {
    function ContentLayoutComponent(configService, document, renderer, cdr, customizerService) {
        this.configService = configService;
        this.document = document;
        this.renderer = renderer;
        this.cdr = cdr;
        this.customizerService = customizerService;
        this.config = {};
        this.config = this.configService.templateConf;
        this.renderer.addClass(this.document.body, "auth-page");
    }
    ContentLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.layoutSub = this.configService.templateConf$.subscribe(function (templateConf) {
            if (templateConf) {
                _this.config = templateConf;
            }
            _this.loadLayout();
            _this.cdr.markForCheck();
        });
    };
    ContentLayoutComponent.prototype.loadLayout = function () {
        this.removeTransparentBGClasses();
        if (this.config.layout.variant === "Light") {
            this.renderer.removeClass(this.document.body, "layout-dark");
            this.renderer.removeClass(this.document.body, "layout-transparent");
        }
        else if (this.config.layout.variant === "Dark") {
            this.renderer.removeClass(this.document.body, "layout-transparent");
            this.renderer.addClass(this.document.body, "layout-dark");
        }
        else if (this.config.layout.variant === "Transparent") {
            this.renderer.addClass(this.document.body, "layout-dark");
            this.renderer.addClass(this.document.body, "layout-transparent");
            this.renderer.addClass(this.document.body, this.config.layout.sidebar.backgroundColor);
        }
        this.renderer.removeClass(this.document.body, "menu-expanded");
        this.renderer.removeClass(this.document.body, "navbar-static");
        this.renderer.removeClass(this.document.body, "menu-open");
        this.renderer.addClass(this.document.body, "blank-page");
    };
    ContentLayoutComponent.prototype.removeTransparentBGClasses = function () {
        var _this = this;
        this.customizerService.transparent_colors.forEach(function (_) {
            _this.renderer.removeClass(_this.document.body, _.class);
        });
        this.customizerService.transparent_colors_with_shade.forEach(function (_) {
            _this.renderer.removeClass(_this.document.body, _.class);
        });
    };
    ContentLayoutComponent.prototype.ngOnDestroy = function () {
        this.renderer.removeClass(this.document.body, "auth-page");
        if (this.layoutSub) {
            this.layoutSub.unsubscribe();
        }
    };
    ContentLayoutComponent.ɵfac = function ContentLayoutComponent_Factory(t) { return new (t || ContentLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_customizer_service__WEBPACK_IMPORTED_MODULE_3__["CustomizerService"])); };
    ContentLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContentLayoutComponent, selectors: [["app-content-layout"]], viewQuery: function ContentLayoutComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.wrapper = _t.first);
        } }, decls: 6, vars: 0, consts: [[1, "wrapper"], [1, "main-panel"], [1, "main-content"], [1, "content-overlay"], [1, "content-wrapper", "p-0"]], template: function ContentLayoutComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250ZW50LWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */"], changeDetection: 0 });
    return ContentLayoutComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-content-layout',
                templateUrl: './content-layout.component.html',
                styleUrls: ['./content-layout.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"] }, { type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: app_shared_services_customizer_service__WEBPACK_IMPORTED_MODULE_3__["CustomizerService"] }]; }, { wrapper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['content-wrapper']
        }] }); })();


/***/ }),

/***/ "Aw8S":
/*!********************************************************!*\
  !*** ./src/app/shared/directives/topmenu.directive.ts ***!
  \********************************************************/
/*! exports provided: TopMenuDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopMenuDirective", function() { return TopMenuDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


var TopMenuDirective = /** @class */ (function () {
    function TopMenuDirective() {
        this.navlinks = [];
    }
    TopMenuDirective.prototype.ngOnInit = function () {
    };
    TopMenuDirective.prototype.addLink = function (link) {
        this.navlinks.push(link);
    };
    TopMenuDirective.prototype.closeOtherLinks = function (openLink) {
        this.navlinks.forEach(function (link) {
            if (link != openLink && (openLink.level.toString() === "1" || link.level === openLink.level)) {
                link.show = false;
            }
        });
    };
    TopMenuDirective.prototype.onMouseOut = function (e) {
        this.navlinks.forEach(function (link) {
            link.show = false;
        });
    };
    TopMenuDirective.ɵfac = function TopMenuDirective_Factory(t) { return new (t || TopMenuDirective)(); };
    TopMenuDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: TopMenuDirective, selectors: [["", "appTopMenu", ""]], hostBindings: function TopMenuDirective_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseleave", function TopMenuDirective_mouseleave_HostBindingHandler($event) { return ctx.onMouseOut($event); });
        } } });
    return TopMenuDirective;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopMenuDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: '[appTopMenu]' }]
    }], function () { return []; }, { onMouseOut: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["mouseleave", ["$event"]]
        }] }); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// export const API_SERVER_URL = 'http://localhost:8015';
// export const API_SERVER_URL = 'https://portaltest-gateway.turkcell.com.tr';
// export const API_SERVER_URL = 'https://portal-ist-gateway.paycell.com.tr';
var environment = {
    production: true,
    defaultLocale: 'tr',
    useBrowserLanguage: false,
    activeLanguages: ['tr', 'en'],
    languageMeta: {
        tr: { text: "Türkçe", flagImagePath: "./assets/img/flags/tr.png" },
        en: { text: "English", flagImagePath: "./assets/img/flags/uk.png" },
    }
};


/***/ }),

/***/ "B1o1":
/*!*********************************************************************!*\
  !*** ./src/app/shared/vertical-menu/vertical-menu-routes.config.ts ***!
  \*********************************************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
//Sidebar menu Routes and data
var ROUTES = [
    {
        path: '', title: 'menu.name.main', icon: 'ft-home', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        securityCheck: false, allowedEndpoints: [], customerType: 1,
        submenu: [
            { path: '/pf-home', title: 'menu.name.main.pos', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [],
                securityCheck: false, allowedEndpoints: [], customerType: 1
            },
            { path: '/dcb-home', title: 'menu.name.main.dcb', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [],
                securityCheck: false, allowedEndpoints: [], customerType: 1
            }
        ]
    },
    /* {
       path: '/page', title: 'menu.name.main', icon: 'ft-home', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [],
       securityCheck: false, allowedEndpoints: []
     },*/
    {
        path: '', title: 'menu.name.pf', icon: 'ft-credit-card', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        securityCheck: false, allowedEndpoints: [], customerType: 1,
        submenu: [
            { path: '/pf-history', title: 'menu.name.pf_trx', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [],
                securityCheck: false, allowedEndpoints: [], customerType: 1
            }
        ]
    },
    {
        path: '', title: 'menu.name.dcb', icon: 'ft-smartphone', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        securityCheck: false, allowedEndpoints: [], customerType: 1,
        submenu: [
            {
                path: '/dcb-transaction', title: 'menu.name.dcb_transaction', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '',
                isExternalLink: false, submenu: [], securityCheck: false, allowedEndpoints: [], customerType: 1
            },
            {
                path: '/dcb-transaction-summary', title: 'menu.name.dcb_transaction_summary', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [],
                securityCheck: false, allowedEndpoints: [], customerType: 1
            },
            {
                path: '/dcb-collection', title: 'menu.name.dcb_collection', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [],
                securityCheck: false, allowedEndpoints: [], customerType: 1
            },
            {
                path: '/dcb-collection-summary', title: 'menu.name.dcb_collection_summary', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [],
                securityCheck: false, allowedEndpoints: [], customerType: 1
            }
        ]
    },
    {
        path: '/user', title: 'menu.name.users', icon: 'ft-home', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [],
        securityCheck: true, allowedEndpoints: ['/api/user'], customerType: 1
    },
    // potential user start
    {
        path: '/pay-with-link', title: 'menu.name.pay_with_link', icon: 'ft-shopping-bag', class: '',
        badge: '', badgeClass: '', isExternalLink: false, submenu: [], securityCheck: false, allowedEndpoints: [], customerType: 2
    },
];


/***/ }),

/***/ "BqD0":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/nav-user-menu/nav-user-menu.component.ts ***!
  \****************************************************************************/
/*! exports provided: NavUserMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavUserMenuComponent", function() { return NavUserMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var _auth_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth/account.service */ "/AoX");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth/auth.service */ "jGGy");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "SVse");












function NavUserMenuComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 12);
} }
function NavUserMenuComponent_a_16_Template(rf, ctx) { if (rf & 1) {
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavUserMenuComponent_a_16_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.userRouter("change-business"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 1, "navbar.user.change.business"));
} }
var NavUserMenuComponent = /** @class */ (function () {
    function NavUserMenuComponent(translate, router, accountService, authService) {
        this.translate = translate;
        this.router = router;
        this.accountService = accountService;
        this.authService = authService;
        // user: User;
        this.valueHidden = true;
        if (localStorage.getItem('merchantLength')) {
            this.valueHidden = false;
        }
    }
    NavUserMenuComponent.prototype.getUsername = function () {
        return this.accountService.getUserName();
    };
    NavUserMenuComponent.prototype.getMerchant = function () {
        return this.accountService.getUserMerchant();
    };
    NavUserMenuComponent.prototype.getAvatar = function () {
        /*const imageUrl = this.accountService.getImageUrl()
        return imageUrl ? imageUrl : "assets/img/portrait/small/user.png";*/
        var account = JSON.parse(localStorage.getItem('account'));
        return account ? account.imageUrl : 'assets/img/portrait/small/user.png';
    };
    NavUserMenuComponent.prototype.logout = function () {
        this.authService.logout();
    };
    NavUserMenuComponent.prototype.userRouter = function (type) {
        localStorage.setItem('type', type);
        this.router.navigate(['/profile']);
    };
    NavUserMenuComponent.prototype.dropDownMenu = function () {
        if (localStorage.getItem('merchantLength')) {
            this.valueHidden = false;
        }
        else {
            this.valueHidden = true;
        }
        this.getUsername();
        this.getMerchant();
        this.getAvatar();
    };
    NavUserMenuComponent.ɵfac = function NavUserMenuComponent_Factory(t) { return new (t || NavUserMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
    NavUserMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavUserMenuComponent, selectors: [["app-nav-user-menu"]], decls: 24, vars: 11, consts: [["placement", "bottom-left", "display", "static", "ngbDropdown", "", 1, "dropdown", "nav-item", "mr-1", 3, "click"], ["id", "dropdownBasic2", "href", "javascript:;", "data-toggle", "dropdown", "ngbDropdownToggle", "", 1, "nav-link", "dropdown-toggle", "user-dropdown", "d-flex", "align-items-end", "p-0,"], [1, "user", "d-md-flex", "d-none", "mr-2", "ml-0"], [1, "text-right"], [1, "text-right", "text-muted", "font-small-3"], ["alt", "avatar", "height", "35", "width", "35", 1, "avatar", 3, "src"], ["aria-labelledby", "dropdownBasic2", "ngbDropdownMenu", "", 1, "dropdown-menu", "text-left", "dropdown-menu-right", "m-0", "pb-0"], [1, "dropdown-item", 3, "click"], [1, "d-flex", "align-items-center"], [1, "ft-edit", "mr-2"], ["class", "dropdown-divider", 4, "ngIf"], ["class", "dropdown-item", 3, "click", 4, "ngIf"], [1, "dropdown-divider"], ["href", "javascript:;", 1, "dropdown-item", 3, "click"], [1, "ft-power", "mr-2"]], template: function NavUserMenuComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavUserMenuComponent_Template_div_click_0_listener() { return ctx.dropDownMenu(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavUserMenuComponent_Template_a_click_9_listener() { return ctx.userRouter("general"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, NavUserMenuComponent_div_15_Template, 1, 0, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, NavUserMenuComponent_a_16_Template, 6, 3, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavUserMenuComponent_Template_a_click_18_listener() { return ctx.logout(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getUsername());
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getMerchant());
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.getAvatar(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 7, "navbar.user.edit-profile"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.valueHidden);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.valueHidden);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 9, "navbar.user.logout"));
        } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDropdownMenu"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXYtdXNlci1tZW51LmNvbXBvbmVudC5zY3NzIn0= */"] });
    return NavUserMenuComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavUserMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-nav-user-menu",
                templateUrl: "./nav-user-menu.component.html",
                styleUrls: ["./nav-user-menu.component.scss"]
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _auth_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"] }, { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "DqMI":
/*!********************************************************************!*\
  !*** ./src/app/shared/auth/authentication-access-guard.service.ts ***!
  \********************************************************************/
/*! exports provided: AuthenticationAccessGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationAccessGuard", function() { return AuthenticationAccessGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account.service */ "/AoX");
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./session.service */ "52Ve");









var AuthenticationAccessGuard = /** @class */ (function () {
    function AuthenticationAccessGuard(router, accountService, sessionService) {
        this.router = router;
        this.accountService = accountService;
        this.sessionService = sessionService;
    }
    AuthenticationAccessGuard.prototype.canActivate = function (route, state) {
        var auth = route.data['auth']; //none, pre, auth, full
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.checkAuth(auth, state.url));
    };
    AuthenticationAccessGuard.prototype.checkAuth = function (auth, url) {
        if ((auth === 'full' && this.accountService.isFullyAuthenticated())
            || (auth === 'auth' && this.accountService.isAuthenticated())
            || (auth === 'pre' && this.accountService.isPreAuthenticated())
            || (auth === 'none' && !this.accountService.isPreAuthenticated())) {
            return true;
        }
        this.navigate();
        return false;
    };
    AuthenticationAccessGuard.prototype.navigate = function () {
        if (this.accountService.isFullyAuthenticated()) {
            this.router.navigate(['/pf-home']);
        }
        else if (this.accountService.isAuthenticated()) {
            this.router.navigate(['/pages/terminus']);
        }
        else {
            this.router.navigate(['/pages/login']);
        }
    };
    AuthenticationAccessGuard.ɵfac = function AuthenticationAccessGuard_Factory(t) { return new (t || AuthenticationAccessGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"])); };
    AuthenticationAccessGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthenticationAccessGuard, factory: AuthenticationAccessGuard.ɵfac, providedIn: 'root' });
    return AuthenticationAccessGuard;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationAccessGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"] }, { type: _session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/layout.service */ "rmxa");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/config.service */ "vihK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _directives_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../directives/toggle-fullscreen.directive */ "md3d");
/* harmony import */ var _components_lang_selector_lang_selector_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/lang-selector/lang-selector.component */ "qDh4");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var _components_nav_user_menu_nav_user_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/nav-user-menu/nav-user-menu.component */ "BqD0");















var _c0 = function (a0, a1, a2, a3) { return { "navbar-brand-center": a0, "navbar-static": a1, "navbar-sticky": a2, "fixed-top": a3 }; };
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(translate, layoutService, router, configService, cdr) {
        var _this = this;
        this.translate = translate;
        this.layoutService = layoutService;
        this.router = router;
        this.configService = configService;
        this.cdr = cdr;
        this.toggleClass = "ft-maximize";
        this.placement = "bottom-right";
        this.logoUrl = 'assets/img/logo.png';
        this.menuPosition = 'Side';
        this.isSmallScreen = false;
        this.transparentBGClass = "";
        this.hideSidebar = true;
        this.isCollapsed = true;
        this.toggleHideSidebar = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.config = {};
        this.config = this.configService.templateConf;
        this.innerWidth = window.innerWidth;
        this.layoutSub = layoutService.toggleSidebar$.subscribe(function (isShow) {
            _this.hideSidebar = !isShow;
        });
    }
    NavbarComponent.prototype.ngOnInit = function () {
        if (this.innerWidth < 1200) {
            this.isSmallScreen = true;
        }
        else {
            this.isSmallScreen = false;
        }
    };
    NavbarComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.configSub = this.configService.templateConf$.subscribe(function (templateConf) {
            if (templateConf) {
                _this.config = templateConf;
            }
            _this.loadLayout();
            _this.cdr.markForCheck();
        });
    };
    NavbarComponent.prototype.ngOnDestroy = function () {
        if (this.layoutSub) {
            this.layoutSub.unsubscribe();
        }
        if (this.configSub) {
            this.configSub.unsubscribe();
        }
    };
    NavbarComponent.prototype.onResize = function (event) {
        this.innerWidth = event.target.innerWidth;
        if (this.innerWidth < 1200) {
            this.isSmallScreen = true;
        }
        else {
            this.isSmallScreen = false;
        }
    };
    NavbarComponent.prototype.loadLayout = function () {
        if (this.config.layout.menuPosition && this.config.layout.menuPosition.toString().trim() != "") {
            this.menuPosition = this.config.layout.menuPosition;
        }
        if (this.config.layout.variant === "Light") {
            this.logoUrl = 'assets/img/logo-dark.png';
        }
        else {
            this.logoUrl = 'assets/img/logo.png';
        }
        if (this.config.layout.variant === "Transparent") {
            this.transparentBGClass = this.config.layout.sidebar.backgroundColor;
        }
        else {
            this.transparentBGClass = "";
        }
    };
    NavbarComponent.prototype.ToggleClass = function () {
        if (this.toggleClass === "ft-maximize") {
            this.toggleClass = "ft-minimize";
        }
        else {
            this.toggleClass = "ft-maximize";
        }
    };
    NavbarComponent.prototype.toggleSidebar = function () {
        this.layoutService.toggleSidebarSmallScreen(this.hideSidebar);
    };
    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], hostBindings: function NavbarComponent_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function NavbarComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        } }, outputs: { toggleHideSidebar: "toggleHideSidebar" }, decls: 24, vars: 12, consts: [[3, "ngClass"], [1, "container-fluid", "navbar-wrapper"], [1, "navbar-header", "d-flex"], ["data-toggle", "collapse", 1, "navbar-toggle", "menu-toggle", "d-xl-none", "d-block", "float-left", "align-items-center", "justify-content-center", 3, "click"], [1, "ft-menu", "font-medium-3"], [1, "navbar-nav"], [1, "nav-item", "mr-2", "d-none", "d-lg-block"], ["id", "navbar-fullscreen", "href", "javascript:;", "appToggleFullscreen", "", 1, "nav-link", "apptogglefullscreen", 3, "click"], [1, "navbar-brand-center"], [1, "navbar-header", 2, "width", "unset !important"], [1, "nav-item"], [1, "logo"], [1, "logo-text"], [1, "text"], [1, "navbar-container"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse", "d-block"], ["display", "dynamic", 1, "i18n-dropdown", "nav-item", "mr-2"], ["placement", "bottom-left", "display", "static", "ngbDropdown", "", 1, "dropdown", "nav-item", "mr-1"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_div_click_3_listener() { return ctx.toggleSidebar(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_7_listener() { return ctx.ToggleClass(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "PAYCELL PORTAL");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "app-lang-selector");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "app-nav-user-menu");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("navbar navbar-expand-lg navbar-light header-navbar ", ctx.transparentBGClass, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](7, _c0, ctx.menuPosition === "Top", ctx.menuPosition === "Side" && (ctx.config == null ? null : ctx.config.layout.navbar.type) === "Static", ctx.menuPosition === "Side" && (ctx.config == null ? null : ctx.config.layout.navbar.type) === "Fixed", ctx.isSmallScreen && ctx.menuPosition === "Top"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"](" ", ctx.toggleClass, " font-medium-3");
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _directives_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_6__["ToggleFullscreenDirective"], _components_lang_selector_lang_selector_component__WEBPACK_IMPORTED_MODULE_7__["LangSelectorComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbDropdown"], _components_nav_user_menu_nav_user_menu_component__WEBPACK_IMPORTED_MODULE_9__["NavUserMenuComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LnNjc3MifQ== */"] });
    return NavbarComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-navbar",
                templateUrl: "./navbar.component.html",
                styleUrls: ["./navbar.component.scss"]
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }, { type: _services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { toggleHideSidebar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
        }] }); })();


/***/ }),

/***/ "F13P":
/*!*****************************************************************!*\
  !*** ./src/app/shared/directives/topmenu-dropdown.directive.ts ***!
  \*****************************************************************/
/*! exports provided: TopMenuDropdownDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopMenuDropdownDirective", function() { return TopMenuDropdownDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");




var TopMenuDropdownDirective = /** @class */ (function () {
    function TopMenuDropdownDirective(router) {
        this.router = router;
        this.navlinks = [];
    }
    TopMenuDropdownDirective.prototype.ngOnInit = function () {
        //write your code here!
    };
    TopMenuDropdownDirective.ɵfac = function TopMenuDropdownDirective_Factory(t) { return new (t || TopMenuDropdownDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
    TopMenuDropdownDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: TopMenuDropdownDirective, selectors: [["", "appTopMenuDropdown", ""]] });
    return TopMenuDropdownDirective;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopMenuDropdownDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appTopMenuDropdown]'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "GXmQ":
/*!*****************************************************************!*\
  !*** ./src/app/shared/vertical-menu/vertical-menu.component.ts ***!
  \*****************************************************************/
/*! exports provided: VerticalMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerticalMenuComponent", function() { return VerticalMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _vertical_menu_routes_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vertical-menu-routes.config */ "B1o1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var _animations_custom_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../animations/custom-animations */ "4b9w");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-device-detector */ "ARm4");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/config.service */ "vihK");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/layout.service */ "rmxa");
/* harmony import */ var _app_config_app_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app-config/app-config */ "lx5/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "aLe/");
/* harmony import */ var _directives_sidebar_dropdown_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../directives/sidebar-dropdown.directive */ "9AFB");
/* harmony import */ var _directives_sidebar_link_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../directives/sidebar-link.directive */ "uHtA");
/* harmony import */ var _directives_sidebar_anchor_toggle_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../directives/sidebar-anchor-toggle.directive */ "AFTa");





















var _c0 = ["toggleIcon"];
var _c1 = function () { return ["/page"]; };
var _c2 = function (a0, a1) { return { "ft-toggle-left": a0, "ft-toggle-right": a1 }; };
function VerticalMenuComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VerticalMenuComponent_div_0_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.toggleSidebar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VerticalMenuComponent_div_0_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.CloseSidebar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.logoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c2, ctx_r0.config.layout.sidebar.collapsed, !ctx_r0.config.layout.sidebar.collapsed));
} }
var _c3 = function (a0) { return [a0]; };
function VerticalMenuComponent_li_4_a_1_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, menuItem_r6.badgeClass));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menuItem_r6.badge);
} }
function VerticalMenuComponent_li_4_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, VerticalMenuComponent_li_4_a_1_span_5_Template, 2, 4, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c3, menuItem_r6.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, menuItem_r6.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuItem_r6.badge && menuItem_r6.badge != "");
} }
function VerticalMenuComponent_li_4_a_2_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, menuItem_r6.badgeClass));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menuItem_r6.badge);
} }
function VerticalMenuComponent_li_4_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, VerticalMenuComponent_li_4_a_2_span_5_Template, 2, 4, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", menuItem_r6.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c3, menuItem_r6.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, menuItem_r6.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuItem_r6.badge && menuItem_r6.badge != "");
} }
function VerticalMenuComponent_li_4_a_3_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, menuItem_r6.badgeClass));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menuItem_r6.badge);
} }
function VerticalMenuComponent_li_4_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, VerticalMenuComponent_li_4_a_3_span_5_Template, 2, 4, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c3, menuItem_r6.path), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c3, menuItem_r6.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, menuItem_r6.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuItem_r6.badge && menuItem_r6.badge != "");
} }
function VerticalMenuComponent_li_4_ul_4_li_1_a_1_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuSubItem_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, menuSubItem_r21.badgeClass));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menuSubItem_r21.badge);
} }
function VerticalMenuComponent_li_4_ul_4_li_1_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, VerticalMenuComponent_li_4_ul_4_li_1_a_1_span_5_Template, 2, 4, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuSubItem_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c3, menuSubItem_r21.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, menuSubItem_r21.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuSubItem_r21.badge && menuSubItem_r21.badge != "");
} }
function VerticalMenuComponent_li_4_ul_4_li_1_a_2_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuSubItem_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, menuSubItem_r21.badgeClass));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menuSubItem_r21.badge);
} }
function VerticalMenuComponent_li_4_ul_4_li_1_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, VerticalMenuComponent_li_4_ul_4_li_1_a_2_span_5_Template, 2, 4, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuSubItem_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", menuSubItem_r21.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c3, menuSubItem_r21.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, menuSubItem_r21.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuSubItem_r21.badge && menuSubItem_r21.badge != "");
} }
function VerticalMenuComponent_li_4_ul_4_li_1_a_3_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuSubItem_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, menuSubItem_r21.badgeClass));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menuSubItem_r21.badge);
} }
function VerticalMenuComponent_li_4_ul_4_li_1_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, VerticalMenuComponent_li_4_ul_4_li_1_a_3_span_5_Template, 2, 4, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuSubItem_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", menuSubItem_r21.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c3, menuSubItem_r21.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, menuSubItem_r21.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuSubItem_r21.badge && menuSubItem_r21.badge != "");
} }
function VerticalMenuComponent_li_4_ul_4_li_1_ul_4_li_1_a_1_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuSubsubItem_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, menuSubsubItem_r36.badgeClass));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menuSubsubItem_r36.badge);
} }
function VerticalMenuComponent_li_4_ul_4_li_1_ul_4_li_1_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, VerticalMenuComponent_li_4_ul_4_li_1_ul_4_li_1_a_1_span_5_Template, 2, 4, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuSubsubItem_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", menuSubsubItem_r36.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c3, menuSubsubItem_r36.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, menuSubsubItem_r36.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuSubsubItem_r36.badge && menuSubsubItem_r36.badge != "");
} }
function VerticalMenuComponent_li_4_ul_4_li_1_ul_4_li_1_ng_template_2_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuSubsubItem_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, menuSubsubItem_r36.badgeClass));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menuSubsubItem_r36.badge);
} }
function VerticalMenuComponent_li_4_ul_4_li_1_ul_4_li_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, VerticalMenuComponent_li_4_ul_4_li_1_ul_4_li_1_ng_template_2_span_5_Template, 2, 4, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuSubsubItem_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", menuSubsubItem_r36.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c3, menuSubsubItem_r36.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, menuSubsubItem_r36.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuSubsubItem_r36.badge && menuSubsubItem_r36.badge != "");
} }
var _c4 = function () { return { exact: true }; };
function VerticalMenuComponent_li_4_ul_4_li_1_ul_4_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VerticalMenuComponent_li_4_ul_4_li_1_ul_4_li_1_a_1_Template, 6, 8, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, VerticalMenuComponent_li_4_ul_4_li_1_ul_4_li_1_ng_template_2_Template, 6, 8, "ng-template", null, 34, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuSubsubItem_r36 = ctx.$implicit;
    var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    var menuItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4).$implicit;
    var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("level", ctx_r35.level + 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("parent", menuItem_r6.title)("hasSub", false)("path", menuSubsubItem_r36.path)("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c4))("ngClass", ctx_r35.config.layout.menuPosition === "Side" ? menuSubsubItem_r36.class : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !menuSubsubItem_r36.isExternalLink)("ngIfElse", _r38);
} }
function VerticalMenuComponent_li_4_ul_4_li_1_ul_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VerticalMenuComponent_li_4_ul_4_li_1_ul_4_li_1_Template, 4, 9, "li", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuSubItem_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", menuSubItem_r21.submenu);
} }
var _c5 = function (a0) { return { "has-sub": a0 }; };
function VerticalMenuComponent_li_4_ul_4_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VerticalMenuComponent_li_4_ul_4_li_1_a_1_Template, 6, 7, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, VerticalMenuComponent_li_4_ul_4_li_1_a_2_Template, 6, 8, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, VerticalMenuComponent_li_4_ul_4_li_1_a_3_Template, 6, 8, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, VerticalMenuComponent_li_4_ul_4_li_1_ul_4_Template, 2, 1, "ul", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuSubItem_r21 = ctx.$implicit;
    var menuItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("level", ctx_r20.level + 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("parent", menuItem_r6.title)("hasSub", menuSubItem_r21.class.includes("has-sub") ? true : false)("path", menuSubItem_r21.path)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c5, menuSubItem_r21.class.includes("has-sub") ? true : false))("routerLinkActive", menuSubItem_r21.submenu.length != 0 ? "open" : "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuSubItem_r21.submenu.length > 0 && !menuSubItem_r21.isExternalLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuSubItem_r21.submenu.length === 0 && !menuSubItem_r21.isExternalLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuSubItem_r21.isExternalLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuSubItem_r21.submenu.length > 0);
} }
function VerticalMenuComponent_li_4_ul_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VerticalMenuComponent_li_4_ul_4_li_1_Template, 5, 12, "li", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", menuItem_r6.submenu);
} }
var _c6 = function () { return { exact: false }; };
function VerticalMenuComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VerticalMenuComponent_li_4_a_1_Template, 6, 7, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, VerticalMenuComponent_li_4_a_2_Template, 6, 8, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, VerticalMenuComponent_li_4_a_3_Template, 6, 10, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, VerticalMenuComponent_li_4_ul_4_Template, 2, 1, "ul", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuItem_r6 = ctx.$implicit;
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("level", ctx_r1.level + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("parent", menuItem_r6.title)("path", menuItem_r6.path)("hasSub", menuItem_r6.class.includes("has-sub") ? true : false)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c5, menuItem_r6.class.includes("has-sub") ? true : false))("routerLinkActive", menuItem_r6.submenu.length != 0 ? "open" : "active")("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c6));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuItem_r6.submenu.length > 0 && !menuItem_r6.isExternalLink && ctx_r1.customerType.includes(menuItem_r6.customerType));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuItem_r6.submenu.length === 0 && !menuItem_r6.isExternalLink && ctx_r1.customerType.includes(menuItem_r6.customerType));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuItem_r6.isExternalLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuItem_r6.submenu.length > 0 && ctx_r1.customerType.includes(menuItem_r6.customerType));
} }
var VerticalMenuComponent = /** @class */ (function () {
    function VerticalMenuComponent(router, translate, layoutService, configService, cdr, deviceService, appConfig) {
        this.router = router;
        this.translate = translate;
        this.layoutService = layoutService;
        this.configService = configService;
        this.cdr = cdr;
        this.deviceService = deviceService;
        this.appConfig = appConfig;
        this.menuItems = [];
        this.level = 0;
        this.logoUrl = 'assets/img/logo.png';
        this.config = {};
        this.perfectScrollbarEnable = true;
        this.collapseSidebar = false;
        this.customerType = [];
        this.fireRefreshEventOnWindow = function () {
            var evt = document.createEvent("HTMLEvents");
            evt.initEvent("resize", true, false);
            window.dispatchEvent(evt);
        };
        var account = JSON.parse(localStorage.getItem('account'));
        this.customerType = account.customerType ? account.customerType : 1;
        this.customerType = [];
        if (account.customerType === '1') {
            this.customerType = [1, 2];
        }
        else if (account.customerType === '2') {
            this.customerType = [2];
        }
        else {
            this.customerType = [1, 2];
        }
        this.config = this.configService.templateConf;
        this.innerWidth = window.innerWidth;
        this.isTouchDevice();
    }
    VerticalMenuComponent.prototype.ngOnInit = function () {
        for (var i = 0; i < _vertical_menu_routes_config__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].length; i++) {
            if (true === _vertical_menu_routes_config__WEBPACK_IMPORTED_MODULE_1__["ROUTES"][i].securityCheck && this.isRendered(_vertical_menu_routes_config__WEBPACK_IMPORTED_MODULE_1__["ROUTES"][i])) {
                this.menuItems.push(_vertical_menu_routes_config__WEBPACK_IMPORTED_MODULE_1__["ROUTES"][i]);
            }
            if (false === _vertical_menu_routes_config__WEBPACK_IMPORTED_MODULE_1__["ROUTES"][i].securityCheck) {
                this.menuItems.push(_vertical_menu_routes_config__WEBPACK_IMPORTED_MODULE_1__["ROUTES"][i]);
            }
        }
    };
    VerticalMenuComponent.prototype.isRendered = function (info) {
        for (var j = 0; j < info.allowedEndpoints.length; j++) {
            if (this.appConfig.allowedEndpoints.indexOf(info.allowedEndpoints[j]) > -1) {
                return true;
            }
        }
        return false;
    };
    VerticalMenuComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.configSub = this.configService.templateConf$.subscribe(function (templateConf) {
            if (templateConf) {
                _this.config = templateConf;
            }
            _this.loadLayout();
            _this.cdr.markForCheck();
        });
        this.layoutSub = this.layoutService.overlaySidebarToggle$.subscribe(function (collapse) {
            if (_this.config.layout.menuPosition === "Side") {
                _this.collapseSidebar = collapse;
            }
        });
    };
    VerticalMenuComponent.prototype.onWindowResize = function (event) {
        var _this = this;
        if (this.resizeTimeout) {
            clearTimeout(this.resizeTimeout);
        }
        this.resizeTimeout = setTimeout((function () {
            _this.innerWidth = event.target.innerWidth;
            _this.loadLayout();
        }).bind(this), 500);
    };
    VerticalMenuComponent.prototype.loadLayout = function () {
        if (this.config.layout.menuPosition === "Top") { // Horizontal Menu
            if (this.innerWidth < 1200) { // Screen size < 1200
                this.menuItems = this.menuItems;
            }
        }
        else if (this.config.layout.menuPosition === "Side") { // Vertical Menu{
            this.menuItems = this.menuItems;
        }
        if (this.config.layout.sidebar.backgroundColor === 'white') {
            this.logoUrl = 'assets/img/logo-dark.png';
        }
        else {
            this.logoUrl = 'assets/img/logo.png';
        }
        if (this.config.layout.sidebar.collapsed) {
            this.collapseSidebar = true;
        }
        else {
            this.collapseSidebar = false;
        }
    };
    VerticalMenuComponent.prototype.toggleSidebar = function () {
        var _this = this;
        var conf = this.config;
        conf.layout.sidebar.collapsed = !this.config.layout.sidebar.collapsed;
        this.configService.applyTemplateConfigChange({ layout: conf.layout });
        setTimeout(function () {
            _this.fireRefreshEventOnWindow();
        }, 300);
    };
    VerticalMenuComponent.prototype.CloseSidebar = function () {
        this.layoutService.toggleSidebarSmallScreen(false);
    };
    VerticalMenuComponent.prototype.isTouchDevice = function () {
        var isMobile = this.deviceService.isMobile();
        var isTablet = this.deviceService.isTablet();
        if (isMobile || isTablet) {
            this.perfectScrollbarEnable = false;
        }
        else {
            this.perfectScrollbarEnable = true;
        }
    };
    VerticalMenuComponent.prototype.ngOnDestroy = function () {
        if (this.layoutSub) {
            this.layoutSub.unsubscribe();
        }
        if (this.configSub) {
            this.configSub.unsubscribe();
        }
    };
    VerticalMenuComponent.ɵfac = function VerticalMenuComponent_Factory(t) { return new (t || VerticalMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_7__["LayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_5__["DeviceDetectorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_config_app_config__WEBPACK_IMPORTED_MODULE_8__["AppConfig"])); };
    VerticalMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VerticalMenuComponent, selectors: [["app-sidebar"]], viewQuery: function VerticalMenuComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.toggleIcon = _t.first);
        } }, hostBindings: function VerticalMenuComponent_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function VerticalMenuComponent_resize_HostBindingHandler($event) { return ctx.onWindowResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        } }, decls: 5, vars: 3, consts: [["class", "sidebar-header", 4, "ngIf"], [1, "sidebar-content", "main-menu-content", 3, "perfectScrollbar", "disabled"], [1, "nav-container"], ["appSidebarDropdown", "", 1, "navigation"], ["appSidebarlink", "", 3, "parent", "path", "level", "hasSub", "ngClass", "routerLinkActive", "routerLinkActiveOptions", 4, "ngFor", "ngForOf"], [1, "sidebar-header"], [1, "logo", "clearfix"], [1, "logo-text", "float-left", 3, "routerLink"], [1, "logo-img"], ["width", "30", "alt", "Paycell logo", 3, "src"], ["id", "sidebarToggle", "href", "javascript:;", 1, "nav-toggle", "d-none", "d-lg-none", "d-xl-block", 3, "click"], [1, "toggle-icon", 3, "ngClass"], ["toggleIcon", ""], ["id", "sidebarClose", "href", "javascript:;", 1, "nav-close", "d-block", "d-lg-block", "d-xl-none", 3, "click"], [1, "ft-x"], ["appSidebarlink", "", 3, "parent", "path", "level", "hasSub", "ngClass", "routerLinkActive", "routerLinkActiveOptions"], ["appSidebarAnchorToggle", "", 4, "ngIf"], ["appSidebarAnchorToggle", "", 3, "routerLink", 4, "ngIf"], ["target", "_blank", 3, "href", 4, "ngIf"], ["appSidebarDropdown", "", "class", "menu-content", 4, "ngIf"], ["appSidebarAnchorToggle", ""], [3, "ngClass"], [1, "menu-title"], [3, "ngClass", 4, "ngIf"], ["appSidebarAnchorToggle", "", 3, "routerLink"], ["target", "_blank", 3, "href"], ["appSidebarDropdown", "", 1, "menu-content"], ["appSidebarlink", "", 3, "parent", "hasSub", "path", "level", "ngClass", "routerLinkActive", 4, "ngFor", "ngForOf"], ["appSidebarlink", "", 3, "parent", "hasSub", "path", "level", "ngClass", "routerLinkActive"], ["target", "_blank", 3, "routerLink", 4, "ngIf"], ["target", "_blank", 3, "routerLink"], ["appSidebarlink", "", "routerLinkActive", "active", 3, "parent", "hasSub", "path", "level", "routerLinkActiveOptions", "ngClass", 4, "ngFor", "ngForOf"], ["appSidebarlink", "", "routerLinkActive", "active", 3, "parent", "hasSub", "path", "level", "routerLinkActiveOptions", "ngClass"], ["appSidebarAnchorToggle", "", 3, "routerLink", 4, "ngIf", "ngIfElse"], ["externalSubSubLinkBlock", ""]], template: function VerticalMenuComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, VerticalMenuComponent_div_0_Template, 10, 7, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, VerticalMenuComponent_li_4_Template, 5, 14, "li", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.config == null ? null : ctx.config.layout.menuPosition) === "Side");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.perfectScrollbarEnable);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menuItems);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__["PerfectScrollbarDirective"], _directives_sidebar_dropdown_directive__WEBPACK_IMPORTED_MODULE_11__["SidebarDropdownDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _directives_sidebar_link_directive__WEBPACK_IMPORTED_MODULE_12__["SidebarLinkDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _directives_sidebar_anchor_toggle_directive__WEBPACK_IMPORTED_MODULE_13__["SidebarAnchorToggleDirective"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]], encapsulation: 2, data: { animation: _animations_custom_animations__WEBPACK_IMPORTED_MODULE_4__["customAnimations"] } });
    return VerticalMenuComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VerticalMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-sidebar",
                templateUrl: "./vertical-menu.component.html",
                animations: _animations_custom_animations__WEBPACK_IMPORTED_MODULE_4__["customAnimations"]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }, { type: _services_layout_service__WEBPACK_IMPORTED_MODULE_7__["LayoutService"] }, { type: _services_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: ngx_device_detector__WEBPACK_IMPORTED_MODULE_5__["DeviceDetectorService"] }, { type: _app_config_app_config__WEBPACK_IMPORTED_MODULE_8__["AppConfig"] }]; }, { toggleIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['toggleIcon']
        }], onWindowResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
        }] }); })();


/***/ }),

/***/ "NWlE":
/*!*******************************************************!*\
  !*** ./src/app/layouts/full/full-layout.component.ts ***!
  \*******************************************************/
/*! exports provided: FullLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullLayoutComponent", function() { return FullLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/services/config.service */ "vihK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var app_shared_services_customizer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/customizer.service */ "hFtW");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-device-detector */ "ARm4");
/* harmony import */ var app_shared_services_layout_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/layout.service */ "rmxa");
/* harmony import */ var app_shared_services_window_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/services/window.service */ "iQ22");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/navbar/navbar.component */ "EtQq");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/footer/footer.component */ "jQpT");
/* harmony import */ var _shared_directives_topmenu_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/directives/topmenu.directive */ "Aw8S");
/* harmony import */ var _shared_directives_sidebar_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/directives/sidebar.directive */ "goBR");
/* harmony import */ var _shared_vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/vertical-menu/vertical-menu.component */ "GXmQ");





















function FullLayoutComponent_app_horizontal_menu_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-horizontal-menu", 10);
} }
var _c0 = function (a0) { return { "background-image": a0 }; };
function FullLayoutComponent_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 13);
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, "url(" + ctx_r3.bgImage + ")"));
} }
var _c1 = function (a0, a1, a2) { return { "main-menu": a0, "menu-fixed": a1, "menu-native-scroll": a2 }; };
function FullLayoutComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function FullLayoutComponent_div_3_Template_div_mouseenter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.sidebarMouseenter($event); })("mouseleave", function FullLayoutComponent_div_3_Template_div_mouseleave_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.sidebarMouseleave($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-sidebar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FullLayoutComponent_div_3_div_2_Template, 1, 3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](4, _c1, ctx_r1.menuPosition === "Side" || ctx_r1.displayOverlayMenu, ctx_r1.menuPosition === "Side" || ctx_r1.displayOverlayMenu, !ctx_r1.perfectScrollbarEnable));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-background-color", (ctx_r1.config == null ? null : ctx_r1.config.layout.variant) === "Transparent" ? "black" : ctx_r1.bgColor)("data-image", ctx_r1.bgImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.config == null ? null : ctx_r1.config.layout.sidebar.backgroundImage);
} }
function FullLayoutComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullLayoutComponent_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.scrollToTop(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var _c2 = function (a0, a1) { return { "d-none": a0, "d-block": a1 }; };
var FullLayoutComponent = /** @class */ (function () {
    function FullLayoutComponent(configService, layoutService, router, customizerService, document, window, renderer, cdr, deviceService) {
        var _this = this;
        this.configService = configService;
        this.layoutService = layoutService;
        this.router = router;
        this.customizerService = customizerService;
        this.document = document;
        this.window = window;
        this.renderer = renderer;
        this.cdr = cdr;
        this.deviceService = deviceService;
        this.hideSidebar = true;
        this.overlayContent = false;
        this.isSmallScreen = false;
        this.menuPosition = 'Side';
        this.displayOverlayMenu = false; // Vertical Side menu for screenSize < 1200
        this.config = {};
        this.isMenuCollapsedOnHover = false;
        this.isScrollTopVisible = false;
        this.perfectScrollbarEnable = true;
        this.config = this.configService.templateConf;
        this.innerWidth = window.innerWidth;
        // On toggle sidebar menu
        this.layoutSub = layoutService.toggleSidebar$.subscribe(function (isShow) {
            _this.hideSidebar = !isShow;
            if (_this.hideSidebar) {
                _this.overlayContent = false;
            }
            else {
                _this.overlayContent = true;
            }
            _this.toggleSidebar();
        });
    }
    FullLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.configSub = this.configService.templateConf$.subscribe(function (templateConf) {
            if (templateConf) {
                _this.config = templateConf;
            }
            //load layout
            _this.loadLayout();
            _this.cdr.markForCheck();
        });
        //hide overlay class on router change
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__["NavigationEnd"]; })).subscribe(function (routeChange) {
            if (_this.config.layout.menuPosition === "Side" || _this.displayOverlayMenu) { // Vertical Menu
                if (_this.innerWidth < 1200) {
                    _this.layoutService.toggleSidebarSmallScreen(false);
                    _this.overlayContent = false;
                    _this.renderer.removeClass(_this.document.body, "overflow-hidden");
                }
            }
        });
    };
    FullLayoutComponent.prototype.ngAfterViewInit = function () {
        this.setMenuLayout();
    };
    FullLayoutComponent.prototype.ngOnDestroy = function () {
        //Unsubcribe subscriptions
        if (this.configSub) {
            this.configSub.unsubscribe();
        }
        if (this.layoutSub) {
            this.layoutSub.unsubscribe();
        }
    };
    //adjust layout
    FullLayoutComponent.prototype.setMenuLayout = function () {
        this.overlayContent = false;
        this.renderer.removeClass(this.document.body, "blank-page");
        if (this.config.layout.menuPosition === "Top") { // Horizontal Menu
            if (this.innerWidth < 1200) { // Screen size < 1200
                this.displayOverlayMenu = true;
                this.hideSidebar = true;
                this.renderer.removeClass(this.document.body, "horizontal-menu");
                this.renderer.removeClass(this.document.body, "menu-open");
                this.renderer.addClass(this.document.body, "horizontal-layout");
                this.renderer.addClass(this.document.body, "horizontal-menu-padding");
                this.renderer.addClass(this.document.body, "vertical-layout");
                this.renderer.addClass(this.document.body, "vertical-overlay-menu");
                this.renderer.addClass(this.document.body, "fixed-navbar");
                this.renderer.addClass(this.document.body, "menu-hide");
            }
            else { // Screen size > 1200
                this.displayOverlayMenu = false;
                this.hideSidebar = false;
                this.renderer.setAttribute(this.document.body, "data-menu", "horizontal-menu");
                this.renderer.removeClass(this.document.body, "vertical-layout");
                this.renderer.removeClass(this.document.body, "vertical-overlay-menu");
                this.renderer.removeClass(this.document.body, "fixed-navbar");
                this.renderer.removeClass(this.document.body, "menu-hide");
                this.renderer.removeClass(this.document.body, "vertical-menu");
                this.renderer.addClass(this.document.body, "horizontal-menu");
                this.renderer.addClass(this.document.body, "horizontal-layout");
                this.renderer.addClass(this.document.body, "horizontal-menu-padding");
            }
        }
        else if (this.config.layout.menuPosition === "Side") { // Vertical Menu
            if (this.innerWidth < 1200) { // If Screen size < 1200
                this.displayOverlayMenu = true;
                this.renderer.removeClass(this.document.body, "horizontal-layout");
                this.renderer.removeClass(this.document.body, "horizontal-menu");
                this.renderer.removeClass(this.document.body, "horizontal-menu-padding");
                this.renderer.removeClass(this.document.body, "menu-expanded");
                this.renderer.removeClass(this.document.body, "vertical-menu");
                this.renderer.removeClass(this.document.body, "menu-open");
                this.renderer.removeClass(this.document.body, "nav-collapsed");
                this.renderer.addClass(this.document.body, "vertical-layout");
                this.renderer.addClass(this.document.body, "menu-hide");
            }
            else { // If Screen size > 1200
                this.displayOverlayMenu = false;
                this.renderer.removeClass(this.document.body, "horizontal-layout");
                this.renderer.removeClass(this.document.body, "horizontal-menu");
                this.renderer.removeClass(this.document.body, "horizontal-menu-padding");
                this.renderer.setAttribute(this.document.body, "data-menu", "vertical-menu");
                this.renderer.addClass(this.document.body, "vertical-layout");
                if (!this.config.layout.sidebar.collapsed) {
                    this.renderer.addClass(this.document.body, "menu-expanded");
                    this.renderer.addClass(this.document.body, "menu-open");
                }
                this.renderer.addClass(this.document.body, "vertical-menu");
                this.renderer.removeClass(this.document.body, "menu-hide");
                this.renderer.removeClass(this.document.body, "vertical-overlay-menu");
            }
        }
    };
    FullLayoutComponent.prototype.loadLayout = function () {
        //menu position "SIDE" or "TOP"
        if (this.config.layout.menuPosition && this.config.layout.menuPosition.toString().trim() != "") {
            this.menuPosition = this.config.layout.menuPosition;
        }
        //Hide/show sidebar menu background image
        if (!this.config.layout.sidebar.backgroundImage) {
            this.bgImage = "";
        }
        else {
            this.bgImage = this.config.layout.sidebar.backgroundImageURL;
        }
        //Set sidebar menu background color
        if (!this.config.layout.sidebar.backgroundColor) {
            this.bgColor = this.customizerService.light_dark_colors[7].code;
        }
        else {
            this.bgColor = this.config.layout.sidebar.backgroundColor;
        }
        //toggle side menu
        if (this.config.layout.menuPosition === "Side") {
            if (this.config.layout.sidebar.collapsed) {
                this.isMenuCollapsedOnHover = true;
            }
            else {
                this.isMenuCollapsedOnHover = true;
            }
            this.toggleSidebar();
        }
        this.removeTransparentBGClasses();
        // Layout variants
        if (this.config.layout.variant === "Light") {
            this.renderer.removeClass(this.document.body, "layout-dark");
            this.renderer.removeClass(this.document.body, "layout-transparent");
        }
        else if (this.config.layout.variant === "Dark") {
            this.renderer.removeClass(this.document.body, "layout-transparent");
            this.renderer.addClass(this.document.body, "layout-dark");
        }
        else if (this.config.layout.variant === "Transparent") {
            this.renderer.addClass(this.document.body, "layout-dark");
            this.renderer.addClass(this.document.body, "layout-transparent");
            this.renderer.addClass(this.document.body, this.bgColor);
            this.bgImage = "";
        }
        this.setMenuLayout();
        // For Sidebar width
        if (this.config.layout.sidebar.size === 'sidebar-sm') {
            this.renderer.removeClass(this.document.body, "sidebar-lg");
            this.renderer.addClass(this.document.body, "sidebar-sm");
        }
        else if (this.config.layout.sidebar.size === 'sidebar-lg') {
            this.renderer.removeClass(this.document.body, "sidebar-sm");
            this.renderer.addClass(this.document.body, "sidebar-lg");
        }
        else {
            this.renderer.removeClass(this.document.body, "sidebar-sm");
            this.renderer.removeClass(this.document.body, "sidebar-lg");
        }
        if (this.config.layout.menuPosition === "Side") {
            // vertical/Side menu expanded/collapse
            if (this.config.layout.sidebar.collapsed && !this.isSmallScreen) { // collapse side menu
                this.renderer.removeClass(this.document.body, "menu-expanded");
                this.renderer.addClass(this.document.body, "nav-collapsed");
            }
            else { // expand side menu
                this.renderer.removeClass(this.document.body, "nav-collapsed");
                this.renderer.addClass(this.document.body, "menu-expanded");
            }
        }
        //Navbar types
        if (this.config.layout.navbar.type === 'Static') {
            this.renderer.removeClass(this.document.body, "navbar-sticky");
            this.renderer.addClass(this.document.body, "navbar-static");
        }
        else if (this.config.layout.navbar.type === 'Fixed') {
            this.renderer.removeClass(this.document.body, "navbar-static");
            this.renderer.addClass(this.document.body, "navbar-sticky");
        }
    };
    FullLayoutComponent.prototype.toggleSidebar = function () {
        if (this.hideSidebar) { // on sidebar collapse
            this.renderer.removeClass(this.document.body, "menu-expanded");
            this.renderer.removeClass(this.document.body, "vertical-menu");
            this.renderer.removeClass(this.document.body, "menu-open");
            this.renderer.addClass(this.document.body, "vertical-layout");
            this.renderer.addClass(this.document.body, "menu-hide");
            if (this.config.layout.menuPosition === "Top") {
                this.renderer.addClass(this.document.body, "vertical-overlay-menu");
            }
        }
        else { // on sidebar expand
            this.renderer.addClass(this.document.body, "vertical-layout");
            this.renderer.addClass(this.document.body, "menu-expanded");
            this.renderer.addClass(this.document.body, "vertical-menu");
            if (this.config.layout.sidebar.collapsed) {
                this.renderer.removeClass(this.document.body, "menu-open");
            }
            else {
                this.renderer.addClass(this.document.body, "menu-open");
            }
            this.renderer.removeClass(this.document.body, "menu-hide");
        }
        this.isTouchDevice();
    };
    FullLayoutComponent.prototype.isTouchDevice = function () {
        var isMobile = this.deviceService.isMobile();
        var isTablet = this.deviceService.isTablet();
        if (isMobile || isTablet) {
            if (!this.hideSidebar) {
                this.renderer.addClass(this.document.body, "overflow-hidden");
            }
            else {
                this.renderer.removeClass(this.document.body, "overflow-hidden");
            }
        }
    };
    FullLayoutComponent.prototype.hideCompactMenuOnSmallScreen = function () {
        if (this.innerWidth < 1200) {
            var conf = this.config;
            conf.layout.sidebar.collapsed = false;
            this.configService.applyTemplateConfigChange({ layout: conf.layout });
        }
    };
    //Remove transparent layout classes
    FullLayoutComponent.prototype.removeTransparentBGClasses = function () {
        var _this = this;
        this.customizerService.transparent_colors.forEach(function (_) {
            _this.renderer.removeClass(_this.document.body, _.class);
        });
        this.customizerService.transparent_colors_with_shade.forEach(function (_) {
            _this.renderer.removeClass(_this.document.body, _.class);
        });
    };
    FullLayoutComponent.prototype.sidebarMouseenter = function (e) {
        if (this.config.layout.sidebar.collapsed) {
            this.isMenuCollapsedOnHover = false;
            this.layoutService.overlaySidebartoggle(this.isMenuCollapsedOnHover);
        }
    };
    FullLayoutComponent.prototype.sidebarMouseleave = function (e) {
        if (this.config.layout.sidebar.collapsed) {
            this.isMenuCollapsedOnHover = true;
            this.layoutService.overlaySidebartoggle(this.isMenuCollapsedOnHover);
        }
    };
    //scroll to top on click
    FullLayoutComponent.prototype.scrollToTop = function () {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    };
    FullLayoutComponent.prototype.onOutsideClick = function (e) {
        if (this.innerWidth < 1200) {
            if (!e.target.classList.contains("toggleSidebarNavbarButton")) {
                this.layoutService.toggleSidebarSmallScreen(false);
            }
        }
    };
    FullLayoutComponent.prototype.onResize = function (event) {
        var _this = this;
        if (this.resizeTimeout) {
            clearTimeout(this.resizeTimeout);
        }
        this.resizeTimeout = setTimeout((function () {
            _this.innerWidth = event.target.innerWidth;
            _this.setMenuLayout();
            _this.hideCompactMenuOnSmallScreen();
        }).bind(this), 500);
    };
    //Add/remove classes on page scroll
    FullLayoutComponent.prototype.onWindowScroll = function () {
        var number = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
        if (number > 60) {
            this.renderer.addClass(this.document.body, "navbar-scrolled");
        }
        else {
            this.renderer.removeClass(this.document.body, "navbar-scrolled");
        }
        if (number > 400) {
            this.isScrollTopVisible = true;
        }
        else {
            this.isScrollTopVisible = false;
        }
        if (number > 20) {
            this.renderer.addClass(this.document.body, "page-scrolled");
        }
        else {
            this.renderer.removeClass(this.document.body, "page-scrolled");
        }
    };
    FullLayoutComponent.ɵfac = function FullLayoutComponent_Factory(t) { return new (t || FullLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_layout_service__WEBPACK_IMPORTED_MODULE_5__["LayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_customizer_service__WEBPACK_IMPORTED_MODULE_3__["CustomizerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_window_service__WEBPACK_IMPORTED_MODULE_6__["WINDOW"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_4__["DeviceDetectorService"])); };
    FullLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FullLayoutComponent, selectors: [["app-full-layout"]], hostBindings: function FullLayoutComponent_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function FullLayoutComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("scroll", function FullLayoutComponent_scroll_HostBindingHandler() { return ctx.onWindowScroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        } }, decls: 13, vars: 7, consts: [[1, "wrapper", 3, "resize"], ["appTopMenu", "", 4, "ngIf"], ["appSidebar", "", "class", "app-sidebar", "data-active-color", "white", 3, "ngClass", "mouseenter", "mouseleave", 4, "ngIf"], [1, "main-panel"], [1, "main-content"], [1, "content-overlay"], [1, "content-wrapper"], ["class", "btn btn-primary scroll-top", "type", "button", 3, "click", 4, "ngIf"], [1, "sidenav-overlay", 3, "ngClass", "click"], [1, "drag-target"], ["appTopMenu", ""], ["appSidebar", "", "data-active-color", "white", 1, "app-sidebar", 3, "ngClass", "mouseenter", "mouseleave"], ["class", "sidebar-background", 3, "ngStyle", 4, "ngIf"], [1, "sidebar-background", 3, "ngStyle"], ["type", "button", 1, "btn", "btn-primary", "scroll-top", 3, "click"], [1, "ft-arrow-up"]], template: function FullLayoutComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function FullLayoutComponent_Template_div_resize_1_listener($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FullLayoutComponent_app_horizontal_menu_2_Template, 1, 0, "app-horizontal-menu", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FullLayoutComponent_div_3_Template, 3, 8, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-footer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, FullLayoutComponent_button_10_Template, 2, 0, "button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullLayoutComponent_Template_div_click_11_listener($event) { return ctx.onOutsideClick($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.menuPosition === "Top" && !ctx.displayOverlayMenu);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.menuPosition === "Side" || ctx.displayOverlayMenu);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isScrollTopVisible);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c2, ctx.displayOverlayMenu && ctx.hideSidebar && !ctx.overlayContent, ctx.displayOverlayMenu && !ctx.hideSidebar && ctx.overlayContent && ctx.innerWidth < 1200));
        } }, directives: [_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterOutlet"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _shared_directives_topmenu_directive__WEBPACK_IMPORTED_MODULE_11__["TopMenuDirective"], _shared_directives_sidebar_directive__WEBPACK_IMPORTED_MODULE_12__["SidebarDirective"], _shared_vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_13__["VerticalMenuComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmdWxsLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */"], changeDetection: 0 });
    return FullLayoutComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FullLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-full-layout",
                templateUrl: "./full-layout.component.html",
                styleUrls: ["./full-layout.component.scss"],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"] }, { type: app_shared_services_layout_service__WEBPACK_IMPORTED_MODULE_5__["LayoutService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: app_shared_services_customizer_service__WEBPACK_IMPORTED_MODULE_3__["CustomizerService"] }, { type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
            }] }, { type: Window, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [app_shared_services_window_service__WEBPACK_IMPORTED_MODULE_6__["WINDOW"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: ngx_device_detector__WEBPACK_IMPORTED_MODULE_4__["DeviceDetectorService"] }]; }, { onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
        }], onWindowScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["window:scroll", []]
        }] }); })();


/***/ }),

/***/ "Oo6I":
/*!*************************************************************!*\
  !*** ./src/app/shared/directives/topmenu-link.directive.ts ***!
  \*************************************************************/
/*! exports provided: TopMenuLinkDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopMenuLinkDirective", function() { return TopMenuLinkDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _topmenu_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./topmenu.directive */ "Aw8S");




var TopMenuLinkDirective = /** @class */ (function () {
    function TopMenuLinkDirective(topNav) {
        this.topNav = topNav;
    }
    Object.defineProperty(TopMenuLinkDirective.prototype, "show", {
        get: function () {
            return this._show;
        },
        set: function (value) {
            this._show = value;
            if (value) {
                this.topNav.closeOtherLinks(this);
            }
        },
        enumerable: false,
        configurable: true
    });
    TopMenuLinkDirective.prototype.ngOnInit = function () {
        this.topNav.addLink(this);
    };
    TopMenuLinkDirective.prototype.ngOnDestroy = function () {
    };
    // public toggle(): any {
    //   this.show = !this.show;
    // }
    TopMenuLinkDirective.prototype.openDropdown = function () {
        this.show = true;
    };
    TopMenuLinkDirective.ɵfac = function TopMenuLinkDirective_Factory(t) { return new (t || TopMenuLinkDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_topmenu_directive__WEBPACK_IMPORTED_MODULE_1__["TopMenuDirective"])); };
    TopMenuLinkDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: TopMenuLinkDirective, selectors: [["", "appTopMenulink", ""]], hostVars: 2, hostBindings: function TopMenuLinkDirective_HostBindings(rf, ctx) { if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("show", ctx.show);
        } }, inputs: { parent: "parent", level: "level", show: "show" } });
    return TopMenuLinkDirective;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopMenuLinkDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: "[appTopMenulink]"
            }]
    }], function () { return [{ type: _topmenu_directive__WEBPACK_IMPORTED_MODULE_1__["TopMenuDirective"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_topmenu_directive__WEBPACK_IMPORTED_MODULE_1__["TopMenuDirective"]]
            }] }]; }, { parent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], level: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], show: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.show']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/overlay */ "1O3W");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "aLe/");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-click-outside */ "Hicy");
/* harmony import */ var app_shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/shared/pipes/pipe.module */ "anuX");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./footer/footer.component */ "jQpT");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./navbar/navbar.component */ "EtQq");
/* harmony import */ var _vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./vertical-menu/vertical-menu.component */ "GXmQ");
/* harmony import */ var _customizer_customizer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./customizer/customizer.component */ "zvRJ");
/* harmony import */ var _directives_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./directives/toggle-fullscreen.directive */ "md3d");
/* harmony import */ var _directives_sidebar_link_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./directives/sidebar-link.directive */ "uHtA");
/* harmony import */ var _directives_sidebar_dropdown_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./directives/sidebar-dropdown.directive */ "9AFB");
/* harmony import */ var _directives_sidebar_anchor_toggle_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./directives/sidebar-anchor-toggle.directive */ "AFTa");
/* harmony import */ var _directives_sidebar_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./directives/sidebar.directive */ "goBR");
/* harmony import */ var _directives_topmenu_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./directives/topmenu.directive */ "Aw8S");
/* harmony import */ var _directives_topmenu_link_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./directives/topmenu-link.directive */ "Oo6I");
/* harmony import */ var _directives_topmenu_dropdown_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./directives/topmenu-dropdown.directive */ "F13P");
/* harmony import */ var _directives_topmenu_anchor_toggle_directive__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./directives/topmenu-anchor-toggle.directive */ "TbSF");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-webstorage */ "0uJq");
/* harmony import */ var _components_lang_selector_lang_selector_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/lang-selector/lang-selector.component */ "qDh4");
/* harmony import */ var _components_nav_user_menu_nav_user_menu_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/nav-user-menu/nav-user-menu.component */ "BqD0");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _interceptors_auth_header_interceptor__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./interceptors/auth-header.interceptor */ "4VRr");
/* harmony import */ var angular_archwizard__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! angular-archwizard */ "mHm1");
/* harmony import */ var _components_alert_alert_error_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/alert/alert-error.component */ "spY6");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "w9WL");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ng-apexcharts */ "Tczp");
/* harmony import */ var ng_chartist__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ng-chartist */ "4QQT");
/* harmony import */ var _interceptors_auth_expired_interceptor__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./interceptors/auth-expired.interceptor */ "lVC7");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");










//COMPONENTS




//DIRECTIVES























var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
    SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, providers: [
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_26__["HTTP_INTERCEPTORS"],
                useClass: _interceptors_auth_header_interceptor__WEBPACK_IMPORTED_MODULE_27__["AuthHeaderInterceptor"],
                multi: true,
            },
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_26__["HTTP_INTERCEPTORS"],
                useClass: _interceptors_auth_expired_interceptor__WEBPACK_IMPORTED_MODULE_33__["AuthExpiredInterceptor"],
                multi: true,
            },
        ], imports: [[
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["OverlayModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarModule"],
                ng_click_outside__WEBPACK_IMPORTED_MODULE_8__["ClickOutsideModule"],
                app_shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_9__["PipeModule"],
                ngx_webstorage__WEBPACK_IMPORTED_MODULE_23__["NgxWebstorageModule"].forRoot({ prefix: 'app', separator: '-' }),
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_34__["NgSelectModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDatepickerModule"]
            ], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
            angular_archwizard__WEBPACK_IMPORTED_MODULE_28__["ArchwizardModule"],
            _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_30__["NgxDatatableModule"],
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_31__["NgApexchartsModule"],
            ng_chartist__WEBPACK_IMPORTED_MODULE_32__["ChartistModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_34__["NgSelectModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDatepickerModule"]] });
    return SharedModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"],
        _vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_12__["VerticalMenuComponent"],
        _customizer_customizer_component__WEBPACK_IMPORTED_MODULE_13__["CustomizerComponent"],
        _directives_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_14__["ToggleFullscreenDirective"],
        _directives_sidebar_link_directive__WEBPACK_IMPORTED_MODULE_15__["SidebarLinkDirective"],
        _directives_sidebar_dropdown_directive__WEBPACK_IMPORTED_MODULE_16__["SidebarDropdownDirective"],
        _directives_sidebar_anchor_toggle_directive__WEBPACK_IMPORTED_MODULE_17__["SidebarAnchorToggleDirective"],
        _directives_sidebar_directive__WEBPACK_IMPORTED_MODULE_18__["SidebarDirective"],
        _directives_topmenu_link_directive__WEBPACK_IMPORTED_MODULE_20__["TopMenuLinkDirective"],
        _directives_topmenu_dropdown_directive__WEBPACK_IMPORTED_MODULE_21__["TopMenuDropdownDirective"],
        _directives_topmenu_anchor_toggle_directive__WEBPACK_IMPORTED_MODULE_22__["TopMenuAnchorToggleDirective"],
        _directives_topmenu_directive__WEBPACK_IMPORTED_MODULE_19__["TopMenuDirective"],
        _components_lang_selector_lang_selector_component__WEBPACK_IMPORTED_MODULE_24__["LangSelectorComponent"],
        _components_nav_user_menu_nav_user_menu_component__WEBPACK_IMPORTED_MODULE_25__["NavUserMenuComponent"],
        _components_alert_alert_error_component__WEBPACK_IMPORTED_MODULE_29__["AlertErrorComponent"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["OverlayModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarModule"],
        ng_click_outside__WEBPACK_IMPORTED_MODULE_8__["ClickOutsideModule"],
        app_shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_9__["PipeModule"], ngx_webstorage__WEBPACK_IMPORTED_MODULE_23__["NgxWebstorageModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_34__["NgSelectModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDatepickerModule"]], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"],
        _vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_12__["VerticalMenuComponent"],
        _customizer_customizer_component__WEBPACK_IMPORTED_MODULE_13__["CustomizerComponent"],
        _directives_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_14__["ToggleFullscreenDirective"],
        _directives_sidebar_directive__WEBPACK_IMPORTED_MODULE_18__["SidebarDirective"],
        _directives_topmenu_directive__WEBPACK_IMPORTED_MODULE_19__["TopMenuDirective"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
        _components_lang_selector_lang_selector_component__WEBPACK_IMPORTED_MODULE_24__["LangSelectorComponent"],
        angular_archwizard__WEBPACK_IMPORTED_MODULE_28__["ArchwizardModule"],
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_30__["NgxDatatableModule"],
        ng_apexcharts__WEBPACK_IMPORTED_MODULE_31__["NgApexchartsModule"],
        _components_alert_alert_error_component__WEBPACK_IMPORTED_MODULE_29__["AlertErrorComponent"],
        ng_chartist__WEBPACK_IMPORTED_MODULE_32__["ChartistModule"],
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_34__["NgSelectModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDatepickerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                exports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
                    _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"],
                    _vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_12__["VerticalMenuComponent"],
                    _customizer_customizer_component__WEBPACK_IMPORTED_MODULE_13__["CustomizerComponent"],
                    _directives_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_14__["ToggleFullscreenDirective"],
                    _directives_sidebar_directive__WEBPACK_IMPORTED_MODULE_18__["SidebarDirective"],
                    _directives_topmenu_directive__WEBPACK_IMPORTED_MODULE_19__["TopMenuDirective"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
                    _components_lang_selector_lang_selector_component__WEBPACK_IMPORTED_MODULE_24__["LangSelectorComponent"],
                    angular_archwizard__WEBPACK_IMPORTED_MODULE_28__["ArchwizardModule"],
                    _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_30__["NgxDatatableModule"],
                    ng_apexcharts__WEBPACK_IMPORTED_MODULE_31__["NgApexchartsModule"],
                    _components_alert_alert_error_component__WEBPACK_IMPORTED_MODULE_29__["AlertErrorComponent"],
                    ng_chartist__WEBPACK_IMPORTED_MODULE_32__["ChartistModule"],
                    _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_34__["NgSelectModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDatepickerModule"]
                ],
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["OverlayModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarModule"],
                    ng_click_outside__WEBPACK_IMPORTED_MODULE_8__["ClickOutsideModule"],
                    app_shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_9__["PipeModule"],
                    ngx_webstorage__WEBPACK_IMPORTED_MODULE_23__["NgxWebstorageModule"].forRoot({ prefix: 'app', separator: '-' }),
                    _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_34__["NgSelectModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDatepickerModule"]
                ],
                declarations: [
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
                    _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"],
                    _vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_12__["VerticalMenuComponent"],
                    _customizer_customizer_component__WEBPACK_IMPORTED_MODULE_13__["CustomizerComponent"],
                    _directives_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_14__["ToggleFullscreenDirective"],
                    _directives_sidebar_link_directive__WEBPACK_IMPORTED_MODULE_15__["SidebarLinkDirective"],
                    _directives_sidebar_dropdown_directive__WEBPACK_IMPORTED_MODULE_16__["SidebarDropdownDirective"],
                    _directives_sidebar_anchor_toggle_directive__WEBPACK_IMPORTED_MODULE_17__["SidebarAnchorToggleDirective"],
                    _directives_sidebar_directive__WEBPACK_IMPORTED_MODULE_18__["SidebarDirective"],
                    _directives_topmenu_link_directive__WEBPACK_IMPORTED_MODULE_20__["TopMenuLinkDirective"],
                    _directives_topmenu_dropdown_directive__WEBPACK_IMPORTED_MODULE_21__["TopMenuDropdownDirective"],
                    _directives_topmenu_anchor_toggle_directive__WEBPACK_IMPORTED_MODULE_22__["TopMenuAnchorToggleDirective"],
                    _directives_topmenu_directive__WEBPACK_IMPORTED_MODULE_19__["TopMenuDirective"],
                    _components_lang_selector_lang_selector_component__WEBPACK_IMPORTED_MODULE_24__["LangSelectorComponent"],
                    _components_nav_user_menu_nav_user_menu_component__WEBPACK_IMPORTED_MODULE_25__["NavUserMenuComponent"],
                    _components_alert_alert_error_component__WEBPACK_IMPORTED_MODULE_29__["AlertErrorComponent"]
                ],
                providers: [
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_26__["HTTP_INTERCEPTORS"],
                        useClass: _interceptors_auth_header_interceptor__WEBPACK_IMPORTED_MODULE_27__["AuthHeaderInterceptor"],
                        multi: true,
                    },
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_26__["HTTP_INTERCEPTORS"],
                        useClass: _interceptors_auth_expired_interceptor__WEBPACK_IMPORTED_MODULE_33__["AuthExpiredInterceptor"],
                        multi: true,
                    },
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "PzMM":
/*!***************************************************!*\
  !*** ./src/app/shared/auth/auth-guard.service.ts ***!
  \***************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./account.service */ "/AoX");






var AuthGuard = /** @class */ (function () {
    function AuthGuard(accountService, router) {
        this.accountService = accountService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var isAuth = this.accountService.isAuthenticated();
        if (!isAuth) {
            this.router.navigate(['/pages/login']);
        }
        else {
            return true;
        }
    };
    AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"])); };
    AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac });
    return AuthGuard;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"] }]; }, null); })();


/***/ }),

/***/ "QLLi":
/*!****************************************************!*\
  !*** ./src/app/shared/services/message.service.ts ***!
  \****************************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");




var MessageService = /** @class */ (function () {
    function MessageService(translateService) {
        this.translateService = translateService;
        this.receiveMessage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    MessageService.prototype.getEmitter = function () {
        return this.receiveMessage;
    };
    MessageService.prototype.remove = function () {
        this.receiveMessage.emit(null);
    };
    MessageService.prototype.addHttpError = function (httpError) {
        var message = this.translateHttpError(httpError);
        if (message) {
            this.receiveMessage.emit({
                message: message,
                type: 'warning'
            });
        }
    };
    MessageService.prototype.addError = function (messageKey) {
        var message = this.getMessage(messageKey, messageKey);
        if (message) {
            this.receiveMessage.emit({
                message: message,
                type: 'warning'
            });
        }
    };
    MessageService.prototype.translateHttpError = function (error) {
        if (!error) {
            return;
        }
        var httpErrorResponse = error.httpErrorResponse, defaultMessage = error.defaultMessage;
        if (!httpErrorResponse) {
            if (defaultMessage) {
                return this.getMessage(defaultMessage, 'Bir hata oluştu.');
            }
            return;
        }
        var _error = httpErrorResponse.error;
        if (_error.localizedMessage && _error.localizedMessage !== '') {
            return _error.localizedMessage;
        }
        else if (defaultMessage && defaultMessage !== '') {
            return this.getMessage(defaultMessage, 'Bir hata oluştu.');
        }
        else if (_error.message && _error.message !== '') {
            return this.getMessage(_error.message, 'Bir hata oluştu.');
        }
        else {
            return this.getMessage('error.default.message', 'Bir hata oluştu.');
        }
        // switch (httpErrorResponse.status) {
        //   case 0:
        //     return this.getMessage('error.server.not.reachable', 'Bağlantı hatası oluştu.');
        //     break;
        //
        //   case 400:
        //     return this.getMessage('error.bad.request', 'Lütfen alanları tekrar kontrol edin.');
        //     break;
        //
        //   case 404:
        //     return this.getMessage('error.not.found', 'Bağlantı hatası oluştu.');
        //     break;
        //
        //   default: {
        //     const error = httpErrorResponse.error;
        //     if (error.localizedMessage && error.localizedMessage !== '') {
        //       return error.localizedMessage;
        //     } else if (defaultMessage && defaultMessage !== '') {
        //       return this.getMessage(defaultMessage, 'Bir hata oluştu.');
        //     } else if (error.message && error.message !== '') {
        //       return this.getMessage(error.message, 'Bir hata oluştu.');
        //     } else {
        //       return this.getMessage('error.default.message', 'Bir hata oluştu.');
        //     }
        //   }
        // }
    };
    MessageService.prototype.getMessage = function (messageKey, defaultMessage) {
        if (messageKey) {
            var tempMessage = this.translateService.instant(messageKey);
            if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])() || tempMessage !== messageKey) {
                return tempMessage;
            }
        }
        return defaultMessage;
    };
    MessageService.ɵfac = function MessageService_Factory(t) { return new (t || MessageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"])); };
    MessageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MessageService, factory: MessageService.ɵfac, providedIn: 'root' });
    return MessageService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/app.constants */ "dkQB");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _shared_components_my_loader_my_loader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/components/my-loader/my-loader.component */ "qB01");
/* harmony import */ var _shared_components_message_message_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/components/message/message.component */ "ZjcB");












var AppComponent = /** @class */ (function () {
    function AppComponent(http, router, translate) {
        this.http = http;
        this.router = router;
        this.translate = translate;
        translate.addLangs(app_app_constants__WEBPACK_IMPORTED_MODULE_4__["LANGUAGES"]);
        translate.setDefaultLang(app_app_constants__WEBPACK_IMPORTED_MODULE_4__["DEFAULT_LOCALE"]);
        translate.use(app_app_constants__WEBPACK_IMPORTED_MODULE_4__["DEFAULT_LOCALE"]);
        // if active, then detects the browser's language, and set it as the application language
        if (app_app_constants__WEBPACK_IMPORTED_MODULE_4__["USE_BROWSER_LANGUAGE"]) {
            var browserLang = translate.getBrowserLang();
            if (browserLang.match(/en|tr/)) {
                translate.use(browserLang);
            }
        }
    }
    AppComponent.prototype.ngOnInit = function () {
        this.subscription = this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }))
            .subscribe(function () { return window.scrollTo(0, 0); });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"])); };
    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-my-loader");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-message");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        } }, directives: [_shared_components_my_loader_my_loader_component__WEBPACK_IMPORTED_MODULE_6__["MyLoaderComponent"], _shared_components_message_message_component__WEBPACK_IMPORTED_MODULE_7__["MessageComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
    return AppComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "TbSF":
/*!**********************************************************************!*\
  !*** ./src/app/shared/directives/topmenu-anchor-toggle.directive.ts ***!
  \**********************************************************************/
/*! exports provided: TopMenuAnchorToggleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopMenuAnchorToggleDirective", function() { return TopMenuAnchorToggleDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _topmenu_link_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./topmenu-link.directive */ "Oo6I");




var TopMenuAnchorToggleDirective = /** @class */ (function () {
    function TopMenuAnchorToggleDirective(navlink) {
        this.navlink = navlink;
    }
    // @HostListener("click", ["$event"])
    // onClick() {
    //   this.navlink.toggle();
    // }
    TopMenuAnchorToggleDirective.prototype.onMouseOver = function (e) {
        this.navlink.openDropdown();
    };
    TopMenuAnchorToggleDirective.ɵfac = function TopMenuAnchorToggleDirective_Factory(t) { return new (t || TopMenuAnchorToggleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_topmenu_link_directive__WEBPACK_IMPORTED_MODULE_1__["TopMenuLinkDirective"])); };
    TopMenuAnchorToggleDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: TopMenuAnchorToggleDirective, selectors: [["", "appTopMenuAnchorToggle", ""]], hostBindings: function TopMenuAnchorToggleDirective_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function TopMenuAnchorToggleDirective_mouseenter_HostBindingHandler($event) { return ctx.onMouseOver($event); });
        } } });
    return TopMenuAnchorToggleDirective;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopMenuAnchorToggleDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: "[appTopMenuAnchorToggle]"
            }]
    }], function () { return [{ type: _topmenu_link_directive__WEBPACK_IMPORTED_MODULE_1__["TopMenuLinkDirective"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_topmenu_link_directive__WEBPACK_IMPORTED_MODULE_1__["TopMenuLinkDirective"]]
            }] }]; }, { onMouseOver: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["mouseenter", ["$event"]]
        }] }); })();


/***/ }),

/***/ "UhSo":
/*!*********************************************!*\
  !*** ./src/app/shared/pipes/filter.pipe.ts ***!
  \*********************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, searchTerm, labelKey) {
        if (!items || !searchTerm) {
            return null;
        }
        return items.filter(function (item) {
            return item[labelKey || 'name']
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) === true;
        }).slice(0, 10);
    };
    FilterPipe.ɵfac = function FilterPipe_Factory(t) { return new (t || FilterPipe)(); };
    FilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "filter", type: FilterPipe, pure: true });
    return FilterPipe;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'filter'
            }]
    }], null, null); })();


/***/ }),

/***/ "WfBE":
/*!*********************************************!*\
  !*** ./src/app/shared/pipes/search.pipe.ts ***!
  \*********************************************/
/*! exports provided: SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPipe", function() { return SearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (value, keys, term) {
        if (!term)
            return value;
        return (value || []).filter(function (item) { return keys.split(',').some(function (key) { return item.hasOwnProperty(key) && new RegExp(term, 'gi').test(item[key]); }); });
    };
    SearchPipe.ɵfac = function SearchPipe_Factory(t) { return new (t || SearchPipe)(); };
    SearchPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "search", type: SearchPipe, pure: true });
    return SearchPipe;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'search'
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser/animations */ "omvX");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "7g+E");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_common_locales_tr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/locales/tr */ "6/97");
/* harmony import */ var _angular_common_locales_tr__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_tr__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "aLe/");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _layouts_content_content_layout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layouts/content/content-layout.component */ "AqrB");
/* harmony import */ var _layouts_full_full_layout_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./layouts/full/full-layout.component */ "NWlE");
/* harmony import */ var _shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/auth/auth.service */ "jGGy");
/* harmony import */ var _shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/auth/auth-guard.service */ "PzMM");
/* harmony import */ var _shared_auth_authentication_access_guard_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/auth/authentication-access-guard.service */ "DqMI");
/* harmony import */ var _shared_services_window_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/services/window.service */ "iQ22");
/* harmony import */ var _util_custom_translate_http_loader_util__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./util/custom-translate-http-loader.util */ "yjeL");
/* harmony import */ var _shared_auth_session_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/auth/session.service */ "52Ve");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-toastr */ "EApP");
/* harmony import */ var _shared_components_message_message_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shared/components/message/message.component */ "ZjcB");
/* harmony import */ var _shared_app_config_app_config__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./shared/app-config/app-config */ "lx5/");
/* harmony import */ var _shared_my_loader_loader_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./shared/my-loader/loader.service */ "o1mt");
/* harmony import */ var _shared_my_loader_loader_interceptor_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./shared/my-loader/loader-interceptor.service */ "rPpP");
/* harmony import */ var _shared_components_my_loader_my_loader_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./shared/components/my-loader/my-loader.component */ "qB01");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/forms */ "s7LF");






























Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["registerLocaleData"])(_angular_common_locales_tr__WEBPACK_IMPORTED_MODULE_7___default.a, 'tr');
var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true,
    wheelPropagation: false
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]] });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
            _shared_my_loader_loader_service__WEBPACK_IMPORTED_MODULE_23__["LoaderService"],
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _shared_my_loader_loader_interceptor_service__WEBPACK_IMPORTED_MODULE_24__["LoaderInterceptor"], multi: true },
            _shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"],
            _shared_auth_session_service__WEBPACK_IMPORTED_MODULE_19__["SessionService"],
            _shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"],
            _shared_auth_authentication_access_guard_service__WEBPACK_IMPORTED_MODULE_16__["AuthenticationAccessGuard"],
            _shared_app_config_app_config__WEBPACK_IMPORTED_MODULE_22__["AppConfig"],
            {
                provide: _angular_core__WEBPACK_IMPORTED_MODULE_5__["APP_INITIALIZER"],
                useFactory: _shared_app_config_app_config__WEBPACK_IMPORTED_MODULE_22__["initConfig"],
                deps: [_shared_app_config_app_config__WEBPACK_IMPORTED_MODULE_22__["AppConfig"]],
                multi: true
            },
            { provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PERFECT_SCROLLBAR_CONFIG"], useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG },
            { provide: _angular_core__WEBPACK_IMPORTED_MODULE_5__["LOCALE_ID"], useValue: 'tr-TR' },
            _shared_services_window_service__WEBPACK_IMPORTED_MODULE_17__["WINDOW_PROVIDERS"]
        ], imports: [[
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_20__["ToastrModule"].forRoot(),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateLoader"],
                        useClass: _util_custom_translate_http_loader_util__WEBPACK_IMPORTED_MODULE_18__["CustomTranslateHttpLoader"],
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _shared_app_config_app_config__WEBPACK_IMPORTED_MODULE_22__["AppConfig"]]
                    }
                }),
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PerfectScrollbarModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_26__["FormsModule"]
            ]] });
    return AppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"], _layouts_full_full_layout_component__WEBPACK_IMPORTED_MODULE_13__["FullLayoutComponent"], _layouts_content_content_layout_component__WEBPACK_IMPORTED_MODULE_12__["ContentLayoutComponent"], _shared_components_message_message_component__WEBPACK_IMPORTED_MODULE_21__["MessageComponent"], _shared_components_my_loader_my_loader_component__WEBPACK_IMPORTED_MODULE_25__["MyLoaderComponent"]], imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModule"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_20__["ToastrModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PerfectScrollbarModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_26__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"], _layouts_full_full_layout_component__WEBPACK_IMPORTED_MODULE_13__["FullLayoutComponent"], _layouts_content_content_layout_component__WEBPACK_IMPORTED_MODULE_12__["ContentLayoutComponent"], _shared_components_message_message_component__WEBPACK_IMPORTED_MODULE_21__["MessageComponent"], _shared_components_my_loader_my_loader_component__WEBPACK_IMPORTED_MODULE_25__["MyLoaderComponent"]],
                imports: [
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModule"],
                    ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerModule"],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_20__["ToastrModule"].forRoot(),
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"].forRoot({
                        loader: {
                            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateLoader"],
                            useClass: _util_custom_translate_http_loader_util__WEBPACK_IMPORTED_MODULE_18__["CustomTranslateHttpLoader"],
                            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _shared_app_config_app_config__WEBPACK_IMPORTED_MODULE_22__["AppConfig"]]
                        }
                    }),
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PerfectScrollbarModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_26__["FormsModule"]
                ],
                providers: [
                    _shared_my_loader_loader_service__WEBPACK_IMPORTED_MODULE_23__["LoaderService"],
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _shared_my_loader_loader_interceptor_service__WEBPACK_IMPORTED_MODULE_24__["LoaderInterceptor"], multi: true },
                    _shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"],
                    _shared_auth_session_service__WEBPACK_IMPORTED_MODULE_19__["SessionService"],
                    _shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"],
                    _shared_auth_authentication_access_guard_service__WEBPACK_IMPORTED_MODULE_16__["AuthenticationAccessGuard"],
                    _shared_app_config_app_config__WEBPACK_IMPORTED_MODULE_22__["AppConfig"],
                    {
                        provide: _angular_core__WEBPACK_IMPORTED_MODULE_5__["APP_INITIALIZER"],
                        useFactory: _shared_app_config_app_config__WEBPACK_IMPORTED_MODULE_22__["initConfig"],
                        deps: [_shared_app_config_app_config__WEBPACK_IMPORTED_MODULE_22__["AppConfig"]],
                        multi: true
                    },
                    { provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PERFECT_SCROLLBAR_CONFIG"], useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG },
                    { provide: _angular_core__WEBPACK_IMPORTED_MODULE_5__["LOCALE_ID"], useValue: 'tr-TR' },
                    _shared_services_window_service__WEBPACK_IMPORTED_MODULE_17__["WINDOW_PROVIDERS"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZjcB":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/message/message.component.ts ***!
  \****************************************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/message.service */ "QLLi");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "EApP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");








var MessageComponent = /** @class */ (function () {
    function MessageComponent(messageService, toastrService, router) {
        var _this = this;
        this.messageService = messageService;
        this.toastrService = toastrService;
        this.router = router;
        this.messageEmitter = messageService.getEmitter();
        this.messageEmitter.subscribe(function (message) { return _this.showPositionTopFullWidth(message); });
        router.events.subscribe(function (val) {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"]) {
                _this.removeToastr();
            }
        });
    }
    MessageComponent.prototype.ngOnDestroy = function () {
        this.removeToastr();
        if (this.messageEmitter) {
            this.messageEmitter.unsubscribe();
            this.messageEmitter = null;
        }
    };
    MessageComponent.prototype.removeToastr = function () {
        this.toastrService.clear();
    };
    MessageComponent.prototype.showPositionTopFullWidth = function (message) {
        //success
        //info
        //warning
        //error
        this.removeToastr();
        if (message) {
            this.toastrService.error(message.message, null, {
                positionClass: 'toast-top-full-width',
                progressBar: true,
                timeOut: 15000
            });
        }
    };
    MessageComponent.ɵfac = function MessageComponent_Factory(t) { return new (t || MessageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
    MessageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MessageComponent, selectors: [["app-message"]], decls: 0, vars: 0, template: function MessageComponent_Template(rf, ctx) { }, styles: [".alert-light-danger[_ngcontent-%COMP%] {\n  background-color: #FEEFD0 !important;\n  color: #F55252 !important;\n  border-color: #FEEFD0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL21lc3NhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUFDRiIsImZpbGUiOiJtZXNzYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsZXJ0LWxpZ2h0LWRhbmdlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRUVGRDAgIWltcG9ydGFudDtcbiAgY29sb3I6ICNGNTUyNTIgICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogI0ZFRUZEMDtcbn1cbiJdfQ== */"] });
    return MessageComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-message',
                template: '',
                styleUrls: ['./message.component.scss']
            }]
    }], function () { return [{ type: _services_message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "anuX":
/*!*********************************************!*\
  !*** ./src/app/shared/pipes/pipe.module.ts ***!
  \*********************************************/
/*! exports provided: PipeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipeModule", function() { return PipeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _filter_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter.pipe */ "UhSo");
/* harmony import */ var _search_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search.pipe */ "WfBE");
/* harmony import */ var _short_name_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./short-name.pipe */ "khXv");






var PipeModule = /** @class */ (function () {
    function PipeModule() {
    }
    PipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PipeModule });
    PipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PipeModule_Factory(t) { return new (t || PipeModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
    return PipeModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PipeModule, { declarations: [_filter_pipe__WEBPACK_IMPORTED_MODULE_2__["FilterPipe"], _search_pipe__WEBPACK_IMPORTED_MODULE_3__["SearchPipe"], _short_name_pipe__WEBPACK_IMPORTED_MODULE_4__["ShortNamePipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_filter_pipe__WEBPACK_IMPORTED_MODULE_2__["FilterPipe"], _search_pipe__WEBPACK_IMPORTED_MODULE_3__["SearchPipe"], _short_name_pipe__WEBPACK_IMPORTED_MODULE_4__["ShortNamePipe"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_filter_pipe__WEBPACK_IMPORTED_MODULE_2__["FilterPipe"], _search_pipe__WEBPACK_IMPORTED_MODULE_3__["SearchPipe"], _short_name_pipe__WEBPACK_IMPORTED_MODULE_4__["ShortNamePipe"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                exports: [_filter_pipe__WEBPACK_IMPORTED_MODULE_2__["FilterPipe"], _search_pipe__WEBPACK_IMPORTED_MODULE_3__["SearchPipe"], _short_name_pipe__WEBPACK_IMPORTED_MODULE_4__["ShortNamePipe"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "crnd";

/***/ }),

/***/ "dkQB":
/*!**********************************!*\
  !*** ./src/app/app.constants.ts ***!
  \**********************************/
/*! exports provided: DEFAULT_LOCALE, USE_BROWSER_LANGUAGE, LANGUAGES, LANGUAGE_META, POTENTIAL_CUSTOMER_TYPE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_LOCALE", function() { return DEFAULT_LOCALE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USE_BROWSER_LANGUAGE", function() { return USE_BROWSER_LANGUAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANGUAGES", function() { return LANGUAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANGUAGE_META", function() { return LANGUAGE_META; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POTENTIAL_CUSTOMER_TYPE", function() { return POTENTIAL_CUSTOMER_TYPE; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ "AytR");

var DEFAULT_LOCALE = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].defaultLocale;
var USE_BROWSER_LANGUAGE = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].useBrowserLanguage;
var LANGUAGES = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].activeLanguages;
var LANGUAGE_META = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].languageMeta;
var POTENTIAL_CUSTOMER_TYPE = "2";


/***/ }),

/***/ "goBR":
/*!********************************************************!*\
  !*** ./src/app/shared/directives/sidebar.directive.ts ***!
  \********************************************************/
/*! exports provided: SidebarDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarDirective", function() { return SidebarDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/config.service */ "vihK");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/layout.service */ "rmxa");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");








var SidebarDirective = /** @class */ (function () {
    function SidebarDirective(cdr, router, configService, layoutService) {
        this.cdr = cdr;
        this.router = router;
        this.configService = configService;
        this.layoutService = layoutService;
        this.navlinks = [];
        this.config = {};
        this.mouseEnter = false;
        this.sidebarExpanded = true;
        this.config = this.configService.templateConf;
        this.sidebarExpanded = !this.config.layout.sidebar.collapsed;
    }
    Object.defineProperty(SidebarDirective.prototype, "navExpanded", {
        get: function () {
            return this._navExpanded;
        },
        set: function (value) {
            this._navExpanded = value;
        },
        enumerable: false,
        configurable: true
    });
    SidebarDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.innerWidth = window.innerWidth;
        this.layoutSub = this.configService.templateConf$.subscribe(function (templateConf) {
            if (templateConf) {
                _this.config = templateConf;
            }
            _this.loadLayout();
            _this.cdr.markForCheck();
        });
    };
    SidebarDirective.prototype.ngOnDestroy = function () {
        if (this.layoutSub) {
            this.layoutSub.unsubscribe();
        }
    };
    //load layout when changes in the config
    SidebarDirective.prototype.loadLayout = function () {
        this.sidebarExpanded = !this.config.layout.sidebar.collapsed;
        if (this.config.layout.sidebar.collapsed && !this.mouseEnter) {
            this.setSidebarGroupActiveCollapsed();
            this.navExpanded = false;
        }
        else {
            this.setSidebarGroupActive();
            this.navExpanded = true;
        }
    };
    //add menu links to the link list
    SidebarDirective.prototype.addLink = function (link) {
        this.navlinks.push(link);
    };
    //close all other menu items other than active one
    SidebarDirective.prototype.closeOtherLinks = function (openLink) {
        this.navlinks.forEach(function (link) {
            if (link != openLink && (openLink.level.toString() === "1" || link.level === openLink.level)) {
                link.open = false;
                link.sidebarGroupActive = false;
            }
            else if (link === openLink && (openLink.level.toString() === "1") && link.hasSub === true) {
                link.sidebarGroupActive = true;
            }
            else if (link === openLink && (openLink.level.toString() === "1") && link.hasSub === false) {
                link.sidebarGroupActive = false;
                link.open = false;
            }
            else if (link === openLink && openLink.level.toString() != "1" && link.hasSub === false) {
                link.open = false;
                link.sidebarGroupActive = false;
                return;
            }
        });
    };
    SidebarDirective.prototype.ngAfterViewInit = function () {
    };
    // call when sidebar toggle is collapsed but still in expand mode on mouse hover
    SidebarDirective.prototype.setSidebarGroupActive = function () {
        var _this = this;
        if (this.navlinks.length > 0) {
            this.navlinks.forEach(function (link) {
                link.sidebarGroupActive = false;
                link.navCollapsedOpen = false;
            });
            var matched_1 = this.navlinks.find(function (link) { return link.path === _this.router.url; });
            if (matched_1) {
                var parent_1 = this.navlinks.find(function (link) { return link.parent === matched_1.parent && link.level.toString() === "1" && link.hasSub === true; });
                if (parent_1) {
                    parent_1.sidebarGroupActive = true;
                    parent_1.navCollapsedOpen = false;
                    parent_1.open = true;
                }
            }
        }
    };
    // call when sidebar toggle is collapsed and is in collapse mode on mouse out
    SidebarDirective.prototype.setSidebarGroupActiveCollapsed = function () {
        var _this = this;
        this.closeOtherLinks(this.navlinks.find(function (link) { return link.path === _this.router.url; }));
        if (this.navlinks.length > 0) {
            this.navlinks.forEach(function (link) {
                link.sidebarGroupActive = false;
                link.navCollapsedOpen = false;
            });
            var matched_2 = this.navlinks.find(function (link) { return link.path === _this.router.url; });
            if (matched_2) {
                var parent_2 = this.navlinks.find(function (link) { return link.parent === matched_2.parent && link.level.toString() === "1" && link.hasSub === true; });
                if (parent_2) {
                    parent_2.sidebarGroupActive = true;
                    parent_2.navCollapsedOpen = true;
                    parent_2.open = false;
                }
            }
        }
    };
    // mouse enter event of side menu
    SidebarDirective.prototype.onMouseOver = function (e) {
        this.mouseEnter = true;
        if (this.config.layout.sidebar.collapsed) {
            this.setSidebarGroupActive();
            this.navExpanded = true;
        }
    };
    // mouse leave event of side menu
    SidebarDirective.prototype.onMouseOut = function (e) {
        this.mouseEnter = false;
        if (this.config.layout.sidebar.collapsed) {
            this.setSidebarGroupActiveCollapsed();
            this.navExpanded = false;
        }
    };
    SidebarDirective.ɵfac = function SidebarDirective_Factory(t) { return new (t || SidebarDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"])); };
    SidebarDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: SidebarDirective, selectors: [["", "appSidebar", ""]], hostVars: 2, hostBindings: function SidebarDirective_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function SidebarDirective_mouseenter_HostBindingHandler($event) { return ctx.onMouseOver($event); })("mouseleave", function SidebarDirective_mouseleave_HostBindingHandler($event) { return ctx.onMouseOut($event); });
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("expanded", ctx.navExpanded);
        } }, inputs: { navExpanded: "navExpanded" } });
    return SidebarDirective;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: '[appSidebar]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _services_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"] }, { type: _services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"] }]; }, { navExpanded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["class.expanded"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onMouseOver: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["mouseenter", ["$event"]]
        }], onMouseOut: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["mouseleave", ["$event"]]
        }] }); })();


/***/ }),

/***/ "hFtW":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/customizer.service.ts ***!
  \*******************************************************/
/*! exports provided: CustomizerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomizerService", function() { return CustomizerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config.service */ "vihK");





var CustomizerService = /** @class */ (function () {
    function CustomizerService(config) {
        this.config = config;
        // sidebar BG colors for Light & Dark Layout
        this.light_dark_colors = [
            {
                code: "mint",
                class: "gradient-mint",
                active: false,
                type: 'gradient'
            },
            {
                code: "king-yna",
                class: "gradient-king-yna",
                active: false,
                type: 'gradient'
            },
            {
                code: "ibiza-sunset",
                class: "gradient-ibiza-sunset",
                active: false,
                type: 'gradient'
            },
            {
                code: "flickr",
                class: "gradient-flickr",
                active: false,
                type: 'gradient'
            },
            {
                code: "purple-bliss",
                class: "gradient-purple-bliss",
                active: false,
                type: 'gradient'
            },
            {
                code: "man-of-steel",
                class: "gradient-man-of-steel",
                active: false,
                type: 'gradient'
            },
            {
                code: "purple-love",
                class: "gradient-purple-love",
                active: false,
                type: 'gradient'
            },
            {
                code: "black",
                class: "bg-black",
                active: false,
                type: 'solid'
            },
            {
                code: "white",
                class: "bg-grey",
                active: false,
                type: 'solid'
            },
            {
                code: "primary",
                class: "bg-primary",
                active: false,
                type: 'solid'
            },
            {
                code: "success",
                class: "bg-success",
                active: false,
                type: 'solid'
            },
            {
                code: "warning",
                class: "bg-warning",
                active: false,
                type: 'solid'
            },
            {
                code: "info",
                class: "bg-info",
                active: false,
                type: 'solid'
            },
            {
                code: "danger",
                class: "bg-danger",
                active: false,
                type: 'solid'
            }
        ];
        // sidebar BG colors for Transparent Layout
        this.transparent_colors = [
            {
                class: "bg-glass-hibiscus",
                active: false
            },
            {
                class: "bg-glass-purple-pizzazz",
                active: false
            },
            {
                class: "bg-glass-blue-lagoon",
                active: false
            },
            {
                class: "bg-glass-electric-violet",
                active: false
            },
            {
                class: "bg-glass-portage",
                active: false
            },
            {
                class: "bg-glass-tundora",
                active: false
            }
        ];
        // sidebar BG images for Light & Dark Layout
        this.light_dark_bg_images = [
            {
                src: "assets/img/sidebar-bg/01.jpg",
                active: false
            },
            {
                src: "assets/img/sidebar-bg/02.jpg",
                active: false
            },
            {
                src: "assets/img/sidebar-bg/03.jpg",
                active: false
            },
            {
                src: "assets/img/sidebar-bg/04.jpg",
                active: false
            },
            {
                src: "assets/img/sidebar-bg/05.jpg",
                active: false
            },
            {
                src: "assets/img/sidebar-bg/06.jpg",
                active: false
            },
        ];
        // Background Colors with Shades for Transparent Layout
        this.transparent_colors_with_shade = [
            {
                class: "bg-glass-1",
                active: false
            },
            {
                class: "bg-glass-2",
                active: false
            },
            {
                class: "bg-glass-3",
                active: false
            },
            {
                class: "bg-glass-4",
                active: false
            },
        ];
        this.lightDarkLayoutGradientBGColors = [];
        this.lightDarkLayoutSolidBGColors = [];
        this.transparentLayoutBGColors = [];
        this.transparentLayoutBGColorsWithShades = [];
        this.lightDarkLayoutBGImages = [];
        this.getData();
    }
    CustomizerService.prototype.getData = function () {
        this.lightDarkLayoutGradientBGColors = this.getlightDarkLayoutGradientBGColors();
        this.lightDarkLayoutSolidBGColors = this.getlightDarkLayoutSolidBGColors();
        this.transparentLayoutBGColors = this.getTransparentLayoutBGColors();
        this.transparentLayoutBGColorsWithShades = this.GetTransparentLayoutBGColorsWithShades();
        this.lightDarkLayoutBGImages = this.getLightDarkLayoutBGImages();
    };
    CustomizerService.prototype.getlightDarkLayoutGradientBGColors = function () {
        var _this = this;
        return this.light_dark_colors.filter(function (_) { return _.type === 'gradient'; })
            .map(function (color) {
            color.active = (color.code === _this.config.templateConf.layout.sidebar.backgroundColor);
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, color);
        });
    };
    CustomizerService.prototype.getlightDarkLayoutSolidBGColors = function () {
        var _this = this;
        return this.light_dark_colors.filter(function (_) { return _.type === 'solid'; })
            .map(function (color) {
            color.active = (color.code === _this.config.templateConf.layout.sidebar.backgroundColor);
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, color);
        });
    };
    CustomizerService.prototype.getTransparentLayoutBGColors = function () {
        var _this = this;
        return this.transparent_colors
            .map(function (color) {
            color.active = (color.class === _this.config.templateConf.layout.sidebar.backgroundColor);
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, color);
        });
    };
    CustomizerService.prototype.GetTransparentLayoutBGColorsWithShades = function () {
        var _this = this;
        return this.transparent_colors_with_shade
            .map(function (color) {
            color.active = (color.class === _this.config.templateConf.layout.sidebar.backgroundColor);
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, color);
        });
    };
    CustomizerService.prototype.getLightDarkLayoutBGImages = function () {
        var _this = this;
        return this.light_dark_bg_images
            .map(function (image) {
            image.active = (image.src === _this.config.templateConf.layout.sidebar.backgroundImageURL);
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, image);
        });
    };
    //called when click to change on any Gradient/Solid color for Light & Dark layout in customizer
    CustomizerService.prototype.changeSidebarBGColor = function (color) {
        var conf = this.config.templateConf;
        conf.layout.sidebar.backgroundColor = color.code;
        this.config.applyTemplateConfigChange({ layout: conf.layout });
        this.getData();
    };
    //called when click to change on any Transparent color for Transparent layout in customizer
    CustomizerService.prototype.changeSidebarTransparentBGColor = function (color) {
        var conf = this.config.templateConf;
        conf.layout.sidebar.backgroundColor = color.class;
        conf.layout.sidebar.backgroundImage = false;
        conf.layout.sidebar.backgroundImageURL = '';
        this.config.applyTemplateConfigChange({ layout: conf.layout });
        this.getData();
    };
    //called when click to change on any image for Light & Dark layout in customizer
    CustomizerService.prototype.changeSidebarBgImage = function (image) {
        var conf = this.config.templateConf;
        conf.layout.sidebar.backgroundImageURL = image.src;
        this.config.applyTemplateConfigChange({ layout: conf.layout });
        this.getData();
    };
    CustomizerService.prototype.bgImageDisplay = function (e) {
        var conf = this.config.templateConf;
        if (e.target.checked) {
            conf.layout.sidebar.backgroundImage = true;
        }
        else {
            conf.layout.sidebar.backgroundImage = false;
        }
        this.config.applyTemplateConfigChange({ layout: conf.layout });
    };
    CustomizerService.prototype.toggleCompactMenu = function (e) {
        var conf = this.config.templateConf;
        if (e.target.checked) {
            conf.layout.sidebar.collapsed = true;
        }
        else {
            conf.layout.sidebar.collapsed = false;
        }
        this.config.applyTemplateConfigChange({ layout: conf.layout });
    };
    CustomizerService.prototype.changeSidebarWidth = function (value) {
        var conf = this.config.templateConf;
        conf.layout.sidebar.size = value;
        this.config.applyTemplateConfigChange({ layout: conf.layout });
    };
    CustomizerService.prototype.toggleNavbarType = function (value) {
        var conf = this.config.templateConf;
        conf.layout.navbar.type = value;
        this.config.applyTemplateConfigChange({ layout: conf.layout });
    };
    // position: "Side" for vertical menu and position: "Top" for horizontal menu
    CustomizerService.prototype.toggleMenuPosition = function (position) {
        var conf = this.config.templateConf;
        conf.layout.menuPosition = position;
        this.config.applyTemplateConfigChange({ layout: conf.layout });
    };
    CustomizerService.prototype.switchLayout = function (layout, isBgImageDisplay) {
        var conf = this.config.templateConf;
        if (layout.toLowerCase() === 'light') {
            conf.layout.variant = 'Light';
            conf.layout.sidebar.backgroundImageURL = this.light_dark_bg_images[0].src;
            conf.layout.sidebar.backgroundColor = this.light_dark_colors[5].code;
            conf.layout.sidebar.backgroundImage = isBgImageDisplay;
        }
        else if (layout.toLowerCase() === 'dark') {
            conf.layout.variant = 'Dark';
            conf.layout.sidebar.backgroundImageURL = this.light_dark_bg_images[2].src;
            conf.layout.sidebar.backgroundColor = this.light_dark_colors[7].code;
            conf.layout.sidebar.backgroundImage = isBgImageDisplay;
        }
        else if (layout.toLowerCase() === 'transparent') {
            conf.layout.variant = 'Transparent';
            conf.layout.sidebar.backgroundImageURL = "";
            conf.layout.sidebar.backgroundColor = this.transparent_colors_with_shade[0].class;
        }
        this.config.applyTemplateConfigChange({ layout: conf.layout });
        this.getData();
    };
    CustomizerService.ɵfac = function CustomizerService_Factory(t) { return new (t || CustomizerService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"])); };
    CustomizerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CustomizerService, factory: CustomizerService.ɵfac, providedIn: "root" });
    return CustomizerService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CustomizerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: "root"
            }]
    }], function () { return [{ type: _config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] }]; }, null); })();


/***/ }),

/***/ "iQ22":
/*!***************************************************!*\
  !*** ./src/app/shared/services/window.service.ts ***!
  \***************************************************/
/*! exports provided: WINDOW, WindowRef, BrowserWindowRef, windowFactory, browserWindowProvider, windowProvider, WINDOW_PROVIDERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WINDOW", function() { return WINDOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowRef", function() { return WindowRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserWindowRef", function() { return BrowserWindowRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "windowFactory", function() { return windowFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "browserWindowProvider", function() { return browserWindowProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "windowProvider", function() { return windowProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WINDOW_PROVIDERS", function() { return WINDOW_PROVIDERS; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");




/* Create a new injection token for injecting the window into a component. */
var WINDOW = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('WindowToken');
/* Define abstract class for obtaining reference to the global window object. */
var WindowRef = /** @class */ (function () {
    function WindowRef() {
    }
    Object.defineProperty(WindowRef.prototype, "nativeWindow", {
        get: function () {
            throw new Error('Not implemented.');
        },
        enumerable: false,
        configurable: true
    });
    return WindowRef;
}());

/* Define class that implements the abstract class and returns the native window object. */
var BrowserWindowRef = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BrowserWindowRef, _super);
    function BrowserWindowRef() {
        return _super.call(this) || this;
    }
    Object.defineProperty(BrowserWindowRef.prototype, "nativeWindow", {
        get: function () {
            return window;
        },
        enumerable: false,
        configurable: true
    });
    BrowserWindowRef.ɵfac = function BrowserWindowRef_Factory(t) { return new (t || BrowserWindowRef)(); };
    BrowserWindowRef.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: BrowserWindowRef, factory: BrowserWindowRef.ɵfac });
    return BrowserWindowRef;
}(WindowRef));

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](BrowserWindowRef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return []; }, null); })();
/* Create an factory function that returns the native window object. */
function windowFactory(browserWindowRef, platformId) {
    if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(platformId)) {
        return browserWindowRef.nativeWindow;
    }
    return new Object();
}
/* Create a injectable provider for the WindowRef token that uses the BrowserWindowRef class. */
var browserWindowProvider = {
    provide: WindowRef,
    useClass: BrowserWindowRef
};
/* Create an injectable provider that uses the windowFactory function for returning the native window object. */
var windowProvider = {
    provide: WINDOW,
    useFactory: windowFactory,
    deps: [WindowRef, _angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"]]
};
/* Create an array of providers. */
var WINDOW_PROVIDERS = [
    browserWindowProvider,
    windowProvider
];


/***/ }),

/***/ "jGGy":
/*!*********************************************!*\
  !*** ./src/app/shared/auth/auth.service.ts ***!
  \*********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var app_shared_auth_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/auth/account.service */ "/AoX");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./session.service */ "52Ve");
/* harmony import */ var _app_config_app_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app-config/app-config */ "lx5/");














var SEND_OTP_URL = '/security/sendOtp';
var HAS_ACTIVE_OTP_URL = '/security/hasActiveOtp';
var LOGIN_URL = '/security/login';
var LOGOUT_URL = '/security/logout';
var VALIDATE_OTP_URL = '/security/validateOtp';
var CHANGE_EXPIRED_PASS_URL = '/security/changeExpiredPass';
var AuthService = /** @class */ (function () {
    function AuthService(http, router, accountService, sessionService, appConfig) {
        this.http = http;
        this.router = router;
        this.accountService = accountService;
        this.sessionService = sessionService;
        this.appConfig = appConfig;
    }
    /**
     * validates username and password and gets back pre auth token
     */
    AuthService.prototype.login = function (login) {
        var _this = this;
        return this.http
            .post(this.appConfig.formatPath(LOGIN_URL), login)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return _this.sessionService.preAuthSuccess(response); }));
    };
    AuthService.prototype.sendOtp = function () {
        return this.http
            .post(this.appConfig.formatPath(SEND_OTP_URL), null, { observe: 'response' });
    };
    AuthService.prototype.hasActiveOtp = function () {
        return this.http
            .post(this.appConfig.formatPath(HAS_ACTIVE_OTP_URL), null, { observe: 'response' });
    };
    AuthService.prototype.validateOtp = function (otp, customerType) {
        var _this = this;
        return this.http
            .post(this.appConfig.formatPath(VALIDATE_OTP_URL), { token: otp, customerType: customerType }, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (response) {
            if (response.status === 204) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({ passExpired: true });
            }
            else if (response.status === 200 && response.body) {
                // && this.parseToken(response.body.token)['pe']
                _this.sessionService.authSuccess(response.body);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({ passExpired: false });
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('service.error');
            }
        }));
        // .pipe(map(response => this.authSuccess(response)))
        // .pipe(mergeMap(() => this.accountService.identity(true)));
    };
    AuthService.prototype.changeExpiredPass = function (newPassword) {
        var _this = this;
        return this.http
            .post(this.appConfig.formatPath(CHANGE_EXPIRED_PASS_URL), { newPassword: newPassword }, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return _this.sessionService.authSuccess(response.body); }));
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        var doIt = function () {
            _this.sessionService.clearPreAuthToken();
            _this.sessionService.clearToken();
            _this.accountService.authenticate(null);
            _this.router.navigate(['']);
        };
        this.http
            .post(this.appConfig.formatPath(LOGOUT_URL), null, { observe: 'response' })
            .subscribe(doIt, doIt);
    };
    AuthService.prototype.logoutWithout = function () {
        this.sessionService.clearPreAuthToken();
        this.sessionService.clearToken();
        this.accountService.authenticate(null);
        this.router.navigate(['']);
    };
    AuthService.prototype.parseToken = function (token) {
        if (token) {
            var split = token.split('.');
            if (split.length === 3) {
                return JSON.parse(atob(split[1]));
            }
        }
        return null;
    };
    AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](app_shared_auth_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_app_config_app_config__WEBPACK_IMPORTED_MODULE_7__["AppConfig"])); };
    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac });
    return AuthService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"] }, { type: app_shared_auth_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"] }, { type: _session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"] }, { type: _app_config_app_config__WEBPACK_IMPORTED_MODULE_7__["AppConfig"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");



var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        //Variables
        this.currentDate = new Date();
    }
    FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 6, vars: 4, consts: [[1, "footer"], [1, "copyright", "clearfix", "text-muted", "m-0"], [1, "d-none", "d-sm-inline-block"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, ", All rights reserved.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Copyright \u00A9 ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 1, ctx.currentDate, "yyyy"), " PAYCELL ");
        } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"] });
    return FooterComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "khXv":
/*!*************************************************!*\
  !*** ./src/app/shared/pipes/short-name.pipe.ts ***!
  \*************************************************/
/*! exports provided: ShortNamePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShortNamePipe", function() { return ShortNamePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


var ShortNamePipe = /** @class */ (function () {
    function ShortNamePipe() {
    }
    ShortNamePipe.prototype.transform = function (fullName) {
        return fullName
            .split(' ')
            .map(function (n) { return n[0]; })
            .join('');
    };
    ShortNamePipe.ɵfac = function ShortNamePipe_Factory(t) { return new (t || ShortNamePipe)(); };
    ShortNamePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "shortName", type: ShortNamePipe, pure: true });
    return ShortNamePipe;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShortNamePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'shortName'
            }]
    }], null, null); })();


/***/ }),

/***/ "lVC7":
/*!*****************************************************************!*\
  !*** ./src/app/shared/interceptors/auth-expired.interceptor.ts ***!
  \*****************************************************************/
/*! exports provided: AuthExpiredInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthExpiredInterceptor", function() { return AuthExpiredInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth.service */ "jGGy");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/message.service */ "QLLi");









var AuthExpiredInterceptor = /** @class */ (function () {
    function AuthExpiredInterceptor(authService, router, messageService) {
        this.authService = authService;
        this.router = router;
        this.messageService = messageService;
    }
    AuthExpiredInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(null, function (err) {
            if (err.status === 401 && err.url) {
                if (err.url.includes('security/')) {
                    _this.authService.logoutWithout();
                    return;
                }
                _this.authService.logout();
                _this.messageService.addError('error.unauthorized.message');
            }
            //
            // if (err.status === 401 && err.url && !err.url.includes('security/account')) {
            //   // this.stateStorageService.storeUrl(this.router.routerState.snapshot.url);
            //   this.authService.logout();
            //   this.router.navigate(['']);
            //   // this.loginModalService.open();
            // }
        }));
    };
    AuthExpiredInterceptor.ɵfac = function AuthExpiredInterceptor_Factory(t) { return new (t || AuthExpiredInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"])); };
    AuthExpiredInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthExpiredInterceptor, factory: AuthExpiredInterceptor.ɵfac });
    return AuthExpiredInterceptor;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthExpiredInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _services_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"] }]; }, null); })();


/***/ }),

/***/ "lx5/":
/*!*************************************************!*\
  !*** ./src/app/shared/app-config/app-config.ts ***!
  \*************************************************/
/*! exports provided: AppConfig, initConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConfig", function() { return AppConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initConfig", function() { return initConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");




var ALLOWED_ENDPOINT = '/security/allowed-endpoints';
var AppConfig = /** @class */ (function () {
    function AppConfig(http) {
        this.http = http;
    }
    AppConfig.prototype.load = function () {
        var _this = this;
        return this.http
            .get('/config/api.json')
            .toPromise()
            .then(function (config) {
            _this.apiServerUrl = config.apiServerUrl;
            _this.http.get(_this.apiServerUrl + ALLOWED_ENDPOINT).toPromise()
                .then(function (res) {
                _this.allowedEndpoints = res;
            });
        });
    };
    AppConfig.prototype.formatPath = function (path) {
        return this.apiServerUrl + path;
    };
    AppConfig.prototype.getApiServerUrl = function () {
        return this.apiServerUrl;
    };
    AppConfig.prototype.isApiAllowed = function (path) {
        for (var i = 0; i < this.allowedEndpoints.length; i++) {
            if (path === this.allowedEndpoints[i]) {
                return true;
            }
        }
        return false;
    };
    AppConfig.ɵfac = function AppConfig_Factory(t) { return new (t || AppConfig)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
    AppConfig.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppConfig, factory: AppConfig.ɵfac });
    return AppConfig;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppConfig, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();
function initConfig(config) {
    return function () { return config.load(); };
}


/***/ }),

/***/ "md3d":
/*!******************************************************************!*\
  !*** ./src/app/shared/directives/toggle-fullscreen.directive.ts ***!
  \******************************************************************/
/*! exports provided: ToggleFullscreenDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleFullscreenDirective", function() { return ToggleFullscreenDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! screenfull */ "k7+O");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(screenfull__WEBPACK_IMPORTED_MODULE_1__);



var ToggleFullscreenDirective = /** @class */ (function () {
    function ToggleFullscreenDirective() {
    }
    ToggleFullscreenDirective.prototype.onClick = function () {
        if (screenfull__WEBPACK_IMPORTED_MODULE_1__["isEnabled"]) {
            screenfull__WEBPACK_IMPORTED_MODULE_1__["toggle"]();
        }
    };
    ToggleFullscreenDirective.ɵfac = function ToggleFullscreenDirective_Factory(t) { return new (t || ToggleFullscreenDirective)(); };
    ToggleFullscreenDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ToggleFullscreenDirective, selectors: [["", "appToggleFullscreen", ""]], hostBindings: function ToggleFullscreenDirective_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToggleFullscreenDirective_click_HostBindingHandler() { return ctx.onClick(); });
        } } });
    return ToggleFullscreenDirective;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToggleFullscreenDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appToggleFullscreen]'
            }]
    }], null, { onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click']
        }] }); })();


/***/ }),

/***/ "o1mt":
/*!****************************************************!*\
  !*** ./src/app/shared/my-loader/loader.service.ts ***!
  \****************************************************/
/*! exports provided: LoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return LoaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
//loader.service.ts



var LoaderService = /** @class */ (function () {
    function LoaderService() {
        this.isLoading = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
    }
    LoaderService.ɵfac = function LoaderService_Factory(t) { return new (t || LoaderService)(); };
    LoaderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoaderService, factory: LoaderService.ɵfac, providedIn: 'root' });
    return LoaderService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "puSG":
/*!*****************************************************!*\
  !*** ./src/app/shared/routes/full-layout.routes.ts ***!
  \*****************************************************/
/*! exports provided: Full_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Full_ROUTES", function() { return Full_ROUTES; });
//Route for content layout with sidebar, navbar and footer.
var Full_ROUTES = [
    {
        path: 'pf-home',
        loadChildren: function () { return Promise.all(/*! import() | app-pages-full-pages-pf-home-pf-home-module */[__webpack_require__.e("default~app-pages-full-pages-dcb-collection-dcb-collection-module~app-pages-full-pages-dcb-collectio~be609dfd"), __webpack_require__.e("default~app-pages-full-pages-dcb-collection-dcb-collection-module~app-pages-full-pages-dcb-collectio~c553bbaf"), __webpack_require__.e("app-pages-full-pages-pf-home-pf-home-module")]).then(__webpack_require__.bind(null, /*! app/pages/full-pages/pf-home/pf-home.module */ "tAhX")).then(function (m) { return m.PfHomeModule; }); }
    },
    {
        path: 'dcb-home',
        loadChildren: function () { return Promise.all(/*! import() | app-pages-full-pages-dcb-home-dcb-home-module */[__webpack_require__.e("default~app-pages-full-pages-dcb-collection-dcb-collection-module~app-pages-full-pages-dcb-collectio~be609dfd"), __webpack_require__.e("default~app-pages-full-pages-dcb-collection-dcb-collection-module~app-pages-full-pages-dcb-collectio~c553bbaf"), __webpack_require__.e("common"), __webpack_require__.e("app-pages-full-pages-dcb-home-dcb-home-module")]).then(__webpack_require__.bind(null, /*! app/pages/full-pages/dcb-home/dcb-home.module */ "iKwY")).then(function (m) { return m.DcbHomeModule; }); }
    },
    {
        path: 'user',
        loadChildren: function () { return __webpack_require__.e(/*! import() | app-pages-full-pages-user-user-module */ "app-pages-full-pages-user-user-module").then(__webpack_require__.bind(null, /*! app/pages/full-pages/user/user.module */ "EZTA")).then(function (m) { return m.UserModule; }); }
    },
    {
        path: 'pay-with-link',
        loadChildren: function () { return __webpack_require__.e(/*! import() | app-pages-full-pages-pay-with-link-pay-with-link-module */ "app-pages-full-pages-pay-with-link-pay-with-link-module").then(__webpack_require__.bind(null, /*! app/pages/full-pages/pay-with-link/pay-with-link.module */ "EkZo")).then(function (m) { return m.PayWithLinkModule; }); }
    },
    {
        path: 'i18n',
        loadChildren: function () { return Promise.all(/*! import() | app-pages-full-pages-i18n-i18n-module */[__webpack_require__.e("common"), __webpack_require__.e("app-pages-full-pages-i18n-i18n-module")]).then(__webpack_require__.bind(null, /*! app/pages/full-pages/i18n/i18n.module */ "5vnZ")).then(function (m) { return m.I18nModule; }); }
    },
    {
        path: 'profile',
        loadChildren: function () { return Promise.all(/*! import() | app-pages-full-pages-profile-profile-module */[__webpack_require__.e("common"), __webpack_require__.e("app-pages-full-pages-profile-profile-module")]).then(__webpack_require__.bind(null, /*! app/pages/full-pages/profile/profile.module */ "MheK")).then(function (m) { return m.ProfileModule; }); }
    },
    {
        path: 'deneme',
        loadChildren: function () { return Promise.all(/*! import() | app-pages-full-pages-deneme-deneme-module */[__webpack_require__.e("common"), __webpack_require__.e("app-pages-full-pages-deneme-deneme-module")]).then(__webpack_require__.bind(null, /*! app/pages/full-pages/deneme/deneme.module */ "2e9b")).then(function (m) { return m.DenemeModule; }); }
    },
    {
        path: 'user-create',
        loadChildren: function () { return __webpack_require__.e(/*! import() | app-pages-full-pages-user-create-user-create-module */ "app-pages-full-pages-user-create-user-create-module").then(__webpack_require__.bind(null, /*! app/pages/full-pages/user-create/user-create.module */ "RDDl")).then(function (m) { return m.UserCreateModule; }); }
    },
    {
        path: 'pf-history',
        loadChildren: function () { return Promise.all(/*! import() | app-pages-full-pages-pf-history-pf-history-module */[__webpack_require__.e("default~app-pages-full-pages-dcb-collection-dcb-collection-module~app-pages-full-pages-dcb-collectio~be609dfd"), __webpack_require__.e("default~app-pages-full-pages-dcb-collection-dcb-collection-module~app-pages-full-pages-dcb-collectio~c553bbaf"), __webpack_require__.e("app-pages-full-pages-pf-history-pf-history-module")]).then(__webpack_require__.bind(null, /*! app/pages/full-pages/pf-history/pf-history.module */ "rpbA")).then(function (m) { return m.pfHistoryModule; }); }
    },
    {
        path: 'dcb-transaction',
        loadChildren: function () { return Promise.all(/*! import() | app-pages-full-pages-dcb-transaction-dcb-transaction-module */[__webpack_require__.e("default~app-pages-full-pages-dcb-collection-dcb-collection-module~app-pages-full-pages-dcb-collectio~be609dfd"), __webpack_require__.e("default~app-pages-full-pages-dcb-collection-dcb-collection-module~app-pages-full-pages-dcb-collectio~c553bbaf"), __webpack_require__.e("common"), __webpack_require__.e("app-pages-full-pages-dcb-transaction-dcb-transaction-module")]).then(__webpack_require__.bind(null, /*! app/pages/full-pages/dcb-transaction/dcb-transaction.module */ "wtz1")).then(function (m) { return m.dcbTransactionModule; }); }
    },
    {
        path: 'dcb-transaction-summary',
        loadChildren: function () { return Promise.all(/*! import() | app-pages-full-pages-dcb-transaction-summary-dcb-transaction-summary-module */[__webpack_require__.e("default~app-pages-full-pages-dcb-collection-dcb-collection-module~app-pages-full-pages-dcb-collectio~be609dfd"), __webpack_require__.e("default~app-pages-full-pages-dcb-collection-dcb-collection-module~app-pages-full-pages-dcb-collectio~c553bbaf"), __webpack_require__.e("common"), __webpack_require__.e("app-pages-full-pages-dcb-transaction-summary-dcb-transaction-summary-module")]).then(__webpack_require__.bind(null, /*! app/pages/full-pages/dcb-transaction-summary/dcb-transaction-summary.module */ "l0ya")).then(function (m) { return m.dcbTransactionSummaryModule; }); }
    },
    {
        path: 'dcb-collection',
        loadChildren: function () { return Promise.all(/*! import() | app-pages-full-pages-dcb-collection-dcb-collection-module */[__webpack_require__.e("default~app-pages-full-pages-dcb-collection-dcb-collection-module~app-pages-full-pages-dcb-collectio~be609dfd"), __webpack_require__.e("default~app-pages-full-pages-dcb-collection-dcb-collection-module~app-pages-full-pages-dcb-collectio~c553bbaf"), __webpack_require__.e("common"), __webpack_require__.e("app-pages-full-pages-dcb-collection-dcb-collection-module")]).then(__webpack_require__.bind(null, /*! app/pages/full-pages/dcb-collection/dcb-collection.module */ "CcLh")).then(function (m) { return m.dcbCollectionModule; }); }
    },
    {
        path: 'dcb-collection-summary',
        loadChildren: function () { return Promise.all(/*! import() | app-pages-full-pages-dcb-collection-summary-dcb-collection-summary-module */[__webpack_require__.e("default~app-pages-full-pages-dcb-collection-dcb-collection-module~app-pages-full-pages-dcb-collectio~be609dfd"), __webpack_require__.e("default~app-pages-full-pages-dcb-collection-dcb-collection-module~app-pages-full-pages-dcb-collectio~c553bbaf"), __webpack_require__.e("common"), __webpack_require__.e("app-pages-full-pages-dcb-collection-summary-dcb-collection-summary-module")]).then(__webpack_require__.bind(null, /*! app/pages/full-pages/dcb-collection-summary/dcb-collection-summary.module */ "d0UV")).then(function (m) { return m.dcbCollectionSummaryModule; }); }
    }
];


/***/ }),

/***/ "qB01":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/my-loader/my-loader.component.ts ***!
  \********************************************************************/
/*! exports provided: MyLoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyLoaderComponent", function() { return MyLoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _my_loader_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../my-loader/loader.service */ "o1mt");




var MyLoaderComponent = /** @class */ (function () {
    function MyLoaderComponent(loaderService) {
        var _this = this;
        this.loaderService = loaderService;
        this.loaderService.isLoading.subscribe(function (v) {
            //          console.log(v);
            _this.loading = v;
        });
    }
    MyLoaderComponent.prototype.ngOnInit = function () {
    };
    MyLoaderComponent.ɵfac = function MyLoaderComponent_Factory(t) { return new (t || MyLoaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_my_loader_loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"])); };
    MyLoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MyLoaderComponent, selectors: [["app-my-loader"]], decls: 4, vars: 1, consts: [[1, "progress-loader", 3, "hidden"], [1, "loading-spinner"], ["src", "../../../../assets/img/oval.svg", 1, "loading-icon"], [1, "loading-message"]], template: function MyLoaderComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.loading);
        } }, styles: [".loading-spinner[_ngcontent-%COMP%] {\n  background-color: #0000001f;\n  position: fixed;\n  width: 100%;\n  top: 0px;\n  left: 0px;\n  height: 100vh;\n  align-items: center;\n  justify-content: center;\n  display: grid;\n  z-index: 99;\n}\n\n.loading-spinner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  align-self: end;\n}\n\n.loading-message[_ngcontent-%COMP%] {\n  text-align: center;\n  align-self: start;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL215LWxvYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNDLFdBQUE7QUFDTDs7QUFFQTtFQUNJLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QUFDSiIsImZpbGUiOiJteS1sb2FkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGluZy1zcGlubmVyeyAgICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAxZjtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgICB6LWluZGV4OiA5OTtcclxufVxyXG5cclxuLmxvYWRpbmctc3Bpbm5lciBpbWd7XHJcbiAgICBhbGlnbi1zZWxmOiBlbmQ7XHJcbn1cclxuXHJcbi5sb2FkaW5nLW1lc3NhZ2V7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1zZWxmOiBzdGFydDtcclxufSJdfQ== */"] });
    return MyLoaderComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyLoaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-my-loader',
                templateUrl: './my-loader.component.html',
                styleUrls: ['./my-loader.component.scss']
            }]
    }], function () { return [{ type: _my_loader_loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"] }]; }, null); })();


/***/ }),

/***/ "qDh4":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/lang-selector/lang-selector.component.ts ***!
  \****************************************************************************/
/*! exports provided: LangSelectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LangSelectorComponent", function() { return LangSelectorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/app.constants */ "dkQB");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");







function LangSelectorComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LangSelectorComponent_ng_container_6_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); var language_r1 = ctx.$implicit; var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.changeLanguage(language_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var language_r1 = ctx.$implicit;
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.languagesMeta[language_r1].flagImagePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.languagesMeta[language_r1].text);
} }
var LangSelectorComponent = /** @class */ (function () {
    function LangSelectorComponent(translate) {
        this.translate = translate;
        this.languages = app_app_constants__WEBPACK_IMPORTED_MODULE_2__["LANGUAGES"];
        this.languagesMeta = app_app_constants__WEBPACK_IMPORTED_MODULE_2__["LANGUAGE_META"];
        this.selectedLanguage = { "text": "", "flagImagePath": "" };
    }
    LangSelectorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.changeSelectedLanguage(this.getLang());
        this.langChangeSubscription = this.translate.onLangChange.subscribe(function (newLang) {
            _this.changeSelectedLanguage((newLang === null || newLang === void 0 ? void 0 : newLang.lang.toLowerCase()) || _this.getLang());
        });
    };
    LangSelectorComponent.prototype.getLang = function () {
        return (this.translate.currentLang || this.translate.defaultLang || app_app_constants__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_LOCALE"]).toLowerCase();
    };
    LangSelectorComponent.prototype.changeLanguage = function (language) {
        this.translate.use(language);
    };
    LangSelectorComponent.prototype.changeSelectedLanguage = function (language) {
        this.selectedLanguage = app_app_constants__WEBPACK_IMPORTED_MODULE_2__["LANGUAGE_META"][language];
    };
    LangSelectorComponent.prototype.ngOnDestroy = function () {
        this.langChangeSubscription.unsubscribe();
    };
    LangSelectorComponent.ɵfac = function LangSelectorComponent_Factory(t) { return new (t || LangSelectorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"])); };
    LangSelectorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LangSelectorComponent, selectors: [["app-lang-selector"]], decls: 7, vars: 3, consts: [["display", "dynamic", "ngbDropdown", "", 1, "i18n-dropdown", "dropdown"], ["href", "javascript:;", "data-toggle", "dropdown", "ngbDropdownToggle", "", 1, "nav-link", "d-flex", "align-items-center", "dropdown-toggle", "dropdown-language", "p-0"], ["width", "30", "alt", "flag", 1, "langimg", "selected-flag", "mr-1", 3, "src"], [1, "selected-language", "d-md-flex", "d-none"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdown-flag", 1, "dropdown-menu", "dropdown-menu-right", "text-left"], [4, "ngFor", "ngForOf"], ["href", "javascript:;", 1, "dropdown-item", 3, "click"], ["width", "30", "alt", "flag", 1, "langimg", "mr-2", 3, "src"], [1, "font-small-3"]], template: function LangSelectorComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LangSelectorComponent_ng_container_6_Template, 5, 2, "ng-container", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.selectedLanguage == null ? null : ctx.selectedLanguage.flagImagePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.selectedLanguage == null ? null : ctx.selectedLanguage.text);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.languages);
        } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownMenu"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYW5nLXNlbGVjdG9yLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return LangSelectorComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LangSelectorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-lang-selector",
                templateUrl: "./lang-selector.component.html",
                styleUrls: ["./lang-selector.component.scss"]
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "rPpP":
/*!****************************************************************!*\
  !*** ./src/app/shared/my-loader/loader-interceptor.service.ts ***!
  \****************************************************************/
/*! exports provided: LoaderInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderInterceptor", function() { return LoaderInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loader.service */ "o1mt");






var LoaderInterceptor = /** @class */ (function () {
    function LoaderInterceptor(loaderService) {
        this.loaderService = loaderService;
        this.requests = [];
    }
    LoaderInterceptor.prototype.removeRequest = function (req) {
        var i = this.requests.indexOf(req);
        if (i >= 0) {
            this.requests.splice(i, 1);
        }
        this.loaderService.isLoading.next(this.requests.length > 0);
    };
    LoaderInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        this.requests.push(req);
        //    console.log("istek sayisi--->" + this.requests.length);
        this.loaderService.isLoading.next(true);
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            var subscription = next.handle(req)
                .subscribe(function (event) {
                if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                    _this.removeRequest(req);
                    observer.next(event);
                }
            }, function (err) {
                //            alert('error' + err);
                _this.removeRequest(req);
                observer.error(err);
            }, function () {
                _this.removeRequest(req);
                observer.complete();
            });
            return function () {
                _this.removeRequest(req);
                subscription.unsubscribe();
            };
        });
    };
    LoaderInterceptor.ɵfac = function LoaderInterceptor_Factory(t) { return new (t || LoaderInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"])); };
    LoaderInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoaderInterceptor, factory: LoaderInterceptor.ɵfac });
    return LoaderInterceptor;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"] }]; }, null); })();


/***/ }),

/***/ "rmxa":
/*!***************************************************!*\
  !*** ./src/app/shared/services/layout.service.ts ***!
  \***************************************************/
/*! exports provided: LayoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutService", function() { return LayoutService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



var LayoutService = /** @class */ (function () {
    function LayoutService() {
        this.toggleSidebar = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"](); // small screen
        this.overlaySidebarToggle = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        // Observable
        this.toggleSidebar$ = this.toggleSidebar.asObservable();
        this.overlaySidebarToggle$ = this.overlaySidebarToggle.asObservable();
    }
    LayoutService.prototype.toggleSidebarSmallScreen = function (toggle) {
        this.toggleSidebar.next(toggle);
    };
    LayoutService.prototype.overlaySidebartoggle = function (toggle) {
        this.overlaySidebarToggle.next(toggle);
    };
    LayoutService.ɵfac = function LayoutService_Factory(t) { return new (t || LayoutService)(); };
    LayoutService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LayoutService, factory: LayoutService.ɵfac, providedIn: 'root' });
    return LayoutService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "spY6":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/alert/alert-error.component.ts ***!
  \******************************************************************/
/*! exports provided: AlertErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertErrorComponent", function() { return AlertErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");






function AlertErrorComponent_ngb_alert_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-alert", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r0.alert.type)("dismissible", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.alert.message);
} }
var AlertErrorComponent = /** @class */ (function () {
    function AlertErrorComponent(translateService) {
        this.translateService = translateService;
        this.alert = null;
    }
    Object.defineProperty(AlertErrorComponent.prototype, "error", {
        set: function (error) {
            this.alert = null;
            if (!error) {
                return;
            }
            var httpErrorResponse = error.httpErrorResponse, defaultMessage = error.defaultMessage;
            if (!httpErrorResponse) {
                if (defaultMessage) {
                    this.addErrorAlert(this.getMessage(defaultMessage, 'Bir hata oluştu.'));
                }
                return;
            }
            switch (httpErrorResponse.status) {
                case 0:
                    this.addErrorAlert(this.getMessage('error.server.not.reachable', 'Bağlantı hatası oluştu.'));
                    break;
                case 400:
                    this.addErrorAlert(this.getMessage('error.bad.request', 'Lütfen alanları tekrar kontrol edin.'));
                    break;
                case 404:
                    this.addErrorAlert(this.getMessage('error.not.found', 'Bağlantı hatası oluştu.'));
                    break;
                default: {
                    var error_1 = httpErrorResponse.error;
                    if (error_1.localizedMessage && error_1.localizedMessage !== '') {
                        this.addErrorAlert(error_1.localizedMessage);
                    }
                    else if (defaultMessage && defaultMessage !== '') {
                        this.addErrorAlert(this.getMessage(defaultMessage, 'Bir hata oluştu.'));
                    }
                    else if (error_1.message && error_1.message !== '') {
                        this.addErrorAlert(this.getMessage(error_1.message, 'Bir hata oluştu.'));
                    }
                    else {
                        this.addErrorAlert(this.getMessage('error.default.message', 'Bir hata oluştu.'));
                    }
                }
            }
        },
        enumerable: false,
        configurable: true
    });
    AlertErrorComponent.prototype.addErrorAlert = function (message) {
        var newAlert = {
            type: 'light-danger',
            message: message,
        };
        this.alert = newAlert;
    };
    AlertErrorComponent.prototype.getMessage = function (messageKey, defaultMessage) {
        if (messageKey) {
            var tempMessage = this.translateService.instant(messageKey);
            if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])() || tempMessage !== messageKey) {
                return tempMessage;
            }
        }
        return defaultMessage;
    };
    AlertErrorComponent.ɵfac = function AlertErrorComponent_Factory(t) { return new (t || AlertErrorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"])); };
    AlertErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlertErrorComponent, selectors: [["app-alert-error"]], inputs: { error: "error" }, decls: 1, vars: 1, consts: [["class", "mb-2", 3, "type", "dismissible", 4, "ngIf"], [1, "mb-2", 3, "type", "dismissible"], [1, "mb-0"]], template: function AlertErrorComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AlertErrorComponent_ngb_alert_0_Template, 3, 3, "ngb-alert", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.alert && ctx.alert.type && ctx.alert.message);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbAlert"]], styles: [".alert-light-danger[_ngcontent-%COMP%] {\n  background-color: #FEEFD0 !important;\n  color: #F55252 !important;\n  border-color: #FEEFD0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FsZXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FBQ0YiLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxlcnQtbGlnaHQtZGFuZ2VyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZFRUZEMCAhaW1wb3J0YW50O1xuICBjb2xvcjogI0Y1NTI1MiAgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiAjRkVFRkQwO1xufVxuIl19 */"] });
    return AlertErrorComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertErrorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-alert-error',
                templateUrl: './alert.component.html',
                styleUrls: ['./alert.component.scss']
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }]; }, { error: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "uHtA":
/*!*************************************************************!*\
  !*** ./src/app/shared/directives/sidebar-link.directive.ts ***!
  \*************************************************************/
/*! exports provided: SidebarLinkDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarLinkDirective", function() { return SidebarLinkDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _sidebar_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar.directive */ "goBR");




var SidebarLinkDirective = /** @class */ (function () {
    function SidebarLinkDirective(sideNav) {
        this.sideNav = sideNav;
    }
    Object.defineProperty(SidebarLinkDirective.prototype, "open", {
        get: function () {
            return this._open;
        },
        set: function (value) {
            this._open = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SidebarLinkDirective.prototype, "sidebarGroupActive", {
        get: function () {
            return this._sidebarGroupActive;
        },
        set: function (value) {
            this._sidebarGroupActive = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SidebarLinkDirective.prototype, "navCollapsedOpen", {
        get: function () {
            return this._navCollapsedOpen;
        },
        set: function (value) {
            this._navCollapsedOpen = value;
        },
        enumerable: false,
        configurable: true
    });
    SidebarLinkDirective.prototype.ngOnInit = function () {
        this.sideNav.addLink(this);
    };
    SidebarLinkDirective.prototype.ngOnDestroy = function () {
    };
    //when side menu (vertical menu) item gets clicked
    SidebarLinkDirective.prototype.toggle = function () {
        this.open = !this.open;
        if (this.open) {
            this.sideNav.closeOtherLinks(this);
        }
        if (!this.open && this.level.toString() === "1" && this.hasSub) {
            this.sidebarGroupActive = false;
        }
    };
    SidebarLinkDirective.ɵfac = function SidebarLinkDirective_Factory(t) { return new (t || SidebarLinkDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_sidebar_directive__WEBPACK_IMPORTED_MODULE_1__["SidebarDirective"])); };
    SidebarLinkDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: SidebarLinkDirective, selectors: [["", "appSidebarlink", ""]], hostVars: 6, hostBindings: function SidebarLinkDirective_HostBindings(rf, ctx) { if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("open", ctx.open)("sidebar-group-active", ctx.sidebarGroupActive)("nav-collapsed-open", ctx.navCollapsedOpen);
        } }, inputs: { parent: "parent", level: "level", hasSub: "hasSub", path: "path", open: "open", sidebarGroupActive: "sidebarGroupActive", navCollapsedOpen: "navCollapsedOpen" } });
    return SidebarLinkDirective;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarLinkDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: "[appSidebarlink]"
            }]
    }], function () { return [{ type: _sidebar_directive__WEBPACK_IMPORTED_MODULE_1__["SidebarDirective"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_sidebar_directive__WEBPACK_IMPORTED_MODULE_1__["SidebarDirective"]]
            }] }]; }, { parent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], level: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], hasSub: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], path: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], open: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.open']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], sidebarGroupActive: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.sidebar-group-active']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], navCollapsedOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.nav-collapsed-open']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _layouts_full_full_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layouts/full/full-layout.component */ "NWlE");
/* harmony import */ var _layouts_content_content_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts/content/content-layout.component */ "AqrB");
/* harmony import */ var _shared_routes_full_layout_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/routes/full-layout.routes */ "puSG");
/* harmony import */ var _shared_routes_content_layout_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/routes/content-layout.routes */ "82/Q");
/* harmony import */ var _shared_auth_authentication_access_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/auth/authentication-access-guard.service */ "DqMI");









var appRoutes = [
    {
        path: '',
        redirectTo: 'pages/login',
        pathMatch: 'full',
    },
    {
        path: '',
        component: _layouts_full_full_layout_component__WEBPACK_IMPORTED_MODULE_2__["FullLayoutComponent"],
        data: { title: 'full Views', auth: 'full' },
        children: _shared_routes_full_layout_routes__WEBPACK_IMPORTED_MODULE_4__["Full_ROUTES"],
        canActivate: [_shared_auth_authentication_access_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationAccessGuard"]]
    },
    {
        path: '',
        component: _layouts_content_content_layout_component__WEBPACK_IMPORTED_MODULE_3__["ContentLayoutComponent"],
        data: { title: 'content Views' },
        children: _shared_routes_content_layout_routes__WEBPACK_IMPORTED_MODULE_5__["CONTENT_ROUTES"],
    },
    {
        path: '**',
        redirectTo: 'pages/error'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"], relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return AppRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"], relativeLinkResolution: 'legacy' })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vihK":
/*!***************************************************!*\
  !*** ./src/app/shared/services/config.service.ts ***!
  \***************************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



var ConfigService = /** @class */ (function () {
    function ConfigService() {
        this.templateConf = this.setConfigValue();
        this.templateConfSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.templateConf);
        this.templateConf$ = this.templateConfSubject.asObservable();
    }
    // Default configurations for Light layout. Please check *customizer.service.ts* for different colors and bg images options
    ConfigService.prototype.setConfigValue = function () {
        return this.templateConf = {
            layout: {
                variant: "Light",
                menuPosition: "Side",
                customizer: {
                    hidden: true
                },
                navbar: {
                    type: 'Static'
                },
                sidebar: {
                    collapsed: false,
                    size: "sidebar-md",
                    backgroundColor: "black",
                    backgroundImage: true,
                    backgroundImageURL: "assets/img/sidebar-bg/07.jpg"
                }
            }
        };
    };
    // Default configurations for Dark layout. Please check *customizer.service.ts* for different colors and bg images options
    // setConfigValue() {
    //   return this.templateConf = {
    //     layout: {
    //       variant: "Dark",
    //       menuPosition: "Side",
    //       customizer: {
    //         hidden: true
    //       },
    //       navbar: {
    //         type: 'Static'
    //       },
    //       sidebar: {
    //         collapsed: false,
    //         size: "sidebar-md",
    //         backgroundColor: "black",
    //         backgroundImage: true,
    //         backgroundImageURL: "assets/img/sidebar-bg/01.jpg"
    //       }
    //     }
    //   };
    // }
    // Default configurations for Transparent layout. Please check *customizer.service.ts* for different colors and bg images options
    // setConfigValue() {
    //   return this.templateConf = {
    //     layout: {
    //       variant: "Transparent",
    //       menuPosition: "Side",
    //       customizer: {
    //         hidden: true
    //       },
    //       navbar: {
    //         type: 'Static'
    //       },
    //       sidebar: {
    //         collapsed: false,
    //         size: "sidebar-md",
    //         backgroundColor: "bg-glass-1",
    //         backgroundImage: true,
    //         backgroundImageURL: ""
    //       }
    //     }
    //   };
    // }
    ConfigService.prototype.applyTemplateConfigChange = function (tempConfig) {
        this.templateConf = Object.assign(this.templateConf, tempConfig);
        this.templateConfSubject.next(this.templateConf);
    };
    ConfigService.ɵfac = function ConfigService_Factory(t) { return new (t || ConfigService)(); };
    ConfigService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ConfigService, factory: ConfigService.ɵfac, providedIn: "root" });
    return ConfigService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfigService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root"
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "yjeL":
/*!***********************************************************!*\
  !*** ./src/app/util/custom-translate-http-loader.util.ts ***!
  \***********************************************************/
/*! exports provided: CustomTranslateHttpLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomTranslateHttpLoader", function() { return CustomTranslateHttpLoader; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! deepmerge */ "PE4B");
/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_app_config_app_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/app-config/app-config */ "lx5/");









var v = new Date();
var CustomTranslateHttpLoader = /** @class */ (function () {
    function CustomTranslateHttpLoader(http, appConfig) {
        this.http = http;
        this.appConfig = appConfig;
        this.resources = [
            { endpointType: 'local', prefix: "./assets/i18n/", suffix: ".json?t=" + v.getTime() },
            { endpointType: 'remote', prefix: '/api/i18n/', suffix: ".json?t=" + v.getTime() },
        ];
    }
    CustomTranslateHttpLoader.prototype.getTranslation = function (lang) {
        var _this = this;
        var requests = this.resources.map(function (resource) {
            var path = resource.prefix + lang.toLocaleLowerCase("en") + resource.suffix;
            if (resource.endpointType === 'remote') {
                path = _this.appConfig.getApiServerUrl() + resource.prefix + lang + resource.suffix;
            }
            return _this.http.get(path).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) { return _this.flattenObject(value); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (res) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({});
            }));
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(requests).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return Object(deepmerge__WEBPACK_IMPORTED_MODULE_4__["all"])(response); }));
    };
    CustomTranslateHttpLoader.prototype.flattenObject = function (ob) {
        var toReturn = {};
        for (var i in ob) {
            if (!ob.hasOwnProperty(i))
                continue;
            if ((typeof ob[i]) == 'object' && ob[i] !== null) {
                var flatObject = this.flattenObject(ob[i]);
                for (var x in flatObject) {
                    if (!flatObject.hasOwnProperty(x))
                        continue;
                    toReturn[i + '.' + x] = flatObject[x];
                }
            }
            else {
                toReturn[i] = ob[i];
            }
        }
        return toReturn;
    };
    CustomTranslateHttpLoader.ɵfac = function CustomTranslateHttpLoader_Factory(t) { return new (t || CustomTranslateHttpLoader)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_shared_app_config_app_config__WEBPACK_IMPORTED_MODULE_5__["AppConfig"])); };
    CustomTranslateHttpLoader.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CustomTranslateHttpLoader, factory: CustomTranslateHttpLoader.ɵfac });
    return CustomTranslateHttpLoader;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CustomTranslateHttpLoader, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }, { type: _shared_app_config_app_config__WEBPACK_IMPORTED_MODULE_5__["AppConfig"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ "zvRJ":
/*!***********************************************************!*\
  !*** ./src/app/shared/customizer/customizer.component.ts ***!
  \***********************************************************/
/*! exports provided: CustomizerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomizerComponent", function() { return CustomizerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/config.service */ "vihK");
/* harmony import */ var _services_customizer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/customizer.service */ "hFtW");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "aLe/");








var _c0 = ["customizer"];
var _c1 = function (a0) { return { "selected": a0 }; };
function CustomizerComponent_div_68_Template(rf, ctx) { if (rf & 1) {
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_div_68_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); var color_r7 = ctx.$implicit; var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.customizerService.changeSidebarBGColor(color_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var color_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", color_r7.class, " d-block rounded");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, color_r7.active));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-bg-color", color_r7.code);
} }
function CustomizerComponent_div_70_Template(rf, ctx) { if (rf & 1) {
    var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_div_70_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); var color_r10 = ctx.$implicit; var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.customizerService.changeSidebarBGColor(color_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var color_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", color_r10.class, " d-block rounded");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, color_r10.active));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-bg-color", color_r10.code);
} }
function CustomizerComponent_div_77_Template(rf, ctx) { if (rf & 1) {
    var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_div_77_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); var color_r13 = ctx.$implicit; var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.customizerService.changeSidebarTransparentBGColor(color_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var color_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("rounded ", color_r13.class, " ct-glass-bg");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, color_r13.active));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-bg-image", color_r13.class);
} }
function CustomizerComponent_div_85_Template(rf, ctx) { if (rf & 1) {
    var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_div_85_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); var img_r16 = ctx.$implicit; var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.customizerService.changeSidebarBgImage(img_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var img_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", img_r16.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, img_r16.active));
} }
function CustomizerComponent_div_93_Template(rf, ctx) { if (rf & 1) {
    var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_div_93_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); var color_r19 = ctx.$implicit; var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.customizerService.changeSidebarTransparentBGColor(color_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var color_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", color_r19.class, " d-block rounded  ct-color-bg");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, color_r19.active));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-bg-color", color_r19.class);
} }
var _c2 = function (a0) { return { "active": a0 }; };
function CustomizerComponent_div_114_Template(rf, ctx) { if (rf & 1) {
    var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sidebar Width");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CustomizerComponent_div_114_Template_input_change_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.changeSidebarWidth("sidebar-sm"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CustomizerComponent_div_114_Template_input_change_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.changeSidebarWidth("sidebar-md"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Medium");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CustomizerComponent_div_114_Template_input_change_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.changeSidebarWidth("sidebar-lg"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Large");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c2, ctx_r6.size === "sidebar-sm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r6.size === "sidebar-sm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c2, ctx_r6.size === "sidebar-md"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r6.size === "sidebar-md");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c2, ctx_r6.size === "sidebar-lg"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r6.size === "sidebar-lg");
} }
var _c3 = function (a0) { return { open: a0 }; };
var CustomizerComponent = /** @class */ (function () {
    function CustomizerComponent(renderer, configService, customizerService) {
        this.renderer = renderer;
        this.configService = configService;
        this.customizerService = customizerService;
        this.isBgImageDisplay = true;
        this.isOpen = true;
        this.config = {};
        this.directionEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.config = this.configService.templateConf;
        this.isOpen = !this.config.layout.customizer.hidden;
        if (this.config.layout.sidebar.size) {
            this.size = this.config.layout.sidebar.size;
        }
    }
    CustomizerComponent.prototype.ngOnInit = function () {
    };
    CustomizerComponent.prototype.changeSidebarWidth = function (value) {
        this.size = value;
        this.customizerService.changeSidebarWidth(value);
    };
    CustomizerComponent.prototype.toggleCustomizer = function () {
        if (this.isOpen) {
            this.renderer.removeClass(this.customizer.nativeElement, "open");
            this.isOpen = false;
        }
        else {
            this.renderer.addClass(this.customizer.nativeElement, "open");
            this.isOpen = true;
        }
    };
    CustomizerComponent.prototype.closeCustomizer = function () {
        this.renderer.removeClass(this.customizer.nativeElement, "open");
        this.isOpen = false;
    };
    CustomizerComponent.prototype.bgImageDisplay = function (e) {
        if (e.target.checked) {
            this.isBgImageDisplay = true;
        }
        else {
            this.isBgImageDisplay = false;
        }
        //emit event to FUll Layout
        this.customizerService.bgImageDisplay(e);
    };
    CustomizerComponent.prototype.ngOnDestroy = function () {
        if (this.layoutSub) {
            this.layoutSub.unsubscribe();
        }
    };
    CustomizerComponent.ɵfac = function CustomizerComponent_Factory(t) { return new (t || CustomizerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_customizer_service__WEBPACK_IMPORTED_MODULE_2__["CustomizerService"])); };
    CustomizerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomizerComponent, selectors: [["app-customizer"]], viewQuery: function CustomizerComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.customizer = _t.first);
        } }, outputs: { directionEvent: "directionEvent" }, decls: 115, vars: 17, consts: [[1, "customizer", "d-none", "d-lg-none", "d-xl-block", 3, "ngClass"], ["customizer", ""], [1, "customizer-close", 3, "click"], [1, "ft-x", "font-medium-3"], ["id", "customizer-toggle-icon", 1, "customizer-toggle", "bg-primary", 3, "click"], [1, "ft-settings", "font-medium-1", "spinner", "white", "align-middle"], ["data-ps-id", "df6a5ce4-a175-9172-4402-dabd98fc9c0a", 1, "customizer-content", "p-3", "ps-container", "ps-theme-dark", 3, "perfectScrollbar"], [1, "text-uppercase"], [1, "ct-layout"], [1, "mb-3", "d-flex", "align-items-center"], [1, "ft-layout", "font-medium-2", "mr-2"], [1, "layout-switch"], [1, "radio", "radio-sm", "d-inline-block", "light-layout", "mr-3"], ["id", "ll-switch", "type", "radio", "name", "layout-switch", 3, "checked", "click"], ["for", "ll-switch"], [1, "radio", "radio-sm", "d-inline-block", "dark-layout", "mr-3"], ["id", "dl-switch", "type", "radio", "name", "layout-switch", 3, "checked", "click"], ["for", "dl-switch"], [1, "radio", "radio-sm", "d-inline-block", "transparent-layout"], ["id", "tl-switch", "type", "radio", "name", "layout-switch", 3, "checked", "click"], ["for", "tl-switch"], [1, "ct-menu-type"], [1, "ft-credit-card", "font-medium-2", "mr-2"], [1, "menu-switch"], [1, "radio", "radio-sm", "d-inline-block", "menu-side", "mr-3"], ["id", "menu-side", "type", "radio", "name", "menu-switch", 3, "checked", "click"], ["for", "menu-side"], [1, "radio", "radio-sm", "d-inline-block", "menu-top"], ["id", "menu-top", "type", "radio", "name", "menu-switch", 3, "checked", "click"], ["for", "menu-top"], [1, "ct-navbar-type"], [1, "ft-more-horizontal", "font-medium-2", "mr-2"], [1, "navbar-switch"], [1, "radio", "radio-sm", "d-inline-block", "nav-static", "mr-3"], ["id", "nav-static", "type", "radio", "name", "navbar-switch", 3, "checked", "click"], ["for", "nav-static"], [1, "radio", "radio-sm", "d-inline-block", "nav-fixed"], ["id", "nav-fixed", "type", "radio", "name", "navbar-switch", 3, "checked", "click"], ["for", "nav-fixed"], [1, "ct-bg-color"], [1, "sb-options", "d-flex", "align-items-center", "mb-3"], [1, "ft-droplet", "font-medium-2", "mr-2"], [1, "cz-bg-color", "sb-color-options"], [1, "row", "mb-3"], ["class", "col px-2", 4, "ngFor", "ngForOf"], [1, "row"], [1, "tl-bg-img"], [1, "d-flex", "align-items-center", "mb-3"], [1, "ft-star", "font-medium-2", "mr-2"], [1, "cz-tl-bg-image", "row"], ["class", "col-sm-3", 4, "ngFor", "ngForOf"], [1, "ct-bg-image"], [1, "sb-bg-img", "d-flex", "align-items-center", "mb-3"], [1, "ft-sidebar", "font-medium-2", "mr-2"], [1, "cz-bg-image", "row", "sb-bg-img"], ["class", "col-2 px-2", 4, "ngFor", "ngForOf"], [1, "tl-color-option"], [1, "tl-color-options", "d-flex", "align-items-center", "mb-3"], [1, "cz-tl-bg-color"], ["class", "col", 4, "ngFor", "ngForOf"], [1, "ct-bg-image-toggler"], [1, "togglebutton", "toggle-sb-bg-img"], [1, "float-right"], [1, "checkbox"], ["id", "sidebar-bg-img", "type", "checkbox", "checked", "", 1, "cz-bg-image-display", 3, "change"], ["for", "sidebar-bg-img"], [1, "ct-compact-toggler"], [1, "togglebutton"], ["id", "cz-compact-menu", "type", "checkbox", 1, "cz-compact-menu", 3, "checked", "change"], ["for", "cz-compact-menu"], ["class", "ct-sidebar-size", 4, "ngIf"], [1, "col", "px-2"], [2, "width", "30px", "height", "30px", 3, "ngClass", "click"], [1, "col-sm-3"], [3, "ngClass", "click"], [1, "col-2", "px-2"], ["alt", "sidebar bg image", "width", "90", 1, "rounded", 3, "src", "ngClass", "click"], [1, "col"], [1, "ct-sidebar-size"], ["id", "cz-sidebar-width", "data-toggle", "buttons", 1, "cz-sidebar-width", "btn-group", "btn-group-toggle"], [1, "btn", "btn-outline-primary", 3, "ngClass"], ["id", "cz-btn-radio-1", "type", "radio", "name", "cz-btn-radio", "value", "sidebar-sm", 3, "checked", "change"], ["id", "cz-btn-radio-2", "type", "radio", "name", "cz-btn-radio", "value", "sidebar-md", 3, "checked", "change"], ["id", "cz-btn-radio-3", "type", "radio", "name", "cz-btn-radio", "value", "sidebar-lg", 3, "checked", "change"]], template: function CustomizerComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_Template_a_click_2_listener() { return ctx.closeCustomizer(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_Template_a_click_4_listener() { return ctx.toggleCustomizer(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Theme Customizer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Customize & Preview in Real Time");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h6", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Layout Options");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_Template_input_click_19_listener() { return ctx.customizerService.switchLayout("light", ctx.isBgImageDisplay); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Light");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_Template_input_click_23_listener() { return ctx.customizerService.switchLayout("dark", ctx.isBgImageDisplay); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Dark");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_Template_input_click_27_listener() { return ctx.customizerService.switchLayout("transparent", ctx.isBgImageDisplay); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Transparent");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h6", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Navigation Options");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "input", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_Template_input_click_38_listener() { return ctx.customizerService.toggleMenuPosition("Side"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Vertical");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "input", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_Template_input_click_42_listener() { return ctx.customizerService.toggleMenuPosition("Top"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Horizontal");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h6", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Navbar Type");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "input", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_Template_input_click_53_listener() { return ctx.customizerService.toggleNavbarType("Static"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "label", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Static");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "input", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_Template_input_click_57_listener() { return ctx.customizerService.toggleNavbarType("Fixed"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "label", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Fixed");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h6", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "i", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Sidebar Color Options");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, CustomizerComponent_div_68_Template, 2, 7, "div", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, CustomizerComponent_div_70_Template, 2, 7, "div", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h6", 47);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "i", 48);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Background Colors with Shades");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 49);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](77, CustomizerComponent_div_77_Template, 2, 7, "div", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "h6", 52);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "i", 53);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Sidebar Bg Image");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 54);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](85, CustomizerComponent_div_85_Template, 2, 4, "div", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 56);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "h6", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "i", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Background Colors");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 58);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](93, CustomizerComponent_div_93_Template, 2, 7, "div", 59);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 60);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 61);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Sidebar Bg Image");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 62);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 63);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "input", 64);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CustomizerComponent_Template_input_change_102_listener($event) { return ctx.bgImageDisplay($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "label", 65);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 66);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 67);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Compact Menu");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 62);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 63);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "input", 68);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CustomizerComponent_Template_input_change_112_listener($event) { return ctx.customizerService.toggleCompactMenu($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "label", 69);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](114, CustomizerComponent_div_114_Template, 17, 12, "div", 70);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c3, ctx.isOpen));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.config.layout.variant === "Light");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.config.layout.variant === "Dark");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.config.layout.variant === "Transparent");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.config.layout.menuPosition === "Side");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.config.layout.menuPosition === "Top");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.config.layout.navbar.type === "Static");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.config.layout.navbar.type === "Fixed");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.customizerService.lightDarkLayoutGradientBGColors);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.customizerService.lightDarkLayoutSolidBGColors);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.customizerService.transparentLayoutBGColorsWithShades);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.customizerService.lightDarkLayoutBGImages);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.customizerService.transparentLayoutBGColors);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.config.layout.sidebar.collapsed);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.config.layout.sidebar.collapsed);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXN0b21pemVyLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return CustomizerComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomizerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-customizer",
                templateUrl: "./customizer.component.html",
                styleUrls: ["./customizer.component.scss"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _services_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"] }, { type: _services_customizer_service__WEBPACK_IMPORTED_MODULE_2__["CustomizerService"] }]; }, { customizer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["customizer"]
        }], directionEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map