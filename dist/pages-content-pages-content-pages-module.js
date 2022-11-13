(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-content-pages-content-pages-module"],{

/***/ "/f++":
/*!********************************************!*\
  !*** ./src/app/models/auth/login.model.ts ***!
  \********************************************/
/*! exports provided: Login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
var Login = /** @class */ (function () {
    function Login(username, password) {
        this.username = username;
        this.password = password;
    }
    return Login;
}());



/***/ }),

/***/ "8UYO":
/*!*********************************************************************!*\
  !*** ./src/app/pages/content-pages/content-pages-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: ContentPagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentPagesRoutingModule", function() { return ContentPagesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _error_error_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error/error-page.component */ "jdPf");
/* harmony import */ var _login_login_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login-page.component */ "mHHt");
/* harmony import */ var _otp_otp_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./otp/otp-page.component */ "l/Ug");
/* harmony import */ var _reset_password_reset_password_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reset-password/reset-password-page.component */ "8dp2");
/* harmony import */ var _change_password_change_password_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./change-password/change-password-page.component */ "Y18K");
/* harmony import */ var _terminus_terminus_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./terminus/terminus-page.component */ "z4N2");
/* harmony import */ var _orca_inline_user_orca_inline_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./orca-inline-user/orca-inline-user.component */ "hEro");
/* harmony import */ var _mail_confirmation_mail_confirmation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mail-confirmation/mail-confirmation.component */ "qW2M");
/* harmony import */ var _merchant_merchant_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./merchant/merchant.component */ "vGqI");













var routes = [
    {
        path: '',
        children: [
            {
                path: 'error',
                component: _error_error_page_component__WEBPACK_IMPORTED_MODULE_2__["ErrorPageComponent"],
                data: {
                    title: 'Error Page'
                }
            },
            {
                path: 'login',
                component: _login_login_page_component__WEBPACK_IMPORTED_MODULE_3__["LoginPageComponent"],
                data: {
                    title: 'Login Page'
                }
            },
            {
                path: 'otp',
                component: _otp_otp_page_component__WEBPACK_IMPORTED_MODULE_4__["OtpPageComponent"],
                data: {
                    title: 'Otp Page'
                }
            },
            {
                path: 'merchant',
                component: _merchant_merchant_component__WEBPACK_IMPORTED_MODULE_10__["MerchantComponent"],
                data: {
                    title: 'Merchant Page'
                }
            },
            {
                path: 'reset-password',
                component: _reset_password_reset_password_page_component__WEBPACK_IMPORTED_MODULE_5__["ResetPasswordPageComponent"],
                data: {
                    title: 'Reset Password Page'
                }
            },
            {
                path: 'reset-change-password',
                component: _change_password_change_password_page_component__WEBPACK_IMPORTED_MODULE_6__["ChangePasswordPageComponent"],
                data: {
                    title: 'Reset Password Page',
                    type: 'reset'
                }
            },
            {
                path: 'change-expired-password',
                component: _change_password_change_password_page_component__WEBPACK_IMPORTED_MODULE_6__["ChangePasswordPageComponent"],
                data: {
                    title: 'Change Expired Password Page',
                    type: 'expired'
                }
            },
            {
                path: 'terminus',
                component: _terminus_terminus_page_component__WEBPACK_IMPORTED_MODULE_7__["TerminusPageComponent"],
                data: {
                    title: 'Terminus Page',
                }
            },
            {
                path: 'orca-inline-user',
                component: _orca_inline_user_orca_inline_user_component__WEBPACK_IMPORTED_MODULE_8__["OrcaInlineUserComponent"],
                data: {
                    title: 'Orca Inline User Page',
                }
            },
            {
                path: 'email-activation',
                component: _mail_confirmation_mail_confirmation_component__WEBPACK_IMPORTED_MODULE_9__["MailConfirmationComponent"],
                data: {
                    title: 'User Mail Confirmation'
                }
            }
        ]
    }
];
var ContentPagesRoutingModule = /** @class */ (function () {
    function ContentPagesRoutingModule() {
    }
    ContentPagesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ContentPagesRoutingModule });
    ContentPagesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ContentPagesRoutingModule_Factory(t) { return new (t || ContentPagesRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return ContentPagesRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ContentPagesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentPagesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "8dp2":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/content-pages/reset-password/reset-password-page.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ResetPasswordPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordPageComponent", function() { return ResetPasswordPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "7g+E");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var _services_password_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/password.service */ "VSxV");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/message.service */ "QLLi");
/* harmony import */ var _shared_components_lang_selector_lang_selector_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/lang-selector/lang-selector.component */ "qDh4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "iInd");















function ResetPasswordPageComponent_p_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "reset-password.welcome.message"));
} }
function ResetPasswordPageComponent_form_17_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "reset-password.error.required"), "");
} }
function ResetPasswordPageComponent_form_17_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "reset-password.error.email"), "");
} }
var _c0 = function (a0, a1) { return { "is-invalid": a0, "is-valid": a1 }; };
function ResetPasswordPageComponent_form_17_Template(rf, ctx) { if (rf & 1) {
    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ResetPasswordPageComponent_form_17_div_4_Template, 4, 3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ResetPasswordPageComponent_form_17_div_5_Template, 4, 3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResetPasswordPageComponent_form_17_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.resetForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 6, "reset-password.placeholder.email"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](10, _c0, ctx_r1.formSubmitted && ctx_r1.lf.email.invalid, ctx_r1.formSubmitted && !ctx_r1.lf.email.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.formSubmitted && (ctx_r1.lf.email.invalid || (ctx_r1.lf.email.errors == null ? null : ctx_r1.lf.email.errors.required)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.formSubmitted && (ctx_r1.lf.email.invalid || (ctx_r1.lf.email.errors == null ? null : ctx_r1.lf.email.errors.email)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 8, "reset-password.button.submit"));
} }
function ResetPasswordPageComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx_r2.alert.message));
} }
function ResetPasswordPageComponent_p_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r3.spinnerText));
} }
var _c1 = function () { return ["/"]; };
var ResetPasswordPageComponent = /** @class */ (function () {
    function ResetPasswordPageComponent(spinner, translate, passwordService, messageService) {
        this.spinner = spinner;
        this.translate = translate;
        this.passwordService = passwordService;
        this.messageService = messageService;
        this.resetForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        });
        this.formSubmitted = false;
        this.initAlert(false, null, null);
    }
    Object.defineProperty(ResetPasswordPageComponent.prototype, "lf", {
        get: function () {
            return this.resetForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    ResetPasswordPageComponent.prototype.onSubmit = function () {
        var _this = this;
        this.initAlert(false, null, null);
        this.formSubmitted = true;
        if (this.resetForm.invalid) {
            return;
        }
        this.showSpinner('reset-password.spinner.loading');
        this.passwordService
            .sendCode(this.resetForm.value.email)
            .subscribe(function (res) {
            _this.resetSpinner();
            _this.initAlert(true, "success", res.body.localizedMessage ? res.body.localizedMessage : "reset-password.message.success");
        }, function (err) {
            _this.messageService.addHttpError({
                httpErrorResponse: err,
                defaultMessage: 'reset-password.message.error'
            });
            _this.resetSpinner();
            _this.initAlert(true, "light-danger", "reset-password.message.error");
        });
    };
    ResetPasswordPageComponent.prototype.showSpinner = function (text) {
        this.spinnerText = text;
        this.spinner.show(undefined, {
            type: 'ball-triangle-path',
            size: 'medium',
            bdColor: 'rgba(0, 0, 0, 0.8)',
            color: '#fff',
            fullScreen: true
        });
    };
    ResetPasswordPageComponent.prototype.resetSpinner = function () {
        this.spinnerText = null;
        this.spinner.hide();
    };
    ResetPasswordPageComponent.prototype.initAlert = function (active, type, message) {
        this.alert = { active: active, type: type, message: message ? message : null };
    };
    ResetPasswordPageComponent.ɵfac = function ResetPasswordPageComponent_Factory(t) { return new (t || ResetPasswordPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_password_service__WEBPACK_IMPORTED_MODULE_4__["PasswordService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"])); };
    ResetPasswordPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResetPasswordPageComponent, selectors: [["app-reset-password-page"]], decls: 26, vars: 12, consts: [["id", "reset-password"], [1, "row", "auth-height", "full-height-vh", "m-0"], [1, "row", "full-width", "justify-content-end", 2, "position", "absolute", "z-index", "9999"], [1, "col-12", "d-flex", "align-items-center", "justify-content-center"], [1, "card", "overflow-hidden"], [1, "card-content"], [1, "card-body", "auth-img"], [1, "row", "m-0"], [1, "col-lg-6", "d-none", "d-lg-flex", "justify-content-center", "align-items-center", "auth-img-bg", "p-3"], ["src", "assets/img/gallery/login.png", "alt", "", "width", "300", "height", "230", 1, "img-fluid"], [1, "col-lg-6", "col-12", "px-4", "py-3"], [1, "mb-2", "card-title"], [4, "ngIf"], [3, "formGroup", 4, "ngIf"], [1, "d-sm-flex", "justify-content-end", "font-small-2"], [3, "routerLink"], ["style", "font-size: 20px; color: white", 4, "ngIf"], [3, "formGroup"], [1, "form-group"], ["type", "text", "formControlName", "email", "required", "", 1, "form-control", 3, "placeholder", "ngClass"], ["class", "help-block mt-1 text-danger", 4, "ngIf"], [1, "d-flex", "justify-content-end", "flex-sm-row", "flex-column"], [1, "btn", "btn-dark", 3, "click"], [1, "help-block", "mt-1", "text-danger"], [1, "ft-alert-circle", "align-middle"], [2, "font-size", "20px", "color", "white"]], template: function ResetPasswordPageComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-lang-selector");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ResetPasswordPageComponent_p_15_Template, 3, 3, "p", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ResetPasswordPageComponent_form_17_Template, 10, 13, "form", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ResetPasswordPageComponent_div_18_Template, 4, 3, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ngx-spinner");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ResetPasswordPageComponent_p_25_Template, 3, 3, "p", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 7, "reset-password.welcome.header"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.alert.type !== "success");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.alert.type !== "success");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.alert.type === "success");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c1));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 9, "reset-password.link.homePage"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.spinnerText);
        } }, directives: [_shared_components_lang_selector_lang_selector_component__WEBPACK_IMPORTED_MODULE_6__["LangSelectorComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"], ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]], styles: [".alert-light-danger[_ngcontent-%COMP%] {\n  background-color: #FEEFD0 !important;\n  color: #F55252 !important;\n  border-color: #FEEFD0;\n}\n\nngb-progressbar[_ngcontent-%COMP%] {\n  margin-top: 5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Jlc2V0LXBhc3N3b3JkLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0YiLCJmaWxlIjoicmVzZXQtcGFzc3dvcmQtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbGVydC1saWdodC1kYW5nZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkVFRkQwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjRjU1MjUyICAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICNGRUVGRDA7XG59XG5cbm5nYi1wcm9ncmVzc2JhciB7XG4gIG1hcmdpbi10b3A6IDVyZW07XG59XG4iXX0= */"] });
    return ResetPasswordPageComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResetPasswordPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-reset-password-page',
                templateUrl: './reset-password-page.component.html',
                styleUrls: ['./reset-password-page.component.scss']
            }]
    }], function () { return [{ type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }, { type: _services_password_service__WEBPACK_IMPORTED_MODULE_4__["PasswordService"] }, { type: _shared_services_message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"] }]; }, null); })();


/***/ }),

/***/ "Y18K":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/content-pages/change-password/change-password-page.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ChangePasswordPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordPageComponent", function() { return ChangePasswordPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var app_shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/auth/auth.service */ "jGGy");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "7g+E");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var _services_password_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/password.service */ "VSxV");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/services/message.service */ "QLLi");
/* harmony import */ var app_shared_services_browser_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/shared/services/browser.service */ "aPai");
/* harmony import */ var _shared_components_lang_selector_lang_selector_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/components/lang-selector/lang-selector.component */ "qDh4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "SVse");




















