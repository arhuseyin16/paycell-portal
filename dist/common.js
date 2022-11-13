(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "VSxV":
/*!**********************************************!*\
  !*** ./src/app/services/password.service.ts ***!
  \**********************************************/
/*! exports provided: PasswordService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordService", function() { return PasswordService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _shared_app_config_app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/app-config/app-config */ "lx5/");






var sendCodeURL = '/api/password/reset/sendCode';
var verifyCodeURL = '/api/password/verifyCode';
var updateByResetURL = '/api/password/reset/update';
var updateURL = '/api/password/update';
var PasswordService = /** @class */ (function () {
    function PasswordService(http, appConfig) {
        this.http = http;
        this.appConfig = appConfig;
    }
    PasswordService.prototype.sendCode = function (email) {
        return this.http.post(this.appConfig.formatPath(sendCodeURL), { email: email }, { observe: 'response' });
    };
    PasswordService.prototype.verifyCode = function (code) {
        return this.http.post(this.appConfig.formatPath(verifyCodeURL), { code: code }, { observe: 'response' });
    };
    PasswordService.prototype.updateByReset = function (code, newPassword) {
        return this.http.post(this.appConfig.formatPath(updateByResetURL), { code: code, newPassword: newPassword }, { observe: 'response' });
    };
    PasswordService.prototype.update = function (oldPassword, newPassword) {
        return this.http.post(this.appConfig.formatPath(updateURL), { oldPassword: oldPassword, newPassword: newPassword }, { observe: 'response' });
    };
    PasswordService.ɵfac = function PasswordService_Factory(t) { return new (t || PasswordService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_app_config_app_config__WEBPACK_IMPORTED_MODULE_2__["AppConfig"])); };
    PasswordService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PasswordService, factory: PasswordService.ɵfac, providedIn: 'root' });
    return PasswordService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PasswordService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _shared_app_config_app_config__WEBPACK_IMPORTED_MODULE_2__["AppConfig"] }]; }, null); })();


/***/ }),

/***/ "YYtp":
/*!**************************************************!*\
  !*** ./src/app/services/i18n-mapping.service.ts ***!
  \**************************************************/
/*! exports provided: I18nMappingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I18nMappingService", function() { return I18nMappingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _shared_app_config_app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/app-config/app-config */ "lx5/");


// import { createRequestOption } from 'app/shared/util/request-util';




var requestURL = '/api/i18n';
var updateURL = '/api/i18n';
var I18nMappingService = /** @class */ (function () {
    function I18nMappingService(http, appConfig) {
        this.http = http;
        this.appConfig = appConfig;
    }
    I18nMappingService.prototype.query = function (req) {
        // const params: HttpParams = createRequestOption(req);
        var params = {};
        return this.http.get(this.appConfig.formatPath(requestURL), {
            params: params,
            observe: 'response'
        });
    };
    I18nMappingService.prototype.getFile = function (req) {
        var params = {};
        var v = new Date();
        return this.http.get(requestURL + '/' + req + '.json?t=' + v.getTime(), {
            params: params,
            observe: 'response'
        });
    };
    I18nMappingService.prototype.update = function (i18nList) {
        return this.http.post(this.appConfig.formatPath(updateURL), i18nList, { observe: 'response' });
    };
    I18nMappingService.ɵfac = function I18nMappingService_Factory(t) { return new (t || I18nMappingService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_app_config_app_config__WEBPACK_IMPORTED_MODULE_2__["AppConfig"])); };
    I18nMappingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: I18nMappingService, factory: I18nMappingService.ɵfac, providedIn: 'root' });
    return I18nMappingService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](I18nMappingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _shared_app_config_app_config__WEBPACK_IMPORTED_MODULE_2__["AppConfig"] }]; }, null); })();


/***/ }),

/***/ "aPai":
/*!****************************************************!*\
  !*** ./src/app/shared/services/browser.service.ts ***!
  \****************************************************/
/*! exports provided: BrowserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserService", function() { return BrowserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



var BrowserService = /** @class */ (function () {
    function BrowserService() {
        this.browserName = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]("");
        this.browserName.next(this.getBrowserName());
    }
    BrowserService.prototype.getBrowserName = function () {
        var agent = window.navigator.userAgent.toLowerCase();
        switch (true) {
            case agent.indexOf('edg') > -1:
                return 'edge';
            case agent.indexOf('edge') > -1:
                return 'edge';
            case agent.indexOf('opr') > -1 && !!window.opr:
                return 'opera';
            case agent.indexOf('chrome') > -1 && !!window.chrome:
                return 'chrome';
            case agent.indexOf('trident') > -1:
                return 'ie';
            case agent.indexOf('firefox') > -1:
                return 'firefox';
            case agent.indexOf('safari') > -1:
                return 'safari';
            default:
                return 'other';
        }
    };
    BrowserService.ɵfac = function BrowserService_Factory(t) { return new (t || BrowserService)(); };
    BrowserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BrowserService, factory: BrowserService.ɵfac, providedIn: 'root' });
    return BrowserService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BrowserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "jcn9":
/*!***********************************************!*\
  !*** ./src/app/models/request/merchant.id.ts ***!
  \***********************************************/
/*! exports provided: MerchantId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MerchantId", function() { return MerchantId; });
var MerchantId = /** @class */ (function () {
    function MerchantId(merchantId) {
        this.merchantId = merchantId;
    }
    return MerchantId;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map