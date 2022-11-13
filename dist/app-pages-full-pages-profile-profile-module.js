(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-pages-full-pages-profile-profile-module"],{

/***/ "JSJa":
/*!***************************************************************!*\
  !*** ./src/app/pages/full-pages/profile/profile.component.ts ***!
  \***************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "7g+E");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _shared_auth_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/auth/account.service */ "/AoX");
/* harmony import */ var _services_password_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/password.service */ "VSxV");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/message.service */ "QLLi");
/* harmony import */ var _services_merchant_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/merchant.service */ "sfWK");
/* harmony import */ var app_shared_services_browser_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/shared/services/browser.service */ "aPai");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/app.constants */ "dkQB");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");




















var _c0 = function (a0) { return { active: a0 }; };
function ProfileComponent_li_14_Template(rf, ctx) { if (rf & 1) {
    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_li_14_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.setActiveTab("change-business"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00DCye \u0130\u015Fyeri De\u011Fi\u015Ftir");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r0.activeTab === "change-business"));
} }
function ProfileComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Ad Soyad");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r1.account == null ? null : ctx_r1.account.firstName, " ", ctx_r1.account == null ? null : ctx_r1.account.lastName, "");
} }
function ProfileComponent_div_47_div_3_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var merchant_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", merchant_r9 == null ? null : merchant_r9.merchantName, "");
} }
function ProfileComponent_div_47_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileComponent_div_47_div_3_span_1_Template, 2, 1, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var merchant_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !merchant_r9.isPotential);
} }
function ProfileComponent_div_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Firma");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProfileComponent_div_47_div_3_Template, 2, 1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.merchantList == null ? null : ctx_r2.merchantList.userMerchants);
} }
function ProfileComponent_span_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u015Eifre Ba\u015Far\u0131yla De\u011Fi\u015Ftirilmi\u015Ftir");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileComponent_form_50_span_6_Template(rf, ctx) { if (rf & 1) {
    var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_form_50_span_6_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r19.changePasswordInputType(ctx_r19.PasswordType.oldPassword); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r12.oldPasswordInputType === "password" ? "fa fa-eye" : "fa fa-eye-slash");
} }
function ProfileComponent_form_50_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " zorunlu ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileComponent_form_50_span_13_Template(rf, ctx) { if (rf & 1) {
    var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_form_50_span_13_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r21.changePasswordInputType(ctx_r21.PasswordType.newPassword); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r14.newPasswordInputType === "password" ? "fa fa-eye" : "fa fa-eye-slash");
} }
function ProfileComponent_form_50_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " zorunlu ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileComponent_form_50_span_20_Template(rf, ctx) { if (rf & 1) {
    var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_form_50_span_20_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r23.changePasswordInputType(ctx_r23.PasswordType.retypeNewPassword); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r16.retypeNewPasswordInputType === "password" ? "fa fa-eye" : "fa fa-eye-slash");
} }
function ProfileComponent_form_50_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " zorunlu ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileComponent_form_50_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " alanlar ayn\u0131 olmal\u0131d\u0131r");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var _c1 = function (a0, a1) { return { "is-invalid": a0, "is-valid": a1 }; };
function ProfileComponent_form_50_Template(rf, ctx) { if (rf & 1) {
    var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ProfileComponent_form_50_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.onChangePasswordFormSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Eski \u015Eifre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProfileComponent_form_50_span_6_Template, 3, 2, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProfileComponent_form_50_div_7_Template, 3, 0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Yeni \u015Eifre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ProfileComponent_form_50_span_13_Template, 3, 2, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ProfileComponent_form_50_div_14_Template, 3, 0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Yeni \u015Eifre Tekrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ProfileComponent_form_50_span_20_Template, 3, 2, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ProfileComponent_form_50_div_21_Template, 3, 0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ProfileComponent_form_50_div_23_Template, 3, 0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Kaydet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u0130ptal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r4.changePasswordForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r4.oldPasswordInputType)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](14, _c1, ctx_r4.changePasswordFormSubmitted && ctx_r4.cpf.oldPassword.invalid, ctx_r4.changePasswordFormSubmitted && !ctx_r4.cpf.oldPassword.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.browserName !== "edge");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.changePasswordFormSubmitted && (ctx_r4.cpf.oldPassword.invalid || (ctx_r4.cpf.oldPassword.errors == null ? null : ctx_r4.cpf.oldPassword.errors.required)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r4.newPasswordInputType)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](17, _c1, ctx_r4.changePasswordFormSubmitted && ctx_r4.cpf.newPassword.invalid, ctx_r4.changePasswordFormSubmitted && !ctx_r4.cpf.newPassword.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.browserName !== "edge");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.changePasswordFormSubmitted && (ctx_r4.cpf.newPassword.invalid || (ctx_r4.cpf.newPassword.errors == null ? null : ctx_r4.cpf.newPassword.errors.required)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r4.retypeNewPasswordInputType)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](20, _c1, ctx_r4.changePasswordFormSubmitted && ctx_r4.cpf.retypeNewPassword.invalid, ctx_r4.changePasswordFormSubmitted && !ctx_r4.cpf.retypeNewPassword.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.browserName !== "edge");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.changePasswordFormSubmitted && (ctx_r4.cpf.retypeNewPassword.invalid || (ctx_r4.cpf.retypeNewPassword.errors == null ? null : ctx_r4.cpf.retypeNewPassword.errors.required)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.changePasswordFormSubmitted && (ctx_r4.cpf.retypeNewPassword.errors == null ? null : ctx_r4.cpf.retypeNewPassword.errors.equal));
} }
function ProfileComponent_p_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r5.spinnerText));
} }
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(accountService, passwordService, spinner, service, merchantService, messageService, browserService) {
        this.accountService = accountService;
        this.passwordService = passwordService;
        this.spinner = spinner;
        this.service = service;
        this.merchantService = merchantService;
        this.messageService = messageService;
        this.browserService = browserService;
        this.generalFormSubmitted = false;
        this.changePasswordFormSubmitted = false;
        this.alertVisible = true;
        this.spinnerText = '';
        this.success = false;
        this.valueHidden = true;
        this.changePasswordForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            oldPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            newPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            retypeNewPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
        this.oldPasswordInputType = "password";
        this.newPasswordInputType = "password";
        this.retypeNewPasswordInputType = "password";
        this.browserName = "";
        this.potentialCustomerType = app_app_constants__WEBPACK_IMPORTED_MODULE_8__["POTENTIAL_CUSTOMER_TYPE"];
        var type = localStorage.getItem('type');
        this.activeTab = type ? type : 'general';
        if (localStorage.getItem('merchantLength')) {
            this.valueHidden = false;
        }
        this.PasswordType = Password;
        this.subscribeBrowserName();
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.merchantRequest();
        this.changePasswordForm.valueChanges.subscribe(function (asd) { return _this.checkFieldsEquality(asd, _this.changePasswordForm); }, null);
        this.accountService
            .identity(false)
            .subscribe(function (account) { return _this.account = account; }, function (err) { });
    };
    ProfileComponent.prototype.subscribeBrowserName = function () {
        var _this = this;
        this.browserService.browserName.subscribe(function (res) {
            _this.browserName = res;
        });
    };
    ProfileComponent.prototype.merchantRequest = function () {
        var _this = this;
        this.accountService.getUserAllMerchants().subscribe(function (res) {
            _this.merchantList = res;
            if (_this.merchantList.userMerchants.length > 0) {
                var merchant = JSON.parse(localStorage.getItem('merchantName'));
                _this.merchant = merchant.merchantId;
                _this.checkIfAllPotentialMerchant();
                _this.service.detectChanges();
            }
        });
    };
    ProfileComponent.prototype.checkIfAllPotentialMerchant = function () {
        this.isAllPotentialMerchant = this.merchantList.userMerchants.every(function (val) { return val.isPotential; });
    };
    ProfileComponent.prototype.checkFieldsEquality = function (formControls, form) {
        if (formControls['newPassword'] !== formControls['retypeNewPassword']) {
            this.setControlError(form.controls['newPassword'], true);
            this.setControlError(form.controls['retypeNewPassword'], true);
        }
        else {
            this.setControlError(form.controls['newPassword'], null);
            this.setControlError(form.controls['retypeNewPassword'], null);
        }
    };
    ProfileComponent.prototype.setControlError = function (control, error) {
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
    ProfileComponent.prototype.setActiveTab = function (tab) {
        this.activeTab = tab;
    };
    Object.defineProperty(ProfileComponent.prototype, "cpf", {
        get: function () {
            return this.changePasswordForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    ProfileComponent.prototype.onChangePasswordFormSubmit = function () {
        var _this = this;
        this.success = false;
        this.changePasswordFormSubmitted = true;
        if (this.changePasswordForm.invalid) {
            return;
        }
        this.passwordService
            .update(this.changePasswordForm.value.oldPassword, this.changePasswordForm.value.newPassword)
            .subscribe(function (res) {
            _this.resetSpinner();
            _this.success = true;
        }, function (err) {
            _this.messageService.addHttpError({
                httpErrorResponse: err,
                defaultMessage: 'reset-password.message.error'
            });
            _this.resetSpinner();
        });
    };
    ProfileComponent.prototype.showSpinner = function (text) {
        this.spinnerText = text;
        this.spinner.show(undefined, {
            type: 'ball-triangle-path',
            size: 'medium',
            bdColor: 'rgba(0, 0, 0, 0.8)',
            color: '#fff',
            fullScreen: true
        });
    };
    ProfileComponent.prototype.resetSpinner = function () {
        this.spinnerText = null;
        this.spinner.hide();
    };
    ProfileComponent.prototype.changeMerchant = function (e) {
        var _this = this;
        if (e) {
            var merchant = this.merchantList.userMerchants.find(function (m) { return m.merchantId === e; });
            localStorage.setItem('merchantName', JSON.stringify(merchant));
            this.accountService.identity(true).subscribe(function (account) {
                _this.account = account;
                localStorage.setItem('account', JSON.stringify(account));
            });
            // this.accountService.identity(true).subscribe((account: Account) => this.account = account);
        }
    };
    ProfileComponent.prototype.changePasswordInputType = function (type) {
        switch (type) {
            case Password.oldPassword:
                this.oldPasswordInputType === "password" ? this.oldPasswordInputType = "text" : this.oldPasswordInputType = "password";
                break;
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
    ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_auth_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_password_service__WEBPACK_IMPORTED_MODULE_4__["PasswordService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_merchant_service__WEBPACK_IMPORTED_MODULE_6__["MerchantService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_browser_service__WEBPACK_IMPORTED_MODULE_7__["BrowserService"])); };
    ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 56, vars: 27, consts: [[1, "row"], [1, "col-12"], [1, "content-header"], [1, "content-sub-header", "mb-1"], [1, "col-md-3", "mt-3"], ["id", "myTab", "role", "tablist", 1, "nav", "flex-column", "nav-pills"], [1, "nav-item"], ["href", "javascript:;", "id", "general-tab", "data-toggle", "tab", "role", "tab", "aria-controls", "general", "aria-selected", "true", 1, "nav-link", 3, "ngClass", "click"], [1, "ft-settings", "mr-1", "align-middle"], [1, "align-middle"], ["class", "nav-item", 4, "ngIf"], ["href", "javascript:;", "id", "change-password-tab", "data-toggle", "tab", "role", "tab", "aria-controls", "change-password", "aria-selected", "false", 1, "nav-link", 3, "ngClass", "click"], [1, "ft-lock", "mr-1", "align-middle"], [1, "col-md-9"], [1, "card"], [1, "card-content"], [1, "card-body"], [1, "tab-content"], ["id", "general", "role", "tabpanel", "aria-labelledby", "general-tab", 1, "tab-pane", 3, "ngClass"], [1, "media"], ["alt", "profile-img", "height", "64", "width", "64", 1, "rounded", "mr-3", 3, "src"], [1, "mt-1", "mt-sm-2"], ["class", "col-12 form-group", 4, "ngIf"], [1, "col-12", "form-group"], ["for", "email"], ["id", "email", 1, "form-control"], ["for", "msisdn"], ["id", "msisdn", 1, "form-control"], ["for", "lang"], ["id", "lang", 1, "form-control"], ["id", "change-password", "role", "tabpanel", "aria-labelledby", "change-password-tab", 1, "tab-pane", 3, "ngClass"], [4, "ngIf"], [3, "formGroup", "ngSubmit", 4, "ngIf"], ["id", "change-business", "role", "tabpanel", "aria-labelledby", "change-business-tab", 1, "tab-pane", 3, "ngClass"], [1, "col"], ["bindLabel", "merchantName", "bindValue", "merchantId", "placeholder", "Firma Ad\u0131", 3, "items", "ngModel", "ngModelChange"], ["style", "font-size: 20px; color: white", 4, "ngIf"], ["href", "javascript:;", "id", "change-business-tab", "data-toggle", "tab", "role", "tab", "aria-controls", "change-business", "aria-selected", "true", 1, "nav-link", 3, "ngClass", "click"], ["for", "name"], ["id", "name", 1, "form-control"], ["for", "firm"], ["class", "pb-1", 4, "ngFor", "ngForOf"], [1, "pb-1"], ["id", "firm", "class", "form-control", 4, "ngIf"], ["id", "firm", 1, "form-control"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "oldPassword"], [1, "controls", "input-group"], ["autocomplete", "null", "id", "oldPassword", "formControlName", "oldPassword", "placeholder", "eski \u015Fifre", "required", "", 1, "form-control", 3, "type", "ngClass"], ["class", "input-group-append", 4, "ngIf"], ["class", "help-block mt-1 text-danger", 4, "ngIf"], ["for", "newPassword"], ["id", "newPassword", "formControlName", "newPassword", "placeholder", "yeni \u015Fifre", "required", "", 1, "form-control", 3, "type", "ngClass"], ["for", "retypeNewPassword"], ["id", "retypeNewPassword", "formControlName", "retypeNewPassword", "placeholder", "yeni \u015Fifre tekrar", "required", "", 1, "form-control", 3, "type", "ngClass"], [1, "d-flex", "flex-sm-row", "flex-column", "justify-content-end"], ["type", "submit", 1, "btn", "btn-dark", "mr-sm-2", "mb-1"], ["type", "reset", 1, "btn", "btn-secondary", "mb-1"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-outline-secondary", "border-left-0", "border", 3, "click"], [1, "help-block", "mt-1", "text-danger"], [1, "ft-alert-circle", "align-middle"], [2, "font-size", "20px", "color", "white"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Profil Ayarlar\u0131");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Profil ayarlar\u0131n\u0131z\u0131 buradan de\u011Fi\u015Ftirebilirsiniz.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_Template_a_click_10_listener() { return ctx.setActiveTab("general"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Profil");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ProfileComponent_li_14_Template, 5, 3, "li", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_Template_a_click_16_listener() { return ctx.setActiveTab("change-password"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u015Eifre \u0130\u015Flemleri");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "hr", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "form");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ProfileComponent_div_31_Template, 5, 2, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "E-Mail");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Telefon No");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Tercih Edilen Dil");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, ProfileComponent_div_47_Template, 4, 1, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, ProfileComponent_span_49_Template, 2, 0, "span", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, ProfileComponent_form_50_Template, 29, 23, "form", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "ng-select", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_ng_select_ngModelChange_53_listener($event) { return ctx.changeMerchant($event); })("ngModelChange", function ProfileComponent_Template_ng_select_ngModelChange_53_listener($event) { return ctx.merchant = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "ngx-spinner");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, ProfileComponent_p_55_Template, 3, 3, "p", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c0, ctx.activeTab === "general"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.valueHidden);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c0, ctx.activeTab === "change-password"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c0, ctx.activeTab === "general"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.account.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.account == null ? null : ctx.account.customerType) != ctx.potentialCustomerType);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.account == null ? null : ctx.account.email, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.account == null ? null : ctx.account.msisdn, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.account == null ? null : ctx.account.langKey, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isAllPotentialMerchant);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c0, ctx.activeTab === "change-password"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.success);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.success);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](25, _c0, ctx.activeTab === "change-business"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.merchantList == null ? null : ctx.merchantList.userMerchants)("ngModel", ctx.merchant);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.spinnerText);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__["NgSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslatePipe"]], styles: [".alert-light-warning {\n  background-color: #FEEFD0 !important;\n  color: #F77E17 !important;\n  border-color: #FEEFD0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUFDRiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsZXJ0LWxpZ2h0LXdhcm5pbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkVFRkQwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjRjc3RTE3ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogI0ZFRUZEMDtcbn1cbiJdfQ== */", ".ng-dropdown-panel .ng-dropdown-panel-items .ng-option img {\n  margin-right: 0.7rem;\n}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option img + b {\n  vertical-align: middle;\n}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-marked {\n  background-color: #1A051D !important;\n  color: #fff !important;\n}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option-selected {\n  background-color: #1A051D !important;\n  color: #fff !important;\n}\n.ng-select .ng-select-container {\n  background-color: transparent !important;\n  border-color: #E0E0E0;\n  border-radius: 0.35rem;\n  color: #342E49;\n}\n.ng-select .ng-dropdown-panel {\n  border-color: #E0E0E0;\n  box-shadow: none;\n  margin: 0;\n}\n.ng-select.ng-select-opened > .ng-select-container {\n  border-color: #1A051D !important;\n}\n.ng-select.ng-select-focused:not(.ng-select-opened) > .ng-select-container {\n  border-color: #1A051D;\n  box-shadow: none;\n}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value {\n  background-color: #1A051D;\n  color: #fff;\n  border-radius: 0.35rem;\n}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon {\n  border: 1px solid #7441DB;\n  border-right: 0 !important;\n  border-top-left-radius: 0.35rem;\n  border-bottom-left-radius: 0.35rem;\n  padding: 1px 0 1px 5px;\n}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon:hover {\n  background-color: inherit;\n}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-label {\n  border: 1px solid #7441DB;\n  border-left: 0 !important;\n  border-top-right-radius: 0.35rem;\n  border-bottom-right-radius: 0.35rem;\n}\nhtml body.layout-dark:not(.layout-transparent) .ng-select .ng-select-container {\n  border-color: #474748;\n  color: #B2B1B5;\n}\nhtml body.layout-dark:not(.layout-transparent) .ng-select .ng-select-container .ng-input > input::-moz-placeholder {\n  color: #B2B1B5;\n}\nhtml body.layout-dark:not(.layout-transparent) .ng-select .ng-select-container .ng-input > input,\nhtml body.layout-dark:not(.layout-transparent) .ng-select .ng-select-container .ng-input > input::placeholder {\n  color: #B2B1B5;\n}\nhtml body.layout-dark.layout-transparent .ng-select .ng-select-container {\n  border-color: rgba(238, 238, 238, 0.2);\n  color: #D6D5D8;\n}\nhtml body.layout-dark.layout-transparent .ng-select .ng-select-container .ng-input > input::-moz-placeholder {\n  color: #D6D5D8;\n}\nhtml body.layout-dark.layout-transparent .ng-select .ng-select-container .ng-input > input,\nhtml body.layout-dark.layout-transparent .ng-select .ng-select-container .ng-input > input::placeholder {\n  color: #D6D5D8;\n}\nhtml body.layout-dark .ng-dropdown-panel {\n  border-color: #474748;\n}\nhtml body.layout-dark .ng-dropdown-panel .ng-dropdown-panel-items .ng-option {\n  background-color: #1E1E1E;\n  color: #B2B1B5;\n}\nhtml body.layout-dark .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-disabled {\n  color: #626164;\n}\nhtml body.layout-dark .ng-dropdown-panel .ng-optgroup.ng-option-disabled {\n  background-color: #1E1E1E;\n  color: #626164;\n}\nhtml body.layout-dark .ng-dropdown-panel .ng-dropdown-header,\nhtml body.layout-dark .ng-dropdown-panel .ng-dropdown-footer {\n  background-color: #101010;\n  color: #626164;\n  border-color: #474748;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NlbGVjdC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vY29yZS92YXJpYWJsZXMvX3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vY29yZS92YXJpYWJsZXMvYXBwLXZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1JO0VBQ0Usb0JBQUE7QUFMTjtBQU1NO0VBQ0Usc0JBQUE7QUFKUjtBQU9JO0VBQ0Usb0NBQUE7RUFDQSxzQkFBQTtBQUxOO0FBUUU7RUFDRSxvQ0FBQTtFQUNBLHNCQUFBO0FBTko7QUFVRTtFQUNFLHdDQUFBO0VBQ0EscUJDcUVXO0VEcEVYLHNCQ3NFWTtFRHJFWixjQ29EUztBRDNEYjtBQVNFO0VBQ0UscUJDZ0VXO0VEL0RYLGdCQUFBO0VBQ0EsU0FBQTtBQVBKO0FBU0U7RUFDRSxnQ0FBQTtBQVBKO0FBU0U7RUFDRSxxQkNUTTtFRFVOLGdCQUFBO0FBUEo7QUFTRTtFQUNFLHlCQ2JNO0VEY04sV0MzQ0k7RUQ0Q0osc0JDb0RZO0FEM0RoQjtBQVFJO0VBQ0UseUJBQUE7RUFDQSwwQkFBQTtFQUNBLCtCQ2dEVTtFRC9DVixrQ0MrQ1U7RUQ5Q1Ysc0JBQUE7QUFOTjtBQU9NO0VBQ0UseUJBQUE7QUFMUjtBQVFJO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQ3NDVTtFRHJDVixtQ0NxQ1U7QUQzQ2hCO0FBZ0JNO0VBQ0UscUJFYlU7RUZjVixjRW5CUTtBRk1oQjtBQWNRO0VBRUUsY0V0Qk07QUZVaEI7QUFVUTs7RUFFRSxjRXRCTTtBRlVoQjtBQW9CTTtFQUNFLHNDRWRVO0VGZVYsY0VwQlE7QUZFaEI7QUFtQlE7RUFFRSxjRXZCTTtBRk1oQjtBQWVROztFQUVFLGNFdkJNO0FGTWhCO0FBdUJFO0VBQ0UscUJFckNjO0FGZ0JsQjtBQXNCSTtFQUNFLHlCRTNDUTtFRjRDUixjRTdDVTtBRnlCaEI7QUFxQk07RUFDRSxjRTNDWTtBRndCcEI7QUFzQkk7RUFDRSx5QkVsRFE7RUZtRFIsY0VoRGM7QUY0QnBCO0FBc0JJOztFQUVFLHlCRXpEVTtFRjBEVixjRXJEYztFRnNEZCxxQkVyRFk7QUZpQ2xCIiwiZmlsZSI6InNlbGVjdC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uL2NvcmUvdmFyaWFibGVzL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIi4uL2NvcmUvdmFyaWFibGVzL2FwcC12YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCIuLi9jb3JlL2NvbG9ycy9wYWxldHRlLXZhcmlhYmxlc1wiO1xuXG4ubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIHtcbiAgLm5nLW9wdGlvbiB7XG4gICAgaW1nIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMC43cmVtO1xuICAgICAgJitiIHtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgIH1cbiAgICB9XG4gICAgJi5uZy1vcHRpb24tbWFya2VkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5ICFpbXBvcnRhbnQ7XG4gICAgICBjb2xvcjogJHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG4gIC5uZy1vcHRpb24tc2VsZWN0ZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICR3aGl0ZSAhaW1wb3J0YW50O1xuICB9XG59XG4ubmctc2VsZWN0IHtcbiAgLm5nLXNlbGVjdC1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xuICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xuICAgIGNvbG9yOiAkYm9keS1jb2xvcjtcbiAgfVxuICAubmctZHJvcGRvd24tcGFuZWwge1xuICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICAmLm5nLXNlbGVjdC1vcGVuZWQ+Lm5nLXNlbGVjdC1jb250YWluZXIge1xuICAgIGJvcmRlci1jb2xvcjogJHByaW1hcnkgIWltcG9ydGFudDtcbiAgfVxuICAmLm5nLXNlbGVjdC1mb2N1c2VkOm5vdCgubmctc2VsZWN0LW9wZW5lZCk+Lm5nLXNlbGVjdC1jb250YWluZXIge1xuICAgIGJvcmRlci1jb2xvcjogJHByaW1hcnk7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgfVxuICAmLm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy12YWx1ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnk7XG4gICAgY29sb3I6ICR3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcbiAgICAubmctdmFsdWUtaWNvbiB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCBtYXAtZ2V0KCRwcmltYXJ5LWNvbG9yLCBkYXJrZW4tMSk7XG4gICAgICBib3JkZXItcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJGJvcmRlci1yYWRpdXM7XG4gICAgICBwYWRkaW5nOiAxcHggMCAxcHggNXB4O1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gICAgICB9XG4gICAgfVxuICAgIC5uZy12YWx1ZS1sYWJlbCB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCBtYXAtZ2V0KCRwcmltYXJ5LWNvbG9yLCBkYXJrZW4tMSk7XG4gICAgICBib3JkZXItbGVmdDogMCAhaW1wb3J0YW50O1xuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xuICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xuICAgIH1cbiAgfVxufVxuXG5cbmh0bWwgYm9keS5sYXlvdXQtZGFyayB7XG4gIC8vIGZvciBkYXJrIGxheW91dFxuICAmOm5vdCgubGF5b3V0LXRyYW5zcGFyZW50KSB7XG4gICAgLm5nLXNlbGVjdCB7XG4gICAgICAubmctc2VsZWN0LWNvbnRhaW5lciB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJGRsLWJvcmRlci1jb2xvcjtcbiAgICAgICAgY29sb3I6ICRkbC10ZXh0LWNvbG9yO1xuICAgICAgICAubmctaW5wdXQ+aW5wdXQsXG4gICAgICAgIC5uZy1pbnB1dD5pbnB1dDo6cGxhY2Vob2xkZXIge1xuICAgICAgICAgIGNvbG9yOiAkZGwtdGV4dC1jb2xvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAvLyBmb3IgdHJhbnNwYXJlbnQgbGF5b3V0XG4gICYubGF5b3V0LXRyYW5zcGFyZW50IHtcbiAgICAubmctc2VsZWN0IHtcbiAgICAgIC5uZy1zZWxlY3QtY29udGFpbmVyIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkdGwtYm9yZGVyLWNvbG9yO1xuICAgICAgICBjb2xvcjogJHRsLXRleHQtY29sb3I7XG4gICAgICAgIC5uZy1pbnB1dD5pbnB1dCxcbiAgICAgICAgLm5nLWlucHV0PmlucHV0OjpwbGFjZWhvbGRlciB7XG4gICAgICAgICAgY29sb3I6ICR0bC10ZXh0LWNvbG9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8vIGZvciBkYXJrIGFuZCB0cmFuc3BhcmVudCBsYXlvdXRzXG4gIC5uZy1kcm9wZG93bi1wYW5lbCB7XG4gICAgYm9yZGVyLWNvbG9yOiAkZGwtYm9yZGVyLWNvbG9yO1xuICAgIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0aW9uIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkbC1iZy1jb2xvcjtcbiAgICAgIGNvbG9yOiAkZGwtdGV4dC1jb2xvcjtcbiAgICAgICYubmctb3B0aW9uLWRpc2FibGVkIHtcbiAgICAgICAgY29sb3I6ICRkbC1kaXNhYmxlZC1jb2xvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgLm5nLW9wdGdyb3VwLm5nLW9wdGlvbi1kaXNhYmxlZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGwtYmctY29sb3I7XG4gICAgICBjb2xvcjogJGRsLWRpc2FibGVkLWNvbG9yO1xuICAgIH1cbiAgICAubmctZHJvcGRvd24taGVhZGVyLFxuICAgIC5uZy1kcm9wZG93bi1mb290ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJnLWNvbG9yLWRhcms7XG4gICAgICBjb2xvcjogJGRsLWRpc2FibGVkLWNvbG9yO1xuICAgICAgYm9yZGVyLWNvbG9yOiAkZGwtYm9yZGVyLWNvbG9yO1xuICAgIH1cbiAgfVxufVxuIiwiJHdoaXRlOiAjZmZmICFkZWZhdWx0O1xuJGdyYXktMTAwOiAjZjhmOWZhICFkZWZhdWx0O1xuJGdyYXktMjAwOiAjZTllY2VmICFkZWZhdWx0O1xuJGdyYXktMzAwOiAjZGVlMmU2ICFkZWZhdWx0O1xuJGdyYXktNDAwOiAjY2VkNGRhICFkZWZhdWx0O1xuJGdyYXktNTAwOiAjYWRiNWJkICFkZWZhdWx0O1xuJGdyYXktNjAwOiAjNmM3NTdkICFkZWZhdWx0O1xuJGdyYXktNzAwOiAjNDk1MDU3ICFkZWZhdWx0O1xuJGdyYXktODAwOiAjMzQzYTQwICFkZWZhdWx0O1xuJGdyYXktOTAwOiAjMjEyNTI5ICFkZWZhdWx0O1xuJGJsYWNrOiAjMDAwICFkZWZhdWx0O1xuXG4kZ3JheXM6ICgpICFkZWZhdWx0O1xuLy8gc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHNjc3MvZG9sbGFyLXZhcmlhYmxlLWRlZmF1bHRcbiRncmF5czogbWFwLW1lcmdlKFxuICAoXG4gICAgXCIxMDBcIjogJGdyYXktMTAwLFxuICAgIFwiMjAwXCI6ICRncmF5LTIwMCxcbiAgICBcIjMwMFwiOiAkZ3JheS0zMDAsXG4gICAgXCI0MDBcIjogJGdyYXktNDAwLFxuICAgIFwiNTAwXCI6ICRncmF5LTUwMCxcbiAgICBcIjYwMFwiOiAkZ3JheS02MDAsXG4gICAgXCI3MDBcIjogJGdyYXktNzAwLFxuICAgIFwiODAwXCI6ICRncmF5LTgwMCxcbiAgICBcIjkwMFwiOiAkZ3JheS05MDBcbiAgKSxcbiAgJGdyYXlzXG4pO1xuXG4kcHJpbWFyeTogIzFBMDUxRCAhZGVmYXVsdDtcbiRwcmltYXJ5MjogIzk3NUFGRiAhZGVmYXVsdDtcbiRzdWNjZXNzOiAjNDBDMDU3ICFkZWZhdWx0O1xuJGluZm86ICMyRjhCRTYgIWRlZmF1bHQ7XG4kd2FybmluZzogI0Y3N0UxNyAhZGVmYXVsdDtcbiRkYW5nZXI6ICNGNTUyNTIgIWRlZmF1bHQ7XG4kc2Vjb25kYXJ5OiAjNjE2RDg5ICFkZWZhdWx0O1xuJGxpZ2h0OiAjREJERUU1ICFkZWZhdWx0O1xuJGRhcms6ICMxQTA1MUQgIWRlZmF1bHQ7XG5cbiR0aGVtZS1jb2xvcnM6ICgpICFkZWZhdWx0O1xuLy8gc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHNjc3MvZG9sbGFyLXZhcmlhYmxlLWRlZmF1bHRcbiR0aGVtZS1jb2xvcnM6IG1hcC1tZXJnZShcbiAgKFxuICAgIFwicHJpbWFyeVwiOiAkcHJpbWFyeSxcbiAgICBcInN1Y2Nlc3NcIjogJHN1Y2Nlc3MsXG4gICAgXCJpbmZvXCI6ICRpbmZvLFxuICAgIFwid2FybmluZ1wiOiAkd2FybmluZyxcbiAgICBcImRhbmdlclwiOiAkZGFuZ2VyLFxuICAgIFwic2Vjb25kYXJ5XCI6ICRzZWNvbmRhcnksXG4gICAgXCJsaWdodFwiOiAkbGlnaHQsXG4gICAgXCJkYXJrXCI6ICRkYXJrXG4gICksXG4gICR0aGVtZS1jb2xvcnNcbik7XG5cbi8vIFNwYWNpbmdcblxuJHNwYWNlcjogMS41cmVtO1xuJHNwYWNlcnM6IChcbiAgMDogMCxcbiAgMTogKFxuICAgICRzcGFjZXIgKiAwLjI1XG4gICksXG4gIDI6IChcbiAgICAkc3BhY2VyICogMC41XG4gICksXG4gIDM6ICRzcGFjZXIsXG4gIDQ6IChcbiAgICAkc3BhY2VyICogMS41XG4gICksXG4gIDU6IChcbiAgICAkc3BhY2VyICogM1xuICApXG4pICFkZWZhdWx0O1xuXG4vLyBCb2R5XG4vL1xuLy8gU2V0dGluZ3MgZm9yIHRoZSBgPGJvZHk+YCBlbGVtZW50LlxuJGJvZHktYmc6ICNGN0Y3Rjg7XG4kYm9keS1jb2xvcjogIzM0MkU0OSAhZGVmYXVsdDtcblxuXG4vLyBMaW5rc1xuLy9cbi8vIFN0eWxlIGFuY2hvciBlbGVtZW50cy5cblxuJGxpbmstY29sb3I6ICRwcmltYXJ5ICFkZWZhdWx0O1xuJGxpbmstaG92ZXItY29sb3I6IGRhcmtlbigkbGluay1jb2xvciwgNSUpICFkZWZhdWx0O1xuJGxpbmstaG92ZXItZGVjb3JhdGlvbjogbm9uZSAhZGVmYXVsdDtcblxuLy8gQ29tcG9uZW50c1xuLy9cbi8vIERlZmluZSBjb21tb24gcGFkZGluZyBhbmQgYm9yZGVyIHJhZGl1cyBzaXplcyBhbmQgbW9yZS5cblxuJGJvcmRlci1jb2xvcjogI0UwRTBFMCAhZGVmYXVsdDtcblxuJGJvcmRlci1yYWRpdXM6IDAuMzVyZW0gIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1sZzogMC42cmVtICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtc206IDAuMjVyZW0gIWRlZmF1bHQ7XG5cblxuLy8gVHlwb2dyYXBoeVxuLy9cbi8vIEZvbnQsIGxpbmUtaGVpZ2h0LCBhbmQgY29sb3IgZm9yIGJvZHkgdGV4dCwgaGVhZGluZ3MsIGFuZCBtb3JlLlxuXG4vLyBzdHlsZWxpbnQtZGlzYWJsZSB2YWx1ZS1rZXl3b3JkLWNhc2VcbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiBcIk1vbnRzZXJyYXRcIiwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIixBcmlhbCwgc2Fucy1zZXJpZjtcblxuJGhlYWRpbmdzLWZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHktc2Fucy1zZXJpZiAhZGVmYXVsdDtcbiRoZWFkaW5ncy1saW5lLWhlaWdodDogMS4xICFkZWZhdWx0O1xuJGhlYWRpbmdzLWNvbG9yOiAjMTcxMDJGICFkZWZhdWx0O1xuXG4kc21hbGwtZm9udC1zaXplOiA5MCUgIWRlZmF1bHQ7XG5cbiR0ZXh0LW11dGVkOiAjQkRCREJEICFkZWZhdWx0O1xuXG4kYmxvY2txdW90ZS1mb250LXNpemU6IDEuMXJlbSAhZGVmYXVsdDtcblxuJGhyLWJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcblxuLy8gVGFibGVzXG4vL1xuLy8gQ3VzdG9taXplcyB0aGUgYC50YWJsZWAgY29tcG9uZW50IHdpdGggYmFzaWMgdmFsdWVzLCBlYWNoIHVzZWQgYWNyb3NzIGFsbCB0YWJsZSB2YXJpYXRpb25zLlxuXG4kdGFibGUtY2VsbC1wYWRkaW5nOiAxLjE1cmVtIDJyZW0gIWRlZmF1bHQ7XG4kdGFibGUtYWNjZW50LWJnOiByZ2JhKCRibGFjaywgLjAzKSAhZGVmYXVsdDtcblxuLy8gQnV0dG9ucyArIEZvcm1zXG4vL1xuLy8gU2hhcmVkIHZhcmlhYmxlcyB0aGF0IGFyZSByZWFzc2lnbmVkIHRvIGAkaW5wdXQtYCBhbmQgYCRidG4tYCBzcGVjaWZpYyB2YXJpYWJsZXMuXG5cbiRpbnB1dC1idG4tcGFkZGluZy15OiAwLjM3NXJlbSAhZGVmYXVsdDtcblxuXG4vLyBCdXR0b25zXG4vL1xuLy8gRm9yIGVhY2ggb2YgQm9vdHN0cmFwJ3MgYnV0dG9ucywgZGVmaW5lIHRleHQsIGJhY2tncm91bmQsIGFuZCBib3JkZXIgY29sb3IuXG5cbiRidG4tcGFkZGluZy15OiAwLjRyZW0gIWRlZmF1bHQ7XG4kYnRuLXBhZGRpbmcteDogMS4yNXJlbSAhZGVmYXVsdDtcbiRidG4tbGluZS1oZWlnaHQ6IDEuNXJlbSAhZGVmYXVsdDtcbiRidG4tYm9yZGVyLXJhZGl1cy1sZzogJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kYnRuLWJvcmRlci1yYWRpdXMtc206ICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuXG5cbi8vIEZvcm1zXG5cbiRsYWJlbC1tYXJnaW4tYm90dG9tOiAwLjJyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtcGFkZGluZy15OiAkaW5wdXQtYnRuLXBhZGRpbmcteSAhZGVmYXVsdDtcbiRpbnB1dC1saW5lLWhlaWdodDogMS41ICFkZWZhdWx0O1xuJGlucHV0LWJnOiB0cmFuc3BhcmVudCAhZGVmYXVsdDtcbiRpbnB1dC1kaXNhYmxlZC1iZzogJGJvZHktYmcgIWRlZmF1bHQ7XG4kaW5wdXQtY29sb3I6ICM3NTc4N2QgIWRlZmF1bHQ7XG4kaW5wdXQtYm9yZGVyLWNvbG9yOiAjRTBFMEUwICFkZWZhdWx0O1xuJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvcjogJHByaW1hcnkgIWRlZmF1bHQ7XG4kaW5wdXQtZm9jdXMtYm94LXNoYWRvdzogbm9uZSAhZGVmYXVsdDtcbiRpbnB1dC1wbGFjZWhvbGRlci1jb2xvcjogJHRleHQtbXV0ZWQgIWRlZmF1bHQ7XG4kaW5wdXQtaGVpZ2h0OiBjYWxjKCN7JGlucHV0LWxpbmUtaGVpZ2h0ICogMWVtfSArICN7JGlucHV0LXBhZGRpbmcteSAqIDJ9ICsgM3B4KSAhZGVmYXVsdDtcblxuJGN1c3RvbS1jb250cm9sLWxhYmVsLWRpc2FibGVkLWNvbG9yOiAkZ3JheS01MDAgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWZvY3VzLWJveC1zaGFkb3c6IDAgIWRlZmF1bHQ7XG4kY3VzdG9tLXN3aXRjaC13aWR0aDogMi42cmVtICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtZm9jdXMtYm94LXNoYWRvdzogMCAhZGVmYXVsdDtcblxuXG4vLyBaLWluZGV4IG1hc3RlciBsaXN0XG4vL1xuLy8gV2FybmluZzogQXZvaWQgY3VzdG9taXppbmcgdGhlc2UgdmFsdWVzLiBUaGV5J3JlIHVzZWQgZm9yIGEgYmlyZCdzIGV5ZSB2aWV3XG4vLyBvZiBjb21wb25lbnRzIGRlcGVuZGVudCBvbiB0aGUgei1heGlzIGFuZCBhcmUgZGVzaWduZWQgdG8gYWxsIHdvcmsgdG9nZXRoZXIuXG5cblxuXG4vLyBOYXZzXG5cbiRuYXYtbGluay1kaXNhYmxlZC1jb2xvcjogIzlFOUU5RSAhZGVmYXVsdDtcbiRuYXYtdGFicy1saW5rLWhvdmVyLWJvcmRlci1jb2xvcjogIHRyYW5zcGFyZW50ICFkZWZhdWx0O1xuJG5hdi10YWJzLWxpbmstYWN0aXZlLWNvbG9yOiAkcHJpbWFyeSAhZGVmYXVsdDtcbiRuYXYtdGFicy1saW5rLWFjdGl2ZS1iZzogdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG4kbmF2LXRhYnMtbGluay1hY3RpdmUtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAhZGVmYXVsdDtcblxuLy8gRHJvcGRvd25zXG4vL1xuLy8gRHJvcGRvd24gbWVudSBjb250YWluZXIgYW5kIGNvbnRlbnRzLlxuXG4kZHJvcGRvd24tcGFkZGluZy15OiAwICFkZWZhdWx0O1xuJGRyb3Bkb3duLWJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRkcm9wZG93bi1kaXZpZGVyLWJnOiAkYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJGRyb3Bkb3duLWRpdmlkZXItbWFyZ2luLXk6IDAgIWRlZmF1bHQ7XG4kZHJvcGRvd24taXRlbS1wYWRkaW5nLXk6IDEwcHggIWRlZmF1bHQ7XG4kZHJvcGRvd24taXRlbS1wYWRkaW5nLXg6IDIwcHggIWRlZmF1bHQ7XG4kZHJvcGRvd24tbGluay1jb2xvcjogJGJvZHktY29sb3IgIWRlZmF1bHQ7XG4kZHJvcGRvd24tbGluay1ob3Zlci1jb2xvcjogaW5oZXJpdCAhZGVmYXVsdDtcbiRkcm9wZG93bi1saW5rLWhvdmVyLWJnOiAkYm9keS1iZyAhZGVmYXVsdDtcbiRkcm9wZG93bi1oZWFkZXItY29sb3I6ICRib2R5LWNvbG9yICFkZWZhdWx0O1xuXG4vLyBQYWdpbmF0aW9uXG5cbiRwYWdpbmF0aW9uLWJnOiAjRjVGNUY1ICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tZm9jdXMtYm94LXNoYWRvdzogMCAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWhvdmVyLWNvbG9yOiAkcHJpbWFyeSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWhvdmVyLWJnOiAjRUVFRUVFICFkZWZhdWx0O1xuJHBhZ2luYXRpb24taG92ZXItYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tZGlzYWJsZWQtY29sb3I6ICM3NTc1NzUgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1iZzogI0UwRTBFMCAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWRpc2FibGVkLWJvcmRlci1jb2xvcjogICRib3JkZXItY29sb3IgIWRlZmF1bHQ7XG5cbi8vIENhcmRzXG5cbiRjYXJkLXNwYWNlci15OiAxLjVyZW07XG4kY2FyZC1zcGFjZXIteDogMS41cmVtO1xuJGNhcmQtYm9yZGVyLXdpZHRoOiAwICFkZWZhdWx0O1xuJGNhcmQtaW5uZXItYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG5cbi8vIFBvcG92ZXJzXG5cbiRwb3BvdmVyLWJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRwb3BvdmVyLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJHBvcG92ZXItaGVhZGVyLWJnOiAkYm9keS1iZyAhZGVmYXVsdDtcbiRwb3BvdmVyLWhlYWRlci1wYWRkaW5nLXk6IDAuNnJlbSAhZGVmYXVsdDtcbiRwb3BvdmVyLWhlYWRlci1wYWRkaW5nLXg6IDFyZW0gIWRlZmF1bHQ7XG5cbi8vIFRvYXN0c1xuXG4kdG9hc3QtcGFkZGluZy15OiAwLjQ1cmVtICFkZWZhdWx0O1xuJHRvYXN0LWJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiR0b2FzdC1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiR0b2FzdC1ib3gtc2hhZG93OiAtOHB4IDhweCAxNHB4IDAgcmdiYSgyNSwgNDIsIDcwLCAwLjExKSAhZGVmYXVsdDtcbiR0b2FzdC1oZWFkZXItY29sb3I6ICRoZWFkaW5ncy1jb2xvciAhZGVmYXVsdDtcbiR0b2FzdC1oZWFkZXItYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuXG4vLyBCYWRnZXNcblxuJGJhZGdlLWZvbnQtc2l6ZTogODUlICFkZWZhdWx0O1xuJGJhZGdlLWZvbnQtd2VpZ2h0OiA1MDAgIWRlZmF1bHQ7XG4kYmFkZ2UtcGFkZGluZy15OiAwLjRyZW0gIWRlZmF1bHQ7XG4kYmFkZ2UtcGFkZGluZy14OiAwLjY2NjY2NjY2N3JlbSAhZGVmYXVsdDtcblxuLy8gTW9kYWxzXG5cbiRtb2RhbC1jb250ZW50LWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG4kbW9kYWwtY29udGVudC1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcblxuLy8gQWxlcnRzXG4vL1xuLy8gRGVmaW5lIGFsZXJ0IGNvbG9ycywgYm9yZGVyIHJhZGl1cywgYW5kIHBhZGRpbmcuXG5cbiRhbGVydC1wYWRkaW5nLXk6IDAuOTVyZW0gIWRlZmF1bHQ7XG4kYWxlcnQtcGFkZGluZy14OiAxLjQ1cmVtICFkZWZhdWx0O1xuXG4vLyBQcm9ncmVzcyBiYXJzXG5cbiRwcm9ncmVzcy1oZWlnaHQ6IDAuOHJlbSAhZGVmYXVsdDtcbiRwcm9ncmVzcy1ib3JkZXItcmFkaXVzOiAxcmVtICFkZWZhdWx0O1xuJHByb2dyZXNzLWJnOiAjZWVlICFkZWZhdWx0O1xuXG4vLyBMaXN0IGdyb3VwXG5cbiRsaXN0LWdyb3VwLWJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWhvdmVyLWJnOiAkYm9keS1iZyAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWRpc2FibGVkLWNvbG9yOiAjNzU3NTc1ICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYWN0aW9uLWNvbG9yOiBpbmhlcml0ICFkZWZhdWx0O1xuXG4vLyBJbWFnZSB0aHVtYm5haWxzXG5cbiR0aHVtYm5haWwtYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuXG5cbi8vIENvZGVcblxuJGNvZGUtZm9udC1zaXplOiA5MCUgIWRlZmF1bHQ7XG4kY29kZS1jb2xvcjogJGRhbmdlciAhZGVmYXVsdDtcblxuLy8gVXRpbGl0aWVzXG5cbiRvdmVyZmxvd3M6IGF1dG8sIGhpZGRlbiwgdmlzaWJsZSwgc2Nyb2xsICFkZWZhdWx0O1xuIiwiQGltcG9ydCBcIn5ib290c3RyYXAvc2Nzcy9mdW5jdGlvbnNcIjtcbkBpbXBvcnQgXCJ+Ym9vdHN0cmFwL3Njc3MvbWl4aW5zXCI7XG5AaW1wb3J0IFwifmJvb3RzdHJhcC9zY3NzL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcInZhcmlhYmxlc1wiO1xuXG5cbi8vIHZlcnRpY2FsIG1lbnVcbiRtZW51LWV4cGFuZGVkLXdpZHRoLXNtOiAyMjBweDtcbiRtZW51LWV4cGFuZGVkLXdpZHRoOiAyNjBweDtcbiRtZW51LWV4cGFuZGVkLXdpZHRoLWxnOiAyODBweDtcbiRtZW51LWNvbGxhcHNlZC13aWR0aDogNjBweDtcblxuLy8gSG9yaXpvbnRhbCBNZW51XG4kbWVudS1hY3RpdmUtYmc6ICNFN0U5RUM7XG5cbiRmb250LXNpemUtcm9vdDogMTVweDtcblxuLy8gQXZhdGFyXG4kYXZhdGFyLWJnOiAjRTBFMEUwO1xuJGF2YXRhci10ZXh0LWNvbG9yOiAjNjE2MTYxO1xuJGF2YXRhci1zaXplOiAzMnB4O1xuJGF2YXRhci1zaXplLXhsOiA3MHB4O1xuJGF2YXRhci1zaXplLWxnOiA1MHB4O1xuJGF2YXRhci1zaXplLW1kOiA0MHB4O1xuJGF2YXRhci1zaXplLXNtOiAyNHB4O1xuJGF2YXRhci1zdGF0dXMtc2l6ZTogMTFweDtcbiRhdmF0YXItc3RhdHVzLXNpemUtbGc6IDE3cHg7XG5cbi8vIFNoYWRvd3NcbiRzaGFkb3ctdW1icmEtb3BhY2l0eTogMC4yICFkZWZhdWx0O1xuJHNoYWRvdy1wZW51bWJyYS1vcGFjaXR5OiAwLjE0ICFkZWZhdWx0O1xuJHNoYWRvdy1hbWJpZW50LW9wYWNpdHk6IDAuMTIgIWRlZmF1bHQ7XG5cbi8vdmFyaWFibGVzIGZvciBzb2NpYWxcbiRzb2NpYWwtZmFjZWJvb2s6ICMzYjU5OTg7XG4kc29jaWFsLXR3aXR0ZXI6ICM1NWFjZWU7XG4kc29jaWFsLXBpbnRlcmVzdDogI2NjMjEyNztcbiRzb2NpYWwtZ29vZ2xlOiAjZGQ0YjM5O1xuJHNvY2lhbC1saW5rZWRpbjogIzA5NzZiNDtcbiRzb2NpYWwtZHJpYmJibGU6ICNlYTRjODk7XG4kc29jaWFsLWdpdGh1YjogIzMzMzMzMztcbiRzb2NpYWwteW91dHViZTogI2U1MmQyNztcbiRzb2NpYWwtaW5zdGFncmFtOiAjMTI1Njg4O1xuJHNvY2lhbC1yZWRkaXQ6ICNmZjQ1MDA7XG4kc29jaWFsLXR1bWJscjogIzM1NDY1YztcbiRzb2NpYWwtYmVoYW5jZTogIzE3NjlmZjtcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLy8gVmFyaWFibGVzIGZvciBEYXJrIExheW91dFxuJGRhcmstc3R5bGU6IHRydWU7XG4kYmctY29sb3ItZGFyazogIzEwMTAxMDtcbiRkbC10ZXh0LWNvbG9yOiAjQjJCMUI1O1xuJGRsLWJnLWNvbG9yOiAjMUUxRTFFO1xuJGRsLWhlYWRpbmdzLWNvbG9yOiAjQkZCRUMyO1xuJGRsLXRleHQtbXV0ZWQtY29sb3I6ICM4NDg0ODQ7XG4kZGwtZGlzYWJsZWQtY29sb3I6ICM2MjYxNjQ7XG4kZGwtYm9yZGVyLWNvbG9yOiAjNDc0NzQ4O1xuJGRsLWNhcmQtc2hhZG93OiAtOHB4IDhweCAxNHB4IDAgcmdiYSgkYmxhY2ssIDAuMjUpO1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi8vIFZhcmlhYmxlcyBGb3IgVHJhbnNwYXJlbnQgTGF5b3V0XG5cbiR0bC10ZXh0LWNvbG9yOiAjRDZENUQ4O1xuJHRsLWhlYWRpbmdzLWNvbG9yOiAjRTlFOUVBO1xuJHRsLWJnLWNvbG9yOiB0cmFuc3BhcmVudDtcbiR0bC10ZXh0LW11dGVkLWNvbG9yOiAjQzNDMkM1O1xuJHRsLWRpc2FibGVkLWNvbG9yOiAjOUU5RTlFO1xuJHRsLWJvcmRlci1jb2xvcjogcmdiYSgjZWVlLCAwLjIpO1xuJHRsLWNhcmQtYmctY29sb3I6IHJnYmEoJGJsYWNrLCAwLjEyKTtcblxuJGJnLWdsYXNzLWhpYmlzY3VzOiBsaW5lYXItZ3JhZGllbnQoXG4gIHRvIHJpZ2h0IGJvdHRvbSxcbiAgI2YwNWY1NyxcbiAgI2M4M2Q1YyxcbiAgIzk5MjQ1YSxcbiAgIzY3MTM1MSxcbiAgIzM2MDk0MFxuKTtcbiRiZy1nbGFzcy1wdXJwbGUtcGl6emF6ejogbGluZWFyLWdyYWRpZW50KFxuICB0byByaWdodCBib3R0b20sXG4gICM2NjJkODYsXG4gICM4YjJhOGEsXG4gICNhZTIzODksXG4gICNjZjFkODMsXG4gICNlZDFlNzlcbik7XG4kYmctZ2xhc3MtYmx1ZS1sYWdvb246IGxpbmVhci1ncmFkaWVudChcbiAgdG8gcmlnaHQgYm90dG9tLFxuICAjMTQ0ZTY4LFxuICAjMDA2ZDgzLFxuICAjMDA4ZDkyLFxuICAjMDBhZDkxLFxuICAjNTdjYTg1XG4pO1xuJGJnLWdsYXNzLWVsZWN0cmljLXZpb2xldDogbGluZWFyLWdyYWRpZW50KFxuICB0byBsZWZ0IHRvcCxcbiAgIzRhMDBlMCxcbiAgIzYwMGRlMCxcbiAgIzcxMTllMSxcbiAgIzgwMjNlMSxcbiAgIzhlMmRlMlxuKTtcbiRiZy1nbGFzcy1wb3J0YWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gIHRvIGxlZnQgdG9wLFxuICAjOTdhYmZmLFxuICAjNzk4Y2U1LFxuICAjNWI2ZWNiLFxuICAjM2I1MWIxLFxuICAjMTIzNTk3XG4pO1xuJGJnLWdsYXNzLXR1bmRvcmE6IGxpbmVhci1ncmFkaWVudChcbiAgdG8gbGVmdCB0b3AsXG4gICNlZjQ2NzMsXG4gICNmZmM4NDZcbik7XG4iXX0= */"], encapsulation: 2 });
    return ProfileComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.scss', '/assets/sass/libs/select.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _shared_auth_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"] }, { type: _services_password_service__WEBPACK_IMPORTED_MODULE_4__["PasswordService"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _services_merchant_service__WEBPACK_IMPORTED_MODULE_6__["MerchantService"] }, { type: _shared_services_message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"] }, { type: app_shared_services_browser_service__WEBPACK_IMPORTED_MODULE_7__["BrowserService"] }]; }, null); })();