function ChangePasswordPageComponent_p_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "change-password.welcome.message"));
} }
function ChangePasswordPageComponent_ng_container_17_form_1_span_5_Template(rf, ctx) { if (rf & 1) {
    var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChangePasswordPageComponent_ng_container_17_form_1_span_5_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r10.changePasswordInputType(ctx_r10.PasswordType.newPassword); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r5.newPasswordInputType === "password" ? "fa fa-eye" : "fa fa-eye-slash");
} }
function ChangePasswordPageComponent_ng_container_17_form_1_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "change-password.error.required"), "");
} }
function ChangePasswordPageComponent_ng_container_17_form_1_span_11_Template(rf, ctx) { if (rf & 1) {
    var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChangePasswordPageComponent_ng_container_17_form_1_span_11_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r12.changePasswordInputType(ctx_r12.PasswordType.retypeNewPassword); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r7.retypeNewPasswordInputType === "password" ? "fa fa-eye" : "fa fa-eye-slash");
} }
function ChangePasswordPageComponent_ng_container_17_form_1_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "change-password.error.required"), "");
} }
function ChangePasswordPageComponent_ng_container_17_form_1_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "change-password.error.equal"), "");
} }
var _c0 = function (a0, a1) { return { "is-invalid": a0, "is-valid": a1 }; };
function ChangePasswordPageComponent_ng_container_17_form_1_Template(rf, ctx) { if (rf & 1) {
    var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ChangePasswordPageComponent_ng_container_17_form_1_span_5_Template, 3, 2, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ChangePasswordPageComponent_ng_container_17_form_1_div_6_Template, 4, 3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ChangePasswordPageComponent_ng_container_17_form_1_span_11_Template, 3, 2, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ChangePasswordPageComponent_ng_container_17_form_1_div_12_Template, 4, 3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ChangePasswordPageComponent_ng_container_17_form_1_div_14_Template, 4, 3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChangePasswordPageComponent_ng_container_17_form_1_Template_a_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r4.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r4.newPasswordInputType)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 13, "change-password.placeholder.password"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](19, _c0, ctx_r4.formSubmitted && ctx_r4.lf.newPassword.invalid, ctx_r4.formSubmitted && !ctx_r4.lf.newPassword.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.browserName !== "edge");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.formSubmitted && (ctx_r4.lf.newPassword.errors == null ? null : ctx_r4.lf.newPassword.errors.required));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r4.retypeNewPasswordInputType)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 15, "change-password.placeholder.passwordRetype"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](22, _c0, ctx_r4.formSubmitted && ctx_r4.lf.newPasswordRetype.invalid, ctx_r4.formSubmitted && !ctx_r4.lf.newPasswordRetype.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.browserName !== "edge");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.formSubmitted && (ctx_r4.lf.newPasswordRetype.errors == null ? null : ctx_r4.lf.newPasswordRetype.errors.required));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.formSubmitted && (ctx_r4.lf.newPasswordRetype.errors == null ? null : ctx_r4.lf.newPasswordRetype.errors.equal));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 17, "change-password.button.submit"));
} }
function ChangePasswordPageComponent_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChangePasswordPageComponent_ng_container_17_form_1_Template, 19, 25, "form", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.alert.type !== "success");
} }
function ChangePasswordPageComponent_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx_r2.alert.message));
} }
function ChangePasswordPageComponent_p_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r3.spinnerText));
} }
var _c1 = function () { return ["/"]; };
var ChangePasswordPageComponent = /** @class */ (function () {
    function ChangePasswordPageComponent(router, authService, spinner, translate, passwordService, route, messageService, browserService) {
        var _this = this;
        this.router = router;
        this.authService = authService;
        this.spinner = spinner;
        this.translate = translate;
        this.passwordService = passwordService;
        this.route = route;
        this.messageService = messageService;
        this.browserService = browserService;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            newPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            newPasswordRetype: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        });
        this.formSubmitted = false;
        this.newPasswordInputType = "password";
        this.retypeNewPasswordInputType = "password";
        this.browserName = "";
        this.initAlert(false, null);
        this.route.data.subscribe(function (routeData) {
            if (routeData.type === 'expired') {
                _this.isResetProcess = false;
                _this.form.valueChanges.subscribe(function (asd) { return _this.checkFieldsEquality(asd, _this.form); }, null);
            }
            else if (routeData.type === 'reset') {
                _this.isResetProcess = true;
                _this.form.valueChanges.subscribe(function (asd) { return _this.checkFieldsEquality(asd, _this.form); }, null);
                _this.route.queryParams
                    .subscribe(function (params) {
                    _this.token = params['token'];
                    _this.verifyCode();
                });
            }
            else {
                _this.router.navigate(['']);
            }
        });
        this.PasswordType = Password;
        this.subscribeBrowserName();
    }
    ChangePasswordPageComponent.prototype.subscribeBrowserName = function () {
        var _this = this;
        this.browserService.browserName.subscribe(function (res) {
            _this.browserName = res;
        });
    };
    Object.defineProperty(ChangePasswordPageComponent.prototype, "lf", {
        get: function () {
            return this.form.controls;
        },
        enumerable: false,
        configurable: true
    });
    ChangePasswordPageComponent.prototype.verifyCode = function () {
        var _this = this;
        this.initAlert(false, null);
        this.showSpinner('change-password.spinner.loading');
        this.passwordService.verifyCode(this.token)
            .subscribe(function (response) {
            var _a;
            _this.resetSpinner();
            if (['invalid', 'confirmed', 'expired'].includes((_a = response.body) === null || _a === void 0 ? void 0 : _a.status)) {
                _this.initAlert(true, 'change-password.message.' + response.body.status);
            }
        }, function (err) {
            _this.messageService.addHttpError({
                httpErrorResponse: err,
                defaultMessage: 'change-password.message.error'
            });
            _this.resetSpinner();
            // if (err.status === 404 || err.status === 500)
            _this.initAlert(true, "change-password.message.server-error");
        });
    };
    ChangePasswordPageComponent.prototype.checkFieldsEquality = function (formControls, form) {
        var keys = Object.keys(formControls);
        if (formControls[keys[0]] !== formControls[keys[1]]) {
            this.setControlError(form.controls[keys[0]], true);
            this.setControlError(form.controls[keys[1]], true);
        }
        else {
            this.setControlError(form.controls[keys[0]], null);
            this.setControlError(form.controls[keys[1]], null);
        }
    };
    ChangePasswordPageComponent.prototype.setControlError = function (control, error) {
        if (error) {
            var errors = control.errors ? control.errors : {};
            errors['equal'] = true;
            control.setErrors(errors);
        }
        else if (control.errors) {
            delete control.errors['equal'];
            if (Object.keys(control.errors).length === 0) {
                control.setErrors(null);
            }
        }
    };
    ChangePasswordPageComponent.prototype.onSubmit = function () {
        var _this = this;
        this.initAlert(false, null);
        this.formSubmitted = true;
        if (this.form.invalid) {
            return;
        }
        this.showSpinner('change-password.spinner.changing');
        (this.isResetProcess ?
            this.passwordService.updateByReset(this.token, this.form.value.newPassword) :
            this.authService.changeExpiredPass(this.form.value.newPassword))
            .subscribe(function (res) {
            _this.resetSpinner();
            _this.initAlert(true, "change-password.message.success");
            if (!_this.isResetProcess) {
                _this.router.navigate(['/pages/merchant']);
            }
        }, function (err) {
            _this.messageService.addHttpError({
                httpErrorResponse: err,
                defaultMessage: 'change-password.message.error'
            });
            _this.resetSpinner();
        });
    };
    ChangePasswordPageComponent.prototype.showSpinner = function (text) {
        this.spinnerText = text;
        this.spinner.show(undefined, {
            type: 'ball-triangle-path',
            size: 'medium',
            bdColor: 'rgba(0, 0, 0, 0.8)',
            color: '#fff',
            fullScreen: true
        });
    };
    ChangePasswordPageComponent.prototype.resetSpinner = function () {
        this.spinnerText = null;
        this.spinner.hide();
    };
    ChangePasswordPageComponent.prototype.initAlert = function (active, message) {
        this.alert = { active: active, message: message ? message : null };
    };
    ChangePasswordPageComponent.prototype.changePasswordInputType = function (type) {
        switch (type) {
            case Password.newPassword:
                this.newPasswordInputType === "password" ? this.newPasswordInputType = "text" : this.newPasswordInputType = "password";
                break;
            case Password.retypeNewPassword:
                this.retypeNewPasswordInputType === "password" ? this.retypeNewPasswordInputType = "text" : this.retypeNewPasswordInputType = "password";
                break;
            default:
                break;
        }
    };
    ChangePasswordPageComponent.ɵfac = function ChangePasswordPageComponent_Factory(t) { return new (t || ChangePasswordPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_password_service__WEBPACK_IMPORTED_MODULE_6__["PasswordService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_message_service__WEBPACK_IMPORTED_MODULE_7__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_browser_service__WEBPACK_IMPORTED_MODULE_8__["BrowserService"])); };
    ChangePasswordPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChangePasswordPageComponent, selectors: [["app-change-password-page"]], decls: 26, vars: 12, consts: [["id", "change-password"], [1, "row", "auth-height", "full-height-vh", "m-0"], [1, "row", "full-width", "justify-content-end", 2, "position", "absolute", "z-index", "9999"], [1, "col-12", "d-flex", "align-items-center", "justify-content-center"], [1, "card", "overflow-hidden"], [1, "card-content"], [1, "card-body", "auth-img"], [1, "row", "m-0"], [1, "col-lg-6", "d-none", "d-lg-flex", "justify-content-center", "align-items-center", "auth-img-bg", "p-3"], ["src", "assets/img/gallery/login.png", "alt", "", "width", "300", "height", "230", 1, "img-fluid"], [1, "col-lg-6", "col-12", "px-4", "py-3"], [1, "mb-2", "card-title"], [4, "ngIf"], [1, "d-sm-flex", "justify-content-end", "font-small-2"], [3, "routerLink"], ["style", "font-size: 20px; color: white", 4, "ngIf"], [3, "formGroup", 4, "ngIf"], [3, "formGroup"], [1, "form-group"], [1, "input-group"], ["formControlName", "newPassword", "required", "", 1, "form-control", 3, "type", "placeholder", "ngClass"], ["class", "input-group-append", 4, "ngIf"], ["class", "help-block mt-1 text-danger", 4, "ngIf"], ["formControlName", "newPasswordRetype", 1, "form-control", 3, "type", "placeholder", "ngClass"], [1, "d-flex", "justify-content-end", "flex-sm-row", "flex-column"], [1, "btn", "btn-dark", 3, "click"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-outline-secondary", "border-left-0", "border", 3, "click"], [1, "help-block", "mt-1", "text-danger"], [1, "ft-alert-circle", "align-middle"], [2, "font-size", "20px", "color", "white"]], template: function ChangePasswordPageComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-lang-selector");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ChangePasswordPageComponent_p_15_Template, 3, 3, "p", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ChangePasswordPageComponent_ng_container_17_Template, 2, 1, "ng-container", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ChangePasswordPageComponent_ng_container_18_Template, 4, 3, "ng-container", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ngx-spinner");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ChangePasswordPageComponent_p_25_Template, 3, 3, "p", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 7, "change-password.welcome.header"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.alert.active);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.alert.active);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.alert.active);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c1));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 9, "change-password.link.homePage"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.spinnerText);
        } }, directives: [_shared_components_lang_selector_lang_selector_component__WEBPACK_IMPORTED_MODULE_9__["LangSelectorComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]], styles: [".alert-light-danger[_ngcontent-%COMP%] {\n  background-color: #FEEFD0 !important;\n  color: #F55252 !important;\n  border-color: #FEEFD0;\n}\n\nngb-progressbar[_ngcontent-%COMP%] {\n  margin-top: 5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2NoYW5nZS1wYXNzd29yZC1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGIiwiZmlsZSI6ImNoYW5nZS1wYXNzd29yZC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsZXJ0LWxpZ2h0LWRhbmdlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRUVGRDAgIWltcG9ydGFudDtcbiAgY29sb3I6ICNGNTUyNTIgICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogI0ZFRUZEMDtcbn1cblxubmdiLXByb2dyZXNzYmFyIHtcbiAgbWFyZ2luLXRvcDogNXJlbTtcbn1cbiJdfQ== */"] });
    return ChangePasswordPageComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChangePasswordPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-change-password-page',
                templateUrl: './change-password-page.component.html',
                styleUrls: ['./change-password-page.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: app_shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] }, { type: _services_password_service__WEBPACK_IMPORTED_MODULE_6__["PasswordService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _shared_services_message_service__WEBPACK_IMPORTED_MODULE_7__["MessageService"] }, { type: app_shared_services_browser_service__WEBPACK_IMPORTED_MODULE_8__["BrowserService"] }]; }, null); })();
var Password;
(function (Password) {
    Password[Password["newPassword"] = 0] = "newPassword";
    Password[Password["retypeNewPassword"] = 1] = "retypeNewPassword";
})(Password || (Password = {}));


/***/ }),

/***/ "dRfb":
/*!*********************************************!*\
  !*** ./src/app/util/username.validators.ts ***!
  \*********************************************/
/*! exports provided: usernameValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usernameValidator", function() { return usernameValidator; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "s7LF");

var PHONE_REGEXP = /^[0-9]{10}$/;
function usernameValidator(control) {
    if (control != null && !(control.value == null || control.value.length === 0)) {
        if (!_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email(control)) {
            return null;
        }
        if (PHONE_REGEXP.test(control.value)) {
            return null;
        }
        return { pattern: true };
    }
    return null;
}


/***/ }),

/***/ "hEro":
/*!************************************************************************************!*\
  !*** ./src/app/pages/content-pages/orca-inline-user/orca-inline-user.component.ts ***!
  \************************************************************************************/
/*! exports provided: OrcaInlineUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrcaInlineUserComponent", function() { return OrcaInlineUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "7g+E");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/user.service */ "qfBg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");







function OrcaInlineUserComponent_p_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "y\u00FCkleniyor...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OrcaInlineUserComponent_tr_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 21);
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
var OrcaInlineUserComponent = /** @class */ (function () {
    function OrcaInlineUserComponent(spinner, userService) {
        this.spinner = spinner;
        this.userService = userService;
        this.isLoading = false;
        this.loadUserList(null);
    }
    OrcaInlineUserComponent.prototype.loadUserList = function (event) {
        var _this = this;
        this.isLoading = true;
        this.spinner.show("spinner1");
        this.userService.query({}).subscribe(function (res) { return _this.onSuccess(res.body, res.headers); }, function (res) { return _this.onError(res.body); });
    };
    OrcaInlineUserComponent.prototype.onSuccess = function (data, headers) {
        this.userList = data.content;
        this.isLoading = false;
        this.spinner.hide("spinner1");
    };
    OrcaInlineUserComponent.prototype.onError = function (error) {
        this.isLoading = false;
        this.spinner.hide("spinner1");
    };
    OrcaInlineUserComponent.prototype.ngOnInit = function () {
    };
    OrcaInlineUserComponent.ɵfac = function OrcaInlineUserComponent_Factory(t) { return new (t || OrcaInlineUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"])); };
    OrcaInlineUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OrcaInlineUserComponent, selectors: [["app-orca-inline-user"]], decls: 30, vars: 3, consts: [[1, "row"], [1, "col-12"], [1, "content-header", 2, "margin-left", "9%"], ["id", "extended"], [1, "col-10", 2, "margin-left", "auto", "margin-right", "auto"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "d-flex", "justify-content-end", "flex-sm-row", "flex-column"], [1, "card-content"], [1, "card-body"], [1, "table-responsive"], ["name", "spinner1", "size", "medium", 3, "fullScreen"], ["style", "font-size: 20px; color: white", 4, "ngIf"], [1, "table", "table-striped", "table-striped", "m-0"], [1, "thead-light"], ["scope", "col", "width", "40px"], ["scope", "col"], [4, "ngFor", "ngForOf"], [2, "font-size", "20px", "color", "white"], ["scope", "row"], ["alt", "avatar", "height", "35", "width", "35", 1, "avatar", 3, "src"]], template: function OrcaInlineUserComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Kullan\u0131c\u0131lar");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "h4", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ngx-spinner", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, OrcaInlineUserComponent_p_15_Template, 2, 0, "p", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "table", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "thead", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "th", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Id");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Ad Soyad");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "E-mail");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Msisdn");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tbody");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, OrcaInlineUserComponent_tr_29_Template, 11, 6, "tr", 18);
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullScreen", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.userList);
        } }, directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcmNhLWlubGluZS11c2VyLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return OrcaInlineUserComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrcaInlineUserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-orca-inline-user',
                templateUrl: './orca-inline-user.component.html',
                styleUrls: ['./orca-inline-user.component.scss']
            }]
    }], function () { return [{ type: ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"] }, { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }]; }, null); })();


/***/ }),

/***/ "jdPf":
/*!*******************************************************************!*\
  !*** ./src/app/pages/content-pages/error/error-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: ErrorPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPageComponent", function() { return ErrorPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");



var _c0 = function () { return ["/"]; };
var ErrorPageComponent = /** @class */ (function () {
    function ErrorPageComponent() {
    }
    ErrorPageComponent.ɵfac = function ErrorPageComponent_Factory(t) { return new (t || ErrorPageComponent)(); };
    ErrorPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorPageComponent, selectors: [["app-error-page"]], decls: 14, vars: 2, consts: [["id", "error"], [1, "container-fluid"], [1, "row", "auth-height", "full-height-vh"], [1, "col-12", "d-flex", "align-items-center", "justify-content-center"], [1, "row"], [1, "col-12", "text-center"], ["src", "assets/img/gallery/error.png", "alt", "", "height", "300", "width", "400", 1, "img-fluid", "error-img", "mt-2"], [1, "mt-4"], [1, "w-75", "error-text", "mx-auto", "mt-4"], [1, "btn", "btn-warning", "my-2", 3, "routerLink"]], template: function ErrorPageComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "404 - Page Not Found!");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "The page you are looking for might have beel removed, had it's name changed, or is temporarily unavailable.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Back To Home");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvci1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return ErrorPageComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-error-page',
                templateUrl: './error-page.component.html',
                styleUrls: ['./error-page.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "jsAU":
/*!*************************************************************!*\
  !*** ./src/app/pages/content-pages/content-pages.module.ts ***!
  \*************************************************************/
/*! exports provided: ContentPagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentPagesModule", function() { return ContentPagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "7g+E");
/* harmony import */ var _content_pages_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./content-pages-routing.module */ "8UYO");
/* harmony import */ var _error_error_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./error/error-page.component */ "jdPf");
/* harmony import */ var _login_login_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login-page.component */ "mHHt");
/* harmony import */ var _otp_otp_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./otp/otp-page.component */ "l/Ug");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/shared.module */ "PCNd");
/* harmony import */ var _reset_password_reset_password_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./reset-password/reset-password-page.component */ "8dp2");
/* harmony import */ var _change_password_change_password_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./change-password/change-password-page.component */ "Y18K");
/* harmony import */ var _terminus_terminus_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./terminus/terminus-page.component */ "z4N2");
/* harmony import */ var _orca_inline_user_orca_inline_user_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./orca-inline-user/orca-inline-user.component */ "hEro");
/* harmony import */ var _mail_confirmation_mail_confirmation_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./mail-confirmation/mail-confirmation.component */ "qW2M");
/* harmony import */ var _merchant_merchant_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./merchant/merchant.component */ "vGqI");


















