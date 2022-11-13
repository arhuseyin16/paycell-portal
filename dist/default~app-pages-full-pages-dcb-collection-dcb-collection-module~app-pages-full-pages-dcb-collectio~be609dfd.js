(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-pages-full-pages-dcb-collection-dcb-collection-module~app-pages-full-pages-dcb-collectio~be609dfd"],{

/***/ "YPNs":
/*!*************************************************!*\
  !*** ./src/app/util/return-localizedMessage.ts ***!
  \*************************************************/
/*! exports provided: ReturnLocalizedMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnLocalizedMessage", function() { return ReturnLocalizedMessage; });
var ReturnLocalizedMessage = function (err) {
    var staticMessage = 'Bilinmeyen Bir Hata.';
    if (err.error.localizedMessage) {
        var splitErrorMessage = err.error.localizedMessage.split('[');
        return splitErrorMessage[0];
    }
    else {
        return staticMessage;
    }
};


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


/***/ }),

/***/ "sfWK":
/*!**********************************************!*\
  !*** ./src/app/services/merchant.service.ts ***!
  \**********************************************/
/*! exports provided: MerchantService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MerchantService", function() { return MerchantService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _shared_app_config_app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/app-config/app-config */ "lx5/");






var allMerchantsURL = '/api/merchant/all';
var childURL = '/api/merchant/child';
var userMerchantsURL = '/api/merchant/user';
var merchantFilterURL = '/api/merchant/filter';
var merchantUserUrl = '/api/merchant/user/permissions';
/*
*/
var MerchantService = /** @class */ (function () {
    function MerchantService(http, appConfig) {
        this.http = http;
        this.appConfig = appConfig;
    }
    MerchantService.prototype.masterMerchantList = function () {
        return this.http.get(this.appConfig.formatPath(allMerchantsURL), { observe: 'response' });
    };
    MerchantService.prototype.childMerchantList = function (merchantId) {
        return this.http.post(this.appConfig.formatPath(childURL), { merchantId: merchantId }, { observe: 'response' });
    };
    MerchantService.prototype.allUser = function () {
        return this.http.get(this.appConfig.formatPath(userMerchantsURL));
    };
    MerchantService.prototype.userMerchantList = function () {
        return this.http.get(this.appConfig.formatPath(userMerchantsURL), { observe: 'response' });
    };
    MerchantService.prototype.merchantFilter = function () {
        return this.http.get(this.appConfig.formatPath(merchantFilterURL), { observe: 'response' });
    };
    MerchantService.prototype.getMerchantPermissionList = function (model) {
        return this.http.post(this.appConfig.formatPath(merchantUserUrl), model);
    };
    MerchantService.ɵfac = function MerchantService_Factory(t) { return new (t || MerchantService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_app_config_app_config__WEBPACK_IMPORTED_MODULE_2__["AppConfig"])); };
    MerchantService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MerchantService, factory: MerchantService.ɵfac, providedIn: 'root' });
    return MerchantService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MerchantService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _shared_app_config_app_config__WEBPACK_IMPORTED_MODULE_2__["AppConfig"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=default~app-pages-full-pages-dcb-collection-dcb-collection-module~app-pages-full-pages-dcb-collectio~be609dfd.js.map