var Password;
(function (Password) {
    Password[Password["oldPassword"] = 0] = "oldPassword";
    Password[Password["newPassword"] = 1] = "newPassword";
    Password[Password["retypeNewPassword"] = 2] = "retypeNewPassword";
})(Password || (Password = {}));


/***/ }),

/***/ "MheK":
/*!************************************************************!*\
  !*** ./src/app/pages/full-pages/profile/profile.module.ts ***!
  \************************************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile-routing.module */ "osjn");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.component */ "JSJa");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "7g+E");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");










var ProfileModule = /** @class */ (function () {
    function ProfileModule() {
    }
    ProfileModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProfileModule });
    ProfileModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProfileModule_Factory(t) { return new (t || ProfileModule)(); }, providers: [], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _profile_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProfileRoutingModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDatepickerModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbAlertModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"]
            ]] });
    return ProfileModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProfileModule, { declarations: [_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _profile_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProfileRoutingModule"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDatepickerModule"],
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbAlertModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _profile_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProfileRoutingModule"],
                    ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDatepickerModule"],
                    _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbAlertModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"]
                ],
                exports: [],
                declarations: [
                    _profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"]
                ],
                providers: [],
            }]
    }], null, null); })();


/***/ }),

/***/ "osjn":
/*!********************************************************************!*\
  !*** ./src/app/pages/full-pages/profile/profile-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: ProfileRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileRoutingModule", function() { return ProfileRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.component */ "JSJa");





var routes = [
    {
        path: '',
        component: _profile_component__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"],
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
var ProfileRoutingModule = /** @class */ (function () {
    function ProfileRoutingModule() {
    }
    ProfileRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProfileRoutingModule });
    ProfileRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProfileRoutingModule_Factory(t) { return new (t || ProfileRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return ProfileRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProfileRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


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
//# sourceMappingURL=app-pages-full-pages-profile-profile-module.js.map