var ContentPagesModule = /** @class */ (function () {
    function ContentPagesModule() {
    }
    ContentPagesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ContentPagesModule });
    ContentPagesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ContentPagesModule_Factory(t) { return new (t || ContentPagesModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _content_pages_routing_module__WEBPACK_IMPORTED_MODULE_5__["ContentPagesRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"]
            ]] });
    return ContentPagesModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ContentPagesModule, { declarations: [_error_error_page_component__WEBPACK_IMPORTED_MODULE_6__["ErrorPageComponent"],
        _login_login_page_component__WEBPACK_IMPORTED_MODULE_7__["LoginPageComponent"],
        _otp_otp_page_component__WEBPACK_IMPORTED_MODULE_8__["OtpPageComponent"],
        _reset_password_reset_password_page_component__WEBPACK_IMPORTED_MODULE_11__["ResetPasswordPageComponent"],
        _change_password_change_password_page_component__WEBPACK_IMPORTED_MODULE_12__["ChangePasswordPageComponent"],
        _terminus_terminus_page_component__WEBPACK_IMPORTED_MODULE_13__["TerminusPageComponent"],
        _orca_inline_user_orca_inline_user_component__WEBPACK_IMPORTED_MODULE_14__["OrcaInlineUserComponent"],
        _mail_confirmation_mail_confirmation_component__WEBPACK_IMPORTED_MODULE_15__["MailConfirmationComponent"],
        _merchant_merchant_component__WEBPACK_IMPORTED_MODULE_16__["MerchantComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _content_pages_routing_module__WEBPACK_IMPORTED_MODULE_5__["ContentPagesRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentPagesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _content_pages_routing_module__WEBPACK_IMPORTED_MODULE_5__["ContentPagesRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                    ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"]
                ],
                exports: [],
                declarations: [
                    _error_error_page_component__WEBPACK_IMPORTED_MODULE_6__["ErrorPageComponent"],
                    _login_login_page_component__WEBPACK_IMPORTED_MODULE_7__["LoginPageComponent"],
                    _otp_otp_page_component__WEBPACK_IMPORTED_MODULE_8__["OtpPageComponent"],
                    _reset_password_reset_password_page_component__WEBPACK_IMPORTED_MODULE_11__["ResetPasswordPageComponent"],
                    _change_password_change_password_page_component__WEBPACK_IMPORTED_MODULE_12__["ChangePasswordPageComponent"],
                    _terminus_terminus_page_component__WEBPACK_IMPORTED_MODULE_13__["TerminusPageComponent"],
                    _orca_inline_user_orca_inline_user_component__WEBPACK_IMPORTED_MODULE_14__["OrcaInlineUserComponent"],
                    _mail_confirmation_mail_confirmation_component__WEBPACK_IMPORTED_MODULE_15__["MailConfirmationComponent"],
                    _merchant_merchant_component__WEBPACK_IMPORTED_MODULE_16__["MerchantComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "l/Ug":
/*!***************************************************************!*\
  !*** ./src/app/pages/content-pages/otp/otp-page.component.ts ***!
  \***************************************************************/
/*! exports provided: OtpPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpPageComponent", function() { return OtpPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var app_shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/auth/auth.service */ "jGGy");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "7g+E");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/services/message.service */ "QLLi");
/* harmony import */ var _shared_auth_session_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/auth/session.service */ "52Ve");
/* harmony import */ var _shared_components_lang_selector_lang_selector_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/components/lang-selector/lang-selector.component */ "qDh4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");





















function OtpPageComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "validate-otp.error.required"), "");
} }
var _c0 = function (a0) { return { size: a0 }; };
function OtpPageComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 1, "validate-otp.error.pattern", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r1.otpLength)), "");
} }
function OtpPageComponent_ng_container_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("(", ctx_r2.nextRequestTimeLeft, " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "validate-otp.button.sendOtpSecs"), ")");
} }
function OtpPageComponent_ng_container_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("(", ctx_r3.expireTimeLeft, " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "validate-otp.button.sendOtpSecs"), ")");
} }
function OtpPageComponent_p_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r4.loadingText));
} }
var _c1 = function (a0, a1) { return { "is-invalid": a0, "is-valid": a1 }; };
var _c2 = function (a0) { return { "disabled": a0 }; };
var _c3 = function () { return ["/"]; };
var OtpPageComponent = /** @class */ (function () {
    function OtpPageComponent(router, http, authService, spinner, translate, route, ref, sessionService, messageService) {
        var _this = this;
        this.router = router;
        this.http = http;
        this.authService = authService;
        this.spinner = spinner;
        this.translate = translate;
        this.route = route;
        this.ref = ref;
        this.sessionService = sessionService;
        this.messageService = messageService;
        this.validateFormSubmitted = false;
        this.isValidationFailed = false;
        this.isSentOtp = false;
        this.isSentOtpFailed = false;
        this.otpLength = 6;
        this.validateForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            otp: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(new RegExp("^[0-9]{" + this.otpLength + "}$"))]),
        });
        this.expireTimeLeft = 0;
        this.expireTotalTimeInSecs = 0;
        this.nextRequestTimeLeft = 0;
        this.nextRequestTotalTimeInSecs = 0;
        this.customerType = '1';
        this.authService
            .hasActiveOtp()
            .subscribe(function (res) {
            var sendOtp = res.body;
            _this.expireTotalTimeInSecs = Math.floor((new Date(sendOtp.expireDate).getTime() - new Date().getTime()) / 1000);
            _this.expireTimeLeft = _this.expireTotalTimeInSecs;
            _this.nextRequestTotalTimeInSecs = Math.floor((new Date(sendOtp.nextAvailableRequestDate).getTime() - new Date().getTime()) / 1000);
            _this.nextRequestTimeLeft = _this.nextRequestTotalTimeInSecs;
            var changed = false;
            _this.interval = setInterval(function () {
                if (_this.expireTimeLeft > 0) {
                    _this.expireTimeLeft--;
                    changed = true;
                }
                if (_this.nextRequestTimeLeft > 0) {
                    _this.nextRequestTimeLeft--;
                    changed = true;
                }
                _this.ref.detectChanges();
                if (!changed) {
                    clearInterval(_this.interval);
                }
            }, 1000);
            _this.isSentOtp = true;
        }, function (err) {
            _this.sendOtp();
        });
    }
    OtpPageComponent.prototype.ngOnInit = function () {
    };
    OtpPageComponent.prototype.ngOnDestroy = function () {
        if (this.interval) {
            clearInterval(this.interval);
        }
    };
    OtpPageComponent.prototype.sendOtp = function () {
        var _this = this;
        this.loadingText = 'validate-otp.message.sendingOtp';
        this.showSpinner();
        this.authService
            .sendOtp()
            .subscribe(function (res) {
            var sendOtp = res.body;
            _this.expireTotalTimeInSecs = Math.floor((new Date(sendOtp.expireDate).getTime() - new Date().getTime()) / 1000);
            _this.expireTimeLeft = _this.expireTotalTimeInSecs;
            _this.nextRequestTotalTimeInSecs = Math.floor((new Date(sendOtp.nextAvailableRequestDate).getTime() - new Date().getTime()) / 1000);
            _this.nextRequestTimeLeft = _this.nextRequestTotalTimeInSecs;
            var changed = false;
            _this.interval = setInterval(function () {
                if (_this.expireTimeLeft > 0) {
                    _this.expireTimeLeft--;
                    changed = true;
                }
                if (_this.nextRequestTimeLeft > 0) {
                    _this.nextRequestTimeLeft--;
                    changed = true;
                }
                _this.ref.detectChanges();
                if (!changed) {
                    clearInterval(_this.interval);
                }
            }, 1000);
            _this.isSentOtp = true;
            _this.spinner.hide();
            _this.loadingText = null;
            //******************************************************************************************************
            //           this.http
            //             .get<string>(API_SERVER_URL + '/security/otpp', {observe: 'response'})
            //             .subscribe((res) => this.validateForm.controls['otp'].setValue(res.body), null);
            //******************************************************************************************************
        }, function (err) {
            _this.messageService.addHttpError({
                httpErrorResponse: err,
                defaultMessage: 'validate-otp.error.message'
            });
            _this.isSentOtpFailed = true;
            _this.spinner.hide();
            _this.loadingText = null;
        });
    };
    Object.defineProperty(OtpPageComponent.prototype, "lf", {
        get: function () {
            return this.validateForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    // On submit button click
    OtpPageComponent.prototype.onSubmit = function () {
        var _this = this;
        this.validateFormSubmitted = true;
        if (this.validateForm.invalid) {
            return;
        }
        this.showSpinner();
        if (this.sessionService.getCustomerType() === '2') {
            this.customerType = '2';
        }
        this.authService
            .validateOtp(this.validateForm.value.otp, this.customerType)
            .subscribe(function (_a) {
            var passExpired = _a.passExpired;
            _this.isValidationFailed = false;
            _this.spinner.hide();
            if (passExpired) {
                _this.router.navigate(['/pages/change-expired-password']);
            }
            else {
                _this.router.navigate(['/pages/merchant']);
            }
        }, function (err) {
            _this.messageService.addHttpError({
                httpErrorResponse: err,
                defaultMessage: 'validate-otp.error.message'
            });
            _this.isValidationFailed = true;
            _this.spinner.hide();
        });
    };
    OtpPageComponent.prototype.showSpinner = function () {
        this.spinner.show(undefined, {
            type: 'ball-triangle-path',
            size: 'medium',
            bdColor: 'rgba(0, 0, 0, 0.8)',
            color: '#fff',
            fullScreen: true
        });
    };
    OtpPageComponent.ɵfac = function OtpPageComponent_Factory(t) { return new (t || OtpPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_auth_session_service__WEBPACK_IMPORTED_MODULE_8__["SessionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_message_service__WEBPACK_IMPORTED_MODULE_7__["MessageService"])); };
    OtpPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OtpPageComponent, selectors: [["app-otp-page"]], decls: 43, vars: 38, consts: [["id", "validate-otp"], [1, "row", "auth-height", "full-height-vh", "m-0"], [1, "row", "full-width", "justify-content-end", 2, "position", "absolute", "z-index", "9999"], [1, "col-12", "d-flex", "align-items-center", "justify-content-center"], [1, "card", "overflow-hidden"], [1, "card-content"], [1, "card-body", "auth-img"], [1, "row", "m-0"], [1, "col-lg-6", "d-none", "d-lg-flex", "justify-content-center", "align-items-center", "auth-img-bg", "p-3"], ["src", "assets/img/gallery/login.png", "alt", "", "width", "300", "height", "230", 1, "img-fluid"], [1, "col-lg-6", "col-12", "px-4", "py-3"], [1, "mb-2", "card-title"], [3, "formGroup"], [1, "form-group"], ["type", "text", "formControlName", "otp", "required", "", 1, "form-control", 3, "placeholder", "ngClass"], ["class", "help-block mt-1 text-danger", 4, "ngIf"], [1, "flex-column", "mb-2"], ["striped", "true", "inputmode", "", "animated", "true", "type", "dark", "height", "10px", 3, "max", "value"], [1, "d-flex", "justify-content-between", "flex-sm-row", "flex-column"], [1, "btn", "btn-dark", 3, "ngClass", "click"], [4, "ngIf"], [1, "d-sm-flex", "justify-content-end", "font-small-2"], [3, "routerLink"], ["style", "font-size: 20px; color: white", 4, "ngIf"], [1, "help-block", "mt-1", "text-danger"], [1, "ft-alert-circle", "align-middle"], [2, "font-size", "20px", "color", "white"]], template: function OtpPageComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-lang-selector");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "form", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, OtpPageComponent_div_23_Template, 4, 3, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, OtpPageComponent_div_24_Template, 4, 6, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "ngb-progressbar", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OtpPageComponent_Template_a_click_28_listener() { return ctx.sendOtp(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, OtpPageComponent_ng_container_31_Template, 3, 4, "ng-container", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OtpPageComponent_Template_a_click_32_listener() { return ctx.onSubmit(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, OtpPageComponent_ng_container_35_Template, 3, 4, "ng-container", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](40, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "ngx-spinner");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, OtpPageComponent_p_42_Template, 3, 3, "p", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 18, "validate-otp.welcome.header"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 20, "validate-otp.welcome.message"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.validateForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 22, "validate-otp.placeholder.otp"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](30, _c1, ctx.validateFormSubmitted && ctx.lf.otp.invalid, ctx.validateFormSubmitted && !ctx.lf.otp.invalid));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.validateFormSubmitted && (ctx.lf.otp.invalid || (ctx.lf.otp.errors == null ? null : ctx.lf.otp.errors.required)));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.validateFormSubmitted && (ctx.lf.otp.invalid || (ctx.lf.otp.errors == null ? null : ctx.lf.otp.errors.pattern)));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", ctx.expireTotalTimeInSecs)("value", ctx.expireTimeLeft);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](33, _c2, ctx.nextRequestTimeLeft > 0));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](30, 24, "validate-otp.button.sendOtp"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nextRequestTimeLeft > 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](35, _c2, ctx.expireTimeLeft <= 0));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 26, "validate-otp.button.submit"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.expireTimeLeft > 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](37, _c3));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](40, 28, "validate-otp.link.homePage"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loadingText);
        } }, directives: [_shared_components_lang_selector_lang_selector_component__WEBPACK_IMPORTED_MODULE_9__["LangSelectorComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbProgressbar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]], styles: [".alert-light-danger[_ngcontent-%COMP%] {\n  background-color: #FEEFD0 !important;\n  color: #F55252 !important;\n  border-color: #FEEFD0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL290cC1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FBQ0YiLCJmaWxlIjoib3RwLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxlcnQtbGlnaHQtZGFuZ2VyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZFRUZEMCAhaW1wb3J0YW50O1xuICBjb2xvcjogI0Y1NTI1MiAgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiAjRkVFRkQwO1xufVxuIl19 */"] });
    return OtpPageComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OtpPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-otp-page',
                templateUrl: './otp-page.component.html',
                styleUrls: ['./otp-page.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }, { type: app_shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _shared_auth_session_service__WEBPACK_IMPORTED_MODULE_8__["SessionService"] }, { type: _shared_services_message_service__WEBPACK_IMPORTED_MODULE_7__["MessageService"] }]; }, null); })();


/***/ }),

/***/ "mHHt":
/*!*******************************************************************!*\
  !*** ./src/app/pages/content-pages/login/login-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var app_shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/auth/auth.service */ "jGGy");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "7g+E");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var _models_auth_login_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../models/auth/login.model */ "/f++");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _shared_auth_session_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/auth/session.service */ "52Ve");
