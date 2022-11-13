(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-pages-full-pages-deneme-deneme-module"],{

/***/ "2e9b":
/*!**********************************************************!*\
  !*** ./src/app/pages/full-pages/deneme/deneme.module.ts ***!
  \**********************************************************/
/*! exports provided: DenemeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DenemeModule", function() { return DenemeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _deneme_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deneme-routing.module */ "Wvg7");
/* harmony import */ var _deneme_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deneme.component */ "WwLL");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "PCNd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");







var DenemeModule = /** @class */ (function () {
    function DenemeModule() {
    }
    DenemeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DenemeModule });
    DenemeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DenemeModule_Factory(t) { return new (t || DenemeModule)(); }, providers: [], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _deneme_routing_module__WEBPACK_IMPORTED_MODULE_2__["DenemeRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ]] });
    return DenemeModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DenemeModule, { declarations: [_deneme_component__WEBPACK_IMPORTED_MODULE_3__["DenemeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _deneme_routing_module__WEBPACK_IMPORTED_MODULE_2__["DenemeRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DenemeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _deneme_routing_module__WEBPACK_IMPORTED_MODULE_2__["DenemeRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
                ],
                exports: [],
                declarations: [
                    _deneme_component__WEBPACK_IMPORTED_MODULE_3__["DenemeComponent"]
                ],
                providers: [],
            }]
    }], null, null); })();


/***/ }),

/***/ "Wvg7":
/*!******************************************************************!*\
  !*** ./src/app/pages/full-pages/deneme/deneme-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: DenemeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DenemeRoutingModule", function() { return DenemeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _deneme_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deneme.component */ "WwLL");





var routes = [
    {
        path: '',
        component: _deneme_component__WEBPACK_IMPORTED_MODULE_2__["DenemeComponent"],
        data: {
            title: 'Ana Sayfa'
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
var DenemeRoutingModule = /** @class */ (function () {
    function DenemeRoutingModule() {
    }
    DenemeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DenemeRoutingModule });
    DenemeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DenemeRoutingModule_Factory(t) { return new (t || DenemeRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return DenemeRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DenemeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DenemeRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "WwLL":
/*!*************************************************************!*\
  !*** ./src/app/pages/full-pages/deneme/deneme.component.ts ***!
  \*************************************************************/
/*! exports provided: DenemeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DenemeComponent", function() { return DenemeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_i18n_mapping_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/i18n-mapping.service */ "YYtp");




var DenemeComponent = /** @class */ (function () {
    function DenemeComponent(i18nMappingService) {
        this.i18nMappingService = i18nMappingService;
        this.name = '';
        this.i18nCallFailed = false;
    }
    DenemeComponent.prototype.change = function (event) {
        this.name = event;
        if (this.name === 'can') {
            this.getI18File();
        }
    };
    DenemeComponent.prototype.getI18File = function () {
        var _this = this;
        this.i18nMappingService
            .getFile('tr')
            .subscribe(function (res) { return _this.i18nFile = JSON.stringify(res.body); }, function (res) { return _this.i18nCallFailed = true; });
    };
    DenemeComponent.ɵfac = function DenemeComponent_Factory(t) { return new (t || DenemeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_i18n_mapping_service__WEBPACK_IMPORTED_MODULE_1__["I18nMappingService"])); };
    DenemeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DenemeComponent, selectors: [["app-deneme"]], decls: 40, vars: 0, consts: [[1, "swal2-container", "swal2-center", "swal2-backdrop-show", 2, "overflow-y", "auto"], ["aria-labelledby", "swal2-title", "aria-describedby", "swal2-content", "tabindex", "-1", "role", "dialog", "aria-live", "assertive", "aria-modal", "true", 1, "swal2-popup", "swal2-modal", "swal2-icon-error", "swal2-show", 2, "display", "flex"], [1, "swal2-header"], [1, "swal2-progress-steps", 2, "display", "none"], [1, "swal2-icon", "swal2-error", "swal2-icon-show", 2, "display", "flex"], [1, "swal2-x-mark"], [1, "swal2-x-mark-line-left"], [1, "swal2-x-mark-line-right"], [1, "swal2-icon", "swal2-question", 2, "display", "none"], [1, "swal2-icon", "swal2-warning", 2, "display", "none"], [1, "swal2-icon", "swal2-info", 2, "display", "none"], [1, "swal2-icon", "swal2-success", 2, "display", "none"], [1, "swal2-image", 2, "display", "none"], ["id", "swal2-title", 1, "swal2-title", 2, "display", "flex"], ["type", "button", "aria-label", "Close this dialog", 1, "swal2-close", 2, "display", "none"], [1, "swal2-content"], ["id", "swal2-content", 1, "swal2-html-container", 2, "display", "block"], [1, "swal2-input", 2, "display", "none"], ["type", "file", 1, "swal2-file", 2, "display", "none"], [1, "swal2-range", 2, "display", "none"], ["type", "range"], [1, "swal2-select", 2, "display", "none"], [1, "swal2-radio", 2, "display", "none"], ["for", "swal2-checkbox", 1, "swal2-checkbox", 2, "display", "none"], ["type", "checkbox"], [1, "swal2-label"], [1, "swal2-textarea", 2, "display", "none"], ["id", "swal2-validation-message", 1, "swal2-validation-message"], [1, "swal2-actions"], ["type", "button", "aria-label", "", 1, "swal2-confirm", "btn", "btn-primary", 2, "display", "inline-block"], ["type", "button", "aria-label", "", 1, "swal2-cancel", 2, "display", "none"], [1, "swal2-footer", 2, "display", "none"], [1, "swal2-timer-progress-bar", 2, "display", "none"]], template: function DenemeComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ul", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Error!");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u00D7");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " You clicked the button!\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "output");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "select", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "span", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "textarea", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " OK ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Cancel ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "div", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "div", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZW5lbWUuY29tcG9uZW50LnNjc3MifQ== */"] });
    return DenemeComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DenemeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-deneme',
                templateUrl: './deneme.component.html',
                styleUrls: ['./deneme.component.scss']
            }]
    }], function () { return [{ type: _services_i18n_mapping_service__WEBPACK_IMPORTED_MODULE_1__["I18nMappingService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=app-pages-full-pages-deneme-deneme-module.js.map