/* harmony import */ var _util_username_validators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../util/username.validators */ "dRfb");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/services/message.service */ "QLLi");
/* harmony import */ var _shared_app_config_app_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/app-config/app-config */ "lx5/");
/* harmony import */ var app_shared_services_browser_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/shared/services/browser.service */ "aPai");
/* harmony import */ var _shared_components_lang_selector_lang_selector_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/components/lang-selector/lang-selector.component */ "qDh4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "SVse");



























function LoginPageComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "login.error.required"), "");
} }
function LoginPageComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "login.error.pattern"), "");
} }
function LoginPageComponent_span_29_Template(rf, ctx) { if (rf & 1) {
    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginPageComponent_span_29_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.changePasswordInputType(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r2.passwordInputType === "password" ? "fa fa-eye" : "fa fa-eye-slash");
} }
function LoginPageComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "login.error.required"), "");
} }
function LoginPageComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginPageComponent_div_40_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.onDirect(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Direk Giri\u015F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var _c0 = function (a0, a1) { return { "is-invalid": a0, "is-valid": a1 }; };
var _c1 = function () { return ["/pages/reset-password"]; };
var LoginPageComponent = /** @class */ (function () {
    function LoginPageComponent(router, authService, sessionService, spinner, translate, route, http, cdr, messageService, appConfig, browserService) {
        this.router = router;
        this.authService = authService;
        this.sessionService = sessionService;
        this.spinner = spinner;
        this.translate = translate;
        this.route = route;
        this.http = http;
        this.cdr = cdr;
        this.messageService = messageService;
        this.appConfig = appConfig;
        this.browserService = browserService;
        this.loginFormSubmitted = false;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _util_username_validators__WEBPACK_IMPORTED_MODULE_10__["usernameValidator"]]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            rememberMe: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false)
        });
        this.passwordInputType = "password";
        this.isPasswordAutoCompleted = true;
        this.browserName = "";
        this.sessionService.clearToken();
        this.sessionService.clearPreAuthToken();
        localStorage.removeItem('type');
        localStorage.removeItem('merchantName');
        localStorage.removeItem('merchantLength');
        localStorage.removeItem('account');
        this.subscribeBrowserName();
    }
    LoginPageComponent.prototype.subscribeBrowserName = function () {
        var _this = this;
        this.browserService.browserName.subscribe(function (res) {
            _this.browserName = res;
        });
    };
    Object.defineProperty(LoginPageComponent.prototype, "lf", {
        get: function () {
            return this.loginForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    LoginPageComponent.prototype.onSubmit = function () {
        var _this = this;
        this.messageService.remove();
        this.loginFormSubmitted = true;
        if (this.loginForm.invalid) {
            return;
        }
        this.showSpinner();
        this.authService
            .login(new _models_auth_login_model__WEBPACK_IMPORTED_MODULE_6__["Login"](this.loginForm.value.username, this.loginForm.value.password))
            .subscribe(function (res) {
            _this.spinner.hide();
            _this.router.navigate(['/pages/otp']);
        }, function (err) {
            _this.messageService.addHttpError({
                httpErrorResponse: err,
                defaultMessage: 'login.error.message'
            });
            if (err.error.status === 403) {
                _this.lf.password.setValue(null);
            }
            _this.spinner.hide();
        });
    };
    LoginPageComponent.prototype.isDevMode = function () {
        return Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])();
    };
    LoginPageComponent.prototype.onDirect = function () {
        var _this = this;
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])();
        {
            this.messageService.remove();
            this.loginFormSubmitted = true;
            if (this.loginForm.invalid) {
                return;
            }
            this.showSpinner();
            return this.http
                .post(this.appConfig.getApiServerUrl() + '/security/loginn', {
                username: this.loginForm.value.username,
                password: this.loginForm.value.password
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (response) { return _this.sessionService.authSuccess(response); }))
                .subscribe(function (res) {
                _this.spinner.hide();
                _this.router.navigate(['/pages/terminus']);
            }, function (err) {
                _this.messageService.addHttpError({
                    httpErrorResponse: err,
                    defaultMessage: 'login.error.message'
                });
                _this.sessionService.clearToken();
                _this.spinner.hide();
            });
        }
    };
    LoginPageComponent.prototype.changePasswordInputType = function () {
        if (this.passwordInputType === "password")
            this.passwordInputType = "text";
        else
            this.passwordInputType = "password";
    };
    LoginPageComponent.prototype.setPasswordVisible = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.isPasswordAutoCompleted && !_this.lf.password.value) {
                _this.isPasswordAutoCompleted = false;
            }
        });
    };
    LoginPageComponent.prototype.onPasswordFocus = function () {
        this.setPasswordVisible();
    };
    LoginPageComponent.prototype.onPasswordBlur = function () {
        this.setPasswordVisible();
    };
    LoginPageComponent.prototype.onPasswordChange = function (e) {
        if (!e)
            this.setPasswordVisible();
    };
    LoginPageComponent.prototype.showSpinner = function () {
        this.spinner.show(undefined, {
            type: 'ball-triangle-path',
            size: 'medium',
            bdColor: 'rgba(0, 0, 0, 0.8)',
            color: '#fff',
            fullScreen: true
        });
    };
    LoginPageComponent.ɵfac = function LoginPageComponent_Factory(t) { return new (t || LoginPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_auth_session_service__WEBPACK_IMPORTED_MODULE_9__["SessionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_message_service__WEBPACK_IMPORTED_MODULE_11__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_app_config_app_config__WEBPACK_IMPORTED_MODULE_12__["AppConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_browser_service__WEBPACK_IMPORTED_MODULE_13__["BrowserService"])); };
    LoginPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginPageComponent, selectors: [["app-login-page"]], decls: 43, vars: 35, consts: [["id", "login"], [1, "row", "auth-height", "full-height-vh", "m-0"], [1, "row", "full-width", "justify-content-end", 2, "position", "absolute", "z-index", "9999"], [1, "col-12", "d-flex", "align-items-center", "justify-content-center"], [1, "card", "overflow-hidden"], [1, "card-content"], [1, "card-body", "auth-img"], [1, "row", "m-0"], [1, "col-lg-6", "d-none", "d-lg-flex", "justify-content-center", "align-items-center", "auth-img-bg", "p-3"], ["src", "assets/img/gallery/login.png", "alt", "", "width", "300", "height", "230", 1, "img-fluid"], [1, "col-lg-6", "col-12", "px-4", "py-3"], [1, "mb-2", "card-title"], [3, "formGroup"], [1, "form-group"], ["type", "text", "formControlName", "username", "required", "", 1, "form-control", 3, "placeholder", "ngClass"], ["class", "help-block mt-1 text-danger", 4, "ngIf"], [1, "input-group"], ["formControlName", "password", "required", "", 1, "form-control", 3, "type", "placeholder", "ngClass", "focus", "blur", "ngModelChange"], ["class", "input-group-append", 4, "ngIf"], [1, "d-sm-flex", "justify-content-end", "mb-3", "font-small-2"], [3, "routerLink"], [1, "d-flex", "justify-content-end", "flex-sm-row", "flex-column"], [1, "btn", "btn-dark", 3, "click"], ["class", "d-flex justify-content-end flex-sm-row flex-column", 4, "ngIf"], [1, "d-flex", "justify-content-end", "align-items-center"], [1, "help-block", "mt-1", "text-danger"], [1, "ft-alert-circle", "align-middle"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-outline-secondary", "border-left-0", "border", 3, "click"]], template: function LoginPageComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-lang-selector");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "form", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, LoginPageComponent_div_23_Template, 4, 3, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, LoginPageComponent_div_24_Template, 4, 3, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function LoginPageComponent_Template_input_focus_27_listener() { return ctx.onPasswordFocus(); })("blur", function LoginPageComponent_Template_input_blur_27_listener() { return ctx.onPasswordBlur(); })("ngModelChange", function LoginPageComponent_Template_input_ngModelChange_27_listener($event) { return ctx.onPasswordChange($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, LoginPageComponent_span_29_Template, 3, 2, "span", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, LoginPageComponent_div_30_Template, 4, 3, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginPageComponent_Template_a_click_36_listener() { return ctx.onSubmit(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, LoginPageComponent_div_40_Template, 3, 0, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "ngx-spinner");
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 16, "login.welcome.header"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 18, "login.welcome.message"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 20, "login.placeholder.username"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](28, _c0, ctx.loginFormSubmitted && ctx.lf.username.invalid, ctx.loginFormSubmitted && !ctx.lf.username.invalid));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginFormSubmitted && (ctx.lf.username.invalid || (ctx.lf.username.errors == null ? null : ctx.lf.username.errors.required)));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginFormSubmitted && (ctx.lf.username.invalid || (ctx.lf.username.errors == null ? null : ctx.lf.username.errors.pattern)));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.passwordInputType)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 22, "login.placeholder.password"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](31, _c0, ctx.loginFormSubmitted && ctx.lf.password.invalid, ctx.loginFormSubmitted && !ctx.lf.password.invalid));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isPasswordAutoCompleted && ctx.browserName !== "edge");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginFormSubmitted && (ctx.lf.password.invalid || (ctx.lf.password.errors == null ? null : ctx.lf.password.errors.required)));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](34, _c1));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 24, "login.link.forgotPassword"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](38, 26, "login.button.submit"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isDevMode());
        } }, directives: [_shared_components_lang_selector_lang_selector_component__WEBPACK_IMPORTED_MODULE_14__["LangSelectorComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]], styles: [".alert-light-danger[_ngcontent-%COMP%] {\n  background-color: #FEEFD0 !important;\n  color: #F55252 !important;\n  border-color: #FEEFD0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xvZ2luLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUFDRiIsImZpbGUiOiJsb2dpbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsZXJ0LWxpZ2h0LWRhbmdlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRUVGRDAgIWltcG9ydGFudDtcbiAgY29sb3I6ICNGNTUyNTIgICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogI0ZFRUZEMDtcbn1cbiJdfQ== */"] });
    return LoginPageComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login-page',
                templateUrl: './login-page.component.html',
                styleUrls: ['./login-page.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: app_shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _shared_auth_session_service__WEBPACK_IMPORTED_MODULE_9__["SessionService"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _shared_services_message_service__WEBPACK_IMPORTED_MODULE_11__["MessageService"] }, { type: _shared_app_config_app_config__WEBPACK_IMPORTED_MODULE_12__["AppConfig"] }, { type: app_shared_services_browser_service__WEBPACK_IMPORTED_MODULE_13__["BrowserService"] }]; }, null); })();


/***/ }),

/***/ "qW2M":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/content-pages/mail-confirmation/mail-confirmation.component.ts ***!
  \**************************************************************************************/
/*! exports provided: MailConfirmationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailConfirmationComponent", function() { return MailConfirmationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "7g+E");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/user.service */ "qfBg");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/message.service */ "QLLi");
/* harmony import */ var _util_return_localizedMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../util/return-localizedMessage */ "YPNs");
/* harmony import */ var _shared_components_lang_selector_lang_selector_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/lang-selector/lang-selector.component */ "qDh4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");














function MailConfirmationComponent_p_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "mail-confirmation.message.valid"));
} }
function MailConfirmationComponent_p_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "mail-confirmation.message.invalid1"));
} }
function MailConfirmationComponent_p_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "mail-confirmation.message.invalid2"));
} }
function MailConfirmationComponent_p_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r3.errorMessage));
} }
var _c0 = function () { return ["/"]; };
var MailConfirmationComponent = /** @class */ (function () {
    function MailConfirmationComponent(activatedRoute, spinner, userService, service, messageService) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.spinner = spinner;
        this.userService = userService;
        this.service = service;
        this.messageService = messageService;
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.code = params['token'];
        });
    }
    MailConfirmationComponent.prototype.ngOnInit = function () {
        this.mailConfirmation();
    };
    MailConfirmationComponent.prototype.mailConfirmation = function () {
        var _this = this;
        if (this.code) {
            this.userService.mailValidation(this.code).subscribe(function (res) {
                _this.messageStatus = res.status;
                _this.service.detectChanges();
            }, function (err) {
                _this.messageStatus = null;
                _this.service.detectChanges();
                if (err.error.localizedMessage) {
                    _this.errorMessage = Object(_util_return_localizedMessage__WEBPACK_IMPORTED_MODULE_5__["ReturnLocalizedMessage"])(err);
                }
                _this.messageService.addHttpError({
                    httpErrorResponse: err,
                    defaultMessage: 'mail-confirmation.message.error'
                });
            });
        }
        else {
            this.messageStatus = null;
            this.service.detectChanges();
            this.errorMessage = 'mail-confirmation.message.notCode';
        }
    };
    MailConfirmationComponent.ɵfac = function MailConfirmationComponent_Factory(t) { return new (t || MailConfirmationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"])); };
    MailConfirmationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MailConfirmationComponent, selectors: [["app-mail-confirmation"]], decls: 24, vars: 12, consts: [["id", "change-password"], [1, "row", "auth-height", "full-height-vh", "m-0"], [1, "row", "full-width", "justify-content-end", 2, "position", "absolute", "z-index", "9999"], [1, "col-12", "d-flex", "align-items-center", "justify-content-center"], [1, "card", "overflow-hidden"], [1, "card-content"], [1, "card-body", "auth-img"], [1, "row", "m-0"], [1, "col-lg-6", "d-none", "d-lg-flex", "justify-content-center", "align-items-center", "auth-img-bg", "p-3"], ["src", "assets/img/gallery/login.png", "alt", "", "width", "300", "height", "230", 1, "img-fluid"], [1, "col-lg-6", "col-12", "px-4", "py-5"], [1, "mb-2", "card-title"], [4, "ngIf"], [1, "d-sm-flex", "justify-content-end", "font-small-2"], [3, "routerLink"]], template: function MailConfirmationComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-lang-selector");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, MailConfirmationComponent_p_15_Template, 3, 3, "p", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, MailConfirmationComponent_p_16_Template, 3, 3, "p", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, MailConfirmationComponent_p_17_Template, 3, 3, "p", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, MailConfirmationComponent_p_18_Template, 3, 3, "p", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 7, "mail-confirmation.welcome.header"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.messageStatus === true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.messageStatus === false);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.messageStatus === false);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.messageStatus === undefined || ctx.messageStatus === null);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 9, "mail-confirmation.link.homePage"));
        } }, directives: [_shared_components_lang_selector_lang_selector_component__WEBPACK_IMPORTED_MODULE_6__["LangSelectorComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWlsLWNvbmZpcm1hdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"] });
    return MailConfirmationComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MailConfirmationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mail-confirmation',
                templateUrl: './mail-confirmation.component.html',
                styleUrls: ['./mail-confirmation.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"] }, { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _shared_services_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"] }]; }, null); })();


/***/ }),

/***/ "vGqI":
/*!********************************************************************!*\
  !*** ./src/app/pages/content-pages/merchant/merchant.component.ts ***!
  \********************************************************************/
/*! exports provided: MerchantComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MerchantComponent", function() { return MerchantComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _services_merchant_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/merchant.service */ "sfWK");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/message.service */ "QLLi");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var _shared_auth_account_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/auth/account.service */ "/AoX");
/* harmony import */ var _util_return_localizedMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../util/return-localizedMessage */ "YPNs");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _shared_components_lang_selector_lang_selector_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/lang-selector/lang-selector.component */ "qDh4");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "s7LF");

















var _c0 = function () { return ["/"]; };
function MerchantComponent_section_0_div_11_Template(rf, ctx) { if (rf & 1) {
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ng-select", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MerchantComponent_section_0_div_11_Template_ng_select_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r3.merchant = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MerchantComponent_section_0_div_11_Template_a_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.submitClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 7, "merchant.welcome.header"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 9, "merchant.select.info"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r1.merchantList == null ? null : ctx_r1.merchantList.userMerchants)("ngModel", ctx_r1.merchant);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 11, "merchant.submit.btn"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 13, "merchant.link.homePage"));
} }
function MerchantComponent_section_0_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.errorMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 3, "merchant.link.homePage"));
} }
function MerchantComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-lang-selector");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MerchantComponent_section_0_div_11_Template, 19, 16, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MerchantComponent_section_0_div_12_Template, 8, 6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.responseSuccess);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.responseError);
} }
var MerchantComponent = /** @class */ (function () {
    function MerchantComponent(router, messageService, translate, accountService, service, merchantService) {
        this.router = router;
        this.messageService = messageService;
        this.translate = translate;
        this.accountService = accountService;
        this.service = service;
        this.merchantService = merchantService;
        this.showMerchant = false;
        this.responseSuccess = false;
        this.responseError = false;
        this.merchantRequest();
    }
    MerchantComponent.prototype.ngOnInit = function () {
    };
    MerchantComponent.prototype.merchantRequest = function () {
        var _this = this;
        localStorage.removeItem('merchantLength');
        this.accountService.getUserAllMerchants().subscribe(function (res) {
            if (res.userMerchants.length === 1) {
                localStorage.setItem('merchantLength', '1');
                _this.merchant = res.userMerchants[0].merchantId;
                _this.merchantList = res;
                _this.submitClick();
            }
            else {
                _this.merchantList = res;
            }
            _this.responseError = false;
            _this.responseSuccess = true;
            _this.showMerchant = true;
            _this.service.detectChanges();
        }, function (err) {
            _this.errorMessage = Object(_util_return_localizedMessage__WEBPACK_IMPORTED_MODULE_6__["ReturnLocalizedMessage"])(err);
            _this.responseSuccess = false;
            _this.responseError = true;
            _this.showMerchant = true;
            _this.service.detectChanges();
        });
    };
    MerchantComponent.prototype.submitClick = function () {
        var _this = this;
        if (this.merchant) {
            var merchant = this.merchantList.userMerchants.find(function (m) { return m.merchantId === _this.merchant; });
            localStorage.setItem('merchantName', JSON.stringify(merchant));
            /*this.router.navigate(['/pages/terminus']).then(() => {
              window.location.reload();
            });*/
            this.router.navigate(['/pages/terminus']);
        }
        else {
            this.messageService.addError(this.translate.instant('merchant.merchant.required'));
        }
    };
    MerchantComponent.ɵfac = function MerchantComponent_Factory(t) { return new (t || MerchantComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_auth_account_service__WEBPACK_IMPORTED_MODULE_5__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_merchant_service__WEBPACK_IMPORTED_MODULE_2__["MerchantService"])); };
    MerchantComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MerchantComponent, selectors: [["app-merchant"]], decls: 1, vars: 1, consts: [["id", "validate-otp", 4, "ngIf"], ["id", "validate-otp"], [1, "row", "auth-height", "full-height-vh", "m-0"], [1, "row", "full-width", "justify-content-end", 2, "position", "absolute", "z-index", "9999"], [1, "col-12", "d-flex", "align-items-center", "justify-content-center"], [1, "card", "overflow-hidden"], [1, "card-content"], [1, "card-body", "auth-img"], [1, "row", "m-0"], [1, "col-lg-4", "d-none", "d-lg-flex", "justify-content-center", "align-items-center", "auth-img-bg", "p-3"], ["src", "assets/img/gallery/login.png", "alt", "", "width", "300", "height", "230", 1, "img-fluid"], ["class", "col-lg-8 col-12 px-4 py-3", 4, "ngIf"], ["class", "col-lg-8 col-12 px-4 py-3 mt-5", 4, "ngIf"], [1, "col-lg-8", "col-12", "px-4", "py-3"], [1, "mb-2", "card-title"], [1, "col", "p-0", "merchant-select"], ["bindLabel", "merchantName", "bindValue", "merchantId", "placeholder", "Firma Ad\u0131", 3, "items", "ngModel", "ngModelChange"], [1, "d-flex", "justify-content-end", "flex-sm-row", "flex-column", "mt-2", "px-2"], [1, "btn", "btn-dark", 3, "click"], [1, "d-sm-flex", "justify-content-end", "font-small-2"], [3, "routerLink"], [1, "col-lg-8", "col-12", "px-4", "py-3", "mt-5"]], template: function MerchantComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MerchantComponent_section_0_Template, 13, 2, "section", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMerchant);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _shared_components_lang_selector_lang_selector_component__WEBPACK_IMPORTED_MODULE_8__["LangSelectorComponent"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__["NgSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]], styles: [".merchant-select .ng-dropdown-panel .ng-dropdown-panel-items {\n  max-height: 100px !important;\n  padding: 0 10px;\n}\n\n  .merchant-select .ng-dropdown-panel .ng-dropdown-panel-items .ng-option {\n  overflow: auto;\n  padding: 8px 0;\n  margin: 0 0;\n}\n\n  .merchant-select .ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-option-label {\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL21lcmNoYW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNEJBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGNBQUE7QUFDRiIsImZpbGUiOiJtZXJjaGFudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAubWVyY2hhbnQtc2VsZWN0IC5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMge1xuICBtYXgtaGVpZ2h0OiAxMDBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG5cbjo6bmctZGVlcCAubWVyY2hhbnQtc2VsZWN0IC5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbiB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBwYWRkaW5nOiA4cHggMDtcbiAgbWFyZ2luOiAwIDA7XG59XG5cbjo6bmctZGVlcCAubWVyY2hhbnQtc2VsZWN0IC5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbiAubmctb3B0aW9uLWxhYmVsIHtcbiAgd2lkdGg6IG1heC1jb250ZW50O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbiJdfQ== */"] });
    return MerchantComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MerchantComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-merchant',
                templateUrl: './merchant.component.html',
                styleUrls: ['./merchant.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _shared_services_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }, { type: _shared_auth_account_service__WEBPACK_IMPORTED_MODULE_5__["AccountService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _services_merchant_service__WEBPACK_IMPORTED_MODULE_2__["MerchantService"] }]; }, null); })();


/***/ }),

/***/ "z4N2":
/*!*************************************************************************!*\
  !*** ./src/app/pages/content-pages/terminus/terminus-page.component.ts ***!
  \*************************************************************************/
/*! exports provided: TerminusPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TerminusPageComponent", function() { return TerminusPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "7g+E");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var _shared_auth_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/auth/account.service */ "/AoX");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _shared_app_config_app_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/app-config/app-config */ "lx5/");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/user.service */ "qfBg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "SVse");















var _c0 = function () { return ["/"]; };
function TerminusPageComponent_div_5_a_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "terminus.button.goHome"));
} }
function TerminusPageComponent_div_5_a_10_Template(rf, ctx) { if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TerminusPageComponent_div_5_a_10_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.fetchData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "terminus.button.retry"));
} }
function TerminusPageComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TerminusPageComponent_div_5_a_9_Template, 3, 5, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TerminusPageComponent_div_5_a_10_Template, 3, 3, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, "terminus.error.title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 6, ctx_r0.errorMessage));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isFailed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isFailed);
} }
function TerminusPageComponent_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r1.spinnerText));
} }
var TerminusPageComponent = /** @class */ (function () {
    function TerminusPageComponent(spinner, router, translate, accountService, appConfig, userService) {
        this.spinner = spinner;
        this.router = router;
        this.translate = translate;
        this.accountService = accountService;
        this.appConfig = appConfig;
        this.userService = userService;
        this.isProcessing = false;
        this.isFailed = false;
    }
    TerminusPageComponent.prototype.ngOnInit = function () {
        this.fetchData();
    };
    TerminusPageComponent.prototype.fetchData = function () {
        var _this = this;
        this.errorMessage = null;
        this.isFailed = false;
        this.isProcessing = true;
        this.showSpinner('terminus.spinner.text');
        this.accountService.identity(true)
            .subscribe(function (account) {
            localStorage.setItem('account', JSON.stringify(account));
            _this.isProcessing = false;
            _this.resetSpinner();
            if ((account === null || account === void 0 ? void 0 : account.customerType) && (account === null || account === void 0 ? void 0 : account.customerType.toString()) === '2') {
                _this.router.navigate(['/pay-with-link']);
            }
            else if (account && (!_this.appConfig.isApiAllowed(_this.userService.pfTransactionsSummaryUrl))
                && (!_this.appConfig.isApiAllowed(_this.userService.dcbTransactionsSummaryUrl))) {
                _this.router.navigate(['/pf-home']);
            }
            else if (account && (!_this.appConfig.isApiAllowed(_this.userService.pfTransactionsSummaryUrl))
                && (_this.appConfig.isApiAllowed(_this.userService.dcbTransactionsSummaryUrl))) {
                _this.router.navigate(['/dcb-home']);
            }
            else if (account && _this.accountService.isFullyAuthenticated() &&
                (_this.appConfig.isApiAllowed(_this.userService.pfTransactionsSummaryUrl))
                && (!_this.appConfig.isApiAllowed(_this.userService.dcbTransactionsSummaryUrl))) {
                _this.router.navigate(['/pf-home']);
            }
            else if (account && _this.accountService.isFullyAuthenticated() &&
                (_this.appConfig.isApiAllowed(_this.userService.pfTransactionsSummaryUrl))
                && (_this.appConfig.isApiAllowed(_this.userService.dcbTransactionsSummaryUrl))) {
                _this.router.navigate(['/pf-home']);
            }
            else {
                _this.isFailed = true;
                _this.errorMessage = 'terminus.error.message';
            }
        }, function (err) {
            _this.isProcessing = false;
            _this.resetSpinner();
            _this.isFailed = true;
            _this.errorMessage = err;
        });
    };
    TerminusPageComponent.prototype.showSpinner = function (text) {
        this.spinnerText = text;
        this.spinner.show(undefined, {
            type: 'ball-triangle-path',
            size: 'medium',
            bdColor: 'rgba(0, 0, 0, 0.8)',
            color: '#fff',
            fullScreen: true
        });
    };
    TerminusPageComponent.prototype.resetSpinner = function () {
        this.spinnerText = null;
        this.spinner.hide();
    };
    TerminusPageComponent.ɵfac = function TerminusPageComponent_Factory(t) { return new (t || TerminusPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_auth_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_app_config_app_config__WEBPACK_IMPORTED_MODULE_5__["AppConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"])); };
    TerminusPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TerminusPageComponent, selectors: [["app-terminus-page"]], decls: 8, vars: 2, consts: [["id", "error"], [1, "container-fluid"], [1, "row", "auth-height", "full-height-vh"], [1, "col-12", "d-flex", "align-items-center", "justify-content-center"], [1, "row"], ["class", "col-12 text-center", 4, "ngIf"], ["style", "font-size: 20px; color: white", 4, "ngIf"], [1, "col-12", "text-center"], ["src", "assets/img/gallery/error.png", "alt", "", "height", "300", "width", "400", 1, "img-fluid", "error-img", "mt-2"], [1, "w-75", "error-text", "mx-auto", "mt-4"], ["class", "btn btn-warning my-2", 3, "routerLink", 4, "ngIf"], ["class", "btn btn-warning my-2", 3, "click", 4, "ngIf"], [1, "btn", "btn-warning", "my-2", 3, "routerLink"], [1, "btn", "btn-warning", "my-2", 3, "click"], [2, "font-size", "20px", "color", "white"]], template: function TerminusPageComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TerminusPageComponent_div_5_Template, 11, 8, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ngx-spinner");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TerminusPageComponent_p_7_Template, 3, 3, "p", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isFailed);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.spinnerText);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXJtaW51cy1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return TerminusPageComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TerminusPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-terminus-page',
                templateUrl: './terminus-page.component.html',
                styleUrls: ['./terminus-page.component.scss']
            }]
    }], function () { return [{ type: ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }, { type: _shared_auth_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"] }, { type: _shared_app_config_app_config__WEBPACK_IMPORTED_MODULE_5__["AppConfig"] }, { type: _services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-content-pages-content-pages-module.js.map