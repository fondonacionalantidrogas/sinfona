"use strict";
(self["webpackChunkvuexy"] = self["webpackChunkvuexy"] || []).push([["main"],{

/***/ 24597:
/*!************************************************!*\
  !*** ./src/@core/animations/core.animation.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fadeIn": function() { return /* binding */ fadeIn; },
/* harmony export */   "fadeInLeft": function() { return /* binding */ fadeInLeft; },
/* harmony export */   "zoomIn": function() { return /* binding */ zoomIn; }
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 31631);
 // Animation: FadeInLeft

var fadeInLeft = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('fadeInLeft', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => *', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter, :leave', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  position: 'absolute',
  left: 0,
  width: '100%',
  paddingRight: '2rem',
  paddingLeft: '2rem',
  opacity: 0
}), {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translateX(-100%)',
  opacity: 0
}), {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translateX(0%)'
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('600ms ease', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  transform: 'translateX(100%)'
}))], {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('800ms ease', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  transform: 'translateX(0%)'
})), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animateChild)()], {
  optional: true
})])])]); // Animation: ZoomIn

var zoomIn = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('zoomIn', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* <=> *', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter, :leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  position: 'absolute',
  left: 0,
  width: '100%',
  paddingRight: '2rem',
  paddingLeft: '2rem',
  opacity: 0,
  transform: 'scale(0.5) translateY(-20%)'
})], {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('400ms ease', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  paddingRight: '2rem',
  paddingLeft: '2rem',
  transform: 'scale(1) translateY(0)'
}))], {
  optional: true
})])]); // Animation: FadeIn

var fadeIn = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('fadeIn', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* <=> *', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter, :leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  position: 'absolute',
  left: 0,
  width: '100%',
  paddingRight: '2rem',
  paddingLeft: '2rem',
  opacity: 0
})], {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('500ms ease', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  paddingRight: '2rem',
  paddingLeft: '2rem'
}))], {
  optional: true
})])]);

/***/ }),

/***/ 75078:
/*!************************************!*\
  !*** ./src/@core/common.module.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreCommonModule": function() { return /* binding */ CoreCommonModule; }
/* harmony export */ });
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ 71378);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _core_directives_directives__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/directives/directives */ 35455);
/* harmony import */ var _core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/pipes/pipes.module */ 30021);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);








var CoreCommonModule = /*#__PURE__*/(0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function CoreCommonModule() {
  (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, CoreCommonModule);
});

CoreCommonModule.ɵfac = function CoreCommonModule_Factory(t) {
  return new (t || CoreCommonModule)();
};

CoreCommonModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: CoreCommonModule
});
CoreCommonModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__.FlexLayoutModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _core_directives_directives__WEBPACK_IMPORTED_MODULE_2__.CoreDirectivesModule, _core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__.CorePipesModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__.FlexLayoutModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _core_directives_directives__WEBPACK_IMPORTED_MODULE_2__.CoreDirectivesModule, _core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__.CorePipesModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](CoreCommonModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__.FlexLayoutModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _core_directives_directives__WEBPACK_IMPORTED_MODULE_2__.CoreDirectivesModule, _core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__.CorePipesModule],
    exports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__.FlexLayoutModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _core_directives_directives__WEBPACK_IMPORTED_MODULE_2__.CoreDirectivesModule, _core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__.CorePipesModule]
  });
})();

/***/ }),

/***/ 34505:
/*!***************************************************************!*\
  !*** ./src/@core/components/core-menu/core-menu.component.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreMenuComponent": function() { return /* binding */ CoreMenuComponent; }
/* harmony export */ });
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 85921);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_components_core_menu_core_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/core-menu/core-menu.service */ 54278);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout/extended */ 1570);
/* harmony import */ var _core_components_core_menu_vertical_section_section_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/components/core-menu/vertical/section/section.component */ 9380);
/* harmony import */ var _core_components_core_menu_vertical_item_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/components/core-menu/vertical/item/item.component */ 86365);
/* harmony import */ var _core_components_core_menu_vertical_collapsible_collapsible_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/components/core-menu/vertical/collapsible/collapsible.component */ 96315);
/* harmony import */ var _core_components_core_menu_horizontal_item_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/components/core-menu/horizontal/item/item.component */ 17023);
/* harmony import */ var _core_components_core_menu_horizontal_collapsible_collapsible_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/components/core-menu/horizontal/collapsible/collapsible.component */ 42592);














var _c0 = ["core-menu", ""];

function CoreMenuComponent_ng_container_0_ng_container_1_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "li", 5);
  }

  if (rf & 2) {
    var item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("item", item_r3);
  }
}

var _c1 = function _c1(a0) {
  return {
    disabled: a0
  };
};

var _c2 = function _c2(a0) {
  return {
    exact: a0
  };
};

var _c3 = function _c3() {
  return [];
};

var _c4 = function _c4(a0) {
  return [a0];
};

function CoreMenuComponent_ng_container_0_ng_container_1_ng_container_2_ng_container_1_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("item", item_r10)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](5, _c1, item_r10.disabled === true))("routerLinkActive", !item_r10.openInNewTab ? "active" : "")("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](7, _c2, item_r10.exactMatch || false));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", item_r10.openInNewTab ? _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](9, _c3) : _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](10, _c4, item_r10.url));
  }
}

function CoreMenuComponent_ng_container_0_ng_container_1_ng_container_2_ng_container_1_li_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "li", 8);
  }

  if (rf & 2) {
    var item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("item", item_r10);
  }
}

function CoreMenuComponent_ng_container_0_ng_container_1_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CoreMenuComponent_ng_container_0_ng_container_1_ng_container_2_ng_container_1_li_1_Template, 2, 12, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, CoreMenuComponent_ng_container_0_ng_container_1_ng_container_2_ng_container_1_li_2_Template, 1, 1, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", item_r10.type == "item");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", item_r10.type == "collapsible");
  }
}

function CoreMenuComponent_ng_container_0_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CoreMenuComponent_ng_container_0_ng_container_1_ng_container_2_ng_container_1_Template, 3, 2, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", item_r3.children);
  }
}

function CoreMenuComponent_ng_container_0_ng_container_1_li_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("item", item_r3)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](5, _c1, item_r3.disabled === true))("routerLinkActive", !item_r3.openInNewTab ? "active" : "")("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](7, _c2, item_r3.exactMatch || false));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", item_r3.openInNewTab ? _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](9, _c3) : _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](10, _c4, item_r3.url));
  }
}

function CoreMenuComponent_ng_container_0_ng_container_1_li_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "li", 8);
  }

  if (rf & 2) {
    var item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("item", item_r3);
  }
}

function CoreMenuComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CoreMenuComponent_ng_container_0_ng_container_1_li_1_Template, 1, 1, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, CoreMenuComponent_ng_container_0_ng_container_1_ng_container_2_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, CoreMenuComponent_ng_container_0_ng_container_1_li_3_Template, 2, 12, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, CoreMenuComponent_ng_container_0_ng_container_1_li_4_Template, 1, 1, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", item_r3.type == "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", item_r3.type == "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", item_r3.type == "item");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", item_r3.type == "collapsible");
  }
}

function CoreMenuComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CoreMenuComponent_ng_container_0_ng_container_1_Template, 5, 4, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.menu);
  }
}

function CoreMenuComponent_ng_container_1_ng_container_1_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "li", 12);
  }

  if (rf & 2) {
    var item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("item", item_r19);
  }
}

function CoreMenuComponent_ng_container_1_ng_container_1_li_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("item", item_r19)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](5, _c1, item_r19.disabled === true))("routerLinkActive", !item_r19.openInNewTab ? "active" : "")("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](7, _c2, item_r19.exactMatch || false));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", item_r19.openInNewTab ? _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](9, _c3) : _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](10, _c4, item_r19.url));
  }
}

function CoreMenuComponent_ng_container_1_ng_container_1_li_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "li", 14);
  }

  if (rf & 2) {
    var item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("item", item_r19);
  }
}

function CoreMenuComponent_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CoreMenuComponent_ng_container_1_ng_container_1_li_1_Template, 1, 1, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, CoreMenuComponent_ng_container_1_ng_container_1_li_2_Template, 2, 12, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, CoreMenuComponent_ng_container_1_ng_container_1_li_3_Template, 1, 1, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var item_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", item_r19.type == "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", item_r19.type == "item");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", item_r19.type == "collapsible");
  }
}

function CoreMenuComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CoreMenuComponent_ng_container_1_ng_container_1_Template, 4, 3, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r1.menu);
  }
}

var CoreMenuComponent = /*#__PURE__*/function () {
  /**
   *
   * @param {ChangeDetectorRef} _changeDetectorRef
   * @param {CoreMenuService} _coreMenuService
   */
  function CoreMenuComponent(_changeDetectorRef, _coreMenuService) {
    (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CoreMenuComponent);

    this._changeDetectorRef = _changeDetectorRef;
    this._coreMenuService = _coreMenuService;
    this.layout = 'vertical'; // Set the private defaults

    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
  } // Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */


  (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(CoreMenuComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      // Set the menu either from the input or from the service
      this.menu = this.menu || this._coreMenuService.getCurrentMenu(); // Subscribe to the current menu changes

      this._coreMenuService.onMenuChanged.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this._unsubscribeAll)).subscribe(function () {
        _this.currentUser = _this._coreMenuService.currentUser; // Load menu

        _this.menu = _this._coreMenuService.getCurrentMenu();

        _this._changeDetectorRef.markForCheck();
      });
    }
  }]);

  return CoreMenuComponent;
}();

CoreMenuComponent.ɵfac = function CoreMenuComponent_Factory(t) {
  return new (t || CoreMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_components_core_menu_core_menu_service__WEBPACK_IMPORTED_MODULE_2__.CoreMenuService));
};

CoreMenuComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: CoreMenuComponent,
  selectors: [["", "core-menu", ""]],
  inputs: {
    layout: "layout",
    menu: "menu"
  },
  attrs: _c0,
  decls: 2,
  vars: 2,
  consts: [[4, "ngIf"], [4, "ngFor", "ngForOf"], ["core-menu-vertical-section", "", "class", "navigation-header", 3, "item", 4, "ngIf"], ["core-menu-vertical-item", "", 3, "item", "ngClass", "routerLinkActive", "routerLinkActiveOptions", 4, "ngIf"], ["core-menu-vertical-collapsible", "", "class", "nav-item has-sub", 3, "item", 4, "ngIf"], ["core-menu-vertical-section", "", 1, "navigation-header", 3, "item"], ["core-menu-vertical-item", "", 3, "item", "ngClass", "routerLinkActive", "routerLinkActiveOptions"], [1, "d-none", 3, "routerLink"], ["core-menu-vertical-collapsible", "", 1, "nav-item", "has-sub", 3, "item"], ["core-menu-horizontal-collapsible", "", "class", "dropdown nav-item", 3, "item", 4, "ngIf"], ["core-menu-horizontal-item", "", 3, "item", "ngClass", "routerLinkActive", "routerLinkActiveOptions", 4, "ngIf"], ["core-menu-horizontal-collapsible", "", "class", "dropdown dropdown-submenu", 3, "item", 4, "ngIf"], ["core-menu-horizontal-collapsible", "", 1, "dropdown", "nav-item", 3, "item"], ["core-menu-horizontal-item", "", 3, "item", "ngClass", "routerLinkActive", "routerLinkActiveOptions"], ["core-menu-horizontal-collapsible", "", 1, "dropdown", "dropdown-submenu", 3, "item"]],
  template: function CoreMenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, CoreMenuComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CoreMenuComponent_ng_container_1_Template, 2, 1, "ng-container", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.layout === "vertical");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.layout === "horizontal");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLinkActive, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_13__.DefaultClassDirective, _core_components_core_menu_vertical_section_section_component__WEBPACK_IMPORTED_MODULE_3__.CoreMenuVerticalSectionComponent, _core_components_core_menu_vertical_item_item_component__WEBPACK_IMPORTED_MODULE_4__.CoreMenuVerticalItemComponent, _core_components_core_menu_vertical_collapsible_collapsible_component__WEBPACK_IMPORTED_MODULE_5__.CoreMenuVerticalCollapsibleComponent, _core_components_core_menu_horizontal_item_item_component__WEBPACK_IMPORTED_MODULE_6__.CoreMenuHorizontalItemComponent, _core_components_core_menu_horizontal_collapsible_collapsible_component__WEBPACK_IMPORTED_MODULE_7__.CoreMenuHorizontalCollapsibleComponent],
  styles: [".vertical-layout:not(.vertical-overlay-menu) .main-menu:not(.expanded) .nav-item.has-sub.open .menu-content {\n  display: none;\n}\n\n.nav-item.disabled {\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUtbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJTTtFQUNFLGFBQUE7QUFIUjs7QUFTRTtFQUNFLGFBQUE7QUFOSiIsImZpbGUiOiJjb3JlLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAgSGlkZSBjb2xsYXBzaWJsZSBtZW51IHdoaWxlIG1lbnUgaXMgY29sbGFwc2VkXG4udmVydGljYWwtbGF5b3V0Om5vdCgudmVydGljYWwtb3ZlcmxheS1tZW51KSB7XG4gIC5tYWluLW1lbnU6bm90KC5leHBhbmRlZCkge1xuICAgIC5uYXYtaXRlbS5oYXMtc3ViLm9wZW4ge1xuICAgICAgLm1lbnUtY29udGVudCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4ubmF2LWl0ZW0ge1xuICAmLmRpc2FibGVkIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG59XG4iXX0= */"],
  encapsulation: 2,
  changeDetection: 0
});

/***/ }),

/***/ 64017:
/*!************************************************************!*\
  !*** ./src/@core/components/core-menu/core-menu.module.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreMenuModule": function() { return /* binding */ CoreMenuModule; }
/* harmony export */ });
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _core_common_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/common.module */ 75078);
/* harmony import */ var _core_components_core_menu_core_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/components/core-menu/core-menu.component */ 34505);
/* harmony import */ var _core_components_core_menu_vertical_section_section_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/components/core-menu/vertical/section/section.component */ 9380);
/* harmony import */ var _core_components_core_menu_vertical_item_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/components/core-menu/vertical/item/item.component */ 86365);
/* harmony import */ var _core_components_core_menu_vertical_collapsible_collapsible_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/components/core-menu/vertical/collapsible/collapsible.component */ 96315);
/* harmony import */ var _core_components_core_menu_horizontal_item_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/components/core-menu/horizontal/item/item.component */ 17023);
/* harmony import */ var _core_components_core_menu_horizontal_collapsible_collapsible_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/components/core-menu/horizontal/collapsible/collapsible.component */ 42592);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);














_core_components_core_menu_vertical_section_section_component__WEBPACK_IMPORTED_MODULE_4__.CoreMenuVerticalSectionComponent;
_core_components_core_menu_vertical_item_item_component__WEBPACK_IMPORTED_MODULE_5__.CoreMenuVerticalItemComponent;
_core_components_core_menu_vertical_collapsible_collapsible_component__WEBPACK_IMPORTED_MODULE_6__.CoreMenuVerticalCollapsibleComponent;
var CoreMenuModule = /*#__PURE__*/(0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function CoreMenuModule() {
  (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, CoreMenuModule);
});

CoreMenuModule.ɵfac = function CoreMenuModule_Factory(t) {
  return new (t || CoreMenuModule)();
};

CoreMenuModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: CoreMenuModule
});
CoreMenuModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateModule.forChild(), _core_common_module__WEBPACK_IMPORTED_MODULE_2__.CoreCommonModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](CoreMenuModule, {
    declarations: [_core_components_core_menu_core_menu_component__WEBPACK_IMPORTED_MODULE_3__.CoreMenuComponent, _core_components_core_menu_vertical_section_section_component__WEBPACK_IMPORTED_MODULE_4__.CoreMenuVerticalSectionComponent, _core_components_core_menu_vertical_item_item_component__WEBPACK_IMPORTED_MODULE_5__.CoreMenuVerticalItemComponent, _core_components_core_menu_vertical_collapsible_collapsible_component__WEBPACK_IMPORTED_MODULE_6__.CoreMenuVerticalCollapsibleComponent, _core_components_core_menu_horizontal_item_item_component__WEBPACK_IMPORTED_MODULE_7__.CoreMenuHorizontalItemComponent, _core_components_core_menu_horizontal_collapsible_collapsible_component__WEBPACK_IMPORTED_MODULE_8__.CoreMenuHorizontalCollapsibleComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateModule, _core_common_module__WEBPACK_IMPORTED_MODULE_2__.CoreCommonModule],
    exports: [_core_components_core_menu_core_menu_component__WEBPACK_IMPORTED_MODULE_3__.CoreMenuComponent]
  });
})();

/***/ }),

/***/ 54278:
/*!*************************************************************!*\
  !*** ./src/@core/components/core-menu/core-menu.service.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreMenuService": function() { return /* binding */ CoreMenuService; }
/* harmony export */ });
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var app_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/auth/service */ 81004);






var CoreMenuService = /*#__PURE__*/function () {
  /**
   * Constructor
   *
   * @param {Router} _router
   * @param {AuthenticationService} _authenticationService
   */
  function CoreMenuService(_router, _authenticationService) {
    var _this = this;

    (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CoreMenuService);

    this._router = _router;
    this._authenticationService = _authenticationService;
    this._registry = {};

    this._authenticationService.currentUser.subscribe(function (x) {
      return _this.currentUser = x;
    }); // Set defaults


    this.onItemCollapsed = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this.onItemCollapseToggled = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject(); // Set private defaults

    this._currentMenuKey = null;
    this._onMenuRegistered = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(null);
    this._onMenuUnregistered = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(null);
    this._onMenuChanged = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(null);
  } // Accessors
  // -----------------------------------------------------------------------------------------------------

  /**
   * onMenuRegistered
   *
   * @returns {Observable<any>}
   */


  (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(CoreMenuService, [{
    key: "onMenuRegistered",
    get: function get() {
      return this._onMenuRegistered.asObservable();
    }
    /**
     * onMenuUnregistered
     *
     * @returns {Observable<any>}
     */

  }, {
    key: "onMenuUnregistered",
    get: function get() {
      return this._onMenuUnregistered.asObservable();
    }
    /**
     * onMenuChanged
     *
     * @returns {Observable<any>}
     */

  }, {
    key: "onMenuChanged",
    get: function get() {
      return this._onMenuChanged.asObservable();
    } // Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register the provided menu with the provided key
     *
     * @param key
     * @param menu
     */

  }, {
    key: "register",
    value: function register(key, menu) {
      // Confirm if the key already used
      if (this._registry[key]) {
        console.error("Menu with the key '".concat(key, "' already exists. Either unregister it first or use a unique key."));
        return;
      } // Add to registry


      this._registry[key] = menu; // Notify subject

      this._onMenuRegistered.next([key, menu]);
    }
    /**
     * Unregister the menu from the registry
     *
     * @param key
     */

  }, {
    key: "unregister",
    value: function unregister(key) {
      // Confirm if the menu exists
      if (!this._registry[key]) {
        console.warn("Menu with the key '".concat(key, "' doesn't exist in the registry."));
      } // Unregister sidebar


      delete this._registry[key]; // Notify subject

      this._onMenuUnregistered.next(key);
    }
    /**
     * Get menu from registry by key
     *
     * @param key
     * @returns {any}
     */

  }, {
    key: "getMenu",
    value: function getMenu(key) {
      // Confirm if the menu exists
      if (!this._registry[key]) {
        console.warn("Menu with the key '".concat(key, "' doesn't exist in the registry."));
        return;
      } // Return sidebar


      return this._registry[key];
    }
    /**
     * Get current menu
     *
     * @returns {any}
     */

  }, {
    key: "getCurrentMenu",
    value: function getCurrentMenu() {
      if (!this._currentMenuKey) {
        console.warn("The current menu is not set.");
        return;
      }

      return this.getMenu(this._currentMenuKey);
    }
    /**
     * Set menu with the key as the current menu
     *
     * @param key
     */

  }, {
    key: "setCurrentMenu",
    value: function setCurrentMenu(key) {
      // Confirm if the sidebar exists
      if (!this._registry[key]) {
        console.warn("Menu with the key '".concat(key, "' doesn't exist in the registry."));
        return;
      } // Set current menu key


      this._currentMenuKey = key; // Notify subject

      this._onMenuChanged.next(key);
    }
  }]);

  return CoreMenuService;
}();

CoreMenuService.ɵfac = function CoreMenuService_Factory(t) {
  return new (t || CoreMenuService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](app_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService));
};

CoreMenuService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
  token: CoreMenuService,
  factory: CoreMenuService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 42592:
/*!****************************************************************************************!*\
  !*** ./src/@core/components/core-menu/horizontal/collapsible/collapsible.component.ts ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreMenuHorizontalCollapsibleComponent": function() { return /* binding */ CoreMenuHorizontalCollapsibleComponent; }
/* harmony export */ });
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js */ 95106);
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 85921);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 59151);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/config.service */ 52553);
/* harmony import */ var _core_components_core_menu_core_menu_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/components/core-menu/core-menu.service */ 54278);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout/extended */ 1570);
/* harmony import */ var _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/directives/core-feather-icons/core-feather-icons */ 66279);
/* harmony import */ var _core_components_core_menu_horizontal_item_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/components/core-menu/horizontal/item/item.component */ 17023);















var _c0 = ["core-menu-horizontal-collapsible", ""];

function CoreMenuHorizontalCollapsibleComponent_ng_container_0_a_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainer"](0);
  }
}

function CoreMenuHorizontalCollapsibleComponent_ng_container_0_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CoreMenuHorizontalCollapsibleComponent_ng_container_0_a_1_ng_container_1_Template, 1, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

    var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](3);

    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx_r1.item.classes)("ngClass", ctx_r1.item.type == "section" ? "dropdown-toggle nav-link" : "dropdown-item dropdown-toggle");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngTemplateOutlet", _r2);
  }
}

function CoreMenuHorizontalCollapsibleComponent_ng_container_0_ng_template_2_span_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "span", 9);
  }

  if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("data-feather", ctx_r6.item.icon);
  }
}

function CoreMenuHorizontalCollapsibleComponent_ng_container_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, CoreMenuHorizontalCollapsibleComponent_ng_container_0_ng_template_2_span_0_Template, 1, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r3.item.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("translate", ctx_r3.item.translate);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r3.item.title);
  }
}

var _c1 = function _c1(a0) {
  return {
    disabled: a0
  };
};

var _c2 = function _c2(a0) {
  return {
    exact: a0
  };
};

var _c3 = function _c3() {
  return [];
};

var _c4 = function _c4(a0) {
  return [a0];
};

function CoreMenuHorizontalCollapsibleComponent_ng_container_0_ng_container_5_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("item", item_r7)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](5, _c1, item_r7.disabled === true))("routerLinkActive", !item_r7.openInNewTab ? "active" : "")("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](7, _c2, item_r7.exactMatch || false));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", item_r7.openInNewTab ? _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](9, _c3) : _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](10, _c4, item_r7.url));
  }
}

function CoreMenuHorizontalCollapsibleComponent_ng_container_0_ng_container_5_li_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "li", 14);
  }

  if (rf & 2) {
    var item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("item", item_r7);
  }
}

function CoreMenuHorizontalCollapsibleComponent_ng_container_0_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CoreMenuHorizontalCollapsibleComponent_ng_container_0_ng_container_5_li_1_Template, 2, 12, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, CoreMenuHorizontalCollapsibleComponent_ng_container_0_ng_container_5_li_2_Template, 1, 1, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", item_r7.type == "item");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", item_r7.type == "collapsible");
  }
}

var _c5 = function _c5(a0) {
  return {
    show: a0
  };
};

function CoreMenuHorizontalCollapsibleComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CoreMenuHorizontalCollapsibleComponent_ng_container_0_a_1_Template, 2, 3, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, CoreMenuHorizontalCollapsibleComponent_ng_container_0_ng_template_2_Template, 3, 3, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "ul", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, CoreMenuHorizontalCollapsibleComponent_ng_container_0_ng_container_5_Template, 3, 2, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r0.item.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](3, _c5, ctx_r0.isShow));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r0.item.children);
  }
}

var CoreMenuHorizontalCollapsibleComponent = /*#__PURE__*/function () {
  /**
   * Constructor
   *
   * @param {Router} _router
   * @param {CoreConfigService} _coreConfigService
   * @param {CoreMenuService} _coreMenuService
   */
  function CoreMenuHorizontalCollapsibleComponent(el, _router, _coreConfigService, _coreMenuService) {
    (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, CoreMenuHorizontalCollapsibleComponent);

    this.el = el;
    this._router = _router;
    this._coreConfigService = _coreConfigService;
    this._coreMenuService = _coreMenuService;
    this.isShow = false; // Conditionally add the active classes if UrlInChildren

    this.isActive = false; // Set the private defaults

    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
  } // Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */


  (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(CoreMenuHorizontalCollapsibleComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      // Subscribe to config changes
      this._coreConfigService.config.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._unsubscribeAll)).subscribe(function (config) {
        _this.coreConfig = config;
      }); // Subscribe to the current menu changes


      this._coreMenuService.onMenuChanged.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._unsubscribeAll)).subscribe(function () {
        _this.currentUser = _this._coreMenuService.currentUser;
      }); // Listen for router events and expand


      this._router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.filter)(function (event) {
        return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_11__.NavigationEnd;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._unsubscribeAll)).subscribe(function (event) {
        // Confirm if the urlAfterRedirects can be found in one of the children of this item
        if (_this.confirmUrlInChildren(_this.item, event.urlAfterRedirects)) {
          _this.isActive = true;
        } else {
          _this.isActive = false;
        }
      }); // Check if the url can be found in one of the children of this item
      // Required for onInit case (i.e switching theme customizer menu layout)


      if (this.confirmUrlInChildren(this.item, this._router.url)) {
        this.isActive = true;
      } else {
        this.isActive = false;
      }
    }
    /**
     * On destroy
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      // Unsubscribe from all subscriptions
      this._unsubscribeAll.next();

      this._unsubscribeAll.complete();
    } // Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Open
     */

  }, {
    key: "show",
    value: function show() {
      this.isShow = true;
      this.setSubMenuProp();
    }
    /**
     * Close
     */

  }, {
    key: "hide",
    value: function hide() {
      this.isShow = false;
    }
    /**
     * Set sub-menu properties based on screen size
     *
     */

  }, {
    key: "setSubMenuProp",
    value: function setSubMenuProp() {
      var _this2 = this;

      setTimeout(function () {
        var nativeElement = _this2.el.nativeElement,
            nativeElementChildren = _this2.el.nativeElement.children[1]; // If element has sub menu

        if (nativeElement.classList.contains('dropdown-submenu')) {
          var innerHeight = window.innerHeight,
              dropdownTop = nativeElementChildren.getBoundingClientRect().top,
              dropdownLeft = nativeElementChildren.getBoundingClientRect().left,
              dropdownHeight = nativeElementChildren.scrollHeight,
              dropdownWidth = nativeElementChildren.scrollWidth; //Set sub-menu height

          if (innerHeight - dropdownTop - dropdownHeight - 28 < 1) {
            var maxHeight = innerHeight - dropdownTop - 25;
            nativeElementChildren.setAttribute('style', 'overflow-y: auto; overflow-x: hidden; max-height : ' + maxHeight + 'px');
          } // Open sub-menu on left based on screen size (To avoid opn sub-menu outside of the screen)


          if (dropdownLeft + dropdownWidth - (window.innerWidth - 16) >= 0) {
            nativeElementChildren.parentElement.classList.add('openLeft');
          }
        }
      });
    }
    /**
     * Confirms if the provided url can be found in one of the given parent's children
     *
     * @param parent
     * @param url
     * @returns {boolean}
     */

  }, {
    key: "confirmUrlInChildren",
    value: function confirmUrlInChildren(parent, url) {
      var children = parent.children; // Return false if parent don't have any children

      if (!children) {
        return false;
      } // Loop all the children


      var _iterator = (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__["default"])(children),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var child = _step.value;

          // If children has child (Sub to sub item url)
          if (child.children) {
            // Call function again with child
            if (this.confirmUrlInChildren(child, url)) {
              return true;
            }
          } // If child.url is same as provided url


          if (child.url === url || url.includes(child.url)) {
            return true;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return false;
    }
  }]);

  return CoreMenuHorizontalCollapsibleComponent;
}();

CoreMenuHorizontalCollapsibleComponent.ɵfac = function CoreMenuHorizontalCollapsibleComponent_Factory(t) {
  return new (t || CoreMenuHorizontalCollapsibleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_config_service__WEBPACK_IMPORTED_MODULE_3__.CoreConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_components_core_menu_core_menu_service__WEBPACK_IMPORTED_MODULE_4__.CoreMenuService));
};

CoreMenuHorizontalCollapsibleComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: CoreMenuHorizontalCollapsibleComponent,
  selectors: [["", "core-menu-horizontal-collapsible", ""]],
  hostVars: 6,
  hostBindings: function CoreMenuHorizontalCollapsibleComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("mouseenter", function CoreMenuHorizontalCollapsibleComponent_mouseenter_HostBindingHandler() {
        return ctx.show();
      })("mouseleave", function CoreMenuHorizontalCollapsibleComponent_mouseleave_HostBindingHandler() {
        return ctx.hide();
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx.isActive)("open", ctx.isActive)("sidebar-group-active", ctx.isActive);
    }
  },
  inputs: {
    item: "item"
  },
  attrs: _c0,
  decls: 1,
  vars: 1,
  consts: [[4, "ngIf"], ["class", "d-flex align-items-center", 3, "ngClass", 4, "ngIf"], ["itemContent", ""], [1, "dropdown-menu", 3, "ngClass"], [4, "ngFor", "ngForOf"], [1, "d-flex", "align-items-center", 3, "ngClass"], [4, "ngTemplateOutlet"], [3, "data-feather", 4, "ngIf"], [3, "translate"], [3, "data-feather"], ["core-menu-horizontal-item", "", 3, "item", "ngClass", "routerLinkActive", "routerLinkActiveOptions", 4, "ngIf"], ["core-menu-horizontal-collapsible", "", "class", "dropdown dropdown-submenu", 3, "item", 4, "ngIf"], ["core-menu-horizontal-item", "", 3, "item", "ngClass", "routerLinkActive", "routerLinkActiveOptions"], [1, "d-none", 3, "routerLink"], ["core-menu-horizontal-collapsible", "", 1, "dropdown", "dropdown-submenu", 3, "item"]],
  template: function CoreMenuHorizontalCollapsibleComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, CoreMenuHorizontalCollapsibleComponent_ng_container_0_Template, 6, 5, "ng-container", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.item.hidden);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgTemplateOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLinkActive, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_14__.DefaultClassDirective, _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_5__.FeatherIconDirective, _core_components_core_menu_horizontal_item_item_component__WEBPACK_IMPORTED_MODULE_6__.CoreMenuHorizontalItemComponent, CoreMenuHorizontalCollapsibleComponent],
  encapsulation: 2
});

/***/ }),

/***/ 17023:
/*!**************************************************************************!*\
  !*** ./src/@core/components/core-menu/horizontal/item/item.component.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreMenuHorizontalItemComponent": function() { return /* binding */ CoreMenuHorizontalItemComponent; }
/* harmony export */ });
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/extended */ 1570);
/* harmony import */ var _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/directives/core-feather-icons/core-feather-icons */ 66279);








var _c0 = ["core-menu-horizontal-item", ""];

function CoreMenuHorizontalItemComponent_ng_container_0_a_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
  }
}

var _c1 = function _c1(a0) {
  return [a0];
};

function CoreMenuHorizontalItemComponent_ng_container_0_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CoreMenuHorizontalItemComponent_ng_container_0_a_1_ng_container_1_Template, 1, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);

    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r1.item.classes)("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](4, _c1, ctx_r1.item.url))("target", ctx_r1.item.openInNewTab ? "_blank" : "_self");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r3);
  }
}

function CoreMenuHorizontalItemComponent_ng_container_0_a_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
  }
}

function CoreMenuHorizontalItemComponent_ng_container_0_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CoreMenuHorizontalItemComponent_ng_container_0_a_2_ng_container_1_Template, 1, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);

    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r2.item.classes)("href", ctx_r2.item.url, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("target", ctx_r2.item.openInNewTab ? "_blank" : "_self");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r3);
  }
}

function CoreMenuHorizontalItemComponent_ng_container_0_ng_template_3_span_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 9);
  }

  if (rf & 2) {
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data-feather", ctx_r7.item.icon);
  }
}

function CoreMenuHorizontalItemComponent_ng_container_0_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, CoreMenuHorizontalItemComponent_ng_container_0_ng_template_3_span_0_Template, 1, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.item.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("translate", ctx_r4.item.translate);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r4.item.title);
  }
}

function CoreMenuHorizontalItemComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CoreMenuHorizontalItemComponent_ng_container_0_a_1_Template, 2, 6, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CoreMenuHorizontalItemComponent_ng_container_0_a_2_Template, 2, 4, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, CoreMenuHorizontalItemComponent_ng_container_0_ng_template_3_Template, 3, 3, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.item.url && !ctx_r0.item.externalUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.item.url && ctx_r0.item.externalUrl);
  }
}

var CoreMenuHorizontalItemComponent = /*#__PURE__*/(0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function CoreMenuHorizontalItemComponent() {
  (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, CoreMenuHorizontalItemComponent);
});

CoreMenuHorizontalItemComponent.ɵfac = function CoreMenuHorizontalItemComponent_Factory(t) {
  return new (t || CoreMenuHorizontalItemComponent)();
};

CoreMenuHorizontalItemComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: CoreMenuHorizontalItemComponent,
  selectors: [["", "core-menu-horizontal-item", ""]],
  inputs: {
    item: "item"
  },
  attrs: _c0,
  decls: 1,
  vars: 1,
  consts: [[4, "ngIf"], ["class", "dropdown-item d-flex align-items-center", 3, "ngClass", "routerLink", "target", 4, "ngIf"], ["class", "dropdown-item d-flex align-items-center", 3, "ngClass", "href", "target", 4, "ngIf"], ["itemContent", ""], [1, "dropdown-item", "d-flex", "align-items-center", 3, "ngClass", "routerLink", "target"], [4, "ngTemplateOutlet"], [1, "dropdown-item", "d-flex", "align-items-center", 3, "ngClass", "href", "target"], [3, "data-feather", 4, "ngIf"], [3, "translate"], [3, "data-feather"]],
  template: function CoreMenuHorizontalItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, CoreMenuHorizontalItemComponent_ng_container_0_Template, 5, 2, "ng-container", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.item.hidden);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgTemplateOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__.DefaultClassDirective, _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_2__.FeatherIconDirective],
  encapsulation: 2
});

/***/ }),

/***/ 96315:
/*!**************************************************************************************!*\
  !*** ./src/@core/components/core-menu/vertical/collapsible/collapsible.component.ts ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreMenuVerticalCollapsibleComponent": function() { return /* binding */ CoreMenuVerticalCollapsibleComponent; }
/* harmony export */ });
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js */ 95106);
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 59151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 85921);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_components_core_menu_core_menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/components/core-menu/core-menu.service */ 54278);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout/extended */ 1570);
/* harmony import */ var _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/directives/core-feather-icons/core-feather-icons */ 66279);
/* harmony import */ var _core_components_core_menu_vertical_item_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/components/core-menu/vertical/item/item.component */ 86365);














var _c0 = ["core-menu-vertical-collapsible", ""];

function CoreMenuVerticalCollapsibleComponent_ng_container_0_a_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainer"](0);
  }
}

function CoreMenuVerticalCollapsibleComponent_ng_container_0_a_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CoreMenuVerticalCollapsibleComponent_ng_container_0_a_1_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7);
      var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r6.toggleOpen($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, CoreMenuVerticalCollapsibleComponent_ng_container_0_a_1_ng_container_1_Template, 1, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

    var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](3);

    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r1.item.classes);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", _r2);
  }
}

function CoreMenuVerticalCollapsibleComponent_ng_container_0_ng_template_2_span_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "span", 10);
  }

  if (rf & 2) {
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("data-feather", ctx_r8.item.icon);
  }
}

function CoreMenuVerticalCollapsibleComponent_ng_container_0_ng_template_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("translate", ctx_r9.item.badge.translate)("ngClass", ctx_r9.item.badge.classes);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r9.item.badge.title, " ");
  }
}

function CoreMenuVerticalCollapsibleComponent_ng_container_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, CoreMenuVerticalCollapsibleComponent_ng_container_0_ng_template_2_span_0_Template, 1, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, CoreMenuVerticalCollapsibleComponent_ng_container_0_ng_template_2_span_3_Template, 2, 3, "span", 9);
  }

  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r3.item.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("translate", ctx_r3.item.translate);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r3.item.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r3.item.badge);
  }
}

var _c1 = function _c1(a0) {
  return {
    disabled: a0
  };
};

var _c2 = function _c2(a0) {
  return {
    exact: a0
  };
};

var _c3 = function _c3() {
  return [];
};

var _c4 = function _c4(a0) {
  return [a0];
};

function CoreMenuVerticalCollapsibleComponent_ng_container_0_ng_container_5_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("item", item_r10)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](5, _c1, item_r10.disabled === true))("routerLinkActive", !item_r10.openInNewTab ? "active" : "")("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](7, _c2, item_r10.exactMatch || false));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", item_r10.openInNewTab ? _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](9, _c3) : _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](10, _c4, item_r10.url));
  }
}

function CoreMenuVerticalCollapsibleComponent_ng_container_0_ng_container_5_li_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "li", 16);
  }

  if (rf & 2) {
    var item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("item", item_r10);
  }
}

function CoreMenuVerticalCollapsibleComponent_ng_container_0_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, CoreMenuVerticalCollapsibleComponent_ng_container_0_ng_container_5_li_1_Template, 2, 12, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, CoreMenuVerticalCollapsibleComponent_ng_container_0_ng_container_5_li_2_Template, 1, 1, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r10.type == "item");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r10.type == "collapsible");
  }
}

function CoreMenuVerticalCollapsibleComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, CoreMenuVerticalCollapsibleComponent_ng_container_0_a_1_Template, 2, 2, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, CoreMenuVerticalCollapsibleComponent_ng_container_0_ng_template_2_Template, 4, 4, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "ul", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, CoreMenuVerticalCollapsibleComponent_ng_container_0_ng_container_5_Template, 3, 2, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r0.item.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.item.children);
  }
}

var CoreMenuVerticalCollapsibleComponent = /*#__PURE__*/function () {
  /**
   * Constructor
   *
   * @param {Router} _router
   * @param {CoreMenuService} _coreMenuService
   * @param {ChangeDetectorRef} _changeDetectorRef
   */
  function CoreMenuVerticalCollapsibleComponent(_router, _coreMenuService, _changeDetectorRef) {
    (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, CoreMenuVerticalCollapsibleComponent);

    this._router = _router;
    this._coreMenuService = _coreMenuService;
    this._changeDetectorRef = _changeDetectorRef;
    this.isOpen = false; // Set the private defaults

    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
  } // Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */


  (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(CoreMenuVerticalCollapsibleComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      // Listen for router events and expand
      this._router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(function (event) {
        return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_9__.NavigationEnd;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this._unsubscribeAll)).subscribe(function (event) {
        // Confirm if the urlAfterRedirects can be found in one of the children of this item
        if (_this.confirmUrlInChildren(_this.item, event.urlAfterRedirects)) {
          _this.expand();
        } else {
          _this.collapse();
        }
      }); // Subscribe to the current menu changes


      this._coreMenuService.onMenuChanged.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this._unsubscribeAll)).subscribe(function () {
        _this.currentUser = _this._coreMenuService.currentUser;
      }); // Listen for collapsing of any menu item


      this._coreMenuService.onItemCollapsed.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this._unsubscribeAll)).subscribe(function (clickedItem) {
        if (clickedItem && clickedItem.children) {
          // Check if the clicked item is one of the children of this item
          if (_this.confirmItemInChildren(_this.item, clickedItem)) {
            return;
          } // Check if the url can be found in one of the children of this item


          if (_this.confirmUrlInChildren(_this.item, _this._router.url)) {
            return;
          } // If the clicked item is not this item, collapse...


          if (_this.item !== clickedItem) {
            _this.collapse();
          }
        }
      }); // Check if the url can be found in one of the children of this item
      // Required for onInit case (i.e switching theme customizer menu layout)


      if (this.confirmUrlInChildren(this.item, this._router.url)) {
        this.expand();
      } else {
        this.collapse();
      }
    }
    /**
     * On destroy
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      // Unsubscribe from all subscriptions
      this._unsubscribeAll.next();

      this._unsubscribeAll.complete();
    } // Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle collapse
     *
     * @param e
     */

  }, {
    key: "toggleOpen",
    value: function toggleOpen(e) {
      e.preventDefault();
      this.isOpen = !this.isOpen; // Menu collapse toggled...

      this._coreMenuService.onItemCollapsed.next(this.item);

      this._coreMenuService.onItemCollapseToggled.next();
    }
    /**
     * Expand the collapsible menu
     */

  }, {
    key: "expand",
    value: function expand() {
      if (this.isOpen) {
        return;
      }

      this.isOpen = true; // Mark for check

      this._changeDetectorRef.markForCheck();

      this._coreMenuService.onItemCollapseToggled.next();
    }
    /**
     * Collapse the collapsible menu
     */

  }, {
    key: "collapse",
    value: function collapse() {
      if (!this.isOpen) {
        return;
      }

      this.isOpen = false; // Mark for check

      this._changeDetectorRef.markForCheck();

      this._coreMenuService.onItemCollapseToggled.next();
    }
    /**
     * Confirms if the provided url can be found in one of the given parent's children
     *
     * @param parent
     * @param url
     * @returns {boolean}
     */

  }, {
    key: "confirmUrlInChildren",
    value: function confirmUrlInChildren(parent, url) {
      var children = parent.children; // Return false if parent don't have any children

      if (!children) {
        return false;
      } // Loop all the children


      var _iterator = (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__["default"])(children),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var child = _step.value;

          // If children has child (Sub to sub item url)
          if (child.children) {
            // Call function again with child
            if (this.confirmUrlInChildren(child, url)) {
              return true;
            }
          } // If child.url is same as provided url


          if (child.url === url || url.includes(child.url)) {
            return true;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return false;
    }
    /**
     * Check if the provided parent has the provided item in one of its children
     *
     * @param parent
     * @param item
     * @returns {boolean}
     */

  }, {
    key: "confirmItemInChildren",
    value: function confirmItemInChildren(parent, item) {
      var children = parent.children; // Return false if parent don't have any children

      if (!children) {
        return false;
      } // Return true parent has the provided item in one of its children


      if (children.indexOf(item) > -1) {
        return true;
      }

      var _iterator2 = (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__["default"])(children),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var child = _step2.value;

          if (child.children) {
            // Call function again with child (for sub to sub item)
            if (this.confirmItemInChildren(child, item)) {
              return true;
            }
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return false;
    }
  }]);

  return CoreMenuVerticalCollapsibleComponent;
}();

CoreMenuVerticalCollapsibleComponent.ɵfac = function CoreMenuVerticalCollapsibleComponent_Factory(t) {
  return new (t || CoreMenuVerticalCollapsibleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_components_core_menu_core_menu_service__WEBPACK_IMPORTED_MODULE_3__.CoreMenuService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef));
};

CoreMenuVerticalCollapsibleComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: CoreMenuVerticalCollapsibleComponent,
  selectors: [["", "core-menu-vertical-collapsible", ""]],
  hostVars: 2,
  hostBindings: function CoreMenuVerticalCollapsibleComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("open", ctx.isOpen);
    }
  },
  inputs: {
    item: "item"
  },
  attrs: _c0,
  decls: 1,
  vars: 1,
  consts: [[4, "ngIf"], ["class", "d-flex align-items-center", 3, "ngClass", "click", 4, "ngIf"], ["itemContent", ""], [1, "menu-content"], [4, "ngFor", "ngForOf"], [1, "d-flex", "align-items-center", 3, "ngClass", "click"], [4, "ngTemplateOutlet"], [3, "data-feather", 4, "ngIf"], [1, "menu-title", "text-truncate", 3, "translate"], ["class", "badge ml-auto mr-1", 3, "translate", "ngClass", 4, "ngIf"], [3, "data-feather"], [1, "badge", "ml-auto", "mr-1", 3, "translate", "ngClass"], ["core-menu-vertical-item", "", 3, "item", "ngClass", "routerLinkActive", "routerLinkActiveOptions", 4, "ngIf"], ["core-menu-vertical-collapsible", "", "class", "nav-item has-sub", 3, "item", 4, "ngIf"], ["core-menu-vertical-item", "", 3, "item", "ngClass", "routerLinkActive", "routerLinkActiveOptions"], [1, "d-none", 3, "routerLink"], ["core-menu-vertical-collapsible", "", 1, "nav-item", "has-sub", 3, "item"]],
  template: function CoreMenuVerticalCollapsibleComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, CoreMenuVerticalCollapsibleComponent_ng_container_0_Template, 6, 2, "ng-container", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.item.hidden);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgTemplateOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkActive, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_13__.DefaultClassDirective, _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_4__.FeatherIconDirective, _core_components_core_menu_vertical_item_item_component__WEBPACK_IMPORTED_MODULE_5__.CoreMenuVerticalItemComponent, CoreMenuVerticalCollapsibleComponent],
  encapsulation: 2
});

/***/ }),

/***/ 86365:
/*!************************************************************************!*\
  !*** ./src/@core/components/core-menu/vertical/item/item.component.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreMenuVerticalItemComponent": function() { return /* binding */ CoreMenuVerticalItemComponent; }
/* harmony export */ });
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/extended */ 1570);
/* harmony import */ var _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/directives/core-feather-icons/core-feather-icons */ 66279);








var _c0 = ["core-menu-vertical-item", ""];

function CoreMenuVerticalItemComponent_ng_container_0_a_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
  }
}

var _c1 = function _c1(a0) {
  return [a0];
};

function CoreMenuVerticalItemComponent_ng_container_0_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CoreMenuVerticalItemComponent_ng_container_0_a_1_ng_container_1_Template, 1, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);

    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r1.item.classes)("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](4, _c1, ctx_r1.item.url))("target", ctx_r1.item.openInNewTab ? "_blank" : "_self");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r3);
  }
}

function CoreMenuVerticalItemComponent_ng_container_0_a_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
  }
}

function CoreMenuVerticalItemComponent_ng_container_0_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CoreMenuVerticalItemComponent_ng_container_0_a_2_ng_container_1_Template, 1, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);

    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r2.item.classes)("href", ctx_r2.item.url, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("target", ctx_r2.item.openInNewTab ? "_blank" : "_self");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r3);
  }
}

function CoreMenuVerticalItemComponent_ng_container_0_ng_template_3_span_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 10);
  }

  if (rf & 2) {
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data-feather", ctx_r7.item.icon);
  }
}

function CoreMenuVerticalItemComponent_ng_container_0_ng_template_3_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("translate", ctx_r8.item.badge.translate)("ngClass", ctx_r8.item.badge.classes);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r8.item.badge.title, " ");
  }
}

function CoreMenuVerticalItemComponent_ng_container_0_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, CoreMenuVerticalItemComponent_ng_container_0_ng_template_3_span_0_Template, 1, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, CoreMenuVerticalItemComponent_ng_container_0_ng_template_3_span_3_Template, 2, 3, "span", 9);
  }

  if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.item.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("translate", ctx_r4.item.translate);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r4.item.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.item.badge);
  }
}

function CoreMenuVerticalItemComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CoreMenuVerticalItemComponent_ng_container_0_a_1_Template, 2, 6, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CoreMenuVerticalItemComponent_ng_container_0_a_2_Template, 2, 4, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, CoreMenuVerticalItemComponent_ng_container_0_ng_template_3_Template, 4, 4, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.item.url && !ctx_r0.item.externalUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.item.url && ctx_r0.item.externalUrl);
  }
}

var CoreMenuVerticalItemComponent = /*#__PURE__*/(0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function CoreMenuVerticalItemComponent() {
  (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, CoreMenuVerticalItemComponent);
});

CoreMenuVerticalItemComponent.ɵfac = function CoreMenuVerticalItemComponent_Factory(t) {
  return new (t || CoreMenuVerticalItemComponent)();
};

CoreMenuVerticalItemComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: CoreMenuVerticalItemComponent,
  selectors: [["", "core-menu-vertical-item", ""]],
  inputs: {
    item: "item"
  },
  attrs: _c0,
  decls: 1,
  vars: 1,
  consts: [[4, "ngIf"], ["class", "d-flex align-items-center", 3, "ngClass", "routerLink", "target", 4, "ngIf"], ["class", "d-flex align-items-center", 3, "ngClass", "href", "target", 4, "ngIf"], ["itemContent", ""], [1, "d-flex", "align-items-center", 3, "ngClass", "routerLink", "target"], [4, "ngTemplateOutlet"], [1, "d-flex", "align-items-center", 3, "ngClass", "href", "target"], [3, "data-feather", 4, "ngIf"], [1, "menu-title", "text-truncate", 3, "translate"], ["class", "badge ml-auto mr-1", 3, "translate", "ngClass", 4, "ngIf"], [3, "data-feather"], [1, "badge", "ml-auto", "mr-1", 3, "translate", "ngClass"]],
  template: function CoreMenuVerticalItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, CoreMenuVerticalItemComponent_ng_container_0_Template, 5, 2, "ng-container", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.item.hidden);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgTemplateOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__.DefaultClassDirective, _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_2__.FeatherIconDirective],
  encapsulation: 2
});

/***/ }),

/***/ 9380:
/*!******************************************************************************!*\
  !*** ./src/@core/components/core-menu/vertical/section/section.component.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreMenuVerticalSectionComponent": function() { return /* binding */ CoreMenuVerticalSectionComponent; }
/* harmony export */ });
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/directives/core-feather-icons/core-feather-icons */ 66279);






var _c0 = ["core-menu-vertical-section", ""];

function CoreMenuVerticalSectionComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("translate", ctx_r0.item.translate);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.item.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data-feather", "more-horizontal");
  }
}

var CoreMenuVerticalSectionComponent = /*#__PURE__*/(0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function CoreMenuVerticalSectionComponent() {
  (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, CoreMenuVerticalSectionComponent);
});

CoreMenuVerticalSectionComponent.ɵfac = function CoreMenuVerticalSectionComponent_Factory(t) {
  return new (t || CoreMenuVerticalSectionComponent)();
};

CoreMenuVerticalSectionComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: CoreMenuVerticalSectionComponent,
  selectors: [["", "core-menu-vertical-section", ""]],
  inputs: {
    item: "item"
  },
  attrs: _c0,
  decls: 1,
  vars: 1,
  consts: [[4, "ngIf"], [1, "navigation-section-text", 3, "translate"], [3, "data-feather"]],
  template: function CoreMenuVerticalSectionComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, CoreMenuVerticalSectionComponent_ng_container_0_Template, 4, 3, "ng-container", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.item.hidden);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateDirective, _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_2__.FeatherIconDirective],
  encapsulation: 2
});

/***/ }),

/***/ 9831:
/*!*********************************************************************!*\
  !*** ./src/@core/components/core-sidebar/core-sidebar.component.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreSidebarComponent": function() { return /* binding */ CoreSidebarComponent; }
/* harmony export */ });
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/animations */ 31631);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 85921);
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/config.service */ 52553);
/* harmony import */ var _core_services_media_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/media.service */ 42826);
/* harmony import */ var _core_components_core_sidebar_core_sidebar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/components/core-sidebar/core-sidebar.service */ 66841);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout */ 75722);













var _c0 = ["*"];
var CoreSidebarComponent = /*#__PURE__*/function () {
  /**
   * Constructor
   *
   * @param {DOCUMENT} document
   * @param {Renderer2} _renderer
   * @param {ElementRef} _elementRef
   * @param {CoreConfigService} _coreConfigService
   * @param {ChangeDetectorRef} _changeDetectorRef
   * @param {CoreMediaService} _coreMediaService
   * @param {CoreSidebarService} _coreSidebarService
   * @param {AnimationBuilder} _animationBuilder
   * @param {MediaObserver} _mediaObserver
   */
  function CoreSidebarComponent(document, _renderer, _elementRef, _coreConfigService, _changeDetectorRef, _coreMediaService, _coreSidebarService, _animationBuilder, _mediaObserver) {
    (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CoreSidebarComponent);

    this.document = document;
    this._renderer = _renderer;
    this._elementRef = _elementRef;
    this._coreConfigService = _coreConfigService;
    this._changeDetectorRef = _changeDetectorRef;
    this._coreMediaService = _coreMediaService;
    this._coreSidebarService = _coreSidebarService;
    this._animationBuilder = _animationBuilder;
    this._mediaObserver = _mediaObserver;
    this._overlay = null; // Set Defaults

    this.isOpened = false;
    this.overlayVisibility = true;
    this.hideOnEsc = false; // Layout root element

    this.rootElement = this.document.querySelectorAll('.vertical-layout')[0] || this.document.querySelectorAll('.horizontal-layout')[0];
    this.collapsedChangedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.openedChangedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter(); // Set Private Defaults

    this._collapsed = false;
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
  }

  (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(CoreSidebarComponent, [{
    key: "onKeydownHandler",
    value: function onKeydownHandler(event) {
      if (this.hideOnEsc) {
        this.close();
      }
    } // Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Collapsed
     *
     * @param {boolean} value
     */

  }, {
    key: "collapsed",
    get: function get() {
      return this._collapsed;
    } // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ,
    set: function set(value) {
      // Set the collapsed value
      this._collapsed = value; // If the sidebar is closed, return

      if (!this.isOpened) {
        this.rootElement.classList.add('menu-expanded'); // Add menu expanded class default

        return;
      } // If Collapsed


      if (value) {
        // Collapse the sidebar
        this.collapse(); // Add menu-collapsed in body and remove menu-expanded

        this.rootElement.classList.add('menu-collapsed');
        this.rootElement.classList.remove('menu-expanded');
      } // If Expanded
      else {
        // Expanded the sidebar
        this.expand(); // Add menu-expanded in body and remove menu-collapsed

        this.rootElement.classList.add('menu-expanded');
        this.rootElement.classList.remove('menu-collapsed');
      } // Emit the 'collapsedChangedEvent' event


      this.collapsedChangedEvent.emit(this.collapsed);
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      // Subscribe to app-config changes
      this._coreConfigService.config.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._unsubscribeAll)).subscribe(function (config) {
        _this._coreConfig = config;

        if (config.layout.type == 'vertical') {
          _this.menuClass = 'vertical-menu-modern';
        } else {
          _this.menuClass = 'horizontal-menu';
        }
      }); // Register the sidebar


      this._coreSidebarService.setSidebarRegistry(this.name, this); // Setup collapsibleSidebar


      this._setupCollapsibleSidebar(); // Default collapsed


      this._defaultCollapsed();
    }
    /**
     * On destroy
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      // If the sidebar is collapsed, expand it to reset changes
      if (this.collapsed) {
        this.expand();
      } // Remove sidebar registry


      this._coreSidebarService.removeSidebarRegistry(this.name); // Unsubscribe from all subscriptions


      this._unsubscribeAll.next();

      this._unsubscribeAll.complete();
    } // Private Methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Setup the collapsible sidebar handler
     *
     * @private
     */

  }, {
    key: "_setupCollapsibleSidebar",
    value: function _setupCollapsibleSidebar() {
      var _this2 = this;

      // Return if the collapsible sidebar breakpoint was not set from the layout
      if (!this.collapsibleSidebar) {
        return;
      } // Set the _wasCollapsible false for the first time


      this._wasCollapsible = false; // Set the wasCollapsed from the layout

      this._wasCollapsed = this.collapsed; // On every media(screen) change

      this._coreMediaService.onMediaUpdate.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._unsubscribeAll)).subscribe(function () {
        // Get the collapsible status
        var isCollapsible = _this2._mediaObserver.isActive(_this2.collapsibleSidebar); //! On screen resize set the config collapsed state if we have else this.collapsed


        _this2._wasCollapsed = _this2._coreConfig.layout.menu.collapsed || _this2.collapsed; // If sidebar is not collapsible, switch to overlay menu (On page load without resize the window)
        // ? Improve this menu condition

        if (!isCollapsible && _this2.name === 'menu') {
          _this2.rootElement.classList.remove(_this2.menuClass);

          _this2.rootElement.classList.add('vertical-overlay-menu');
        } // If the both status are the same, then return


        if (_this2._wasCollapsible === isCollapsible) {
          return;
        } // If isCollapsible is true, use collapsible sidebar


        if (isCollapsible) {
          // Set the collapsibleSidebar status
          _this2.iscollapsibleSidebar = true; // Set the the opened status to true

          _this2.isOpened = true;
          _this2.expanded = true; // Adde expanded class init
          // Emit the 'openedChangedEvent' event

          _this2.openedChangedEvent.emit(_this2.isOpened); // If the sidebar was collapsed, forcefully collapse it again


          if (_this2._wasCollapsed) {
            // Collapse
            _this2.collapsed = true;
            _this2.expanded = false; // Remove expanded class
            // Change detector

            _this2._changeDetectorRef.markForCheck();
          } // If sidebar is collapsible, switch to collapsible menu (modern-menu)


          if (_this2.name === 'menu') {
            _this2.rootElement.classList.add(_this2.menuClass);

            _this2.rootElement.classList.remove('vertical-overlay-menu', 'menu-hide');
          } // Hide the overlay if any exists


          _this2._hideOverlay();
        } // Else use overlay sidebar
        else {
          // Set the collapsibleSidebar status
          _this2.iscollapsibleSidebar = false; // Expanded the sidebar in case if it was collapsed

          _this2.expand(); // Force the the opened status to close


          _this2.isOpened = false; // Emit the 'openedChangedEvent' event

          _this2.openedChangedEvent.emit(_this2.isOpened); // If sidebar is not collapsible, switch to overlay menu (On window resize)


          _this2.rootElement.classList.remove(_this2.menuClass);

          _this2.rootElement.classList.add('vertical-overlay-menu'); // Hide the sidebar


          _this2._hideSidebar();
        } // Set the new active status


        _this2._wasCollapsible = isCollapsible;
      });
    }
    /**
     * Setup the initial collapsed status
     *
     * @private
     */

  }, {
    key: "_defaultCollapsed",
    value: function _defaultCollapsed() {
      // Return, if sidebar is not collapsed
      if (!this.collapsed) {
        return;
      } // Return if the sidebar is closed


      if (!this.isOpened) {
        return;
      } // Collapse the sidebar


      this.collapse();
    }
    /**
     * Show the overlay
     *
     * @private
     */

  }, {
    key: "_showOverlay",
    value: function _showOverlay() {
      var _this3 = this;

      // Create the overlay element
      this._overlay = this._renderer.createElement('div'); // Add a class to the overlay element and make it visible

      this._overlay.classList.add(this.overlayClass);

      this._overlay.classList.add('show'); // If overlayVisibility is false, set the bg transparent


      if (!this.overlayVisibility) {
        this._overlay.classList.add('bg-transparent');
      } // Append the overlay element to the parent element of the sidebar


      this._renderer.appendChild(this._elementRef.nativeElement.parentElement, this._overlay); // Overlay enter animation and attach it to the animationPlayer


      this._animationPlayer = this._animationBuilder.build([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)('300ms ease', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
        opacity: 1
      }))]).create(this._overlay); // Play the overlay animation

      this._animationPlayer.play(); // Add an event listener to the overlay, on click of it close the sidebar


      this._overlay.addEventListener('click', function () {
        _this3.close();
      }); // Change detector


      this._changeDetectorRef.markForCheck();
    }
    /**
     * Hide the overlay
     *
     * @private
     */

  }, {
    key: "_hideOverlay",
    value: function _hideOverlay() {
      var _this4 = this;

      // If overlay is already hidden, return
      if (!this._overlay) {
        return;
      } // Overlay leave animation and attach it to the animationPlayer


      this._animationPlayer = this._animationBuilder.build([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)('300ms ease', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
        opacity: 0
      }))]).create(this._overlay); // Play the overlay leave animation

      this._animationPlayer.play(); // Once the animation is done...


      this._animationPlayer.onDone(function () {
        // If the overlay still exists...
        if (_this4._overlay) {
          // Remove the overlay
          _this4._overlay.parentNode.removeChild(_this4._overlay);

          _this4._overlay = null;
        }
      }); // Change detector


      this._changeDetectorRef.markForCheck();
    }
    /**
     * Change sidebar properties to make it visible
     *
     * @private
     */

  }, {
    key: "_showSidebar",
    value: function _showSidebar() {
      // If menu as sidebar, add relevant classes to body to show menu
      if (this.name == 'menu') {
        // Open overlay menu
        this.rootElement.classList.add('menu-open');
        this.rootElement.classList.remove('menu-hide');
      } // For default sidebar add show class to make it visible
      else {
        this._renderer.addClass(this._elementRef.nativeElement, 'show'); // Add .modal-open from body to remove browser scroll


        if (this.overlayClass === 'modal-backdrop') {
          this.rootElement.classList.add('modal-open');
        }
      } // Change detector


      this._changeDetectorRef.markForCheck();
    }
    /**
     * Change sidebar properties to make it invisible
     *
     * @private
     */

  }, {
    key: "_hideSidebar",
    value: function _hideSidebar() {
      // If menu as sidebar, add relevant classes to body to show menu
      if (this.name == 'menu') {
        // Hide overlay menu
        this.rootElement.classList.remove('menu-open');
        this.rootElement.classList.add('menu-hide');
      } // For default sidebar remove show class to make it visible
      else {
        this._renderer.removeClass(this._elementRef.nativeElement, 'show'); // Remove .modal-open from body


        if (this.overlayClass === 'modal-backdrop') {
          this.rootElement.classList.remove('modal-open');
        }
      } // Change detector


      this._changeDetectorRef.markForCheck();
    } // Public Methods
    // -----------------------------------------------------------------------------------------------------
    // For Collapsible Sidebar

    /**
     * Collapse the temporarily expanded sidebar
     */

  }, {
    key: "collapseTemporarily",
    value: function collapseTemporarily() {
      // Only work if the sidebar is collapsed
      if (!this.collapsed) {
        return;
      } // Collapse the sidebar back


      this.expanded = false;
      this.collapsed = true; // Set the menu collapsed while collapsed temp.
      // Change detector

      this._changeDetectorRef.markForCheck();
    }
    /**
     * Expanded the sidebar temporarily
     */

  }, {
    key: "expandTemporarily",
    value: function expandTemporarily() {
      // Only work if the sidebar is collapsed
      if (!this.collapsed) {
        return;
      } // Expanded the sidebar temporarily


      this.expanded = true;
      this.collapsed = true; // Set the menu collapsed while collapsed temp.
      // Change detector

      this._changeDetectorRef.markForCheck();
    }
    /**
     * On Sidebar's Mouseenter Event
     */

  }, {
    key: "onMouseEnter",
    value: function onMouseEnter() {
      // Expand the sidebar temporarily
      this.expandTemporarily();
    }
    /**
     * On Sidebar's Mouseleave Event
     */

  }, {
    key: "onMouseLeave",
    value: function onMouseLeave() {
      // Collapse the sidebar temporarily
      this.collapseTemporarily();
    }
    /**
     * Collapse the sidebar permanently
     */

  }, {
    key: "collapse",
    value: function collapse() {
      // If the sidebar is not collapsed
      if (this.collapsed) {
        return;
      } // Set collapse true


      this.collapsed = true; // Change detector

      this._changeDetectorRef.markForCheck();
    }
    /**
     * Expanded the sidebar permanently
     */

  }, {
    key: "expand",
    value: function expand() {
      // If the sidebar is collapsed
      if (!this.collapsed) {
        return;
      } // Set collapse false (expanded)


      this.collapsed = false; // Change detector

      this._changeDetectorRef.markForCheck();
    }
    /**
     * Toggle the sidebar expand/collapse permanently
     */

  }, {
    key: "toggleCollapsible",
    value: function toggleCollapsible() {
      if (this.collapsed) {
        this.expand();
      } else {
        this.collapse();
      }
    } // For Overlay Sidebar

    /**
     * Open the sidebar
     */

  }, {
    key: "open",
    value: function open() {
      // If sidebar already open or collapsible, then return
      if (this.isOpened || this.iscollapsibleSidebar) {
        return;
      } // Show the sidebar


      this._showSidebar(); // Show the overlay


      this._showOverlay(); // Set the sidebar opened status


      this.isOpened = true; // Emit the 'openedChangedEvent' event

      this.openedChangedEvent.emit(this.isOpened); // Change detector

      this._changeDetectorRef.markForCheck();
    }
    /**
     * Close the sidebar
     */

  }, {
    key: "close",
    value: function close() {
      // If sidebar is not open or collapsible, then return
      if (!this.isOpened || this.iscollapsibleSidebar) {
        return;
      } // Hide the overlay


      this._hideOverlay(); // Set the opened status


      this.isOpened = false; // Emit the 'openedChangedEvent' event

      this.openedChangedEvent.emit(this.isOpened); // Hide overlay menu

      this._hideSidebar(); // Change detector


      this._changeDetectorRef.markForCheck();
    }
    /**
     * Toggle open/close the sidebar
     */

  }, {
    key: "toggleOpen",
    value: function toggleOpen() {
      if (this.isOpened) {
        this.close();
      } else {
        this.open();
      }
    }
  }]);

  return CoreSidebarComponent;
}();

CoreSidebarComponent.ɵfac = function CoreSidebarComponent_Factory(t) {
  return new (t || CoreSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_config_service__WEBPACK_IMPORTED_MODULE_2__.CoreConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_media_service__WEBPACK_IMPORTED_MODULE_3__.CoreMediaService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_components_core_sidebar_core_sidebar_service__WEBPACK_IMPORTED_MODULE_4__.CoreSidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_animations__WEBPACK_IMPORTED_MODULE_8__.AnimationBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__.MediaObserver));
};

CoreSidebarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: CoreSidebarComponent,
  selectors: [["core-sidebar"]],
  hostVars: 2,
  hostBindings: function CoreSidebarComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keydown.escape", function CoreSidebarComponent_keydown_escape_HostBindingHandler($event) {
        return ctx.onKeydownHandler($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresolveDocument"])("mouseenter", function CoreSidebarComponent_mouseenter_HostBindingHandler() {
        return ctx.onMouseEnter();
      })("mouseleave", function CoreSidebarComponent_mouseleave_HostBindingHandler() {
        return ctx.onMouseLeave();
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("expanded", ctx.expanded);
    }
  },
  inputs: {
    name: "name",
    overlayClass: "overlayClass",
    collapsibleSidebar: "collapsibleSidebar",
    overlayVisibility: "overlayVisibility",
    hideOnEsc: "hideOnEsc",
    collapsed: "collapsed"
  },
  outputs: {
    collapsedChangedEvent: "collapsedChangedEvent",
    openedChangedEvent: "openedChangedEvent"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function CoreSidebarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojection"](0);
    }
  },
  encapsulation: 2
});

/***/ }),

/***/ 39698:
/*!******************************************************************!*\
  !*** ./src/@core/components/core-sidebar/core-sidebar.module.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreSidebarModule": function() { return /* binding */ CoreSidebarModule; }
/* harmony export */ });
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _core_components_core_sidebar_core_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/core-sidebar/core-sidebar.component */ 9831);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




var CoreSidebarModule = /*#__PURE__*/(0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function CoreSidebarModule() {
  (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, CoreSidebarModule);
});

CoreSidebarModule.ɵfac = function CoreSidebarModule_Factory(t) {
  return new (t || CoreSidebarModule)();
};

CoreSidebarModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: CoreSidebarModule
});
CoreSidebarModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CoreSidebarModule, {
    declarations: [_core_components_core_sidebar_core_sidebar_component__WEBPACK_IMPORTED_MODULE_2__.CoreSidebarComponent],
    exports: [_core_components_core_sidebar_core_sidebar_component__WEBPACK_IMPORTED_MODULE_2__.CoreSidebarComponent]
  });
})();

/***/ }),

/***/ 66841:
/*!*******************************************************************!*\
  !*** ./src/@core/components/core-sidebar/core-sidebar.service.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreSidebarService": function() { return /* binding */ CoreSidebarService; }
/* harmony export */ });
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



var CoreSidebarService = /*#__PURE__*/function () {
  function CoreSidebarService() {
    (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CoreSidebarService);

    // Private
    this._registry = {};
  }
  /**
   * Get the sidebar with the given key
   *
   * @param key
   * @returns {CoreSidebarComponent}
   */


  (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(CoreSidebarService, [{
    key: "getSidebarRegistry",
    value: function getSidebarRegistry(key) {
      // Check if the sidebar registered
      if (!this._registry[key]) {
        console.warn("The sidebar with the key '".concat(key, "' doesn't exist in the registry."));
        return;
      } // Return the sidebar


      return this._registry[key];
    }
    /**
     * Set the sidebar to the registry
     *
     * @param key
     * @param sidebar
     */

  }, {
    key: "setSidebarRegistry",
    value: function setSidebarRegistry(key, sidebar) {
      // Check if the key already being used
      if (this._registry[key]) {
        console.error("The sidebar with the key '".concat(key, "' already exists. Either unregister it first or use a unique key."));
        return;
      } // Set to the registry


      this._registry[key] = sidebar;
    }
    /**
     * Remove the sidebar from the registry
     *
     * @param key
     */

  }, {
    key: "removeSidebarRegistry",
    value: function removeSidebarRegistry(key) {
      // Check if the sidebar registered
      if (!this._registry[key]) {
        console.warn("The sidebar with the key '".concat(key, "' doesn't exist in the registry."));
      } // Unregister the sidebar


      delete this._registry[key];
    }
  }]);

  return CoreSidebarService;
}();

CoreSidebarService.ɵfac = function CoreSidebarService_Factory(t) {
  return new (t || CoreSidebarService)();
};

CoreSidebarService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: CoreSidebarService,
  factory: CoreSidebarService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 71805:
/*!*************************************************************************!*\
  !*** ./src/@core/components/core-touchspin/core-touchspin.component.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreTouchspinComponent": function() { return /* binding */ CoreTouchspinComponent; }
/* harmony export */ });
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/extended */ 1570);
/* harmony import */ var _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/directives/core-feather-icons/core-feather-icons */ 66279);









function CoreTouchspinComponent_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 8);
  }
}

function CoreTouchspinComponent_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 9);
  }
}

function CoreTouchspinComponent_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 10);
  }
}

function CoreTouchspinComponent_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 11);
  }
}

var _c0 = function _c0(a0, a1) {
  return {
    "touchspin-sm": a0,
    "touchspin-lg": a1
  };
};

var _c1 = function _c1(a0, a1, a2, a3) {
  return {
    "btn-info": a0,
    "btn-warning": a1,
    "btn-success": a2,
    "btn-danger": a3
  };
};

var CoreTouchspinComponent = /*#__PURE__*/function () {
  function CoreTouchspinComponent() {
    (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CoreTouchspinComponent);

    this.numberValue = 0;
    this.iconChevron = false;
    this.disabledValue = false;
    this.size = '';
    this.color = '';
    this.maxValue = 9999;
    this.minValue = 0;
    this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.disabledValueIncrement = false;
    this.disabledValueDecrement = false;
  }

  (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(CoreTouchspinComponent, [{
    key: "inputChange",
    value: function inputChange(inputValue) {
      if (inputValue == this.maxValue || inputValue > this.maxValue) {
        this.disabledValueIncrement = true;
      } else {
        this.disabledValueIncrement = false;
      }

      if (inputValue == this.minValue || inputValue < this.minValue) {
        this.disabledValueDecrement = true;
      } else {
        this.disabledValueDecrement = false;
      }

      this.emitChange(inputValue);
    }
  }, {
    key: "increment",
    value: function increment() {
      if (this.stepValue == undefined) {
        this.numberValue += 1;
      } else {
        this.numberValue += this.stepValue;
      }

      this.emitChange(this.numberValue);

      if (!(this.minValue == undefined || this.maxValue == undefined)) {
        if (this.numberValue == this.maxValue || this.numberValue > this.maxValue) {
          this.disabledValueIncrement = true;
        } else {
          this.disabledValueIncrement = false;
        }

        if (this.numberValue > this.minValue) {
          this.disabledValueDecrement = false;
        } else {
          this.disabledValueDecrement = true;
        }
      }
    }
  }, {
    key: "decrement",
    value: function decrement() {
      if (this.stepValue == undefined) {
        this.numberValue -= 1;
      } else {
        this.numberValue -= this.stepValue;
      }

      this.emitChange(this.numberValue);

      if (!(this.minValue == undefined || this.maxValue == undefined)) {
        if (this.numberValue == this.minValue || this.numberValue < this.minValue) {
          this.disabledValueDecrement = true;
        } else {
          this.disabledValueDecrement = false;
        }

        if (this.numberValue < this.maxValue) {
          this.disabledValueIncrement = false;
        } else {
          this.disabledValueIncrement = true;
        }
      }
    }
    /**
     * Emit changed value
     * @param value
     */

  }, {
    key: "emitChange",
    value: function emitChange(value) {
      this.onChange.emit(value);
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      this.disabledValueIncrement = this.disabledValue;
      this.disabledValueDecrement = this.disabledValue; // Check if current value is equal to min / max value then disable button respectively

      if (this.numberValue === this.minValue) {
        this.disabledValueDecrement = true;
      } else if (this.numberValue === this.maxValue) {
        this.disabledValueIncrement = true;
      }
    }
  }]);

  return CoreTouchspinComponent;
}();

CoreTouchspinComponent.ɵfac = function CoreTouchspinComponent_Factory(t) {
  return new (t || CoreTouchspinComponent)();
};

CoreTouchspinComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: CoreTouchspinComponent,
  selectors: [["core-touchspin"]],
  inputs: {
    numberValue: "numberValue",
    iconChevron: "iconChevron",
    disabledValue: ["disable", "disabledValue"],
    size: "size",
    color: "color",
    stepValue: "stepValue",
    maxValue: "maxValue",
    minValue: "minValue"
  },
  outputs: {
    onChange: "onChange"
  },
  decls: 8,
  vars: 28,
  consts: [[1, "btn-group", "touchspin-wrapper", 3, "ngClass"], [1, "btn", "btn-sm", "btn-primary", "btn-touchspin", "btn-touchspin-down", 3, "disabled", "ngClass", "click"], ["data-feather", "minus", 4, "ngIf"], ["data-feather", "chevron-down", 4, "ngIf"], ["type", "number", "pattern", "\\d*", "maxlength", "4", 1, "form-control", 3, "ngModel", "value", "disabled", "step", "min", "max", "ngModelChange", "input"], [1, "btn", "btn-sm", "btn-primary", "btn-touchspin", "btn-touchspin-up", 3, "disabled", "ngClass", "click"], ["data-feather", "plus", 4, "ngIf"], ["data-feather", "chevron-up", 4, "ngIf"], ["data-feather", "minus"], ["data-feather", "chevron-down"], ["data-feather", "plus"], ["data-feather", "chevron-up"]],
  template: function CoreTouchspinComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CoreTouchspinComponent_Template_button_click_1_listener() {
        return ctx.decrement();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CoreTouchspinComponent_span_2_Template, 1, 0, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, CoreTouchspinComponent_span_3_Template, 1, 0, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CoreTouchspinComponent_Template_input_ngModelChange_4_listener($event) {
        return ctx.numberValue = $event;
      })("input", function CoreTouchspinComponent_Template_input_input_4_listener($event) {
        return ctx.inputChange($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CoreTouchspinComponent_Template_button_click_5_listener() {
        return ctx.increment();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, CoreTouchspinComponent_span_6_Template, 1, 0, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, CoreTouchspinComponent_span_7_Template, 1, 0, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](15, _c0, ctx.size == "sm", ctx.size == "lg"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.disabledValueDecrement)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction4"](18, _c1, ctx.color == "info", ctx.color == "warning", ctx.color == "success", ctx.color == "danger"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.iconChevron);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.iconChevron);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", ctx.numberValue);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.numberValue)("disabled", ctx.disabledValue)("step", ctx.stepValue)("min", ctx.minValue)("max", ctx.maxValue);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.disabledValueIncrement)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction4"](23, _c1, ctx.color == "info", ctx.color == "warning", ctx.color == "success", ctx.color == "danger"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.iconChevron);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.iconChevron);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__.DefaultClassDirective, _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_2__.FeatherIconDirective],
  styles: [".touchspin-wrapper {\n  width: 8.4rem;\n}\n.touchspin-wrapper .btn-touchspin {\n  z-index: 1;\n  padding: 0;\n  min-width: 20px;\n  height: 20px;\n  border-radius: 5px !important;\n  position: relative;\n  top: 4px;\n}\n.touchspin-wrapper .btn-touchspin span {\n  position: relative;\n  top: 1px;\n}\n.touchspin-wrapper .btn-touchspin.btn-touchspin-down {\n  left: 10px;\n}\n.touchspin-wrapper .btn-touchspin.btn-touchspin-up {\n  right: 10px;\n}\n.touchspin-wrapper .form-control {\n  padding: 5px;\n  height: auto;\n  border-radius: 5px !important;\n  border: 0 !important;\n  background-color: #f8f8f8;\n  text-align: center;\n  font-weight: 500;\n}\n.touchspin-wrapper .form-control:focus {\n  box-shadow: none;\n}\n.touchspin-wrapper.touchspin-lg {\n  width: 9.375rem;\n}\n.touchspin-wrapper.touchspin-lg .btn-touchspin {\n  min-width: 24px;\n  height: 24px;\n  top: 5px;\n}\n.touchspin-wrapper.touchspin-lg .form-control {\n  padding: 9px;\n  height: auto;\n}\n.touchspin-wrapper.touchspin-sm {\n  width: 6.25rem;\n}\n.touchspin-wrapper.touchspin-sm .btn-touchspin {\n  min-width: 16px;\n  height: 16px;\n  top: 4px;\n}\n.touchspin-wrapper.touchspin-sm .form-control {\n  padding: 2px;\n  height: auto;\n}\n.dark-layout .touchspin-wrapper .form-control {\n  background-color: #161d31;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUtdG91Y2hzcGluLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vc2Nzcy9iYXNlL2Jvb3RzdHJhcC1leHRlbmRlZC9fdmFyaWFibGVzLnNjc3MiLCIuLi8uLi9zY3NzL2Jhc2UvY29tcG9uZW50cy9fdmFyaWFibGVzLWRhcmsuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQkE7RUFDRSxhQVowQjtBQUw1QjtBQW1CRTtFQUNFLFVBQUE7RUFDQSxVQUFBO0VBQ0EsZUFiNEI7RUFjNUIsWUFiNkI7RUFjN0IsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUFqQko7QUFtQkk7RUFDRSxrQkFBQTtFQUNBLFFBQUE7QUFqQk47QUFtQkk7RUFDRSxVQUFBO0FBakJOO0FBbUJJO0VBQ0UsV0FBQTtBQWpCTjtBQXFCRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQ3NETTtFRHJETixrQkFBQTtFQUNBLGdCQUFBO0FBbkJKO0FBcUJJO0VBQ0UsZ0JBQUE7QUFuQk47QUF1QkU7RUFDRSxlQWpEMkI7QUE0Qi9CO0FBdUJJO0VBQ0UsZUEvQzZCO0VBZ0Q3QixZQS9DOEI7RUFnRDlCLFFBQUE7QUFyQk47QUF3Qkk7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQXRCTjtBQTBCRTtFQUNFLGNBL0QyQjtBQXVDL0I7QUEwQkk7RUFDRSxlQTVENkI7RUE2RDdCLFlBNUQ4QjtFQTZEOUIsUUFBQTtBQXhCTjtBQTJCSTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FBekJOO0FBa0NJO0VBQ0UseUJFM0VlO0FGNENyQiIsImZpbGUiOiJjb3JlLXRvdWNoc3Bpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL3Njc3MvYmFzZS9ib290c3RyYXAtZXh0ZW5kZWQvaW5jbHVkZSc7IC8vIENvbXBvbmVudHMgaW5jbHVkZXNcbkBpbXBvcnQgJy4uLy4uL3Njc3MvYmFzZS9jb21wb25lbnRzL2luY2x1ZGUnOyAvLyBDb21wb25lbnRzIGluY2x1ZGVzXG5cbi8vIHZhcmlhYmxlIGRlY2xhcmF0aW9uXG4kdG91Y2hzcGluLWJnLWNvbG9yOiAkYm9keS1iZztcbiR0b3VjaHNwaW4tZGFyay1iZy1jb2xvcjogJHRoZW1lLWRhcmstYm9keS1iZztcblxuJGJvb3RzdHJhcC10b3VjaHNwaW4td2lkdGg6IDguNHJlbTtcbiRib290c3RyYXAtdG91Y2hzcGluLXdpZHRoLWxnOiA5LjM3NXJlbTtcbiRib290c3RyYXAtdG91Y2hzcGluLXdpZHRoLXNtOiA2LjI1cmVtO1xuXG4kYm9vdHN0cmFwLXRvdWNoc3Bpbi1idG4td2lkdGg6IDIwcHg7XG4kYm9vdHN0cmFwLXRvdWNoc3Bpbi1idG4taGVpZ2h0OiAyMHB4O1xuJGJvb3RzdHJhcC10b3VjaHNwaW4tYnRuLXdpZHRoLWxnOiAyNHB4O1xuJGJvb3RzdHJhcC10b3VjaHNwaW4tYnRuLWhlaWdodC1sZzogMjRweDtcbiRib290c3RyYXAtdG91Y2hzcGluLWJ0bi13aWR0aC1zbTogMTZweDtcbiRib290c3RyYXAtdG91Y2hzcGluLWJ0bi1oZWlnaHQtc206IDE2cHg7XG5cbi50b3VjaHNwaW4td3JhcHBlciB7XG4gIHdpZHRoOiAkYm9vdHN0cmFwLXRvdWNoc3Bpbi13aWR0aDtcblxuICAuYnRuLXRvdWNoc3BpbiB7XG4gICAgei1pbmRleDogMTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1pbi13aWR0aDogJGJvb3RzdHJhcC10b3VjaHNwaW4tYnRuLXdpZHRoO1xuICAgIGhlaWdodDogJGJvb3RzdHJhcC10b3VjaHNwaW4tYnRuLWhlaWdodDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiA0cHg7XG5cbiAgICBzcGFuIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHRvcDogMXB4O1xuICAgIH1cbiAgICAmLmJ0bi10b3VjaHNwaW4tZG93biB7XG4gICAgICBsZWZ0OiAxMHB4O1xuICAgIH1cbiAgICAmLmJ0bi10b3VjaHNwaW4tdXAge1xuICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgfVxuICB9XG5cbiAgLmZvcm0tY29udHJvbCB7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcbiAgICBib3JkZXI6IDAgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdG91Y2hzcGluLWJnLWNvbG9yO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuXG4gICAgJjpmb2N1cyB7XG4gICAgICBib3gtc2hhZG93OiBub25lO1xuICAgIH1cbiAgfVxuXG4gICYudG91Y2hzcGluLWxnIHtcbiAgICB3aWR0aDogJGJvb3RzdHJhcC10b3VjaHNwaW4td2lkdGgtbGc7XG5cbiAgICAuYnRuLXRvdWNoc3BpbiB7XG4gICAgICBtaW4td2lkdGg6ICRib290c3RyYXAtdG91Y2hzcGluLWJ0bi13aWR0aC1sZztcbiAgICAgIGhlaWdodDogJGJvb3RzdHJhcC10b3VjaHNwaW4tYnRuLWhlaWdodC1sZztcbiAgICAgIHRvcDogNXB4O1xuICAgIH1cblxuICAgIC5mb3JtLWNvbnRyb2wge1xuICAgICAgcGFkZGluZzogOXB4O1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgIH1cbiAgfVxuXG4gICYudG91Y2hzcGluLXNtIHtcbiAgICB3aWR0aDogJGJvb3RzdHJhcC10b3VjaHNwaW4td2lkdGgtc207XG5cbiAgICAuYnRuLXRvdWNoc3BpbiB7XG4gICAgICBtaW4td2lkdGg6ICRib290c3RyYXAtdG91Y2hzcGluLWJ0bi13aWR0aC1zbTtcbiAgICAgIGhlaWdodDogJGJvb3RzdHJhcC10b3VjaHNwaW4tYnRuLWhlaWdodC1zbTtcbiAgICAgIHRvcDogNHB4O1xuICAgIH1cblxuICAgIC5mb3JtLWNvbnRyb2wge1xuICAgICAgcGFkZGluZzogMnB4O1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgIH1cbiAgfVxufVxuXG4vLyBkYXJrIGxheW91dCBzdHlsZVxuXG4uZGFyay1sYXlvdXQge1xuICAudG91Y2hzcGluLXdyYXBwZXIge1xuICAgIC5mb3JtLWNvbnRyb2wge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRvdWNoc3Bpbi1kYXJrLWJnLWNvbG9yO1xuICAgIH1cbiAgfVxufVxuIiwiLy8gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gIEZpbGUgTmFtZTogdmFyaWFibGVzLnNjc3Ncbi8vICBEZXNjcmlwdGlvbjogQ3VzdG9tIG92ZXJyaWRlcyBvZiBCb290c3RyYXAgdmFyaWFibGVzXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gIEl0ZW0gTmFtZTogVnVleHkgLSBWdWVqcywgUmVhY3QsIEFuZ3VsYXIsIEhUTUwgJiBMYXJhdmVsIEFkbWluIERhc2hib2FyZCBUZW1wbGF0ZVxuLy8gIEF1dGhvcjogUElYSU5WRU5UXG4vLyAgQXV0aG9yIFVSTDogaHR0cDovL3d3dy50aGVtZWZvcmVzdC5uZXQvdXNlci9waXhpbnZlbnRcbi8vICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy8gQ29sb3Igc3lzdGVtXG5cbiR3aGl0ZTogI2ZmZiAhZGVmYXVsdDtcbiRncmF5LTUwOiAjZjZmNmY2ICFkZWZhdWx0O1xuJGdyYXktMTAwOiAjYmFiZmM3ICFkZWZhdWx0OyAvLyAkZ3JheS1saWdodGVzdFxuJGdyYXktMjAwOiAjZWRlZGVkICFkZWZhdWx0OyAvLyAkZ3JheS1saWdodGVyXG4kZ3JheS0zMDA6ICNkYWUxZTcgIWRlZmF1bHQ7IC8vICRncmF5LWxpZ2h0XG4kZ3JheS00MDA6ICM2MzYzNjMgIWRlZmF1bHQ7XG4kZ3JheS01MDA6ICNhZGI1YmQgIWRlZmF1bHQ7XG4kZ3JheS02MDA6ICNiOGMyY2MgIWRlZmF1bHQ7IC8vICRncmF5XG4kZ3JheS03MDA6ICM0ZTUxNTQgIWRlZmF1bHQ7XG4kZ3JheS04MDA6ICMxZTFlMWUgIWRlZmF1bHQ7IC8vICRncmF5LWRhcmtcbiRncmF5LTkwMDogIzJhMmUzMCAhZGVmYXVsdDtcbiRibGFjazogIzIyMjkyZiAhZGVmYXVsdDsgLy8gMjMxZjQ4IDIyMjkyZlxuXG4kcHVycGxlOiAjNzM2N2YwICFkZWZhdWx0OyAvLyRwcmltYXJ5XG4kZ3JlZW46ICMyOGM3NmYgIWRlZmF1bHQ7IC8vJHN1Y2Nlc3NcbiRibHVlOiAjMDBjZmU4ICFkZWZhdWx0OyAvLyRpbmZvXG4kb3JhbmdlOiAjZmY5ZjQzICFkZWZhdWx0OyAvLyR3YXJuaW5nXG4kcmVkOiAjZWE1NDU1ICFkZWZhdWx0OyAvLyRkYW5nZXJcblxuJHByaW1hcnk6ICRwdXJwbGUgIWRlZmF1bHQ7XG4kc2Vjb25kYXJ5OiAjODI4NjhiICFkZWZhdWx0O1xuJGluZm86ICRibHVlICFkZWZhdWx0O1xuJHdhcm5pbmc6ICRvcmFuZ2UgIWRlZmF1bHQ7XG4kbGlnaHQ6ICRncmF5LTUwICFkZWZhdWx0O1xuJGRhcms6ICM0YjRiNGIgIWRlZmF1bHQ7XG5cbi8vIFNwYWNpbmdcbi8vXG4vLyBDb250cm9sIHRoZSBkZWZhdWx0IHN0eWxpbmcgb2YgbW9zdCBCb290c3RyYXAgZWxlbWVudHMgYnkgbW9kaWZ5aW5nIHRoZXNlXG4vLyB2YXJpYWJsZXMuIE1vc3RseSBmb2N1c2VkIG9uIHNwYWNpbmcuXG4vLyBZb3UgY2FuIGFkZCBtb3JlIGVudHJpZXMgdG8gdGhlICRzcGFjZXJzIG1hcCwgc2hvdWxkIHlvdSBuZWVkIG1vcmUgdmFyaWF0aW9uLlxuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgY29udGFpbmVyLW1heC13aWR0aHNcbiRncmlkLWJyZWFrcG9pbnRzOiAoXG4gIHhzOiAwLFxuICBzbTogNTc2cHgsXG4gIG1kOiA3NjhweCxcbiAgbGc6IDk5MnB4LFxuICB4bDogMTIwMHB4LFxuICB4eGw6IDE0NDBweCAvLyBDdXN0b20geHhsIHNpemVcbikgIWRlZmF1bHQ7XG5cbiRjb250YWluZXItbWF4LXdpZHRoczogKFxuICB4czogMCxcbiAgc206IDU3NnB4LFxuICBtZDogNzY4cHgsXG4gIGxnOiA5OTJweCxcbiAgeGw6IDEyMDBweCxcbiAgeHhsOiAxNDQwcHggLy8gQ3VzdG9tIHh4bCBzaXplXG4pICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBjb250YWluZXItbWF4LXdpZHRoc1xuXG4vLyBzdHlsZWxpbnQtZGlzYWJsZVxuJHNwYWNlcjogMXJlbSAhZGVmYXVsdDtcbiRzcGFjZXJzOiAoKSAhZGVmYXVsdDtcbi8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzY3NzL2RvbGxhci12YXJpYWJsZS1kZWZhdWx0XG4kc3BhY2VyczogbWFwLW1lcmdlKFxuICAoXG4gICAgMDogMCxcbiAgICAyNTogKFxuICAgICAgJHNwYWNlciAqIDAuMjVcbiAgICApLFxuICAgIDUwOiAoXG4gICAgICAkc3BhY2VyICogMC41XG4gICAgKSxcbiAgICA3NTogKFxuICAgICAgJHNwYWNlciAqIDAuNzVcbiAgICApLFxuICAgIDE6IChcbiAgICAgICRzcGFjZXJcbiAgICApLFxuICAgIDI6IChcbiAgICAgICRzcGFjZXIgKiAxLjVcbiAgICApLFxuICAgIDM6IChcbiAgICAgICRzcGFjZXIgKiAzXG4gICAgKSxcbiAgICA0OiAoXG4gICAgICAkc3BhY2VyICogMy41XG4gICAgKSxcbiAgICA1OiAoXG4gICAgICAkc3BhY2VyICogNFxuICAgIClcbiAgKSxcbiAgJHNwYWNlcnNcbik7XG5cbi8vIEJvZHlcbi8vXG4vLyBTZXR0aW5ncyBmb3IgdGhlIGA8Ym9keT5gIGVsZW1lbnQuXG4kYm9keS1iZzogI2Y4ZjhmOCAhZGVmYXVsdDtcbiRib2R5LWNvbG9yOiAjNmU2YjdiICFkZWZhdWx0O1xuXG4vLyBMaW5rc1xuLy9cbi8vIFN0eWxlIGFuY2hvciBlbGVtZW50cy5cblxuJGxpbmstY29sb3I6ICRwcmltYXJ5ICFkZWZhdWx0O1xuJGxpbmstaG92ZXItY29sb3I6IGRhcmtlbigkbGluay1jb2xvciwgNSUpICFkZWZhdWx0O1xuJGxpbmstaG92ZXItZGVjb3JhdGlvbjogbm9uZSAhZGVmYXVsdDtcblxuLy8gR3JpZCBjb2x1bW5zXG4vL1xuLy8gU2V0IHRoZSBudW1iZXIgb2YgY29sdW1ucyBhbmQgc3BlY2lmeSB0aGUgd2lkdGggb2YgdGhlIGd1dHRlcnMuXG5cbiRncmlkLWd1dHRlci13aWR0aDogMnJlbSAhZGVmYXVsdDtcblxuLy8gQ29tcG9uZW50c1xuLy9cbi8vIERlZmluZSBjb21tb24gcGFkZGluZyBhbmQgYm9yZGVyIHJhZGl1cyBzaXplcyBhbmQgbW9yZS5cblxuJGxpbmUtaGVpZ2h0LWxnOiAxLjI1ICFkZWZhdWx0O1xuJGxpbmUtaGVpZ2h0LXNtOiAxICFkZWZhdWx0O1xuXG4kYm9yZGVyLXdpZHRoOiAxcHggIWRlZmF1bHQ7XG4kYm9yZGVyLWNvbG9yOiAjZWJlOWYxICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXM6IDAuMzU3cmVtICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtbGc6IDAuNnJlbSAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLXNtOiAwLjI1cmVtICFkZWZhdWx0O1xuXG4vLyBzaGFkb3dcbiRib3gtc2hhZG93OiAwIDRweCAyNHB4IDAgcmdiYSgkYmxhY2ssIDAuMSkgIWRlZmF1bHQ7XG4vLyBUeXBvZ3JhcGh5XG5cbi8vXG4vLyBGb250LCBsaW5lLWhlaWdodCwgYW5kIGNvbG9yIGZvciBib2R5IHRleHQsIGhlYWRpbmdzLCBhbmQgbW9yZS5cblxuLy8gc3R5bGVsaW50LWRpc2FibGUgdmFsdWUta2V5d29yZC1jYXNlXG4kZm9udC1mYW1pbHktc2Fucy1zZXJpZjogJ01vbnRzZXJyYXQnLCBIZWx2ZXRpY2EsIEFyaWFsLCBzZXJpZiAhZGVmYXVsdDtcbiRmb250LWZhbWlseS1tb25vc3BhY2U6ICdNb250c2VycmF0JywgSGVsdmV0aWNhLCBBcmlhbCwgc2VyaWYgIWRlZmF1bHQ7XG5cbi8vIHN0eWxlbGludC1lbmFibGUgdmFsdWUta2V5d29yZC1jYXNlXG4kZm9udC1zaXplLWJhc2U6IDFyZW0gIWRlZmF1bHQ7XG4kZm9udC1zaXplLWxnOiBjZWlsKCRmb250LXNpemUtYmFzZSAqIDEuMjUpICFkZWZhdWx0O1xuJGZvbnQtc2l6ZS1zbTogY2VpbCgkZm9udC1zaXplLWJhc2UgKiAwLjg1KSAhZGVmYXVsdDtcblxuJGZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwICFkZWZhdWx0O1xuJGZvbnQtd2VpZ2h0LWJvbGQ6IDUwMCAhZGVmYXVsdDtcbiRmb250LXdlaWdodC1ib2xkZXI6IDYwMCAhZGVmYXVsdDtcblxuJGxpbmUtaGVpZ2h0LWJhc2U6IDEuNDUgIWRlZmF1bHQ7XG5cbiRoMS1mb250LXNpemU6ICRmb250LXNpemUtYmFzZSAqIDIgIWRlZmF1bHQ7XG4kaDItZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2UgKiAxLjcxNCAhZGVmYXVsdDtcbiRoMy1mb250LXNpemU6ICRmb250LXNpemUtYmFzZSAqIDEuNSAhZGVmYXVsdDtcbiRoNC1mb250LXNpemU6ICRmb250LXNpemUtYmFzZSAqIDEuMjg2ICFkZWZhdWx0O1xuJGg1LWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlICogMS4wNyAhZGVmYXVsdDtcblxuJGhlYWRpbmdzLWZvbnQtZmFtaWx5OiBpbmhlcml0ICFkZWZhdWx0O1xuJGhlYWRpbmdzLWNvbG9yOiAjNWU1ODczICFkZWZhdWx0O1xuXG4kZGlzcGxheTEtd2VpZ2h0OiAkZm9udC13ZWlnaHQtbm9ybWFsICFkZWZhdWx0O1xuJGRpc3BsYXkyLXdlaWdodDogJGZvbnQtd2VpZ2h0LW5vcm1hbCAhZGVmYXVsdDtcbiRkaXNwbGF5My13ZWlnaHQ6ICRmb250LXdlaWdodC1ub3JtYWwgIWRlZmF1bHQ7XG4kZGlzcGxheTQtd2VpZ2h0OiAkZm9udC13ZWlnaHQtbm9ybWFsICFkZWZhdWx0O1xuXG4kbGVhZC1mb250LXNpemU6ICRmb250LXNpemUtYmFzZSAqIDEuMTQgIWRlZmF1bHQ7XG4kbGVhZC1mb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LW5vcm1hbCAhZGVmYXVsdDtcblxuJHNtYWxsLWZvbnQtc2l6ZTogMC44NTdyZW0gIWRlZmF1bHQ7XG5cbiR0ZXh0LW11dGVkOiAjYjliOWMzICFkZWZhdWx0O1xuJGhyLWJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcblxuJGJsb2NrcXVvdGUtc21hbGwtY29sb3I6ICR0ZXh0LW11dGVkICFkZWZhdWx0O1xuXG4vLyBUYWJsZXNcblxuJHRhYmxlLWNlbGwtcGFkZGluZzogMC43MnJlbSAhZGVmYXVsdDtcblxuJHRhYmxlLWFjY2VudC1iZzogI2ZhZmFmYyAhZGVmYXVsdDtcbiR0YWJsZS1ob3Zlci1iZzogI2Y2ZjZmOSAhZGVmYXVsdDtcblxuJHRhYmxlLWJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcblxuJHRhYmxlLWhlYWQtYmc6ICNmM2YyZjcgIWRlZmF1bHQ7XG4kdGFibGUtaGVhZC1jb2xvcjogJGhlYWRpbmdzLWNvbG9yICFkZWZhdWx0O1xuXG4kdGFibGUtZGFyay1iZzogJGRhcmsgIWRlZmF1bHQ7XG4kdGFibGUtZGFyay1ib3JkZXItY29sb3I6ICM0MDQwNDAgIWRlZmF1bHQ7XG5cbiR0YWJsZS10aC1mb250LXNpemU6IDAuODU3cmVtICFkZWZhdWx0OyAvLyBjdXN0b21cblxuLy8gQnV0dG9ucyArIEZvcm1zXG4kYnRuLXBhZGRpbmcteTogMC43ODZyZW0gIWRlZmF1bHQ7XG4kYnRuLXBhZGRpbmcteDogMS41cmVtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1wYWRkaW5nLXk6IDAuNzVyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLXBhZGRpbmcteDogMnJlbSAhZGVmYXVsdDtcblxuJGlucHV0LWJ0bi1wYWRkaW5nLXktc206IDAuNDg2cmVtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1wYWRkaW5nLXgtc206IDFyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLWZvbnQtc2l6ZS1zbTogJGZvbnQtc2l6ZS1iYXNlICogMC45ICFkZWZhdWx0O1xuXG4kaW5wdXQtYnRuLXBhZGRpbmcteS1sZzogMC44cmVtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1wYWRkaW5nLXgtbGc6IDJyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLWZvbnQtc2l6ZS1sZzogJGZvbnQtc2l6ZS1iYXNlICogMS4yNSAhZGVmYXVsdDtcbiRidG4tbGluZS1oZWlnaHQ6IDEgIWRlZmF1bHQ7XG4kYnRuLWJvcmRlci1yYWRpdXM6IDAuMzU4cmVtICFkZWZhdWx0O1xuJGJ0bi1ib3JkZXItcmFkaXVzLWxnOiAwLjM1OHJlbSAhZGVmYXVsdDtcbiRidG4tYm9yZGVyLXJhZGl1cy1zbTogMC4zNThyZW0gIWRlZmF1bHQ7XG5cbiRidG4tdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCxcbiAgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZCAwcywgYm9yZGVyIDBzICFkZWZhdWx0O1xuXG4vLyBGb3Jtc1xuJGN1c3RvbS1jb250cm9sLWJvcmRlci1jb2xvcjogI2Q4ZDZkZTtcbiRsYWJlbC1tYXJnaW4tYm90dG9tOiAwLjI4NTdyZW0gIWRlZmF1bHQ7XG5cbiRpbnB1dC1wYWRkaW5nLXk6IDAuNDM4cmVtICFkZWZhdWx0O1xuJGlucHV0LXBhZGRpbmcteDogMXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1mb250LXNpemU6IDFyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodC1iYXNlICFkZWZhdWx0O1xuXG4kaW5wdXQtcGFkZGluZy15LXNtOiAwLjE4OHJlbSAhZGVmYXVsdDtcbiRpbnB1dC1wYWRkaW5nLXgtc206IDAuODU3cmVtICFkZWZhdWx0O1xuJGlucHV0LWZvbnQtc2l6ZS1zbTogMC44NTdyZW0gIWRlZmF1bHQ7XG5cbiRpbnB1dC1wYWRkaW5nLXktbGc6IDAuNzVyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtcGFkZGluZy14LWxnOiAxLjE0M3JlbSAhZGVmYXVsdDtcbiRpbnB1dC1mb250LXNpemUtbGc6IDEuMTQzcmVtICFkZWZhdWx0O1xuXG4kaW5wdXQtZGlzYWJsZWQtYmc6ICNlZmVmZWYgIWRlZmF1bHQ7XG5cbiRpbnB1dC1jb2xvcjogJGJvZHktY29sb3IgIWRlZmF1bHQ7XG4kaW5wdXQtYm9yZGVyLWNvbG9yOiAkY3VzdG9tLWNvbnRyb2wtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJGlucHV0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKCRibGFjaywgMC4wNzUpICFkZWZhdWx0O1xuXG4kaW5wdXQtYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kaW5wdXQtYm9yZGVyLXJhZGl1cy1sZzogJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kaW5wdXQtYm9yZGVyLXJhZGl1cy1zbTogJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG5cbiRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3I6ICRwcmltYXJ5ICFkZWZhdWx0O1xuJGlucHV0LWZvY3VzLWJveC1zaGFkb3c6IDAgM3B4IDEwcHggMCByZ2JhKCRibGFjaywgMC4xKSAhZGVmYXVsdDtcblxuJGlucHV0LXBsYWNlaG9sZGVyLWNvbG9yOiAkdGV4dC1tdXRlZCAhZGVmYXVsdDtcbiRpbnB1dC1wbGFpbnRleHQtY29sb3I6ICRib2R5LWNvbG9yICFkZWZhdWx0O1xuXG4kaW5wdXQtaGVpZ2h0OiAyLjcxNHJlbSAhZGVmYXVsdDtcbiRpbnB1dC1oZWlnaHQtc206IDIuMTQycmVtICFkZWZhdWx0O1xuJGlucHV0LWhlaWdodC1sZzogMy4yODU3cmVtICFkZWZhdWx0O1xuXG4kaW5wdXQtZ3JvdXAtYWRkb24tYmc6IHdoaXRlICFkZWZhdWx0O1xuJGN1c3RvbS1mb3Jtcy10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsXG4gIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQgMHMsIGJvcmRlci1jb2xvciAwcyAhZGVmYXVsdDtcblxuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1ib3JkZXItY29sb3I6ICRjdXN0b20tY29udHJvbC1ib3JkZXItY29sb3I7XG5cbiRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWJvcmRlci1yYWRpdXM6IDNweCAhZGVmYXVsdDtcbiRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWNoZWNrZWQtY29sb3I6IHdoaXRlICFkZWZhdWx0O1xuJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaW5kZXRlcm1pbmF0ZS1jb2xvcjogd2hpdGUgIWRlZmF1bHQ7XG4kY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pY29uLWNoZWNrZWQ6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDkuNSA3LjUnJTNFJTNDcG9seWxpbmUgcG9pbnRzPScwLjc1IDQuMzUgNC4xOCA2Ljc1IDguNzUgMC43NScgc3R5bGU9J2ZpbGw6bm9uZTtzdHJva2U6JTIzZmZmO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6MS41cHgnLyUzRSUzQy9zdmclM0VcIik7XG5cbiRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWljb24taW5kZXRlcm1pbmF0ZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPScjeyRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWluZGV0ZXJtaW5hdGUtY29sb3J9JyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1taW51cyclM0UlM0NsaW5lIHgxPSc1JyB5MT0nMTInIHgyPScxOScgeTI9JzEyJyUzRSUzQy9saW5lJTNFJTNDL3N2ZyUzRVwiKTtcblxuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWRpc2FibGVkLWJnOiByZ2JhKCRwcmltYXJ5LCAwLjY1KTtcblxuJGN1c3RvbS1yYWRpby1pbmRpY2F0b3ItaWNvbi1jaGVja2VkOiBub25lO1xuXG4kY3VzdG9tLWZpbGUtaGVpZ2h0LWlubmVyOiAkaW5wdXQtaGVpZ2h0ICFkZWZhdWx0O1xuXG4kY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItcGFkZGluZzogMXJlbSAhZGVmYXVsdDsgLy8gRXh0cmEgcGFkZGluZyB0byBhY2NvdW50IGZvciB0aGUgcHJlc2VuY2Ugb2YgdGhlIGJhY2tncm91bmQtaW1hZ2UgYmFzZWQgaW5kaWNhdG9yXG4kY3VzdG9tLXNlbGVjdC1kaXNhYmxlZC1iZzogJGlucHV0LWRpc2FibGVkLWJnICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtYmctc2l6ZTogMTBweCAxMHB4ICFkZWZhdWx0OyAvLyBJbiBwaXhlbHMgYmVjYXVzZSBpbWFnZSBkaW1lbnNpb25zXG4kY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItY29sb3I6ICRpbnB1dC1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3I6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzQnIGhlaWdodD0nNScgdmlld0JveD0nMCAwIDQgNSc+PHBhdGggZmlsbD0nI3skY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItY29sb3J9JyBkPSdNMiAwTDAgMmg0em0wIDVMMCAzaDR6Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xuXG4vLyAkY3VzdG9tLXNlbGVjdC1mZWVkYmFjay1pY29uLXBvc2l0aW9uOiBjZW50ZXIgcmlnaHQgKCRjdXN0b20tc2VsZWN0LXBhZGRpbmcteCArICRjdXN0b20tc2VsZWN0LWluZGljYXRvci1wYWRkaW5nKSAhZGVmYXVsdDtcbi8vICRjdXN0b20tc2VsZWN0LWZlZWRiYWNrLWljb24tc2l6ZTogJGlucHV0LWhlaWdodC1pbm5lci1oYWxmICRpbnB1dC1oZWlnaHQtaW5uZXItaGFsZiAhZGVmYXVsdDtcblxuJGN1c3RvbS1zZWxlY3QtYm9yZGVyLXJhZGl1czogJGlucHV0LWJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1mb2N1cy1ib3gtc2hhZG93OiAkaW5wdXQtZm9jdXMtYm94LXNoYWRvdyAhZGVmYXVsdDtcblxuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy15LXNtOiAkaW5wdXQtcGFkZGluZy15LXNtICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14LXNtOiAkaW5wdXQtcGFkZGluZy14LXNtICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtZm9udC1zaXplLXNtOiAkaW5wdXQtZm9udC1zaXplLXNtICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtaGVpZ2h0LXNtOiAkaW5wdXQtaGVpZ2h0LXNtICFkZWZhdWx0O1xuXG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXktbGc6ICRpbnB1dC1wYWRkaW5nLXktbGcgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXgtbGc6ICRpbnB1dC1wYWRkaW5nLXgtbGcgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1mb250LXNpemUtbGc6ICRpbnB1dC1mb250LXNpemUtbGcgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1oZWlnaHQtbGc6ICRpbnB1dC1oZWlnaHQtbGcgIWRlZmF1bHQ7XG5cbi8vIERyb3Bkb3duc1xuLy9cbi8vIERyb3Bkb3duIG1lbnUgY29udGFpbmVyIGFuZCBjb250ZW50cy5cblxuJGRyb3Bkb3duLWJvcmRlci1jb2xvcjogcmdiYSgkYmxhY2ssIDAuMDUpICFkZWZhdWx0O1xuJGRyb3Bkb3duLWJvcmRlci1yYWRpdXM6IDAuMzU4cmVtICFkZWZhdWx0O1xuJGRyb3Bkb3duLWJveC1zaGFkb3c6IDAgNXB4IDI1cHggcmdiYSgkYmxhY2ssIDAuMSkgIWRlZmF1bHQ7XG5cbiRkcm9wZG93bi1saW5rLWNvbG9yOiAkYm9keS1jb2xvciAhZGVmYXVsdDtcbiRkcm9wZG93bi1saW5rLWhvdmVyLWNvbG9yOiAkcHJpbWFyeSAhZGVmYXVsdDtcbiRkcm9wZG93bi1saW5rLWhvdmVyLWJnOiByZ2JhKCRwcmltYXJ5LCAwLjEyKSAhZGVmYXVsdDtcblxuJGRyb3Bkb3duLWRpdmlkZXItYmc6IHJnYmEoJGJsYWNrLCAwLjA4KSAhZGVmYXVsdDtcbiRkcm9wZG93bi1mb250LXNpemU6IDFyZW0gIWRlZmF1bHQ7XG4kZHJvcGRvd24tc3BhY2VyOiAwICFkZWZhdWx0O1xuJHppbmRleC1kcm9wZG93bjogMTAgIWRlZmF1bHQ7XG5cbiRkcm9wZG93bi1ib3gtc2hhZG93OiAwIDVweCAyNXB4IDAgcmdiYSgkYmxhY2ssIDAuMSkgIWRlZmF1bHQ7XG5cbiRkcm9wZG93bi1saW5rLWRpc2FibGVkLWNvbG9yOiAkdGV4dC1tdXRlZCAhZGVmYXVsdDtcblxuJGRyb3Bkb3duLWl0ZW0tcGFkZGluZy15OiAwLjY1cmVtICFkZWZhdWx0O1xuJGRyb3Bkb3duLWl0ZW0tcGFkZGluZy14OiAxLjI4cmVtICFkZWZhdWx0O1xuXG4kZHJvcGRvd24taGVhZGVyLWNvbG9yOiAkaGVhZGluZ3MtY29sb3IgIWRlZmF1bHQ7XG5cbiRkcm9wZG93bl9zcGFjaW5nOiAwLjVyZW07IC8vIGN1c3RvbVxuXG4vLyBQYWdpbmF0aW9uXG5cbiRwYWdpbmF0aW9uLXBhZGRpbmcteTogMC41cmVtICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tcGFkZGluZy14OiAwLjg1cmVtICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tcGFkZGluZy15LWxnOiAwLjU1NzVyZW0gIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1wYWRkaW5nLXgtbGc6IDFyZW0gIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1wYWRkaW5nLXktc206IDAuNDQzcmVtICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tcGFkZGluZy14LXNtOiAwLjc0NXJlbSAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24tZGlzYWJsZWQtY29sb3I6ICR0ZXh0LW11dGVkICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1jb2xvcjogJGJvZHktY29sb3IgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1iZzogI2YzZjJmNyAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24taG92ZXItY29sb3I6ICRwcmltYXJ5ICFkZWZhdWx0O1xuJHBhZ2luYXRpb24taG92ZXItYmc6ICNmM2YyZjcgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWFjdGl2ZS1jb2xvcjogJHByaW1hcnkgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWRpc2FibGVkLWNvbG9yOiAkdGV4dC1tdXRlZCAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWRpc2FibGVkLWJnOiAjZjNmMmY3ICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1mb250LXNpemUtbGc6IDEuMTRyZW0gIWRlZmF1bHQ7IC8vIGN1c3RvbVxuJHBhZ2luYXRpb24tZm9udC1zaXplLXNtOiAwLjg1N3JlbSAhZGVmYXVsdDsgLy8gY3VzdG9tXG5cbi8vIENhcmRzXG4kY2FyZC1zcGFjZXIteTogMS41cmVtICFkZWZhdWx0O1xuJGNhcmQtc3BhY2VyLXg6IDEuNXJlbSAhZGVmYXVsdDtcbiRjYXJkLWJvcmRlci1yYWRpdXM6IDAuNDI4cmVtICFkZWZhdWx0O1xuXG4vL0FsZXJ0c1xuXG4kYWxlcnQtcGFkZGluZy15OiAwLjcxcmVtICFkZWZhdWx0O1xuJGFsZXJ0LXBhZGRpbmcteDogMXJlbSAhZGVmYXVsdDtcbiRhbGVydC1ib3JkZXItcmFkaXVzOiAwLjM1OHJlbSAhZGVmYXVsdDtcbiRhbGVydC1saW5rLWZvbnQtd2VpZ2h0OiA3MDAgIWRlZmF1bHQ7XG5cbi8vIExpc3QgZ3JvdXBcblxuJGxpc3QtZ3JvdXAtYm9yZGVyLXJhZGl1czogMC4zNThyZW0gIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1kaXNhYmxlZC1jb2xvcjogJHRleHQtbXV0ZWQgIWRlZmF1bHQ7XG5cbiRsaXN0LWdyb3VwLWFjdGlvbi1hY3RpdmUtY29sb3I6ICR3aGl0ZSAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWFjdGlvbi1hY3RpdmUtYmc6ICRwcmltYXJ5ICFkZWZhdWx0O1xuXG4vLyBOYXYgdGFic1xuXG4kbmF2LWxpbmstcGFkZGluZy15OiAwLjM1OHJlbSAhZGVmYXVsdDtcbiRuYXYtbGluay1wYWRkaW5nLXg6IDAuNXJlbSAhZGVmYXVsdDtcbiRuYXYtbGluay1kaXNhYmxlZC1jb2xvcjogJHRleHQtbXV0ZWQgIWRlZmF1bHQ7XG5cbiRuYXYtdGFicy1ib3JkZXItd2lkdGg6IDAgIWRlZmF1bHQ7XG4kbmF2LXRhYnMtYm9yZGVyLXJhZGl1czogMC4yNSAhZGVmYXVsdDtcbiRuYXYtdGFicy1saW5rLWFjdGl2ZS1jb2xvcjogJHByaW1hcnkgIWRlZmF1bHQ7XG5cbiRuYXYtdGFicy1saW5rLWFjdGl2ZS1iZzogdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG5cbiRuYXYtcGlsbHMtYm9yZGVyLXJhZGl1czogJGJ0bi1ib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuXG4vLyBuYXZiYXJcblxuJGZsb2F0aW5nLW5hdi1tYXJnaW46IDEuM3JlbTtcblxuLy8gVG9vbHRpcHNcblxuJHRvb2x0aXAtYmc6ICMzMjMyMzIgIWRlZmF1bHQ7XG4kdG9vbHRpcC1wYWRkaW5nLXk6IDAuNHJlbSAhZGVmYXVsdDtcbiR0b29sdGlwLXBhZGRpbmcteDogMC43NzVyZW0gIWRlZmF1bHQ7XG4kdG9vbHRpcC1mb250LXNpemU6IDAuODU3cmVtICFkZWZhdWx0O1xuJHRvb2x0aXAtYm9yZGVyLXJhZGl1czogMC4zNThyZW0gIWRlZmF1bHQ7XG4kdG9vbHRpcC1vcGFjaXR5OiAxICFkZWZhdWx0O1xuJHRvb2x0aXAtbWF4LXdpZHRoOiAyMjBweCAhZGVmYXVsdDtcblxuLy8gUG9wb3ZlcnNcblxuJHBvcG92ZXItZm9udC1zaXplOiAxcmVtICFkZWZhdWx0O1xuJHBvcG92ZXItYm9yZGVyLXdpZHRoOiAwICFkZWZhdWx0O1xuJHBvcG92ZXItYm9yZGVyLXJhZGl1czogMC4zNThyZW0gIWRlZmF1bHQ7XG4kcG9wb3Zlci1ib3JkZXItY29sb3I6ICRib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kcG9wb3Zlci1ib3gtc2hhZG93OiAwIDAgMTBweCAwIHJnYmEoJGJsYWNrLCAwLjEpICFkZWZhdWx0O1xuXG4kcG9wb3Zlci1oZWFkZXItYmc6ICRwcmltYXJ5ICFkZWZhdWx0O1xuJHBvcG92ZXItaGVhZGVyLWNvbG9yOiAkd2hpdGUgIWRlZmF1bHQ7XG4kcG9wb3Zlci1oZWFkZXItcGFkZGluZy15OiAwLjY1cmVtICFkZWZhdWx0O1xuJHBvcG92ZXItaGVhZGVyLXBhZGRpbmcteDogMS4yMXJlbSAhZGVmYXVsdDtcblxuLy8gVG9hc3RzXG5cbiR0b2FzdC1tYXgtd2lkdGg6IDM4MHB4ICFkZWZhdWx0O1xuJHRvYXN0LXBhZGRpbmcteDogMS4xNHJlbSAhZGVmYXVsdDtcbiR0b2FzdC1wYWRkaW5nLXk6IDAuMTVyZW0gIWRlZmF1bHQ7XG4kdG9hc3QtZm9udC1zaXplOiAwLjg1N3JlbSAhZGVmYXVsdDtcbiR0b2FzdC1jb2xvcjogJGJvZHktY29sb3IgIWRlZmF1bHQ7XG4kdG9hc3QtYm9yZGVyLXdpZHRoOiAwICFkZWZhdWx0O1xuJHRvYXN0LWJvcmRlci1yYWRpdXM6IDAuMjg2cmVtICFkZWZhdWx0O1xuJHRvYXN0LWJveC1zaGFkb3c6IDAgMnB4IDIwcHggMCByZ2JhKCRibGFjaywgMC4wOCkgIWRlZmF1bHQ7XG5cbiR0b2FzdC1oZWFkZXItY29sb3I6ICRib2R5LWNvbG9yICFkZWZhdWx0O1xuJHRvYXN0LWhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGUgIWRlZmF1bHQ7XG5cbi8vIFByb2dyZXNzXG5cbiRwcm9ncmVzcy1oZWlnaHQ6IDAuODU3cmVtICFkZWZhdWx0O1xuJHByb2dyZXNzLWJvcmRlci1yYWRpdXM6IDVyZW0gIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2UgKiAwLjg1NyAhZGVmYXVsdDtcbiRwcm9ncmVzcy1iZzogcmdiYSgkcHJpbWFyeSwgMC4xMikgIWRlZmF1bHQ7XG5cbi8vIEJyZWFkY3J1bWJzXG5cbiRicmVhZGNydW1iLWZvbnQtc2l6ZTogMXJlbSAhZGVmYXVsdDtcblxuJGJyZWFkY3J1bWItcGFkZGluZy15OiAwLjNyZW0gIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1pdGVtLXBhZGRpbmc6IDAuNnJlbSAhZGVmYXVsdDtcblxuJGJyZWFkY3J1bWItbWFyZ2luLWJvdHRvbTogMCAhZGVmYXVsdDtcblxuJGJyZWFkY3J1bWItYmc6IHRyYW5zcGFyZW50ICFkZWZhdWx0O1xuJGJyZWFkY3J1bWItZGl2aWRlci1jb2xvcjogJGJvZHktY29sb3IgIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1hY3RpdmUtY29sb3I6ICRib2R5LWNvbG9yICFkZWZhdWx0O1xuXG4kYnJlYWRjcnVtYi1ib3JkZXItcmFkaXVzOiAwICFkZWZhdWx0O1xuXG4vLyBDYXJvdXNlbFxuXG4kY2Fyb3VzZWwtY29udHJvbC1jb2xvcjogJHdoaXRlICFkZWZhdWx0O1xuJGNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uLWJnOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCIjeyRjYXJvdXNlbC1jb250cm9sLWNvbG9yfVwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci1jaGV2cm9uLWxlZnRcIj48cG9seWxpbmUgcG9pbnRzPVwiMTUgMTggOSAxMiAxNSA2XCI+PC9wb2x5bGluZT48L3N2Zz4nKSAhZGVmYXVsdDtcbiRjYXJvdXNlbC1jb250cm9sLW5leHQtaWNvbi1iZzogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiI3skY2Fyb3VzZWwtY29udHJvbC1jb2xvcn1cIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItY2hldnJvbi1yaWdodFwiPjxwb2x5bGluZSBwb2ludHM9XCI5IDE4IDE1IDEyIDkgNlwiPjwvcG9seWxpbmU+PC9zdmc+JykgIWRlZmF1bHQ7XG5cbi8vIEJhZGdlc1xuXG4kYmFkZ2UtZm9udC1zaXplOiA4NSUgIWRlZmF1bHQ7XG4kYmFkZ2UtcGFkZGluZy15OiAwLjNyZW0gIWRlZmF1bHQ7XG4kYmFkZ2UtcGFkZGluZy14OiAwLjVyZW0gIWRlZmF1bHQ7XG4kYmFkZ2UtZm9udC13ZWlnaHQ6IDYwMCAhZGVmYXVsdDtcbiRiYWRnZS1ib3JkZXItcmFkaXVzOiAwLjM1OHJlbSAhZGVmYXVsdDtcblxuJGJhZGdlLXBpbGwtcGFkZGluZy14OiAwLjVyZW0gIWRlZmF1bHQ7XG5cbi8vIE1vZGFsXG4kbW9kYWwtaW5uZXItcGFkZGluZzogMC44cmVtIDEuNHJlbSAhZGVmYXVsdDtcblxuJG1vZGFsLWZvb3Rlci1ib3JkZXItY29sb3I6IHJnYmEoJGJsYWNrLCAwLjA1KSAhZGVmYXVsdDtcblxuJG1vZGFsLWhlYWRlci1wYWRkaW5nLXk6IDAuOHJlbSAhZGVmYXVsdDtcbiRtb2RhbC1oZWFkZXItcGFkZGluZy14OiAxLjRyZW0gIWRlZmF1bHQ7XG4kbW9kYWwtY29udGVudC1ib3JkZXItcmFkaXVzOiAwLjM1OHJlbSAhZGVmYXVsdDtcblxuJG1vZGFsLXhsOiA5NCUgIWRlZmF1bHQ7XG4kbW9kYWwtc206IDQwMHB4ICFkZWZhdWx0O1xuXG4vLyAgICBTbGlkZSBJbiBNb2RhbFxuJG1vZGFsLXNsaWRlLWluLXdpZHRoLXNtOiAyNXJlbSAhZGVmYXVsdDsgLy8gY3VzdG9tXG4kbW9kYWwtc2xpZGUtaW4td2lkdGg6IDI4cmVtICFkZWZhdWx0OyAvLyBjdXN0b21cbiRtb2RhbC1zbGlkZS1pbi13aWR0aC1sZzogMzByZW0gIWRlZmF1bHQ7IC8vIGN1c3RvbVxuXG4vLyBDbG9zZVxuXG4kY2xvc2UtZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2UgKiAyICFkZWZhdWx0O1xuJGNsb3NlLWZvbnQtd2VpZ2h0OiA0MDAgIWRlZmF1bHQ7XG4kY2xvc2UtY29sb3I6ICRoZWFkaW5ncy1jb2xvciAhZGVmYXVsdDtcblxuLy8gQ29kZVxuXG4kY29kZS1mb250LXNpemU6IDkwJSAhZGVmYXVsdDtcbiRrYmQtYmc6ICNlZWUgIWRlZmF1bHQ7XG5cbi8vIFN3aXRjaFxuJGN1c3RvbS1zd2l0Y2gtd2lkdGg6IDNyZW0gIWRlZmF1bHQ7XG4kY3VzdG9tLXN3aXRjaC1pbmRpY2F0b3ItYm9yZGVyLXJhZGl1czogMXJlbSAhZGVmYXVsdDtcbiRjdXN0b20tc3dpdGNoLWluZGljYXRvci1zaXplOiAxcmVtICFkZWZhdWx0O1xuXG4vL3N2ZyBjb2xvclxuJHN2Zy1jb2xvci1saWdodDogIzYyNjI2MiAhZGVmYXVsdDtcblxuLy8gU1ZHIGljb25zXG4vLyBGb3IgQnJlYWRjcnVtYlxuJGRvdWJsZS1jaGV2cm9uLXJpZ2h0OiBcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nY3VycmVudENvbG9yJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1jaGV2cm9ucy1yaWdodCclM0UlM0Nwb2x5bGluZSBwb2ludHM9JzEzIDE3IDE4IDEyIDEzIDcnJTNFJTNDL3BvbHlsaW5lJTNFJTNDcG9seWxpbmUgcG9pbnRzPSc2IDE3IDExIDEyIDYgNyclM0UlM0MvcG9seWxpbmUlM0UlM0Mvc3ZnJTNFXCI7XG4vLyBDaGV2cm9uIEljb25zXG4kY2hldnJvbi1sZWZ0OiBcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nY3VycmVudENvbG9yJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1jaGV2cm9uLWxlZnQnJTNFJTNDcG9seWxpbmUgcG9pbnRzPScxNSAxOCA5IDEyIDE1IDYnJTNFJTNDL3BvbHlsaW5lJTNFJTNDL3N2ZyUzRVwiO1xuJGNoZXZyb24tcmlnaHQ6IFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSdjdXJyZW50Q29sb3InIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tcmlnaHQnJTNFJTNDcG9seWxpbmUgcG9pbnRzPSc5IDE4IDE1IDEyIDkgNiclM0UlM0MvcG9seWxpbmUlM0UlM0Mvc3ZnJTNFXCI7XG4kY2hldnJvbi11cDogXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9J2N1cnJlbnRDb2xvcicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItY2hldnJvbi11cCclM0UlM0Nwb2x5bGluZSBwb2ludHM9JzE4IDE1IDEyIDkgNiAxNSclM0UlM0MvcG9seWxpbmUlM0UlM0Mvc3ZnJTNFXCI7XG4kY2hldnJvbi1kb3duOiBcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nY3VycmVudENvbG9yJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1jaGV2cm9uLWRvd24nJTNFJTNDcG9seWxpbmUgcG9pbnRzPSc2IDkgMTIgMTUgMTggOSclM0UlM0MvcG9seWxpbmUlM0UlM0Mvc3ZnJTNFXCI7XG5cbiRkb3dubG9hZDogXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9J2N1cnJlbnRDb2xvcicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItZG93bmxvYWQnJTNFJTNDcGF0aCBkPSdNMjEgMTV2NGEyIDIgMCAwIDEtMiAySDVhMiAyIDAgMCAxLTItMnYtNCclM0UlM0MvcGF0aCUzRSUzQ3BvbHlsaW5lIHBvaW50cz0nNyAxMCAxMiAxNSAxNyAxMCclM0UlM0MvcG9seWxpbmUlM0UlM0NsaW5lIHgxPScxMicgeTE9JzE1JyB4Mj0nMTInIHkyPSczJyUzRSUzQy9saW5lJTNFJTNDL3N2ZyUzRVwiO1xuJHJlbW92ZTogXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9J2N1cnJlbnRDb2xvcicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXIteCclM0UlM0NsaW5lIHgxPScxOCcgeTE9JzYnIHgyPSc2JyB5Mj0nMTgnJTNFJTNDL2xpbmUlM0UlM0NsaW5lIHgxPSc2JyB5MT0nNicgeDI9JzE4JyB5Mj0nMTgnJTNFJTNDL2xpbmUlM0UlM0Mvc3ZnJTNFXCI7XG4kY2hlY2s6IFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyNCcgaGVpZ2h0PScyNCcgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9J2N1cnJlbnRDb2xvcicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItY2hlY2snJTNFJTNDcG9seWxpbmUgcG9pbnRzPScyMCA2IDkgMTcgNCAxMiclM0UlM0MvcG9seWxpbmUlM0UlM0Mvc3ZnJTNFXCI7XG4kY2lyY2xlOiBcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSdjdXJyZW50Q29sb3InIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWNpcmNsZSclM0UlM0NjaXJjbGUgY3g9JzEyJyBjeT0nMTInIHI9JzEwJyUzRSUzQy9jaXJjbGUlM0UlM0Mvc3ZnJTNFXCI7XG4kaW5mb0ljb246IFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyNCcgaGVpZ2h0PScyNCcgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9J2N1cnJlbnRDb2xvcicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItaW5mbyclM0UlM0NjaXJjbGUgY3g9JzEyJyBjeT0nMTInIHI9JzEwJyUzRSUzQy9jaXJjbGUlM0UlM0NsaW5lIHgxPScxMicgeTE9JzE2JyB4Mj0nMTInIHkyPScxMiclM0UlM0MvbGluZSUzRSUzQ2xpbmUgeDE9JzEyJyB5MT0nOCcgeDI9JzEyLjAxJyB5Mj0nOCclM0UlM0MvbGluZSUzRSUzQy9zdmclM0VcIjtcbiR3YXJuaW5nSWNvbjogXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzI0JyBoZWlnaHQ9JzI0JyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nY3VycmVudENvbG9yJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1hbGVydC10cmlhbmdsZSclM0UlM0NwYXRoIGQ9J00xMC4yOSAzLjg2TDEuODIgMThhMiAyIDAgMCAwIDEuNzEgM2gxNi45NGEyIDIgMCAwIDAgMS43MS0zTDEzLjcxIDMuODZhMiAyIDAgMCAwLTMuNDIgMHonJTNFJTNDL3BhdGglM0UlM0NsaW5lIHgxPScxMicgeTE9JzknIHgyPScxMicgeTI9JzEzJyUzRSUzQy9saW5lJTNFJTNDbGluZSB4MT0nMTInIHkxPScxNycgeDI9JzEyLjAxJyB5Mj0nMTcnJTNFJTNDL2xpbmUlM0UlM0Mvc3ZnJTNFXCI7XG4kbWVudTogXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI0IDI0JyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHN0cm9rZT0nY3VycmVudENvbG9yJyBzdHJva2Utd2lkdGg9JzInIGZpbGw9J25vbmUnIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2Nzcy1pNmR6cTEnJTNFJTNDbGluZSB4MT0nMycgeTE9JzEyJyB4Mj0nMjEnIHkyPScxMiclM0UlM0MvbGluZSUzRSUzQ2xpbmUgeDE9JzMnIHkxPSc2JyB4Mj0nMjEnIHkyPSc2JyUzRSUzQy9saW5lJTNFJTNDbGluZSB4MT0nMycgeTE9JzE4JyB4Mj0nMjEnIHkyPScxOCclM0UlM0MvbGluZSUzRSUzQy9zdmclM0VcIjtcblxuJGNoYXQtYmctbGlnaHQ6ICdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlkWFJtTFRnaVB6NEtQQ0V0TFNCSFpXNWxjbUYwYjNJNklFRmtiMkpsSUVsc2JIVnpkSEpoZEc5eUlESXpMakF1TVN3Z1UxWkhJRVY0Y0c5eWRDQlFiSFZuTFVsdUlDNGdVMVpISUZabGNuTnBiMjQ2SURZdU1EQWdRblZwYkdRZ01Da2dJQzB0UGdvOGMzWm5JSFpsY25OcGIyNDlJakV1TVNJZ2FXUTlJa3hoZVdWeVh6RWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SWdlRzFzYm5NNmVHeHBibXM5SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpFNU9Ua3ZlR3hwYm1zaUlIZzlJakJ3ZUNJZ2VUMGlNSEI0SWdvSklIWnBaWGRDYjNnOUlqQWdNQ0F5TmpBZ01qWXdJaUJ6ZEhsc1pUMGlaVzVoWW14bExXSmhZMnRuY205MWJtUTZibVYzSURBZ01DQXlOakFnTWpZd095SWdlRzFzT25Od1lXTmxQU0p3Y21WelpYSjJaU0krQ2p4emRIbHNaU0IwZVhCbFBTSjBaWGgwTDJOemN5SStDZ2t1YzNRd2UyWnBiR3d0Y25Wc1pUcGxkbVZ1YjJSa08yTnNhWEF0Y25Wc1pUcGxkbVZ1YjJSa08yWnBiR3c2STBVeFJUQkZPVHQ5Q2p3dmMzUjViR1UrQ2p4blBnb0pQR2NnYVdROUlta3RiR2xyWlMxbWIyOWtJajRLQ1FrOGNHRjBhQ0JqYkdGemN6MGljM1F3SWlCa1BTSk5NalF1TkN3eE5tTXdMaklzTUM0MkxEQXVOQ3d4TGpNc01DNDFMREpvTFRNdU4yd3hMaklzTWk0emJEQXVOU3d3TGpsc0xUQXVNaXd3TGpGV01qaGpNaTR5TERFdU55d3lMamNzTkM0NExERXNOd29KQ1FsakxUQXVPQ3d4TFRFdU9Td3hMamN0TXk0eUxERXVPVll6TjJNdE1DNDVMRE11TlMwMExqRXNOaTAzTGpnc05tZ3RNakJqTFRNdU5pd3dMVFl1T0MweUxqVXROeTQzTFRaMkxUQXVNV010TWk0M0xUQXVOQzAwTGpZdE15MDBMakl0TlM0M1l6QXVNaTB4TGpNc01DNDVMVEl1TlN3eExqa3RNeTR5Q2drSkNYWXROaTQ0YkMwd0xqZ3RNUzQyYkMwd0xqUXRNQzQ1YkRBdU9TMHdMalJNTFRFM0xERTRhQzB6UXkweE55NHlMRFV1TmkwMExqa3RNaTR5TERjdU5Td3dMalpETVRVdU5Dd3lMak1zTWpFdU9TdzRMaklzTWpRdU5Dd3hObm9nVFMweE1pNDBMREU0WXkwd0xqSXNNQzB3TGpNc01DMHdMalFzTUM0eENna0pDV3d0TXk0eExERXVObXd3TGprc01TNDRiREV1TXkwd0xqZGpNQzQ0TFRBdU5Dd3hMamd0TUM0MExESXVOeXd3YkRJdU1pd3hMakZqTUM0ekxEQXVNU3d3TGpZc01DNHhMREF1T1N3d2JESXVNaTB4TGpGak1DNDRMVEF1TkN3eExqZ3RNQzQwTERJdU55d3diREl1TWl3eExqRUtDUWtKWXpBdU15d3dMakVzTUM0MkxEQXVNU3d3TGprc01Hd3lMakl0TVM0eFl6QXVPQzB3TGpRc01TNDRMVEF1TkN3eUxqY3NNR3d5TGpJc01TNHhRemN1TkN3eU1pdzNMamNzTWpJc09Dd3lNUzQ1YkRJdU9TMHhMak5qTUM0NExUQXVNeXd4TGpjdE1DNHpMREl1TkN3d2JESXVPU3d4TGpNS0NRa0pZekF1TXl3d0xqRXNNQzQyTERBdU1Td3dMamtzTUd3ekxqRXRNUzQxYkMwd0xqa3RNUzQ0YkMweExqUXNNQzQzWXkwd0xqZ3NNQzQwTFRFdU55d3dMalF0TWk0MkxEQXVNV3d0TWk0NExURXVNa014TWk0ekxERTRMREV5TGpJc01UZ3NNVEl1TVN3eE9Hd3dMREFLQ1FrSll5MHdMakVzTUMwd0xqTXNNQzB3TGpRc01DNHhiQzB5TGpnc01TNHlZeTB3TGpnc01DNDBMVEV1T0N3d0xqTXRNaTQyTFRBdU1VdzBMREU0TGpGRE15NDVMREU0TERNdU55d3hPQ3d6TGpZc01UaHNNQ3d3WXkwd0xqSXNNQzB3TGpNc01DMHdMalFzTUM0eFRERXNNVGt1TWdvSkNRbGpMVEF1T0N3d0xqUXRNUzQ0TERBdU5DMHlMamNzTUV3dE5Dd3hPQzR4UXkwMExqRXNNVGd0TkM0ekxERTRMVFF1TkN3eE9Hd3dMREJqTFRBdU1pd3dMVEF1TXl3d0xUQXVOQ3d3TGpGTUxUY3NNVGt1TW1NdE1DNDRMREF1TkMweExqZ3NNQzQwTFRJdU55d3diQzB5TGpJdE1TNHhDZ2tKQ1VNdE1USXVNU3d4T0MweE1pNHpMREU0TFRFeUxqUXNNVGhNTFRFeUxqUXNNVGhNTFRFeUxqUXNNVGg2SUUwdE1USXVOQ3d4Tm1ndE5DNDVReTB4TXk0MUxEVXVNUzB4TGpVdE1DNDNMRGt1TlN3ekxqSmpOaXd5TGpFc01UQXVOeXcyTGpnc01USXVPQ3d4TWk0NGFDMHlMakZzTFRBdU1TMHdMakVLQ1FrSlRERTVMamtzTVRaSUxURXlMalJNTFRFeUxqUXNNVFo2SUUweE55NDVMREl6TGpkc01TNDBMVEF1TjJneExqTjJNbWd0TXpaMkxURXVNV3d3TGpNdE1DNHliREV1TkMwd0xqZG9NaTQyYkRFdU5Dd3dMamRqTUM0NExEQXVOQ3d4TGpnc01DNDBMREl1Tnl3d2JERXVOQzB3TGpkSUxUTUtDUWtKYkRFdU5Dd3dMamRqTUM0NExEQXVOQ3d4TGpnc01DNDBMREl1Tnl3d1RESXVNeXd5TTJneUxqWnNNUzQwTERBdU4yTXdMamNzTUM0MExERXVOeXd3TGpRc01pNDFMREJzTVM0M0xUQXVOMmd6TGpKc01TNDNMREF1TjBNeE5pNHlMREkwTGpFc01UY3VNU3d5TkM0eExERTNMamtzTWpNdU4zb0tDUWtKSUUwdE1UTXVPQ3d5TjJ3eE5pNDBMRFF1T1V3eE9DNDVMREkzU0MweE15NDRlaUJOTFRFMExqUXNNamxvTUM0emJERTJMamNzTld3eE5pNDNMVFZvTUM0ell6RXVOeXd3TERNc01TNHpMRE1zTTNNdE1TNHpMRE10TXl3emFDMHpOR010TVM0M0xEQXRNeTB4TGpNdE15MHpDZ2tKQ1VNdE1UY3VOQ3d6TUM0ekxURTJMakVzTWprdE1UUXVOQ3d5T1hvZ1RTMHhNeTR4TERNM1l6QXVPQ3d5TGpRc015NHhMRFFzTlM0M0xEUm9NakJqTWk0MUxEQXNOQzQ0TFRFdU5pdzFMamN0TkVNeE9DNHlMRE0zTFRFekxqRXNNemN0TVRNdU1Td3pOM29pTHo0S0NRazhjR0YwYUNCcFpEMGljR0YwYURaZlptbHNiQzFqYjNCNUlpQmpiR0Z6Y3owaWMzUXdJaUJrUFNKTk1qZzBMalFzTVRaak1DNHlMREF1Tml3d0xqUXNNUzR6TERBdU5Td3lhQzB6TGpkc01TNHlMREl1TTJ3d0xqVXNNQzQ1YkMwd0xqSXNNQzR4VmpJNFl6SXVNaXd4TGpjc01pNDNMRFF1T0N3eExEY0tDUWtKWXkwd0xqZ3NNUzB4TGprc01TNDNMVE11TWl3eExqbFdNemRqTFRBdU9Td3pMalV0TkM0eExEWXROeTQ0TERab0xUSXdZeTB6TGpZc01DMDJMamd0TWk0MUxUY3VOeTAyZGkwd0xqRmpMVEl1Tnkwd0xqUXROQzQyTFRNdE5DNHlMVFV1TjJNd0xqSXRNUzR6TERBdU9TMHlMalVzTVM0NUxUTXVNZ29KQ1FsMkxUWXVPR3d0TUM0NExURXVObXd0TUM0MExUQXVPV3d3TGprdE1DNDBUREkwTXl3eE9HZ3RNMk15TGpndE1USXVOQ3d4TlM0eExUSXdMaklzTWpjdU5TMHhOeTQwUXpJM05TNDBMREl1TXl3eU9ERXVPU3c0TGpJc01qZzBMalFzTVRaNklFMHlORGN1TlN3eE9Bb0pDUWxqTFRBdU1pd3dMVEF1TXl3d0xUQXVOQ3d3TGpGc0xUTXVNU3d4TGpac01DNDVMREV1T0d3eExqTXRNQzQzWXpBdU9DMHdMalFzTVM0NExUQXVOQ3d5TGpjc01Hd3lMaklzTVM0eFl6QXVNeXd3TGpFc01DNDJMREF1TVN3d0xqa3NNR3d5TGpJdE1TNHhDZ2tKQ1dNd0xqZ3RNQzQwTERFdU9DMHdMalFzTWk0M0xEQnNNaTR5TERFdU1XTXdMak1zTUM0eExEQXVOaXd3TGpFc01DNDVMREJzTWk0eUxURXVNV013TGpndE1DNDBMREV1T0Mwd0xqUXNNaTQzTERCc01pNHlMREV1TVdNd0xqTXNNQzR4TERBdU5pd3dMakVzTUM0NUxEQnNNaTQ1TFRFdU13b0pDUWxqTUM0NExUQXVNeXd4TGpjdE1DNHpMREl1TkN3d2JESXVPU3d4TGpOak1DNHpMREF1TVN3d0xqWXNNQzR4TERBdU9Td3diRE11TVMweExqVnNMVEF1T1MweExqaHNMVEV1TkN3d0xqZGpMVEF1T0N3d0xqUXRNUzQzTERBdU5DMHlMallzTUM0eGJDMHlMamd0TVM0eUNna0pDV010TUM0eExUQXVNUzB3TGpNdE1DNHhMVEF1TkMwd0xqRnNNQ3d3WXkwd0xqRXNNQzB3TGpNc01DMHdMalFzTUM0eGJDMHlMamdzTVM0eVl5MHdMamdzTUM0MExURXVPQ3d3TGpNdE1pNDJMVEF1TVd3dE1pNHpMVEV1TVdNdE1DNHhMVEF1TVMwd0xqTXRNQzR4TFRBdU5TMHdMakZzTUN3d0Nna0pDV010TUM0eUxEQXRNQzR6TERBdE1DNDBMREF1TVd3dE1pNHlMREV1TVdNdE1DNDRMREF1TkMweExqZ3NNQzQwTFRJdU55d3diQzB5TGpJdE1TNHhZeTB3TGpFdE1DNHhMVEF1TXkwd0xqRXRNQzQwTFRBdU1Xd3dMREJqTFRBdU1pd3dMVEF1TXl3d0xUQXVOQ3d3TGpGc0xUSXVNaXd4TGpFS0NRa0pZeTB3TGpnc01DNDBMVEV1T0N3d0xqUXRNaTQzTERCc0xUSXVNaTB4TGpGRE1qUTNMamtzTVRnc01qUTNMamNzTVRnc01qUTNMalVzTVRoTU1qUTNMalVzTVRoTU1qUTNMalVzTVRoNklFMHlORGN1TlN3eE5tZ3ROQzQ1WXpNdU9TMHhNQzQ1TERFMUxqa3RNVFl1Tnl3eU5pNDRMVEV5TGpnS0NRa0pZellzTWk0eExERXdMamNzTmk0NExERXlMamdzTVRJdU9HZ3RNaTR4YkMwd0xqRXRNQzR4YkMwd0xqTXNNQzR4U0RJME55NDFUREkwTnk0MUxERTJlaUJOTWpjM0xqa3NNak11TjJ3eExqUXRNQzQzYURFdU0zWXlhQzB6Tm5ZdE1TNHhiREF1TXkwd0xqSnNNUzQwTFRBdU4yZ3lMallLQ1FrSmJERXVOQ3d3TGpkak1DNDRMREF1TkN3eExqZ3NNQzQwTERJdU55d3diREV1TkMwd0xqZG9NaTQyYkRFdU5Dd3dMamRqTUM0NExEQXVOQ3d4TGpnc01DNDBMREl1Tnl3d2JERXVOQzB3TGpkb01pNDJiREV1TkN3d0xqZGpNQzQ0TERBdU5Dd3hMamNzTUM0MExESXVOaXd3TGpGc01TNDNMVEF1TndvSkNRbG9NeTR5YkRFdU55d3dMamRETWpjMkxqSXNNalF1TVN3eU56Y3VNU3d5TkM0eExESTNOeTQ1TERJekxqZE1NamMzTGprc01qTXVOM29nVFRJME5pNHlMREkzYkRFMkxqUXNOQzQ1VERJM09Td3lOMGd5TkRZdU1ub2dUVEkwTlM0MUxESTVhREF1TTJ3eE5pNDNMRFZzTVRZdU55MDFhREF1TXdvSkNRbGpNUzQzTERBc015d3hMak1zTXl3emN5MHhMak1zTXkwekxETm9MVE0wWXkweExqY3NNQzB6TFRFdU15MHpMVE5UTWpRekxqa3NNamtzTWpRMUxqVXNNamw2SUUweU5EWXVPU3d6TjJNd0xqZ3NNaTQwTERNdU1TdzBMRFV1Tml3MGFESXdZekl1TlN3d0xEUXVPQzB4TGpZc05TNDNMVFFLQ1FrSlNESTBOaTQ1ZWlJdlBnb0pDVHh3WVhSb0lHTnNZWE56UFNKemREQWlJR1E5SWsweE5Ua3VOU3d5TVdNdE1TNHpMVE11TmkwMExqY3ROaTA0TGpVdE5tZ3ROREpqTFRNdU9Dd3dMVGN1TWl3eUxqUXRPQzQxTERaakxUTXVNeXd3TGpNdE5TNDRMRE11TWkwMUxqVXNOaTQxWXpBdU1pd3lMamtzTWk0MkxEVXVNaXcxTGpVc05TNDFDZ2tKQ1dNdE1TNDNMRFF1Tnl3d0xqZ3NPUzQ0TERVdU5Dd3hNUzQxWXpFc01DNHpMRElzTUM0MUxETXNNQzQxYURReVl6VXNNQ3c1TFRRc09TMDVZekF0TVMwd0xqSXRNaTR4TFRBdU5TMHpZek11TXkwd0xqTXNOUzQ0TFRNdU1pdzFMalV0Tmk0MUNna0pDVU14TmpRdU55d3lNeTQyTERFMk1pNDBMREl4TGpNc01UVTVMalVzTWpGNklFMHhOVEVzTVRkb0xUUXlZeTB5TGpjc01DMDFMaklzTVM0MkxUWXVNeXcwYURVMExqZERNVFUyTGpJc01UZ3VOaXd4TlRNdU55d3hOeXd4TlRFc01UZDZJRTB4TkRFdU55dzBNd29KQ1Fsak1pNHhMVEV1Tnl3ekxqTXROQzR6TERNdU15MDNhQzB5WXpBc015NDVMVE11TVN3M0xUY3NOMmd0TkM0ell6SXVNUzB4TGpjc015NHpMVFF1TXl3ekxqTXROMmd0TW1Nd0xETXVPUzB6TGpFc055MDNMRGRvTFRRdU0yTXlMakV0TVM0M0xETXVNeTAwTGpNc015NHpMVGRvTFRJS0NRa0pZekFzTXk0NUxUTXVNU3czTFRjc04yZ3ROMk10TXk0NUxEQXROeTB6TGpFdE55MDNjek11TVMwM0xEY3ROMmcwTW1Nekxqa3NNQ3czTERNdU1TdzNMRGR6TFRNdU1TdzNMVGNzTjBneE5ERXVOM29nVFRFd09Td3lOMk10TXl3d0xUVXVPQ3d4TGpVdE55NDFMRFJJTVRBeENna0pDV010TWk0eUxEQXROQzB4TGpndE5DMDBjekV1T0MwMExEUXROR2cxT0dNeUxqSXNNQ3cwTERFdU9DdzBMRFJ6TFRFdU9DdzBMVFFzTkdndE1DNDFZeTB4TGpjdE1pNDFMVFF1TlMwMExUY3VOUzAwU0RFd09Yb2lMejRLQ1FrOGNHRjBhQ0JqYkdGemN6MGljM1F3SWlCa1BTSk5NemtzTVRFMVl6UXVOQ3d3TERndE15NDJMRGd0T0hNdE15NDJMVGd0T0MwNGN5MDRMRE11TmkwNExEaFRNelF1Tml3eE1UVXNNemtzTVRFMWVpQk5ORFVzTVRBM1l6QXNNeTR6TFRJdU55dzJMVFlzTm5NdE5pMHlMamN0TmkwMkNna0pDWE15TGpjdE5pdzJMVFpUTkRVc01UQXpMamNzTkRVc01UQTNlaUJOTkRJc056aDJMVEpvT0hZdE5rZzBNR010TWk0eUxEQXROQ3d4TGpndE5DdzBkakV3U0RJeWJDMHhMak1zTkV3eU1DdzVNR2d5TGpKc015NDRMRFF3YURJMmJETXVPQzAwTUVnMU9Hd3RNQzQzTFRKTU5UWXNPRFJJTkRKV056aDZDZ2tKQ1NCTk16Z3NOelIyTVRCb01sWTNOR2c0ZGkweWFDMDRRek00TGprc056SXNNemdzTnpJdU9Td3pPQ3czTkhvZ1RUUXdMRGcyYURFMExqWnNNQzQzTERKSU1qSXVPR3d3TGpjdE1rZzBNSG9nVFRVekxqZ3NPVEJJTWpRdU1td3pMallzTXpob01qSXVORXcxTXk0NExEa3dlaUl2UGdvSkNUeHdZWFJvSUdOc1lYTnpQU0p6ZERBaUlHUTlJazB4TWprc09USm9MVFoyTkdndE5uWTBhQzAyZGpFMGFDMHpiREF1TWl3eWJETXVPQ3d6TW1nek5td3pMamd0TXpKc01DNHlMVEpvTFROMkxURTBhQzAyZGkwMGFDMDJkaTAwU0RFeU9Yb2dUVEUwTnl3eE1UUjJMVEV5YUMwMGRqUm9NM1k0U0RFME53b0pDUWw2SUUweE5EUXNNVEUwZGkwMmFDMDBkalpJTVRRMGVpQk5NVE00TERFeU1IWXRNVFpvTFRSMk1Ua3VNa014TXpVdU5pd3hNakl1TlN3eE16Y3NNVEl4TGpRc01UTTRMREV5TUhvZ1RURXpNaXd4TWpNdU9GWXhNREJvTFRSMk1qTXVPQW9KQ1FsRE1USTVMak1zTVRJMExqRXNNVE13TGpjc01USTBMakVzTVRNeUxERXlNeTQ0ZWlCTk1USTJMREV5TXk0eVZqRXdOR2d0TkhZeE5rTXhNak1zTVRJeExqUXNNVEkwTGpRc01USXlMalVzTVRJMkxERXlNeTR5ZWlCTk1USXdMREV4TkhZdE5tZ3ROSFkyU0RFeU1Ib2dUVEV4TkN3eE1UUjJMVGhvTXdvSkNRbDJMVFJvTFRSMk1USklNVEUwZWlCTk1UUXhMREV3TW5ZdE5HZ3ROSFkwYUROMk5HZ3hWakV3TW5vZ1RURXpOU3d4TURKMkxUaG9MVFIyTkdnemRqUklNVE0xZWlCTk1USTVMRGs0ZGkwMGFDMDBkamhvTVhZdE5FZ3hNamw2SUUweE1qTXNNVEF5ZGkwMGFDMDBkamhvTVhZdE5FZ3hNak42Q2drSkNTQk5NVE13TERFeU5tTTFMamtzTUN3eE1DNDVMVFF1TWl3eE1TNDRMVEV3YURjdU9Xd3RNeTQxTERNd2FDMHpNaTQwYkMwekxqVXRNekJvTnk0NVF6RXhPUzR4TERFeU1TNDRMREV5TkM0eExERXlOaXd4TXpBc01USTJlaUl2UGdvSkNUeHdZWFJvSUdOc1lYTnpQU0p6ZERBaUlHUTlJazB5TVRJc09EWjJNbWd0TkhZdE1rZ3lNVEo2SUUweU1UWXNPRFpvTFRKMk1tZ3lWamcyZWlCTk1UazJMRGcyVERFNU5pdzRObU10TWk0M0xEQXVOeTAwTGpVc015NHpMVE11T1N3Mll6QXVOQ3d4TGpnc01TNDJMRE11TWl3ekxqTXNNeTQ0Q2drSkNXd3dMakVzTUM0eWJERXVNU3cwTGpWak1DNHlMREF1T1N3eExERXVOU3d4TGprc01TNDFiREFzTUd3M0xESTBMalpqTUM0eUxEQXVPU3d4TERFdU5Dd3hMamtzTVM0MGFEVmpNQzQ1TERBc01TNDNMVEF1Tml3eExqa3RNUzQwYkRjdE1qUXVObU13TGprc01Dd3hMamN0TUM0MkxERXVPUzB4TGpVS0NRa0piREV1TVMwMExqVnNNQzR4TFRBdU1tTXlMall0TUM0NUxEUXVNUzB6TGpjc015NHlMVFl1TTJNdE1DNDJMVEV1TnkweUxUTXRNeTQ0TFRNdU0xWTRObU13TFRjdU55MDJMak10TVRRdE1UUXRNVFJUTVRrMkxEYzRMak1zTVRrMkxEZzJlaUJOTWpBd0xEZzJhRFoyTW1ndE9Rb0pDUWxqTFRFdU55d3dMVE1zTVM0ekxUTXNNM014TGpNc015d3pMRE5vTWpaak1TNDNMREFzTXkweExqTXNNeTB6Y3kweExqTXRNeTB6TFROb0xUTjJMVEpvTW1Nd0xUWXVOaTAxTGpRdE1USXRNVEl0TVRKekxURXlMRFV1TkMweE1pd3hNa2d5TURCNklFMHhPVGd1Tml3eE1EQnNMVEV0TkdneU5DNDVDZ2tKQ1d3dE1TdzBTREU1T0M0MmVpQk5NakEzTGpVc01USTJiQzAyTGprdE1qUm9NVGd1TjJ3dE5pNDVMREkwU0RJd055NDFlaUJOTVRVd0xESTBNbU14TWk0eUxEQXNNakl0T1M0NExESXlMVEl5Y3kwNUxqZ3RNakl0TWpJdE1qSnpMVEl5TERrdU9DMHlNaXd5TWdvSkNRbFRNVE0zTGpnc01qUXlMREUxTUN3eU5ESjZJRTB4TnpRc01qSXdZekFzTVRNdU15MHhNQzQzTERJMExUSTBMREkwY3kweU5DMHhNQzQzTFRJMExUSTBiREFzTUdNd0xURXpMak1zTVRBdU55MHlOQ3d5TkMweU5GTXhOelFzTWpBMkxqY3NNVGMwTERJeU1Ib2dUVEUwTlM0MkxESXpOeTQzQ2drSkNXd3lMVEF1T1dNeExqVXRNQzQyTERNdU1pMHdMallzTkM0M0xEQnNNaXd3TGpsak1DNDVMREF1TkN3eUxEQXNNaTQxTFRBdU9Hd3hMakV0TVM0NVl6QXVPQzB4TGpRc01pNHlMVEl1TkN3ekxqZ3RNaTQ0YkRJdU1TMHdMalZqTVMwd0xqSXNNUzQyTFRFdU1Td3hMalV0TWk0eGJDMHdMakl0TWk0eUNna0pDV010TUM0eExURXVOaXd3TGpRdE15NHlMREV1TkMwMExqVnNNUzQwTFRFdU4yTXdMamN0TUM0NExEQXVOeTB4TGprc01DMHlMalpzTFRFdU5DMHhMamRqTFRFdU1TMHhMakl0TVM0MkxUSXVPQzB4TGpRdE5DNDFiREF1TWkweUxqSmpNQzR4TFRFdE1DNDJMVEV1T1MweExqWXRNaTR4Q2drSkNXd3RNaTR4TFRBdU5XTXRNUzQyTFRBdU5DMHpMVEV1TkMwekxqZ3RNaTQ0YkMweExqRXRNUzQ1WXkwd0xqVXRNQzQ1TFRFdU5pMHhMakl0TWk0MUxUQXVPR3d0TWl3d0xqbGpMVEV1TlN3d0xqWXRNeTR5TERBdU5pMDBMamNzTUd3dE1pMHdMamxqTFRBdU9TMHdMalF0TWl3d0xUSXVOU3d3TGpnS0NRa0piQzB4TERJdU1XTXRNQzQ0TERFdU5DMHlMaklzTWk0MExUTXVPQ3d5TGpoc0xUSXVNU3d3TGpWakxURXNNQzR5TFRFdU5pd3hMakV0TVM0MUxESXVNV3d3TGpJc01pNHlZekF1TVN3eExqWXRNQzQwTERNdU1pMHhMalFzTkM0MWJDMHhMalFzTVM0M0Nna0pDV010TUM0M0xEQXVPQzB3TGpjc01TNDVMREFzTWk0MmJERXVOQ3d4TGpkak1TNHhMREV1TWl3eExqWXNNaTQ0TERFdU5DdzBMalZzTFRBdU1pd3lMakpqTFRBdU1Td3hMREF1Tml3eExqa3NNUzQyTERJdU1Xd3lMakVzTUM0MVl6RXVOaXd3TGpRc015d3hMalFzTXk0NExESXVPR3d4TGpFc01TNDVDZ2tKQ1VNeE5ETXVOaXd5TXpjdU9Dd3hORFF1Tnl3eU16Z3VNU3d4TkRVdU5pd3lNemN1TjB3eE5EVXVOaXd5TXpjdU4zb2dUVEUwT0M0MExESXpPQzQzWXpFdE1DNDBMREl1TVMwd0xqUXNNeTR4TERCc01pd3dMamxqTVM0NExEQXVPQ3cwTERBdU1TdzFMVEV1Tm13eExqRXRNUzQ1Q2drSkNXTXdMall0TUM0NUxERXVOUzB4TGpZc01pNDFMVEV1T0d3eUxqRXRNQzQxWXpFdU9TMHdMalFzTXk0ekxUSXVNeXd6TGpFdE5DNHliQzB3TGpJdE1pNHlZeTB3TGpFdE1TNHhMREF1TXkweUxqSXNNUzB6YkRFdU5DMHhMamRqTVM0ekxURXVOU3d4TGpNdE15NDNMREF0TlM0eWJDMHhMalF0TVM0M0Nna0pDV010TUM0M0xUQXVPQzB4TGpFdE1TNDVMVEV0TTJ3d0xqSXRNaTR5WXpBdU1pMHlMVEV1TVMwekxqZ3RNeTR4TFRRdU1td3RNaTR4TFRBdU5XTXRNUzR4TFRBdU1pMHlMVEF1T1MweUxqVXRNUzQ0YkMweExqRXRNUzQ1WXkweExURXVOeTB6TGpJdE1pNDBMVFV0TVM0MmJDMHlMREF1T1FvSkNRbGpMVEVzTUM0MExUSXVNU3d3TGpRdE15NHhMREJzTFRJdE1DNDVZeTB4TGpndE1DNDRMVFF0TUM0eExUVXNNUzQyYkMweExqRXNNUzQ1WXkwd0xqWXNNQzQ1TFRFdU5Td3hMall0TWk0MUxERXVPR3d0TWk0eExEQXVOV010TVM0NUxEQXVOQzB6TGpNc01pNHpMVE11TVN3MExqSnNNQzR5TERJdU1nb0pDUWxqTUM0eExERXVNUzB3TGpNc01pNHlMVEVzTTJ3dE1TNDBMREV1TjJNdE1TNHpMREV1TlMweExqTXNNeTQzTERBc05TNHliREV1TkN3eExqZGpNQzQzTERBdU9Dd3hMakVzTVM0NUxERXNNMnd0TUM0eUxESXVNbU10TUM0eUxESXNNUzR4TERNdU9Dd3pMakVzTkM0eWJESXVNU3d3TGpVS0NRa0pZekV1TVN3d0xqSXNNaXd3TGprc01pNDFMREV1T0d3eExqRXNNUzQ1WXpFc01TNDNMRE11TWl3eUxqUXNOU3d4TGpaTU1UUTRMalFzTWpNNExqZDZJRTB4TlRJc01qQTNZekF0TUM0MkxEQXVOQzB4TERFdE1YTXhMREF1TkN3eExERnpMVEF1TkN3eExURXNNUW9KQ1FsVE1UVXlMREl3Tnk0MkxERTFNaXd5TURkNklFMHhOVGdzTWpBNVl6QXRNQzQyTERBdU5DMHhMREV0TVhNeExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01WTXhOVGdzTWpBNUxqWXNNVFU0TERJd09Yb2dUVEUwTnl3eU1UQmpNQzB3TGpZc01DNDBMVEVzTVMweGN6RXNNQzQwTERFc01Rb0pDUWx6TFRBdU5Dd3hMVEVzTVZNeE5EY3NNakV3TGpZc01UUTNMREl4TUhvZ1RURTBNU3d5TVRCak1DMHdMallzTUM0MExURXNNUzB4Y3pFc01DNDBMREVzTVhNdE1DNDBMREV0TVN3eFV6RTBNU3d5TVRBdU5pd3hOREVzTWpFd2VpQk5NVFEwTERJd05XTXdMVEF1Tml3d0xqUXRNU3d4TFRFS0NRa0pjekVzTUM0MExERXNNWE10TUM0MExERXRNU3d4VXpFME5Dd3lNRFV1Tml3eE5EUXNNakExZWlCTk1UTTJMREl4TTJNd0xUQXVOaXd3TGpRdE1Td3hMVEZ6TVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGVE1UTTJMREl4TXk0MkxERXpOaXd5TVRONklFMHhNemtzTWpFNUNna0pDV013TFRBdU5pd3dMalF0TVN3eExURnpNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZUTVRNNUxESXhPUzQyTERFek9Td3lNVGw2SUUweE16a3NNakkxWXpBdE1DNDJMREF1TkMweExERXRNWE14TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVZNeE16a3NNakkxTGpZc01UTTVMREl5TlhvS0NRa0pJRTB4TkRNc01qTXlZekF0TUM0MkxEQXVOQzB4TERFdE1YTXhMREF1TkN3eExERnpMVEF1TkN3eExURXNNVk14TkRNc01qTXlMallzTVRRekxESXpNbm9nVFRFME9Dd3lNekJqTUMwd0xqWXNNQzQwTFRFc01TMHhjekVzTUM0MExERXNNWE10TUM0MExERXRNU3d4Q2drSkNWTXhORGdzTWpNd0xqWXNNVFE0TERJek1Ib2dUVEUxTXl3eU16UmpNQzB3TGpZc01DNDBMVEVzTVMweGN6RXNNQzQwTERFc01YTXRNQzQwTERFdE1Td3hVekUxTXl3eU16UXVOaXd4TlRNc01qTTBlaUJOTVRVM0xESXlPR013TFRBdU5pd3dMalF0TVN3eExURnpNU3d3TGpRc01Td3hDZ2tKQ1hNdE1DNDBMREV0TVN3eFV6RTFOeXd5TWpndU5pd3hOVGNzTWpJNGVpQk5NVFl6TERJeU5HTXdMVEF1Tml3d0xqUXRNU3d4TFRGek1Td3dMalFzTVN3eGN5MHdMalFzTVMweExERlRNVFl6TERJeU5DNDJMREUyTXl3eU1qUjZJRTB4TlRrc01qSXhZekF0TUM0MkxEQXVOQzB4TERFdE1Rb0pDUWx6TVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGVE1UVTVMREl5TVM0MkxERTFPU3d5TWpGNklFMHhOak1zTWpFNFl6QXRNQzQyTERBdU5DMHhMREV0TVhNeExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01WTXhOak1zTWpFNExqWXNNVFl6TERJeE9Ib2dUVEUxT0N3eU1UUUtDUWtKWXpBdE1DNDJMREF1TkMweExERXRNWE14TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVZNeE5UZ3NNakUwTGpZc01UVTRMREl4TkhvZ1RURXpOQ3d5TWpCak1DMHdMallzTUM0MExURXNNUzB4Y3pFc01DNDBMREVzTVhNdE1DNDBMREV0TVN3eFV6RXpOQ3d5TWpBdU5pd3hNelFzTWpJd2Vnb0pDUWtnVFRFMU1Dd3lNalZqTWk0NExEQXNOUzB5TGpJc05TMDFjeTB5TGpJdE5TMDFMVFZ6TFRVc01pNHlMVFVzTlZNeE5EY3VNaXd5TWpVc01UVXdMREl5TlhvZ1RURTFOeXd5TWpCak1Dd3pMamt0TXk0eExEY3ROeXczY3kwM0xUTXVNUzAzTFRkek15NHhMVGNzTnkwM0Nna0pDVk14TlRjc01qRTJMakVzTVRVM0xESXlNSG9nVFRJME15d3hPVEZqTFRBdU5pd3dMVEVzTUM0MExURXNNWE13TGpRc01Td3hMREZvTW1Nd0xqWXNNQ3d4TFRBdU5Dd3hMVEZ6TFRBdU5DMHhMVEV0TVVneU5ETjZJRTB5TmpJc01qQXdZekF0TUM0MkxEQXVOQzB4TERFdE1XZ3lDZ2tKQ1dNd0xqWXNNQ3d4TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVdndE1rTXlOakl1TkN3eU1ERXNNall5TERJd01DNDJMREkyTWl3eU1EQjZJRTB5TkRnc01qQTFZeTB3TGpZc01DMHhMREF1TkMweExERnpNQzQwTERFc01Td3hhREpqTUM0MkxEQXNNUzB3TGpRc01TMHhjeTB3TGpRdE1TMHhMVEVLQ1FrSlNESTBPSG9nVFRJeU15d3lNRFpqTFRBdU5pd3dMVEVzTUM0MExURXNNWE13TGpRc01Td3hMREZvTW1Nd0xqWXNNQ3d4TFRBdU5Dd3hMVEZ6TFRBdU5DMHhMVEV0TVVneU1qTjZJRTB5TWpnc01qRXdZeTB3TGpZc01DMHhMREF1TkMweExERnpNQzQwTERFc01Td3hhRElLQ1FrSll6QXVOaXd3TERFdE1DNDBMREV0TVhNdE1DNDBMVEV0TVMweFNESXlPSG9nVFRJek55d3lNVEJqTUMwd0xqWXNNQzQwTFRFc01TMHhhREpqTUM0MkxEQXNNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZvTFRKRE1qTTNMalFzTWpFeExESXpOeXd5TVRBdU5pd3lNemNzTWpFd2Vnb0pDUWtnVFRJMU1pd3lNVEZqTUMwd0xqWXNNQzQwTFRFc01TMHhhREpqTUM0MkxEQXNNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZvTFRKRE1qVXlMalFzTWpFeUxESTFNaXd5TVRFdU5pd3lOVElzTWpFeGVpQk5NalkwTERJd09XTXRNQzQyTERBdE1Td3dMalF0TVN3eGN6QXVOQ3d4TERFc01XZ3lDZ2tKQ1dNd0xqWXNNQ3d4TFRBdU5Dd3hMVEZ6TFRBdU5DMHhMVEV0TVVneU5qUjZJRTB5TlRNc01UazFZekF0TUM0MkxEQXVOQzB4TERFdE1XZ3lZekF1Tml3d0xERXNNQzQwTERFc01YTXRNQzQwTERFdE1Td3hhQzB5UXpJMU15NDBMREU1Tml3eU5UTXNNVGsxTGpZc01qVXpMREU1TlhvS0NRa0pJRTB5TXpRc01UazFZeTB3TGpZc01DMHhMREF1TkMweExERnpNQzQwTERFc01Td3hhREpqTUM0MkxEQXNNUzB3TGpRc01TMHhjeTB3TGpRdE1TMHhMVEZJTWpNMGVpQk5NalF3TERJd01HTXdMVEF1Tml3d0xqUXRNU3d4TFRGb01tTXdMallzTUN3eExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01Rb0pDUWxvTFRKRE1qUXdMalFzTWpBeExESTBNQ3d5TURBdU5pd3lOREFzTWpBd2VpQk5NakUxTERJeE5XTXdMVEF1TlN3d0xUQXVPU3d3TFRFdU5HTXRNaTQxTFRFdU1TMHpMamN0TkMweUxqWXROaTQyWXpBdU1pMHdMalVzTUM0MUxURXNNQzQ1TFRFdU5HTXRNQzQ1TFRJc01DMDBMaklzTVM0NUxUVXVNZ29KQ1FsakxUQXVPQzB5TGpZc01DNDNMVFV1TkN3ekxqUXROaTR5YkRBc01HTXdMalF0TUM0MUxEQXVPUzB3TGprc01TNDFMVEV1TVdNd0xqVXRNaTQzTERNdU1TMDBMalVzTlM0NExUUXVNV013TGpjc01DNHhMREV1TkN3d0xqUXNNaXd3TGpoak5TNHpMVE11T0N3eE1TNDJMVFV1T1N3eE9DNHlMVFV1T1FvSkNRbGpOaTQ0TERBc01UTXVNU3d5TGpJc01UZ3VNaXcxTGpsak1pNHpMVEV1Tml3MUxqUXRNU3czTERFdU0yTXdMalFzTUM0MkxEQXVOeXd4TGpNc01DNDRMREpqTUM0MkxEQXVNaXd4TGpFc01DNDJMREV1TlN3eExqRmpNaTQzTERBdU9DdzBMaklzTXk0MUxETXVOQ3cyTGpKc01Dd3dDZ2tKQ1dNeExqa3NNU3d5TGpjc015NHlMREV1T1N3MUxqSmpNUzQ1TERJc01TNDRMRFV1TWkwd0xqSXNOMk10TUM0MExEQXVOQzB3TGprc01DNDNMVEV1TlN3eFl6QXNNQzQxTERBc01DNDVMREFzTVM0MGRqRm9MVFl5ZGkweFNESXhOWG9nVFRJeE5TNDRMREl3Tnk0NENna0pDV010TUM0ekxERXVNaTB3TGpVc01pNDBMVEF1Tml3ekxqWmpMVEV1TXkweExURXVOaTB5TGprdE1DNDJMVFF1TW13d0xEQkRNakUxTERJd055NDFMREl4TlM0MExESXdOeTQzTERJeE5TNDRMREl3Tnk0NFRESXhOUzQ0TERJd055NDRlaUJOTWpFM0xqTXNNakF6TGpJS0NRa0pZeTB3TGpRc01DNDVMVEF1Tnl3eExqZ3RNU3d5TGpkakxURXRNQzQwTFRFdU5pMHhMalV0TVM0ekxUSXVOV013TGpJdE1DNDFMREF1Tmkwd0xqa3NNUzR4TFRFdU1rTXlNVFl1TlN3eU1ESXVOaXd5TVRZdU9Td3lNREl1T1N3eU1UY3VNeXd5TURNdU1rd3lNVGN1TXl3eU1ETXVNbm9LQ1FrSklFMHlNVGt1Tml3eE9UZ3VOMk10TUM0MUxEQXVPUzB4TERFdU9DMHhMalVzTWk0M1l5MHhMak10TVMweExqVXRNaTQ1TFRBdU5TMDBMakpqTUM0eExUQXVNaXd3TGpNdE1DNHpMREF1TkMwd0xqVkRNakU0TGpNc01UazNMallzTWpFNExqa3NNVGs0TGpNc01qRTVMallzTVRrNExqY0tDUWtKVERJeE9TNDJMREU1T0M0M2VpQk5Nakl3TGpnc01UazNZekF1TkMwd0xqVXNNQzQzTFRFc01TNHhMVEV1TldNdE1DNHpMVEF1TlMwd0xqa3RNQzQzTFRFdU5DMHdMalJ6TFRBdU55d3dMamt0TUM0MExERXVORU15TWpBdU15d3hPVFl1Tnl3eU1qQXVOU3d4T1RZdU9Td3lNakF1T0N3eE9UY0tDUWtKVERJeU1DNDRMREU1TjNvZ1RUSXlOaTR4TERFNU1TNHlZeTB4TERBdU9TMHlMREV1T0MweUxqa3NNaTQ0WXkwd0xqTXRNQzR6TFRBdU55MHdMall0TVM0eExUQXVPR013TGpRdE1TNDJMREl1TVMweUxqVXNNeTQzTFRJdU1Rb0pDUWxETWpJMUxqa3NNVGt4TGpFc01qSTJMREU1TVM0eUxESXlOaTR4TERFNU1TNHlUREl5Tmk0eExERTVNUzR5ZWlCTk1qWTRMamdzTVRrMFl5MHdMamt0TVMweExqa3RNUzQ1TFRJdU9TMHlMamhqTVM0MUxUQXVOaXd6TGpNc01DNHhMRE11T1N3eExqY0tDUWtKWXpBc01DNHhMREF1TVN3d0xqSXNNQzR4TERBdU0wTXlOamt1TlN3eE9UTXVOQ3d5TmprdU1Td3hPVE11Tml3eU5qZ3VPQ3d4T1RSTU1qWTRMamdzTVRrMGVpQk5NamN3TGpFc01UazFMalZqTUM0MExEQXVOU3d3TGpnc01Td3hMakVzTVM0MENna0pDV013TGpVdE1DNHhMREF1T1Mwd0xqY3NNQzQ0TFRFdU1uTXRNQzQzTFRBdU9TMHhMakl0TUM0NFF6STNNQzQxTERFNU5TNHhMREkzTUM0ekxERTVOUzR6TERJM01DNHhMREU1TlM0MWVpQk5NamN6TGprc01qQXhMalJqTFRBdU5TMHdMamt0TVMweExqZ3RNUzQxTFRJdU53b0pDUWxqTUM0NExUQXVOQ3d4TGpRdE1TNHhMREV1TmkweVl6RXVNeXd4TGpFc01TNDBMRE1zTUM0MExEUXVNa015TnpRdU1pd3lNREV1TVN3eU56UXNNakF4TGpJc01qY3pMamtzTWpBeExqUjZJRTB5TnpVdU5pd3lNRFV1T1dNdE1DNHpMVEF1T1Mwd0xqWXRNUzQ0TFRFdE1pNDNDZ2tKQ1dNd0xqUXRNQzR6TERBdU9DMHdMallzTVM0eUxURmpNU3d3TGpVc01TNDBMREV1Tnl3eExESXVOME15TnpZdU5pd3lNRFV1TXl3eU56WXVNaXd5TURVdU55d3lOelV1Tml3eU1EVXVPWG9nVFRJM05pNDRMREl4TVM0MFl5MHdMakV0TVM0eUxUQXVOQzB5TGpRdE1DNDJMVE11TmdvSkNRbGpNQzQxTFRBdU1Td3dMamt0TUM0MExERXVNaTB3TGpaRE1qYzRMalFzTWpBNExqVXNNamM0TGpFc01qRXdMalFzTWpjMkxqZ3NNakV4TGpSTU1qYzJMamdzTWpFeExqUk1NamMyTGpnc01qRXhMalI2SUUweU56VXNNakUwWXkwd0xqVXRNVFl0TVRNdU9TMHlPQzQyTFRJNUxqa3RNamd1TVFvSkNRbGpMVEUxTGpNc01DNDFMVEkzTGpZc01USXVPQzB5T0M0eExESTRMakZJTWpjMVRESTNOU3d5TVRSNklFMDNNaTR6TERFNU9DNHhZeTB3TGpJdE1DNHpMVEF1TXkwd0xqY3RNQzR6TFRFdU1YWXRNVEpvTFRKMk1USmpNQ3d5TGpJc01TNDRMRFFzTkN3MENna0pDV014TGpJc01Dd3lMak10TUM0MUxETXVNUzB4TGpSak1DNDJMVEF1Tnl3d0xqa3RNUzQyTERBdU9TMHlMalYyTFRFeWFDMHlkakV5WXpBc01TNHhMVEF1T1N3eUxUSXNNbXd3TERCRE56TXVNeXd4T1Rrc056SXVOeXd4T1RndU55dzNNaTR6TERFNU9DNHhlaUJOTnpVc01UYzJDZ2tKQ1dNd0xqUXNNQ3d3TGpjc01Dd3hMakV0TUM0eFl6QXVOU3d5TGpJc01pNDJMRE11TlN3MExqZ3NNMk13TGpVdE1DNHhMREV0TUM0ekxERXVOQzB3TGpaak1TNHhMREl1TVN3eExqY3NOQzQwTERFdU55dzJMamQyTWpSak1Dd3pMak10TWk0M0xEWXROaXcyYUMwemRqa0tDUWtKWXpBc01pNDRMVEl1TWl3MUxUVXNOWE10TlMweUxqSXROUzAxZGkwNWFDMHpZeTB6TGpNc01DMDJMVEl1TnkwMkxUWjJMVEkwWXpBdE55NDNMRFl1TXkweE5Dd3hOQzB4TkVNM01Dd3hOek11T0N3M01pNHlMREUzTml3M05Td3hOelo2SUUwMU9Dd3hPVEYyTVRJS0NRa0pZekFzTUM0NExEQXVOU3d4TGpVc01TNHlMREV1T0dNd0xqa3NNQzQwTERFdU9Td3dMakVzTWk0MExUQXVOMk13TGpJdE1DNHpMREF1TXkwd0xqY3NNQzR6TFRFdU1YWXRNVEpvTW5ZeE1tTXdMREl1TWkweExqY3NOQzB6TGprc05HTXRNQzQxTERBdE1TMHdMakV0TVM0MExUQXVNZ29KQ1FsakxUQXVNaTB3TGpFdE1DNDBMVEF1TWkwd0xqY3RNQzR6ZGpJdU5XTXdMREl1TWl3eExqZ3NOQ3cwTERSb01UWmpNaTR5TERBc05DMHhMamdzTkMwMGRpMHlOR013TFRFdU5TMHdMakl0TWk0NUxUQXVOeTAwTGpKakxUQXVOQ3d3TGpFdE1DNDVMREF1TWkweExqTXNNQzR5Q2drSkNXTXRNaTR4TERBdE5DNHhMVEV1TVMwMUxqSXRNMk10TXkwd0xqRXROUzQyTFRJdE5pNDFMVFF1T1VNMk1pNDBMREUzTkN3MU9Dd3hOemtzTlRnc01UZzFWakU1TVhvZ1RUWTNMREl4TlhZNVl6QXNNUzQzTERFdU15d3pMRE1zTTNNekxURXVNeXd6TFROMkxUbElOamQ2SWk4K0Nna0pQSEJoZEdnZ1kyeGhjM005SW5OME1DSWdaRDBpVFMweE55d3hPVEZqTFRBdU5pd3dMVEVzTUM0MExURXNNWE13TGpRc01Td3hMREZvTW1Nd0xqWXNNQ3d4TFRBdU5Dd3hMVEZ6TFRBdU5DMHhMVEV0TVVndE1UZDZJRTB5TERJd01HTXdMVEF1Tml3d0xqUXRNU3d4TFRGb01nb0pDUWxqTUM0MkxEQXNNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZJTTBNeUxqUXNNakF4TERJc01qQXdMallzTWl3eU1EQjZJRTB0TVRJc01qQTFZeTB3TGpZc01DMHhMREF1TkMweExERnpNQzQwTERFc01Td3hhREpqTUM0MkxEQXNNUzB3TGpRc01TMHhjeTB3TGpRdE1TMHhMVEZJTFRFeWVnb0pDUWtnVFMwek55d3lNRFpqTFRBdU5pd3dMVEVzTUM0MExURXNNWE13TGpRc01Td3hMREZvTW1Nd0xqWXNNQ3d4TFRBdU5Dd3hMVEZ6TFRBdU5DMHhMVEV0TVVndE16ZDZJRTB0TXpJc01qRXdZeTB3TGpZc01DMHhMREF1TkMweExERnpNQzQwTERFc01Td3hhREpqTUM0MkxEQXNNUzB3TGpRc01TMHhDZ2tKQ1hNdE1DNDBMVEV0TVMweFNDMHpNbm9nVFMweU15d3lNVEJqTUMwd0xqWXNNQzQwTFRFc01TMHhhREpqTUM0MkxEQXNNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZvTFRKRExUSXlMallzTWpFeExUSXpMREl4TUM0MkxUSXpMREl4TUhvZ1RTMDRMREl4TVdNd0xUQXVOaXd3TGpRdE1Td3hMVEVLQ1FrSmFESmpNQzQyTERBc01Td3dMalFzTVN3eGN5MHdMalFzTVMweExERm9MVEpETFRjdU5pd3lNVEl0T0N3eU1URXVOaTA0TERJeE1Yb2dUVFFzTWpBNVl5MHdMallzTUMweExEQXVOQzB4TERGek1DNDBMREVzTVN3eGFESmpNQzQyTERBc01TMHdMalFzTVMweGN5MHdMalF0TVMweExURklOSG9LQ1FrSklFMHROeXd4T1RWak1DMHdMallzTUM0MExURXNNUzB4YURKak1DNDJMREFzTVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGb0xUSkRMVFl1Tml3eE9UWXROeXd4T1RVdU5pMDNMREU1TlhvZ1RTMHlOaXd4T1RWakxUQXVOaXd3TFRFc01DNDBMVEVzTVhNd0xqUXNNU3d4TERGb01nb0pDUWxqTUM0MkxEQXNNUzB3TGpRc01TMHhjeTB3TGpRdE1TMHhMVEZJTFRJMmVpQk5MVEl3TERJd01HTXdMVEF1Tml3d0xqUXRNU3d4TFRGb01tTXdMallzTUN3eExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01XZ3RNa010TVRrdU5pd3lNREV0TWpBc01qQXdMall0TWpBc01qQXdlaUJOTFRRMUxESXhOUW9KQ1Fsak1DMHdMalVzTUMwd0xqa3NNQzB4TGpSakxUSXVOUzB4TGpFdE15NDNMVFF0TWk0MkxUWXVObU13TGpJdE1DNDFMREF1TlMweExEQXVPUzB4TGpSakxUQXVPUzB5TERBdE5DNHlMREV1T1MwMUxqSmpMVEF1T0MweUxqWXNNQzQzTFRVdU5Dd3pMalF0Tmk0eWJEQXNNQW9KQ1Fsak1DNDBMVEF1TlN3d0xqa3RNQzQ1TERFdU5TMHhMakZqTUM0MUxUSXVOeXd6TGpFdE5DNDFMRFV1T0MwMExqRmpNQzQzTERBdU1Td3hMalFzTUM0MExESXNNQzQ0WXpVdU15MHpMamdzTVRFdU5pMDFMamtzTVRndU1pMDFMamxqTmk0NExEQXNNVE11TVN3eUxqSXNNVGd1TWl3MUxqa0tDUWtKWXpJdU15MHhMallzTlM0MExURXNOeXd4TGpOak1DNDBMREF1Tml3d0xqY3NNUzR6TERBdU9Dd3lZekF1Tml3d0xqSXNNUzR4TERBdU5pd3hMalVzTVM0eFl6SXVOeXd3TGpnc05DNHlMRE11TlN3ekxqUXNOaTR5YkRBc01HTXhMamtzTVN3eUxqY3NNeTR5TERFdU9TdzFMaklLQ1FrSll6RXVPU3d5TERFdU9DdzFMakl0TUM0eUxEZGpMVEF1TkN3d0xqUXRNQzQ1TERBdU55MHhMalVzTVdNd0xEQXVOU3d3TERBdU9Td3dMREV1TkhZeGFDMDJNbll0TVVndE5EVjZJRTB0TkRRdU1pd3lNRGN1T0dNdE1DNHpMREV1TWkwd0xqVXNNaTQwTFRBdU5pd3pMallLQ1FrSll5MHhMak10TVMweExqWXRNaTQ1TFRBdU5pMDBMakpzTUN3d1F5MDBOU3d5TURjdU5TMDBOQzQyTERJd055NDNMVFEwTGpJc01qQTNMamhNTFRRMExqSXNNakEzTGpoNklFMHROREl1Tnl3eU1ETXVNbU10TUM0MExEQXVPUzB3TGpjc01TNDRMVEVzTWk0M0Nna0pDV010TVMwd0xqUXRNUzQyTFRFdU5TMHhMak10TWk0MVl6QXVNaTB3TGpVc01DNDJMVEF1T1N3eExqRXRNUzR5UXkwME15NDFMREl3TWk0MkxUUXpMakVzTWpBeUxqa3ROREl1Tnl3eU1ETXVNa3d0TkRJdU55d3lNRE11TW5vZ1RTMDBNQzQwTERFNU9DNDNDZ2tKQ1dNdE1DNDFMREF1T1MweExERXVPQzB4TGpVc01pNDNZeTB4TGpNdE1TMHhMalV0TWk0NUxUQXVOUzAwTGpKak1DNHhMVEF1TWl3d0xqTXRNQzR6TERBdU5DMHdMalZETFRReExqY3NNVGszTGpZdE5ERXVNU3d4T1RndU15MDBNQzQwTERFNU9DNDNlaUJOTFRNNUxqSXNNVGszQ2drSkNXTXdMak10TUM0MUxEQXVOeTB4TERFdU1TMHhMalZqTFRBdU15MHdMalV0TUM0NUxUQXVOeTB4TGpRdE1DNDBjeTB3TGpjc01DNDVMVEF1TkN3eExqUkRMVE01TGpjc01UazJMamN0TXprdU5Td3hPVFl1T1Mwek9TNHlMREU1TjB3dE16a3VNaXd4T1RkNklFMHRNek11T1N3eE9URXVNZ29KQ1FsakxURXNNQzQ1TFRJc01TNDRMVEl1T1N3eUxqaGpMVEF1TXkwd0xqTXRNQzQzTFRBdU5pMHhMakV0TUM0NFl6QXVOQzB4TGpZc01pNHhMVEl1TlN3ekxqY3RNaTR4UXkwek5DNHhMREU1TVM0eExUTTBMREU1TVM0eUxUTXpMamtzTVRreExqSk1MVE16TGprc01Ua3hMako2SUUwNExqZ3NNVGswQ2drSkNXTXRNQzQ1TFRFdE1TNDVMVEV1T1MweUxqa3RNaTQ0WXpFdU5TMHdMallzTXk0ekxEQXVNU3d6TGprc01TNDNZekFzTUM0eExEQXVNU3d3TGpJc01DNHhMREF1TTBNNUxqVXNNVGt6TGpRc09TNHhMREU1TXk0MkxEZ3VPQ3d4T1RSTU9DNDRMREU1TkhvZ1RURXdMakVzTVRrMUxqVUtDUWtKWXpBdU5Dd3dMalVzTUM0NExERXNNUzR4TERFdU5HTXdMalV0TUM0eExEQXVPUzB3TGpjc01DNDRMVEV1TW1NdE1DNHhMVEF1TlMwd0xqY3RNQzQ1TFRFdU1pMHdMamhETVRBdU5Td3hPVFV1TVN3eE1DNHpMREU1TlM0ekxERXdMakVzTVRrMUxqVjZJRTB4TXk0NUxESXdNUzQwQ2drSkNXTXRNQzQxTFRBdU9TMHdMamt0TVM0NExURXVOUzB5TGpkak1DNDRMVEF1TkN3eExqUXRNUzR4TERFdU5pMHlZekV1TXl3eExqRXNNUzQwTERNc01DNDBMRFF1TWtNeE5DNHlMREl3TVM0eExERTBMREl3TVM0eUxERXpMamtzTWpBeExqUjZJRTB4TlM0M0xESXdOUzQ1Q2drSkNXTXRNQzR6TFRBdU9TMHdMall0TVM0NExURXRNaTQzWXpBdU5DMHdMak1zTUM0NExUQXVOaXd4TGpJdE1XTXhMREF1TlN3eExqUXNNUzQzTERFc01pNDNRekUyTGpZc01qQTFMak1zTVRZdU1pd3lNRFV1Tnl3eE5TNDNMREl3TlM0NWVpQk5NVFl1T0N3eU1URXVOQW9KQ1FsakxUQXVNUzB4TGpJdE1DNDBMVEl1TkMwd0xqWXRNeTQyWXpBdU5TMHdMakVzTUM0NUxUQXVOQ3d4TGpJdE1DNDJRekU0TGpRc01qQTRMalVzTVRndU1Td3lNVEF1TkN3eE5pNDRMREl4TVM0MFRERTJMamdzTWpFeExqUk1NVFl1T0N3eU1URXVOSG9nVFRFMUxESXhOQW9KQ1FsakxUQXVOUzB4TmkweE15NDVMVEk0TGpZdE1qa3VPUzB5T0M0eFl5MHhOUzR6TERBdU5TMHlOeTQyTERFeUxqZ3RNamd1TVN3eU9DNHhTREUxVERFMUxESXhOSG9pTHo0S0NUd3ZaejRLUEM5blBnbzhMM04yWno0Syc7XG4kY2hhdC1iZy1kYXJrOiAnZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpZFhSbUxUZ2lQejRLUENFdExTQkhaVzVsY21GMGIzSTZJRUZrYjJKbElFbHNiSFZ6ZEhKaGRHOXlJREkxTGpBdU1Dd2dVMVpISUVWNGNHOXlkQ0JRYkhWbkxVbHVJQzRnVTFaSElGWmxjbk5wYjI0NklEWXVNREFnUW5WcGJHUWdNQ2tnSUMwdFBnbzhjM1puSUhabGNuTnBiMjQ5SWpFdU1TSWdhV1E5SWt4aGVXVnlYekVpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUlnZUcxc2JuTTZlR3hwYm1zOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6RTVPVGt2ZUd4cGJtc2lJSGc5SWpCd2VDSWdlVDBpTUhCNElnb0pJSFpwWlhkQ2IzZzlJakFnTUNBeU5qQWdNall3SWlCemRIbHNaVDBpWlc1aFlteGxMV0poWTJ0bmNtOTFibVE2Ym1WM0lEQWdNQ0F5TmpBZ01qWXdPeUlnZUcxc09uTndZV05sUFNKd2NtVnpaWEoyWlNJK0NqeHpkSGxzWlNCMGVYQmxQU0owWlhoMEwyTnpjeUkrQ2drdWMzUXdlMlpwYkd3dGNuVnNaVHBsZG1WdWIyUmtPMk5zYVhBdGNuVnNaVHBsZG1WdWIyUmtPMlpwYkd3Nkl6RTNNVUV5TkR0OUNqd3ZjM1I1YkdVK0NqeG5QZ29KUEdjZ2FXUTlJbWt0YkdsclpTMW1iMjlrSWo0S0NRazhjR0YwYUNCamJHRnpjejBpYzNRd0lpQmtQU0pOTWpRdU5Dd3hObU13TGpJc01DNDJMREF1TkN3eExqTXNNQzQxTERKb0xUTXVOMnd4TGpJc01pNHpiREF1TlN3d0xqbHNMVEF1TWl3d0xqRldNamhqTWk0eUxERXVOeXd5TGpjc05DNDRMREVzTndvSkNRbGpMVEF1T0N3eExURXVPU3d4TGpjdE15NHlMREV1T1ZZek4yTXRNQzQ1TERNdU5TMDBMakVzTmkwM0xqZ3NObWd0TWpCakxUTXVOaXd3TFRZdU9DMHlMalV0Tnk0M0xUWjJMVEF1TVdNdE1pNDNMVEF1TkMwMExqWXRNeTAwTGpJdE5TNDNZekF1TWkweExqTXNNQzQ1TFRJdU5Td3hMamt0TXk0eUNna0pDWFl0Tmk0NGJDMHdMamd0TVM0MmJDMHdMalF0TUM0NWJEQXVPUzB3TGpSTUxURTNMREU0YUMwelF5MHhOeTR5TERVdU5pMDBMamt0TWk0eUxEY3VOU3d3TGpaRE1UVXVOQ3d5TGpNc01qRXVPU3c0TGpJc01qUXVOQ3d4Tm5vZ1RTMHhNaTQwTERFNFl5MHdMaklzTUMwd0xqTXNNQzB3TGpRc01DNHhDZ2tKQ1d3dE15NHhMREV1Tm13d0xqa3NNUzQ0YkRFdU15MHdMamRqTUM0NExUQXVOQ3d4TGpndE1DNDBMREl1Tnl3d2JESXVNaXd4TGpGak1DNHpMREF1TVN3d0xqWXNNQzR4TERBdU9Td3diREl1TWkweExqRmpNQzQ0TFRBdU5Dd3hMamd0TUM0MExESXVOeXd3YkRJdU1pd3hMakVLQ1FrSll6QXVNeXd3TGpFc01DNDJMREF1TVN3d0xqa3NNR3d5TGpJdE1TNHhZekF1T0Mwd0xqUXNNUzQ0TFRBdU5Dd3lMamNzTUd3eUxqSXNNUzR4UXpjdU5Dd3lNaXczTGpjc01qSXNPQ3d5TVM0NWJESXVPUzB4TGpOak1DNDRMVEF1TXl3eExqY3RNQzR6TERJdU5Dd3diREl1T1N3eExqTUtDUWtKWXpBdU15d3dMakVzTUM0MkxEQXVNU3d3TGprc01Hd3pMakV0TVM0MWJDMHdMamt0TVM0NGJDMHhMalFzTUM0M1l5MHdMamdzTUM0MExURXVOeXd3TGpRdE1pNDJMREF1TVd3dE1pNDRMVEV1TWtNeE1pNHpMREU0TERFeUxqSXNNVGdzTVRJdU1Td3hPR3d3TERBS0NRa0pZeTB3TGpFc01DMHdMak1zTUMwd0xqUXNNQzR4YkMweUxqZ3NNUzR5WXkwd0xqZ3NNQzQwTFRFdU9Dd3dMak10TWk0MkxUQXVNVXcwTERFNExqRkRNeTQ1TERFNExETXVOeXd4T0N3ekxqWXNNVGhzTUN3d1l5MHdMaklzTUMwd0xqTXNNQzB3TGpRc01DNHhUREVzTVRrdU1nb0pDUWxqTFRBdU9Dd3dMalF0TVM0NExEQXVOQzB5TGpjc01Fd3ROQ3d4T0M0eFF5MDBMakVzTVRndE5DNHpMREU0TFRRdU5Dd3hPR3d3TERCakxUQXVNaXd3TFRBdU15d3dMVEF1TkN3d0xqRk1MVGNzTVRrdU1tTXRNQzQ0TERBdU5DMHhMamdzTUM0MExUSXVOeXd3YkMweUxqSXRNUzR4Q2drSkNVTXRNVEl1TVN3eE9DMHhNaTR6TERFNExURXlMalFzTVRoTUxURXlMalFzTVRoTUxURXlMalFzTVRoNklFMHRNVEl1TkN3eE5tZ3ROQzQ1UXkweE15NDFMRFV1TVMweExqVXRNQzQzTERrdU5Td3pMakpqTml3eUxqRXNNVEF1Tnl3MkxqZ3NNVEl1T0N3eE1pNDRhQzB5TGpGc0xUQXVNUzB3TGpFS0NRa0pUREU1TGprc01UWklMVEV5TGpSTUxURXlMalFzTVRaNklFMHhOeTQ1TERJekxqZHNNUzQwTFRBdU4yZ3hMak4yTW1ndE16WjJMVEV1TVd3d0xqTXRNQzR5YkRFdU5DMHdMamRvTWk0MmJERXVOQ3d3TGpkak1DNDRMREF1TkN3eExqZ3NNQzQwTERJdU55d3diREV1TkMwd0xqZElMVE1LQ1FrSmJERXVOQ3d3TGpkak1DNDRMREF1TkN3eExqZ3NNQzQwTERJdU55d3dUREl1TXl3eU0yZ3lMalpzTVM0MExEQXVOMk13TGpjc01DNDBMREV1Tnl3d0xqUXNNaTQxTERCc01TNDNMVEF1TjJnekxqSnNNUzQzTERBdU4wTXhOaTR5TERJMExqRXNNVGN1TVN3eU5DNHhMREUzTGprc01qTXVOM29LQ1FrSklFMHRNVE11T0N3eU4yd3hOaTQwTERRdU9Vd3hPQzQ1TERJM1NDMHhNeTQ0ZWlCTkxURTBMalFzTWpsb01DNHpiREUyTGpjc05Xd3hOaTQzTFRWb01DNHpZekV1Tnl3d0xETXNNUzR6TERNc00zTXRNUzR6TERNdE15d3phQzB6TkdNdE1TNDNMREF0TXkweExqTXRNeTB6Q2drSkNVTXRNVGN1TkN3ek1DNHpMVEUyTGpFc01qa3RNVFF1TkN3eU9Yb2dUUzB4TXk0eExETTNZekF1T0N3eUxqUXNNeTR4TERRc05TNDNMRFJvTWpCak1pNDFMREFzTkM0NExURXVOaXcxTGpjdE5FTXhPQzR5TERNM0xURXpMakVzTXpjdE1UTXVNU3d6TjNvaUx6NEtDUWs4Y0dGMGFDQnBaRDBpY0dGMGFEWmZabWxzYkMxamIzQjVJaUJqYkdGemN6MGljM1F3SWlCa1BTSk5NamcwTGpRc01UWmpNQzR5TERBdU5pd3dMalFzTVM0ekxEQXVOU3d5YUMwekxqZHNNUzR5TERJdU0yd3dMalVzTUM0NWJDMHdMaklzTUM0eFZqSTRZekl1TWl3eExqY3NNaTQzTERRdU9Dd3hMRGNLQ1FrSll5MHdMamdzTVMweExqa3NNUzQzTFRNdU1pd3hMamxXTXpkakxUQXVPU3d6TGpVdE5DNHhMRFl0Tnk0NExEWm9MVEl3WXkwekxqWXNNQzAyTGpndE1pNDFMVGN1TnkwMmRpMHdMakZqTFRJdU55MHdMalF0TkM0MkxUTXROQzR5TFRVdU4yTXdMakl0TVM0ekxEQXVPUzB5TGpVc01TNDVMVE11TWdvSkNRbDJMVFl1T0d3dE1DNDRMVEV1Tm13dE1DNDBMVEF1T1d3d0xqa3RNQzQwVERJME15d3hPR2d0TTJNeUxqZ3RNVEl1TkN3eE5TNHhMVEl3TGpJc01qY3VOUzB4Tnk0MFF6STNOUzQwTERJdU15d3lPREV1T1N3NExqSXNNamcwTGpRc01UWjZJRTB5TkRjdU5Td3hPQW9KQ1FsakxUQXVNaXd3TFRBdU15d3dMVEF1TkN3d0xqRnNMVE11TVN3eExqWnNNQzQ1TERFdU9Hd3hMak10TUM0M1l6QXVPQzB3TGpRc01TNDRMVEF1TkN3eUxqY3NNR3d5TGpJc01TNHhZekF1TXl3d0xqRXNNQzQyTERBdU1Td3dMamtzTUd3eUxqSXRNUzR4Q2drSkNXTXdMamd0TUM0MExERXVPQzB3TGpRc01pNDNMREJzTWk0eUxERXVNV013TGpNc01DNHhMREF1Tml3d0xqRXNNQzQ1TERCc01pNHlMVEV1TVdNd0xqZ3RNQzQwTERFdU9DMHdMalFzTWk0M0xEQnNNaTR5TERFdU1XTXdMak1zTUM0eExEQXVOaXd3TGpFc01DNDVMREJzTWk0NUxURXVNd29KQ1Fsak1DNDRMVEF1TXl3eExqY3RNQzR6TERJdU5Dd3diREl1T1N3eExqTmpNQzR6TERBdU1Td3dMallzTUM0eExEQXVPU3d3YkRNdU1TMHhMalZzTFRBdU9TMHhMamhzTFRFdU5Dd3dMamRqTFRBdU9Dd3dMalF0TVM0M0xEQXVOQzB5TGpZc01DNHhiQzB5TGpndE1TNHlDZ2tKQ1dNdE1DNHhMVEF1TVMwd0xqTXRNQzR4TFRBdU5DMHdMakZzTUN3d1l5MHdMakVzTUMwd0xqTXNNQzB3TGpRc01DNHhiQzB5TGpnc01TNHlZeTB3TGpnc01DNDBMVEV1T0N3d0xqTXRNaTQyTFRBdU1Xd3RNaTR6TFRFdU1XTXRNQzR4TFRBdU1TMHdMak10TUM0eExUQXVOUzB3TGpGc01Dd3dDZ2tKQ1dNdE1DNHlMREF0TUM0ekxEQXRNQzQwTERBdU1Xd3RNaTR5TERFdU1XTXRNQzQ0TERBdU5DMHhMamdzTUM0MExUSXVOeXd3YkMweUxqSXRNUzR4WXkwd0xqRXRNQzR4TFRBdU15MHdMakV0TUM0MExUQXVNV3d3TERCakxUQXVNaXd3TFRBdU15d3dMVEF1TkN3d0xqRnNMVEl1TWl3eExqRUtDUWtKWXkwd0xqZ3NNQzQwTFRFdU9Dd3dMalF0TWk0M0xEQnNMVEl1TWkweExqRkRNalEzTGprc01UZ3NNalEzTGpjc01UZ3NNalEzTGpVc01UaE1NalEzTGpVc01UaE1NalEzTGpVc01UaDZJRTB5TkRjdU5Td3hObWd0TkM0NVl6TXVPUzB4TUM0NUxERTFMamt0TVRZdU55d3lOaTQ0TFRFeUxqZ0tDUWtKWXpZc01pNHhMREV3TGpjc05pNDRMREV5TGpnc01USXVPR2d0TWk0eGJDMHdMakV0TUM0eGJDMHdMak1zTUM0eFNESTBOeTQxVERJME55NDFMREUyZWlCTk1qYzNMamtzTWpNdU4yd3hMalF0TUM0M2FERXVNM1l5YUMwek5uWXRNUzR4YkRBdU15MHdMakpzTVM0MExUQXVOMmd5TGpZS0NRa0piREV1TkN3d0xqZGpNQzQ0TERBdU5Dd3hMamdzTUM0MExESXVOeXd3YkRFdU5DMHdMamRvTWk0MmJERXVOQ3d3TGpkak1DNDRMREF1TkN3eExqZ3NNQzQwTERJdU55d3diREV1TkMwd0xqZG9NaTQyYkRFdU5Dd3dMamRqTUM0NExEQXVOQ3d4TGpjc01DNDBMREl1Tml3d0xqRnNNUzQzTFRBdU53b0pDUWxvTXk0eWJERXVOeXd3TGpkRE1qYzJMaklzTWpRdU1Td3lOemN1TVN3eU5DNHhMREkzTnk0NUxESXpMamRNTWpjM0xqa3NNak11TjNvZ1RUSTBOaTR5TERJM2JERTJMalFzTkM0NVRESTNPU3d5TjBneU5EWXVNbm9nVFRJME5TNDFMREk1YURBdU0yd3hOaTQzTERWc01UWXVOeTAxYURBdU13b0pDUWxqTVM0M0xEQXNNeXd4TGpNc015d3pjeTB4TGpNc015MHpMRE5vTFRNMFl5MHhMamNzTUMwekxURXVNeTB6TFROVE1qUXpMamtzTWprc01qUTFMalVzTWpsNklFMHlORFl1T1N3ek4yTXdMamdzTWk0MExETXVNU3cwTERVdU5pdzBhREl3WXpJdU5Td3dMRFF1T0MweExqWXNOUzQzTFRRS0NRa0pTREkwTmk0NWVpSXZQZ29KQ1R4d1lYUm9JR05zWVhOelBTSnpkREFpSUdROUlrMHhOVGt1TlN3eU1XTXRNUzR6TFRNdU5pMDBMamN0TmkwNExqVXRObWd0TkRKakxUTXVPQ3d3TFRjdU1pd3lMalF0T0M0MUxEWmpMVE11TXl3d0xqTXROUzQ0TERNdU1pMDFMalVzTmk0MVl6QXVNaXd5TGprc01pNDJMRFV1TWl3MUxqVXNOUzQxQ2drSkNXTXRNUzQzTERRdU55d3dMamdzT1M0NExEVXVOQ3d4TVM0MVl6RXNNQzR6TERJc01DNDFMRE1zTUM0MWFEUXlZelVzTUN3NUxUUXNPUzA1WXpBdE1TMHdMakl0TWk0eExUQXVOUzB6WXpNdU15MHdMak1zTlM0NExUTXVNaXcxTGpVdE5pNDFDZ2tKQ1VNeE5qUXVOeXd5TXk0MkxERTJNaTQwTERJeExqTXNNVFU1TGpVc01qRjZJRTB4TlRFc01UZG9MVFF5WXkweUxqY3NNQzAxTGpJc01TNDJMVFl1TXl3MGFEVTBMamRETVRVMkxqSXNNVGd1Tml3eE5UTXVOeXd4Tnl3eE5URXNNVGQ2SUUweE5ERXVOeXcwTXdvSkNRbGpNaTR4TFRFdU55d3pMak10TkM0ekxETXVNeTAzYUMweVl6QXNNeTQ1TFRNdU1TdzNMVGNzTjJndE5DNHpZekl1TVMweExqY3NNeTR6TFRRdU15d3pMak10TjJndE1tTXdMRE11T1MwekxqRXNOeTAzTERkb0xUUXVNMk15TGpFdE1TNDNMRE11TXkwMExqTXNNeTR6TFRkb0xUSUtDUWtKWXpBc015NDVMVE11TVN3M0xUY3NOMmd0TjJNdE15NDVMREF0TnkwekxqRXROeTAzY3pNdU1TMDNMRGN0TjJnME1tTXpMamtzTUN3M0xETXVNU3czTERkekxUTXVNU3czTFRjc04wZ3hOREV1TjNvZ1RURXdPU3d5TjJNdE15d3dMVFV1T0N3eExqVXROeTQxTERSSU1UQXhDZ2tKQ1dNdE1pNHlMREF0TkMweExqZ3ROQzAwY3pFdU9DMDBMRFF0TkdnMU9HTXlMaklzTUN3MExERXVPQ3cwTERSekxURXVPQ3cwTFRRc05HZ3RNQzQxWXkweExqY3RNaTQxTFRRdU5TMDBMVGN1TlMwMFNERXdPWG9pTHo0S0NRazhjR0YwYUNCamJHRnpjejBpYzNRd0lpQmtQU0pOTXprc01URTFZelF1TkN3d0xEZ3RNeTQyTERndE9ITXRNeTQyTFRndE9DMDRjeTA0TERNdU5pMDRMRGhUTXpRdU5pd3hNVFVzTXprc01URTFlaUJOTkRVc01UQTNZekFzTXk0ekxUSXVOeXcyTFRZc05uTXROaTB5TGpjdE5pMDJDZ2tKQ1hNeUxqY3ROaXcyTFRaVE5EVXNNVEF6TGpjc05EVXNNVEEzZWlCTk5ESXNOemgyTFRKb09IWXROa2cwTUdNdE1pNHlMREF0TkN3eExqZ3ROQ3cwZGpFd1NESXliQzB4TGpNc05Fd3lNQ3c1TUdneUxqSnNNeTQ0TERRd2FESTJiRE11T0MwME1FZzFPR3d0TUM0M0xUSk1OVFlzT0RSSU5ESldOemg2Q2drSkNTQk5NemdzTnpSMk1UQm9NbFkzTkdnNGRpMHlhQzA0UXpNNExqa3NOeklzTXpnc056SXVPU3d6T0N3M05Ib2dUVFF3TERnMmFERTBMalpzTUM0M0xESklNakl1T0d3d0xqY3RNa2cwTUhvZ1RUVXpMamdzT1RCSU1qUXVNbXd6TGpZc016aG9Nakl1TkV3MU15NDRMRGt3ZWlJdlBnb0pDVHh3WVhSb0lHTnNZWE56UFNKemREQWlJR1E5SWsweE1qa3NPVEpvTFRaMk5HZ3ROblkwYUMwMmRqRTBhQzB6YkRBdU1pd3liRE11T0N3ek1tZ3pObXd6TGpndE16SnNNQzR5TFRKb0xUTjJMVEUwYUMwMmRpMDBhQzAyZGkwMFNERXlPWG9nVFRFME55d3hNVFIyTFRFeWFDMDBkalJvTTNZNFNERTBOd29KQ1FsNklFMHhORFFzTVRFMGRpMDJhQzAwZGpaSU1UUTBlaUJOTVRNNExERXlNSFl0TVRab0xUUjJNVGt1TWtNeE16VXVOaXd4TWpJdU5Td3hNemNzTVRJeExqUXNNVE00TERFeU1Ib2dUVEV6TWl3eE1qTXVPRll4TURCb0xUUjJNak11T0FvSkNRbERNVEk1TGpNc01USTBMakVzTVRNd0xqY3NNVEkwTGpFc01UTXlMREV5TXk0NGVpQk5NVEkyTERFeU15NHlWakV3TkdndE5IWXhOa014TWpNc01USXhMalFzTVRJMExqUXNNVEl5TGpVc01USTJMREV5TXk0eWVpQk5NVEl3TERFeE5IWXRObWd0TkhZMlNERXlNSG9nVFRFeE5Dd3hNVFIyTFRob013b0pDUWwyTFRSb0xUUjJNVEpJTVRFMGVpQk5NVFF4TERFd01uWXROR2d0TkhZMGFETjJOR2d4VmpFd01ub2dUVEV6TlN3eE1ESjJMVGhvTFRSMk5HZ3pkalJJTVRNMWVpQk5NVEk1TERrNGRpMDBhQzAwZGpob01YWXRORWd4TWpsNklFMHhNak1zTVRBeWRpMDBhQzAwZGpob01YWXRORWd4TWpONkNna0pDU0JOTVRNd0xERXlObU0xTGprc01Dd3hNQzQ1TFRRdU1pd3hNUzQ0TFRFd2FEY3VPV3d0TXk0MUxETXdhQzB6TWk0MGJDMHpMalV0TXpCb055NDVRekV4T1M0eExERXlNUzQ0TERFeU5DNHhMREV5Tml3eE16QXNNVEkyZWlJdlBnb0pDVHh3WVhSb0lHTnNZWE56UFNKemREQWlJR1E5SWsweU1USXNPRFoyTW1ndE5IWXRNa2d5TVRKNklFMHlNVFlzT0Rab0xUSjJNbWd5VmpnMmVpQk5NVGsyTERnMlRERTVOaXc0Tm1NdE1pNDNMREF1TnkwMExqVXNNeTR6TFRNdU9TdzJZekF1TkN3eExqZ3NNUzQyTERNdU1pd3pMak1zTXk0NENna0pDV3d3TGpFc01DNHliREV1TVN3MExqVmpNQzR5TERBdU9Td3hMREV1TlN3eExqa3NNUzQxYkRBc01HdzNMREkwTGpaak1DNHlMREF1T1N3eExERXVOQ3d4TGprc01TNDBhRFZqTUM0NUxEQXNNUzQzTFRBdU5pd3hMamt0TVM0MGJEY3RNalF1Tm1Nd0xqa3NNQ3d4TGpjdE1DNDJMREV1T1MweExqVUtDUWtKYkRFdU1TMDBMalZzTUM0eExUQXVNbU15TGpZdE1DNDVMRFF1TVMwekxqY3NNeTR5TFRZdU0yTXRNQzQyTFRFdU55MHlMVE10TXk0NExUTXVNMVk0Tm1Nd0xUY3VOeTAyTGpNdE1UUXRNVFF0TVRSVE1UazJMRGM0TGpNc01UazJMRGcyZWlCTk1qQXdMRGcyYURaMk1tZ3RPUW9KQ1FsakxURXVOeXd3TFRNc01TNHpMVE1zTTNNeExqTXNNeXd6TEROb01qWmpNUzQzTERBc015MHhMak1zTXkwemN5MHhMak10TXkwekxUTm9MVE4yTFRKb01tTXdMVFl1TmkwMUxqUXRNVEl0TVRJdE1USnpMVEV5TERVdU5DMHhNaXd4TWtneU1EQjZJRTB4T1RndU5pd3hNREJzTFRFdE5HZ3lOQzQ1Q2drSkNXd3RNU3cwU0RFNU9DNDJlaUJOTWpBM0xqVXNNVEkyYkMwMkxqa3RNalJvTVRndU4yd3ROaTQ1TERJMFNESXdOeTQxZWlCTk1UVXdMREkwTW1NeE1pNHlMREFzTWpJdE9TNDRMREl5TFRJeWN5MDVMamd0TWpJdE1qSXRNakp6TFRJeUxEa3VPQzB5TWl3eU1nb0pDUWxUTVRNM0xqZ3NNalF5TERFMU1Dd3lOREo2SUUweE56UXNNakl3WXpBc01UTXVNeTB4TUM0M0xESTBMVEkwTERJMGN5MHlOQzB4TUM0M0xUSTBMVEkwYkRBc01HTXdMVEV6TGpNc01UQXVOeTB5TkN3eU5DMHlORk14TnpRc01qQTJMamNzTVRjMExESXlNSG9nVFRFME5TNDJMREl6Tnk0M0Nna0pDV3d5TFRBdU9XTXhMalV0TUM0MkxETXVNaTB3TGpZc05DNDNMREJzTWl3d0xqbGpNQzQ1TERBdU5Dd3lMREFzTWk0MUxUQXVPR3d4TGpFdE1TNDVZekF1T0MweExqUXNNaTR5TFRJdU5Dd3pMamd0TWk0NGJESXVNUzB3TGpWak1TMHdMaklzTVM0MkxURXVNU3d4TGpVdE1pNHhiQzB3TGpJdE1pNHlDZ2tKQ1dNdE1DNHhMVEV1Tml3d0xqUXRNeTR5TERFdU5DMDBMalZzTVM0MExURXVOMk13TGpjdE1DNDRMREF1TnkweExqa3NNQzB5TGpac0xURXVOQzB4TGpkakxURXVNUzB4TGpJdE1TNDJMVEl1T0MweExqUXROQzQxYkRBdU1pMHlMakpqTUM0eExURXRNQzQyTFRFdU9TMHhMall0TWk0eENna0pDV3d0TWk0eExUQXVOV010TVM0MkxUQXVOQzB6TFRFdU5DMHpMamd0TWk0NGJDMHhMakV0TVM0NVl5MHdMalV0TUM0NUxURXVOaTB4TGpJdE1pNDFMVEF1T0d3dE1pd3dMamxqTFRFdU5Td3dMall0TXk0eUxEQXVOaTAwTGpjc01Hd3RNaTB3TGpsakxUQXVPUzB3TGpRdE1pd3dMVEl1TlN3d0xqZ0tDUWtKYkMweExESXVNV010TUM0NExERXVOQzB5TGpJc01pNDBMVE11T0N3eUxqaHNMVEl1TVN3d0xqVmpMVEVzTUM0eUxURXVOaXd4TGpFdE1TNDFMREl1TVd3d0xqSXNNaTR5WXpBdU1Td3hMall0TUM0MExETXVNaTB4TGpRc05DNDFiQzB4TGpRc01TNDNDZ2tKQ1dNdE1DNDNMREF1T0Mwd0xqY3NNUzQ1TERBc01pNDJiREV1TkN3eExqZGpNUzR4TERFdU1pd3hMallzTWk0NExERXVOQ3cwTGpWc0xUQXVNaXd5TGpKakxUQXVNU3d4TERBdU5pd3hMamtzTVM0MkxESXVNV3d5TGpFc01DNDFZekV1Tml3d0xqUXNNeXd4TGpRc015NDRMREl1T0d3eExqRXNNUzQ1Q2drSkNVTXhORE11Tml3eU16Y3VPQ3d4TkRRdU55d3lNemd1TVN3eE5EVXVOaXd5TXpjdU4wd3hORFV1Tml3eU16Y3VOM29nVFRFME9DNDBMREl6T0M0M1l6RXRNQzQwTERJdU1TMHdMalFzTXk0eExEQnNNaXd3TGpsak1TNDRMREF1T0N3MExEQXVNU3cxTFRFdU5td3hMakV0TVM0NUNna0pDV013TGpZdE1DNDVMREV1TlMweExqWXNNaTQxTFRFdU9Hd3lMakV0TUM0MVl6RXVPUzB3TGpRc015NHpMVEl1TXl3ekxqRXROQzR5YkMwd0xqSXRNaTR5WXkwd0xqRXRNUzR4TERBdU15MHlMaklzTVMwemJERXVOQzB4TGpkak1TNHpMVEV1TlN3eExqTXRNeTQzTERBdE5TNHliQzB4TGpRdE1TNDNDZ2tKQ1dNdE1DNDNMVEF1T0MweExqRXRNUzQ1TFRFdE0yd3dMakl0TWk0eVl6QXVNaTB5TFRFdU1TMHpMamd0TXk0eExUUXVNbXd0TWk0eExUQXVOV010TVM0eExUQXVNaTB5TFRBdU9TMHlMalV0TVM0NGJDMHhMakV0TVM0NVl5MHhMVEV1TnkwekxqSXRNaTQwTFRVdE1TNDJiQzB5TERBdU9Rb0pDUWxqTFRFc01DNDBMVEl1TVN3d0xqUXRNeTR4TERCc0xUSXRNQzQ1WXkweExqZ3RNQzQ0TFRRdE1DNHhMVFVzTVM0MmJDMHhMakVzTVM0NVl5MHdMallzTUM0NUxURXVOU3d4TGpZdE1pNDFMREV1T0d3dE1pNHhMREF1TldNdE1TNDVMREF1TkMwekxqTXNNaTR6TFRNdU1TdzBMakpzTUM0eUxESXVNZ29KQ1Fsak1DNHhMREV1TVMwd0xqTXNNaTR5TFRFc00yd3RNUzQwTERFdU4yTXRNUzR6TERFdU5TMHhMak1zTXk0M0xEQXNOUzR5YkRFdU5Dd3hMamRqTUM0M0xEQXVPQ3d4TGpFc01TNDVMREVzTTJ3dE1DNHlMREl1TW1NdE1DNHlMRElzTVM0eExETXVPQ3d6TGpFc05DNHliREl1TVN3d0xqVUtDUWtKWXpFdU1Td3dMaklzTWl3d0xqa3NNaTQxTERFdU9Hd3hMakVzTVM0NVl6RXNNUzQzTERNdU1pd3lMalFzTlN3eExqWk1NVFE0TGpRc01qTTRMamQ2SUUweE5USXNNakEzWXpBdE1DNDJMREF1TkMweExERXRNWE14TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVFvSkNRbFRNVFV5TERJd055NDJMREUxTWl3eU1EZDZJRTB4TlRnc01qQTVZekF0TUM0MkxEQXVOQzB4TERFdE1YTXhMREF1TkN3eExERnpMVEF1TkN3eExURXNNVk14TlRnc01qQTVMallzTVRVNExESXdPWG9nVFRFME55d3lNVEJqTUMwd0xqWXNNQzQwTFRFc01TMHhjekVzTUM0MExERXNNUW9KQ1FsekxUQXVOQ3d4TFRFc01WTXhORGNzTWpFd0xqWXNNVFEzTERJeE1Ib2dUVEUwTVN3eU1UQmpNQzB3TGpZc01DNDBMVEVzTVMweGN6RXNNQzQwTERFc01YTXRNQzQwTERFdE1Td3hVekUwTVN3eU1UQXVOaXd4TkRFc01qRXdlaUJOTVRRMExESXdOV013TFRBdU5pd3dMalF0TVN3eExURUtDUWtKY3pFc01DNDBMREVzTVhNdE1DNDBMREV0TVN3eFV6RTBOQ3d5TURVdU5pd3hORFFzTWpBMWVpQk5NVE0yTERJeE0yTXdMVEF1Tml3d0xqUXRNU3d4TFRGek1Td3dMalFzTVN3eGN5MHdMalFzTVMweExERlRNVE0yTERJeE15NDJMREV6Tml3eU1UTjZJRTB4TXprc01qRTVDZ2tKQ1dNd0xUQXVOaXd3TGpRdE1Td3hMVEZ6TVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGVE1UTTVMREl4T1M0MkxERXpPU3d5TVRsNklFMHhNemtzTWpJMVl6QXRNQzQyTERBdU5DMHhMREV0TVhNeExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01WTXhNemtzTWpJMUxqWXNNVE01TERJeU5Yb0tDUWtKSUUweE5ETXNNak15WXpBdE1DNDJMREF1TkMweExERXRNWE14TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVZNeE5ETXNNak15TGpZc01UUXpMREl6TW5vZ1RURTBPQ3d5TXpCak1DMHdMallzTUM0MExURXNNUzB4Y3pFc01DNDBMREVzTVhNdE1DNDBMREV0TVN3eENna0pDVk14TkRnc01qTXdMallzTVRRNExESXpNSG9nVFRFMU15d3lNelJqTUMwd0xqWXNNQzQwTFRFc01TMHhjekVzTUM0MExERXNNWE10TUM0MExERXRNU3d4VXpFMU15d3lNelF1Tml3eE5UTXNNak0wZWlCTk1UVTNMREl5T0dNd0xUQXVOaXd3TGpRdE1Td3hMVEZ6TVN3d0xqUXNNU3d4Q2drSkNYTXRNQzQwTERFdE1Td3hVekUxTnl3eU1qZ3VOaXd4TlRjc01qSTRlaUJOTVRZekxESXlOR013TFRBdU5pd3dMalF0TVN3eExURnpNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZUTVRZekxESXlOQzQyTERFMk15d3lNalI2SUUweE5Ua3NNakl4WXpBdE1DNDJMREF1TkMweExERXRNUW9KQ1Fsek1Td3dMalFzTVN3eGN5MHdMalFzTVMweExERlRNVFU1TERJeU1TNDJMREUxT1N3eU1qRjZJRTB4TmpNc01qRTRZekF0TUM0MkxEQXVOQzB4TERFdE1YTXhMREF1TkN3eExERnpMVEF1TkN3eExURXNNVk14TmpNc01qRTRMallzTVRZekxESXhPSG9nVFRFMU9Dd3lNVFFLQ1FrSll6QXRNQzQyTERBdU5DMHhMREV0TVhNeExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01WTXhOVGdzTWpFMExqWXNNVFU0TERJeE5Ib2dUVEV6TkN3eU1qQmpNQzB3TGpZc01DNDBMVEVzTVMweGN6RXNNQzQwTERFc01YTXRNQzQwTERFdE1Td3hVekV6TkN3eU1qQXVOaXd4TXpRc01qSXdlZ29KQ1FrZ1RURTFNQ3d5TWpWak1pNDRMREFzTlMweUxqSXNOUzAxY3kweUxqSXROUzAxTFRWekxUVXNNaTR5TFRVc05WTXhORGN1TWl3eU1qVXNNVFV3TERJeU5Yb2dUVEUxTnl3eU1qQmpNQ3d6TGprdE15NHhMRGN0Tnl3M2N5MDNMVE11TVMwM0xUZHpNeTR4TFRjc055MDNDZ2tKQ1ZNeE5UY3NNakUyTGpFc01UVTNMREl5TUhvZ1RUSTBNeXd4T1RGakxUQXVOaXd3TFRFc01DNDBMVEVzTVhNd0xqUXNNU3d4TERGb01tTXdMallzTUN3eExUQXVOQ3d4TFRGekxUQXVOQzB4TFRFdE1VZ3lORE42SUUweU5qSXNNakF3WXpBdE1DNDJMREF1TkMweExERXRNV2d5Q2drSkNXTXdMallzTUN3eExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01XZ3RNa015TmpJdU5Dd3lNREVzTWpZeUxESXdNQzQyTERJMk1pd3lNREI2SUUweU5EZ3NNakExWXkwd0xqWXNNQzB4TERBdU5DMHhMREZ6TUM0MExERXNNU3d4YURKak1DNDJMREFzTVMwd0xqUXNNUzB4Y3kwd0xqUXRNUzB4TFRFS0NRa0pTREkwT0hvZ1RUSXlNeXd5TURaakxUQXVOaXd3TFRFc01DNDBMVEVzTVhNd0xqUXNNU3d4TERGb01tTXdMallzTUN3eExUQXVOQ3d4TFRGekxUQXVOQzB4TFRFdE1VZ3lNak42SUUweU1qZ3NNakV3WXkwd0xqWXNNQzB4TERBdU5DMHhMREZ6TUM0MExERXNNU3d4YURJS0NRa0pZekF1Tml3d0xERXRNQzQwTERFdE1YTXRNQzQwTFRFdE1TMHhTREl5T0hvZ1RUSXpOeXd5TVRCak1DMHdMallzTUM0MExURXNNUzB4YURKak1DNDJMREFzTVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGb0xUSkRNak0zTGpRc01qRXhMREl6Tnl3eU1UQXVOaXd5TXpjc01qRXdlZ29KQ1FrZ1RUSTFNaXd5TVRGak1DMHdMallzTUM0MExURXNNUzB4YURKak1DNDJMREFzTVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGb0xUSkRNalV5TGpRc01qRXlMREkxTWl3eU1URXVOaXd5TlRJc01qRXhlaUJOTWpZMExESXdPV010TUM0MkxEQXRNU3d3TGpRdE1Td3hjekF1TkN3eExERXNNV2d5Q2drSkNXTXdMallzTUN3eExUQXVOQ3d4TFRGekxUQXVOQzB4TFRFdE1VZ3lOalI2SUUweU5UTXNNVGsxWXpBdE1DNDJMREF1TkMweExERXRNV2d5WXpBdU5pd3dMREVzTUM0MExERXNNWE10TUM0MExERXRNU3d4YUMweVF6STFNeTQwTERFNU5pd3lOVE1zTVRrMUxqWXNNalV6TERFNU5Yb0tDUWtKSUUweU16UXNNVGsxWXkwd0xqWXNNQzB4TERBdU5DMHhMREZ6TUM0MExERXNNU3d4YURKak1DNDJMREFzTVMwd0xqUXNNUzB4Y3kwd0xqUXRNUzB4TFRGSU1qTTBlaUJOTWpRd0xESXdNR013TFRBdU5pd3dMalF0TVN3eExURm9NbU13TGpZc01Dd3hMREF1TkN3eExERnpMVEF1TkN3eExURXNNUW9KQ1Fsb0xUSkRNalF3TGpRc01qQXhMREkwTUN3eU1EQXVOaXd5TkRBc01qQXdlaUJOTWpFMUxESXhOV013TFRBdU5Td3dMVEF1T1N3d0xURXVOR010TWk0MUxURXVNUzB6TGpjdE5DMHlMall0Tmk0Mll6QXVNaTB3TGpVc01DNDFMVEVzTUM0NUxURXVOR010TUM0NUxUSXNNQzAwTGpJc01TNDVMVFV1TWdvSkNRbGpMVEF1T0MweUxqWXNNQzQzTFRVdU5Dd3pMalF0Tmk0eWJEQXNNR013TGpRdE1DNDFMREF1T1Mwd0xqa3NNUzQxTFRFdU1XTXdMalV0TWk0M0xETXVNUzAwTGpVc05TNDRMVFF1TVdNd0xqY3NNQzR4TERFdU5Dd3dMalFzTWl3d0xqaGpOUzR6TFRNdU9Dd3hNUzQyTFRVdU9Td3hPQzR5TFRVdU9Rb0pDUWxqTmk0NExEQXNNVE11TVN3eUxqSXNNVGd1TWl3MUxqbGpNaTR6TFRFdU5pdzFMalF0TVN3M0xERXVNMk13TGpRc01DNDJMREF1Tnl3eExqTXNNQzQ0TERKak1DNDJMREF1TWl3eExqRXNNQzQyTERFdU5Td3hMakZqTWk0M0xEQXVPQ3cwTGpJc015NDFMRE11TkN3MkxqSnNNQ3d3Q2drSkNXTXhMamtzTVN3eUxqY3NNeTR5TERFdU9TdzFMakpqTVM0NUxESXNNUzQ0TERVdU1pMHdMaklzTjJNdE1DNDBMREF1TkMwd0xqa3NNQzQzTFRFdU5Td3hZekFzTUM0MUxEQXNNQzQ1TERBc01TNDBkakZvTFRZeWRpMHhTREl4TlhvZ1RUSXhOUzQ0TERJd055NDRDZ2tKQ1dNdE1DNHpMREV1TWkwd0xqVXNNaTQwTFRBdU5pd3pMalpqTFRFdU15MHhMVEV1TmkweUxqa3RNQzQyTFRRdU1td3dMREJETWpFMUxESXdOeTQxTERJeE5TNDBMREl3Tnk0M0xESXhOUzQ0TERJd055NDRUREl4TlM0NExESXdOeTQ0ZWlCTk1qRTNMak1zTWpBekxqSUtDUWtKWXkwd0xqUXNNQzQ1TFRBdU55d3hMamd0TVN3eUxqZGpMVEV0TUM0MExURXVOaTB4TGpVdE1TNHpMVEl1TldNd0xqSXRNQzQxTERBdU5pMHdMamtzTVM0eExURXVNa015TVRZdU5Td3lNREl1Tml3eU1UWXVPU3d5TURJdU9Td3lNVGN1TXl3eU1ETXVNa3d5TVRjdU15d3lNRE11TW5vS0NRa0pJRTB5TVRrdU5pd3hPVGd1TjJNdE1DNDFMREF1T1MweExERXVPQzB4TGpVc01pNDNZeTB4TGpNdE1TMHhMalV0TWk0NUxUQXVOUzAwTGpKak1DNHhMVEF1TWl3d0xqTXRNQzR6TERBdU5DMHdMalZETWpFNExqTXNNVGszTGpZc01qRTRMamtzTVRrNExqTXNNakU1TGpZc01UazRMamNLQ1FrSlRESXhPUzQyTERFNU9DNDNlaUJOTWpJd0xqZ3NNVGszWXpBdU5DMHdMalVzTUM0M0xURXNNUzR4TFRFdU5XTXRNQzR6TFRBdU5TMHdMamt0TUM0M0xURXVOQzB3TGpSekxUQXVOeXd3TGprdE1DNDBMREV1TkVNeU1qQXVNeXd4T1RZdU55d3lNakF1TlN3eE9UWXVPU3d5TWpBdU9Dd3hPVGNLQ1FrSlRESXlNQzQ0TERFNU4zb2dUVEl5Tmk0eExERTVNUzR5WXkweExEQXVPUzB5TERFdU9DMHlMamtzTWk0NFl5MHdMak10TUM0ekxUQXVOeTB3TGpZdE1TNHhMVEF1T0dNd0xqUXRNUzQyTERJdU1TMHlMalVzTXk0M0xUSXVNUW9KQ1FsRE1qSTFMamtzTVRreExqRXNNakkyTERFNU1TNHlMREl5Tmk0eExERTVNUzR5VERJeU5pNHhMREU1TVM0eWVpQk5Nalk0TGpnc01UazBZeTB3TGprdE1TMHhMamt0TVM0NUxUSXVPUzB5TGpoak1TNDFMVEF1Tml3ekxqTXNNQzR4TERNdU9Td3hMamNLQ1FrSll6QXNNQzR4TERBdU1Td3dMaklzTUM0eExEQXVNME15TmprdU5Td3hPVE11TkN3eU5qa3VNU3d4T1RNdU5pd3lOamd1T0N3eE9UUk1Nalk0TGpnc01UazBlaUJOTWpjd0xqRXNNVGsxTGpWak1DNDBMREF1TlN3d0xqZ3NNU3d4TGpFc01TNDBDZ2tKQ1dNd0xqVXRNQzR4TERBdU9TMHdMamNzTUM0NExURXVNbk10TUM0M0xUQXVPUzB4TGpJdE1DNDRRekkzTUM0MUxERTVOUzR4TERJM01DNHpMREU1TlM0ekxESTNNQzR4TERFNU5TNDFlaUJOTWpjekxqa3NNakF4TGpSakxUQXVOUzB3TGprdE1TMHhMamd0TVM0MUxUSXVOd29KQ1Fsak1DNDRMVEF1TkN3eExqUXRNUzR4TERFdU5pMHlZekV1TXl3eExqRXNNUzQwTERNc01DNDBMRFF1TWtNeU56UXVNaXd5TURFdU1Td3lOelFzTWpBeExqSXNNamN6TGprc01qQXhMalI2SUUweU56VXVOaXd5TURVdU9XTXRNQzR6TFRBdU9TMHdMall0TVM0NExURXRNaTQzQ2drSkNXTXdMalF0TUM0ekxEQXVPQzB3TGpZc01TNHlMVEZqTVN3d0xqVXNNUzQwTERFdU55d3hMREl1TjBNeU56WXVOaXd5TURVdU15d3lOell1TWl3eU1EVXVOeXd5TnpVdU5pd3lNRFV1T1hvZ1RUSTNOaTQ0TERJeE1TNDBZeTB3TGpFdE1TNHlMVEF1TkMweUxqUXRNQzQyTFRNdU5nb0pDUWxqTUM0MUxUQXVNU3d3TGprdE1DNDBMREV1TWkwd0xqWkRNamM0TGpRc01qQTRMalVzTWpjNExqRXNNakV3TGpRc01qYzJMamdzTWpFeExqUk1NamMyTGpnc01qRXhMalJNTWpjMkxqZ3NNakV4TGpSNklFMHlOelVzTWpFMFl5MHdMalV0TVRZdE1UTXVPUzB5T0M0MkxUSTVMamt0TWpndU1Rb0pDUWxqTFRFMUxqTXNNQzQxTFRJM0xqWXNNVEl1T0MweU9DNHhMREk0TGpGSU1qYzFUREkzTlN3eU1UUjZJRTAzTWk0ekxERTVPQzR4WXkwd0xqSXRNQzR6TFRBdU15MHdMamN0TUM0ekxURXVNWFl0TVRKb0xUSjJNVEpqTUN3eUxqSXNNUzQ0TERRc05DdzBDZ2tKQ1dNeExqSXNNQ3d5TGpNdE1DNDFMRE11TVMweExqUmpNQzQyTFRBdU55d3dMamt0TVM0MkxEQXVPUzB5TGpWMkxURXlhQzB5ZGpFeVl6QXNNUzR4TFRBdU9Td3lMVElzTW13d0xEQkROek11TXl3eE9Ua3NOekl1Tnl3eE9UZ3VOeXczTWk0ekxERTVPQzR4ZWlCTk56VXNNVGMyQ2drSkNXTXdMalFzTUN3d0xqY3NNQ3d4TGpFdE1DNHhZekF1TlN3eUxqSXNNaTQyTERNdU5TdzBMamdzTTJNd0xqVXRNQzR4TERFdE1DNHpMREV1TkMwd0xqWmpNUzR4TERJdU1Td3hMamNzTkM0MExERXVOeXcyTGpkMk1qUmpNQ3d6TGpNdE1pNDNMRFl0Tml3MmFDMHpkamtLQ1FrSll6QXNNaTQ0TFRJdU1pdzFMVFVzTlhNdE5TMHlMakl0TlMwMWRpMDVhQzB6WXkwekxqTXNNQzAyTFRJdU55MDJMVFoyTFRJMFl6QXROeTQzTERZdU15MHhOQ3d4TkMweE5FTTNNQ3d4TnpNdU9DdzNNaTR5TERFM05pdzNOU3d4TnpaNklFMDFPQ3d4T1RGMk1USUtDUWtKWXpBc01DNDRMREF1TlN3eExqVXNNUzR5TERFdU9HTXdMamtzTUM0MExERXVPU3d3TGpFc01pNDBMVEF1TjJNd0xqSXRNQzR6TERBdU15MHdMamNzTUM0ekxURXVNWFl0TVRKb01uWXhNbU13TERJdU1pMHhMamNzTkMwekxqa3NOR010TUM0MUxEQXRNUzB3TGpFdE1TNDBMVEF1TWdvSkNRbGpMVEF1TWkwd0xqRXRNQzQwTFRBdU1pMHdMamN0TUM0emRqSXVOV013TERJdU1pd3hMamdzTkN3MExEUm9NVFpqTWk0eUxEQXNOQzB4TGpnc05DMDBkaTB5TkdNd0xURXVOUzB3TGpJdE1pNDVMVEF1TnkwMExqSmpMVEF1TkN3d0xqRXRNQzQ1TERBdU1pMHhMak1zTUM0eUNna0pDV010TWk0eExEQXROQzR4TFRFdU1TMDFMakl0TTJNdE15MHdMakV0TlM0MkxUSXROaTQxTFRRdU9VTTJNaTQwTERFM05DdzFPQ3d4Tnprc05UZ3NNVGcxVmpFNU1Yb2dUVFkzTERJeE5YWTVZekFzTVM0M0xERXVNeXd6TERNc00zTXpMVEV1TXl3ekxUTjJMVGxJTmpkNklpOCtDZ2tKUEhCaGRHZ2dZMnhoYzNNOUluTjBNQ0lnWkQwaVRTMHhOeXd4T1RGakxUQXVOaXd3TFRFc01DNDBMVEVzTVhNd0xqUXNNU3d4TERGb01tTXdMallzTUN3eExUQXVOQ3d4TFRGekxUQXVOQzB4TFRFdE1VZ3RNVGQ2SUUweUxESXdNR013TFRBdU5pd3dMalF0TVN3eExURm9NZ29KQ1Fsak1DNDJMREFzTVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGSU0wTXlMalFzTWpBeExESXNNakF3TGpZc01pd3lNREI2SUUwdE1USXNNakExWXkwd0xqWXNNQzB4TERBdU5DMHhMREZ6TUM0MExERXNNU3d4YURKak1DNDJMREFzTVMwd0xqUXNNUzB4Y3kwd0xqUXRNUzB4TFRGSUxURXllZ29KQ1FrZ1RTMHpOeXd5TURaakxUQXVOaXd3TFRFc01DNDBMVEVzTVhNd0xqUXNNU3d4TERGb01tTXdMallzTUN3eExUQXVOQ3d4TFRGekxUQXVOQzB4TFRFdE1VZ3RNemQ2SUUwdE16SXNNakV3WXkwd0xqWXNNQzB4TERBdU5DMHhMREZ6TUM0MExERXNNU3d4YURKak1DNDJMREFzTVMwd0xqUXNNUzB4Q2drSkNYTXRNQzQwTFRFdE1TMHhTQzB6TW5vZ1RTMHlNeXd5TVRCak1DMHdMallzTUM0MExURXNNUzB4YURKak1DNDJMREFzTVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGb0xUSkRMVEl5TGpZc01qRXhMVEl6TERJeE1DNDJMVEl6TERJeE1Ib2dUUzA0TERJeE1XTXdMVEF1Tml3d0xqUXRNU3d4TFRFS0NRa0phREpqTUM0MkxEQXNNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZvTFRKRExUY3VOaXd5TVRJdE9Dd3lNVEV1TmkwNExESXhNWG9nVFRRc01qQTVZeTB3TGpZc01DMHhMREF1TkMweExERnpNQzQwTERFc01Td3hhREpqTUM0MkxEQXNNUzB3TGpRc01TMHhjeTB3TGpRdE1TMHhMVEZJTkhvS0NRa0pJRTB0Tnl3eE9UVmpNQzB3TGpZc01DNDBMVEVzTVMweGFESmpNQzQyTERBc01Td3dMalFzTVN3eGN5MHdMalFzTVMweExERm9MVEpETFRZdU5pd3hPVFl0Tnl3eE9UVXVOaTAzTERFNU5Yb2dUUzB5Tml3eE9UVmpMVEF1Tml3d0xURXNNQzQwTFRFc01YTXdMalFzTVN3eExERm9NZ29KQ1Fsak1DNDJMREFzTVMwd0xqUXNNUzB4Y3kwd0xqUXRNUzB4TFRGSUxUSTJlaUJOTFRJd0xESXdNR013TFRBdU5pd3dMalF0TVN3eExURm9NbU13TGpZc01Dd3hMREF1TkN3eExERnpMVEF1TkN3eExURXNNV2d0TWtNdE1Ua3VOaXd5TURFdE1qQXNNakF3TGpZdE1qQXNNakF3ZWlCTkxUUTFMREl4TlFvSkNRbGpNQzB3TGpVc01DMHdMamtzTUMweExqUmpMVEl1TlMweExqRXRNeTQzTFRRdE1pNDJMVFl1Tm1Nd0xqSXRNQzQxTERBdU5TMHhMREF1T1MweExqUmpMVEF1T1MweUxEQXROQzR5TERFdU9TMDFMakpqTFRBdU9DMHlMallzTUM0M0xUVXVOQ3d6TGpRdE5pNHliREFzTUFvSkNRbGpNQzQwTFRBdU5Td3dMamt0TUM0NUxERXVOUzB4TGpGak1DNDFMVEl1Tnl3ekxqRXROQzQxTERVdU9DMDBMakZqTUM0M0xEQXVNU3d4TGpRc01DNDBMRElzTUM0NFl6VXVNeTB6TGpnc01URXVOaTAxTGprc01UZ3VNaTAxTGpsak5pNDRMREFzTVRNdU1Td3lMaklzTVRndU1pdzFMamtLQ1FrSll6SXVNeTB4TGpZc05TNDBMVEVzTnl3eExqTmpNQzQwTERBdU5pd3dMamNzTVM0ekxEQXVPQ3d5WXpBdU5pd3dMaklzTVM0eExEQXVOaXd4TGpVc01TNHhZekl1Tnl3d0xqZ3NOQzR5TERNdU5Td3pMalFzTmk0eWJEQXNNR014TGprc01Td3lMamNzTXk0eUxERXVPU3cxTGpJS0NRa0pZekV1T1N3eUxERXVPQ3cxTGpJdE1DNHlMRGRqTFRBdU5Dd3dMalF0TUM0NUxEQXVOeTB4TGpVc01XTXdMREF1TlN3d0xEQXVPU3d3TERFdU5IWXhhQzAyTW5ZdE1VZ3RORFY2SUUwdE5EUXVNaXd5TURjdU9HTXRNQzR6TERFdU1pMHdMalVzTWk0MExUQXVOaXd6TGpZS0NRa0pZeTB4TGpNdE1TMHhMall0TWk0NUxUQXVOaTAwTGpKc01Dd3dReTAwTlN3eU1EY3VOUzAwTkM0MkxESXdOeTQzTFRRMExqSXNNakEzTGpoTUxUUTBMaklzTWpBM0xqaDZJRTB0TkRJdU55d3lNRE11TW1NdE1DNDBMREF1T1Mwd0xqY3NNUzQ0TFRFc01pNDNDZ2tKQ1dNdE1TMHdMalF0TVM0MkxURXVOUzB4TGpNdE1pNDFZekF1TWkwd0xqVXNNQzQyTFRBdU9Td3hMakV0TVM0eVF5MDBNeTQxTERJd01pNDJMVFF6TGpFc01qQXlMamt0TkRJdU55d3lNRE11TWt3dE5ESXVOeXd5TURNdU1ub2dUUzAwTUM0MExERTVPQzQzQ2drSkNXTXRNQzQxTERBdU9TMHhMREV1T0MweExqVXNNaTQzWXkweExqTXRNUzB4TGpVdE1pNDVMVEF1TlMwMExqSmpNQzR4TFRBdU1pd3dMak10TUM0ekxEQXVOQzB3TGpWRExUUXhMamNzTVRrM0xqWXROREV1TVN3eE9UZ3VNeTAwTUM0MExERTVPQzQzZWlCTkxUTTVMaklzTVRrM0Nna0pDV013TGpNdE1DNDFMREF1TnkweExERXVNUzB4TGpWakxUQXVNeTB3TGpVdE1DNDVMVEF1TnkweExqUXRNQzQwY3kwd0xqY3NNQzQ1TFRBdU5Dd3hMalJETFRNNUxqY3NNVGsyTGpjdE16a3VOU3d4T1RZdU9TMHpPUzR5TERFNU4wd3RNemt1TWl3eE9UZDZJRTB0TXpNdU9Td3hPVEV1TWdvSkNRbGpMVEVzTUM0NUxUSXNNUzQ0TFRJdU9Td3lMamhqTFRBdU15MHdMak10TUM0M0xUQXVOaTB4TGpFdE1DNDRZekF1TkMweExqWXNNaTR4TFRJdU5Td3pMamN0TWk0eFF5MHpOQzR4TERFNU1TNHhMVE0wTERFNU1TNHlMVE16TGprc01Ua3hMakpNTFRNekxqa3NNVGt4TGpKNklFMDRMamdzTVRrMENna0pDV010TUM0NUxURXRNUzQ1TFRFdU9TMHlMamt0TWk0NFl6RXVOUzB3TGpZc015NHpMREF1TVN3ekxqa3NNUzQzWXpBc01DNHhMREF1TVN3d0xqSXNNQzR4TERBdU0wTTVMalVzTVRrekxqUXNPUzR4TERFNU15NDJMRGd1T0N3eE9UUk1PQzQ0TERFNU5Ib2dUVEV3TGpFc01UazFMalVLQ1FrSll6QXVOQ3d3TGpVc01DNDRMREVzTVM0eExERXVOR013TGpVdE1DNHhMREF1T1Mwd0xqY3NNQzQ0TFRFdU1tTXRNQzR4TFRBdU5TMHdMamN0TUM0NUxURXVNaTB3TGpoRE1UQXVOU3d4T1RVdU1Td3hNQzR6TERFNU5TNHpMREV3TGpFc01UazFMalY2SUUweE15NDVMREl3TVM0MENna0pDV010TUM0MUxUQXVPUzB3TGprdE1TNDRMVEV1TlMweUxqZGpNQzQ0TFRBdU5Dd3hMalF0TVM0eExERXVOaTB5WXpFdU15d3hMakVzTVM0MExETXNNQzQwTERRdU1rTXhOQzR5TERJd01TNHhMREUwTERJd01TNHlMREV6TGprc01qQXhMalI2SUUweE5TNDNMREl3TlM0NUNna0pDV010TUM0ekxUQXVPUzB3TGpZdE1TNDRMVEV0TWk0M1l6QXVOQzB3TGpNc01DNDRMVEF1Tml3eExqSXRNV014TERBdU5Td3hMalFzTVM0M0xERXNNaTQzUXpFMkxqWXNNakExTGpNc01UWXVNaXd5TURVdU55d3hOUzQzTERJd05TNDVlaUJOTVRZdU9Dd3lNVEV1TkFvSkNRbGpMVEF1TVMweExqSXRNQzQwTFRJdU5DMHdMall0TXk0Mll6QXVOUzB3TGpFc01DNDVMVEF1TkN3eExqSXRNQzQyUXpFNExqUXNNakE0TGpVc01UZ3VNU3d5TVRBdU5Dd3hOaTQ0TERJeE1TNDBUREUyTGpnc01qRXhMalJNTVRZdU9Dd3lNVEV1TkhvZ1RURTFMREl4TkFvSkNRbGpMVEF1TlMweE5pMHhNeTQ1TFRJNExqWXRNamt1T1MweU9DNHhZeTB4TlM0ekxEQXVOUzB5Tnk0MkxERXlMamd0TWpndU1Td3lPQzR4U0RFMVRERTFMREl4TkhvaUx6NEtDVHd2Wno0S1BDOW5QZ284TDNOMlp6NEsnO1xuIiwiLy8gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gIEZpbGUgTmFtZTogdmFyaWFibGVzLWRhcmsuc2Nzc1xuLy8gIERlc2NyaXB0aW9uOiBDdXN0b20gZGFyayB0aGVtZSB2YXJpYWJsZXNcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAgSXRlbSBOYW1lOiBWdWV4eSAtIFZ1ZWpzLCBSZWFjdCwgQW5ndWxhciwgSFRNTCAmIExhcmF2ZWwgQWRtaW4gRGFzaGJvYXJkIFRlbXBsYXRlXG4vLyAgQXV0aG9yOiBQSVhJTlZFTlRcbi8vICBBdXRob3IgVVJMOiBodHRwOi8vd3d3LnRoZW1lZm9yZXN0Lm5ldC91c2VyL3BpeGludmVudFxuLy8gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLyAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyAgV0FSTklORzogUExFQVNFIERPIE5PVCBDSEFOR0UgVEhJUyBWQVJJQUJMRSBGSUxFLlxuLy8gIFRISVMgRklMRSBXSUxMIEdFVCBPVkVSV1JJVFRFTiBXSVRIIEVBQ0ggVlVFWFkgSFRNTCBURU1QTEFURSBSRUxFQVNFLlxuLy8gIFRJUDpcbi8vICBXZSBzdWdnZXN0IHlvdSB0byB1c2UgdGhpcyAoYXNzZXRzL3Njc3MvdmFyaWFibGVzL192YXJpYWJsZXMtY29tcG9uZW50cy5zY3NzKSBmaWxlIGZvciBvdmVycmlkaW5nIGNvbXBvbmVudHMgdmFyaWFibGVzLlxuLy8gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vL0JvZHlcbiR0aGVtZS1kYXJrLWJvZHktYmc6ICMxNjFkMzEgIWRlZmF1bHQ7XG4kdGhlbWUtZGFyay1ib2R5LWNvbG9yOiAjYjRiN2JkICFkZWZhdWx0O1xuJHRoZW1lLWRhcmstYm9yZGVyLWNvbG9yOiAjM2I0MjUzICFkZWZhdWx0O1xuJHRoZW1lLWRhcmstY3VzdG9tLWNvbnRyb2wtYm9yZGVyLWNvbG9yOiAjNDQ0MDVlICFkZWZhdWx0O1xuXG4vL1R5cG9ncmFwaHlcbiR0aGVtZS1kYXJrLWhlYWRpbmdzLWNvbG9yOiAjZDBkMmQ2ICFkZWZhdWx0O1xuJHRoZW1lLWRhcmstbGFiZWwtY29sb3I6ICNkMGQyZDYgIWRlZmF1bHQ7XG4kdGhlbWUtZGFyay10ZXh0LW11dGVkLWNvbG9yOiAjNjc2ZDdkICFkZWZhdWx0O1xuXG4vL0NhcmRcbiR0aGVtZS1kYXJrLWNhcmQtYmc6ICMyODMwNDYgIWRlZmF1bHQ7XG4kdGhlbWUtZGFyay1ib3gtc2hhZG93OiAwIDRweCAyNHB4IDAgcmdiYSgkYmxhY2ssIDAuMjQpO1xuXG4vL0lucHV0XG4kdGhlbWUtZGFyay1pbnB1dC1iZzogIzI4MzA0NiAhZGVmYXVsdDtcbiR0aGVtZS1kYXJrLWlucHV0LXBsYWNlaG9sZGVyLWNvbG9yOiAjNjc2ZDdkICFkZWZhdWx0O1xuJHRoZW1lLWRhcmstaW5wdXQtYm9yZGVyLWNvbG9yOiAjNDA0NjU2ICFkZWZhdWx0O1xuJHRoZW1lLWRhcmstaW5wdXQtZGlzYWJsZWQtYmc6ICMyNDIzM2EgIWRlZmF1bHQ7XG4kdGhlbWUtZGFyay1pbnB1dC1kaXNhYmxlZC1ib3JkZXItY29sb3I6ICM0NDRiNjAgIWRlZmF1bHQ7XG5cbi8vIFN3aXRjaFxuJHRoZW1lLWRhcmstc3dpdGNoLWJnOiAjNTQ1YTZhO1xuJHRoZW1lLWRhcmstc3dpdGNoLWJnLWRpc2FibGVkOiAjMWIyMzM3O1xuXG4vL1RhYmxlXG4kdGhlbWUtZGFyay10YWJsZS1iZzogIzI4MzA0NiAhZGVmYXVsdDtcbiR0aGVtZS1kYXJrLXRhYmxlLWhlYWRlci1iZzogIzM0M2Q1NSAhZGVmYXVsdDtcbiR0aGVtZS1kYXJrLXRhYmxlLXJvdy1iZzogIzI4MzA0NiAhZGVmYXVsdDtcbiR0aGVtZS1kYXJrLXRhYmxlLWhvdmVyLWJnOiAjMjQyYjNkICFkZWZhdWx0O1xuJHRoZW1lLWRhcmstdGFibGUtc3RyaXBlZC1iZzogIzI0MmIzZCAhZGVmYXVsdDtcblxuJHRoZW1lLWRhcmstbW9kYWwtaGVhZGVyLWJnOiAjMTYxZDMxICFkZWZhdWx0O1xuJHRoZW1lLWRhcmstcGFnaW5hdGlvbi1iZzogIzI0MmIzZCAhZGVmYXVsdDtcbiR0aGVtZS1kYXJrLWNoYXJ0LWJnOiAjMzg0MDU2ICFkZWZhdWx0O1xuJHRoZW1lLWRhcmstd2lkZ2V0LWJnOiAjMzg0MDU2ICFkZWZhdWx0O1xuIl19 */"],
  encapsulation: 2
});

/***/ }),

/***/ 83742:
/*!**********************************************************************!*\
  !*** ./src/@core/components/core-touchspin/core-touchspin.module.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreTouchspinModule": function() { return /* binding */ CoreTouchspinModule; }
/* harmony export */ });
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _core_components_core_touchspin_core_touchspin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/core-touchspin/core-touchspin.component */ 71805);
/* harmony import */ var _core_common_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/common.module */ 75078);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);







var CoreTouchspinModule = /*#__PURE__*/(0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function CoreTouchspinModule() {
  (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, CoreTouchspinModule);
});

CoreTouchspinModule.ɵfac = function CoreTouchspinModule_Factory(t) {
  return new (t || CoreTouchspinModule)();
};

CoreTouchspinModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: CoreTouchspinModule
});
CoreTouchspinModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _core_common_module__WEBPACK_IMPORTED_MODULE_3__.CoreCommonModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](CoreTouchspinModule, {
    declarations: [_core_components_core_touchspin_core_touchspin_component__WEBPACK_IMPORTED_MODULE_2__.CoreTouchspinComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _core_common_module__WEBPACK_IMPORTED_MODULE_3__.CoreCommonModule],
    exports: [_core_components_core_touchspin_core_touchspin_component__WEBPACK_IMPORTED_MODULE_2__.CoreTouchspinComponent]
  });
})();

/***/ }),

/***/ 69065:
/*!***************************************!*\
  !*** ./src/@core/components/index.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreMenuModule": function() { return /* reexport safe */ _core_menu_core_menu_module__WEBPACK_IMPORTED_MODULE_0__.CoreMenuModule; },
/* harmony export */   "CoreSidebarModule": function() { return /* reexport safe */ _core_sidebar_core_sidebar_module__WEBPACK_IMPORTED_MODULE_1__.CoreSidebarModule; },
/* harmony export */   "CoreThemeCustomizerModule": function() { return /* reexport safe */ _theme_customizer_theme_customizer_module__WEBPACK_IMPORTED_MODULE_2__.CoreThemeCustomizerModule; }
/* harmony export */ });
/* harmony import */ var _core_menu_core_menu_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-menu/core-menu.module */ 64017);
/* harmony import */ var _core_sidebar_core_sidebar_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core-sidebar/core-sidebar.module */ 39698);
/* harmony import */ var _theme_customizer_theme_customizer_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme-customizer/theme-customizer.module */ 43332);
// common components




/***/ }),

/***/ 68347:
/*!*****************************************************************************!*\
  !*** ./src/@core/components/theme-customizer/theme-customizer.component.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreThemeCustomizerComponent": function() { return /* binding */ CoreThemeCustomizerComponent; }
/* harmony export */ });
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 85921);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/config.service */ 52553);
/* harmony import */ var _core_components_core_sidebar_core_sidebar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/components/core-sidebar/core-sidebar.service */ 66841);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/extended */ 1570);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 15375);
/* harmony import */ var _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/directives/core-feather-icons/core-feather-icons */ 66279);














function CoreThemeCustomizerComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "label", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Semi oscuro");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}

function CoreThemeCustomizerComponent_div_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 61)(1, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Men\xFA contra\xEDdo");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "input", 62)(5, "label", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}

var _c0 = function _c0(a0) {
  return {
    selected: a0
  };
};

function CoreThemeCustomizerComponent_div_64_Template(rf, ctx) {
  if (rf & 1) {
    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 64)(1, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Color de la barra de navegaci\xF3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "ul", 65)(4, "li", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CoreThemeCustomizerComponent_div_64_Template_li_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r7.navbarColor(""));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "li", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CoreThemeCustomizerComponent_div_64_Template_li_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r9.navbarColor("bg-primary"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "li", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CoreThemeCustomizerComponent_div_64_Template_li_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r10.navbarColor("bg-secondary"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "li", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CoreThemeCustomizerComponent_div_64_Template_li_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r11.navbarColor("bg-success"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "li", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CoreThemeCustomizerComponent_div_64_Template_li_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r12.navbarColor("bg-danger"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "li", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CoreThemeCustomizerComponent_div_64_Template_li_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r13.navbarColor("bg-info"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "li", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CoreThemeCustomizerComponent_div_64_Template_li_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r14.navbarColor("bg-warning"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "li", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CoreThemeCustomizerComponent_div_64_Template_li_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r15.navbarColor("bg-dark"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](8, _c0, ctx_r2.navbarColorValue === ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](10, _c0, ctx_r2.navbarColorValue === "bg-primary"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](12, _c0, ctx_r2.navbarColorValue === "bg-secondary"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](14, _c0, ctx_r2.navbarColorValue === "bg-success"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](16, _c0, ctx_r2.navbarColorValue === "bg-danger"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](18, _c0, ctx_r2.navbarColorValue === "bg-info"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](20, _c0, ctx_r2.navbarColorValue === "bg-warning"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](22, _c0, ctx_r2.navbarColorValue === "bg-dark"));
  }
}

function CoreThemeCustomizerComponent_p_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Tipo de barra de navegaci\xF3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function CoreThemeCustomizerComponent_ng_template_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Menu Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function CoreThemeCustomizerComponent_div_82_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "input", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "label", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Oculto");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}

var CoreThemeCustomizerComponent = /*#__PURE__*/function () {
  /**
   * Constructor
      * @param {FormBuilder} _formBuilder
   * @param {CoreConfigService} _coreConfigService
   * @param {CoreSidebarService} _coreSidebarService
   * */
  function CoreThemeCustomizerComponent(_formBuilder, _coreConfigService, _coreSidebarService) {
    (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CoreThemeCustomizerComponent);

    this._formBuilder = _formBuilder;
    this._coreConfigService = _coreConfigService;
    this._coreSidebarService = _coreSidebarService; // Set the private defaults

    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
  } //  Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */


  (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(CoreThemeCustomizerComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      // Build theme config form
      this.form = this._formBuilder.group({
        app: this._formBuilder.group({
          appName: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
          appTitle: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
          appLogoImage: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
          appLanguage: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl()
        }),
        layout: this._formBuilder.group({
          skin: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
          type: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
          animation: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
          menu: this._formBuilder.group({
            hidden: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
            collapsed: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl()
          }),
          navbar: this._formBuilder.group({
            hidden: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
            background: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
            customBackgroundColor: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
            backgroundColor: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl()
          }),
          footer: this._formBuilder.group({
            hidden: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
            background: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
            customBackgroundColor: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
            backgroundColor: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl()
          }),
          enableLocalStorage: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
          customizer: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
          scrollTop: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
          buyNow: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl()
        })
      }); // Subscribe to the config changes

      this._coreConfigService.config.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._unsubscribeAll)).subscribe(function (config) {
        // Update config
        _this.coreConfig = config; // Set the config form values

        _this.form.setValue(config, {
          emitEvent: false
        });
      }); // Subscribe to the form layout.type value changes


      this.form.get('layout.type').valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._unsubscribeAll)).subscribe(function (value) {
        _this._resetFormValues(value);
      }); // Subscribe to the form value changes

      this.form.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._unsubscribeAll)).subscribe(function (config) {
        _this._coreConfigService.config = config;
      }); // Set navbar color

      this.navbarColor(this.form.get('layout.navbar.backgroundColor').value);
    }
    /**
     * On destroy
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      // Unsubscribe from all subscriptions
      this._unsubscribeAll.next();

      this._unsubscribeAll.complete();
    } //  Private methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Reset form values based on the selected menu layout
     *
     * @param value
     * @private
     */

  }, {
    key: "_resetFormValues",
    value: function _resetFormValues(value) {
      switch (value) {
        case 'vertical':
          {
            this.form.patchValue({
              layout: {
                // skin: 'default',
                animation: 'fadeIn',
                menu: {
                  hidden: false,
                  collapsed: false
                },
                navbar: {
                  hidden: false,
                  type: 'floating-nav',
                  background: 'navbar-light',
                  customBackgroundColor: true,
                  backgroundColor: ''
                },
                footer: {
                  hidden: false,
                  type: 'footer-static',
                  background: 'footer-light',
                  customBackgroundColor: false,
                  backgroundColor: 'bg-primary'
                }
              }
            });
          }

        case 'horizontal':
          {
            this.form.patchValue({
              layout: {
                // skin: 'default',
                animation: 'fadeIn',
                menu: {
                  hidden: false,
                  collapsed: false
                },
                navbar: {
                  hidden: false,
                  type: 'floating-nav',
                  background: 'navbar-light',
                  customBackgroundColor: true,
                  backgroundColor: ''
                },
                footer: {
                  hidden: false,
                  type: 'footer-static',
                  background: 'footer-light',
                  customBackgroundColor: false,
                  backgroundColor: 'bg-primary'
                }
              }
            });
          }
      } // Set navbar color


      this.navbarColor(this.form.get('layout.navbar.backgroundColor').value);
    } // Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Patch selected navbar color value to form
     *
     * @param value
     */

  }, {
    key: "navbarColor",
    value: function navbarColor(value) {
      this.navbarColorValue = value;
      this.form.patchValue({
        layout: {
          navbar: {
            customBackgroundColor: true,
            backgroundColor: this.navbarColorValue
          }
        }
      });
    }
    /**
     * Toggle sidebar open
     *
     * @param key
     */

  }, {
    key: "toggleSidebar",
    value: function toggleSidebar(key) {
      this._coreSidebarService.getSidebarRegistry(key).toggleOpen();
    }
  }]);

  return CoreThemeCustomizerComponent;
}();

CoreThemeCustomizerComponent.ɵfac = function CoreThemeCustomizerComponent_Factory(t) {
  return new (t || CoreThemeCustomizerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_config_service__WEBPACK_IMPORTED_MODULE_2__.CoreConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_components_core_sidebar_core_sidebar_service__WEBPACK_IMPORTED_MODULE_3__.CoreSidebarService));
};

CoreThemeCustomizerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: CoreThemeCustomizerComponent,
  selectors: [["core-theme-customizer"]],
  decls: 101,
  vars: 8,
  consts: [[1, "customizer-content", 3, "perfectScrollbar"], [1, "customizer-header", "px-2", "pt-1", "pb-0", "position-relative"], [1, "mb-0"], [1, "m-0"], [1, "customizer-close", 3, "click"], [3, "data-feather"], [3, "formGroup"], ["formGroupName", "layout"], ["id", "customizer-styling", 1, "px-2"], ["id", "customizer-styling-skin"], [1, "font-weight-bold"], [1, "d-flex"], [1, "custom-control", "custom-radio", "mr-1"], ["type", "radio", "id", "skinlight", "formControlName", "skin", "value", "default", 1, "custom-control-input", "layout-name"], ["for", "skinlight", 1, "custom-control-label"], ["type", "radio", "id", "skinbordered", "formControlName", "skin", "value", "bordered", 1, "custom-control-input", "layout-name"], ["for", "skinbordered", 1, "custom-control-label"], ["type", "radio", "id", "skindark", "formControlName", "skin", "value", "dark", 1, "custom-control-input", "layout-name"], ["for", "skindark", 1, "custom-control-label"], ["class", "custom-control custom-radio", 4, "ngIf"], [1, "d-flex", "justify-content-between", "align-items-center", "mt-2"], ["for", "routeSelect", 1, "font-weight-bold", "mr-auto", "m-0"], ["formControlName", "animation", "id", "routeSelect", 1, "form-control", "w-50"], ["value", "fadeInLeft"], ["value", "zoomIn"], ["value", "fadeIn"], ["value", "none"], [1, "customizer-menu", "px-2"], ["id", "customizer-menu-type"], ["type", "radio", "id", "menu-type-vertical", "value", "vertical", "formControlName", "type", 1, "custom-control-input"], ["for", "menu-type-vertical", 1, "custom-control-label"], ["type", "radio", "id", "menu-type-horizontal", "value", "horizontal", "formControlName", "type", 1, "custom-control-input"], ["for", "menu-type-horizontal", 1, "custom-control-label"], ["id", "customizer-menu-collapsible", "class", "d-flex mt-2", "formGroupName", "menu", 4, "ngIf"], ["id", "customizer-menu-hidden", "formGroupName", "menu", 1, "d-flex", "mt-2"], [1, "font-weight-bold", "mr-auto", "m-0"], [1, "custom-control", "custom-control-primary", "custom-switch"], ["type", "checkbox", "id", "collapse-sidebar-hidden", "formControlName", "hidden", 1, "custom-control-input"], ["for", "collapse-sidebar-hidden", 1, "custom-control-label"], ["id", "customizer-navbar", "formGroupName", "navbar", 1, "px-2"], ["id", "customizer-navbar-colors", 4, "ngIf"], ["id", "customizer-navbar-type"], ["class", "navbar-type-text font-weight-bold", 4, "ngIf", "ngIfElse"], ["navbarTypeHorizontal", ""], ["type", "radio", "id", "nav-type-floating", "value", "floating-nav", "formControlName", "type", 1, "custom-control-input"], ["for", "nav-type-floating", 1, "custom-control-label"], ["type", "radio", "id", "nav-type-sticky", "value", "fixed-top", "formControlName", "type", 1, "custom-control-input"], ["for", "nav-type-sticky", 1, "custom-control-label"], ["type", "radio", "id", "nav-type-static", "value", "navbar-static-top", "formControlName", "type", 1, "custom-control-input"], ["for", "nav-type-static", 1, "custom-control-label"], ["id", "customizer-footer", "formGroupName", "footer", 1, "px-2", "mb-2"], ["id", "customizer-footer-type"], ["type", "radio", "id", "footer-type-sticky", "value", "footer-sticky", "formControlName", "type", 1, "custom-control-input"], ["for", "footer-type-sticky", 1, "custom-control-label"], ["type", "radio", "id", "footer-type-static", "value", "footer-static", "formControlName", "type", 1, "custom-control-input"], ["for", "footer-type-static", 1, "custom-control-label"], ["type", "radio", "id", "footer-type-hidden", "value", "d-none", "formControlName", "type", 1, "custom-control-input"], ["for", "footer-type-hidden", 1, "custom-control-label"], [1, "custom-control", "custom-radio"], ["type", "radio", "id", "skinsemidark", "formControlName", "skin", "value", "semi-dark", 1, "custom-control-input", "layout-name"], ["for", "skinsemidark", 1, "custom-control-label"], ["id", "customizer-menu-collapsible", "formGroupName", "menu", 1, "d-flex", "mt-2"], ["type", "checkbox", "id", "collapse-sidebar-switch", "formControlName", "collapsed", 1, "custom-control-input"], ["for", "collapse-sidebar-switch", 1, "custom-control-label"], ["id", "customizer-navbar-colors"], [1, "list-inline", "unstyled-list"], [1, "color-box", "bg-white", "border", 3, "ngClass", "click"], [1, "color-box", "bg-primary", 3, "ngClass", "click"], [1, "color-box", "bg-secondary", 3, "ngClass", "click"], [1, "color-box", "bg-success", 3, "ngClass", "click"], [1, "color-box", "bg-danger", 3, "ngClass", "click"], [1, "color-box", "bg-info", 3, "ngClass", "click"], [1, "color-box", "bg-warning", 3, "ngClass", "click"], [1, "color-box", "bg-dark", 3, "ngClass", "click"], [1, "navbar-type-text", "font-weight-bold"], ["type", "radio", "id", "nav-type-hidden", "value", "d-none", "formControlName", "type", 1, "custom-control-input"], ["for", "nav-type-hidden", 1, "custom-control-label"]],
  template: function CoreThemeCustomizerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h4", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Personalizador de temas");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "p", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Personalizar y previsualizar en tiempo real");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CoreThemeCustomizerComponent_Template_a_click_6_listener() {
        return ctx.toggleSidebar("themeCustomizer");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "form", 6)(10, "div", 7)(11, "div", 8)(12, "div", 9)(13, "p", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Piel");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 11)(16, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "label", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Luz");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Bordeado");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](25, "input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "label", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "Oscuro");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, CoreThemeCustomizerComponent_div_28_Template, 4, 0, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 20)(30, "p", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "Transici\xF3n de rutas");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "select", 22)(33, "option", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "Desvanecer a la izquierda");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "option", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "Acercarse");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "option", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, "Fundirse");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "option", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "Ninguna");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](41, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "div", 27)(43, "div", 28)(44, "p", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, "Dise\xF1o del men\xFA");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "div", 11)(47, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](48, "input", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "label", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50, "Vertical");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](52, "input", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "label", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54, "Horizontal");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](55, CoreThemeCustomizerComponent_div_55_Template, 6, 0, "div", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "div", 34)(57, "p", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58, "Men\xFA Oscuro");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](60, "input", 37)(61, "label", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](62, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "div", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](64, CoreThemeCustomizerComponent_div_64_Template, 12, 24, "div", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "div", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](66, CoreThemeCustomizerComponent_p_66_Template, 2, 0, "p", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](67, CoreThemeCustomizerComponent_ng_template_67_Template, 2, 0, "ng-template", null, 43, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "div", 11)(70, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](71, "input", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "label", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](73, "Flotante");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](74, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](75, "input", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "label", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](77, "Pegajoso");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](78, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](79, "input", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "label", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](81, "Est\xE1tico");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](82, CoreThemeCustomizerComponent_div_82_Template, 4, 0, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](83, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](84, "div", 50)(85, "div", 51)(86, "p", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](87, "Tipo de pie de p\xE1gina");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](88, "div", 11)(89, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](90, "input", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](91, "label", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](92, "Pegajoso");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](93, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](94, "input", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](95, "label", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](96, "Est\xE1tico");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](97, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](98, "input", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](99, "label", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](100, "Oculto");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()();
    }

    if (rf & 2) {
      var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](68);

      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data-feather", "x");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.coreConfig.layout.type == "vertical");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.coreConfig.layout.type == "vertical");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.coreConfig.layout.type == "vertical");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.coreConfig.layout.type == "vertical")("ngIfElse", _r4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.coreConfig.layout.type == "vertical");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupName, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__.DefaultClassDirective, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__.PerfectScrollbarDirective, _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_4__.FeatherIconDirective],
  styles: [".customizer.show {\n  box-shadow: 0 15px 30px 0 rgba(34, 41, 47, 0.11), 0 5px 15px 0 rgba(34, 41, 47, 0.08);\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRoZW1lLWN1c3RvbWl6ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxRkFBQTtFQUNBLFFBQUE7QUFDRiIsImZpbGUiOiJ0aGVtZS1jdXN0b21pemVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RvbWl6ZXIuc2hvdyB7XG4gIGJveC1zaGFkb3c6IDAgMTVweCAzMHB4IDAgcmdiYSgzNCwgNDEsIDQ3LCAwLjExKSwgMCA1cHggMTVweCAwIHJnYmEoMzQsIDQxLCA0NywgMC4wOCk7XG4gIHJpZ2h0OiAwO1xufVxuIl19 */"],
  encapsulation: 2
});

/***/ }),

/***/ 43332:
/*!**************************************************************************!*\
  !*** ./src/@core/components/theme-customizer/theme-customizer.module.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreThemeCustomizerModule": function() { return /* binding */ CoreThemeCustomizerModule; }
/* harmony export */ });
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ 71378);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 15375);
/* harmony import */ var _core_directives_directives__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/directives/directives */ 35455);
/* harmony import */ var _core_components_core_sidebar_core_sidebar_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/components/core-sidebar/core-sidebar.module */ 39698);
/* harmony import */ var _core_components_theme_customizer_theme_customizer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/components/theme-customizer/theme-customizer.component */ 68347);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);










var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
  suppressScrollX: true,
  wheelPropagation: false
};
var CoreThemeCustomizerModule = /*#__PURE__*/(0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function CoreThemeCustomizerModule() {
  (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, CoreThemeCustomizerModule);
});

CoreThemeCustomizerModule.ɵfac = function CoreThemeCustomizerModule_Factory(t) {
  return new (t || CoreThemeCustomizerModule)();
};

CoreThemeCustomizerModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: CoreThemeCustomizerModule
});
CoreThemeCustomizerModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  providers: [{
    provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__.PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
  }],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__.FlexLayoutModule, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__.PerfectScrollbarModule, _core_directives_directives__WEBPACK_IMPORTED_MODULE_2__.CoreDirectivesModule, _core_components_core_sidebar_core_sidebar_module__WEBPACK_IMPORTED_MODULE_3__.CoreSidebarModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](CoreThemeCustomizerModule, {
    declarations: [_core_components_theme_customizer_theme_customizer_component__WEBPACK_IMPORTED_MODULE_4__.CoreThemeCustomizerComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__.FlexLayoutModule, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__.PerfectScrollbarModule, _core_directives_directives__WEBPACK_IMPORTED_MODULE_2__.CoreDirectivesModule, _core_components_core_sidebar_core_sidebar_module__WEBPACK_IMPORTED_MODULE_3__.CoreSidebarModule],
    exports: [_core_components_theme_customizer_theme_customizer_component__WEBPACK_IMPORTED_MODULE_4__.CoreThemeCustomizerComponent]
  });
})();

/***/ }),

/***/ 70460:
/*!**********************************!*\
  !*** ./src/@core/core.module.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreModule": function() { return /* binding */ CoreModule; }
/* harmony export */ });
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/config.service */ 52553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




var CoreModule = /*#__PURE__*/function () {
  function CoreModule(parentModule) {
    (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CoreModule);

    if (parentModule) {
      throw new Error('Import CoreModule in the AppModule only');
    }
  }

  (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(CoreModule, null, [{
    key: "forRoot",
    value: function forRoot(config) {
      return {
        ngModule: CoreModule,
        providers: [{
          provide: _core_services_config_service__WEBPACK_IMPORTED_MODULE_2__.CORE_CUSTOM_CONFIG,
          useValue: config
        }]
      };
    }
  }]);

  return CoreModule;
}();

CoreModule.ɵfac = function CoreModule_Factory(t) {
  return new (t || CoreModule)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](CoreModule, 12));
};

CoreModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: CoreModule
});
CoreModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({});

/***/ }),

/***/ 66279:
/*!***********************************************************************!*\
  !*** ./src/@core/directives/core-feather-icons/core-feather-icons.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeatherIconDirective": function() { return /* binding */ FeatherIconDirective; }
/* harmony export */ });
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var feather_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! feather-icons */ 61407);
/* harmony import */ var feather_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(feather_icons__WEBPACK_IMPORTED_MODULE_2__);





var FeatherIconDirective = /*#__PURE__*/function () {
  /**
   * Constructor
   *
   * @param {ElementRef} _elementRef
   */
  function FeatherIconDirective(_elementRef, _changeDetector) {
    (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FeatherIconDirective);

    this._elementRef = _elementRef;
    this._changeDetector = _changeDetector;
  }

  (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(FeatherIconDirective, [{
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      // Get the native element
      this._nativeElement = this._elementRef.nativeElement; // SVG parameter

      this.name = changes.name ? changes.name.currentValue : '';
      this.size = changes.size ? changes.size.currentValue : '14'; // Set default size 14

      this.class = changes.class ? changes.class.currentValue : ''; // Create SVG

      var svg = feather_icons__WEBPACK_IMPORTED_MODULE_2__.icons[this.name].toSvg({
        class: this.class,
        width: this.size,
        height: this.size
      }); // Set SVG

      if (this.inner) {
        this._nativeElement.innerHTML = svg;
      } else {
        this._nativeElement.outerHTML = svg;
      }

      this._changeDetector.markForCheck();
    }
  }]);

  return FeatherIconDirective;
}();

FeatherIconDirective.ɵfac = function FeatherIconDirective_Factory(t) {
  return new (t || FeatherIconDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef));
};

FeatherIconDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: FeatherIconDirective,
  selectors: [["", "data-feather", ""]],
  inputs: {
    name: ["data-feather", "name"],
    class: "class",
    size: "size",
    inner: "inner"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]]
});

/***/ }),

/***/ 75287:
/*!*********************************************************************************!*\
  !*** ./src/@core/directives/core-ripple-effect/core-ripple-effect.directive.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RippleEffectDirective": function() { return /* binding */ RippleEffectDirective; }
/* harmony export */ });
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var node_waves__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! node-waves */ 38224);
/* harmony import */ var node_waves__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(node_waves__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




var RippleEffectDirective = /*#__PURE__*/function () {
  /**
   * Constructor
   *
   * @param {ElementRef} _elementRef
   */
  function RippleEffectDirective(_elementRef) {
    (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, RippleEffectDirective);

    this._elementRef = _elementRef;
  }

  (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(RippleEffectDirective, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      // Get the native element
      this._nativeElement = this._elementRef.nativeElement;

      if ( // Attach ripple with light style i.e solid variant of button
      !this._nativeElement.className.split(' ').some(function (c) {
        return /btn-outline-.*/.test(c);
      }) && !this._nativeElement.className.split(' ').some(function (c) {
        return /btn-flat-.*/.test(c);
      })) {
        node_waves__WEBPACK_IMPORTED_MODULE_2__.attach(this._nativeElement, ['waves-float', 'waves-light']);
      } else {
        // Attach ripple with transparent style i.e flat, outline variant of button
        node_waves__WEBPACK_IMPORTED_MODULE_2__.attach(this._nativeElement);
      }
    }
  }]);

  return RippleEffectDirective;
}();

RippleEffectDirective.ɵfac = function RippleEffectDirective_Factory(t) {
  return new (t || RippleEffectDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef));
};

RippleEffectDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: RippleEffectDirective,
  selectors: [["", "rippleEffect", ""]],
  inputs: {
    wave: "wave"
  }
});

/***/ }),

/***/ 35455:
/*!********************************************!*\
  !*** ./src/@core/directives/directives.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreDirectivesModule": function() { return /* binding */ CoreDirectivesModule; }
/* harmony export */ });
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/directives/core-feather-icons/core-feather-icons */ 66279);
/* harmony import */ var _core_directives_core_ripple_effect_core_ripple_effect_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/directives/core-ripple-effect/core-ripple-effect.directive */ 75287);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);





var CoreDirectivesModule = /*#__PURE__*/(0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function CoreDirectivesModule() {
  (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, CoreDirectivesModule);
});

CoreDirectivesModule.ɵfac = function CoreDirectivesModule_Factory(t) {
  return new (t || CoreDirectivesModule)();
};

CoreDirectivesModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: CoreDirectivesModule
});
CoreDirectivesModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](CoreDirectivesModule, {
    declarations: [_core_directives_core_ripple_effect_core_ripple_effect_directive__WEBPACK_IMPORTED_MODULE_3__.RippleEffectDirective, _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_2__.FeatherIconDirective],
    exports: [_core_directives_core_ripple_effect_core_ripple_effect_directive__WEBPACK_IMPORTED_MODULE_3__.RippleEffectDirective, _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_2__.FeatherIconDirective]
  });
})();

/***/ }),

/***/ 69671:
/*!****************************************!*\
  !*** ./src/@core/pipes/filter.pipe.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterPipe": function() { return /* binding */ FilterPipe; }
/* harmony export */ });
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



var FilterPipe = /*#__PURE__*/function () {
  function FilterPipe() {
    (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FilterPipe);
  }

  (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(FilterPipe, [{
    key: "transform",
    value:
    /**
     * Transform
     *
     * @param {any[]} items
     * @param {string} searchText
     * @param {string} key
     *
     * @returns {any}
     */
    function transform(items, searchText, key) {
      if (!items) return [];
      if (!searchText) return items;
      searchText = searchText.toLowerCase();
      return items.filter(function (it) {
        return it[key].toLowerCase().includes(searchText);
      });
    }
  }]);

  return FilterPipe;
}();

FilterPipe.ɵfac = function FilterPipe_Factory(t) {
  return new (t || FilterPipe)();
};

FilterPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefinePipe"]({
  name: "filter",
  type: FilterPipe,
  pure: true
});

/***/ }),

/***/ 16516:
/*!******************************************!*\
  !*** ./src/@core/pipes/initials.pipe.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InitialsPipe": function() { return /* binding */ InitialsPipe; }
/* harmony export */ });
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



var InitialsPipe = /*#__PURE__*/function () {
  function InitialsPipe() {
    (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, InitialsPipe);
  }

  (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(InitialsPipe, [{
    key: "transform",
    value: function transform(fullName) {
      return fullName === null || fullName === void 0 ? void 0 : fullName.split(' ').map(function (n) {
        return n[0];
      }).join('');
    }
  }]);

  return InitialsPipe;
}();

InitialsPipe.ɵfac = function InitialsPipe_Factory(t) {
  return new (t || InitialsPipe)();
};

InitialsPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefinePipe"]({
  name: "initials",
  type: InitialsPipe,
  pure: true
});

/***/ }),

/***/ 30021:
/*!*****************************************!*\
  !*** ./src/@core/pipes/pipes.module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CorePipesModule": function() { return /* binding */ CorePipesModule; }
/* harmony export */ });
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _core_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/pipes/filter.pipe */ 69671);
/* harmony import */ var _core_pipes_initials_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/pipes/initials.pipe */ 16516);
/* harmony import */ var _core_pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/pipes/safe.pipe */ 16821);
/* harmony import */ var _core_pipes_stripHtml_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/pipes/stripHtml.pipe */ 93798);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);







var CorePipesModule = /*#__PURE__*/(0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function CorePipesModule() {
  (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, CorePipesModule);
});

CorePipesModule.ɵfac = function CorePipesModule_Factory(t) {
  return new (t || CorePipesModule)();
};

CorePipesModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: CorePipesModule
});
CorePipesModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](CorePipesModule, {
    declarations: [_core_pipes_initials_pipe__WEBPACK_IMPORTED_MODULE_3__.InitialsPipe, _core_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_2__.FilterPipe, _core_pipes_stripHtml_pipe__WEBPACK_IMPORTED_MODULE_5__.StripHtmlPipe, _core_pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_4__.SafePipe],
    exports: [_core_pipes_initials_pipe__WEBPACK_IMPORTED_MODULE_3__.InitialsPipe, _core_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_2__.FilterPipe, _core_pipes_stripHtml_pipe__WEBPACK_IMPORTED_MODULE_5__.StripHtmlPipe, _core_pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_4__.SafePipe]
  });
})();

/***/ }),

/***/ 16821:
/*!**************************************!*\
  !*** ./src/@core/pipes/safe.pipe.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SafePipe": function() { return /* binding */ SafePipe; }
/* harmony export */ });
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 50318);




/**
 * Sanitize HTML
 */

var SafePipe = /*#__PURE__*/function () {
  /**
   * Pipe Constructor
   *
   * @param _sanitizer: DomSanitezer
   */
  // tslint:disable-next-line
  function SafePipe(_sanitizer) {
    (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SafePipe);

    this._sanitizer = _sanitizer;
  }
  /**
   * Transform
   *
   * @param value: string
   * @param type: string
   */


  (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(SafePipe, [{
    key: "transform",
    value: function transform(value, type) {
      switch (type) {
        case 'html':
          return this._sanitizer.bypassSecurityTrustHtml(value);

        case 'style':
          return this._sanitizer.bypassSecurityTrustStyle(value);

        case 'script':
          return this._sanitizer.bypassSecurityTrustScript(value);

        case 'url':
          return this._sanitizer.bypassSecurityTrustUrl(value);

        case 'resourceUrl':
          return this._sanitizer.bypassSecurityTrustResourceUrl(value);

        default:
          return this._sanitizer.bypassSecurityTrustHtml(value);
      }
    }
  }]);

  return SafePipe;
}();

SafePipe.ɵfac = function SafePipe_Factory(t) {
  return new (t || SafePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.DomSanitizer, 16));
};

SafePipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefinePipe"]({
  name: "safe",
  type: SafePipe,
  pure: true
});

/***/ }),

/***/ 93798:
/*!*******************************************!*\
  !*** ./src/@core/pipes/stripHtml.pipe.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StripHtmlPipe": function() { return /* binding */ StripHtmlPipe; }
/* harmony export */ });
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



var StripHtmlPipe = /*#__PURE__*/function () {
  function StripHtmlPipe() {
    (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, StripHtmlPipe);
  }

  (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(StripHtmlPipe, [{
    key: "transform",
    value: function transform(value) {
      return value.replace(/<.*?>/g, ''); // replace tags
    }
  }]);

  return StripHtmlPipe;
}();

StripHtmlPipe.ɵfac = function StripHtmlPipe_Factory(t) {
  return new (t || StripHtmlPipe)();
};

StripHtmlPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefinePipe"]({
  name: "striphtml",
  type: StripHtmlPipe,
  pure: true
});

/***/ }),

/***/ 52553:
/*!**********************************************!*\
  !*** ./src/@core/services/config.service.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CORE_CUSTOM_CONFIG": function() { return /* binding */ CORE_CUSTOM_CONFIG; },
/* harmony export */   "CoreConfigService": function() { return /* binding */ CoreConfigService; }
/* harmony export */ });
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 59151);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ 92938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);








 // Injection token for the core custom settings

var CORE_CUSTOM_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.InjectionToken('coreCustomConfig');
var CoreConfigService = /*#__PURE__*/function () {
  /**
   * Constructor
   *
   * @param _config
   * @param {Router} _router
   */
  function CoreConfigService(_router, _config) {
    (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CoreConfigService);

    this._router = _router;
    this._config = _config; // Get the config from local storage

    if (_config.layout.enableLocalStorage) {
      this.localConfig = JSON.parse(localStorage.getItem('config'));
    } else {
      localStorage.removeItem('config');
    } // Set the defaultConfig to localConfig if we have else appConfig (app-config.ts)


    this._defaultConfig = this.localConfig ? this.localConfig : _config; // Initialize the config service

    this._initConfig();
  } //  Accessors
  // -----------------------------------------------------------------------------------------------------
  // Set the config


  (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(CoreConfigService, [{
    key: "config",
    get: // Get the config
    function get() {
      return this._configSubject.asObservable();
    }
    /**
     * Get default config
     *
     * @returns {any}
     */
    ,
    set: function set(data) {
      var config; // Set config = localConfig, If we have else defaultConfig

      if (this.localConfig) {
        config = this.localConfig;
      } else {
        config = this._configSubject.getValue();
      } // Merge provided data with config, and create new merged config


      config = lodash__WEBPACK_IMPORTED_MODULE_2__.merge({}, config, data); // Set config to local storage if enableLocalStorage parameter is true

      if (config.layout.enableLocalStorage) {
        localStorage.setItem('config', JSON.stringify(config));
      } // Inform the observers


      this._configSubject.next(config);
    }
  }, {
    key: "defaultConfig",
    get: function get() {
      return this._defaultConfig;
    } // Private methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Initialize
     *
     * @private
     */

  }, {
    key: "_initConfig",
    value: function _initConfig() {
      var _this = this;

      // Set the config from the default config
      this._configSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(lodash__WEBPACK_IMPORTED_MODULE_2__.cloneDeep(this._defaultConfig)); // On every RoutesRecognized event
      // Check if localDefault (localStorage if we have else defaultConfig) is different form the default one

      this._router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(function (event) {
        return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__.ResolveEnd;
      })).subscribe(function () {
        // Get the local config from local storage
        _this.localConfig = JSON.parse(localStorage.getItem('config')); // Set localDefault to localConfig if we have else defaultConfig

        var localDefault = _this.localConfig ? _this.localConfig : _this._defaultConfig; // If localDefault is different form the provided config (page config)

        if (!lodash__WEBPACK_IMPORTED_MODULE_2__.isEqual(_this._configSubject.getValue().layout, localDefault.layout)) {
          // Clone the current config
          var config = lodash__WEBPACK_IMPORTED_MODULE_2__.cloneDeep(_this._configSubject.getValue()); // Reset the layout from the default config


          config.layout = lodash__WEBPACK_IMPORTED_MODULE_2__.cloneDeep(localDefault.layout); // Set the config

          _this._configSubject.next(config);
        }
      });
    } // Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Set config
     *
     * @param data
     * @param {{emitEvent: boolean}} param
     */

  }, {
    key: "setConfig",
    value: function setConfig(data) {
      var param = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        emitEvent: true
      };
      var config; // Set config = localConfig, If we have else defaultConfig

      this.localConfig = JSON.parse(localStorage.getItem('config'));

      if (this.localConfig) {
        config = this.localConfig;
      } else {
        config = this._configSubject.getValue();
      } // Merge provided value with config, and create new merged config


      config = lodash__WEBPACK_IMPORTED_MODULE_2__.merge({}, config, data); // Set config to local storage if enableLocalStorage parameter is true

      if (config.layout.enableLocalStorage) {
        localStorage.setItem('config', JSON.stringify(config));
      } // If emitEvent option is true...


      if (param.emitEvent === true) {
        // Inform the observers
        this._configSubject.next(config);
      }
    }
    /**
     * Get config
     *
     * @returns {Observable<any>}
     */

  }, {
    key: "getConfig",
    value: function getConfig() {
      return this._configSubject.asObservable();
    }
    /**
     * Reset to the default config
     */

  }, {
    key: "resetConfig",
    value: function resetConfig() {
      this._configSubject.next(lodash__WEBPACK_IMPORTED_MODULE_2__.cloneDeep(this._defaultConfig));
    }
  }]);

  return CoreConfigService;
}();

CoreConfigService.ɵfac = function CoreConfigService_Factory(t) {
  return new (t || CoreConfigService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](CORE_CUSTOM_CONFIG));
};

CoreConfigService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: CoreConfigService,
  factory: CoreConfigService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 35428:
/*!******************************************************!*\
  !*** ./src/@core/services/loading-screen.service.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreLoadingScreenService": function() { return /* binding */ CoreLoadingScreenService; }
/* harmony export */ });
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ 31631);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 59151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 83910);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);









var CoreLoadingScreenService = /*#__PURE__*/function () {
  /**
   * Constructor
   *
   * @param _document
   * @param {Router} _router
   * @param {AnimationBuilder} _animationBuilder
   */
  function CoreLoadingScreenService(_document, _router, _animationBuilder) {
    (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CoreLoadingScreenService);

    this._document = _document;
    this._router = _router;
    this._animationBuilder = _animationBuilder; // Initialize

    this._init();
  } // Private methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Initialize
   *
   * @private
   */


  (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(CoreLoadingScreenService, [{
    key: "_init",
    value: function _init() {
      var _this = this;

      // Get the loading screen element
      this.loadingScreenEl = this._document.body.querySelector('#loading-bg'); // If loading screen element

      if (this.loadingScreenEl) {
        // Hide it on the first NavigationEnd event
        this._router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.filter)(function (event) {
          return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1)).subscribe(function () {
          setTimeout(function () {
            _this.hide();
          });
        });
      }
    } // Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Show the loading screen
     */

  }, {
    key: "show",
    value: function show() {
      var _this2 = this;

      this.animationPlayer = this._animationBuilder.build([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
        opacity: '0',
        zIndex: '99999'
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)('250ms ease', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
        opacity: '1'
      }))]).create(this.loadingScreenEl);
      setTimeout(function () {
        _this2.animationPlayer.play();
      }, 0);
    }
    /**
     * Hide the loading screen
     */

  }, {
    key: "hide",
    value: function hide() {
      var _this3 = this;

      this.animationPlayer = this._animationBuilder.build([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
        opacity: '1'
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)('250ms ease', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
        opacity: '0',
        zIndex: '-10'
      }))]).create(this.loadingScreenEl);
      setTimeout(function () {
        _this3.loadingScreenEl.remove();

        _this3.animationPlayer.play();
      }, 0);
    }
  }]);

  return CoreLoadingScreenService;
}();

CoreLoadingScreenService.ɵfac = function CoreLoadingScreenService_Factory(t) {
  return new (t || CoreLoadingScreenService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_animations__WEBPACK_IMPORTED_MODULE_5__.AnimationBuilder));
};

CoreLoadingScreenService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: CoreLoadingScreenService,
  factory: CoreLoadingScreenService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 42826:
/*!*********************************************!*\
  !*** ./src/@core/services/media.service.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreMediaService": function() { return /* binding */ CoreMediaService; }
/* harmony export */ });
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 80823);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 53298);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ 75722);






var CoreMediaService = /*#__PURE__*/function () {
  /**
   * Constructor
   *
   * @param {MediaObserver} _mediaObserver
   */
  function CoreMediaService(_mediaObserver) {
    (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CoreMediaService);

    this._mediaObserver = _mediaObserver;
    this.onMediaUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(''); // Set the defaults

    this.currentMediaQuery = ''; // Initialize

    this._init();
  } // @ Private methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Initialize
   *
   * @private
   */


  (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(CoreMediaService, [{
    key: "_init",
    value: function _init() {
      var _this = this;

      this._mediaObserver.media$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.debounceTime)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.distinctUntilChanged)()).subscribe(function (change) {
        // console.log('subscription: ', change);
        if (_this.currentMediaQuery !== change.mqAlias) {
          _this.currentMediaQuery = change.mqAlias;

          _this.onMediaUpdate.next(change.mqAlias);
        }
      });
    }
  }]);

  return CoreMediaService;
}();

CoreMediaService.ɵfac = function CoreMediaService_Factory(t) {
  return new (t || CoreMediaService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__.MediaObserver));
};

CoreMediaService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
  token: CoreMediaService,
  factory: CoreMediaService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 11342:
/*!**********************************************************!*\
  !*** ./src/@core/services/seguridad/auth-guard.guard.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuardGuard": function() { return /* binding */ AuthGuardGuard; }
/* harmony export */ });
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.service */ 98468);





var AuthGuardGuard = /*#__PURE__*/function () {
  function AuthGuardGuard(router, loginService) {
    (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AuthGuardGuard);

    this.router = router;
    this.loginService = loginService;
  }

  (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AuthGuardGuard, [{
    key: "canActivate",
    value: function canActivate(next, state) {
      if (sessionStorage.getItem("token") != undefined) {
        return true;
      } else {
        console.log('Entrando');
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("id");
        this.router.navigate(['login']);
        return false;
      }
    }
  }, {
    key: "authConecting",
    value: function authConecting() {
      return new Promise(function (resolv, reject) {// firebase.auth().onAuthStateChanged( user => {
        //   if(user){
        //     return resolv(true);
        //   }else{
        //     return reject(false);
        //   }
        // })
      });
    }
  }]);

  return AuthGuardGuard;
}();

AuthGuardGuard.ɵfac = function AuthGuardGuard_Factory(t) {
  return new (t || AuthGuardGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService));
};

AuthGuardGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: AuthGuardGuard,
  factory: AuthGuardGuard.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 18695:
/*!******************************************************************!*\
  !*** ./src/@core/services/seguridad/auth-interceptor.service.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthInterceptorService": function() { return /* binding */ AuthInterceptorService; }
/* harmony export */ });
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 66587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 47418);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ 60598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);







var AuthInterceptorService = /*#__PURE__*/function () {
  function AuthInterceptorService(router) {
    (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AuthInterceptorService);

    this.router = router;
  }

  (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AuthInterceptorService, [{
    key: "intercept",
    value: function intercept(req, next) {
      var _this = this;

      var token = sessionStorage.getItem('token');
      var request = req;

      if (token) {// request = req.clone({
        //   setHeaders: {
        //     authorization: `Bearer ${ token }`
        //   }
        // });
      }

      return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(function (err) {
        // if (err.status === 401) {
        //   console.error('Evaluacion de Token:', err.error.msj)
        //   this.cerrar(err.error.msj)
        // }
        switch (err.status) {
          case 401:
            console.error('Evaluacion de Token:', err.error.msj);

            _this.cerrar(err.error.msj);

            break;

          case 403:
            console.error('Evaluacion de Token:', err.error.msj);

            _this.cerrar(err.error.msj);

            break;

          default:
            break;
        }

        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(err);
      }));
    }
  }, {
    key: "cerrar",
    value: function cerrar(msj) {
      sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
        title: 'Alerta',
        text: msj,
        icon: 'error',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Gracias por su tiempo'
      }).then(function (result) {
        if (result.isConfirmed) {
          sessionStorage.removeItem('token');
          window.location.href = '/';
        }
      });
    }
  }]);

  return AuthInterceptorService;
}();

AuthInterceptorService.ɵfac = function AuthInterceptorService_Factory(t) {
  return new (t || AuthInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
};

AuthInterceptorService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
  token: AuthInterceptorService,
  factory: AuthInterceptorService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 98468:
/*!*******************************************************!*\
  !*** ./src/@core/services/seguridad/login.service.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginService": function() { return /* binding */ LoginService; }
/* harmony export */ });
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ 60598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 28784);



function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }







var LoginService = /*#__PURE__*/function () {
  function LoginService(router, http) {
    (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LoginService);

    this.router = router;
    this.http = http;
    this.URL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.API;
    this.Id = '';
    this.Id = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.ID;
    if (sessionStorage.getItem("token") != undefined) this.SToken = sessionStorage.getItem("token");
  }

  (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(LoginService, [{
    key: "Iniciar",
    value: function Iniciar() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.getUserDecrypt();

              case 2:
                return _context.abrupt("return", this.obenterAplicacion());

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "getLogin",
    value: function getLogin(user, clave) {
      var usuario = {
        "nombre": user,
        "clave": clave
      };
      var url = this.URL + 'wusuario/login';
      return this.http.post(url, usuario);
    }
  }, {
    key: "makeUser",
    value: function makeUser(user) {
      var url = this.URL + 'identicacion';
      return this.http.post(url, user);
    }
  }, {
    key: "logout",
    value: function logout() {
      var _this = this;

      sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
        title: 'Desea cerrar sesión?',
        text: "Gracias por su tiempo!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, cerrar',
        cancelButtonText: 'Cancelar'
      }).then(function (result) {
        if (result.isConfirmed) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire('Hasta la próxima!', 'Te esperamos', 'success');

          _this.router.navigate(['login']);

          sessionStorage.clear();
          localStorage.clear();
        }
      });
    }
  }, {
    key: "getUserDecrypt",
    value: function getUserDecrypt() {
      var e = sessionStorage.getItem("token");
      var s = e.split("."); //var str = Buffer.from(s[1], 'base64').toString();

      var str = atob(s[1]);
      this.Token = JSON.parse(str); // console.info(this.Token)

      this.Usuario = this.Token.Usuario;
      return JSON.parse(str);
    } //ObenterAplicacion 

  }, {
    key: "obenterAplicacion",
    value: function obenterAplicacion() {
      var _this2 = this;

      var Aplicacion = this.Token.Usuario.Aplicacion;
      Aplicacion.forEach(function (e) {
        if (e.id == _this2.Id) {
          _this2.Aplicacion = e;
        }
      });
      return this.Aplicacion;
    }
  }, {
    key: "obtenerMenu",
    value: function obtenerMenu() {
      var i = 0;
      return this.Aplicacion.Rol.Menu.map(function (e) {
        e.id = e.url;
        e.type = e.clase;
        e.title = e.descripcion;

        if (e.SubMenu != undefined) {
          e.children = e.SubMenu.map(function (el) {
            el.id = el.url.replace('/', '-');
            el.title = el.descripcion;
            el.type = el.clase;
            el.url = el.url;
            return el;
          });
          e.url = '';
        }

        return e;
      }); // return this.Aplicacion.Rol.Menu
    }
  }, {
    key: "obtenerSubMenu",
    value: function obtenerSubMenu(idUrl) {
      var App = this.Aplicacion;
      var SubMenu = [];
      App.Rol.Menu.forEach(function (e) {
        if (e.url == idUrl) SubMenu = e.SubMenu;
      });
      return SubMenu;
    }
  }]);

  return LoginService;
}();

LoginService.ɵfac = function LoginService_Factory(t) {
  return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient));
};

LoginService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
  token: LoginService,
  factory: LoginService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 63305:
/*!***************************************************!*\
  !*** ./src/@core/services/translation.service.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreTranslationService": function() { return /* binding */ CoreTranslationService; }
/* harmony export */ });
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 33935);




var CoreTranslationService = /*#__PURE__*/function () {
  /**
   * Constructor
   *
   * @param {TranslateService} _translateService
   */
  function CoreTranslationService(_translateService) {
    (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CoreTranslationService);

    this._translateService = _translateService;
  } // Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Translate
   *
   * @param {Locale} args
   */


  (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(CoreTranslationService, [{
    key: "translate",
    value: function translate() {
      var _this = this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var locales = [].concat(args);
      locales.forEach(function (locale) {
        // use setTranslation() with the third argument value as true to append translations instead of replacing them
        _this._translateService.setTranslation(locale.lang, locale.data, true);
      });
    }
  }]);

  return CoreTranslationService;
}();

CoreTranslationService.ɵfac = function CoreTranslationService_Factory(t) {
  return new (t || CoreTranslationService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateService));
};

CoreTranslationService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: CoreTranslationService,
  factory: CoreTranslationService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 45529:
/*!*******************************!*\
  !*** ./src/app/app-config.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "coreConfig": function() { return /* binding */ coreConfig; }
/* harmony export */ });
/**
 * Default App Config
 *
 * ? TIP:
 *
 * Change app config based on your preferences.
 * You can also change them on each component basis. i.e `app/main/pages/authentication/auth-login-v1/auth-login-v1.component.ts`
 *
 * ! IMPORTANT: If the enableLocalStorage option is true then make sure you clear the browser local storage(https://developers.google.com/web/tools/chrome-devtools/storage/localstorage#delete).
 *  ! Otherwise, it will not take the below config changes and use stored config from local storage.
 *
 */
// prettier-ignore
var coreConfig = {
  app: {
    appName: 'FONA',
    appTitle: 'FONA - Fondo Nacional Antidrogas',
    appLogoImage: 'assets/images/logo/logo.png',
    appLanguage: 'en' // App Default Language (en, fr, de, pt etc..)

  },
  layout: {
    skin: 'default',
    type: 'vertical',
    animation: 'fadeIn',
    menu: {
      hidden: false,
      collapsed: false // Boolean: true, false

    },
    // ? For horizontal menu, navbar type will work for navMenu type
    navbar: {
      hidden: false,
      type: 'floating-nav',
      background: 'navbar-light',
      customBackgroundColor: true,
      backgroundColor: '' // BS color i.e bg-primary, bg-success

    },
    footer: {
      hidden: false,
      type: 'footer-static',
      background: 'footer-light',
      customBackgroundColor: false,
      backgroundColor: '' // BS color i.e bg-primary, bg-success

    },
    enableLocalStorage: true,
    customizer: true,
    scrollTop: true,
    buyNow: false // Boolean: true, false (Set false in real project, For demo purpose only)

  }
};

/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 85921);
/* harmony import */ var node_waves__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! node-waves */ 38224);
/* harmony import */ var node_waves__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(node_waves__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var app_menu_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/menu/menu */ 70318);
/* harmony import */ var app_menu_i18n_en__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/menu/i18n/en */ 43831);
/* harmony import */ var app_menu_i18n_fr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/menu/i18n/fr */ 813);
/* harmony import */ var app_menu_i18n_de__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/menu/i18n/de */ 15132);
/* harmony import */ var app_menu_i18n_pt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/menu/i18n/pt */ 59595);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/services/config.service */ 52553);
/* harmony import */ var _core_components_core_sidebar_core_sidebar_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @core/components/core-sidebar/core-sidebar.service */ 66841);
/* harmony import */ var _core_services_loading_screen_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @core/services/loading-screen.service */ 35428);
/* harmony import */ var _core_components_core_menu_core_menu_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @core/components/core-menu/core-menu.service */ 54278);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @core/services/translation.service */ 63305);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @core/directives/core-feather-icons/core-feather-icons */ 66279);
/* harmony import */ var _core_components_core_sidebar_core_sidebar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @core/components/core-sidebar/core-sidebar.component */ 9831);
/* harmony import */ var _core_components_theme_customizer_theme_customizer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @core/components/theme-customizer/theme-customizer.component */ 68347);
/* harmony import */ var app_layout_vertical_vertical_layout_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! app/layout/vertical/vertical-layout.component */ 80836);
/* harmony import */ var app_layout_horizontal_horizontal_layout_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! app/layout/horizontal/horizontal-layout.component */ 54487);


























function AppComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "vertical-layout");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
  }
}

function AppComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "horizontal-layout");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
  }
}

function AppComponent_core_sidebar_2_Template(rf, ctx) {
  if (rf & 1) {
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "core-sidebar", 2)(1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AppComponent_core_sidebar_2_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r4);
      var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r3.toggleSidebar("themeCustomizer"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](3, "core-theme-customizer");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("invisibleOverlay", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵclassMap"]("spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("data-feather", "settings");
  }
}

var AppComponent = /*#__PURE__*/function () {
  /**
   * Constructor
   *
   * @param {DOCUMENT} document
   * @param {Title} _title
   * @param {Renderer2} _renderer
   * @param {ElementRef} _elementRef
   * @param {CoreConfigService} _coreConfigService
   * @param {CoreSidebarService} _coreSidebarService
   * @param {CoreLoadingScreenService} _coreLoadingScreenService
   * @param {CoreMenuService} _coreMenuService
   * @param {CoreTranslationService} _coreTranslationService
   * @param {TranslateService} _translateService
   */
  function AppComponent(document, _title, _renderer, _elementRef, _coreConfigService, _coreSidebarService, _coreLoadingScreenService, _coreMenuService, _coreTranslationService, _translateService) {
    (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AppComponent);

    this.document = document;
    this._title = _title;
    this._renderer = _renderer;
    this._elementRef = _elementRef;
    this._coreConfigService = _coreConfigService;
    this._coreSidebarService = _coreSidebarService;
    this._coreLoadingScreenService = _coreLoadingScreenService;
    this._coreMenuService = _coreMenuService;
    this._coreTranslationService = _coreTranslationService;
    this._translateService = _translateService; // Get the application main menu

    this.menu = app_menu_menu__WEBPACK_IMPORTED_MODULE_3__.menu; // Register the menu to the menu service

    this._coreMenuService.register('main', this.menu); // Set the main menu as our current menu


    this._coreMenuService.setCurrentMenu('main'); // Add languages to the translation service


    this._translateService.addLangs(['en', 'fr', 'de', 'pt']); // This language will be used as a fallback when a translation isn't found in the current language


    this._translateService.setDefaultLang('en'); // Set the translations for the menu


    this._coreTranslationService.translate(app_menu_i18n_en__WEBPACK_IMPORTED_MODULE_4__.locale, app_menu_i18n_fr__WEBPACK_IMPORTED_MODULE_5__.locale, app_menu_i18n_de__WEBPACK_IMPORTED_MODULE_6__.locale, app_menu_i18n_pt__WEBPACK_IMPORTED_MODULE_7__.locale); // Set the private defaults


    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_19__.Subject();
  } // Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */


  (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AppComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      // Init wave effect (Ripple effect)
      node_waves__WEBPACK_IMPORTED_MODULE_2__.init(); // Subscribe to config changes

      this._coreConfigService.config.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.takeUntil)(this._unsubscribeAll)).subscribe(function (config) {
        _this.coreConfig = config; // Set application default language.
        // Change application language? Read the ngxTranslate Fix
        // ? Use app-config.ts file to set default language

        var appLanguage = _this.coreConfig.app.appLanguage || 'en';

        _this._translateService.use(appLanguage); // ? OR
        // ? User the current browser lang if available, if undefined use 'en'
        // const browserLang = this._translateService.getBrowserLang();
        // this._translateService.use(browserLang.match(/en|fr|de|pt/) ? browserLang : 'en');

        /**
         * ! Fix : ngxTranslate
         * ----------------------------------------------------------------------------------------------------
         */

        /**
         *
         * Using different language than the default ('en') one i.e French?
         * In this case, you may find the issue where application is not properly translated when your app is initialized.
         *
         * It's due to ngxTranslate module and below is a fix for that.
         * Eventually we will move to the multi language implementation over to the Angular's core language service.
         *
         **/
        // Set the default language to 'en' and then back to 'fr'.


        setTimeout(function () {
          _this._translateService.setDefaultLang('en');

          _this._translateService.setDefaultLang(appLanguage);
        });
        /**
         * !Fix: ngxTranslate
         * ----------------------------------------------------------------------------------------------------
         */
        // Layout
        //--------
        // Remove default classes first

        _this._elementRef.nativeElement.classList.remove('vertical-layout', 'vertical-menu-modern', 'horizontal-layout', 'horizontal-menu'); // Add class based on config options


        if (_this.coreConfig.layout.type === 'vertical') {
          _this._elementRef.nativeElement.classList.add('vertical-layout', 'vertical-menu-modern');
        } else if (_this.coreConfig.layout.type === 'horizontal') {
          _this._elementRef.nativeElement.classList.add('horizontal-layout', 'horizontal-menu');
        } // Navbar
        //--------
        // Remove default classes first


        _this._elementRef.nativeElement.classList.remove('navbar-floating', 'navbar-static', 'navbar-sticky', 'navbar-hidden'); // Add class based on config options


        if (_this.coreConfig.layout.navbar.type === 'navbar-static-top') {
          _this._elementRef.nativeElement.classList.add('navbar-static');
        } else if (_this.coreConfig.layout.navbar.type === 'fixed-top') {
          _this._elementRef.nativeElement.classList.add('navbar-sticky');
        } else if (_this.coreConfig.layout.navbar.type === 'floating-nav') {
          _this._elementRef.nativeElement.classList.add('navbar-floating');
        } else {
          _this._elementRef.nativeElement.classList.add('navbar-hidden');
        } // Footer
        //--------
        // Remove default classes first


        _this._elementRef.nativeElement.classList.remove('footer-fixed', 'footer-static', 'footer-hidden'); // Add class based on config options


        if (_this.coreConfig.layout.footer.type === 'footer-sticky') {
          _this._elementRef.nativeElement.classList.add('footer-fixed');
        } else if (_this.coreConfig.layout.footer.type === 'footer-static') {
          _this._elementRef.nativeElement.classList.add('footer-static');
        } else {
          _this._elementRef.nativeElement.classList.add('footer-hidden');
        } // Blank layout


        if (_this.coreConfig.layout.menu.hidden && _this.coreConfig.layout.navbar.hidden && _this.coreConfig.layout.footer.hidden) {
          _this._elementRef.nativeElement.classList.add('blank-page'); // ! Fix: Transition issue while coming from blank page


          _this._renderer.setAttribute(_this._elementRef.nativeElement.getElementsByClassName('app-content')[0], 'style', 'transition:none');
        } else {
          _this._elementRef.nativeElement.classList.remove('blank-page'); // ! Fix: Transition issue while coming from blank page


          setTimeout(function () {
            _this._renderer.setAttribute(_this._elementRef.nativeElement.getElementsByClassName('app-content')[0], 'style', 'transition:300ms ease all');
          }, 0); // If navbar hidden

          if (_this.coreConfig.layout.navbar.hidden) {
            _this._elementRef.nativeElement.classList.add('navbar-hidden');
          } // Menu (Vertical menu hidden)


          if (_this.coreConfig.layout.menu.hidden) {
            _this._renderer.setAttribute(_this._elementRef.nativeElement, 'data-col', '1-column');
          } else {
            _this._renderer.removeAttribute(_this._elementRef.nativeElement, 'data-col');
          } // Footer


          if (_this.coreConfig.layout.footer.hidden) {
            _this._elementRef.nativeElement.classList.add('footer-hidden');
          }
        } // Skin Class (Adding to body as it requires highest priority)


        if (_this.coreConfig.layout.skin !== '' && _this.coreConfig.layout.skin !== undefined) {
          _this.document.body.classList.remove('default-layout', 'bordered-layout', 'dark-layout', 'semi-dark-layout');

          _this.document.body.classList.add(_this.coreConfig.layout.skin + '-layout');
        }
      }); // Set the application page title


      this._title.setTitle(this.coreConfig.app.appTitle);
    }
    /**
     * On destroy
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      // Unsubscribe from all subscriptions
      this._unsubscribeAll.next();

      this._unsubscribeAll.complete();
    } // Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle sidebar open
     *
     * @param key
     */

  }, {
    key: "toggleSidebar",
    value: function toggleSidebar(key) {
      this._coreSidebarService.getSidebarRegistry(key).toggleOpen();
    }
  }]);

  return AppComponent;
}();

AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_21__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_18__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_18__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_core_services_config_service__WEBPACK_IMPORTED_MODULE_8__.CoreConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_core_components_core_sidebar_core_sidebar_service__WEBPACK_IMPORTED_MODULE_9__.CoreSidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_core_services_loading_screen_service__WEBPACK_IMPORTED_MODULE_10__.CoreLoadingScreenService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_core_components_core_menu_core_menu_service__WEBPACK_IMPORTED_MODULE_11__.CoreMenuService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_12__.CoreTranslationService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__.TranslateService));
};

AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 3,
  vars: 3,
  consts: [[4, "ngIf"], ["name", "themeCustomizer", "class", "customizer d-none d-md-block", 3, "invisibleOverlay", 4, "ngIf"], ["name", "themeCustomizer", 1, "customizer", "d-none", "d-md-block", 3, "invisibleOverlay"], [1, "customizer-toggle", "d-flex", "align-items-center", "justify-content-center", 3, "click"], [3, "data-feather"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](0, AppComponent_ng_container_0_Template, 2, 0, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, AppComponent_ng_container_1_Template, 2, 0, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](2, AppComponent_core_sidebar_2_Template, 4, 4, "core-sidebar", 1);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.coreConfig.layout.type === "vertical");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.coreConfig.layout.type === "horizontal");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.coreConfig.layout.customizer);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.NgIf, _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_13__.FeatherIconDirective, _core_components_core_sidebar_core_sidebar_component__WEBPACK_IMPORTED_MODULE_14__.CoreSidebarComponent, _core_components_theme_customizer_theme_customizer_component__WEBPACK_IMPORTED_MODULE_15__.CoreThemeCustomizerComponent, app_layout_vertical_vertical_layout_component__WEBPACK_IMPORTED_MODULE_16__.VerticalLayoutComponent, app_layout_horizontal_horizontal_layout_component__WEBPACK_IMPORTED_MODULE_17__.HorizontalLayoutComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"]
});

/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser/animations */ 73598);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ 15977);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../@core/core.module */ 70460);
/* harmony import */ var _core_common_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/common.module */ 75078);
/* harmony import */ var _core_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/components */ 69065);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-select/ng-select */ 88660);
/* harmony import */ var app_app_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/app-config */ 45529);
/* harmony import */ var app_app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/app.component */ 55041);
/* harmony import */ var app_layout_layout_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/layout/layout.module */ 4805);
/* harmony import */ var app_main_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/main/dashboard/dashboard.module */ 95929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _core_services_seguridad_auth_guard_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @core/services/seguridad/auth-guard.guard */ 11342);
/* harmony import */ var _core_services_seguridad_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @core/services/seguridad/auth-interceptor.service */ 18695);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);









 // For auth after login toast

















var appRoutes = [{
  path: '',
  loadChildren: function loadChildren() {
    return __webpack_require__.e(/*! import() */ "src_app_main_pages_pages_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./main/pages/pages.module */ 37478)).then(function (m) {
      return m.PagesModule;
    });
  }
}, {
  path: '**',
  redirectTo: '/miscellaneous/error' //Error 404 - Page not found

}];
var AppModule = /*#__PURE__*/(0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function AppModule() {
  (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AppModule);
});

AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};

AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [app_app_component__WEBPACK_IMPORTED_MODULE_7__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
  providers: [{
    provide: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.LocationStrategy, _core_services_seguridad_auth_guard_guard__WEBPACK_IMPORTED_MODULE_10__.AuthGuardGuard, _angular_common__WEBPACK_IMPORTED_MODULE_13__.JsonPipe],
    useClass: _angular_common__WEBPACK_IMPORTED_MODULE_13__.HashLocationStrategy
  }, {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HTTP_INTERCEPTORS,
    useClass: _core_services_seguridad_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_11__.AuthInterceptorService,
    multi: true
  }],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.BrowserModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_16__.NgSelectModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule.forRoot(appRoutes, {
    scrollPositionRestoration: 'enabled',
    relativeLinkResolution: 'legacy'
  }), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslateModule.forRoot(), //NgBootstrap
  _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__.NgbModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_21__.ToastrModule.forRoot(), // Core modules
  _core_core_module__WEBPACK_IMPORTED_MODULE_3__.CoreModule.forRoot(app_app_config__WEBPACK_IMPORTED_MODULE_6__.coreConfig), _core_common_module__WEBPACK_IMPORTED_MODULE_4__.CoreCommonModule, _core_components__WEBPACK_IMPORTED_MODULE_5__.CoreSidebarModule, _core_components__WEBPACK_IMPORTED_MODULE_5__.CoreThemeCustomizerModule, // App modules
  app_layout_layout_module__WEBPACK_IMPORTED_MODULE_8__.LayoutModule, app_main_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_9__.DashboardModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [app_app_component__WEBPACK_IMPORTED_MODULE_7__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.BrowserModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_16__.NgSelectModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslateModule, //NgBootstrap
    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__.NgbModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_21__.ToastrModule, _core_core_module__WEBPACK_IMPORTED_MODULE_3__.CoreModule, _core_common_module__WEBPACK_IMPORTED_MODULE_4__.CoreCommonModule, _core_components__WEBPACK_IMPORTED_MODULE_5__.CoreSidebarModule, _core_components__WEBPACK_IMPORTED_MODULE_5__.CoreThemeCustomizerModule, // App modules
    app_layout_layout_module__WEBPACK_IMPORTED_MODULE_8__.LayoutModule, app_main_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_9__.DashboardModule]
  });
})();

/***/ }),

/***/ 43454:
/*!**************************************!*\
  !*** ./src/app/auth/models/index.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Role": function() { return /* reexport safe */ _role__WEBPACK_IMPORTED_MODULE_0__.Role; },
/* harmony export */   "User": function() { return /* reexport safe */ _user__WEBPACK_IMPORTED_MODULE_1__.User; }
/* harmony export */ });
/* harmony import */ var _role__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./role */ 19644);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ 95236);



/***/ }),

/***/ 19644:
/*!*************************************!*\
  !*** ./src/app/auth/models/role.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Role": function() { return /* binding */ Role; }
/* harmony export */ });
var Role;

(function (Role) {
  Role["Admin"] = "Admin";
  Role["Client"] = "Client";
  Role["User"] = "User";
})(Role || (Role = {}));

/***/ }),

/***/ 95236:
/*!*************************************!*\
  !*** ./src/app/auth/models/user.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "User": function() { return /* binding */ User; }
/* harmony export */ });
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);


var User = /*#__PURE__*/(0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function User() {
  (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, User);
});

/***/ }),

/***/ 65015:
/*!********************************************************!*\
  !*** ./src/app/auth/service/authentication.service.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationService": function() { return /* binding */ AuthenticationService; }
/* harmony export */ });
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var app_auth_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/auth/models */ 43454);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ 34101);









var AuthenticationService = /*#__PURE__*/function () {
  /**
   *
   * @param {HttpClient} _http
   * @param {ToastrService} _toastrService
   */
  function AuthenticationService(_http, _toastrService) {
    (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AuthenticationService);

    this._http = _http;
    this._toastrService = _toastrService;
    this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  } // getter: currentUserValue


  (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AuthenticationService, [{
    key: "currentUserValue",
    get: function get() {
      return this.currentUserSubject.value;
    }
    /**
     *  Confirms if user is admin
     */

  }, {
    key: "isAdmin",
    get: function get() {
      return this.currentUser && this.currentUserSubject.value.role === app_auth_models__WEBPACK_IMPORTED_MODULE_3__.Role.Admin;
    }
    /**
     *  Confirms if user is client
     */

  }, {
    key: "isClient",
    get: function get() {
      return this.currentUser && this.currentUserSubject.value.role === app_auth_models__WEBPACK_IMPORTED_MODULE_3__.Role.Client;
    }
    /**
     * User login
     *
     * @param email
     * @param password
     * @returns user
     */

  }, {
    key: "login",
    value: function login(email, password) {
      var _this = this;

      return this._http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiUrl, "/users/authenticate"), {
        email: email,
        password: password
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(function (user) {
        // login successful if there's a jwt token in the response
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user)); // Display welcome toast!

          setTimeout(function () {
            _this._toastrService.success('You have successfully logged in as an ' + user.role + ' user to Vuexy. Now you can start to explore. Enjoy! 🎉', '👋 Welcome, ' + user.firstName + '!', {
              toastClass: 'toast ngx-toastr',
              closeButton: true
            });
          }, 2500); // notify

          _this.currentUserSubject.next(user);
        }

        return user;
      }));
    }
    /**
     * User logout
     *
     */

  }, {
    key: "logout",
    value: function logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('currentUser'); // notify

      this.currentUserSubject.next(null);
    }
  }]);

  return AuthenticationService;
}();

AuthenticationService.ɵfac = function AuthenticationService_Factory(t) {
  return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__.ToastrService));
};

AuthenticationService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: AuthenticationService,
  factory: AuthenticationService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 81004:
/*!***************************************!*\
  !*** ./src/app/auth/service/index.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationService": function() { return /* reexport safe */ _authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService; },
/* harmony export */   "UserService": function() { return /* reexport safe */ _user_service__WEBPACK_IMPORTED_MODULE_1__.UserService; }
/* harmony export */ });
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication.service */ 65015);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.service */ 47570);



/***/ }),

/***/ 47570:
/*!**********************************************!*\
  !*** ./src/app/auth/service/user.service.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": function() { return /* binding */ UserService; }
/* harmony export */ });
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 28784);





var UserService = /*#__PURE__*/function () {
  /**
   *
   * @param {HttpClient} _http
   */
  function UserService(_http) {
    (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, UserService);

    this._http = _http;
  }
  /**
   * Get all users
   */


  (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(UserService, [{
    key: "getAll",
    value: function getAll() {
      return this._http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiUrl, "/users"));
    }
    /**
     * Get user by id
     */

  }, {
    key: "getById",
    value: function getById(id) {
      return this._http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiUrl, "/users/").concat(id));
    }
  }]);

  return UserService;
}();

UserService.ɵfac = function UserService_Factory(t) {
  return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};

UserService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: UserService,
  factory: UserService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 13282:
/*!*************************************************************************************!*\
  !*** ./src/app/layout/components/content-header/breadcrumb/breadcrumb.component.ts ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BreadcrumbComponent": function() { return /* binding */ BreadcrumbComponent; }
/* harmony export */ });
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);






function BreadcrumbComponent_li_2_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var link_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("routerLink", link_r1.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](link_r1.name);
  }
}

function BreadcrumbComponent_li_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var link_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](link_r1.name);
  }
}

function BreadcrumbComponent_li_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, BreadcrumbComponent_li_2_a_1_Template, 2, 2, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, BreadcrumbComponent_li_2_span_2_Template, 2, 1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var link_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", link_r1.isLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !link_r1.isLink);
  }
}

var _c0 = function _c0(a0, a1) {
  return {
    "justify-content-center": a0,
    "justify-content-end": a1
  };
};

var _c1 = function _c1(a0, a1, a2, a3, a4, a5) {
  return {
    "breadcrumb-slash": a0,
    "breadcrumb-dots": a1,
    "breadcrumb-dashes": a2,
    "breadcrumb-pipes": a3,
    "breadcrumb-chevron": a4,
    "mr-1": a5
  };
};

var BreadcrumbComponent = /*#__PURE__*/function () {
  function BreadcrumbComponent() {
    (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, BreadcrumbComponent);
  } // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */


  (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(BreadcrumbComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      // concatenate default properties with passed properties
      this.breadcrumb = this.breadcrumb;
    }
  }]);

  return BreadcrumbComponent;
}();

BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(t) {
  return new (t || BreadcrumbComponent)();
};

BreadcrumbComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: BreadcrumbComponent,
  selectors: [["app-breadcrumb"]],
  inputs: {
    breadcrumb: "breadcrumb"
  },
  decls: 3,
  vars: 13,
  consts: [[1, "breadcrumb-wrapper", "d-flex", 3, "ngClass"], [1, "breadcrumb", 3, "ngClass"], ["class", "breadcrumb-item", 4, "ngFor", "ngForOf"], [1, "breadcrumb-item"], [3, "routerLink", 4, "ngIf"], [4, "ngIf"], [3, "routerLink"]],
  template: function BreadcrumbComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "ol", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, BreadcrumbComponent_li_2_Template, 3, 2, "li", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](3, _c0, ctx.breadcrumb.alignment == "center", ctx.breadcrumb.alignment == "right"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction6"](6, _c1, ctx.breadcrumb.type == "slash", ctx.breadcrumb.type == "dots", ctx.breadcrumb.type == "dashes", ctx.breadcrumb.type == "pipes", ctx.breadcrumb.type == "chevron", ctx.breadcrumb.alignment == "right"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.breadcrumb.links);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref],
  encapsulation: 2
});

/***/ }),

/***/ 90044:
/*!**********************************************************************************!*\
  !*** ./src/app/layout/components/content-header/breadcrumb/breadcrumb.module.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BreadcrumbModule": function() { return /* binding */ BreadcrumbModule; }
/* harmony export */ });
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var app_layout_components_content_header_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/layout/components/content-header/breadcrumb/breadcrumb.component */ 13282);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);







var BreadcrumbModule = /*#__PURE__*/(0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function BreadcrumbModule() {
  (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, BreadcrumbModule);
});

BreadcrumbModule.ɵfac = function BreadcrumbModule_Factory(t) {
  return new (t || BreadcrumbModule)();
};

BreadcrumbModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: BreadcrumbModule
});
BreadcrumbModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild([])]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](BreadcrumbModule, {
    declarations: [app_layout_components_content_header_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [app_layout_components_content_header_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbComponent]
  });
})();

/***/ }),

/***/ 4810:
/*!******************************************************************************!*\
  !*** ./src/app/layout/components/content-header/content-header.component.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentHeaderComponent": function() { return /* binding */ ContentHeaderComponent; }
/* harmony export */ });
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _core_directives_core_ripple_effect_core_ripple_effect_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/directives/core-ripple-effect/core-ripple-effect.directive */ 75287);
/* harmony import */ var _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/directives/core-feather-icons/core-feather-icons */ 66279);
/* harmony import */ var app_layout_components_content_header_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/layout/components/content-header/breadcrumb/breadcrumb.component */ 13282);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);










var _c0 = function _c0() {
  return ["/"];
};

function ContentHeaderComponent_ng_container_0_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 7)(2, "div", 8)(3, "div", 9)(4, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 12)(7, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, " Todo");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, " Chat");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, " Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, " Calendar");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data-feather", "grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](17, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"]("mr-50");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data-feather", "check-square");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](18, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"]("mr-50");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data-feather", "message-square");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](19, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"]("mr-50");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data-feather", "mail");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](20, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"]("mr-50");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data-feather", "calendar");
  }
}

function ContentHeaderComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h2", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "app-breadcrumb", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, ContentHeaderComponent_ng_container_0_ng_container_8_Template, 19, 21, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.contentHeader.headerTitle, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("breadcrumb", ctx_r0.contentHeader.breadcrumb);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.contentHeader.actionButton);
  }
}

var ContentHeaderComponent = /*#__PURE__*/function () {
  function ContentHeaderComponent() {
    (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ContentHeaderComponent);
  }

  (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ContentHeaderComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);

  return ContentHeaderComponent;
}();

ContentHeaderComponent.ɵfac = function ContentHeaderComponent_Factory(t) {
  return new (t || ContentHeaderComponent)();
};

ContentHeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: ContentHeaderComponent,
  selectors: [["app-content-header"]],
  inputs: {
    contentHeader: "contentHeader"
  },
  decls: 1,
  vars: 1,
  consts: [[4, "ngIf"], [1, "content-header", "row"], [1, "content-header-left", "col-md-9", "col-12", "mb-2"], [1, "row", "breadcrumbs-top"], [1, "col-12", "d-flex"], [1, "content-header-title", "float-left", "mb-0"], [3, "breadcrumb"], [1, "content-header-right", "text-md-right", "col-md-3", "col-12", "d-md-block", "d-none"], [1, "form-group", "breadcrum-right"], ["ngbDropdown", ""], ["ngbDropdownToggle", "", "id", "dropdownSettings", "type", "button", "rippleEffect", "", 1, "btn-icon", "btn", "btn-primary", "btn-round", "btn-sm"], [3, "data-feather"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownSettings"], ["ngbDropdownItem", "", 3, "routerLink"]],
  template: function ContentHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, ContentHeaderComponent_ng_container_0_Template, 9, 3, "ng-container", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.contentHeader);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _core_directives_core_ripple_effect_core_ripple_effect_directive__WEBPACK_IMPORTED_MODULE_2__.RippleEffectDirective, _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_3__.FeatherIconDirective, app_layout_components_content_header_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__.BreadcrumbComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbDropdownMenu, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbDropdownItem],
  encapsulation: 2
});

/***/ }),

/***/ 50619:
/*!***************************************************************************!*\
  !*** ./src/app/layout/components/content-header/content-header.module.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentHeaderModule": function() { return /* binding */ ContentHeaderModule; }
/* harmony export */ });
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var _core_common_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/common.module */ 75078);
/* harmony import */ var app_layout_components_content_header_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/layout/components/content-header/breadcrumb/breadcrumb.module */ 90044);
/* harmony import */ var app_layout_components_content_header_content_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/layout/components/content-header/content-header.component */ 4810);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);









var ContentHeaderModule = /*#__PURE__*/(0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function ContentHeaderModule() {
  (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ContentHeaderModule);
});

ContentHeaderModule.ɵfac = function ContentHeaderModule_Factory(t) {
  return new (t || ContentHeaderModule)();
};

ContentHeaderModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: ContentHeaderModule
});
ContentHeaderModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule, _core_common_module__WEBPACK_IMPORTED_MODULE_2__.CoreCommonModule, app_layout_components_content_header_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ContentHeaderModule, {
    declarations: [app_layout_components_content_header_content_header_component__WEBPACK_IMPORTED_MODULE_4__.ContentHeaderComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule, _core_common_module__WEBPACK_IMPORTED_MODULE_2__.CoreCommonModule, app_layout_components_content_header_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModule],
    exports: [app_layout_components_content_header_content_header_component__WEBPACK_IMPORTED_MODULE_4__.ContentHeaderComponent]
  });
})();

/***/ }),

/***/ 24714:
/*!****************************************************************!*\
  !*** ./src/app/layout/components/content/content.component.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentComponent": function() { return /* binding */ ContentComponent; }
/* harmony export */ });
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _core_animations_core_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/animations/core.animation */ 24597);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 85921);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/config.service */ 52553);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);








var ContentComponent = /*#__PURE__*/function () {
  /**
   * Constructor
   *
   * @param {CoreConfigService} _coreConfigService
   *
   */
  function ContentComponent(_coreConfigService) {
    (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ContentComponent);

    this._coreConfigService = _coreConfigService; // Set the private defaults

    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
  }
  /**
   * Fade In Left Animation
   *
   * @param outlet
   */


  (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ContentComponent, [{
    key: "fadeInLeft",
    value: function fadeInLeft(outlet) {
      if (this.animate === 'fadeInLeft') {
        return outlet.activatedRouteData.animation;
      }

      return null;
    }
    /**
     * Zoom In Animation
     *
     * @param outlet
     */

  }, {
    key: "zoomIn",
    value: function zoomIn(outlet) {
      if (this.animate === 'zoomIn') {
        return outlet.activatedRouteData.animation;
      }

      return null;
    }
    /**
     * Fade In Animation
     *
     * @param outlet
     */

  }, {
    key: "fadeIn",
    value: function fadeIn(outlet) {
      if (this.animate === 'fadeIn') {
        return outlet.activatedRouteData.animation;
      }

      return null;
    } // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On Init
     */

  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      // Subscribe config change
      this._coreConfigService.config.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._unsubscribeAll)).subscribe(function (config) {
        _this.coreConfig = config;
        _this.animate = _this.coreConfig.layout.animation;
      });
    }
  }]);

  return ContentComponent;
}();

ContentComponent.ɵfac = function ContentComponent_Factory(t) {
  return new (t || ContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_services_config_service__WEBPACK_IMPORTED_MODULE_3__.CoreConfigService));
};

ContentComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: ContentComponent,
  selectors: [["content"]],
  decls: 3,
  vars: 3,
  consts: [["outlet", "outlet"]],
  template: function ContentComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "router-outlet", null, 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](2);

      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("@zoomIn", ctx.zoomIn(_r0))("@fadeInLeft", ctx.fadeInLeft(_r0))("@fadeIn", ctx.fadeIn(_r0));
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterOutlet],
  encapsulation: 2,
  data: {
    animation: [_core_animations_core_animation__WEBPACK_IMPORTED_MODULE_2__.fadeInLeft, _core_animations_core_animation__WEBPACK_IMPORTED_MODULE_2__.zoomIn, _core_animations_core_animation__WEBPACK_IMPORTED_MODULE_2__.fadeIn]
  }
});

/***/ }),

/***/ 92181:
/*!*************************************************************!*\
  !*** ./src/app/layout/components/content/content.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentModule": function() { return /* binding */ ContentModule; }
/* harmony export */ });
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _core_common_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/common.module */ 75078);
/* harmony import */ var app_layout_components_content_content_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/layout/components/content/content.component */ 24714);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);






var ContentModule = /*#__PURE__*/(0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function ContentModule() {
  (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ContentModule);
});

ContentModule.ɵfac = function ContentModule_Factory(t) {
  return new (t || ContentModule)();
};

ContentModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: ContentModule
});
ContentModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _core_common_module__WEBPACK_IMPORTED_MODULE_2__.CoreCommonModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ContentModule, {
    declarations: [app_layout_components_content_content_component__WEBPACK_IMPORTED_MODULE_3__.ContentComponent],
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _core_common_module__WEBPACK_IMPORTED_MODULE_2__.CoreCommonModule],
    exports: [app_layout_components_content_content_component__WEBPACK_IMPORTED_MODULE_3__.ContentComponent]
  });
})();

/***/ }),

/***/ 92223:
/*!**************************************************************!*\
  !*** ./src/app/layout/components/footer/footer.component.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": function() { return /* binding */ FooterComponent; }
/* harmony export */ });
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 85921);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/config.service */ 52553);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var app_layout_components_footer_scroll_to_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/layout/components/footer/scroll-to-top/scroll-top.component */ 12394);









function FooterComponent_app_scroll_top_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-scroll-top");
  }
}

function FooterComponent_a_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Renovar Licencia");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

var FooterComponent = /*#__PURE__*/function () {
  /**
   * Constructor
   *
   * @param {CoreConfigService} _coreConfigService
   */
  function FooterComponent(_coreConfigService) {
    (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FooterComponent);

    this._coreConfigService = _coreConfigService;
    this.year = new Date().getFullYear(); // Set the private defaults

    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
  } // Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */


  (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(FooterComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      // Subscribe to config changes
      this._coreConfigService.config.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._unsubscribeAll)).subscribe(function (config) {
        _this.coreConfig = config;
      });
    }
    /**
     * On destroy
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      // Unsubscribe from all subscriptions
      this._unsubscribeAll.next();

      this._unsubscribeAll.complete();
    }
  }]);

  return FooterComponent;
}();

FooterComponent.ɵfac = function FooterComponent_Factory(t) {
  return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_config_service__WEBPACK_IMPORTED_MODULE_2__.CoreConfigService));
};

FooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: FooterComponent,
  selectors: [["footer"]],
  decls: 12,
  vars: 3,
  consts: [[1, "clearfix", "mb-0"], [1, "float-md-left", "d-block", "d-md-inline-block", "mt-25"], ["href", "http://www.fona.gob.ve/", "target", "_blank", "title", "Cap. Andr\xE9s Rodr\xEDguez Dur\xE1n", 1, "ml-25"], [1, "d-none", "d-sm-inline-block"], [1, "float-md-right", "d-none", "d-md-block"], [4, "ngIf"], [1, "buy-now"], ["href", "https://instagram.com/elpoloxrodriguez", "target", "_blank", "class", "btn btn-danger", 4, "ngIf"], ["href", "https://instagram.com/elpoloxrodriguez", "target", "_blank", 1, "btn", "btn-danger"]],
  template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 0)(1, "span", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Fondo Nacional Antidrogas");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, ", All rights Reserved");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " Desarrollado por: Grupo Inversiones MD, c.a ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, FooterComponent_app_scroll_top_9_Template, 1, 0, "app-scroll-top", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, FooterComponent_a_11_Template, 2, 0, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" COPYRIGHT \xA9 ", ctx.year, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.coreConfig.layout.scrollTop);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.coreConfig.layout.buyNow);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, app_layout_components_footer_scroll_to_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_3__.ScrollTopComponent],
  encapsulation: 2
});

/***/ }),

/***/ 73030:
/*!***********************************************************!*\
  !*** ./src/app/layout/components/footer/footer.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterModule": function() { return /* binding */ FooterModule; }
/* harmony export */ });
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _core_common_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/common.module */ 75078);
/* harmony import */ var app_layout_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/layout/components/footer/footer.component */ 92223);
/* harmony import */ var app_layout_components_footer_scroll_to_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/layout/components/footer/scroll-to-top/scroll-top.component */ 12394);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);







var FooterModule = /*#__PURE__*/(0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function FooterModule() {
  (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, FooterModule);
});

FooterModule.ɵfac = function FooterModule_Factory(t) {
  return new (t || FooterModule)();
};

FooterModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: FooterModule
});
FooterModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _core_common_module__WEBPACK_IMPORTED_MODULE_2__.CoreCommonModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](FooterModule, {
    declarations: [app_layout_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent, app_layout_components_footer_scroll_to_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_4__.ScrollTopComponent],
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _core_common_module__WEBPACK_IMPORTED_MODULE_2__.CoreCommonModule],
    exports: [app_layout_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent]
  });
})();

/***/ }),

/***/ 12394:
/*!********************************************************************************!*\
  !*** ./src/app/layout/components/footer/scroll-to-top/scroll-top.component.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScrollTopComponent": function() { return /* binding */ ScrollTopComponent; }
/* harmony export */ });
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/extended */ 1570);
/* harmony import */ var _core_directives_core_ripple_effect_core_ripple_effect_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/directives/core-ripple-effect/core-ripple-effect.directive */ 75287);
/* harmony import */ var _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/directives/core-feather-icons/core-feather-icons */ 66279);









var _c0 = function _c0(a0) {
  return {
    "show-scroll-to-top": a0
  };
};

var ScrollTopComponent = /*#__PURE__*/function () {
  function ScrollTopComponent(document) {
    (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ScrollTopComponent);

    this.document = document;
    this.topOffset = 150; // Top offset to display scroll to top button
  }

  (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ScrollTopComponent, [{
    key: "onWindowScroll",
    value: function onWindowScroll() {
      if (window.pageYOffset > this.topOffset || document.documentElement.scrollTop > this.topOffset || document.body.scrollTop > this.topOffset) {
        this.windowScrolled = true;
      } else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
        this.windowScrolled = false;
      }
    }
  }, {
    key: "scrollToTop",
    value: function scrollToTop() {
      (function smoothscroll() {
        var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

        if (currentScroll > 0) {
          window.requestAnimationFrame(smoothscroll);
          window.scrollTo(0, currentScroll - currentScroll / 8);
        }
      })();
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);

  return ScrollTopComponent;
}();

ScrollTopComponent.ɵfac = function ScrollTopComponent_Factory(t) {
  return new (t || ScrollTopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT));
};

ScrollTopComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: ScrollTopComponent,
  selectors: [["app-scroll-top"]],
  hostBindings: function ScrollTopComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("scroll", function ScrollTopComponent_scroll_HostBindingHandler() {
        return ctx.onWindowScroll();
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresolveWindow"]);
    }
  },
  decls: 2,
  vars: 4,
  consts: [["type", "button", "rippleEffect", "", 1, "btn", "btn-primary", "btn-icon", "scroll-to-top", 3, "ngClass", "click"], [3, "data-feather"]],
  template: function ScrollTopComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ScrollTopComponent_Template_button_click_0_listener() {
        return ctx.scrollToTop();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "span", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](2, _c0, ctx.windowScrolled));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data-feather", "arrow-up");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__.DefaultClassDirective, _core_directives_core_ripple_effect_core_ripple_effect_directive__WEBPACK_IMPORTED_MODULE_2__.RippleEffectDirective, _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_3__.FeatherIconDirective],
  styles: [".scroll-to-top[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 5%;\n  right: 30px;\n  z-index: 99;\n  display: none;\n  transition: all 0.2s ease-in-out;\n}\n\n.show-scroll-to-top[_ngcontent-%COMP%] {\n  opacity: 1;\n  display: block;\n  transition: all 0.2s ease-in-out;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcm9sbC10b3AuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGdDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0FBQ0YiLCJmaWxlIjoic2Nyb2xsLXRvcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY3JvbGwtdG8tdG9wIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDUlO1xuICByaWdodDogMzBweDtcbiAgei1pbmRleDogOTk7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG4uc2hvdy1zY3JvbGwtdG8tdG9wIHtcbiAgb3BhY2l0eTogMTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuIl19 */"]
});

/***/ }),

/***/ 71778:
/*!*************************************************************************************!*\
  !*** ./src/app/layout/components/menu/horizontal-menu/horizontal-menu.component.ts ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HorizontalMenuComponent": function() { return /* binding */ HorizontalMenuComponent; }
/* harmony export */ });
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 85921);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 59151);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/config.service */ 52553);
/* harmony import */ var _core_components_core_menu_core_menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/components/core-menu/core-menu.service */ 54278);
/* harmony import */ var _core_components_core_sidebar_core_sidebar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/components/core-sidebar/core-sidebar.service */ 66841);
/* harmony import */ var _core_components_core_menu_core_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/components/core-menu/core-menu.component */ 34505);









var HorizontalMenuComponent = /*#__PURE__*/function () {
  /**
   * Constructor
   *
   * @param {CoreConfigService} _coreConfigService
   * @param {CoreMenuService} _coreMenuService
   * @param {CoreSidebarService} _coreSidebarService
   */
  function HorizontalMenuComponent(_coreConfigService, _coreMenuService, _coreSidebarService) {
    (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HorizontalMenuComponent);

    this._coreConfigService = _coreConfigService;
    this._coreMenuService = _coreMenuService;
    this._coreSidebarService = _coreSidebarService; // Set the private defaults

    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
  } // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On Init
   */


  (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(HorizontalMenuComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      // Subscribe config change
      this._coreConfigService.config.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._unsubscribeAll)).subscribe(function (config) {
        _this.coreConfig = config;
      }); // Get current menu


      this._coreMenuService.onMenuChanged.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(function (value) {
        return value !== null;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._unsubscribeAll)).subscribe(function () {
        _this.menu = _this._coreMenuService.getCurrentMenu();
      });
    }
    /**
     * On Destroy
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      // Unsubscribe from all subscriptions
      this._unsubscribeAll.next();

      this._unsubscribeAll.complete();
    }
  }]);

  return HorizontalMenuComponent;
}();

HorizontalMenuComponent.ɵfac = function HorizontalMenuComponent_Factory(t) {
  return new (t || HorizontalMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_services_config_service__WEBPACK_IMPORTED_MODULE_2__.CoreConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_components_core_menu_core_menu_service__WEBPACK_IMPORTED_MODULE_3__.CoreMenuService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_components_core_sidebar_core_sidebar_service__WEBPACK_IMPORTED_MODULE_4__.CoreSidebarService));
};

HorizontalMenuComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: HorizontalMenuComponent,
  selectors: [["horizontal-menu"]],
  decls: 2,
  vars: 0,
  consts: [[1, "navbar-container", "main-menu-content"], ["id", "main-menu-navigation", "layout", "horizontal", "core-menu", "", 1, "nav", "navbar-nav"]],
  template: function HorizontalMenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "ul", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    }
  },
  dependencies: [_core_components_core_menu_core_menu_component__WEBPACK_IMPORTED_MODULE_5__.CoreMenuComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob3Jpem9udGFsLW1lbnUuY29tcG9uZW50LnNjc3MifQ== */"],
  encapsulation: 2
});

/***/ }),

/***/ 18029:
/*!**********************************************************************************!*\
  !*** ./src/app/layout/components/menu/horizontal-menu/horizontal-menu.module.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HorizontalMenuModule": function() { return /* binding */ HorizontalMenuModule; }
/* harmony export */ });
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _core_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components */ 69065);
/* harmony import */ var _core_common_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/common.module */ 75078);
/* harmony import */ var app_layout_components_menu_horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/layout/components/menu/horizontal-menu/horizontal-menu.component */ 71778);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);






var HorizontalMenuModule = /*#__PURE__*/(0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function HorizontalMenuModule() {
  (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HorizontalMenuModule);
});

HorizontalMenuModule.ɵfac = function HorizontalMenuModule_Factory(t) {
  return new (t || HorizontalMenuModule)();
};

HorizontalMenuModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: HorizontalMenuModule
});
HorizontalMenuModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [_core_components__WEBPACK_IMPORTED_MODULE_2__.CoreMenuModule, _core_common_module__WEBPACK_IMPORTED_MODULE_3__.CoreCommonModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](HorizontalMenuModule, {
    declarations: [app_layout_components_menu_horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_4__.HorizontalMenuComponent],
    imports: [_core_components__WEBPACK_IMPORTED_MODULE_2__.CoreMenuModule, _core_common_module__WEBPACK_IMPORTED_MODULE_3__.CoreCommonModule],
    exports: [app_layout_components_menu_horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_4__.HorizontalMenuComponent]
  });
})();

/***/ }),

/***/ 92393:
/*!**********************************************************!*\
  !*** ./src/app/layout/components/menu/menu.component.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuComponent": function() { return /* binding */ MenuComponent; }
/* harmony export */ });
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var app_layout_components_menu_vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/layout/components/menu/vertical-menu/vertical-menu.component */ 72951);
/* harmony import */ var app_layout_components_menu_horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/layout/components/menu/horizontal-menu/horizontal-menu.component */ 71778);







function MenuComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "vertical-menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
}

function MenuComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "horizontal-menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
}

var MenuComponent = /*#__PURE__*/function () {
  /**
   * Constructor
   *
   * @param {ElementRef} _elementRef
   * @param {Renderer2} _renderer
   */
  function MenuComponent(_elementRef, _renderer) {
    (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MenuComponent);

    this._elementRef = _elementRef;
    this._renderer = _renderer; // Set the default menu

    this._menuType = 'vertical-menu';
  } // Accessors
  // -----------------------------------------------------------------------------------------------------
  //Get the menu type


  (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(MenuComponent, [{
    key: "menuType",
    get: function get() {
      return this._menuType;
    },
    set: function set(value) {
      // Remove the old class name from native element
      this._renderer.removeClass(this._elementRef.nativeElement, this.menuType); // Store the menuType value


      this._menuType = value; // Add the new class name from native element

      this._renderer.addClass(this._elementRef.nativeElement, value);
    }
  }]);

  return MenuComponent;
}();

MenuComponent.ɵfac = function MenuComponent_Factory(t) {
  return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.Renderer2));
};

MenuComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: MenuComponent,
  selectors: [["app-menu"]],
  inputs: {
    menuType: "menuType"
  },
  decls: 2,
  vars: 2,
  consts: [[4, "ngIf"]],
  template: function MenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, MenuComponent_ng_container_0_Template, 2, 0, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, MenuComponent_ng_container_1_Template, 2, 0, "ng-container", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.menuType === "vertical-menu");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.menuType === "horizontal-menu");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, app_layout_components_menu_vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_2__.VerticalMenuComponent, app_layout_components_menu_horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_3__.HorizontalMenuComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZW51LmNvbXBvbmVudC5zY3NzIn0= */"],
  encapsulation: 2
});

/***/ }),

/***/ 79287:
/*!*******************************************************!*\
  !*** ./src/app/layout/components/menu/menu.module.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuModule": function() { return /* binding */ MenuModule; }
/* harmony export */ });
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _core_common_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/common.module */ 75078);
/* harmony import */ var app_layout_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/layout/components/menu/menu.component */ 92393);
/* harmony import */ var app_layout_components_menu_vertical_menu_vertical_menu_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/layout/components/menu/vertical-menu/vertical-menu.module */ 71307);
/* harmony import */ var app_layout_components_menu_horizontal_menu_horizontal_menu_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/layout/components/menu/horizontal-menu/horizontal-menu.module */ 18029);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);







var MenuModule = /*#__PURE__*/(0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function MenuModule() {
  (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MenuModule);
});

MenuModule.ɵfac = function MenuModule_Factory(t) {
  return new (t || MenuModule)();
};

MenuModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: MenuModule
});
MenuModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [_core_common_module__WEBPACK_IMPORTED_MODULE_2__.CoreCommonModule, app_layout_components_menu_vertical_menu_vertical_menu_module__WEBPACK_IMPORTED_MODULE_4__.VerticalMenuModule, app_layout_components_menu_horizontal_menu_horizontal_menu_module__WEBPACK_IMPORTED_MODULE_5__.HorizontalMenuModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](MenuModule, {
    declarations: [app_layout_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_3__.MenuComponent],
    imports: [_core_common_module__WEBPACK_IMPORTED_MODULE_2__.CoreCommonModule, app_layout_components_menu_vertical_menu_vertical_menu_module__WEBPACK_IMPORTED_MODULE_4__.VerticalMenuModule, app_layout_components_menu_horizontal_menu_horizontal_menu_module__WEBPACK_IMPORTED_MODULE_5__.HorizontalMenuModule],
    exports: [app_layout_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_3__.MenuComponent]
  });
})();

/***/ }),

/***/ 72951:
/*!*********************************************************************************!*\
  !*** ./src/app/layout/components/menu/vertical-menu/vertical-menu.component.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerticalMenuComponent": function() { return /* binding */ VerticalMenuComponent; }
/* harmony export */ });
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 85921);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 59151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 83910);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 15375);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/config.service */ 52553);
/* harmony import */ var _core_components_core_menu_core_menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/components/core-menu/core-menu.service */ 54278);
/* harmony import */ var _core_components_core_sidebar_core_sidebar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/components/core-sidebar/core-sidebar.service */ 66841);
/* harmony import */ var _core_components_core_menu_core_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/components/core-menu/core-menu.component */ 34505);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/flex-layout/extended */ 1570);
/* harmony import */ var _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/directives/core-feather-icons/core-feather-icons */ 66279);

















var _c0 = function _c0() {
  return ["/"];
};

var _c1 = function _c1(a0) {
  return {
    "d-block": a0
  };
};

var VerticalMenuComponent = /*#__PURE__*/function () {
  /**
   * Constructor
   *
   * @param {CoreConfigService} _coreConfigService
   * @param {CoreMenuService} _coreMenuService
   * @param {CoreSidebarService} _coreSidebarService
   * @param {Router} _router
   */
  function VerticalMenuComponent(_coreConfigService, _coreMenuService, _coreSidebarService, _router) {
    (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, VerticalMenuComponent);

    this._coreConfigService = _coreConfigService;
    this._coreMenuService = _coreMenuService;
    this._coreSidebarService = _coreSidebarService;
    this._router = _router;
    this.isScrolled = false; // Set the private defaults

    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
  } // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On Init
   */


  (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(VerticalMenuComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      // Subscribe config change
      this._coreConfigService.config.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._unsubscribeAll)).subscribe(function (config) {
        _this.coreConfig = config;
      });

      this.isCollapsed = this._coreSidebarService.getSidebarRegistry('menu').collapsed; // Close the menu on router NavigationEnd (Required for small screen to close the menu on select)

      this._router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.filter)(function (event) {
        return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_10__.NavigationEnd;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._unsubscribeAll)).subscribe(function () {
        if (_this._coreSidebarService.getSidebarRegistry('menu')) {
          _this._coreSidebarService.getSidebarRegistry('menu').close();
        }
      }); // scroll to active on navigation end


      this._router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.filter)(function (event) {
        return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_10__.NavigationEnd;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1)).subscribe(function () {
        setTimeout(function () {
          _this.directiveRef.scrollToElement('.navigation .active', -180, 500);
        });
      }); // Get current menu


      this._coreMenuService.onMenuChanged.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.filter)(function (value) {
        return value !== null;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._unsubscribeAll)).subscribe(function () {
        _this.menu = _this._coreMenuService.getCurrentMenu();
      });
    }
    /**
     * On Destroy
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      // Unsubscribe from all subscriptions
      this._unsubscribeAll.next();

      this._unsubscribeAll.complete();
    } // Public Methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * On Sidebar scroll set isScrolled as true
     */

  }, {
    key: "onSidebarScroll",
    value: function onSidebarScroll() {
      if (this.directiveRef.position(true).y > 3) {
        this.isScrolled = true;
      } else {
        this.isScrolled = false;
      }
    }
    /**
     * Toggle sidebar expanded status
     */

  }, {
    key: "toggleSidebar",
    value: function toggleSidebar() {
      this._coreSidebarService.getSidebarRegistry('menu').toggleOpen();
    }
    /**
     * Toggle sidebar collapsed status
     */

  }, {
    key: "toggleSidebarCollapsible",
    value: function toggleSidebarCollapsible() {
      var _this2 = this;

      // Get the current menu state
      this._coreConfigService.getConfig().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._unsubscribeAll)).subscribe(function (config) {
        _this2.isCollapsed = config.layout.menu.collapsed;
      });

      if (this.isCollapsed) {
        this._coreConfigService.setConfig({
          layout: {
            menu: {
              collapsed: false
            }
          }
        }, {
          emitEvent: true
        });
      } else {
        this._coreConfigService.setConfig({
          layout: {
            menu: {
              collapsed: true
            }
          }
        }, {
          emitEvent: true
        });
      }
    }
  }]);

  return VerticalMenuComponent;
}();

VerticalMenuComponent.ɵfac = function VerticalMenuComponent_Factory(t) {
  return new (t || VerticalMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_core_services_config_service__WEBPACK_IMPORTED_MODULE_2__.CoreConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_core_components_core_menu_core_menu_service__WEBPACK_IMPORTED_MODULE_3__.CoreMenuService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_core_components_core_sidebar_core_sidebar_service__WEBPACK_IMPORTED_MODULE_4__.CoreSidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router));
};

VerticalMenuComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
  type: VerticalMenuComponent,
  selectors: [["vertical-menu"]],
  viewQuery: function VerticalMenuComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13__.PerfectScrollbarDirective, 5);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.directiveRef = _t.first);
    }
  },
  decls: 16,
  vars: 8,
  consts: [[1, "navbar-header"], [1, "nav", "navbar-nav", "flex-row"], [1, "nav-item", "mr-auto"], [1, "navbar-brand", 3, "routerLink"], [1, "brand-logo"], ["alt", "brand-logo", 3, "src"], [1, "brand-text", "mb-0"], [1, "nav-item", "nav-toggle"], [1, "nav-link", "modern-nav-toggle", "d-none", "d-xl-block", "pr-0", 3, "click"], [1, "toggle-icon", "feather", "font-medium-4", "collapse-toggle-icon", "text-primary", 3, "ngClass"], [1, "nav-link", "modern-nav-toggle", "d-block", "d-xl-none", "pr-0", 3, "click"], ["data-feather", "x", 1, "font-medium-4", "text-primary", "toggle-icon"], [1, "shadow-bottom", 3, "ngClass"], [1, "main-menu-content", 3, "perfectScrollbar", "scroll"], ["layout", "vertical", "core-menu", "", 1, "navigation", "navigation-main"]],
  template: function VerticalMenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 0)(1, "ul", 1)(2, "li", 2)(3, "a", 3)(4, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](5, "img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "h2", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "li", 7)(9, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function VerticalMenuComponent_Template_a_click_9_listener() {
        return ctx.toggleSidebarCollapsible();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](10, "i", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function VerticalMenuComponent_Template_a_click_11_listener() {
        return ctx.toggleSidebar();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](12, "i", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](13, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("scroll", function VerticalMenuComponent_Template_div_scroll_14_listener() {
        return ctx.onSidebarScroll();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](15, "ul", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](5, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("src", ctx.coreConfig.app.appLogoImage, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx.coreConfig.app.appName);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", ctx.isCollapsed === true ? "icon-circle" : "icon-disc");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](6, _c1, ctx.isScrolled));
    }
  },
  dependencies: [_core_components_core_menu_core_menu_component__WEBPACK_IMPORTED_MODULE_5__.CoreMenuComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_15__.DefaultClassDirective, _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_6__.FeatherIconDirective, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13__.PerfectScrollbarDirective, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLinkWithHref],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZXJ0aWNhbC1tZW51LmNvbXBvbmVudC5zY3NzIn0= */"],
  encapsulation: 2
});

/***/ }),

/***/ 71307:
/*!******************************************************************************!*\
  !*** ./src/app/layout/components/menu/vertical-menu/vertical-menu.module.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerticalMenuModule": function() { return /* binding */ VerticalMenuModule; }
/* harmony export */ });
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 15375);
/* harmony import */ var _core_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components */ 69065);
/* harmony import */ var _core_common_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/common.module */ 75078);
/* harmony import */ var app_layout_components_menu_vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/layout/components/menu/vertical-menu/vertical-menu.component */ 72951);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);









var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
  suppressScrollX: true,
  wheelPropagation: false
};
var VerticalMenuModule = /*#__PURE__*/(0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function VerticalMenuModule() {
  (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, VerticalMenuModule);
});

VerticalMenuModule.ɵfac = function VerticalMenuModule_Factory(t) {
  return new (t || VerticalMenuModule)();
};

VerticalMenuModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: VerticalMenuModule
});
VerticalMenuModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  providers: [{
    provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__.PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
  }],
  imports: [_core_components__WEBPACK_IMPORTED_MODULE_2__.CoreMenuModule, _core_common_module__WEBPACK_IMPORTED_MODULE_3__.CoreCommonModule, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__.PerfectScrollbarModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](VerticalMenuModule, {
    declarations: [app_layout_components_menu_vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_4__.VerticalMenuComponent],
    imports: [_core_components__WEBPACK_IMPORTED_MODULE_2__.CoreMenuModule, _core_common_module__WEBPACK_IMPORTED_MODULE_3__.CoreCommonModule, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__.PerfectScrollbarModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
    exports: [app_layout_components_menu_vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_4__.VerticalMenuComponent]
  });
})();

/***/ }),

/***/ 75361:
/*!***************************************************************************************!*\
  !*** ./src/app/layout/components/navbar/navbar-bookmark/navbar-bookmark.component.ts ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarBookmarkComponent": function() { return /* binding */ NavbarBookmarkComponent; }
/* harmony export */ });
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_layout_components_navbar_navbar_search_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/layout/components/navbar/navbar-search/search.service */ 50442);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/extended */ 1570);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/directives/core-feather-icons/core-feather-icons */ 66279);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 15375);
/* harmony import */ var _core_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/pipes/filter.pipe */ 69671);













var _c0 = ["openBookmark"];

function NavbarBookmarkComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "li", 3)(2, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var page_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("ngbTooltip", page_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", page_r5.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"]("ficon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data-feather", page_r5.icon);
  }
}

var _c1 = function _c1(a0) {
  return {
    current_item: a0
  };
};

function NavbarBookmarkComponent_ng_container_12_li_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 15)(1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function NavbarBookmarkComponent_ng_container_12_li_1_Template_a_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      $event.stopPropagation();
      $event.preventDefault();
      ctx_r9.closeBookmark();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r9.removeOverlay());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function NavbarBookmarkComponent_ng_container_12_li_1_Template_button_click_6_listener($event) {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      var page_r7 = restoredCtx.$implicit;
      var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      $event.stopPropagation();
      $event.preventDefault();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r11.toggleBookmark(page_r7.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    var page_r7 = ctx.$implicit;
    var i_r8 = ctx.index;
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](8, _c1, i_r8 === ctx_r6.activeIndex));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", page_r7.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("feather icon-", page_r7.icon, " mr-75");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](page_r7.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("text-warning", page_r7.isBookmarked);
  }
}

function NavbarBookmarkComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, NavbarBookmarkComponent_ng_container_12_li_1_Template, 8, 10, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](3, 5, ctx_r2.pages, ctx_r2.bookmarkText, "title"), 0, 6));
  }
}

function NavbarBookmarkComponent_ng_template_13_ng_container_0_li_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 15)(1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function NavbarBookmarkComponent_ng_template_13_ng_container_0_li_1_Template_a_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r17);
      var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      $event.stopPropagation();
      $event.preventDefault();
      ctx_r16.closeBookmark();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r16.removeOverlay());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function NavbarBookmarkComponent_ng_template_13_ng_container_0_li_1_Template_button_click_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r17);
      var page_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      $event.stopPropagation();
      $event.preventDefault();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r18.toggleBookmark(page_r13.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    var i_r14 = ctx_r20.index;
    var page_r13 = ctx_r20.$implicit;
    var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](8, _c1, i_r14 === ctx_r15.activeIndex));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", page_r13.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("feather icon-", page_r13.icon, " mr-75");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](page_r13.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("text-warning", page_r13.isBookmarked);
  }
}

function NavbarBookmarkComponent_ng_template_13_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, NavbarBookmarkComponent_ng_template_13_ng_container_0_li_1_Template, 8, 10, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var page_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", page_r13.isBookmarked);
  }
}

function NavbarBookmarkComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, NavbarBookmarkComponent_ng_template_13_ng_container_0_Template, 2, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "filter");
  }

  if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](1, 1, ctx_r4.pages, ctx_r4.bookmarkText, "title"));
  }
}

var NavbarBookmarkComponent = /*#__PURE__*/function () {
  /**
   *
   * @param document
   * @param _searchService
   */
  function NavbarBookmarkComponent(document, _searchService) {
    (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NavbarBookmarkComponent);

    this.document = document;
    this._searchService = _searchService; // Public

    this.bookmarkText = '';
    this.openBookmarkRef = false;
    this.activeIndex = 0;
    this.pages = [];
  }

  (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(NavbarBookmarkComponent, [{
    key: "fn",
    value: function fn() {
      this.removeOverlay();
      this.openBookmarkRef = false;
      this.bookmarkText = '';
    }
  }, {
    key: "clickout",
    value: function clickout(event) {
      // Close Bookmark if Clicked on Overlay
      if (event.target.className === 'content-overlay') {
        this.removeOverlay();
        this.openBookmarkRef = false;
        this.bookmarkText = '';
      } // Close Bookmark if clicked Outside of Container


      if (!(event.target.nodeName === 'INPUT') && this.openBookmarkRef === true) {
        this.removeOverlay();
        this.openBookmarkRef = false;
        this.bookmarkText = '';
      }
    } // Public Methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Add Bookmark
     *
     * @param id
     */

  }, {
    key: "addBookmark",
    value: function addBookmark(id) {
      var index = this.pages.findIndex(function (object) {
        return object.id === id;
      });
      this.pages[index].isBookmarked = true;
      this.bookmarkedItems.push(this.pages[index]);
    }
    /**
     * Remove Bookmark
     *
     * @param id
     */

  }, {
    key: "removeBookmark",
    value: function removeBookmark(id) {
      var index = this.bookmarkedItems.findIndex(function (object) {
        return object.id === id;
      });
      this.bookmarkedItems[index].isBookmarked = false;
      this.bookmarkedItems.splice(index, 1);
    }
    /**
     * Open Bookmark
     */

  }, {
    key: "openBookmark",
    value: function openBookmark() {
      this.openBookmarkRef = true;

      this._searchService.onIsBookmarkOpenChange.next(this.openBookmarkRef);
    }
    /**
     * Close Bookmark
     */

  }, {
    key: "closeBookmark",
    value: function closeBookmark() {
      this.openBookmarkRef = false;

      this._searchService.onIsBookmarkOpenChange.next(this.openBookmarkRef);
    }
    /**
     * Remove Overlay
     */

  }, {
    key: "removeOverlay",
    value: function removeOverlay() {
      this.document.querySelector('.app-content').classList.remove('show-overlay');
    }
    /**
     * Next Active Match
     */

  }, {
    key: "nextActiveMatch",
    value: function nextActiveMatch() {
      this.activeIndex = this.activeIndex < this.bookmarkSearchLimit - 1 ? ++this.activeIndex : this.activeIndex;
    }
    /**
     * Previous Active Match
     */

  }, {
    key: "prevActiveMatch",
    value: function prevActiveMatch() {
      this.activeIndex = this.activeIndex > 0 ? --this.activeIndex : 0;
    }
    /**
     * Auto Suggestion
     *
     * @param event
     */

  }, {
    key: "autoSuggestion",
    value: function autoSuggestion(event) {
      if (38 === event.keyCode) {
        return this.prevActiveMatch();
      }

      if (40 === event.keyCode) {
        return this.nextActiveMatch();
      }
    }
    /**
     * Toggle Bookmark
     *
     * @param id
     */

  }, {
    key: "toggleBookmark",
    value: function toggleBookmark(id) {
      var index = this.pages.findIndex(function (object) {
        return object.id === id;
      });

      if (this.pages[index].isBookmarked === true) {
        this.removeBookmark(id);
      } else {
        this.addBookmark(id);
      }
    }
    /**
     * Toggle Bookmark Popup
     */

  }, {
    key: "toggleBookmarkPopup",
    value: function toggleBookmarkPopup() {
      var _this = this;

      setTimeout(function () {
        if (_this.openBookmarkRef === false) {
          _this.openBookmark();
        } else {
          _this.closeBookmark();
        }

        setTimeout(function () {
          _this._bookmarkElement.nativeElement.focus();
        }, 0);
      }, 0);
    }
    /**
     * Update Bookmark
     *
     * @param event
     */

  }, {
    key: "bookmarkUpdate",
    value: function bookmarkUpdate(event) {
      var val = event.target.value.toLowerCase();

      if (val !== '') {
        this.document.querySelector('.app-content').classList.add('show-overlay');
      } else {
        this.document.querySelector('.app-content').classList.remove('show-overlay');
      }

      this.autoSuggestion(event);
    } // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */

  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this2 = this;

      this._searchService.onApiDataChange.subscribe(function (res) {
        _this2.apiData = res;
        _this2.pages = _this2.apiData[0].data;
        _this2.bookmarkedItems = _this2.pages.filter(function (page) {
          return page.isBookmarked === true;
        });
        _this2.bookmarkSearchLimit = _this2.apiData[0].bookmarkLimit;
      });

      this._searchService.onIsBookmarkOpenChange.subscribe(function (res) {
        _this2.openBookmarkRef = res;
      });
    }
  }]);

  return NavbarBookmarkComponent;
}();

NavbarBookmarkComponent.ɵfac = function NavbarBookmarkComponent_Factory(t) {
  return new (t || NavbarBookmarkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](app_layout_components_navbar_navbar_search_search_service__WEBPACK_IMPORTED_MODULE_2__.SearchService));
};

NavbarBookmarkComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: NavbarBookmarkComponent,
  selectors: [["app-navbar-bookmark"]],
  viewQuery: function NavbarBookmarkComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx._bookmarkElement = _t.first);
    }
  },
  hostBindings: function NavbarBookmarkComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keydown.escape", function NavbarBookmarkComponent_keydown_escape_HostBindingHandler() {
        return ctx.fn();
      })("click", function NavbarBookmarkComponent_click_HostBindingHandler($event) {
        return ctx.clickout($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresolveDocument"]);
    }
  },
  decls: 15,
  vars: 10,
  consts: [[1, "nav", "navbar-nav", "bookmark-icons"], [4, "ngFor", "ngForOf"], [1, "nav", "navbar-nav"], [1, "nav-item", "d-none", "d-lg-block"], [1, "nav-link", "bookmark-star", 3, "click"], [3, "data-feather"], [1, "bookmark-input", "search-input"], [1, "bookmark-input-icon"], ["type", "text", "placeholder", "Bookmark", "tabindex", "0", "data-search", "search", 1, "form-control", "input", 3, "ngModel", "keyup", "ngModelChange"], ["openBookmark", ""], [1, "search-list", "search-list-bookmark", "show", 3, "perfectScrollbar"], [4, "ngIf", "ngIfElse"], ["defaultBookmarks", ""], ["placement", "bottom", 1, "nav-link", 3, "routerLink", "ngbTooltip"], ["class", "auto-suggestion", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "auto-suggestion", 3, "ngClass"], [1, "d-flex", "align-items-center", "justify-content-between", "w-100", 3, "routerLink", "click"], [1, "d-flex", "justify-content-start", "align-items-center"], ["type", "button", 1, "btn", "p-0", 3, "click"], [1, "feather", "icon-star"], ["class", "auto-suggestion", 3, "ngClass", 4, "ngIf"]],
  template: function NavbarBookmarkComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ul", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, NavbarBookmarkComponent_ng_container_1_Template, 4, 5, "ng-container", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "ul", 2)(3, "li", 3)(4, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function NavbarBookmarkComponent_Template_a_click_4_listener() {
        return ctx.toggleBookmarkPopup();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 6)(7, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "input", 8, 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keyup", function NavbarBookmarkComponent_Template_input_keyup_9_listener($event) {
        return ctx.bookmarkUpdate($event);
      })("ngModelChange", function NavbarBookmarkComponent_Template_input_ngModelChange_9_listener($event) {
        return ctx.bookmarkText = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "ul", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, NavbarBookmarkComponent_ng_container_12_Template, 4, 9, "ng-container", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, NavbarBookmarkComponent_ng_template_13_Template, 2, 5, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    }

    if (rf & 2) {
      var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](14);

      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.bookmarkedItems);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"]("ficon text-warning");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data-feather", "star");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("show", ctx.openBookmarkRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data-feather", "search");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.bookmarkText);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.bookmarkText !== "")("ngIfElse", _r3);
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__.DefaultClassDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_3__.FeatherIconDirective, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__.PerfectScrollbarDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.SlicePipe, _core_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_4__.FilterPipe],
  encapsulation: 2
});

/***/ }),

/***/ 10578:
/*!***********************************************************************************************!*\
  !*** ./src/app/layout/components/navbar/navbar-notification/navbar-notification.component.ts ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarNotificationComponent": function() { return /* binding */ NavbarNotificationComponent; }
/* harmony export */ });
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_layout_components_navbar_navbar_notification_notifications_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/layout/components/navbar/navbar-notification/notifications.service */ 50861);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/extended */ 1570);
/* harmony import */ var _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/directives/core-feather-icons/core-feather-icons */ 66279);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 15375);










function NavbarNotificationComponent_a_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 18)(1, "div", 19)(2, "div", 20)(3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "small", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    var message_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", message_r2.image, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", message_r2.heading, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](message_r2.text);
  }
}

var _c0 = function _c0(a0, a1, a2) {
  return {
    "bg-light-danger": a0,
    "bg-light-success": a1,
    "bg-light-warning": a2
  };
};

function NavbarNotificationComponent_a_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 18)(1, "div", 19)(2, "div", 20)(3, "div", 26)(4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "small", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    var systemMessage_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction3"](4, _c0, systemMessage_r3.icon === "x", systemMessage_r3.icon === "check", systemMessage_r3.icon === "alert-triangle"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data-feather", systemMessage_r3.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", systemMessage_r3.heading, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](systemMessage_r3.text);
  }
}

var NavbarNotificationComponent = /*#__PURE__*/function () {
  /**
   *
   * @param {NotificationsService} _notificationsService
   */
  function NavbarNotificationComponent(_notificationsService) {
    (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NavbarNotificationComponent);

    this._notificationsService = _notificationsService;
  } // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */


  (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(NavbarNotificationComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      this._notificationsService.onApiDataChange.subscribe(function (res) {
        _this.notifications = res;
      });
    }
  }]);

  return NavbarNotificationComponent;
}();

NavbarNotificationComponent.ɵfac = function NavbarNotificationComponent_Factory(t) {
  return new (t || NavbarNotificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](app_layout_components_navbar_navbar_notification_notifications_service__WEBPACK_IMPORTED_MODULE_2__.NotificationsService));
};

NavbarNotificationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: NavbarNotificationComponent,
  selectors: [["app-navbar-notification"]],
  decls: 24,
  vars: 5,
  consts: [["ngbDropdown", "", 1, "nav-item", "dropdown-notification", "mr-25"], ["ngbDropdownToggle", "", "id", "navbarNotificationDropdown", 1, "nav-link"], ["data-feather", "bell", 1, "ficon"], [1, "badge", "badge-pill", "badge-danger", "badge-up"], ["ngbDropdownMenu", "", "aria-labelledby", "navbarNotificationDropdown", 1, "dropdown-menu", "dropdown-menu-media", "dropdown-menu-right"], [1, "dropdown-menu-header"], [1, "dropdown-header", "d-flex"], [1, "notification-title", "mb-0", "mr-auto"], [1, "badge", "badge-pill", "badge-light-primary"], [1, "scrollable-container", "media-list", 3, "perfectScrollbar"], ["class", "d-flex", "href", "javascript:void(0)", 4, "ngFor", "ngForOf"], [1, "media", "d-flex", "align-items-center"], [1, "font-weight-bolder", "mr-auto", "mb-0"], [1, "custom-control", "custom-control-primary", "custom-switch"], ["id", "systemNotification", "type", "checkbox", 1, "custom-control-input", 3, "checked"], ["for", "systemNotification", 1, "custom-control-label"], [1, "dropdown-menu-footer"], ["href", "javascript:void(0)", 1, "btn", "btn-primary", "btn-block"], ["href", "javascript:void(0)", 1, "d-flex"], [1, "media", "d-flex", "align-items-start"], [1, "media-left"], [1, "avatar"], ["alt", "avatar", "width", "32", "height", "32", 3, "src"], [1, "media-body"], [1, "media-heading", 3, "innerHTML"], [1, "notification-text"], [1, "avatar", 3, "ngClass"], [1, "avatar-content"], [1, "avatar-icon", 3, "data-feather"]],
  template: function NavbarNotificationComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 0)(1, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "ul", 4)(6, "li", 5)(7, "div", 6)(8, "h4", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Notifications");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "li", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, NavbarNotificationComponent_a_13_Template, 9, 3, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 11)(15, "h6", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "System Notifications");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "input", 14)(19, "label", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, NavbarNotificationComponent_a_20_Template, 10, 8, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "li", 16)(22, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Read all notifications");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"]((ctx.notifications.messages == null ? null : ctx.notifications.messages.length) + (ctx.notifications.systemMessages == null ? null : ctx.notifications.systemMessages.length));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", (ctx.notifications.messages == null ? null : ctx.notifications.messages.length) + (ctx.notifications.systemMessages == null ? null : ctx.notifications.systemMessages.length), " New ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.notifications.messages);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx.notifications.system);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.notifications.systemMessages);
    }
  },
  dependencies: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbDropdownMenu, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__.DefaultClassDirective, _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_3__.FeatherIconDirective, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__.PerfectScrollbarDirective],
  encapsulation: 2
});

/***/ }),

/***/ 50861:
/*!***************************************************************************************!*\
  !*** ./src/app/layout/components/navbar/navbar-notification/notifications.service.ts ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsService": function() { return /* binding */ NotificationsService; }
/* harmony export */ });
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 28784);





var NotificationsService = /*#__PURE__*/function () {
  /**
   *
   * @param {HttpClient} _httpClient
   */
  function NotificationsService(_httpClient) {
    (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NotificationsService);

    this._httpClient = _httpClient; // Public

    this.apiData = [];
    this.onApiDataChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(''); // this.getNotificationsData();
  }
  /**
   * Get Notifications Data
   */


  (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(NotificationsService, [{
    key: "getNotificationsData",
    value: function getNotificationsData() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        _this._httpClient.get('api/notifications-data').subscribe(function (response) {
          _this.apiData = response;

          _this.onApiDataChange.next(_this.apiData);

          resolve(_this.apiData);
        }, reject);
      });
    }
  }]);

  return NotificationsService;
}();

NotificationsService.ɵfac = function NotificationsService_Factory(t) {
  return new (t || NotificationsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};

NotificationsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: NotificationsService,
  factory: NotificationsService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 6032:
/*!***********************************************************************************!*\
  !*** ./src/app/layout/components/navbar/navbar-search/navbar-search.component.ts ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarSearchComponent": function() { return /* binding */ NavbarSearchComponent; }
/* harmony export */ });
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var app_layout_components_navbar_navbar_search_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/layout/components/navbar/navbar-search/search.service */ 50442);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/extended */ 1570);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/directives/core-feather-icons/core-feather-icons */ 66279);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 15375);
/* harmony import */ var _core_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/pipes/filter.pipe */ 69671);












var _c0 = ["openSearch"];
var _c1 = ["pageList"];

var _c2 = function _c2(a0) {
  return {
    current_item: a0
  };
};

function NavbarSearchComponent_ng_container_16_li_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("mouseover", function NavbarSearchComponent_ng_container_16_li_1_Template_li_mouseover_0_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15);
      var page_r12 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](page_r12.hover = true);
    })("mouseout", function NavbarSearchComponent_ng_container_16_li_1_Template_li_mouseout_0_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15);
      var page_r12 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](page_r12.hover = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function NavbarSearchComponent_ng_container_16_li_1_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15);
      var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r17.toggleSearch());
    })("keyup.enter", function NavbarSearchComponent_ng_container_16_li_1_Template_a_keyup_enter_1_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15);
      var page_r12 = restoredCtx.$implicit;
      var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r18.navigate(page_r12.link));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    var page_r12 = ctx.$implicit;
    var i_r13 = ctx.index;
    var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("current_item", page_r12.hover);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](6, _c2, i_r13 === ctx_r11.activeIndex));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", page_r12.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data-feather", page_r12.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](page_r12.title);
  }
}

function NavbarSearchComponent_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, NavbarSearchComponent_ng_container_16_li_1_Template, 6, 8, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](3, 5, ctx_r2.pages, ctx_r2.searchText, "title"), 0, 4));
  }
}

function NavbarSearchComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 22)(1, "a", 23)(2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "No results found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
}

function NavbarSearchComponent_ng_container_24_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 27)(1, "a", 28)(2, "div", 29)(3, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 32)(6, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "small", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "small", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    var file_r20 = ctx.$implicit;
    var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](5, _c2, ctx_r19.i === ctx_r19.activeIndex));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", file_r20.file, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](file_r20.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](file_r20.by);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](file_r20.size);
  }
}

function NavbarSearchComponent_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, NavbarSearchComponent_ng_container_24_li_1_Template, 12, 7, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](3, 5, ctx_r5.files, ctx_r5.searchText, "title"), 0, 4));
  }
}

function NavbarSearchComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 22)(1, "a", 23)(2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "No results found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
}

function NavbarSearchComponent_ng_container_32_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 37)(1, "a", 38)(2, "div", 10)(3, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 32)(6, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "small", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "small", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    var contact_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", contact_r22.img, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](contact_r22.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](contact_r22.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](contact_r22.date);
  }
}

function NavbarSearchComponent_ng_container_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, NavbarSearchComponent_ng_container_32_li_1_Template, 12, 4, "li", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](3, 5, ctx_r8.contacts, ctx_r8.searchText, "title"), 0, 4));
  }
}

function NavbarSearchComponent_ng_template_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 22)(1, "a", 23)(2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "No results found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
}

var NavbarSearchComponent = /*#__PURE__*/function () {
  /**
   *
   * @param document
   * @param router
   * @param _searchService
   */
  function NavbarSearchComponent(document, _elementRef, router, _searchService) {
    (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NavbarSearchComponent);

    this.document = document;
    this._elementRef = _elementRef;
    this.router = router;
    this._searchService = _searchService; // Public

    this.searchText = '';
    this.openSearchRef = false;
    this.activeIndex = 0;
    this.pages = [];
    this.files = [];
    this.contacts = [];
  }

  (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(NavbarSearchComponent, [{
    key: "fn",
    value: function fn() {
      this.removeOverlay();
      this.openSearchRef = false;
      this.searchText = '';
    }
  }, {
    key: "clickout",
    value: function clickout(event) {
      if (event.target.className === 'content-overlay') {
        this.removeOverlay();
        this.openSearchRef = false;
        this.searchText = '';
      }
    } // Public Methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Next Active Match
     */

  }, {
    key: "nextActiveMatch",
    value: function nextActiveMatch() {
      this.activeIndex = this.activeIndex < this.pageSearchLimit - 1 ? ++this.activeIndex : this.activeIndex;
    }
    /**
     * Previous Active Match
     */

  }, {
    key: "prevActiveMatch",
    value: function prevActiveMatch() {
      this.activeIndex = this.activeIndex > 0 ? --this.activeIndex : 0;
    }
    /**
     * Remove Overlay
     */

  }, {
    key: "removeOverlay",
    value: function removeOverlay() {
      this.document.querySelector('.app-content').classList.remove('show-overlay');
    }
    /**
     * Auto Suggestion
     *
     * @param event
     */

  }, {
    key: "autoSuggestion",
    value: function autoSuggestion(event) {
      var _a;

      if (38 === event.keyCode) {
        return this.prevActiveMatch();
      }

      if (40 === event.keyCode) {
        return this.nextActiveMatch();
      }

      if (13 === event.keyCode) {
        // Navigate to activeIndex
        // ! Todo: Improve this code
        var current_item = this._pageListElement.nativeElement.getElementsByClassName('current_item');

        (_a = current_item[0]) === null || _a === void 0 ? void 0 : _a.children[0].click();
      }
    }
    /**
     * Toggle Search
     */

  }, {
    key: "toggleSearch",
    value: function toggleSearch() {
      var _this = this;

      this._searchService.onIsBookmarkOpenChange.next(false);

      this.removeOverlay();
      this.openSearchRef = !this.openSearchRef;
      this.activeIndex = 0;
      setTimeout(function () {
        _this._inputElement.nativeElement.focus();
      });

      if (this.openSearchRef === false) {
        this.document.querySelector('.app-content').classList.remove('show-overlay');
        this.searchText = '';
      }
    }
    /**
     * Search Update
     *
     * @param event
     */

  }, {
    key: "searchUpdate",
    value: function searchUpdate(event) {
      var val = event.target.value.toLowerCase();

      if (val !== '') {
        this.document.querySelector('.app-content').classList.add('show-overlay');
      } else {
        this.document.querySelector('.app-content').classList.remove('show-overlay');
      }

      this.autoSuggestion(event);
    } // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */

  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this2 = this;

      this._searchService.onApiDataChange.subscribe(function (res) {
        _this2.apiData = res;
        _this2.pages = _this2.apiData[0].data;
        _this2.pageSearchLimit = _this2.apiData[0].searchLimit;
        _this2.files = _this2.apiData[1].data;
        _this2.contacts = _this2.apiData[2].data;
      });
    }
  }]);

  return NavbarSearchComponent;
}();

NavbarSearchComponent.ɵfac = function NavbarSearchComponent_Factory(t) {
  return new (t || NavbarSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](app_layout_components_navbar_navbar_search_search_service__WEBPACK_IMPORTED_MODULE_2__.SearchService));
};

NavbarSearchComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: NavbarSearchComponent,
  selectors: [["app-navbar-search"]],
  viewQuery: function NavbarSearchComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 5);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx._inputElement = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx._pageListElement = _t.first);
    }
  },
  hostBindings: function NavbarSearchComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keydown.escape", function NavbarSearchComponent_keydown_escape_HostBindingHandler() {
        return ctx.fn();
      })("click", function NavbarSearchComponent_click_HostBindingHandler($event) {
        return ctx.clickout($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresolveDocument"]);
    }
  },
  decls: 36,
  vars: 28,
  consts: [[1, "nav-item", "nav-search"], [1, "nav-link", "nav-link-search", 3, "click"], [3, "data-feather"], [1, "search-input"], [1, "search-input-icon"], ["type", "text", "placeholder", "Explore Vuexy...", "tabindex", "-1", "data-search", "search", 1, "form-control", "input", 3, "ngModel", "keyup", "ngModelChange"], ["openSearch", ""], [1, "btn", "search-input-close", "p-0", 3, "click"], [1, "search-list", "search-list-main", 3, "perfectScrollbar"], ["pageList", ""], [1, "d-flex", "align-items-center"], ["href", "javascript:void(0)"], [1, "section-label", "mt-75", "mb-0"], [4, "ngIf", "ngIfElse"], ["noResultsPages", ""], ["noResultsFiles", ""], ["noResultsMembers", ""], ["class", "auto-suggestion", 3, "ngClass", "current_item", "mouseover", "mouseout", 4, "ngFor", "ngForOf"], [1, "auto-suggestion", 3, "ngClass", "mouseover", "mouseout"], [1, "d-flex", "align-items-center", "justify-content-between", "w-100", 3, "routerLink", "click", "keyup.enter"], [1, "d-flex", "justify-content-start", "align-items-center"], [1, "mr-75", 3, "data-feather"], [1, "auto-suggestion", "justify-content-between"], [1, "d-flex", "align-items-center", "justify-content-between", "w-100", "py-50"], [1, "d-flex", "justify-content-start"], ["data-feather", "alert-circle", 1, "mr-25"], ["class", "auto-suggestion", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "auto-suggestion", 3, "ngClass"], ["href", "javascript:void(0)", 1, "d-flex", "align-items-center", "justify-content-between", "w-100"], [1, "d-flex"], [1, "mr-75"], ["alt", "png", "height", "32", 3, "src"], [1, "search-data"], [1, "search-data-title", "mb-0"], [1, "text-muted"], [1, "search-data-size", "mr-50", "text-muted"], ["class", "auto-suggestion", 4, "ngFor", "ngForOf"], [1, "auto-suggestion"], ["href", "javascript:void(0)", 1, "d-flex", "align-items-center", "justify-content-between", "py-50", "w-100"], [1, "avatar", "mr-75"]],
  template: function NavbarSearchComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 0)(1, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function NavbarSearchComponent_Template_a_click_1_listener() {
        return ctx.toggleSearch();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3)(4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "input", 5, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keyup", function NavbarSearchComponent_Template_input_keyup_6_listener($event) {
        return ctx.searchUpdate($event);
      })("ngModelChange", function NavbarSearchComponent_Template_input_ngModelChange_6_listener($event) {
        return ctx.searchText = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function NavbarSearchComponent_Template_button_click_8_listener() {
        return ctx.toggleSearch();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "ul", 8, 9)(12, "li", 10)(13, "a", 11)(14, "h6", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Pages");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, NavbarSearchComponent_ng_container_16_Template, 4, 9, "ng-container", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](17, "filter");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, NavbarSearchComponent_ng_template_18_Template, 6, 0, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "li", 10)(21, "a", 11)(22, "h6", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Files");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, NavbarSearchComponent_ng_container_24_Template, 4, 9, "ng-container", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](25, "filter");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, NavbarSearchComponent_ng_template_26_Template, 6, 0, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "li", 10)(29, "a", 11)(30, "h6", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "Members");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](32, NavbarSearchComponent_ng_container_32_Template, 4, 9, "ng-container", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](33, "filter");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](34, NavbarSearchComponent_ng_template_34_Template, 6, 0, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](19);

      var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](27);

      var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](35);

      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"]("ficon");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data-feather", "search");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("open", ctx.openSearchRef === true);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data-feather", "search");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.searchText);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data-feather", "x");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("show", ctx.searchText !== "");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](17, 16, ctx.pages, ctx.searchText, "title").length)("ngIfElse", _r3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](25, 20, ctx.files, ctx.searchText, "title").length)("ngIfElse", _r6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](33, 24, ctx.contacts, ctx.searchText, "title").length)("ngIfElse", _r9);
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__.DefaultClassDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_3__.FeatherIconDirective, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__.PerfectScrollbarDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.SlicePipe, _core_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_4__.FilterPipe],
  encapsulation: 2
});

/***/ }),

/***/ 50442:
/*!**************************************************************************!*\
  !*** ./src/app/layout/components/navbar/navbar-search/search.service.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchService": function() { return /* binding */ SearchService; }
/* harmony export */ });
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 28784);





var SearchService = /*#__PURE__*/function () {
  /**
   *
   * @param {HttpClient} _httpClient
   */
  function SearchService(_httpClient) {
    (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SearchService);

    this._httpClient = _httpClient; // Public

    this.search = '';
    this.apiData = [];
    this.onApiDataChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject('');
    this.onIsBookmarkOpenChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(false); // this.getSearchData();
  }
  /**
   * Get Search Data
   */


  (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(SearchService, [{
    key: "getSearchData",
    value: function getSearchData() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        _this._httpClient.get('api/search-data').subscribe(function (response) {
          _this.apiData = response;

          _this.onApiDataChange.next(_this.apiData);

          resolve(_this.apiData);
        }, reject);
      });
    }
  }]);

  return SearchService;
}();

SearchService.ɵfac = function SearchService_Factory(t) {
  return new (t || SearchService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};

SearchService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: SearchService,
  factory: SearchService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 903:
/*!**************************************************************!*\
  !*** ./src/app/layout/components/navbar/navbar.component.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarComponent": function() { return /* binding */ NavbarComponent; }
/* harmony export */ });
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ 92938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 85921);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_services_seguridad_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/seguridad/login.service */ 98468);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var app_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/auth/service */ 81004);
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/services/config.service */ 52553);
/* harmony import */ var _core_services_media_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/services/media.service */ 42826);
/* harmony import */ var _core_components_core_sidebar_core_sidebar_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/components/core-sidebar/core-sidebar.service */ 66841);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout */ 75722);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/flex-layout/extended */ 1570);
/* harmony import */ var _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/directives/core-feather-icons/core-feather-icons */ 66279);



















var _c0 = function _c0() {
  return ["/"];
};

function NavbarComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 21)(1, "ul", 22)(2, "li", 23)(3, "a", 24)(4, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "h2", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](3, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("src", ctx_r0.coreConfig.app.appLogoImage, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r0.coreConfig.app.appName);
  }
}

function NavbarComponent_ul_3_Template(rf, ctx) {
  if (rf & 1) {
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ul", 28)(1, "li", 23)(2, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function NavbarComponent_ul_3_Template_a_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r3);
      var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.toggleSidebar("menu"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"]("ficon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("data-feather", "menu");
  }
}

var NavbarComponent = /*#__PURE__*/function () {
  /**
   * Constructor
   *
   * @param {Router} _router
   * @param {AuthenticationService} _authenticationService
   * @param {CoreConfigService} _coreConfigService
   * @param {CoreSidebarService} _coreSidebarService
   * @param {CoreMediaService} _coreMediaService
   * @param {MediaObserver} _mediaObserver
   * @param {TranslateService} _translateService
   */
  function NavbarComponent(loginService, _router, _authenticationService, _coreConfigService, _coreMediaService, _coreSidebarService, _mediaObserver, _translateService) {
    var _this = this;

    (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NavbarComponent);

    this.loginService = loginService;
    this._router = _router;
    this._authenticationService = _authenticationService;
    this._coreConfigService = _coreConfigService;
    this._coreMediaService = _coreMediaService;
    this._coreSidebarService = _coreSidebarService;
    this._mediaObserver = _mediaObserver;
    this._translateService = _translateService;
    this.isFixed = false;
    this.windowScrolled = false;

    this._authenticationService.currentUser.subscribe(function (x) {
      return _this.currentUser = x;
    });

    this.languageOptions = {
      en: {
        title: 'English',
        flag: 'us'
      },
      fr: {
        title: 'French',
        flag: 'fr'
      },
      de: {
        title: 'German',
        flag: 'de'
      },
      pt: {
        title: 'Portuguese',
        flag: 'pt'
      }
    }; // Set the private defaults

    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subject();
  } // Add .navbar-static-style-on-scroll on scroll using HostListener & HostBinding


  (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(NavbarComponent, [{
    key: "onWindowScroll",
    value: function onWindowScroll() {
      if ((window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) && this.coreConfig.layout.navbar.type == 'navbar-static-top' && this.coreConfig.layout.type == 'horizontal') {
        this.windowScrolled = true;
      } else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
        this.windowScrolled = false;
      }
    } // Public Methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle sidebar open
     *
     * @param key
     */

  }, {
    key: "toggleSidebar",
    value: function toggleSidebar(key) {
      this._coreSidebarService.getSidebarRegistry(key).toggleOpen();
    }
    /**
     * Set the language
     *
     * @param language
     */

  }, {
    key: "setLanguage",
    value: function setLanguage(language) {
      // Set the selected language for the navbar on change
      this.selectedLanguage = language; // Use the selected language id for translations

      this._translateService.use(language);

      this._coreConfigService.setConfig({
        app: {
          appLanguage: language
        }
      }, {
        emitEvent: true
      });
    }
    /**
     * Toggle Dark Skin
     */

  }, {
    key: "toggleDarkSkin",
    value: function toggleDarkSkin() {
      var _this2 = this;

      // Get the current skin
      this._coreConfigService.getConfig().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this._unsubscribeAll)).subscribe(function (config) {
        _this2.currentSkin = config.layout.skin;
      }); // Toggle Dark skin with prevSkin skin


      this.prevSkin = localStorage.getItem('prevSkin');

      if (this.currentSkin === 'dark') {
        this._coreConfigService.setConfig({
          layout: {
            skin: this.prevSkin ? this.prevSkin : 'default'
          }
        }, {
          emitEvent: true
        });
      } else {
        localStorage.setItem('prevSkin', this.currentSkin);

        this._coreConfigService.setConfig({
          layout: {
            skin: 'dark'
          }
        }, {
          emitEvent: true
        });
      }
    }
    /**
     * Logout method
     */

  }, {
    key: "logout",
    value: function logout() {
      this.loginService.logout();
    } // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */

  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this3 = this;

      // get the currentUser details from localStorage
      this.currentUser = JSON.parse(localStorage.getItem('currentUser')); // Subscribe to the config changes

      this._coreConfigService.config.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this._unsubscribeAll)).subscribe(function (config) {
        _this3.coreConfig = config;
        _this3.horizontalMenu = config.layout.type === 'horizontal';
        _this3.hiddenMenu = config.layout.menu.hidden === true;
        _this3.currentSkin = config.layout.skin; // Fix: for vertical layout if default navbar fixed-top than set isFixed = true

        if (_this3.coreConfig.layout.type === 'vertical') {
          setTimeout(function () {
            if (_this3.coreConfig.layout.navbar.type === 'fixed-top') {
              _this3.isFixed = true;
            }
          }, 0);
        }
      }); // Horizontal Layout Only: Add class fixed-top to navbar below large screen


      if (this.coreConfig.layout.type == 'horizontal') {
        // On every media(screen) change
        this._coreMediaService.onMediaUpdate.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this._unsubscribeAll)).subscribe(function () {
          var isFixedTop = _this3._mediaObserver.isActive('bs-gt-xl');

          if (isFixedTop) {
            _this3.isFixed = false;
          } else {
            _this3.isFixed = true;
          }
        });
      } // Set the selected language from default languageOptions


      this.selectedLanguage = lodash__WEBPACK_IMPORTED_MODULE_2__.find(this.languageOptions, {
        id: this._translateService.currentLang
      });
    }
    /**
     * On destroy
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      // Unsubscribe from all subscriptions
      this._unsubscribeAll.next();

      this._unsubscribeAll.complete();
    }
  }]);

  return NavbarComponent;
}();

NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
  return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_services_seguridad_login_service__WEBPACK_IMPORTED_MODULE_3__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](app_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_services_config_service__WEBPACK_IMPORTED_MODULE_5__.CoreConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_services_media_service__WEBPACK_IMPORTED_MODULE_6__.CoreMediaService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_components_core_sidebar_core_sidebar_service__WEBPACK_IMPORTED_MODULE_7__.CoreSidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__.MediaObserver), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateService));
};

NavbarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: NavbarComponent,
  selectors: [["app-navbar"]],
  hostVars: 4,
  hostBindings: function NavbarComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("scroll", function NavbarComponent_scroll_HostBindingHandler() {
        return ctx.onWindowScroll();
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresolveWindow"]);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("fixed-top", ctx.isFixed)("navbar-static-style-on-scroll", ctx.windowScrolled);
    }
  },
  decls: 35,
  vars: 26,
  consts: [["class", "navbar-header d-xl-block d-none", 4, "ngIf"], [1, "navbar-container", "d-flex", "content"], [1, "bookmark-wrapper", "d-flex", "align-items-center"], ["class", "nav navbar-nav d-xl-none", 4, "ngIf"], [1, "nav", "navbar-nav", "align-items-center", "ml-auto"], [1, "nav-item", "d-none", "d-lg-block"], [1, "nav-link", "nav-link-style", "btn", 3, "click"], [1, "ficon", "font-medium-5", "feather", 3, "ngClass"], ["ngbDropdown", "", 1, "nav-item", "dropdown-user"], ["id", "dropdown-user", "ngbDropdownToggle", "", "id", "navbarUserDropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle", "dropdown-user-link"], [1, "user-nav", "d-sm-flex", "d-none"], [1, "user-name", "font-weight-bolder"], [1, "user-status"], [1, "avatar"], ["src", "assets/images/portrait/small/avatar-s-11.jpg", "alt", "avatar", "height", "40", "width", "40", 1, "round"], [1, "avatar-status-online"], ["ngbDropdownMenu", "", "aria-labelledby", "navbarUserDropdown", 1, "dropdown-menu", "dropdown-menu-right"], ["ngbDropdownItem", "", 3, "routerLink"], [3, "data-feather"], [1, "dropdown-divider"], ["ngbDropdownItem", "", 3, "click"], [1, "navbar-header", "d-xl-block", "d-none"], [1, "nav", "navbar-nav", "flex-row"], [1, "nav-item"], [1, "navbar-brand", 3, "routerLink"], [1, "brand-logo"], ["alt", "brand-logo", "width", "36", 3, "src"], [1, "brand-text", "mb-0"], [1, "nav", "navbar-nav", "d-xl-none"], [1, "nav-link", "menu-toggle", 3, "click"]],
  template: function NavbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, NavbarComponent_div_0_Template, 8, 4, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, NavbarComponent_ul_3_Template, 4, 3, "ul", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "ul", 4)(5, "li", 5)(6, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_6_listener() {
        return ctx.toggleDarkSkin();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](7, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "li", 8)(9, "a", 9)(10, "div", 10)(11, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, "John Doe");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "span", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, "Sample");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](16, "img", 14)(17, "span", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "div", 16)(19, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](20, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21, " Profile");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](23, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24, " Inbox");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](26, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](27, " Task");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](29, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](30, " Chats");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](31, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "a", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_32_listener() {
        return ctx.logout();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](33, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](34, " Salir");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.horizontalMenu);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.coreConfig.layout.menu.hidden);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", ctx.currentSkin === "dark" ? "icon-sun" : "icon-moon");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](22, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"]("mr-50");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("data-feather", "user");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](23, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"]("mr-50");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("data-feather", "mail");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](24, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"]("mr-50");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("data-feather", "check-square");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](25, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"]("mr-50");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("data-feather", "message-square");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"]("mr-50");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("data-feather", "power");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLinkWithHref, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbDropdownMenu, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbDropdownItem, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_17__.DefaultClassDirective, _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_8__.FeatherIconDirective],
  styles: [".dropdown-menu-right {\n  right: 0 !important;\n  left: auto !important;\n}\n\n.touchspin-cart .touchspin-wrapper {\n  width: 6.4rem;\n}\n\n.touchspin-cart:focus-within {\n  box-shadow: none !important;\n}\n\napp-navbar-bookmark {\n  display: flex;\n}\n\n.navbar-static-style-on-scroll {\n  background-color: #fff !important;\n  box-shadow: rgba(0, 0, 0, 0.05) 0px 4px 20px 0px !important;\n}\n\n.dark-layout .navbar-container .search-input .search-list li.auto-suggestion:hover {\n  background-color: #161d31;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL0Bjb3JlL3Njc3MvYmFzZS9jb21wb25lbnRzL192YXJpYWJsZXMtZGFyay5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtBQUhGOztBQVFFO0VBQ0UsYUFBQTtBQUxKOztBQU9FO0VBQ0UsMkJBQUE7QUFMSjs7QUFTQTtFQUNFLGFBQUE7QUFORjs7QUFVQTtFQUNFLGlDQUFBO0VBQ0EsMkRBQUE7QUFQRjs7QUFpQlk7RUFDRSx5QkNwQk87QURNckIiLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnQGNvcmUvc2Nzcy9iYXNlL2Jvb3RzdHJhcC1leHRlbmRlZC9pbmNsdWRlJzsgLy8gQm9vdHN0cmFwIGluY2x1ZGVzXG5AaW1wb3J0ICdAY29yZS9zY3NzL2Jhc2UvY29tcG9uZW50cy9pbmNsdWRlJzsgLy8gQ29tcG9uZW50cyBpbmNsdWRlc1xuXG4vLyBUbyBvcGVuIGRkIG9uIHJpZ2h0XG4uZHJvcGRvd24tbWVudS1yaWdodCB7XG4gIHJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIGxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbn1cblxuLy8gQ2FydCBUb3VjaHNwaW5cbi50b3VjaHNwaW4tY2FydCB7XG4gIC50b3VjaHNwaW4td3JhcHBlciB7XG4gICAgd2lkdGg6IDYuNHJlbTtcbiAgfVxuICAmOmZvY3VzLXdpdGhpbiB7XG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG5cbmFwcC1uYXZiYXItYm9va21hcmsge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4vLyBBcHBseSBzdHlsZSBvbiB3aW5kb3cgc2Nyb2xsIGZvciBuYXZiYXIgc3RhdGljIHR5cGVcbi5uYXZiYXItc3RhdGljLXN0eWxlLW9uLXNjcm9sbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjA1KSAwcHggNHB4IDIwcHggMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi8vIERhcmsgTGF5b3V0XG4uZGFyay1sYXlvdXQge1xuICAubmF2YmFyLWNvbnRhaW5lciB7XG4gICAgLnNlYXJjaC1pbnB1dCB7XG4gICAgICAuc2VhcmNoLWxpc3Qge1xuICAgICAgICBsaSB7XG4gICAgICAgICAgJi5hdXRvLXN1Z2dlc3Rpb24ge1xuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0aGVtZS1kYXJrLWJvZHktYmc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIvLyAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyAgRmlsZSBOYW1lOiB2YXJpYWJsZXMtZGFyay5zY3NzXG4vLyAgRGVzY3JpcHRpb246IEN1c3RvbSBkYXJrIHRoZW1lIHZhcmlhYmxlc1xuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vICBJdGVtIE5hbWU6IFZ1ZXh5IC0gVnVlanMsIFJlYWN0LCBBbmd1bGFyLCBIVE1MICYgTGFyYXZlbCBBZG1pbiBEYXNoYm9hcmQgVGVtcGxhdGVcbi8vICBBdXRob3I6IFBJWElOVkVOVFxuLy8gIEF1dGhvciBVUkw6IGh0dHA6Ly93d3cudGhlbWVmb3Jlc3QubmV0L3VzZXIvcGl4aW52ZW50XG4vLyAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vICBXQVJOSU5HOiBQTEVBU0UgRE8gTk9UIENIQU5HRSBUSElTIFZBUklBQkxFIEZJTEUuXG4vLyAgVEhJUyBGSUxFIFdJTEwgR0VUIE9WRVJXUklUVEVOIFdJVEggRUFDSCBWVUVYWSBIVE1MIFRFTVBMQVRFIFJFTEVBU0UuXG4vLyAgVElQOlxuLy8gIFdlIHN1Z2dlc3QgeW91IHRvIHVzZSB0aGlzIChhc3NldHMvc2Nzcy92YXJpYWJsZXMvX3ZhcmlhYmxlcy1jb21wb25lbnRzLnNjc3MpIGZpbGUgZm9yIG92ZXJyaWRpbmcgY29tcG9uZW50cyB2YXJpYWJsZXMuXG4vLyAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vQm9keVxuJHRoZW1lLWRhcmstYm9keS1iZzogIzE2MWQzMSAhZGVmYXVsdDtcbiR0aGVtZS1kYXJrLWJvZHktY29sb3I6ICNiNGI3YmQgIWRlZmF1bHQ7XG4kdGhlbWUtZGFyay1ib3JkZXItY29sb3I6ICMzYjQyNTMgIWRlZmF1bHQ7XG4kdGhlbWUtZGFyay1jdXN0b20tY29udHJvbC1ib3JkZXItY29sb3I6ICM0NDQwNWUgIWRlZmF1bHQ7XG5cbi8vVHlwb2dyYXBoeVxuJHRoZW1lLWRhcmstaGVhZGluZ3MtY29sb3I6ICNkMGQyZDYgIWRlZmF1bHQ7XG4kdGhlbWUtZGFyay1sYWJlbC1jb2xvcjogI2QwZDJkNiAhZGVmYXVsdDtcbiR0aGVtZS1kYXJrLXRleHQtbXV0ZWQtY29sb3I6ICM2NzZkN2QgIWRlZmF1bHQ7XG5cbi8vQ2FyZFxuJHRoZW1lLWRhcmstY2FyZC1iZzogIzI4MzA0NiAhZGVmYXVsdDtcbiR0aGVtZS1kYXJrLWJveC1zaGFkb3c6IDAgNHB4IDI0cHggMCByZ2JhKCRibGFjaywgMC4yNCk7XG5cbi8vSW5wdXRcbiR0aGVtZS1kYXJrLWlucHV0LWJnOiAjMjgzMDQ2ICFkZWZhdWx0O1xuJHRoZW1lLWRhcmstaW5wdXQtcGxhY2Vob2xkZXItY29sb3I6ICM2NzZkN2QgIWRlZmF1bHQ7XG4kdGhlbWUtZGFyay1pbnB1dC1ib3JkZXItY29sb3I6ICM0MDQ2NTYgIWRlZmF1bHQ7XG4kdGhlbWUtZGFyay1pbnB1dC1kaXNhYmxlZC1iZzogIzI0MjMzYSAhZGVmYXVsdDtcbiR0aGVtZS1kYXJrLWlucHV0LWRpc2FibGVkLWJvcmRlci1jb2xvcjogIzQ0NGI2MCAhZGVmYXVsdDtcblxuLy8gU3dpdGNoXG4kdGhlbWUtZGFyay1zd2l0Y2gtYmc6ICM1NDVhNmE7XG4kdGhlbWUtZGFyay1zd2l0Y2gtYmctZGlzYWJsZWQ6ICMxYjIzMzc7XG5cbi8vVGFibGVcbiR0aGVtZS1kYXJrLXRhYmxlLWJnOiAjMjgzMDQ2ICFkZWZhdWx0O1xuJHRoZW1lLWRhcmstdGFibGUtaGVhZGVyLWJnOiAjMzQzZDU1ICFkZWZhdWx0O1xuJHRoZW1lLWRhcmstdGFibGUtcm93LWJnOiAjMjgzMDQ2ICFkZWZhdWx0O1xuJHRoZW1lLWRhcmstdGFibGUtaG92ZXItYmc6ICMyNDJiM2QgIWRlZmF1bHQ7XG4kdGhlbWUtZGFyay10YWJsZS1zdHJpcGVkLWJnOiAjMjQyYjNkICFkZWZhdWx0O1xuXG4kdGhlbWUtZGFyay1tb2RhbC1oZWFkZXItYmc6ICMxNjFkMzEgIWRlZmF1bHQ7XG4kdGhlbWUtZGFyay1wYWdpbmF0aW9uLWJnOiAjMjQyYjNkICFkZWZhdWx0O1xuJHRoZW1lLWRhcmstY2hhcnQtYmc6ICMzODQwNTYgIWRlZmF1bHQ7XG4kdGhlbWUtZGFyay13aWRnZXQtYmc6ICMzODQwNTYgIWRlZmF1bHQ7XG4iXX0= */"],
  encapsulation: 2
});

/***/ }),

/***/ 17777:
/*!***********************************************************!*\
  !*** ./src/app/layout/components/navbar/navbar.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarModule": function() { return /* binding */ NavbarModule; }
/* harmony export */ });
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 15375);
/* harmony import */ var _core_common_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/common.module */ 75078);
/* harmony import */ var _core_components_core_touchspin_core_touchspin_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/components/core-touchspin/core-touchspin.module */ 83742);
/* harmony import */ var app_layout_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/layout/components/navbar/navbar.component */ 903);
/* harmony import */ var app_layout_components_navbar_navbar_bookmark_navbar_bookmark_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/layout/components/navbar/navbar-bookmark/navbar-bookmark.component */ 75361);
/* harmony import */ var app_layout_components_navbar_navbar_search_navbar_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/layout/components/navbar/navbar-search/navbar-search.component */ 6032);
/* harmony import */ var app_layout_components_navbar_navbar_notification_navbar_notification_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/layout/components/navbar/navbar-notification/navbar-notification.component */ 10578);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);












var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
  suppressScrollX: true,
  wheelPropagation: false
};
var NavbarModule = /*#__PURE__*/(0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function NavbarModule() {
  (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, NavbarModule);
});

NavbarModule.ɵfac = function NavbarModule_Factory(t) {
  return new (t || NavbarModule)();
};

NavbarModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
  type: NavbarModule
});
NavbarModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
  providers: [{
    provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__.PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
  }],
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbModule, _core_common_module__WEBPACK_IMPORTED_MODULE_2__.CoreCommonModule, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__.PerfectScrollbarModule, _core_components_core_touchspin_core_touchspin_module__WEBPACK_IMPORTED_MODULE_3__.CoreTouchspinModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](NavbarModule, {
    declarations: [app_layout_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__.NavbarComponent, app_layout_components_navbar_navbar_search_navbar_search_component__WEBPACK_IMPORTED_MODULE_6__.NavbarSearchComponent, app_layout_components_navbar_navbar_bookmark_navbar_bookmark_component__WEBPACK_IMPORTED_MODULE_5__.NavbarBookmarkComponent, app_layout_components_navbar_navbar_notification_navbar_notification_component__WEBPACK_IMPORTED_MODULE_7__.NavbarNotificationComponent],
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbModule, _core_common_module__WEBPACK_IMPORTED_MODULE_2__.CoreCommonModule, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__.PerfectScrollbarModule, _core_components_core_touchspin_core_touchspin_module__WEBPACK_IMPORTED_MODULE_3__.CoreTouchspinModule],
    exports: [app_layout_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__.NavbarComponent]
  });
})();

/***/ }),

/***/ 41724:
/*!**********************************************!*\
  !*** ./src/app/layout/custom-breakpoints.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomBreakPointsProvider": function() { return /* binding */ CustomBreakPointsProvider; }
/* harmony export */ });
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/flex-layout */ 75722);

var BS_BREAKPOINTS = [{
  alias: 'bs-xs',
  overlapping: false,
  mediaQuery: '(max-width: 575.98px)',
  suffix: 'BsXs'
}, {
  alias: 'bs-sm',
  overlapping: false,
  mediaQuery: '(min-width: 576px) and (max-width: 767.98px)',
  suffix: 'BsSm'
}, {
  alias: 'bs-md',
  overlapping: false,
  mediaQuery: '(min-width: 768px) and (max-width: 991.98px)',
  suffix: 'BsMd'
}, {
  alias: 'bs-lg',
  overlapping: false,
  mediaQuery: '(min-width: 992px) and (max-width: 1199.98px)',
  suffix: 'BsLg'
}, {
  alias: 'bs-xl',
  overlapping: false,
  mediaQuery: '(min-width: 1200px)',
  suffix: 'BsXl'
}, {
  alias: 'bs-gt-sm',
  overlapping: false,
  mediaQuery: '(min-width: 576px)',
  suffix: 'BsGtSm'
}, {
  alias: 'bs-gt-md',
  overlapping: false,
  mediaQuery: '(min-width: 768px)',
  suffix: 'BsGtMd'
}, {
  alias: 'bs-gt-lg',
  overlapping: false,
  mediaQuery: '(min-width: 992px)',
  suffix: 'BsGtLg'
}, {
  alias: 'bs-gt-xl',
  overlapping: false,
  mediaQuery: '(min-width: 1200px)',
  suffix: 'BsGtXl'
}, {
  alias: 'bs-lt-sm',
  overlapping: false,
  mediaQuery: '(max-width: 575.98px)',
  suffix: 'BsLtSm'
}, {
  alias: 'bs-lt-md',
  overlapping: false,
  mediaQuery: '(max-width: 767.98px)',
  suffix: 'BsLtMd'
}, {
  alias: 'bs-lt-lg',
  overlapping: false,
  mediaQuery: '(max-width: 991.98px)',
  suffix: 'BsLtLg'
}, {
  alias: 'bs-lt-xl',
  overlapping: false,
  mediaQuery: '(max-width: 1199.98px)',
  suffix: 'BsLtXl'
}];
var CustomBreakPointsProvider = {
  provide: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_0__.BREAKPOINT,
  useValue: BS_BREAKPOINTS,
  multi: true
};

/***/ }),

/***/ 54487:
/*!******************************************************************!*\
  !*** ./src/app/layout/horizontal/horizontal-layout.component.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HorizontalLayoutComponent": function() { return /* binding */ HorizontalLayoutComponent; }
/* harmony export */ });
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 85921);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/config.service */ 52553);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/extended */ 1570);
/* harmony import */ var _core_components_core_sidebar_core_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/components/core-sidebar/core-sidebar.component */ 9831);
/* harmony import */ var app_layout_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/layout/components/navbar/navbar.component */ 903);
/* harmony import */ var app_layout_components_content_content_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/layout/components/content/content.component */ 24714);
/* harmony import */ var app_layout_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/layout/components/menu/menu.component */ 92393);
/* harmony import */ var app_layout_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/layout/components/footer/footer.component */ 92223);














function HorizontalLayoutComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainer"](0);
  }
}

function HorizontalLayoutComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainer"](0);
  }
}

function HorizontalLayoutComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "div", 7);
  }
}

function HorizontalLayoutComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainer"](0);
  }
}

function HorizontalLayoutComponent_ng_template_7_app_navbar_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-navbar", 9);
  }

  if (rf & 2) {
    var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", ctx_r10.coreConfig.layout.navbar.customBackgroundColor === true ? ctx_r10.coreConfig.layout.navbar.background + " " + ctx_r10.coreConfig.layout.navbar.backgroundColor : ctx_r10.coreConfig.layout.navbar.background);
  }
}

function HorizontalLayoutComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, HorizontalLayoutComponent_ng_template_7_app_navbar_0_Template, 1, 1, "app-navbar", 8);
  }

  if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r5.coreConfig.layout.navbar.hidden);
  }
}

var _c0 = function _c0(a0, a1) {
  return [a0, a1];
};

function HorizontalLayoutComponent_ng_template_9_app_menu_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-menu", 13);
  }

  if (rf & 2) {
    var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](1, _c0, ctx_r11.coreConfig.layout.navbar.customBackgroundColor === true ? ctx_r11.coreConfig.layout.navbar.background + " " + ctx_r11.coreConfig.layout.navbar.type + " " + ctx_r11.coreConfig.layout.navbar.backgroundColor : ctx_r11.coreConfig.layout.navbar.background + " " + ctx_r11.coreConfig.layout.navbar.type, ctx_r11.coreConfig.layout.navbar.type === "floating-nav" ? "container-xxl" : ""));
  }
}

var _c1 = function _c1(a0) {
  return [a0];
};

function HorizontalLayoutComponent_ng_template_9_core_sidebar_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "core-sidebar", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-menu", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("collapsed", ctx_r12.coreConfig.layout.menu.collapsed)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](2, _c1, ctx_r12.coreConfig.layout.menu.collapsed === true ? "" : "expanded"));
  }
}

function HorizontalLayoutComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, HorizontalLayoutComponent_ng_template_9_app_menu_1_Template, 1, 4, "app-menu", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, HorizontalLayoutComponent_ng_template_9_core_sidebar_2_Template, 2, 4, "core-sidebar", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r7.coreConfig.layout.menu.hidden);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r7.coreConfig.layout.menu.hidden);
  }
}

function HorizontalLayoutComponent_ng_template_11_footer_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "footer", 17);
  }

  if (rf & 2) {
    var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", ctx_r13.coreConfig.layout.footer.customBackgroundColor === true ? ctx_r13.coreConfig.layout.footer.background + " " + ctx_r13.coreConfig.layout.footer.type + " " + ctx_r13.coreConfig.layout.footer.backgroundColor : ctx_r13.coreConfig.layout.footer.background + " " + ctx_r13.coreConfig.layout.footer.type);
  }
}

function HorizontalLayoutComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, HorizontalLayoutComponent_ng_template_11_footer_0_Template, 1, 1, "footer", 16);
  }

  if (rf & 2) {
    var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r9.coreConfig.layout.footer.hidden);
  }
}

var HorizontalLayoutComponent = /*#__PURE__*/function () {
  /**
   * Constructor
   *
   * @param {CoreConfigService} _coreConfigService
   */
  function HorizontalLayoutComponent(_coreConfigService) {
    (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HorizontalLayoutComponent);

    this._coreConfigService = _coreConfigService; // Set the private defaults

    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
  } // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */


  (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(HorizontalLayoutComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      // Subscribe to config changes
      this._coreConfigService.config.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this._unsubscribeAll)).subscribe(function (config) {
        _this.coreConfig = config;
      });
    }
    /**
     * On destroy
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      // Unsubscribe from all subscriptions
      this._unsubscribeAll.next();

      this._unsubscribeAll.complete();
    }
  }]);

  return HorizontalLayoutComponent;
}();

HorizontalLayoutComponent.ɵfac = function HorizontalLayoutComponent_Factory(t) {
  return new (t || HorizontalLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_services_config_service__WEBPACK_IMPORTED_MODULE_2__.CoreConfigService));
};

HorizontalLayoutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: HorizontalLayoutComponent,
  selectors: [["horizontal-layout"]],
  decls: 13,
  vars: 4,
  consts: [[4, "ngTemplateOutlet"], [1, "app-content", "content"], [1, "content-overlay"], ["class", "header-navbar-shadow", 4, "ngIf"], ["navbar", ""], ["menu", ""], ["footer", ""], [1, "header-navbar-shadow"], ["class", "header-navbar horizontal-header-navbar navbar-expand-lg navbar navbar-fixed align-items-center navbar-shadow navbar-brand-center", 3, "ngClass", 4, "ngIf"], [1, "header-navbar", "horizontal-header-navbar", "navbar-expand-lg", "navbar", "navbar-fixed", "align-items-center", "navbar-shadow", "navbar-brand-center", 3, "ngClass"], [1, "horizontal-menu-wrapper"], ["menuType", "horizontal-menu", "class", "header-navbar navbar-expand-sm navbar navbar-horizontal navbar-shadow menu-border d-none d-xl-block", 3, "ngClass", 4, "ngIf"], ["name", "menu", "collapsibleSidebar", "bs-gt-xl", "class", "main-menu menu-fixed menu-light menu-accordio menu-shadow d-xl-none", "overlayClass", "sidenav-overlay", 3, "collapsed", "ngClass", 4, "ngIf"], ["menuType", "horizontal-menu", 1, "header-navbar", "navbar-expand-sm", "navbar", "navbar-horizontal", "navbar-shadow", "menu-border", "d-none", "d-xl-block", 3, "ngClass"], ["name", "menu", "collapsibleSidebar", "bs-gt-xl", "overlayClass", "sidenav-overlay", 1, "main-menu", "menu-fixed", "menu-light", "menu-accordio", "menu-shadow", "d-xl-none", 3, "collapsed", "ngClass"], ["menuType", "vertical-menu", 1, "vertical-menu"], ["class", "footer", 3, "ngClass", 4, "ngIf"], [1, "footer", 3, "ngClass"]],
  template: function HorizontalLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, HorizontalLayoutComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, HorizontalLayoutComponent_ng_container_1_Template, 1, 0, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, HorizontalLayoutComponent_div_4_Template, 1, 0, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "content");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, HorizontalLayoutComponent_ng_container_6_Template, 1, 0, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, HorizontalLayoutComponent_ng_template_7_Template, 1, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, HorizontalLayoutComponent_ng_template_9_Template, 3, 2, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, HorizontalLayoutComponent_ng_template_11_Template, 1, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    }

    if (rf & 2) {
      var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](8);

      var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](10);

      var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](12);

      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngTemplateOutlet", _r4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngTemplateOutlet", _r6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.coreConfig.layout.navbar.hidden);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngTemplateOutlet", _r8);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgTemplateOutlet, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__.DefaultClassDirective, _core_components_core_sidebar_core_sidebar_component__WEBPACK_IMPORTED_MODULE_3__.CoreSidebarComponent, app_layout_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__.NavbarComponent, app_layout_components_content_content_component__WEBPACK_IMPORTED_MODULE_5__.ContentComponent, app_layout_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_6__.MenuComponent, app_layout_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__.FooterComponent],
  styles: ["/*=========================================================================================\n\tFile Name: horizontal-menu.scss\n\tDescription: A classic horizontal menu for easy navigation & support all devices.\n\tIt support light & dark version, flipped layout, right side icons, borders menu for\n\titem separation.\n\t----------------------------------------------------------------------------------------\n\tItem Name: Vuexy - Vuejs, React, Angular, HTML & Laravel Admin Dashboard TemplateTheme\n\tAuthor: PIXINVENT\n\tAuthor URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n.horizontal-menu .content {\n  margin-left: 0;\n}\n.horizontal-menu .content.show-overlay .content-overlay {\n  z-index: 998 !important;\n}\n.horizontal-menu .navbar.header-navbar .navbar-container {\n  padding: 0.8rem 2rem;\n}\n.horizontal-menu .horizontal-menu-wrapper .header-navbar {\n  min-height: 4.45rem;\n}\n.horizontal-menu footer {\n  position: static;\n}\n.horizontal-menu .horizontal-menu-wrapper {\n  position: fixed;\n  top: 62px;\n  z-index: 990;\n  width: 100%;\n}\n.horizontal-menu .horizontal-menu-wrapper .header-navbar .navbar-container {\n  padding: 0 1rem;\n  width: 100%;\n}\n.horizontal-menu .horizontal-menu-wrapper .header-navbar .navbar-header {\n  display: none;\n}\n.horizontal-menu .header-navbar {\n  background: #fff;\n  z-index: 999 !important;\n  line-height: 1;\n  min-height: auto;\n}\n.horizontal-menu .header-navbar.navbar-light {\n  background: #fff;\n}\n.horizontal-menu .header-navbar.navbar-horizontal.floating-nav {\n  left: 0;\n  top: 62px;\n  width: calc(100vw - (100vw - 100%) - (2rem * 2));\n  background: #fff;\n}\n.horizontal-menu .header-navbar .navbar-container {\n  border-radius: 0.357rem;\n}\n.horizontal-menu .header-navbar.navbar-fixed {\n  position: fixed;\n  width: 100%;\n}\n.horizontal-menu .header-navbar.navbar-brand-center .navbar-header {\n  position: absolute;\n  left: calc(50% - 56px);\n  padding: 0;\n  z-index: 1000;\n}\n.horizontal-menu .header-navbar.navbar-brand-center .navbar-header .navbar-brand {\n  display: flex;\n  align-items: center;\n  margin-right: 0;\n  font-size: inherit;\n}\n.horizontal-menu .header-navbar.navbar-brand-center .navbar-header .navbar-brand .brand-logo img {\n  max-width: 36px;\n}\n.horizontal-menu .header-navbar.navbar-brand-center .navbar-header .navbar-brand .brand-text {\n  color: #4186e0;\n  padding-left: 1rem;\n  margin-bottom: 0;\n  font-weight: 600;\n  letter-spacing: 0.01rem;\n  font-size: 1.45rem;\n}\n.horizontal-menu .header-navbar.navbar-horizontal .nav-link.dropdown-toggle::after {\n  left: 0.4rem;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236e6b7b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n}\n.horizontal-menu .header-navbar.navbar-horizontal .sidebar-group-active .dropdown-toggle::after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n}\n.horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu::before {\n  display: none;\n}\n.horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu {\n  min-width: 215px;\n  border: none;\n  margin-top: 0;\n  min-height: 52px;\n}\n.horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu .disabled {\n  pointer-events: none !important;\n}\n.horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu .disabled a {\n  color: #b8c2cc;\n}\n.horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu .dropdown-toggle::after {\n  left: auto;\n  position: absolute;\n  top: 50%;\n  margin-top: -7px;\n  right: 1rem;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236e6b7b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E\");\n}\n.horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu .dropdown-item {\n  font-size: 1rem;\n  padding-top: 0.68rem;\n  padding-bottom: 0.68rem;\n  display: flex;\n  align-items: center;\n}\n.horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu .dropdown-submenu {\n  position: relative;\n}\n.horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu .dropdown-submenu.openLeft .dropdown-menu {\n  left: auto !important;\n  right: 100% !important;\n}\n.horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu .dropdown-submenu.sidebar-group-active {\n  background: #f8f8f8;\n}\n.horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu .dropdown-submenu > .dropdown-menu {\n  position: absolute;\n  top: 0 !important;\n  left: 100% !important;\n}\n.horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu .dropdown-submenu > .dropdown-menu i,\n.horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu .dropdown-submenu > .dropdown-menu svg {\n  height: 11px !important;\n  width: 11px !important;\n  font-size: 11px !important;\n}\n.horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li {\n  padding-top: 0.857rem;\n  padding-bottom: 0.857rem;\n}\n.horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li > .dropdown-menu a > * {\n  transition: all 0.2s ease;\n}\n.horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li > .dropdown-menu a:hover {\n  background-color: transparent;\n  color: #6e6b7b;\n}\n.horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li > .dropdown-menu a:hover > * {\n  transform: translateX(5px);\n  transition: transform 0.2s ease;\n}\n.horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li > .dropdown-menu .active > a {\n  background: #f8f8f8;\n  color: #4186e0;\n  font-weight: 500;\n}\n.horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li > .dropdown-menu .open.active > a {\n  color: #6e6b7b;\n  font-weight: normal;\n}\n.horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li i,\n.horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li svg {\n  margin-right: 0.5rem;\n  height: 17px;\n  width: 17px;\n  font-size: 1.2rem;\n}\n.horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li > a {\n  padding: 0.715rem 1.25rem;\n  display: flex;\n  margin-right: 0.715rem;\n}\n.horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li:hover > a {\n  background: #f8f8f8;\n  border-radius: 4px;\n}\n.horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li.active > a {\n  background: linear-gradient(118deg, #4186e0, rgba(65, 134, 224, 0.7));\n  box-shadow: 0px 0px 6px 1px rgba(65, 134, 224, 0.6);\n  color: #fff;\n  border-radius: 4px;\n}\n.horizontal-menu .navigation-header {\n  font-family: inherit;\n  color: #929292;\n  padding: 8px 20px;\n  font-size: 1rem;\n  text-transform: uppercase;\n}\n.horizontal-menu .navbar-dark .nav-item.active > a {\n  border-bottom: 2px solid #4186e0;\n  background-color: #313c50;\n}\n.horizontal-layout.navbar-floating .header-navbar-shadow {\n  height: 80px;\n}\n@media (min-width: 1200px) {\n  .horizontal-layout.navbar-floating .header-navbar-shadow {\n    top: 45px;\n  }\n}\n.horizontal-layout.navbar-floating:not(.blank-page) .app-content {\n  padding: calc(2rem + 4.45rem* 2 + 1.3rem) 2rem 0 2rem;\n}\n.horizontal-layout.navbar-floating .horizontal-menu-wrapper {\n  background: linear-gradient(to bottom, rgba(248, 248, 248, 0.95) 44%, rgba(248, 248, 248, 0.46) 73%, rgba(255, 255, 255, 0) 100%);\n  background-repeat: repeat-x;\n}\n.horizontal-layout.navbar-floating.footer-static .app-content .content-area-wrapper,\n.horizontal-layout.navbar-floating.footer-static .app-content .kanban-wrapper {\n  height: calc(100vh - (\n        calc(2rem * 1) + 4.45rem + 3.35rem + 1.3rem + 4.45rem\n      ));\n  height: calc(1vh * 100 - (\n        calc(2rem * 1) + 4.45rem + 3.35rem + 1.3rem + 4.45rem\n      ));\n  height: calc(var(--vh, 1vh) * 100 - (\n        calc(2rem * 1) + 4.45rem + 3.35rem + 1.3rem + 4.45rem\n      ));\n}\n@media (max-width: 1199.98px) {\n  .horizontal-layout.navbar-floating.footer-static .app-content .content-area-wrapper,\n.horizontal-layout.navbar-floating.footer-static .app-content .kanban-wrapper {\n    height: calc(100vh - (calc(calc(2rem - 0.8rem) * 1) + 4.45rem + 3.35rem));\n    height: calc(1vh * 100 - (calc(calc(2rem - 0.8rem) * 1) + 4.45rem + 3.35rem));\n    height: calc(var(--vh, 1vh) * 100 - (calc(calc(2rem - 0.8rem) * 1) + 4.45rem + 3.35rem));\n  }\n}\n.horizontal-layout.navbar-floating.footer-hidden .app-content .content-area-wrapper,\n.horizontal-layout.navbar-floating.footer-hidden .app-content .kanban-wrapper {\n  height: calc(100vh - (\n        calc(2rem * 2) + 4.45rem + 0rem + 1.3rem + 4.45rem\n      ));\n  height: calc(1vh * 100 - (\n        calc(2rem * 2) + 4.45rem + 0rem + 1.3rem + 4.45rem\n      ));\n  height: calc(var(--vh, 1vh) * 100 - (\n        calc(2rem * 2) + 4.45rem + 0rem + 1.3rem + 4.45rem\n      ));\n}\n@media (max-width: 1199.98px) {\n  .horizontal-layout.navbar-floating.footer-hidden .app-content .content-area-wrapper,\n.horizontal-layout.navbar-floating.footer-hidden .app-content .kanban-wrapper {\n    height: calc(100vh - (calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 0rem));\n    height: calc(1vh * 100 - (calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 0rem));\n    height: calc(var(--vh, 1vh) * 100 - (calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 0rem));\n  }\n}\n.horizontal-layout.navbar-floating.footer-fixed .app-content .content-area-wrapper,\n.horizontal-layout.navbar-floating.footer-fixed .app-content .kanban-wrapper {\n  height: calc(100vh - (\n        calc(2rem * 2) + 4.45rem + 3.35rem + 1.3rem + 4.45rem\n      ));\n  height: calc(1vh * 100 - (\n        calc(2rem * 2) + 4.45rem + 3.35rem + 1.3rem + 4.45rem\n      ));\n  height: calc(var(--vh, 1vh) * 100 - (\n        calc(2rem * 2) + 4.45rem + 3.35rem + 1.3rem + 4.45rem\n      ));\n}\n@media (max-width: 1199.98px) {\n  .horizontal-layout.navbar-floating.footer-fixed .app-content .content-area-wrapper,\n.horizontal-layout.navbar-floating.footer-fixed .app-content .kanban-wrapper {\n    height: calc(100vh - (calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 3.35rem));\n    height: calc(1vh * 100 - (calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 3.35rem));\n    height: calc(var(--vh, 1vh) * 100 - (calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 3.35rem));\n  }\n}\n.horizontal-layout.navbar-sticky .app-content {\n  padding: calc(2rem + 4.45rem* 2) 2rem 0 2rem;\n}\n.horizontal-layout.navbar-sticky .header-navbar {\n  background-color: #f8f8f8;\n  box-shadow: none;\n}\n.horizontal-layout.navbar-sticky .horizontal-menu-wrapper .navbar-horizontal.header-navbar.fixed-top {\n  left: 0;\n  top: 62px;\n  background-color: #fff;\n  box-shadow: 0 4px 24px 0 rgba(34, 41, 47, 0.1);\n}\n.horizontal-layout.navbar-sticky.footer-static .app-content .content-area-wrapper,\n.horizontal-layout.navbar-sticky.footer-static .app-content .kanban-wrapper {\n  height: calc(100vh - (\n        calc(2rem * 1) + 4.45rem + 3.35rem + 0rem + 4.45rem\n      ));\n  height: calc(1vh * 100 - (\n        calc(2rem * 1) + 4.45rem + 3.35rem + 0rem + 4.45rem\n      ));\n  height: calc(var(--vh, 1vh) * 100 - (\n        calc(2rem * 1) + 4.45rem + 3.35rem + 0rem + 4.45rem\n      ));\n}\n@media (max-width: 1199.98px) {\n  .horizontal-layout.navbar-sticky.footer-static .app-content .content-area-wrapper,\n.horizontal-layout.navbar-sticky.footer-static .app-content .kanban-wrapper {\n    height: calc(100vh - (calc(calc(2rem - 0.8rem) * 1) + 4.45rem + 3.35rem));\n    height: calc(1vh * 100 - (calc(calc(2rem - 0.8rem) * 1) + 4.45rem + 3.35rem));\n    height: calc(var(--vh, 1vh) * 100 - (calc(calc(2rem - 0.8rem) * 1) + 4.45rem + 3.35rem));\n  }\n}\n.horizontal-layout.navbar-sticky.footer-hidden .app-content .content-area-wrapper,\n.horizontal-layout.navbar-sticky.footer-hidden .app-content .kanban-wrapper {\n  height: calc(100vh - (\n        calc(2rem * 2) + 4.45rem + 0rem + 0rem + 4.45rem\n      ));\n  height: calc(1vh * 100 - (\n        calc(2rem * 2) + 4.45rem + 0rem + 0rem + 4.45rem\n      ));\n  height: calc(var(--vh, 1vh) * 100 - (\n        calc(2rem * 2) + 4.45rem + 0rem + 0rem + 4.45rem\n      ));\n}\n@media (max-width: 1199.98px) {\n  .horizontal-layout.navbar-sticky.footer-hidden .app-content .content-area-wrapper,\n.horizontal-layout.navbar-sticky.footer-hidden .app-content .kanban-wrapper {\n    height: calc(100vh - (calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 0rem));\n    height: calc(1vh * 100 - (calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 0rem));\n    height: calc(var(--vh, 1vh) * 100 - (calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 0rem));\n  }\n}\n.horizontal-layout.navbar-sticky.footer-fixed .app-content .content-area-wrapper,\n.horizontal-layout.navbar-sticky.footer-fixed .app-content .kanban-wrapper {\n  height: calc(100vh - (\n        calc(2rem * 2) + 4.45rem + 3.35rem + 0rem + 4.45rem\n      ));\n  height: calc(1vh * 100 - (\n        calc(2rem * 2) + 4.45rem + 3.35rem + 0rem + 4.45rem\n      ));\n  height: calc(var(--vh, 1vh) * 100 - (\n        calc(2rem * 2) + 4.45rem + 3.35rem + 0rem + 4.45rem\n      ));\n}\n@media (max-width: 1199.98px) {\n  .horizontal-layout.navbar-sticky.footer-fixed .app-content .content-area-wrapper,\n.horizontal-layout.navbar-sticky.footer-fixed .app-content .kanban-wrapper {\n    height: calc(100vh - (calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 3.35rem));\n    height: calc(1vh * 100 - (calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 3.35rem));\n    height: calc(var(--vh, 1vh) * 100 - (calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 3.35rem));\n  }\n}\n.horizontal-layout.navbar-static .app-content {\n  padding: calc(2rem + 4.45rem) 2rem 0 2rem;\n}\n.horizontal-layout.navbar-static .content {\n  min-height: calc(100% - (4.45rem + calc(3.35rem + 0.2rem)));\n}\n.horizontal-layout.navbar-static .header-navbar {\n  background-color: #f8f8f8;\n  box-shadow: none;\n}\n.horizontal-layout.navbar-static .horizontal-menu-wrapper {\n  position: relative;\n}\n.horizontal-layout.navbar-static .horizontal-menu-wrapper .navbar-horizontal.header-navbar {\n  background: #fff;\n}\n.horizontal-layout.navbar-static .horizontal-menu-wrapper .navbar-horizontal.header-navbar.navbar-static-top {\n  left: 0;\n  width: 100%;\n}\n.horizontal-layout.navbar-static.footer-static .app-content .content-area-wrapper,\n.horizontal-layout.navbar-static.footer-static .app-content .kanban-wrapper {\n  height: calc(100vh - (\n        calc(2rem * 1) + 4.45rem + calc(3.35rem + 0.2rem) + 0rem + 4.45rem\n      ));\n  height: calc(1vh * 100 - (\n        calc(2rem * 1) + 4.45rem + calc(3.35rem + 0.2rem) + 0rem + 4.45rem\n      ));\n  height: calc(var(--vh, 1vh) * 100 - (\n        calc(2rem * 1) + 4.45rem + calc(3.35rem + 0.2rem) + 0rem + 4.45rem\n      ));\n}\n@media (max-width: 1199.98px) {\n  .horizontal-layout.navbar-static.footer-static .app-content .content-area-wrapper,\n.horizontal-layout.navbar-static.footer-static .app-content .kanban-wrapper {\n    height: calc(100vh - (calc(calc(2rem - 0.8rem) * 1) + 4.45rem + calc(3.35rem + 0.2rem)));\n    height: calc(1vh * 100 - (calc(calc(2rem - 0.8rem) * 1) + 4.45rem + calc(3.35rem + 0.2rem)));\n    height: calc(var(--vh, 1vh) * 100 - (calc(calc(2rem - 0.8rem) * 1) + 4.45rem + calc(3.35rem + 0.2rem)));\n  }\n}\n.horizontal-layout.navbar-static.footer-hidden .app-content .content-area-wrapper,\n.horizontal-layout.navbar-static.footer-hidden .app-content .kanban-wrapper {\n  height: calc(100vh - (\n        calc(2rem * 2) + 4.45rem + 0rem + 0rem + 4.45rem\n      ));\n  height: calc(1vh * 100 - (\n        calc(2rem * 2) + 4.45rem + 0rem + 0rem + 4.45rem\n      ));\n  height: calc(var(--vh, 1vh) * 100 - (\n        calc(2rem * 2) + 4.45rem + 0rem + 0rem + 4.45rem\n      ));\n}\n@media (max-width: 1199.98px) {\n  .horizontal-layout.navbar-static.footer-hidden .app-content .content-area-wrapper,\n.horizontal-layout.navbar-static.footer-hidden .app-content .kanban-wrapper {\n    height: calc(100vh - (calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 0rem));\n    height: calc(1vh * 100 - (calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 0rem));\n    height: calc(var(--vh, 1vh) * 100 - (calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 0rem));\n  }\n}\n.horizontal-layout.navbar-static.footer-fixed .app-content .content-area-wrapper,\n.horizontal-layout.navbar-static.footer-fixed .app-content .kanban-wrapper {\n  height: calc(100vh - (\n        calc(2rem * 2) + 4.45rem + 3.35rem + 0rem + 4.45rem\n      ));\n  height: calc(1vh * 100 - (\n        calc(2rem * 2) + 4.45rem + 3.35rem + 0rem + 4.45rem\n      ));\n  height: calc(var(--vh, 1vh) * 100 - (\n        calc(2rem * 2) + 4.45rem + 3.35rem + 0rem + 4.45rem\n      ));\n}\n@media (max-width: 1199.98px) {\n  .horizontal-layout.navbar-static.footer-fixed .app-content .content-area-wrapper,\n.horizontal-layout.navbar-static.footer-fixed .app-content .kanban-wrapper {\n    height: calc(100vh - (calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 3.35rem));\n    height: calc(1vh * 100 - (calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 3.35rem));\n    height: calc(var(--vh, 1vh) * 100 - (calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 3.35rem));\n  }\n}\n.horizontal-layout.navbar-hidden.footer-static .app-content .content-area-wrapper,\n.horizontal-layout.navbar-hidden.footer-static .app-content .kanban-wrapper {\n  height: calc(100vh - (\n        calc(2rem * 1) + 0rem + 3.35rem + 0rem + 4.45rem\n      ));\n  height: calc(1vh * 100 - (\n        calc(2rem * 1) + 0rem + 3.35rem + 0rem + 4.45rem\n      ));\n  height: calc(var(--vh, 1vh) * 100 - (\n        calc(2rem * 1) + 0rem + 3.35rem + 0rem + 4.45rem\n      ));\n}\n@media (max-width: 1199.98px) {\n  .horizontal-layout.navbar-hidden.footer-static .app-content .content-area-wrapper,\n.horizontal-layout.navbar-hidden.footer-static .app-content .kanban-wrapper {\n    height: calc(100vh - (calc(calc(2rem - 0.8rem) * 1) + 0rem + 3.35rem));\n    height: calc(1vh * 100 - (calc(calc(2rem - 0.8rem) * 1) + 0rem + 3.35rem));\n    height: calc(var(--vh, 1vh) * 100 - (calc(calc(2rem - 0.8rem) * 1) + 0rem + 3.35rem));\n  }\n}\n.horizontal-layout.navbar-hidden.footer-hidden .app-content .content-area-wrapper,\n.horizontal-layout.navbar-hidden.footer-hidden .app-content .kanban-wrapper {\n  height: calc(100vh - (\n        calc(2rem * 2) + 0rem + 0rem + 0rem + 4.45rem\n      ));\n  height: calc(1vh * 100 - (\n        calc(2rem * 2) + 0rem + 0rem + 0rem + 4.45rem\n      ));\n  height: calc(var(--vh, 1vh) * 100 - (\n        calc(2rem * 2) + 0rem + 0rem + 0rem + 4.45rem\n      ));\n}\n@media (max-width: 1199.98px) {\n  .horizontal-layout.navbar-hidden.footer-hidden .app-content .content-area-wrapper,\n.horizontal-layout.navbar-hidden.footer-hidden .app-content .kanban-wrapper {\n    height: calc(100vh - (calc(calc(2rem - 0.8rem) * 2) + 0rem + 0rem));\n    height: calc(1vh * 100 - (calc(calc(2rem - 0.8rem) * 2) + 0rem + 0rem));\n    height: calc(var(--vh, 1vh) * 100 - (calc(calc(2rem - 0.8rem) * 2) + 0rem + 0rem));\n  }\n}\n.horizontal-layout.navbar-hidden.footer-fixed .app-content .content-area-wrapper,\n.horizontal-layout.navbar-hidden.footer-fixed .app-content .kanban-wrapper {\n  height: calc(100vh - (\n        calc(2rem * 2) + 0rem + 3.35rem + 0rem + 4.45rem\n      ));\n  height: calc(1vh * 100 - (\n        calc(2rem * 2) + 0rem + 3.35rem + 0rem + 4.45rem\n      ));\n  height: calc(var(--vh, 1vh) * 100 - (\n        calc(2rem * 2) + 0rem + 3.35rem + 0rem + 4.45rem\n      ));\n}\n@media (max-width: 1199.98px) {\n  .horizontal-layout.navbar-hidden.footer-fixed .app-content .content-area-wrapper,\n.horizontal-layout.navbar-hidden.footer-fixed .app-content .kanban-wrapper {\n    height: calc(100vh - (calc(calc(2rem - 0.8rem) * 2) + 0rem + 3.35rem));\n    height: calc(1vh * 100 - (calc(calc(2rem - 0.8rem) * 2) + 0rem + 3.35rem));\n    height: calc(var(--vh, 1vh) * 100 - (calc(calc(2rem - 0.8rem) * 2) + 0rem + 3.35rem));\n  }\n}\n.horizontal-layout.vertical-overlay-menu #main-menu-navigation > li > ul > li > a i,\n.horizontal-layout.vertical-overlay-menu #main-menu-navigation > li > ul > li > a svg {\n  height: 1rem;\n  width: 1rem;\n  font-size: 1rem;\n}\n@media (max-width: 1199.98px) {\n  .horizontal-layout.horizontal-menu .horizontal-menu-wrapper .header-navbar {\n    display: none;\n  }\n  .horizontal-layout .header-navbar {\n    background: #fff;\n  }\n  .horizontal-layout .app-content {\n    padding: calc(4.45rem + calc(2rem - 0.8rem)) calc(2rem - 0.8rem) 0 calc(2rem - 0.8rem) !important;\n  }\n}\n@media (max-width: 575.98px) {\n  html body.horizontal-layout.navbar-static .app-content {\n    padding: calc(2rem - 0.8rem + 4.45rem) calc(2rem - 0.8rem) 0 calc(2rem - 0.8rem) !important;\n  }\n}\n/*=========================================================================================\n    File Name: vertical-overlay-menu.scss\n    Description: A overlay style vertical menu with show and hide support. It support\n    light & dark version, filpped layout, right side icons, native scroll and borders menu\n    item seperation.\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, React, Angular, HTML & Laravel Admin Dashboard Template\n    Author: PIXINVENT\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n.vertical-overlay-menu .content {\n  margin-left: 0;\n}\n.vertical-overlay-menu .navbar .navbar-header {\n  float: left;\n  width: 260px;\n}\n.vertical-overlay-menu .main-menu, .vertical-overlay-menu.menu-hide .main-menu {\n  opacity: 0;\n  transform: translate3d(0, 0, 0);\n  transition: width 0.25s, opacity 0.25s, transform 0.25s;\n  width: 260px;\n  left: -260px;\n}\n.vertical-overlay-menu .main-menu .navigation > li > a > svg,\n.vertical-overlay-menu .main-menu .navigation > li > a > i {\n  margin-right: 14px;\n  float: left;\n  transition: 200ms ease all;\n  height: 20px;\n  width: 20px;\n}\n.vertical-overlay-menu .main-menu .navigation > li > a > svg:before,\n.vertical-overlay-menu .main-menu .navigation > li > a > i:before {\n  transition: 200ms ease all;\n  font-size: 1.429rem;\n}\n.vertical-overlay-menu .main-menu .navigation li.has-sub > a:after {\n  content: \"\";\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236e6b7b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 1rem;\n  height: 1rem;\n  width: 1rem;\n  display: inline-block;\n  position: absolute;\n  right: 20px;\n  top: 14px;\n  transform: rotate(0deg);\n  transition: all 0.2s ease-out;\n}\n.vertical-overlay-menu .main-menu .navigation li.has-sub.open:not(.menu-item-closing) > a:after {\n  transform: rotate(90deg);\n}\n.vertical-overlay-menu .main-menu .navigation .navigation-header .feather-more-horizontal {\n  display: none;\n}\n.vertical-overlay-menu.menu-open .main-menu {\n  opacity: 1;\n  transform: translate3d(260px, 0, 0);\n  transition: width 0.25s, opacity 0.25s, transform 0.25s;\n}\n/*=========================================================================================\n    File Name: vertical-overlay-menu.scss\n    Description: A overlay style vertical menu with show and hide support. It support\n    light & dark version, filpped layout, right side icons, native scroll and borders menu\n    item seperation.\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, React, Angular, HTML & Laravel Admin Dashboard Template\n    Author: PIXINVENT\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n.vertical-overlay-menu .content {\n  margin-left: 0;\n}\n.vertical-overlay-menu .navbar .navbar-header {\n  float: left;\n  width: 260px;\n}\n.vertical-overlay-menu .main-menu, .vertical-overlay-menu.menu-hide .main-menu {\n  opacity: 0;\n  transform: translate3d(0, 0, 0);\n  transition: width 0.25s, opacity 0.25s, transform 0.25s;\n  width: 260px;\n  left: -260px;\n}\n.vertical-overlay-menu .main-menu .navigation > li > a > svg,\n.vertical-overlay-menu .main-menu .navigation > li > a > i {\n  margin-right: 14px;\n  float: left;\n  transition: 200ms ease all;\n  height: 20px;\n  width: 20px;\n}\n.vertical-overlay-menu .main-menu .navigation > li > a > svg:before,\n.vertical-overlay-menu .main-menu .navigation > li > a > i:before {\n  transition: 200ms ease all;\n  font-size: 1.429rem;\n}\n.vertical-overlay-menu .main-menu .navigation li.has-sub > a:after {\n  content: \"\";\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236e6b7b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 1rem;\n  height: 1rem;\n  width: 1rem;\n  display: inline-block;\n  position: absolute;\n  right: 20px;\n  top: 14px;\n  transform: rotate(0deg);\n  transition: all 0.2s ease-out;\n}\n.vertical-overlay-menu .main-menu .navigation li.has-sub.open:not(.menu-item-closing) > a:after {\n  transform: rotate(90deg);\n}\n.vertical-overlay-menu .main-menu .navigation .navigation-header .feather-more-horizontal {\n  display: none;\n}\n.vertical-overlay-menu.menu-open .main-menu {\n  opacity: 1;\n  transform: translate3d(260px, 0, 0);\n  transition: width 0.25s, opacity 0.25s, transform 0.25s;\n}\n.horizontal-layout .horizontal-header-navbar .navbar-container ul.navbar-nav li.dropdown .dropdown-menu {\n  top: 41px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL0Bjb3JlL3Njc3MvYmFzZS9jb3JlL21lbnUvbWVudS10eXBlcy9ob3Jpem9udGFsLW1lbnUuc2NzcyIsImhvcml6b250YWwtbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vQGNvcmUvc2Nzcy9iYXNlL2NvbXBvbmVudHMvX3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vLi4vQGNvcmUvc2Nzcy9iYXNlL2Jvb3RzdHJhcC1leHRlbmRlZC9fdmFyaWFibGVzLnNjc3MiLCIuLi8uLi8uLi9hc3NldHMvc2Nzcy92YXJpYWJsZXMvX3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL21peGlucy9fYnJlYWtwb2ludHMuc2NzcyIsIi4uLy4uLy4uL0Bjb3JlL3Njc3MvYmFzZS9jb3JlL21peGlucy9tYWluLW1lbnUtbWl4aW4uc2NzcyIsIi4uLy4uLy4uL0Bjb3JlL3Njc3MvYmFzZS9jb3JlL21lbnUvbWVudS10eXBlcy92ZXJ0aWNhbC1vdmVybGF5LW1lbnUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OzJGQUFBO0FBcUJFO0VBQ0UsY0FBQTtBQ1ZKO0FEWU07RUFDRSx1QkFBQTtBQ1ZSO0FEaUJJO0VBQ0Usb0JBQUE7QUNmTjtBRG9CSTtFQUNFLG1CRVJtQjtBRFZ6QjtBRHNCRTtFQUNFLGdCQUFBO0FDcEJKO0FEMEJFO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ3hCSjtBRDJCTTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FDekJSO0FEMkJNO0VBQ0UsYUFBQTtBQ3pCUjtBRDZCRTtFQUNFLGdCR3hESTtFSHlESix1QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQzNCSjtBRDRCSTtFQUNFLGdCRzdERTtBRm1DUjtBRDhCSTtFQUNFLE9BQUE7RUFDQSxTQUFBO0VBQ0EsZ0RBQUE7RUFDQSxnQkdyRUU7QUZ5Q1I7QUQ4Qkk7RUFDRSx1Qkc0Q1U7QUZ4RWhCO0FEOEJJO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUM1Qk47QUQrQk07RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUM3QlI7QUQ4QlE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUM1QlY7QUQ2QlU7RUFDRSxlQUFBO0FDM0JaO0FEK0JVO0VBQ0UsY0lyR0Y7RUpzR0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQzdCWjtBRHNDVTtFQUNFLFlBQUE7RUFDQSwrU0FBQTtBQ3BDWjtBRDBDVTtFQUNFLDRTQUFBO0FDeENaO0FENENNO0VBQ0UsYUFBQTtBQzFDUjtBRDRDTTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQzFDUjtBRDJDUTtFQUNFLCtCQUFBO0FDekNWO0FEMENVO0VBQ0UsY0c5SEQ7QUZzRlg7QUQyQ1E7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBRUEsZ1RBQUE7QUMxQ1Y7QUQ0Q1E7RUFDRSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQzFDVjtBRDRDUTtFQUNFLGtCQUFBO0FDMUNWO0FENkNZO0VBQ0UscUJBQUE7RUFDQSxzQkFBQTtBQzNDZDtBRCtDVTtFQUNFLG1CR3pFRjtBRjRCVjtBRGdEVTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQzlDWjtBRCtDWTs7RUFFRSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7QUM3Q2Q7QURrRE07RUFDRSxxQkFBQTtFQUNBLHdCQUFBO0FDaERSO0FEb0RZO0VBQ0UseUJBQUE7QUNsRGQ7QURvRFk7RUFDRSw2QkFBQTtFQUNBLGNHbkdEO0FGaURiO0FEbURjO0VBQ0UsMEJBQUE7RUFDQSwrQkFBQTtBQ2pEaEI7QURxRFU7RUFDRSxtQkc1R0Y7RUg2R0UsY0k3TUY7RUo4TUUsZ0JBQUE7QUNuRFo7QUR1RGM7RUFDRSxjR2xISDtFSG1IRyxtQkFBQTtBQ3JEaEI7QUQwRFE7O0VBRUUsb0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDeERWO0FEMERRO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUN4RFY7QUQyRFU7RUFDRSxtQkd2SUY7RUh3SUUsa0JBQUE7QUN6RFo7QUQ2RFU7RUFDRSxxRUFBQTtFQUNBLG1EQUFBO0VBQ0EsV0d6T0o7RUgwT0ksa0JBQUE7QUMzRFo7QURrRUU7RUFDRSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQ2hFSjtBRHFFTTtFQUNFLGdDQUFBO0VBQ0EseUJBQUE7QUNuRVI7QUQ2RUk7RUFDRSxZQUFBO0FDMUVOO0FJN0lJO0VMME5FO0lBQ0UsU0FBQTtFQzFFTjtBQUNGO0FENkVNO0VBRUUscURBQUE7QUM1RVI7QUQrRUk7RUFDRSxpSUFBQTtFQU1BLDJCQUFBO0FDbEZOO0FENkZROztFTWhQTjs7UUFBQTtFQU1BOztRQUFBO0VBQUE7O1FBQUE7QUxzSkY7QUlySkk7RUx5T0k7O0lNak9GLHlFQUFBO0lBR0EsNkVBQUE7SUFBQSx3RkFBQTtFTGdKSjtBQUNGO0FENkZROztFTWhRTjs7UUFBQTtFQU1BOztRQUFBO0VBQUE7O1FBQUE7QUxzS0Y7QUlyS0k7RUx5UEk7O0lNalBGLHNFQUFBO0lBR0EsMEVBQUE7SUFBQSxxRkFBQTtFTGdLSjtBQUNGO0FENkZROztFTWhSTjs7UUFBQTtFQU1BOztRQUFBO0VBQUE7O1FBQUE7QUxzTEY7QUlyTEk7RUx5UUk7O0lNalFGLHlFQUFBO0lBR0EsNkVBQUE7SUFBQSx3RkFBQTtFTGdMSjtBQUNGO0FEK0ZJO0VBQ0UsNENBQUE7QUM3Rk47QUQrRkk7RUFDRSx5QkduUUk7RUhvUUosZ0JBQUE7QUM3Rk47QURnR007RUFDRSxPQUFBO0VBQ0EsU0FBQTtFQUNBLHNCR3BXQTtFSHFXQSw4Q0FBQTtBQzlGUjtBRHFHUTs7RU1yVE47O1FBQUE7RUFNQTs7UUFBQTtFQUFBOztRQUFBO0FMbU5GO0FJbE5JO0VMOFNJOztJTXRTRix5RUFBQTtJQUdBLDZFQUFBO0lBQUEsd0ZBQUE7RUw2TUo7QUFDRjtBRHFHUTs7RU1yVU47O1FBQUE7RUFNQTs7UUFBQTtFQUFBOztRQUFBO0FMbU9GO0FJbE9JO0VMOFRJOztJTXRURixzRUFBQTtJQUdBLDBFQUFBO0lBQUEscUZBQUE7RUw2Tko7QUFDRjtBRHFHUTs7RU1yVk47O1FBQUE7RUFNQTs7UUFBQTtFQUFBOztRQUFBO0FMbVBGO0FJbFBJO0VMOFVJOztJTXRVRix5RUFBQTtJQUdBLDZFQUFBO0lBQUEsd0ZBQUE7RUw2T0o7QUFDRjtBRHNHSTtFQUNFLHlDQUFBO0FDcEdOO0FEc0dJO0VBQ0UsMkRBQUE7QUNwR047QURzR0k7RUFDRSx5QkcxVUk7RUgyVUosZ0JBQUE7QUNwR047QURzR0k7RUFDRSxrQkFBQTtBQ3BHTjtBRHFHTTtFQUNFLGdCRzFhQTtBRnVVUjtBRHFHUTtFQUNFLE9BQUE7RUFDQSxXQUFBO0FDbkdWO0FEMEdROztFTTlYTjs7UUFBQTtFQU1BOztRQUFBO0VBQUE7O1FBQUE7QUx1UkY7QUl0Ukk7RUx1WEk7O0lNL1dGLHdGQUFBO0lBR0EsNEZBQUE7SUFBQSx1R0FBQTtFTGlSSjtBQUNGO0FEMEdROztFTTlZTjs7UUFBQTtFQU1BOztRQUFBO0VBQUE7O1FBQUE7QUx1U0Y7QUl0U0k7RUx1WUk7O0lNL1hGLHNFQUFBO0lBR0EsMEVBQUE7SUFBQSxxRkFBQTtFTGlTSjtBQUNGO0FEMEdROztFTTlaTjs7UUFBQTtFQU1BOztRQUFBO0VBQUE7O1FBQUE7QUx1VEY7QUl0VEk7RUx1Wkk7O0lNL1lGLHlFQUFBO0lBR0EsNkVBQUE7SUFBQSx3RkFBQTtFTGlUSjtBQUNGO0FEOEdROztFTWxiTjs7UUFBQTtFQU1BOztRQUFBO0VBQUE7O1FBQUE7QUx1VUY7QUl0VUk7RUwyYUk7O0lNbmFGLHNFQUFBO0lBR0EsMEVBQUE7SUFBQSxxRkFBQTtFTGlVSjtBQUNGO0FEOEdROztFTWxjTjs7UUFBQTtFQU1BOztRQUFBO0VBQUE7O1FBQUE7QUx1VkY7QUl0Vkk7RUwyYkk7O0lNbmJGLG1FQUFBO0lBR0EsdUVBQUE7SUFBQSxrRkFBQTtFTGlWSjtBQUNGO0FEOEdROztFTWxkTjs7UUFBQTtFQU1BOztRQUFBO0VBQUE7O1FBQUE7QUx1V0Y7QUl0V0k7RUwyY0k7O0lNbmNGLHNFQUFBO0lBR0EsMEVBQUE7SUFBQSxxRkFBQTtFTGlXSjtBQUNGO0FEb0hjOztFQUVFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ2xIaEI7QUluWEk7RUxvZkk7SUFDRSxhQUFBO0VDN0hSO0VEaUlFO0lBQ0UsZ0JHeGpCRTtFRnliTjtFRGlJRTtJQUNFLGlHQUFBO0VDL0hKO0FBQ0Y7QUkvWEk7RUxxZ0JGO0lBQ0UsMkZBQUE7RUNuSUY7QUFDRjtBTTdjQTs7Ozs7Ozs7OzJGQUFBO0FBcUJFO0VETkEsY0NPMkI7QU5vYzdCO0FNaGNJO0VEUkYsV0FBQTtFQUNBLFlKNkJvQjtBRDhhdEI7QU0vYkU7RUFDRSxVQUFBO0VBQ0EsK0JBQUE7RUFDQSx1REFBQTtFQUNBLFlMYWtCO0VLWmxCLFlBQUE7QU5pY0o7QU01YlU7O0VBRUUsa0JBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBTjhiWjtBTTdiWTs7RUFDRSwwQkFBQTtFQUNBLG1CQUFBO0FOZ2NkO0FLaGRJO0VBQ0UsV0FBQTtFQUNBLGdUQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQ2lCdUM7RURoQnZDLFlDZ0J1QztFRGZ2QyxXQ2V1QztFRGR2QyxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtFQUNBLDZCQUFBO0FMa2ROO0FLL2NNO0VBQ0Usd0JBQUE7QUxpZFI7QU14Y1E7RUFDRSxhQUFBO0FOMGNWO0FNcGNJO0VBQ0UsVUFBQTtFQUNBLG1DQUFBO0VBQ0EsdURBQUE7QU5zY047QU01Z0JBOzs7Ozs7Ozs7MkZBQUE7QUFxQkU7RUROQSxjQ08yQjtBTm1nQjdCO0FNL2ZJO0VEUkYsV0FBQTtFQUNBLFlKNkJvQjtBRDZldEI7QU05ZkU7RUFDRSxVQUFBO0VBQ0EsK0JBQUE7RUFDQSx1REFBQTtFQUNBLFlMYWtCO0VLWmxCLFlBQUE7QU5nZ0JKO0FNM2ZVOztFQUVFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QU42Zlo7QU01Zlk7O0VBQ0UsMEJBQUE7RUFDQSxtQkFBQTtBTitmZDtBSy9nQkk7RUFDRSxXQUFBO0VBQ0EsZ1RBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EscUJDaUJ1QztFRGhCdkMsWUNnQnVDO0VEZnZDLFdDZXVDO0VEZHZDLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7QUxpaEJOO0FLOWdCTTtFQUNFLHdCQUFBO0FMZ2hCUjtBTXZnQlE7RUFDRSxhQUFBO0FOeWdCVjtBTW5nQkk7RUFDRSxVQUFBO0VBQ0EsbUNBQUE7RUFDQSx1REFBQTtBTnFnQk47QUF2a0JBO0VBQ0Usb0JBQUE7QUF5a0JGIiwiZmlsZSI6Imhvcml6b250YWwtbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHRGaWxlIE5hbWU6IGhvcml6b250YWwtbWVudS5zY3NzXG5cdERlc2NyaXB0aW9uOiBBIGNsYXNzaWMgaG9yaXpvbnRhbCBtZW51IGZvciBlYXN5IG5hdmlnYXRpb24gJiBzdXBwb3J0IGFsbCBkZXZpY2VzLlxuXHRJdCBzdXBwb3J0IGxpZ2h0ICYgZGFyayB2ZXJzaW9uLCBmbGlwcGVkIGxheW91dCwgcmlnaHQgc2lkZSBpY29ucywgYm9yZGVycyBtZW51IGZvclxuXHRpdGVtIHNlcGFyYXRpb24uXG5cdC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0SXRlbSBOYW1lOiBWdWV4eSAtIFZ1ZWpzLCBSZWFjdCwgQW5ndWxhciwgSFRNTCAmIExhcmF2ZWwgQWRtaW4gRGFzaGJvYXJkIFRlbXBsYXRlVGhlbWVcblx0QXV0aG9yOiBQSVhJTlZFTlRcblx0QXV0aG9yIFVSTDogaHR0cDovL3d3dy50aGVtZWZvcmVzdC5uZXQvdXNlci9waXhpbnZlbnRcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cbkBpbXBvcnQgJy4uLy4uLy4uL2Jvb3RzdHJhcC1leHRlbmRlZC9pbmNsdWRlJzsgLy8gQm9vdHN0cmFwIGluY2x1ZGVzXG5AaW1wb3J0ICcuLi8uLi8uLi9jb21wb25lbnRzL2luY2x1ZGUnOyAvLyBDb21wb25lbnRzIGluY2x1ZGVzXG5cbi8vIEltcG9ydCBmaXJzdCBtYWluIG1lbnUgbWl4aW5cbkBpbXBvcnQgJy4uLy4uL21peGlucy9tYWluLW1lbnUtbWl4aW4nO1xuXG4vLyBIb3Jpem9udGFsIE1lbnVcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PVxuLmhvcml6b250YWwtbWVudSB7XG4gIC8vIENvbnRlbnQgQXJlYSBtYXJnaW5cbiAgLmNvbnRlbnQge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICYuc2hvdy1vdmVybGF5IHtcbiAgICAgIC5jb250ZW50LW92ZXJsYXkge1xuICAgICAgICB6LWluZGV4OiA5OTggIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBOYXZiYXIgY29udGFpbmVyIHNwYWNpbmcgZm9yIGFsbFxuICAubmF2YmFyLmhlYWRlci1uYXZiYXIge1xuICAgIC5uYXZiYXItY29udGFpbmVyIHtcbiAgICAgIHBhZGRpbmc6IDAuOHJlbSAjeyRjb250ZW50LXBhZGRpbmd9O1xuICAgIH1cbiAgfVxuXG4gIC5ob3Jpem9udGFsLW1lbnUtd3JhcHBlciB7XG4gICAgLmhlYWRlci1uYXZiYXIge1xuICAgICAgbWluLWhlaWdodDogJGhvcml6b250YWwtbWVudS1oZWlnaHQ7XG4gICAgfVxuICB9XG5cbiAgZm9vdGVyIHtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICB9XG5cbiAgLy8tLS0tLS0tLS0tLS0tLS0vL1xuICAvLyBOYXZiYXIgSGVhZGVyIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLy9cbiAgLmhvcml6b250YWwtbWVudS13cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiA2MnB4O1xuICAgIHotaW5kZXg6IDk5MDtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIC5oZWFkZXItbmF2YmFyIHtcbiAgICAgIC5uYXZiYXItY29udGFpbmVyIHtcbiAgICAgICAgcGFkZGluZzogMCAxcmVtO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICAgIC5uYXZiYXItaGVhZGVyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLmhlYWRlci1uYXZiYXIge1xuICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcbiAgICB6LWluZGV4OiA5OTkgIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICBtaW4taGVpZ2h0OiBhdXRvO1xuICAgICYubmF2YmFyLWxpZ2h0IHtcbiAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcbiAgICB9XG5cbiAgICAvLyBOYXZiYXItIEJyYW5kIENlbnRlciAtIExvZ29cbiAgICAmLm5hdmJhci1ob3Jpem9udGFsLmZsb2F0aW5nLW5hdiB7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgdG9wOiA2MnB4O1xuICAgICAgd2lkdGg6IGNhbGMoMTAwdncgLSAoMTAwdncgLSAxMDAlKSAtIGNhbGMoI3skY29udGVudC1wYWRkaW5nfSAqIDIpKTtcbiAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcbiAgICB9XG4gICAgLm5hdmJhci1jb250YWluZXIge1xuICAgICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XG4gICAgfVxuICAgICYubmF2YmFyLWZpeGVkIHtcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICAmLm5hdmJhci1icmFuZC1jZW50ZXIge1xuICAgICAgLm5hdmJhci1oZWFkZXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IGNhbGMoNTAlIC0gNTZweCk7IC8vIGxlZnQgNTAlIC0gYnJhbmRpbmcgd2lkdGhcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgei1pbmRleDogMTAwMDtcbiAgICAgICAgLm5hdmJhci1icmFuZCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgICAgICAgLmJyYW5kLWxvZ28gaW1nIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogMzZweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBCcmFuZCBUZXh0IFNjc3NcbiAgICAgICAgICAuYnJhbmQtdGV4dCB7XG4gICAgICAgICAgICBjb2xvcjogJHByaW1hcnk7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAxcmVtO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjQ1cmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgICYubmF2YmFyLWhvcml6b250YWwge1xuICAgICAgLm5hdi1saW5rIHtcbiAgICAgICAgJi5kcm9wZG93bi10b2dnbGUge1xuICAgICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgIGxlZnQ6IDAuNHJlbTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChzdHItcmVwbGFjZShzdHItcmVwbGFjZSgkY2hldnJvbi1kb3duLCAnY3VycmVudENvbG9yJywgJGJvZHktY29sb3IpLCAnIycsICclMjMnKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuc2lkZWJhci1ncm91cC1hY3RpdmUge1xuICAgICAgICAuZHJvcGRvd24tdG9nZ2xlIHtcbiAgICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoc3RyLXJlcGxhY2Uoc3RyLXJlcGxhY2UoJGNoZXZyb24tZG93biwgJ2N1cnJlbnRDb2xvcicsICR3aGl0ZSksICcjJywgJyUyMycpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5kcm9wZG93bi1tZW51OjpiZWZvcmUge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgICAgLmRyb3Bkb3duLW1lbnUge1xuICAgICAgICBtaW4td2lkdGg6IDIxNXB4O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDUycHg7XG4gICAgICAgIC5kaXNhYmxlZCB7XG4gICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIGNvbG9yOiAkZ3JheS02MDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcbiAgICAgICAgICBsZWZ0OiBhdXRvO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtN3B4O1xuICAgICAgICAgIHJpZ2h0OiAxcmVtO1xuICAgICAgICAgIC8vIGNvbnRlbnQ6ICdcXGU4NDQnICFpbXBvcnRhbnQ7XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKHN0ci1yZXBsYWNlKHN0ci1yZXBsYWNlKCRjaGV2cm9uLXJpZ2h0LCAnY3VycmVudENvbG9yJywgJGJvZHktY29sb3IpLCAnIycsICclMjMnKSk7XG4gICAgICAgIH1cbiAgICAgICAgLmRyb3Bkb3duLWl0ZW0ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMC42OHJlbTtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMC42OHJlbTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmRyb3Bkb3duLXN1Ym1lbnUge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAgICYub3BlbkxlZnQge1xuICAgICAgICAgICAgLmRyb3Bkb3duLW1lbnUge1xuICAgICAgICAgICAgICBsZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIHJpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJi5zaWRlYmFyLWdyb3VwLWFjdGl2ZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYm9keS1iZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmID4gLmRyb3Bkb3duLW1lbnUge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBsZWZ0OiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdWwjbWFpbi1tZW51LW5hdmlnYXRpb24gPiBsaSB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAwLjg1N3JlbTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDAuODU3cmVtO1xuXG4gICAgICAgID4gLmRyb3Bkb3duLW1lbnUge1xuICAgICAgICAgIGEge1xuICAgICAgICAgICAgJiA+ICoge1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICBjb2xvcjogJGJvZHktY29sb3I7XG4gICAgICAgICAgICAgICYgPiAqIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KTtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC5hY3RpdmUgPiBhIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICRib2R5LWJnO1xuICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm9wZW4ge1xuICAgICAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgICAgICA+IGEge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAkYm9keS1jb2xvcjtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGksXG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG4gICAgICAgICAgaGVpZ2h0OiAxN3B4O1xuICAgICAgICAgIHdpZHRoOiAxN3B4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICB9XG4gICAgICAgID4gYSB7XG4gICAgICAgICAgcGFkZGluZzogMC43MTVyZW0gMS4yNXJlbTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMC43MTVyZW07XG4gICAgICAgIH1cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgPiBhIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICRib2R5LWJnO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgPiBhIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMThkZWcsIHJnYmEoJHByaW1hcnksIDEpLCByZ2JhKCRwcmltYXJ5LCAwLjcpKTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggNnB4IDFweCByZ2JhKCRwcmltYXJ5LCAwLjYpO1xuICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubmF2aWdhdGlvbi1oZWFkZXIge1xuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgIGNvbG9yOiAjOTI5MjkyO1xuICAgIHBhZGRpbmc6IDhweCAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG5cbiAgLm5hdmJhci1kYXJrIHtcbiAgICAubmF2LWl0ZW0ge1xuICAgICAgJi5hY3RpdmUgPiBhIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRwcmltYXJ5O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzEzYzUwO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uaG9yaXpvbnRhbC1sYXlvdXQge1xuICAvLyBuYXZiYXIgZmxvYXRpbmdcbiAgJi5uYXZiYXItZmxvYXRpbmcge1xuICAgIC8vIEhvcml6b250YWwgbGF5b3V0IG5hdmJhciBzaGFkb3cgcG9zaXRpb24gYW5kIGhlaWdodCBmaXhcbiAgICAuaGVhZGVyLW5hdmJhci1zaGFkb3cge1xuICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgIH1cbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKHhsKSB7XG4gICAgICAuaGVhZGVyLW5hdmJhci1zaGFkb3cge1xuICAgICAgICB0b3A6IDQ1cHg7XG4gICAgICB9XG4gICAgfVxuICAgICY6bm90KC5ibGFuay1wYWdlKSB7XG4gICAgICAuYXBwLWNvbnRlbnQge1xuICAgICAgICAvLyBwYWRkaW5nLXRvcDogOS43NXJlbTtcbiAgICAgICAgcGFkZGluZzogY2FsYygjeyRjb250ZW50LXBhZGRpbmd9ICsgI3skbmF2YmFyLWhlaWdodH0qIDIgKyAjeyRmbG9hdGluZy1uYXYtbWFyZ2lufSkgI3skY29udGVudC1wYWRkaW5nfSAwICN7JGNvbnRlbnQtcGFkZGluZ307IC8vICogMiAgYXMgd2UgaGF2ZSAyIG5hdmJhciAobWVudSArIG5hdmJhcikgIGluIGhvcml6b250YWwgbGF5b3V0LlxuICAgICAgfVxuICAgIH1cbiAgICAuaG9yaXpvbnRhbC1tZW51LXdyYXBwZXIge1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICB0byBib3R0b20sXG4gICAgICAgIHJnYmEoMjQ4LCAyNDgsIDI0OCwgMC45NSkgNDQlLFxuICAgICAgICByZ2JhKDI0OCwgMjQ4LCAyNDgsIDAuNDYpIDczJSxcbiAgICAgICAgcmdiYSgkd2hpdGUsIDApIDEwMCVcbiAgICAgICk7XG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gICAgICAubmF2YmFyLWhvcml6b250YWwuZmxvYXRpbmctbmF2IHtcbiAgICAgICAgLy8gbWFyZ2luLXRvcDogJGZsb2F0aW5nLW5hdi1tYXJnaW47XG4gICAgICAgIC8vIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAvLyBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQXBwIGNvbnRlbnQgYXJlYSB3cmFwcGVyIGhlaWdodFxuICAgICYuZm9vdGVyLXN0YXRpYyB7XG4gICAgICAuYXBwLWNvbnRlbnQge1xuICAgICAgICAuY29udGVudC1hcmVhLXdyYXBwZXIsXG4gICAgICAgIC5rYW5iYW4td3JhcHBlciB7XG4gICAgICAgICAgQGluY2x1ZGUgY29udGVudC1hcmVhLXdyYXBwZXItaGVpZ2h0KFxuICAgICAgICAgICAgI3skY29udGVudC1wYWRkaW5nfSxcbiAgICAgICAgICAgICN7JG5hdmJhci1oZWlnaHR9LFxuICAgICAgICAgICAgI3skZm9vdGVyLWhlaWdodH0sXG4gICAgICAgICAgICAjeyRmbG9hdGluZy1uYXYtbWFyZ2lufSxcbiAgICAgICAgICAgICN7JGhvcml6b250YWwtbWVudS1oZWlnaHR9LFxuICAgICAgICAgICAgMSxcbiAgICAgICAgICAgICRob3Jpem9udGFsTGF5b3V0OiB0cnVlXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAmLmZvb3Rlci1oaWRkZW4ge1xuICAgICAgLmFwcC1jb250ZW50IHtcbiAgICAgICAgLmNvbnRlbnQtYXJlYS13cmFwcGVyLFxuICAgICAgICAua2FuYmFuLXdyYXBwZXIge1xuICAgICAgICAgIEBpbmNsdWRlIGNvbnRlbnQtYXJlYS13cmFwcGVyLWhlaWdodChcbiAgICAgICAgICAgICN7JGNvbnRlbnQtcGFkZGluZ30sXG4gICAgICAgICAgICAjeyRuYXZiYXItaGVpZ2h0fSxcbiAgICAgICAgICAgIDByZW0sXG4gICAgICAgICAgICAjeyRmbG9hdGluZy1uYXYtbWFyZ2lufSxcbiAgICAgICAgICAgICN7JGhvcml6b250YWwtbWVudS1oZWlnaHR9LFxuICAgICAgICAgICAgMixcbiAgICAgICAgICAgICRob3Jpem9udGFsTGF5b3V0OiB0cnVlXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAmLmZvb3Rlci1maXhlZCB7XG4gICAgICAuYXBwLWNvbnRlbnQge1xuICAgICAgICAuY29udGVudC1hcmVhLXdyYXBwZXIsXG4gICAgICAgIC5rYW5iYW4td3JhcHBlciB7XG4gICAgICAgICAgQGluY2x1ZGUgY29udGVudC1hcmVhLXdyYXBwZXItaGVpZ2h0KFxuICAgICAgICAgICAgI3skY29udGVudC1wYWRkaW5nfSxcbiAgICAgICAgICAgICN7JG5hdmJhci1oZWlnaHR9LFxuICAgICAgICAgICAgI3skZm9vdGVyLWhlaWdodH0sXG4gICAgICAgICAgICAjeyRmbG9hdGluZy1uYXYtbWFyZ2lufSxcbiAgICAgICAgICAgICN7JGhvcml6b250YWwtbWVudS1oZWlnaHR9LFxuICAgICAgICAgICAgMixcbiAgICAgICAgICAgICRob3Jpem9udGFsTGF5b3V0OiB0cnVlXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIG5hdmJhciBzdGlja3lcbiAgJi5uYXZiYXItc3RpY2t5IHtcbiAgICAuYXBwLWNvbnRlbnQge1xuICAgICAgcGFkZGluZzogY2FsYygjeyRjb250ZW50LXBhZGRpbmd9ICsgI3skbmF2YmFyLWhlaWdodH0qIDIpICN7JGNvbnRlbnQtcGFkZGluZ30gMCAjeyRjb250ZW50LXBhZGRpbmd9O1xuICAgIH1cbiAgICAuaGVhZGVyLW5hdmJhciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYm9keS1iZztcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgfVxuICAgIC5ob3Jpem9udGFsLW1lbnUtd3JhcHBlciB7XG4gICAgICAubmF2YmFyLWhvcml6b250YWwuaGVhZGVyLW5hdmJhci5maXhlZC10b3Age1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB0b3A6IDYycHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcbiAgICAgICAgYm94LXNoYWRvdzogMCA0cHggMjRweCAwIHJnYmEoJGJsYWNrLCAwLjEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFwcCBjb250ZW50IGFyZWEgd3JhcHBlciBoZWlnaHRcbiAgICAmLmZvb3Rlci1zdGF0aWMge1xuICAgICAgLmFwcC1jb250ZW50IHtcbiAgICAgICAgLmNvbnRlbnQtYXJlYS13cmFwcGVyLFxuICAgICAgICAua2FuYmFuLXdyYXBwZXIge1xuICAgICAgICAgIEBpbmNsdWRlIGNvbnRlbnQtYXJlYS13cmFwcGVyLWhlaWdodChcbiAgICAgICAgICAgICN7JGNvbnRlbnQtcGFkZGluZ30sXG4gICAgICAgICAgICAjeyRuYXZiYXItaGVpZ2h0fSxcbiAgICAgICAgICAgICN7JGZvb3Rlci1oZWlnaHR9LFxuICAgICAgICAgICAgMHJlbSxcbiAgICAgICAgICAgICN7JGhvcml6b250YWwtbWVudS1oZWlnaHR9LFxuICAgICAgICAgICAgMSxcbiAgICAgICAgICAgICRob3Jpem9udGFsTGF5b3V0OiB0cnVlXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAmLmZvb3Rlci1oaWRkZW4ge1xuICAgICAgLmFwcC1jb250ZW50IHtcbiAgICAgICAgLmNvbnRlbnQtYXJlYS13cmFwcGVyLFxuICAgICAgICAua2FuYmFuLXdyYXBwZXIge1xuICAgICAgICAgIEBpbmNsdWRlIGNvbnRlbnQtYXJlYS13cmFwcGVyLWhlaWdodChcbiAgICAgICAgICAgICN7JGNvbnRlbnQtcGFkZGluZ30sXG4gICAgICAgICAgICAjeyRuYXZiYXItaGVpZ2h0fSxcbiAgICAgICAgICAgIDByZW0sXG4gICAgICAgICAgICAwcmVtLFxuICAgICAgICAgICAgI3skaG9yaXpvbnRhbC1tZW51LWhlaWdodH0sXG4gICAgICAgICAgICAyLFxuICAgICAgICAgICAgJGhvcml6b250YWxMYXlvdXQ6IHRydWVcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgICYuZm9vdGVyLWZpeGVkIHtcbiAgICAgIC5hcHAtY29udGVudCB7XG4gICAgICAgIC5jb250ZW50LWFyZWEtd3JhcHBlcixcbiAgICAgICAgLmthbmJhbi13cmFwcGVyIHtcbiAgICAgICAgICBAaW5jbHVkZSBjb250ZW50LWFyZWEtd3JhcHBlci1oZWlnaHQoXG4gICAgICAgICAgICAjeyRjb250ZW50LXBhZGRpbmd9LFxuICAgICAgICAgICAgI3skbmF2YmFyLWhlaWdodH0sXG4gICAgICAgICAgICAjeyRmb290ZXItaGVpZ2h0fSxcbiAgICAgICAgICAgIDByZW0sXG4gICAgICAgICAgICAjeyRob3Jpem9udGFsLW1lbnUtaGVpZ2h0fSxcbiAgICAgICAgICAgIDIsXG4gICAgICAgICAgICAkaG9yaXpvbnRhbExheW91dDogdHJ1ZVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLy8gbmF2YmFyIHN0YXRpY1xuICAmLm5hdmJhci1zdGF0aWMge1xuICAgIC5hcHAtY29udGVudCB7XG4gICAgICBwYWRkaW5nOiBjYWxjKCN7JGNvbnRlbnQtcGFkZGluZ30gKyAjeyRob3Jpem9udGFsLW1lbnUtaGVpZ2h0fSkgI3skY29udGVudC1wYWRkaW5nfSAwICN7JGNvbnRlbnQtcGFkZGluZ307XG4gICAgfVxuICAgIC5jb250ZW50IHtcbiAgICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwJSAtIGNhbGMoI3skaG9yaXpvbnRhbC1tZW51LWhlaWdodH0gKyBjYWxjKCN7JGZvb3Rlci1oZWlnaHR9ICsgMC4ycmVtKSkpO1xuICAgIH1cbiAgICAuaGVhZGVyLW5hdmJhciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYm9keS1iZztcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgfVxuICAgIC5ob3Jpem9udGFsLW1lbnUtd3JhcHBlciB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAubmF2YmFyLWhvcml6b250YWwuaGVhZGVyLW5hdmJhciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcbiAgICAgICAgLy8gPyBBZGRlZCBmb3IgYW5ndWxhciBmaXggYXMgaXQgYWRkcyB0aGlzIGNsYXNzIHRvIG5hdmJhciBpbiBoeiBsYXlvdXRcbiAgICAgICAgJi5uYXZiYXItc3RhdGljLXRvcCB7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAvLyBBcHAgY29udGVudCBhcmVhIHdyYXBwZXIgaGVpZ2h0XG4gICAgJi5mb290ZXItc3RhdGljIHtcbiAgICAgIC5hcHAtY29udGVudCB7XG4gICAgICAgIC5jb250ZW50LWFyZWEtd3JhcHBlcixcbiAgICAgICAgLmthbmJhbi13cmFwcGVyIHtcbiAgICAgICAgICBAaW5jbHVkZSBjb250ZW50LWFyZWEtd3JhcHBlci1oZWlnaHQoXG4gICAgICAgICAgICAjeyRjb250ZW50LXBhZGRpbmd9LFxuICAgICAgICAgICAgI3skbmF2YmFyLWhlaWdodH0sXG4gICAgICAgICAgICBjYWxjKCN7JGZvb3Rlci1oZWlnaHR9ICsgMC4ycmVtKSxcbiAgICAgICAgICAgIDByZW0sXG4gICAgICAgICAgICAjeyRob3Jpem9udGFsLW1lbnUtaGVpZ2h0fSxcbiAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAkaG9yaXpvbnRhbExheW91dDogdHJ1ZVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgJi5mb290ZXItaGlkZGVuIHtcbiAgICAgIC5hcHAtY29udGVudCB7XG4gICAgICAgIC5jb250ZW50LWFyZWEtd3JhcHBlcixcbiAgICAgICAgLmthbmJhbi13cmFwcGVyIHtcbiAgICAgICAgICBAaW5jbHVkZSBjb250ZW50LWFyZWEtd3JhcHBlci1oZWlnaHQoXG4gICAgICAgICAgICAjeyRjb250ZW50LXBhZGRpbmd9LFxuICAgICAgICAgICAgI3skbmF2YmFyLWhlaWdodH0sXG4gICAgICAgICAgICAwcmVtLFxuICAgICAgICAgICAgMHJlbSxcbiAgICAgICAgICAgICN7JGhvcml6b250YWwtbWVudS1oZWlnaHR9LFxuICAgICAgICAgICAgMixcbiAgICAgICAgICAgICRob3Jpem9udGFsTGF5b3V0OiB0cnVlXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAmLmZvb3Rlci1maXhlZCB7XG4gICAgICAuYXBwLWNvbnRlbnQge1xuICAgICAgICAuY29udGVudC1hcmVhLXdyYXBwZXIsXG4gICAgICAgIC5rYW5iYW4td3JhcHBlciB7XG4gICAgICAgICAgQGluY2x1ZGUgY29udGVudC1hcmVhLXdyYXBwZXItaGVpZ2h0KFxuICAgICAgICAgICAgI3skY29udGVudC1wYWRkaW5nfSxcbiAgICAgICAgICAgICN7JG5hdmJhci1oZWlnaHR9LFxuICAgICAgICAgICAgI3skZm9vdGVyLWhlaWdodH0sXG4gICAgICAgICAgICAwcmVtLFxuICAgICAgICAgICAgI3skaG9yaXpvbnRhbC1tZW51LWhlaWdodH0sXG4gICAgICAgICAgICAyLFxuICAgICAgICAgICAgJGhvcml6b250YWxMYXlvdXQ6IHRydWVcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gbmF2YmFyIEhpZGRlblxuICAmLm5hdmJhci1oaWRkZW4ge1xuICAgICYuZm9vdGVyLXN0YXRpYyB7XG4gICAgICAuYXBwLWNvbnRlbnQge1xuICAgICAgICAuY29udGVudC1hcmVhLXdyYXBwZXIsXG4gICAgICAgIC5rYW5iYW4td3JhcHBlciB7XG4gICAgICAgICAgQGluY2x1ZGUgY29udGVudC1hcmVhLXdyYXBwZXItaGVpZ2h0KFxuICAgICAgICAgICAgI3skY29udGVudC1wYWRkaW5nfSxcbiAgICAgICAgICAgIDByZW0sXG4gICAgICAgICAgICAjeyRmb290ZXItaGVpZ2h0fSxcbiAgICAgICAgICAgIDByZW0sXG4gICAgICAgICAgICAjeyRob3Jpem9udGFsLW1lbnUtaGVpZ2h0fSxcbiAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAkaG9yaXpvbnRhbExheW91dDogdHJ1ZVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgJi5mb290ZXItaGlkZGVuIHtcbiAgICAgIC5hcHAtY29udGVudCB7XG4gICAgICAgIC5jb250ZW50LWFyZWEtd3JhcHBlcixcbiAgICAgICAgLmthbmJhbi13cmFwcGVyIHtcbiAgICAgICAgICBAaW5jbHVkZSBjb250ZW50LWFyZWEtd3JhcHBlci1oZWlnaHQoXG4gICAgICAgICAgICAjeyRjb250ZW50LXBhZGRpbmd9LFxuICAgICAgICAgICAgMHJlbSxcbiAgICAgICAgICAgIDByZW0sXG4gICAgICAgICAgICAwcmVtLFxuICAgICAgICAgICAgI3skaG9yaXpvbnRhbC1tZW51LWhlaWdodH0sXG4gICAgICAgICAgICAyLFxuICAgICAgICAgICAgJGhvcml6b250YWxMYXlvdXQ6IHRydWVcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgICYuZm9vdGVyLWZpeGVkIHtcbiAgICAgIC5hcHAtY29udGVudCB7XG4gICAgICAgIC5jb250ZW50LWFyZWEtd3JhcHBlcixcbiAgICAgICAgLmthbmJhbi13cmFwcGVyIHtcbiAgICAgICAgICBAaW5jbHVkZSBjb250ZW50LWFyZWEtd3JhcHBlci1oZWlnaHQoXG4gICAgICAgICAgICAjeyRjb250ZW50LXBhZGRpbmd9LFxuICAgICAgICAgICAgMHJlbSxcbiAgICAgICAgICAgICN7JGZvb3Rlci1oZWlnaHR9LFxuICAgICAgICAgICAgMHJlbSxcbiAgICAgICAgICAgICN7JGhvcml6b250YWwtbWVudS1oZWlnaHR9LFxuICAgICAgICAgICAgMixcbiAgICAgICAgICAgICRob3Jpem9udGFsTGF5b3V0OiB0cnVlXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICYudmVydGljYWwtb3ZlcmxheS1tZW51IHtcbiAgICAjbWFpbi1tZW51LW5hdmlnYXRpb24ge1xuICAgICAgPiBsaSB7XG4gICAgICAgID4gdWwge1xuICAgICAgICAgID4gbGkge1xuICAgICAgICAgICAgPiBhIHtcbiAgICAgICAgICAgICAgaSxcbiAgICAgICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDFyZW07XG4gICAgICAgICAgICAgICAgd2lkdGg6IDFyZW07XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIEluaXRpYWxseSBtZW51ICYgY29udGVudCB3aWR0aCBmb3IgbWQgYW5kIGRvd24gc2NyZWVuXG5AaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24obGcpIHtcbiAgLmhvcml6b250YWwtbGF5b3V0IHtcbiAgICAmLmhvcml6b250YWwtbWVudSB7XG4gICAgICAuaG9yaXpvbnRhbC1tZW51LXdyYXBwZXIge1xuICAgICAgICAuaGVhZGVyLW5hdmJhciB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAuaGVhZGVyLW5hdmJhciB7XG4gICAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XG4gICAgfVxuICAgIC5hcHAtY29udGVudCB7XG4gICAgICBwYWRkaW5nOiBjYWxjKCN7JG5hdmJhci1oZWlnaHR9ICsgY2FsYygjeyRjb250ZW50LXBhZGRpbmd9IC0gMC44cmVtKSkgY2FsYygjeyRjb250ZW50LXBhZGRpbmd9IC0gMC44cmVtKSAwXG4gICAgICAgIGNhbGMoI3skY29udGVudC1wYWRkaW5nfSAtIDAuOHJlbSkgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbn1cblxuQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKHhzKSB7XG4gIC8vIEZvciBzdGF0aWMgbmF2YmFyXG4gIGh0bWwgYm9keS5ob3Jpem9udGFsLWxheW91dC5uYXZiYXItc3RhdGljIC5hcHAtY29udGVudCB7XG4gICAgcGFkZGluZzogY2FsYygjeyRjb250ZW50LXBhZGRpbmd9IC0gMC44cmVtICsgI3skbmF2YmFyLWhlaWdodH0pIGNhbGMoI3skY29udGVudC1wYWRkaW5nfSAtIDAuOHJlbSkgMFxuICAgICAgY2FsYygjeyRjb250ZW50LXBhZGRpbmd9IC0gMC44cmVtKSAhaW1wb3J0YW50OyAvLyAtIDAuOHJlbSB0byByZWR1Y2UgcGFkZGluZyBpbiBzbWFsbCBzY3JlZW5cbiAgfVxufVxuLy8gSW1wb3J0IHZlcnRpY2FsLW92ZXJsYXktbWVudS5zY3NzIGZvciBzbWFsbCBzY3JlZW4gc3VwcG9ydFxuQGltcG9ydCAndmVydGljYWwtb3ZlcmxheS1tZW51LnNjc3MnO1xuIiwiQGltcG9ydCAnQGNvcmUvc2Nzcy9iYXNlL2NvcmUvbWVudS9tZW51LXR5cGVzL2hvcml6b250YWwtbWVudS5zY3NzJztcbkBpbXBvcnQgJ0Bjb3JlL3Njc3MvYmFzZS9jb3JlL21lbnUvbWVudS10eXBlcy92ZXJ0aWNhbC1vdmVybGF5LW1lbnUuc2Nzcyc7XG5cbi8vIERyb3Bkb3duIHBvc2l0aW9uIGZvciBob3Jpem9udGFsIGxheW91dCBvbmx5XG4uaG9yaXpvbnRhbC1sYXlvdXQgLmhvcml6b250YWwtaGVhZGVyLW5hdmJhciAubmF2YmFyLWNvbnRhaW5lciB1bC5uYXZiYXItbmF2IGxpLmRyb3Bkb3duIC5kcm9wZG93bi1tZW51IHtcbiAgdG9wOiA0MXB4ICFpbXBvcnRhbnQ7XG59XG4iLCIvLyAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyAgRmlsZSBOYW1lOiB2YXJpYWJsZXMuc2Nzc1xuLy8gIERlc2NyaXB0aW9uOiBDdXN0b20gY29tcG9uZW50IHZhcmlhYmxlXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gIEl0ZW0gTmFtZTogVnVleHkgLSBWdWVqcywgUmVhY3QsIEFuZ3VsYXIsIEhUTUwgJiBMYXJhdmVsIEFkbWluIERhc2hib2FyZCBUZW1wbGF0ZVxuLy8gIEF1dGhvcjogUElYSU5WRU5UXG4vLyAgQXV0aG9yIFVSTDogaHR0cDovL3d3dy50aGVtZWZvcmVzdC5uZXQvdXNlci9waXhpbnZlbnRcbi8vICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy8gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gIFdBUk5JTkc6IFBMRUFTRSBETyBOT1QgQ0hBTkdFIFRISVMgVkFSSUFCTEUgRklMRS5cbi8vICBUSElTIEZJTEUgV0lMTCBHRVQgT1ZFUldSSVRURU4gV0lUSCBFQUNIIFZVRVhZIEhUTUwgVEVNUExBVEUgUkVMRUFTRS5cbi8vICBUSVA6XG4vLyAgV2Ugc3VnZ2VzdCB5b3UgdG8gdXNlIHRoaXMgKGFzc2V0cy9zY3NzL3ZhcmlhYmxlcy9fdmFyaWFibGVzLWNvbXBvbmVudHMuc2NzcykgZmlsZSBmb3Igb3ZlcnJpZGluZyBjb21wb25lbnRzIHZhcmlhYmxlcy5cbi8vICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuJGJhc2UtZm9udC1zaXplOiAxNHB4ICFkZWZhdWx0O1xuJGJvZHktZGlyZWN0aW9uOiBsdHIgIWRlZmF1bHQ7IC8vIERlZmF1bHQgbHRyLCBjaGFuZ2UgaXQgdG8gcnRsIGZvciBSaWdodCBUbyBMZWZ0IHN1cHBvcnQuXG4kY29udGVudC1wYWRkaW5nOiAycmVtICFkZWZhdWx0O1xuXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAgICBDb2xvcnNcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiRuYXYtY29tcG9uZW50LWJvcmRlci1jb2xvcjogI2RkZCAhZGVmYXVsdDtcblxuJHN3aXBlci1iZzogI2YyZjRmNCAhZGVmYXVsdDtcblxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gICAgTmF2YmFyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4kbmF2YmFyLWhlaWdodDogNC40NXJlbSAhZGVmYXVsdDtcbiRob3Jpem9udGFsLW1lbnUtaGVpZ2h0OiA0LjQ1cmVtICFkZWZhdWx0O1xuJGZvb3Rlci1oZWlnaHQ6IDMuMzVyZW0gIWRlZmF1bHQ7XG5cbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vICAgIE1haW4gTWVudVxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vL21haW4gbWVudSBkYXJrXG4kbWVudS1kYXJrLWNvbG9yOiAjZGNkY2RjICFkZWZhdWx0O1xuJG1lbnUtZGFyay1iZy1jb2xvcjogIzEwMTYzYSAhZGVmYXVsdDtcblxuJG1lbnUtcGFkZGluZzogMTBweCAxNXB4IDEwcHggMTVweCAhZGVmYXVsdDtcbiRtZW51LXNlY29uZC1sZXZlbC1wYWRkaW5nOiAxMHB4IDE1cHggMTBweCAyMHB4ICFkZWZhdWx0O1xuJG1lbnUtdGhpcmQtbGV2ZWwtcGFkZGluZzogMTBweCAxNXB4IDEwcHggNTNweCAhZGVmYXVsdDtcbiRtZW51LWZvcnRoLWxldmVsLXBhZGRpbmc6IDEwcHggMTVweCAxMHB4IDUzcHggIWRlZmF1bHQ7XG5cbi8vIHZlcnRpY2FsIG1lbnVcbiRtZW51LWV4cGFuZGVkLXdpZHRoOiAyNjBweCAhZGVmYXVsdDtcbiRtZW51LWNvbGxhcHNlZC13aWR0aDogODBweCAhZGVmYXVsdDtcblxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gICAgU2lkZWJhclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiRzaWRlYmFyLXdpZHRoOiAyNjBweCAhZGVmYXVsdDtcbiRjaGF0LXNpZGViYXItd2lkdGg6IDM2MHB4ICFkZWZhdWx0O1xuXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gICAgQXZhdGFyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4kYXZhdGFyLXNpemU6IDMycHggIWRlZmF1bHQ7XG4kYXZhdGFyLXN0YXR1cy1zaXplOiAxMXB4ICFkZWZhdWx0O1xuJGF2YXRhci1zdGF0dXMtc2l6ZS1sZzogMTdweCAhZGVmYXVsdDtcblxuJGF2YXRhci1zaXplLXhsOiA3MHB4ICFkZWZhdWx0O1xuJGF2YXRhci1zaXplLWxnOiA1MHB4ICFkZWZhdWx0O1xuJGF2YXRhci1zaXplLXNtOiAyNHB4ICFkZWZhdWx0O1xuXG4kYXZhdGFyLWJnOiAjYzNjM2MzO1xuJGF2YXRhci1ncm91cC1ib3JkZXI6ICR3aGl0ZTtcblxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vICBQcm9ncmVzc1xuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiRwcm9ncmVzcy1zaXplLXhsOiAxLjE0cmVtICFkZWZhdWx0O1xuJHByb2dyZXNzLXNpemUtbGc6IDAuODU3cmVtICFkZWZhdWx0O1xuJHByb2dyZXNzLXNpemUtbWQ6IDAuNTdyZW0gIWRlZmF1bHQ7XG4kcHJvZ3Jlc3Mtc2l6ZS1zbTogMC4xNDNyZW0gIWRlZmF1bHQ7XG5cbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAgRm9ybVxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gJGlucHV0LWhlaWdodCwgJGlucHV0LWhlaWdodC1sZywgJGlucHV0LWhlaWdodC1zbSBhcmUgaW4gdmFyaWFibGVzXG4kZm9udC1zaXplLXhzOiAwLjc1cmVtICFkZWZhdWx0O1xuJGZvbnQtc2l6ZS14bDogKCRmb250LXNpemUtYmFzZSArIDAuNSkgIWRlZmF1bHQ7XG4kbGluZS1oZWlnaHQteGw6IDEuNyAhZGVmYXVsdDtcbiRsaW5lLWhlaWdodC14czogMS41ICFkZWZhdWx0O1xuJGlucHV0LXBhZGRpbmcteS14bDogMC41cmVtICFkZWZhdWx0O1xuJGlucHV0LXBhZGRpbmcteC14bDogMC41cmVtICFkZWZhdWx0O1xuXG4kaW5wdXQtcGFkZGluZy15LXhzOiAwLjJyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtcGFkZGluZy14LXhzOiAwLjI3NXJlbSAhZGVmYXVsdDtcblxuJGJvcmRlci1yYWRpdXMteGw6IDAuMzVyZW0gIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy14czogMC4xMnJlbSAhZGVmYXVsdDtcbiRpbnB1dC1ib3JkZXItcmFkaXVzLXhsOiAkYm9yZGVyLXJhZGl1cy14bCAhZGVmYXVsdDtcbiRpbnB1dC1ib3JkZXItcmFkaXVzLXhzOiAkYm9yZGVyLXJhZGl1cy14cyAhZGVmYXVsdDtcblxuJGlucHV0LWhlaWdodC14bDogKCgkZm9udC1zaXplLXhsICogJGxpbmUtaGVpZ2h0LXhsKSArICgkaW5wdXQtcGFkZGluZy15LXhsICogMikpICFkZWZhdWx0O1xuJGlucHV0LWhlaWdodC14czogKCgkZm9udC1zaXplLXhzICogJGxpbmUtaGVpZ2h0LXhzKSArICgkaW5wdXQtcGFkZGluZy15LXhzICogMikpICFkZWZhdWx0O1xuJGlucHV0LWhlaWdodC1zbTogKCgkZm9udC1zaXplLXNtICogJGxpbmUtaGVpZ2h0LXNtKSArICgkaW5wdXQtcGFkZGluZy15LXNtICogMikpICFkZWZhdWx0O1xuXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gIEJsYW5rIFBhZ2UgQmcgQ29sb3Jcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiRibGFuay1iZy1jb2xvcjogI2VmZjJmNyAhZGVmYXVsdDtcblxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vICBEYXRhIFRhYmxlcyBCZyBDb2xvclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuJGRhdGF0YWJsZS1iZy1jb2xvcjogI2Y4ZjhmOCAhZGVmYXVsdDtcblxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vICBTd2l0Y2hcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4kc3dpdGNoLWJnLWNvbG9yOiAjZTJlMmUyICFkZWZhdWx0O1xuJHN3aXRjaC1pbmRpY2F0b3ItY29sb3I6ICR3aGl0ZSAhZGVmYXVsdDtcblxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vICBUaW1lbGluZVxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiR0aW1lbGluZS1ib3JkZXItY29sb3I6ICRib3JkZXItY29sb3IgIWRlZmF1bHQ7XG5cbiR0aW1lbGluZS1wb2ludC1zaXplOiAxLjc1cmVtICFkZWZhdWx0O1xuJHRpbWVsaW5lLXBvaW50LWluZGljYXRvci1zaXplOiAxMnB4ICFkZWZhdWx0O1xuJHRpbWVsaW5lLXBvaW50LWluZGljYXRvci1jb2xvcjogJHByaW1hcnkgIWRlZmF1bHQ7XG4kdGltZWxpbmUtcG9pbnQtaW5kaWNhdG9yLXdyYXBwZXItc2l6ZTogMjBweCAhZGVmYXVsdDtcblxuJHRpbWVsaW5lLWl0ZW0tbWluLWhlaWdodDogNHJlbSAhZGVmYXVsdDtcbiR0aW1lbGluZS1pdGVtLWljb24tZm9udC1zaXplOiAwLjg1cmVtICFkZWZhdWx0O1xuXG4kdGltZWxpbmUtZXZlbnQtdGltZS1zaXplOiAwLjg1cmVtICFkZWZhdWx0O1xuJHRpbWVsaW5lLWV2ZW50LXRpbWUtY29sb3I6ICR0ZXh0LW11dGVkICFkZWZhdWx0O1xuIiwiLy8gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gIEZpbGUgTmFtZTogdmFyaWFibGVzLnNjc3Ncbi8vICBEZXNjcmlwdGlvbjogQ3VzdG9tIG92ZXJyaWRlcyBvZiBCb290c3RyYXAgdmFyaWFibGVzXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gIEl0ZW0gTmFtZTogVnVleHkgLSBWdWVqcywgUmVhY3QsIEFuZ3VsYXIsIEhUTUwgJiBMYXJhdmVsIEFkbWluIERhc2hib2FyZCBUZW1wbGF0ZVxuLy8gIEF1dGhvcjogUElYSU5WRU5UXG4vLyAgQXV0aG9yIFVSTDogaHR0cDovL3d3dy50aGVtZWZvcmVzdC5uZXQvdXNlci9waXhpbnZlbnRcbi8vICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy8gQ29sb3Igc3lzdGVtXG5cbiR3aGl0ZTogI2ZmZiAhZGVmYXVsdDtcbiRncmF5LTUwOiAjZjZmNmY2ICFkZWZhdWx0O1xuJGdyYXktMTAwOiAjYmFiZmM3ICFkZWZhdWx0OyAvLyAkZ3JheS1saWdodGVzdFxuJGdyYXktMjAwOiAjZWRlZGVkICFkZWZhdWx0OyAvLyAkZ3JheS1saWdodGVyXG4kZ3JheS0zMDA6ICNkYWUxZTcgIWRlZmF1bHQ7IC8vICRncmF5LWxpZ2h0XG4kZ3JheS00MDA6ICM2MzYzNjMgIWRlZmF1bHQ7XG4kZ3JheS01MDA6ICNhZGI1YmQgIWRlZmF1bHQ7XG4kZ3JheS02MDA6ICNiOGMyY2MgIWRlZmF1bHQ7IC8vICRncmF5XG4kZ3JheS03MDA6ICM0ZTUxNTQgIWRlZmF1bHQ7XG4kZ3JheS04MDA6ICMxZTFlMWUgIWRlZmF1bHQ7IC8vICRncmF5LWRhcmtcbiRncmF5LTkwMDogIzJhMmUzMCAhZGVmYXVsdDtcbiRibGFjazogIzIyMjkyZiAhZGVmYXVsdDsgLy8gMjMxZjQ4IDIyMjkyZlxuXG4kcHVycGxlOiAjNzM2N2YwICFkZWZhdWx0OyAvLyRwcmltYXJ5XG4kZ3JlZW46ICMyOGM3NmYgIWRlZmF1bHQ7IC8vJHN1Y2Nlc3NcbiRibHVlOiAjMDBjZmU4ICFkZWZhdWx0OyAvLyRpbmZvXG4kb3JhbmdlOiAjZmY5ZjQzICFkZWZhdWx0OyAvLyR3YXJuaW5nXG4kcmVkOiAjZWE1NDU1ICFkZWZhdWx0OyAvLyRkYW5nZXJcblxuJHByaW1hcnk6ICRwdXJwbGUgIWRlZmF1bHQ7XG4kc2Vjb25kYXJ5OiAjODI4NjhiICFkZWZhdWx0O1xuJGluZm86ICRibHVlICFkZWZhdWx0O1xuJHdhcm5pbmc6ICRvcmFuZ2UgIWRlZmF1bHQ7XG4kbGlnaHQ6ICRncmF5LTUwICFkZWZhdWx0O1xuJGRhcms6ICM0YjRiNGIgIWRlZmF1bHQ7XG5cbi8vIFNwYWNpbmdcbi8vXG4vLyBDb250cm9sIHRoZSBkZWZhdWx0IHN0eWxpbmcgb2YgbW9zdCBCb290c3RyYXAgZWxlbWVudHMgYnkgbW9kaWZ5aW5nIHRoZXNlXG4vLyB2YXJpYWJsZXMuIE1vc3RseSBmb2N1c2VkIG9uIHNwYWNpbmcuXG4vLyBZb3UgY2FuIGFkZCBtb3JlIGVudHJpZXMgdG8gdGhlICRzcGFjZXJzIG1hcCwgc2hvdWxkIHlvdSBuZWVkIG1vcmUgdmFyaWF0aW9uLlxuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgY29udGFpbmVyLW1heC13aWR0aHNcbiRncmlkLWJyZWFrcG9pbnRzOiAoXG4gIHhzOiAwLFxuICBzbTogNTc2cHgsXG4gIG1kOiA3NjhweCxcbiAgbGc6IDk5MnB4LFxuICB4bDogMTIwMHB4LFxuICB4eGw6IDE0NDBweCAvLyBDdXN0b20geHhsIHNpemVcbikgIWRlZmF1bHQ7XG5cbiRjb250YWluZXItbWF4LXdpZHRoczogKFxuICB4czogMCxcbiAgc206IDU3NnB4LFxuICBtZDogNzY4cHgsXG4gIGxnOiA5OTJweCxcbiAgeGw6IDEyMDBweCxcbiAgeHhsOiAxNDQwcHggLy8gQ3VzdG9tIHh4bCBzaXplXG4pICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBjb250YWluZXItbWF4LXdpZHRoc1xuXG4vLyBzdHlsZWxpbnQtZGlzYWJsZVxuJHNwYWNlcjogMXJlbSAhZGVmYXVsdDtcbiRzcGFjZXJzOiAoKSAhZGVmYXVsdDtcbi8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzY3NzL2RvbGxhci12YXJpYWJsZS1kZWZhdWx0XG4kc3BhY2VyczogbWFwLW1lcmdlKFxuICAoXG4gICAgMDogMCxcbiAgICAyNTogKFxuICAgICAgJHNwYWNlciAqIDAuMjVcbiAgICApLFxuICAgIDUwOiAoXG4gICAgICAkc3BhY2VyICogMC41XG4gICAgKSxcbiAgICA3NTogKFxuICAgICAgJHNwYWNlciAqIDAuNzVcbiAgICApLFxuICAgIDE6IChcbiAgICAgICRzcGFjZXJcbiAgICApLFxuICAgIDI6IChcbiAgICAgICRzcGFjZXIgKiAxLjVcbiAgICApLFxuICAgIDM6IChcbiAgICAgICRzcGFjZXIgKiAzXG4gICAgKSxcbiAgICA0OiAoXG4gICAgICAkc3BhY2VyICogMy41XG4gICAgKSxcbiAgICA1OiAoXG4gICAgICAkc3BhY2VyICogNFxuICAgIClcbiAgKSxcbiAgJHNwYWNlcnNcbik7XG5cbi8vIEJvZHlcbi8vXG4vLyBTZXR0aW5ncyBmb3IgdGhlIGA8Ym9keT5gIGVsZW1lbnQuXG4kYm9keS1iZzogI2Y4ZjhmOCAhZGVmYXVsdDtcbiRib2R5LWNvbG9yOiAjNmU2YjdiICFkZWZhdWx0O1xuXG4vLyBMaW5rc1xuLy9cbi8vIFN0eWxlIGFuY2hvciBlbGVtZW50cy5cblxuJGxpbmstY29sb3I6ICRwcmltYXJ5ICFkZWZhdWx0O1xuJGxpbmstaG92ZXItY29sb3I6IGRhcmtlbigkbGluay1jb2xvciwgNSUpICFkZWZhdWx0O1xuJGxpbmstaG92ZXItZGVjb3JhdGlvbjogbm9uZSAhZGVmYXVsdDtcblxuLy8gR3JpZCBjb2x1bW5zXG4vL1xuLy8gU2V0IHRoZSBudW1iZXIgb2YgY29sdW1ucyBhbmQgc3BlY2lmeSB0aGUgd2lkdGggb2YgdGhlIGd1dHRlcnMuXG5cbiRncmlkLWd1dHRlci13aWR0aDogMnJlbSAhZGVmYXVsdDtcblxuLy8gQ29tcG9uZW50c1xuLy9cbi8vIERlZmluZSBjb21tb24gcGFkZGluZyBhbmQgYm9yZGVyIHJhZGl1cyBzaXplcyBhbmQgbW9yZS5cblxuJGxpbmUtaGVpZ2h0LWxnOiAxLjI1ICFkZWZhdWx0O1xuJGxpbmUtaGVpZ2h0LXNtOiAxICFkZWZhdWx0O1xuXG4kYm9yZGVyLXdpZHRoOiAxcHggIWRlZmF1bHQ7XG4kYm9yZGVyLWNvbG9yOiAjZWJlOWYxICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXM6IDAuMzU3cmVtICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtbGc6IDAuNnJlbSAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLXNtOiAwLjI1cmVtICFkZWZhdWx0O1xuXG4vLyBzaGFkb3dcbiRib3gtc2hhZG93OiAwIDRweCAyNHB4IDAgcmdiYSgkYmxhY2ssIDAuMSkgIWRlZmF1bHQ7XG4vLyBUeXBvZ3JhcGh5XG5cbi8vXG4vLyBGb250LCBsaW5lLWhlaWdodCwgYW5kIGNvbG9yIGZvciBib2R5IHRleHQsIGhlYWRpbmdzLCBhbmQgbW9yZS5cblxuLy8gc3R5bGVsaW50LWRpc2FibGUgdmFsdWUta2V5d29yZC1jYXNlXG4kZm9udC1mYW1pbHktc2Fucy1zZXJpZjogJ01vbnRzZXJyYXQnLCBIZWx2ZXRpY2EsIEFyaWFsLCBzZXJpZiAhZGVmYXVsdDtcbiRmb250LWZhbWlseS1tb25vc3BhY2U6ICdNb250c2VycmF0JywgSGVsdmV0aWNhLCBBcmlhbCwgc2VyaWYgIWRlZmF1bHQ7XG5cbi8vIHN0eWxlbGludC1lbmFibGUgdmFsdWUta2V5d29yZC1jYXNlXG4kZm9udC1zaXplLWJhc2U6IDFyZW0gIWRlZmF1bHQ7XG4kZm9udC1zaXplLWxnOiBjZWlsKCRmb250LXNpemUtYmFzZSAqIDEuMjUpICFkZWZhdWx0O1xuJGZvbnQtc2l6ZS1zbTogY2VpbCgkZm9udC1zaXplLWJhc2UgKiAwLjg1KSAhZGVmYXVsdDtcblxuJGZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwICFkZWZhdWx0O1xuJGZvbnQtd2VpZ2h0LWJvbGQ6IDUwMCAhZGVmYXVsdDtcbiRmb250LXdlaWdodC1ib2xkZXI6IDYwMCAhZGVmYXVsdDtcblxuJGxpbmUtaGVpZ2h0LWJhc2U6IDEuNDUgIWRlZmF1bHQ7XG5cbiRoMS1mb250LXNpemU6ICRmb250LXNpemUtYmFzZSAqIDIgIWRlZmF1bHQ7XG4kaDItZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2UgKiAxLjcxNCAhZGVmYXVsdDtcbiRoMy1mb250LXNpemU6ICRmb250LXNpemUtYmFzZSAqIDEuNSAhZGVmYXVsdDtcbiRoNC1mb250LXNpemU6ICRmb250LXNpemUtYmFzZSAqIDEuMjg2ICFkZWZhdWx0O1xuJGg1LWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlICogMS4wNyAhZGVmYXVsdDtcblxuJGhlYWRpbmdzLWZvbnQtZmFtaWx5OiBpbmhlcml0ICFkZWZhdWx0O1xuJGhlYWRpbmdzLWNvbG9yOiAjNWU1ODczICFkZWZhdWx0O1xuXG4kZGlzcGxheTEtd2VpZ2h0OiAkZm9udC13ZWlnaHQtbm9ybWFsICFkZWZhdWx0O1xuJGRpc3BsYXkyLXdlaWdodDogJGZvbnQtd2VpZ2h0LW5vcm1hbCAhZGVmYXVsdDtcbiRkaXNwbGF5My13ZWlnaHQ6ICRmb250LXdlaWdodC1ub3JtYWwgIWRlZmF1bHQ7XG4kZGlzcGxheTQtd2VpZ2h0OiAkZm9udC13ZWlnaHQtbm9ybWFsICFkZWZhdWx0O1xuXG4kbGVhZC1mb250LXNpemU6ICRmb250LXNpemUtYmFzZSAqIDEuMTQgIWRlZmF1bHQ7XG4kbGVhZC1mb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LW5vcm1hbCAhZGVmYXVsdDtcblxuJHNtYWxsLWZvbnQtc2l6ZTogMC44NTdyZW0gIWRlZmF1bHQ7XG5cbiR0ZXh0LW11dGVkOiAjYjliOWMzICFkZWZhdWx0O1xuJGhyLWJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcblxuJGJsb2NrcXVvdGUtc21hbGwtY29sb3I6ICR0ZXh0LW11dGVkICFkZWZhdWx0O1xuXG4vLyBUYWJsZXNcblxuJHRhYmxlLWNlbGwtcGFkZGluZzogMC43MnJlbSAhZGVmYXVsdDtcblxuJHRhYmxlLWFjY2VudC1iZzogI2ZhZmFmYyAhZGVmYXVsdDtcbiR0YWJsZS1ob3Zlci1iZzogI2Y2ZjZmOSAhZGVmYXVsdDtcblxuJHRhYmxlLWJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcblxuJHRhYmxlLWhlYWQtYmc6ICNmM2YyZjcgIWRlZmF1bHQ7XG4kdGFibGUtaGVhZC1jb2xvcjogJGhlYWRpbmdzLWNvbG9yICFkZWZhdWx0O1xuXG4kdGFibGUtZGFyay1iZzogJGRhcmsgIWRlZmF1bHQ7XG4kdGFibGUtZGFyay1ib3JkZXItY29sb3I6ICM0MDQwNDAgIWRlZmF1bHQ7XG5cbiR0YWJsZS10aC1mb250LXNpemU6IDAuODU3cmVtICFkZWZhdWx0OyAvLyBjdXN0b21cblxuLy8gQnV0dG9ucyArIEZvcm1zXG4kYnRuLXBhZGRpbmcteTogMC43ODZyZW0gIWRlZmF1bHQ7XG4kYnRuLXBhZGRpbmcteDogMS41cmVtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1wYWRkaW5nLXk6IDAuNzVyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLXBhZGRpbmcteDogMnJlbSAhZGVmYXVsdDtcblxuJGlucHV0LWJ0bi1wYWRkaW5nLXktc206IDAuNDg2cmVtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1wYWRkaW5nLXgtc206IDFyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLWZvbnQtc2l6ZS1zbTogJGZvbnQtc2l6ZS1iYXNlICogMC45ICFkZWZhdWx0O1xuXG4kaW5wdXQtYnRuLXBhZGRpbmcteS1sZzogMC44cmVtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1wYWRkaW5nLXgtbGc6IDJyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLWZvbnQtc2l6ZS1sZzogJGZvbnQtc2l6ZS1iYXNlICogMS4yNSAhZGVmYXVsdDtcbiRidG4tbGluZS1oZWlnaHQ6IDEgIWRlZmF1bHQ7XG4kYnRuLWJvcmRlci1yYWRpdXM6IDAuMzU4cmVtICFkZWZhdWx0O1xuJGJ0bi1ib3JkZXItcmFkaXVzLWxnOiAwLjM1OHJlbSAhZGVmYXVsdDtcbiRidG4tYm9yZGVyLXJhZGl1cy1zbTogMC4zNThyZW0gIWRlZmF1bHQ7XG5cbiRidG4tdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCxcbiAgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZCAwcywgYm9yZGVyIDBzICFkZWZhdWx0O1xuXG4vLyBGb3Jtc1xuJGN1c3RvbS1jb250cm9sLWJvcmRlci1jb2xvcjogI2Q4ZDZkZTtcbiRsYWJlbC1tYXJnaW4tYm90dG9tOiAwLjI4NTdyZW0gIWRlZmF1bHQ7XG5cbiRpbnB1dC1wYWRkaW5nLXk6IDAuNDM4cmVtICFkZWZhdWx0O1xuJGlucHV0LXBhZGRpbmcteDogMXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1mb250LXNpemU6IDFyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodC1iYXNlICFkZWZhdWx0O1xuXG4kaW5wdXQtcGFkZGluZy15LXNtOiAwLjE4OHJlbSAhZGVmYXVsdDtcbiRpbnB1dC1wYWRkaW5nLXgtc206IDAuODU3cmVtICFkZWZhdWx0O1xuJGlucHV0LWZvbnQtc2l6ZS1zbTogMC44NTdyZW0gIWRlZmF1bHQ7XG5cbiRpbnB1dC1wYWRkaW5nLXktbGc6IDAuNzVyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtcGFkZGluZy14LWxnOiAxLjE0M3JlbSAhZGVmYXVsdDtcbiRpbnB1dC1mb250LXNpemUtbGc6IDEuMTQzcmVtICFkZWZhdWx0O1xuXG4kaW5wdXQtZGlzYWJsZWQtYmc6ICNlZmVmZWYgIWRlZmF1bHQ7XG5cbiRpbnB1dC1jb2xvcjogJGJvZHktY29sb3IgIWRlZmF1bHQ7XG4kaW5wdXQtYm9yZGVyLWNvbG9yOiAkY3VzdG9tLWNvbnRyb2wtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJGlucHV0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKCRibGFjaywgMC4wNzUpICFkZWZhdWx0O1xuXG4kaW5wdXQtYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kaW5wdXQtYm9yZGVyLXJhZGl1cy1sZzogJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kaW5wdXQtYm9yZGVyLXJhZGl1cy1zbTogJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG5cbiRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3I6ICRwcmltYXJ5ICFkZWZhdWx0O1xuJGlucHV0LWZvY3VzLWJveC1zaGFkb3c6IDAgM3B4IDEwcHggMCByZ2JhKCRibGFjaywgMC4xKSAhZGVmYXVsdDtcblxuJGlucHV0LXBsYWNlaG9sZGVyLWNvbG9yOiAkdGV4dC1tdXRlZCAhZGVmYXVsdDtcbiRpbnB1dC1wbGFpbnRleHQtY29sb3I6ICRib2R5LWNvbG9yICFkZWZhdWx0O1xuXG4kaW5wdXQtaGVpZ2h0OiAyLjcxNHJlbSAhZGVmYXVsdDtcbiRpbnB1dC1oZWlnaHQtc206IDIuMTQycmVtICFkZWZhdWx0O1xuJGlucHV0LWhlaWdodC1sZzogMy4yODU3cmVtICFkZWZhdWx0O1xuXG4kaW5wdXQtZ3JvdXAtYWRkb24tYmc6IHdoaXRlICFkZWZhdWx0O1xuJGN1c3RvbS1mb3Jtcy10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsXG4gIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQgMHMsIGJvcmRlci1jb2xvciAwcyAhZGVmYXVsdDtcblxuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1ib3JkZXItY29sb3I6ICRjdXN0b20tY29udHJvbC1ib3JkZXItY29sb3I7XG5cbiRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWJvcmRlci1yYWRpdXM6IDNweCAhZGVmYXVsdDtcbiRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWNoZWNrZWQtY29sb3I6IHdoaXRlICFkZWZhdWx0O1xuJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaW5kZXRlcm1pbmF0ZS1jb2xvcjogd2hpdGUgIWRlZmF1bHQ7XG4kY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pY29uLWNoZWNrZWQ6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDkuNSA3LjUnJTNFJTNDcG9seWxpbmUgcG9pbnRzPScwLjc1IDQuMzUgNC4xOCA2Ljc1IDguNzUgMC43NScgc3R5bGU9J2ZpbGw6bm9uZTtzdHJva2U6JTIzZmZmO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6MS41cHgnLyUzRSUzQy9zdmclM0VcIik7XG5cbiRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWljb24taW5kZXRlcm1pbmF0ZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPScjeyRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWluZGV0ZXJtaW5hdGUtY29sb3J9JyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1taW51cyclM0UlM0NsaW5lIHgxPSc1JyB5MT0nMTInIHgyPScxOScgeTI9JzEyJyUzRSUzQy9saW5lJTNFJTNDL3N2ZyUzRVwiKTtcblxuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWRpc2FibGVkLWJnOiByZ2JhKCRwcmltYXJ5LCAwLjY1KTtcblxuJGN1c3RvbS1yYWRpby1pbmRpY2F0b3ItaWNvbi1jaGVja2VkOiBub25lO1xuXG4kY3VzdG9tLWZpbGUtaGVpZ2h0LWlubmVyOiAkaW5wdXQtaGVpZ2h0ICFkZWZhdWx0O1xuXG4kY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItcGFkZGluZzogMXJlbSAhZGVmYXVsdDsgLy8gRXh0cmEgcGFkZGluZyB0byBhY2NvdW50IGZvciB0aGUgcHJlc2VuY2Ugb2YgdGhlIGJhY2tncm91bmQtaW1hZ2UgYmFzZWQgaW5kaWNhdG9yXG4kY3VzdG9tLXNlbGVjdC1kaXNhYmxlZC1iZzogJGlucHV0LWRpc2FibGVkLWJnICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtYmctc2l6ZTogMTBweCAxMHB4ICFkZWZhdWx0OyAvLyBJbiBwaXhlbHMgYmVjYXVzZSBpbWFnZSBkaW1lbnNpb25zXG4kY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItY29sb3I6ICRpbnB1dC1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3I6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzQnIGhlaWdodD0nNScgdmlld0JveD0nMCAwIDQgNSc+PHBhdGggZmlsbD0nI3skY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItY29sb3J9JyBkPSdNMiAwTDAgMmg0em0wIDVMMCAzaDR6Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xuXG4vLyAkY3VzdG9tLXNlbGVjdC1mZWVkYmFjay1pY29uLXBvc2l0aW9uOiBjZW50ZXIgcmlnaHQgKCRjdXN0b20tc2VsZWN0LXBhZGRpbmcteCArICRjdXN0b20tc2VsZWN0LWluZGljYXRvci1wYWRkaW5nKSAhZGVmYXVsdDtcbi8vICRjdXN0b20tc2VsZWN0LWZlZWRiYWNrLWljb24tc2l6ZTogJGlucHV0LWhlaWdodC1pbm5lci1oYWxmICRpbnB1dC1oZWlnaHQtaW5uZXItaGFsZiAhZGVmYXVsdDtcblxuJGN1c3RvbS1zZWxlY3QtYm9yZGVyLXJhZGl1czogJGlucHV0LWJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1mb2N1cy1ib3gtc2hhZG93OiAkaW5wdXQtZm9jdXMtYm94LXNoYWRvdyAhZGVmYXVsdDtcblxuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy15LXNtOiAkaW5wdXQtcGFkZGluZy15LXNtICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14LXNtOiAkaW5wdXQtcGFkZGluZy14LXNtICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtZm9udC1zaXplLXNtOiAkaW5wdXQtZm9udC1zaXplLXNtICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtaGVpZ2h0LXNtOiAkaW5wdXQtaGVpZ2h0LXNtICFkZWZhdWx0O1xuXG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXktbGc6ICRpbnB1dC1wYWRkaW5nLXktbGcgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXgtbGc6ICRpbnB1dC1wYWRkaW5nLXgtbGcgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1mb250LXNpemUtbGc6ICRpbnB1dC1mb250LXNpemUtbGcgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1oZWlnaHQtbGc6ICRpbnB1dC1oZWlnaHQtbGcgIWRlZmF1bHQ7XG5cbi8vIERyb3Bkb3duc1xuLy9cbi8vIERyb3Bkb3duIG1lbnUgY29udGFpbmVyIGFuZCBjb250ZW50cy5cblxuJGRyb3Bkb3duLWJvcmRlci1jb2xvcjogcmdiYSgkYmxhY2ssIDAuMDUpICFkZWZhdWx0O1xuJGRyb3Bkb3duLWJvcmRlci1yYWRpdXM6IDAuMzU4cmVtICFkZWZhdWx0O1xuJGRyb3Bkb3duLWJveC1zaGFkb3c6IDAgNXB4IDI1cHggcmdiYSgkYmxhY2ssIDAuMSkgIWRlZmF1bHQ7XG5cbiRkcm9wZG93bi1saW5rLWNvbG9yOiAkYm9keS1jb2xvciAhZGVmYXVsdDtcbiRkcm9wZG93bi1saW5rLWhvdmVyLWNvbG9yOiAkcHJpbWFyeSAhZGVmYXVsdDtcbiRkcm9wZG93bi1saW5rLWhvdmVyLWJnOiByZ2JhKCRwcmltYXJ5LCAwLjEyKSAhZGVmYXVsdDtcblxuJGRyb3Bkb3duLWRpdmlkZXItYmc6IHJnYmEoJGJsYWNrLCAwLjA4KSAhZGVmYXVsdDtcbiRkcm9wZG93bi1mb250LXNpemU6IDFyZW0gIWRlZmF1bHQ7XG4kZHJvcGRvd24tc3BhY2VyOiAwICFkZWZhdWx0O1xuJHppbmRleC1kcm9wZG93bjogMTAgIWRlZmF1bHQ7XG5cbiRkcm9wZG93bi1ib3gtc2hhZG93OiAwIDVweCAyNXB4IDAgcmdiYSgkYmxhY2ssIDAuMSkgIWRlZmF1bHQ7XG5cbiRkcm9wZG93bi1saW5rLWRpc2FibGVkLWNvbG9yOiAkdGV4dC1tdXRlZCAhZGVmYXVsdDtcblxuJGRyb3Bkb3duLWl0ZW0tcGFkZGluZy15OiAwLjY1cmVtICFkZWZhdWx0O1xuJGRyb3Bkb3duLWl0ZW0tcGFkZGluZy14OiAxLjI4cmVtICFkZWZhdWx0O1xuXG4kZHJvcGRvd24taGVhZGVyLWNvbG9yOiAkaGVhZGluZ3MtY29sb3IgIWRlZmF1bHQ7XG5cbiRkcm9wZG93bl9zcGFjaW5nOiAwLjVyZW07IC8vIGN1c3RvbVxuXG4vLyBQYWdpbmF0aW9uXG5cbiRwYWdpbmF0aW9uLXBhZGRpbmcteTogMC41cmVtICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tcGFkZGluZy14OiAwLjg1cmVtICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tcGFkZGluZy15LWxnOiAwLjU1NzVyZW0gIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1wYWRkaW5nLXgtbGc6IDFyZW0gIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1wYWRkaW5nLXktc206IDAuNDQzcmVtICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tcGFkZGluZy14LXNtOiAwLjc0NXJlbSAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24tZGlzYWJsZWQtY29sb3I6ICR0ZXh0LW11dGVkICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1jb2xvcjogJGJvZHktY29sb3IgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1iZzogI2YzZjJmNyAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24taG92ZXItY29sb3I6ICRwcmltYXJ5ICFkZWZhdWx0O1xuJHBhZ2luYXRpb24taG92ZXItYmc6ICNmM2YyZjcgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWFjdGl2ZS1jb2xvcjogJHByaW1hcnkgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWRpc2FibGVkLWNvbG9yOiAkdGV4dC1tdXRlZCAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWRpc2FibGVkLWJnOiAjZjNmMmY3ICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1mb250LXNpemUtbGc6IDEuMTRyZW0gIWRlZmF1bHQ7IC8vIGN1c3RvbVxuJHBhZ2luYXRpb24tZm9udC1zaXplLXNtOiAwLjg1N3JlbSAhZGVmYXVsdDsgLy8gY3VzdG9tXG5cbi8vIENhcmRzXG4kY2FyZC1zcGFjZXIteTogMS41cmVtICFkZWZhdWx0O1xuJGNhcmQtc3BhY2VyLXg6IDEuNXJlbSAhZGVmYXVsdDtcbiRjYXJkLWJvcmRlci1yYWRpdXM6IDAuNDI4cmVtICFkZWZhdWx0O1xuXG4vL0FsZXJ0c1xuXG4kYWxlcnQtcGFkZGluZy15OiAwLjcxcmVtICFkZWZhdWx0O1xuJGFsZXJ0LXBhZGRpbmcteDogMXJlbSAhZGVmYXVsdDtcbiRhbGVydC1ib3JkZXItcmFkaXVzOiAwLjM1OHJlbSAhZGVmYXVsdDtcbiRhbGVydC1saW5rLWZvbnQtd2VpZ2h0OiA3MDAgIWRlZmF1bHQ7XG5cbi8vIExpc3QgZ3JvdXBcblxuJGxpc3QtZ3JvdXAtYm9yZGVyLXJhZGl1czogMC4zNThyZW0gIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1kaXNhYmxlZC1jb2xvcjogJHRleHQtbXV0ZWQgIWRlZmF1bHQ7XG5cbiRsaXN0LWdyb3VwLWFjdGlvbi1hY3RpdmUtY29sb3I6ICR3aGl0ZSAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWFjdGlvbi1hY3RpdmUtYmc6ICRwcmltYXJ5ICFkZWZhdWx0O1xuXG4vLyBOYXYgdGFic1xuXG4kbmF2LWxpbmstcGFkZGluZy15OiAwLjM1OHJlbSAhZGVmYXVsdDtcbiRuYXYtbGluay1wYWRkaW5nLXg6IDAuNXJlbSAhZGVmYXVsdDtcbiRuYXYtbGluay1kaXNhYmxlZC1jb2xvcjogJHRleHQtbXV0ZWQgIWRlZmF1bHQ7XG5cbiRuYXYtdGFicy1ib3JkZXItd2lkdGg6IDAgIWRlZmF1bHQ7XG4kbmF2LXRhYnMtYm9yZGVyLXJhZGl1czogMC4yNSAhZGVmYXVsdDtcbiRuYXYtdGFicy1saW5rLWFjdGl2ZS1jb2xvcjogJHByaW1hcnkgIWRlZmF1bHQ7XG5cbiRuYXYtdGFicy1saW5rLWFjdGl2ZS1iZzogdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG5cbiRuYXYtcGlsbHMtYm9yZGVyLXJhZGl1czogJGJ0bi1ib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuXG4vLyBuYXZiYXJcblxuJGZsb2F0aW5nLW5hdi1tYXJnaW46IDEuM3JlbTtcblxuLy8gVG9vbHRpcHNcblxuJHRvb2x0aXAtYmc6ICMzMjMyMzIgIWRlZmF1bHQ7XG4kdG9vbHRpcC1wYWRkaW5nLXk6IDAuNHJlbSAhZGVmYXVsdDtcbiR0b29sdGlwLXBhZGRpbmcteDogMC43NzVyZW0gIWRlZmF1bHQ7XG4kdG9vbHRpcC1mb250LXNpemU6IDAuODU3cmVtICFkZWZhdWx0O1xuJHRvb2x0aXAtYm9yZGVyLXJhZGl1czogMC4zNThyZW0gIWRlZmF1bHQ7XG4kdG9vbHRpcC1vcGFjaXR5OiAxICFkZWZhdWx0O1xuJHRvb2x0aXAtbWF4LXdpZHRoOiAyMjBweCAhZGVmYXVsdDtcblxuLy8gUG9wb3ZlcnNcblxuJHBvcG92ZXItZm9udC1zaXplOiAxcmVtICFkZWZhdWx0O1xuJHBvcG92ZXItYm9yZGVyLXdpZHRoOiAwICFkZWZhdWx0O1xuJHBvcG92ZXItYm9yZGVyLXJhZGl1czogMC4zNThyZW0gIWRlZmF1bHQ7XG4kcG9wb3Zlci1ib3JkZXItY29sb3I6ICRib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kcG9wb3Zlci1ib3gtc2hhZG93OiAwIDAgMTBweCAwIHJnYmEoJGJsYWNrLCAwLjEpICFkZWZhdWx0O1xuXG4kcG9wb3Zlci1oZWFkZXItYmc6ICRwcmltYXJ5ICFkZWZhdWx0O1xuJHBvcG92ZXItaGVhZGVyLWNvbG9yOiAkd2hpdGUgIWRlZmF1bHQ7XG4kcG9wb3Zlci1oZWFkZXItcGFkZGluZy15OiAwLjY1cmVtICFkZWZhdWx0O1xuJHBvcG92ZXItaGVhZGVyLXBhZGRpbmcteDogMS4yMXJlbSAhZGVmYXVsdDtcblxuLy8gVG9hc3RzXG5cbiR0b2FzdC1tYXgtd2lkdGg6IDM4MHB4ICFkZWZhdWx0O1xuJHRvYXN0LXBhZGRpbmcteDogMS4xNHJlbSAhZGVmYXVsdDtcbiR0b2FzdC1wYWRkaW5nLXk6IDAuMTVyZW0gIWRlZmF1bHQ7XG4kdG9hc3QtZm9udC1zaXplOiAwLjg1N3JlbSAhZGVmYXVsdDtcbiR0b2FzdC1jb2xvcjogJGJvZHktY29sb3IgIWRlZmF1bHQ7XG4kdG9hc3QtYm9yZGVyLXdpZHRoOiAwICFkZWZhdWx0O1xuJHRvYXN0LWJvcmRlci1yYWRpdXM6IDAuMjg2cmVtICFkZWZhdWx0O1xuJHRvYXN0LWJveC1zaGFkb3c6IDAgMnB4IDIwcHggMCByZ2JhKCRibGFjaywgMC4wOCkgIWRlZmF1bHQ7XG5cbiR0b2FzdC1oZWFkZXItY29sb3I6ICRib2R5LWNvbG9yICFkZWZhdWx0O1xuJHRvYXN0LWhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGUgIWRlZmF1bHQ7XG5cbi8vIFByb2dyZXNzXG5cbiRwcm9ncmVzcy1oZWlnaHQ6IDAuODU3cmVtICFkZWZhdWx0O1xuJHByb2dyZXNzLWJvcmRlci1yYWRpdXM6IDVyZW0gIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2UgKiAwLjg1NyAhZGVmYXVsdDtcbiRwcm9ncmVzcy1iZzogcmdiYSgkcHJpbWFyeSwgMC4xMikgIWRlZmF1bHQ7XG5cbi8vIEJyZWFkY3J1bWJzXG5cbiRicmVhZGNydW1iLWZvbnQtc2l6ZTogMXJlbSAhZGVmYXVsdDtcblxuJGJyZWFkY3J1bWItcGFkZGluZy15OiAwLjNyZW0gIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1pdGVtLXBhZGRpbmc6IDAuNnJlbSAhZGVmYXVsdDtcblxuJGJyZWFkY3J1bWItbWFyZ2luLWJvdHRvbTogMCAhZGVmYXVsdDtcblxuJGJyZWFkY3J1bWItYmc6IHRyYW5zcGFyZW50ICFkZWZhdWx0O1xuJGJyZWFkY3J1bWItZGl2aWRlci1jb2xvcjogJGJvZHktY29sb3IgIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1hY3RpdmUtY29sb3I6ICRib2R5LWNvbG9yICFkZWZhdWx0O1xuXG4kYnJlYWRjcnVtYi1ib3JkZXItcmFkaXVzOiAwICFkZWZhdWx0O1xuXG4vLyBDYXJvdXNlbFxuXG4kY2Fyb3VzZWwtY29udHJvbC1jb2xvcjogJHdoaXRlICFkZWZhdWx0O1xuJGNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uLWJnOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCIjeyRjYXJvdXNlbC1jb250cm9sLWNvbG9yfVwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci1jaGV2cm9uLWxlZnRcIj48cG9seWxpbmUgcG9pbnRzPVwiMTUgMTggOSAxMiAxNSA2XCI+PC9wb2x5bGluZT48L3N2Zz4nKSAhZGVmYXVsdDtcbiRjYXJvdXNlbC1jb250cm9sLW5leHQtaWNvbi1iZzogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiI3skY2Fyb3VzZWwtY29udHJvbC1jb2xvcn1cIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItY2hldnJvbi1yaWdodFwiPjxwb2x5bGluZSBwb2ludHM9XCI5IDE4IDE1IDEyIDkgNlwiPjwvcG9seWxpbmU+PC9zdmc+JykgIWRlZmF1bHQ7XG5cbi8vIEJhZGdlc1xuXG4kYmFkZ2UtZm9udC1zaXplOiA4NSUgIWRlZmF1bHQ7XG4kYmFkZ2UtcGFkZGluZy15OiAwLjNyZW0gIWRlZmF1bHQ7XG4kYmFkZ2UtcGFkZGluZy14OiAwLjVyZW0gIWRlZmF1bHQ7XG4kYmFkZ2UtZm9udC13ZWlnaHQ6IDYwMCAhZGVmYXVsdDtcbiRiYWRnZS1ib3JkZXItcmFkaXVzOiAwLjM1OHJlbSAhZGVmYXVsdDtcblxuJGJhZGdlLXBpbGwtcGFkZGluZy14OiAwLjVyZW0gIWRlZmF1bHQ7XG5cbi8vIE1vZGFsXG4kbW9kYWwtaW5uZXItcGFkZGluZzogMC44cmVtIDEuNHJlbSAhZGVmYXVsdDtcblxuJG1vZGFsLWZvb3Rlci1ib3JkZXItY29sb3I6IHJnYmEoJGJsYWNrLCAwLjA1KSAhZGVmYXVsdDtcblxuJG1vZGFsLWhlYWRlci1wYWRkaW5nLXk6IDAuOHJlbSAhZGVmYXVsdDtcbiRtb2RhbC1oZWFkZXItcGFkZGluZy14OiAxLjRyZW0gIWRlZmF1bHQ7XG4kbW9kYWwtY29udGVudC1ib3JkZXItcmFkaXVzOiAwLjM1OHJlbSAhZGVmYXVsdDtcblxuJG1vZGFsLXhsOiA5NCUgIWRlZmF1bHQ7XG4kbW9kYWwtc206IDQwMHB4ICFkZWZhdWx0O1xuXG4vLyAgICBTbGlkZSBJbiBNb2RhbFxuJG1vZGFsLXNsaWRlLWluLXdpZHRoLXNtOiAyNXJlbSAhZGVmYXVsdDsgLy8gY3VzdG9tXG4kbW9kYWwtc2xpZGUtaW4td2lkdGg6IDI4cmVtICFkZWZhdWx0OyAvLyBjdXN0b21cbiRtb2RhbC1zbGlkZS1pbi13aWR0aC1sZzogMzByZW0gIWRlZmF1bHQ7IC8vIGN1c3RvbVxuXG4vLyBDbG9zZVxuXG4kY2xvc2UtZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2UgKiAyICFkZWZhdWx0O1xuJGNsb3NlLWZvbnQtd2VpZ2h0OiA0MDAgIWRlZmF1bHQ7XG4kY2xvc2UtY29sb3I6ICRoZWFkaW5ncy1jb2xvciAhZGVmYXVsdDtcblxuLy8gQ29kZVxuXG4kY29kZS1mb250LXNpemU6IDkwJSAhZGVmYXVsdDtcbiRrYmQtYmc6ICNlZWUgIWRlZmF1bHQ7XG5cbi8vIFN3aXRjaFxuJGN1c3RvbS1zd2l0Y2gtd2lkdGg6IDNyZW0gIWRlZmF1bHQ7XG4kY3VzdG9tLXN3aXRjaC1pbmRpY2F0b3ItYm9yZGVyLXJhZGl1czogMXJlbSAhZGVmYXVsdDtcbiRjdXN0b20tc3dpdGNoLWluZGljYXRvci1zaXplOiAxcmVtICFkZWZhdWx0O1xuXG4vL3N2ZyBjb2xvclxuJHN2Zy1jb2xvci1saWdodDogIzYyNjI2MiAhZGVmYXVsdDtcblxuLy8gU1ZHIGljb25zXG4vLyBGb3IgQnJlYWRjcnVtYlxuJGRvdWJsZS1jaGV2cm9uLXJpZ2h0OiBcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nY3VycmVudENvbG9yJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1jaGV2cm9ucy1yaWdodCclM0UlM0Nwb2x5bGluZSBwb2ludHM9JzEzIDE3IDE4IDEyIDEzIDcnJTNFJTNDL3BvbHlsaW5lJTNFJTNDcG9seWxpbmUgcG9pbnRzPSc2IDE3IDExIDEyIDYgNyclM0UlM0MvcG9seWxpbmUlM0UlM0Mvc3ZnJTNFXCI7XG4vLyBDaGV2cm9uIEljb25zXG4kY2hldnJvbi1sZWZ0OiBcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nY3VycmVudENvbG9yJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1jaGV2cm9uLWxlZnQnJTNFJTNDcG9seWxpbmUgcG9pbnRzPScxNSAxOCA5IDEyIDE1IDYnJTNFJTNDL3BvbHlsaW5lJTNFJTNDL3N2ZyUzRVwiO1xuJGNoZXZyb24tcmlnaHQ6IFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSdjdXJyZW50Q29sb3InIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tcmlnaHQnJTNFJTNDcG9seWxpbmUgcG9pbnRzPSc5IDE4IDE1IDEyIDkgNiclM0UlM0MvcG9seWxpbmUlM0UlM0Mvc3ZnJTNFXCI7XG4kY2hldnJvbi11cDogXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9J2N1cnJlbnRDb2xvcicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItY2hldnJvbi11cCclM0UlM0Nwb2x5bGluZSBwb2ludHM9JzE4IDE1IDEyIDkgNiAxNSclM0UlM0MvcG9seWxpbmUlM0UlM0Mvc3ZnJTNFXCI7XG4kY2hldnJvbi1kb3duOiBcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nY3VycmVudENvbG9yJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1jaGV2cm9uLWRvd24nJTNFJTNDcG9seWxpbmUgcG9pbnRzPSc2IDkgMTIgMTUgMTggOSclM0UlM0MvcG9seWxpbmUlM0UlM0Mvc3ZnJTNFXCI7XG5cbiRkb3dubG9hZDogXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9J2N1cnJlbnRDb2xvcicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItZG93bmxvYWQnJTNFJTNDcGF0aCBkPSdNMjEgMTV2NGEyIDIgMCAwIDEtMiAySDVhMiAyIDAgMCAxLTItMnYtNCclM0UlM0MvcGF0aCUzRSUzQ3BvbHlsaW5lIHBvaW50cz0nNyAxMCAxMiAxNSAxNyAxMCclM0UlM0MvcG9seWxpbmUlM0UlM0NsaW5lIHgxPScxMicgeTE9JzE1JyB4Mj0nMTInIHkyPSczJyUzRSUzQy9saW5lJTNFJTNDL3N2ZyUzRVwiO1xuJHJlbW92ZTogXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9J2N1cnJlbnRDb2xvcicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXIteCclM0UlM0NsaW5lIHgxPScxOCcgeTE9JzYnIHgyPSc2JyB5Mj0nMTgnJTNFJTNDL2xpbmUlM0UlM0NsaW5lIHgxPSc2JyB5MT0nNicgeDI9JzE4JyB5Mj0nMTgnJTNFJTNDL2xpbmUlM0UlM0Mvc3ZnJTNFXCI7XG4kY2hlY2s6IFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyNCcgaGVpZ2h0PScyNCcgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9J2N1cnJlbnRDb2xvcicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItY2hlY2snJTNFJTNDcG9seWxpbmUgcG9pbnRzPScyMCA2IDkgMTcgNCAxMiclM0UlM0MvcG9seWxpbmUlM0UlM0Mvc3ZnJTNFXCI7XG4kY2lyY2xlOiBcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSdjdXJyZW50Q29sb3InIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWNpcmNsZSclM0UlM0NjaXJjbGUgY3g9JzEyJyBjeT0nMTInIHI9JzEwJyUzRSUzQy9jaXJjbGUlM0UlM0Mvc3ZnJTNFXCI7XG4kaW5mb0ljb246IFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyNCcgaGVpZ2h0PScyNCcgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9J2N1cnJlbnRDb2xvcicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItaW5mbyclM0UlM0NjaXJjbGUgY3g9JzEyJyBjeT0nMTInIHI9JzEwJyUzRSUzQy9jaXJjbGUlM0UlM0NsaW5lIHgxPScxMicgeTE9JzE2JyB4Mj0nMTInIHkyPScxMiclM0UlM0MvbGluZSUzRSUzQ2xpbmUgeDE9JzEyJyB5MT0nOCcgeDI9JzEyLjAxJyB5Mj0nOCclM0UlM0MvbGluZSUzRSUzQy9zdmclM0VcIjtcbiR3YXJuaW5nSWNvbjogXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzI0JyBoZWlnaHQ9JzI0JyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nY3VycmVudENvbG9yJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1hbGVydC10cmlhbmdsZSclM0UlM0NwYXRoIGQ9J00xMC4yOSAzLjg2TDEuODIgMThhMiAyIDAgMCAwIDEuNzEgM2gxNi45NGEyIDIgMCAwIDAgMS43MS0zTDEzLjcxIDMuODZhMiAyIDAgMCAwLTMuNDIgMHonJTNFJTNDL3BhdGglM0UlM0NsaW5lIHgxPScxMicgeTE9JzknIHgyPScxMicgeTI9JzEzJyUzRSUzQy9saW5lJTNFJTNDbGluZSB4MT0nMTInIHkxPScxNycgeDI9JzEyLjAxJyB5Mj0nMTcnJTNFJTNDL2xpbmUlM0UlM0Mvc3ZnJTNFXCI7XG4kbWVudTogXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI0IDI0JyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHN0cm9rZT0nY3VycmVudENvbG9yJyBzdHJva2Utd2lkdGg9JzInIGZpbGw9J25vbmUnIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2Nzcy1pNmR6cTEnJTNFJTNDbGluZSB4MT0nMycgeTE9JzEyJyB4Mj0nMjEnIHkyPScxMiclM0UlM0MvbGluZSUzRSUzQ2xpbmUgeDE9JzMnIHkxPSc2JyB4Mj0nMjEnIHkyPSc2JyUzRSUzQy9saW5lJTNFJTNDbGluZSB4MT0nMycgeTE9JzE4JyB4Mj0nMjEnIHkyPScxOCclM0UlM0MvbGluZSUzRSUzQy9zdmclM0VcIjtcblxuJGNoYXQtYmctbGlnaHQ6ICdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlkWFJtTFRnaVB6NEtQQ0V0TFNCSFpXNWxjbUYwYjNJNklFRmtiMkpsSUVsc2JIVnpkSEpoZEc5eUlESXpMakF1TVN3Z1UxWkhJRVY0Y0c5eWRDQlFiSFZuTFVsdUlDNGdVMVpISUZabGNuTnBiMjQ2SURZdU1EQWdRblZwYkdRZ01Da2dJQzB0UGdvOGMzWm5JSFpsY25OcGIyNDlJakV1TVNJZ2FXUTlJa3hoZVdWeVh6RWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SWdlRzFzYm5NNmVHeHBibXM5SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpFNU9Ua3ZlR3hwYm1zaUlIZzlJakJ3ZUNJZ2VUMGlNSEI0SWdvSklIWnBaWGRDYjNnOUlqQWdNQ0F5TmpBZ01qWXdJaUJ6ZEhsc1pUMGlaVzVoWW14bExXSmhZMnRuY205MWJtUTZibVYzSURBZ01DQXlOakFnTWpZd095SWdlRzFzT25Od1lXTmxQU0p3Y21WelpYSjJaU0krQ2p4emRIbHNaU0IwZVhCbFBTSjBaWGgwTDJOemN5SStDZ2t1YzNRd2UyWnBiR3d0Y25Wc1pUcGxkbVZ1YjJSa08yTnNhWEF0Y25Wc1pUcGxkbVZ1YjJSa08yWnBiR3c2STBVeFJUQkZPVHQ5Q2p3dmMzUjViR1UrQ2p4blBnb0pQR2NnYVdROUlta3RiR2xyWlMxbWIyOWtJajRLQ1FrOGNHRjBhQ0JqYkdGemN6MGljM1F3SWlCa1BTSk5NalF1TkN3eE5tTXdMaklzTUM0MkxEQXVOQ3d4TGpNc01DNDFMREpvTFRNdU4yd3hMaklzTWk0emJEQXVOU3d3TGpsc0xUQXVNaXd3TGpGV01qaGpNaTR5TERFdU55d3lMamNzTkM0NExERXNOd29KQ1FsakxUQXVPQ3d4TFRFdU9Td3hMamN0TXk0eUxERXVPVll6TjJNdE1DNDVMRE11TlMwMExqRXNOaTAzTGpnc05tZ3RNakJqTFRNdU5pd3dMVFl1T0MweUxqVXROeTQzTFRaMkxUQXVNV010TWk0M0xUQXVOQzAwTGpZdE15MDBMakl0TlM0M1l6QXVNaTB4TGpNc01DNDVMVEl1TlN3eExqa3RNeTR5Q2drSkNYWXROaTQ0YkMwd0xqZ3RNUzQyYkMwd0xqUXRNQzQ1YkRBdU9TMHdMalJNTFRFM0xERTRhQzB6UXkweE55NHlMRFV1TmkwMExqa3RNaTR5TERjdU5Td3dMalpETVRVdU5Dd3lMak1zTWpFdU9TdzRMaklzTWpRdU5Dd3hObm9nVFMweE1pNDBMREU0WXkwd0xqSXNNQzB3TGpNc01DMHdMalFzTUM0eENna0pDV3d0TXk0eExERXVObXd3TGprc01TNDRiREV1TXkwd0xqZGpNQzQ0TFRBdU5Dd3hMamd0TUM0MExESXVOeXd3YkRJdU1pd3hMakZqTUM0ekxEQXVNU3d3TGpZc01DNHhMREF1T1N3d2JESXVNaTB4TGpGak1DNDRMVEF1TkN3eExqZ3RNQzQwTERJdU55d3diREl1TWl3eExqRUtDUWtKWXpBdU15d3dMakVzTUM0MkxEQXVNU3d3TGprc01Hd3lMakl0TVM0eFl6QXVPQzB3TGpRc01TNDRMVEF1TkN3eUxqY3NNR3d5TGpJc01TNHhRemN1TkN3eU1pdzNMamNzTWpJc09Dd3lNUzQ1YkRJdU9TMHhMak5qTUM0NExUQXVNeXd4TGpjdE1DNHpMREl1TkN3d2JESXVPU3d4TGpNS0NRa0pZekF1TXl3d0xqRXNNQzQyTERBdU1Td3dMamtzTUd3ekxqRXRNUzQxYkMwd0xqa3RNUzQ0YkMweExqUXNNQzQzWXkwd0xqZ3NNQzQwTFRFdU55d3dMalF0TWk0MkxEQXVNV3d0TWk0NExURXVNa014TWk0ekxERTRMREV5TGpJc01UZ3NNVEl1TVN3eE9Hd3dMREFLQ1FrSll5MHdMakVzTUMwd0xqTXNNQzB3TGpRc01DNHhiQzB5TGpnc01TNHlZeTB3TGpnc01DNDBMVEV1T0N3d0xqTXRNaTQyTFRBdU1VdzBMREU0TGpGRE15NDVMREU0TERNdU55d3hPQ3d6TGpZc01UaHNNQ3d3WXkwd0xqSXNNQzB3TGpNc01DMHdMalFzTUM0eFRERXNNVGt1TWdvSkNRbGpMVEF1T0N3d0xqUXRNUzQ0TERBdU5DMHlMamNzTUV3dE5Dd3hPQzR4UXkwMExqRXNNVGd0TkM0ekxERTRMVFF1TkN3eE9Hd3dMREJqTFRBdU1pd3dMVEF1TXl3d0xUQXVOQ3d3TGpGTUxUY3NNVGt1TW1NdE1DNDRMREF1TkMweExqZ3NNQzQwTFRJdU55d3diQzB5TGpJdE1TNHhDZ2tKQ1VNdE1USXVNU3d4T0MweE1pNHpMREU0TFRFeUxqUXNNVGhNTFRFeUxqUXNNVGhNTFRFeUxqUXNNVGg2SUUwdE1USXVOQ3d4Tm1ndE5DNDVReTB4TXk0MUxEVXVNUzB4TGpVdE1DNDNMRGt1TlN3ekxqSmpOaXd5TGpFc01UQXVOeXcyTGpnc01USXVPQ3d4TWk0NGFDMHlMakZzTFRBdU1TMHdMakVLQ1FrSlRERTVMamtzTVRaSUxURXlMalJNTFRFeUxqUXNNVFo2SUUweE55NDVMREl6TGpkc01TNDBMVEF1TjJneExqTjJNbWd0TXpaMkxURXVNV3d3TGpNdE1DNHliREV1TkMwd0xqZG9NaTQyYkRFdU5Dd3dMamRqTUM0NExEQXVOQ3d4TGpnc01DNDBMREl1Tnl3d2JERXVOQzB3TGpkSUxUTUtDUWtKYkRFdU5Dd3dMamRqTUM0NExEQXVOQ3d4TGpnc01DNDBMREl1Tnl3d1RESXVNeXd5TTJneUxqWnNNUzQwTERBdU4yTXdMamNzTUM0MExERXVOeXd3TGpRc01pNDFMREJzTVM0M0xUQXVOMmd6TGpKc01TNDNMREF1TjBNeE5pNHlMREkwTGpFc01UY3VNU3d5TkM0eExERTNMamtzTWpNdU4zb0tDUWtKSUUwdE1UTXVPQ3d5TjJ3eE5pNDBMRFF1T1V3eE9DNDVMREkzU0MweE15NDRlaUJOTFRFMExqUXNNamxvTUM0emJERTJMamNzTld3eE5pNDNMVFZvTUM0ell6RXVOeXd3TERNc01TNHpMRE1zTTNNdE1TNHpMRE10TXl3emFDMHpOR010TVM0M0xEQXRNeTB4TGpNdE15MHpDZ2tKQ1VNdE1UY3VOQ3d6TUM0ekxURTJMakVzTWprdE1UUXVOQ3d5T1hvZ1RTMHhNeTR4TERNM1l6QXVPQ3d5TGpRc015NHhMRFFzTlM0M0xEUm9NakJqTWk0MUxEQXNOQzQ0TFRFdU5pdzFMamN0TkVNeE9DNHlMRE0zTFRFekxqRXNNemN0TVRNdU1Td3pOM29pTHo0S0NRazhjR0YwYUNCcFpEMGljR0YwYURaZlptbHNiQzFqYjNCNUlpQmpiR0Z6Y3owaWMzUXdJaUJrUFNKTk1qZzBMalFzTVRaak1DNHlMREF1Tml3d0xqUXNNUzR6TERBdU5Td3lhQzB6TGpkc01TNHlMREl1TTJ3d0xqVXNNQzQ1YkMwd0xqSXNNQzR4VmpJNFl6SXVNaXd4TGpjc01pNDNMRFF1T0N3eExEY0tDUWtKWXkwd0xqZ3NNUzB4TGprc01TNDNMVE11TWl3eExqbFdNemRqTFRBdU9Td3pMalV0TkM0eExEWXROeTQ0TERab0xUSXdZeTB6TGpZc01DMDJMamd0TWk0MUxUY3VOeTAyZGkwd0xqRmpMVEl1Tnkwd0xqUXROQzQyTFRNdE5DNHlMVFV1TjJNd0xqSXRNUzR6TERBdU9TMHlMalVzTVM0NUxUTXVNZ29KQ1FsMkxUWXVPR3d0TUM0NExURXVObXd0TUM0MExUQXVPV3d3TGprdE1DNDBUREkwTXl3eE9HZ3RNMk15TGpndE1USXVOQ3d4TlM0eExUSXdMaklzTWpjdU5TMHhOeTQwUXpJM05TNDBMREl1TXl3eU9ERXVPU3c0TGpJc01qZzBMalFzTVRaNklFMHlORGN1TlN3eE9Bb0pDUWxqTFRBdU1pd3dMVEF1TXl3d0xUQXVOQ3d3TGpGc0xUTXVNU3d4TGpac01DNDVMREV1T0d3eExqTXRNQzQzWXpBdU9DMHdMalFzTVM0NExUQXVOQ3d5TGpjc01Hd3lMaklzTVM0eFl6QXVNeXd3TGpFc01DNDJMREF1TVN3d0xqa3NNR3d5TGpJdE1TNHhDZ2tKQ1dNd0xqZ3RNQzQwTERFdU9DMHdMalFzTWk0M0xEQnNNaTR5TERFdU1XTXdMak1zTUM0eExEQXVOaXd3TGpFc01DNDVMREJzTWk0eUxURXVNV013TGpndE1DNDBMREV1T0Mwd0xqUXNNaTQzTERCc01pNHlMREV1TVdNd0xqTXNNQzR4TERBdU5pd3dMakVzTUM0NUxEQnNNaTQ1TFRFdU13b0pDUWxqTUM0NExUQXVNeXd4TGpjdE1DNHpMREl1TkN3d2JESXVPU3d4TGpOak1DNHpMREF1TVN3d0xqWXNNQzR4TERBdU9Td3diRE11TVMweExqVnNMVEF1T1MweExqaHNMVEV1TkN3d0xqZGpMVEF1T0N3d0xqUXRNUzQzTERBdU5DMHlMallzTUM0eGJDMHlMamd0TVM0eUNna0pDV010TUM0eExUQXVNUzB3TGpNdE1DNHhMVEF1TkMwd0xqRnNNQ3d3WXkwd0xqRXNNQzB3TGpNc01DMHdMalFzTUM0eGJDMHlMamdzTVM0eVl5MHdMamdzTUM0MExURXVPQ3d3TGpNdE1pNDJMVEF1TVd3dE1pNHpMVEV1TVdNdE1DNHhMVEF1TVMwd0xqTXRNQzR4TFRBdU5TMHdMakZzTUN3d0Nna0pDV010TUM0eUxEQXRNQzR6TERBdE1DNDBMREF1TVd3dE1pNHlMREV1TVdNdE1DNDRMREF1TkMweExqZ3NNQzQwTFRJdU55d3diQzB5TGpJdE1TNHhZeTB3TGpFdE1DNHhMVEF1TXkwd0xqRXRNQzQwTFRBdU1Xd3dMREJqTFRBdU1pd3dMVEF1TXl3d0xUQXVOQ3d3TGpGc0xUSXVNaXd4TGpFS0NRa0pZeTB3TGpnc01DNDBMVEV1T0N3d0xqUXRNaTQzTERCc0xUSXVNaTB4TGpGRE1qUTNMamtzTVRnc01qUTNMamNzTVRnc01qUTNMalVzTVRoTU1qUTNMalVzTVRoTU1qUTNMalVzTVRoNklFMHlORGN1TlN3eE5tZ3ROQzQ1WXpNdU9TMHhNQzQ1TERFMUxqa3RNVFl1Tnl3eU5pNDRMVEV5TGpnS0NRa0pZellzTWk0eExERXdMamNzTmk0NExERXlMamdzTVRJdU9HZ3RNaTR4YkMwd0xqRXRNQzR4YkMwd0xqTXNNQzR4U0RJME55NDFUREkwTnk0MUxERTJlaUJOTWpjM0xqa3NNak11TjJ3eExqUXRNQzQzYURFdU0zWXlhQzB6Tm5ZdE1TNHhiREF1TXkwd0xqSnNNUzQwTFRBdU4yZ3lMallLQ1FrSmJERXVOQ3d3TGpkak1DNDRMREF1TkN3eExqZ3NNQzQwTERJdU55d3diREV1TkMwd0xqZG9NaTQyYkRFdU5Dd3dMamRqTUM0NExEQXVOQ3d4TGpnc01DNDBMREl1Tnl3d2JERXVOQzB3TGpkb01pNDJiREV1TkN3d0xqZGpNQzQ0TERBdU5Dd3hMamNzTUM0MExESXVOaXd3TGpGc01TNDNMVEF1TndvSkNRbG9NeTR5YkRFdU55d3dMamRETWpjMkxqSXNNalF1TVN3eU56Y3VNU3d5TkM0eExESTNOeTQ1TERJekxqZE1NamMzTGprc01qTXVOM29nVFRJME5pNHlMREkzYkRFMkxqUXNOQzQ1VERJM09Td3lOMGd5TkRZdU1ub2dUVEkwTlM0MUxESTVhREF1TTJ3eE5pNDNMRFZzTVRZdU55MDFhREF1TXdvSkNRbGpNUzQzTERBc015d3hMak1zTXl3emN5MHhMak1zTXkwekxETm9MVE0wWXkweExqY3NNQzB6TFRFdU15MHpMVE5UTWpRekxqa3NNamtzTWpRMUxqVXNNamw2SUUweU5EWXVPU3d6TjJNd0xqZ3NNaTQwTERNdU1TdzBMRFV1Tml3MGFESXdZekl1TlN3d0xEUXVPQzB4TGpZc05TNDNMVFFLQ1FrSlNESTBOaTQ1ZWlJdlBnb0pDVHh3WVhSb0lHTnNZWE56UFNKemREQWlJR1E5SWsweE5Ua3VOU3d5TVdNdE1TNHpMVE11TmkwMExqY3ROaTA0TGpVdE5tZ3ROREpqTFRNdU9Dd3dMVGN1TWl3eUxqUXRPQzQxTERaakxUTXVNeXd3TGpNdE5TNDRMRE11TWkwMUxqVXNOaTQxWXpBdU1pd3lMamtzTWk0MkxEVXVNaXcxTGpVc05TNDFDZ2tKQ1dNdE1TNDNMRFF1Tnl3d0xqZ3NPUzQ0TERVdU5Dd3hNUzQxWXpFc01DNHpMRElzTUM0MUxETXNNQzQxYURReVl6VXNNQ3c1TFRRc09TMDVZekF0TVMwd0xqSXRNaTR4TFRBdU5TMHpZek11TXkwd0xqTXNOUzQ0TFRNdU1pdzFMalV0Tmk0MUNna0pDVU14TmpRdU55d3lNeTQyTERFMk1pNDBMREl4TGpNc01UVTVMalVzTWpGNklFMHhOVEVzTVRkb0xUUXlZeTB5TGpjc01DMDFMaklzTVM0MkxUWXVNeXcwYURVMExqZERNVFUyTGpJc01UZ3VOaXd4TlRNdU55d3hOeXd4TlRFc01UZDZJRTB4TkRFdU55dzBNd29KQ1Fsak1pNHhMVEV1Tnl3ekxqTXROQzR6TERNdU15MDNhQzB5WXpBc015NDVMVE11TVN3M0xUY3NOMmd0TkM0ell6SXVNUzB4TGpjc015NHpMVFF1TXl3ekxqTXROMmd0TW1Nd0xETXVPUzB6TGpFc055MDNMRGRvTFRRdU0yTXlMakV0TVM0M0xETXVNeTAwTGpNc015NHpMVGRvTFRJS0NRa0pZekFzTXk0NUxUTXVNU3czTFRjc04yZ3ROMk10TXk0NUxEQXROeTB6TGpFdE55MDNjek11TVMwM0xEY3ROMmcwTW1Nekxqa3NNQ3czTERNdU1TdzNMRGR6TFRNdU1TdzNMVGNzTjBneE5ERXVOM29nVFRFd09Td3lOMk10TXl3d0xUVXVPQ3d4TGpVdE55NDFMRFJJTVRBeENna0pDV010TWk0eUxEQXROQzB4TGpndE5DMDBjekV1T0MwMExEUXROR2cxT0dNeUxqSXNNQ3cwTERFdU9DdzBMRFJ6TFRFdU9DdzBMVFFzTkdndE1DNDFZeTB4TGpjdE1pNDFMVFF1TlMwMExUY3VOUzAwU0RFd09Yb2lMejRLQ1FrOGNHRjBhQ0JqYkdGemN6MGljM1F3SWlCa1BTSk5NemtzTVRFMVl6UXVOQ3d3TERndE15NDJMRGd0T0hNdE15NDJMVGd0T0MwNGN5MDRMRE11TmkwNExEaFRNelF1Tml3eE1UVXNNemtzTVRFMWVpQk5ORFVzTVRBM1l6QXNNeTR6TFRJdU55dzJMVFlzTm5NdE5pMHlMamN0TmkwMkNna0pDWE15TGpjdE5pdzJMVFpUTkRVc01UQXpMamNzTkRVc01UQTNlaUJOTkRJc056aDJMVEpvT0hZdE5rZzBNR010TWk0eUxEQXROQ3d4TGpndE5DdzBkakV3U0RJeWJDMHhMak1zTkV3eU1DdzVNR2d5TGpKc015NDRMRFF3YURJMmJETXVPQzAwTUVnMU9Hd3RNQzQzTFRKTU5UWXNPRFJJTkRKV056aDZDZ2tKQ1NCTk16Z3NOelIyTVRCb01sWTNOR2c0ZGkweWFDMDRRek00TGprc056SXNNemdzTnpJdU9Td3pPQ3czTkhvZ1RUUXdMRGcyYURFMExqWnNNQzQzTERKSU1qSXVPR3d3TGpjdE1rZzBNSG9nVFRVekxqZ3NPVEJJTWpRdU1td3pMallzTXpob01qSXVORXcxTXk0NExEa3dlaUl2UGdvSkNUeHdZWFJvSUdOc1lYTnpQU0p6ZERBaUlHUTlJazB4TWprc09USm9MVFoyTkdndE5uWTBhQzAyZGpFMGFDMHpiREF1TWl3eWJETXVPQ3d6TW1nek5td3pMamd0TXpKc01DNHlMVEpvTFROMkxURTBhQzAyZGkwMGFDMDJkaTAwU0RFeU9Yb2dUVEUwTnl3eE1UUjJMVEV5YUMwMGRqUm9NM1k0U0RFME53b0pDUWw2SUUweE5EUXNNVEUwZGkwMmFDMDBkalpJTVRRMGVpQk5NVE00TERFeU1IWXRNVFpvTFRSMk1Ua3VNa014TXpVdU5pd3hNakl1TlN3eE16Y3NNVEl4TGpRc01UTTRMREV5TUhvZ1RURXpNaXd4TWpNdU9GWXhNREJvTFRSMk1qTXVPQW9KQ1FsRE1USTVMak1zTVRJMExqRXNNVE13TGpjc01USTBMakVzTVRNeUxERXlNeTQ0ZWlCTk1USTJMREV5TXk0eVZqRXdOR2d0TkhZeE5rTXhNak1zTVRJeExqUXNNVEkwTGpRc01USXlMalVzTVRJMkxERXlNeTR5ZWlCTk1USXdMREV4TkhZdE5tZ3ROSFkyU0RFeU1Ib2dUVEV4TkN3eE1UUjJMVGhvTXdvSkNRbDJMVFJvTFRSMk1USklNVEUwZWlCTk1UUXhMREV3TW5ZdE5HZ3ROSFkwYUROMk5HZ3hWakV3TW5vZ1RURXpOU3d4TURKMkxUaG9MVFIyTkdnemRqUklNVE0xZWlCTk1USTVMRGs0ZGkwMGFDMDBkamhvTVhZdE5FZ3hNamw2SUUweE1qTXNNVEF5ZGkwMGFDMDBkamhvTVhZdE5FZ3hNak42Q2drSkNTQk5NVE13TERFeU5tTTFMamtzTUN3eE1DNDVMVFF1TWl3eE1TNDRMVEV3YURjdU9Xd3RNeTQxTERNd2FDMHpNaTQwYkMwekxqVXRNekJvTnk0NVF6RXhPUzR4TERFeU1TNDRMREV5TkM0eExERXlOaXd4TXpBc01USTJlaUl2UGdvSkNUeHdZWFJvSUdOc1lYTnpQU0p6ZERBaUlHUTlJazB5TVRJc09EWjJNbWd0TkhZdE1rZ3lNVEo2SUUweU1UWXNPRFpvTFRKMk1tZ3lWamcyZWlCTk1UazJMRGcyVERFNU5pdzRObU10TWk0M0xEQXVOeTAwTGpVc015NHpMVE11T1N3Mll6QXVOQ3d4TGpnc01TNDJMRE11TWl3ekxqTXNNeTQ0Q2drSkNXd3dMakVzTUM0eWJERXVNU3cwTGpWak1DNHlMREF1T1N3eExERXVOU3d4TGprc01TNDFiREFzTUd3M0xESTBMalpqTUM0eUxEQXVPU3d4TERFdU5Dd3hMamtzTVM0MGFEVmpNQzQ1TERBc01TNDNMVEF1Tml3eExqa3RNUzQwYkRjdE1qUXVObU13TGprc01Dd3hMamN0TUM0MkxERXVPUzB4TGpVS0NRa0piREV1TVMwMExqVnNNQzR4TFRBdU1tTXlMall0TUM0NUxEUXVNUzB6TGpjc015NHlMVFl1TTJNdE1DNDJMVEV1TnkweUxUTXRNeTQ0TFRNdU0xWTRObU13TFRjdU55MDJMak10TVRRdE1UUXRNVFJUTVRrMkxEYzRMak1zTVRrMkxEZzJlaUJOTWpBd0xEZzJhRFoyTW1ndE9Rb0pDUWxqTFRFdU55d3dMVE1zTVM0ekxUTXNNM014TGpNc015d3pMRE5vTWpaak1TNDNMREFzTXkweExqTXNNeTB6Y3kweExqTXRNeTB6TFROb0xUTjJMVEpvTW1Nd0xUWXVOaTAxTGpRdE1USXRNVEl0TVRKekxURXlMRFV1TkMweE1pd3hNa2d5TURCNklFMHhPVGd1Tml3eE1EQnNMVEV0TkdneU5DNDVDZ2tKQ1d3dE1TdzBTREU1T0M0MmVpQk5NakEzTGpVc01USTJiQzAyTGprdE1qUm9NVGd1TjJ3dE5pNDVMREkwU0RJd055NDFlaUJOTVRVd0xESTBNbU14TWk0eUxEQXNNakl0T1M0NExESXlMVEl5Y3kwNUxqZ3RNakl0TWpJdE1qSnpMVEl5TERrdU9DMHlNaXd5TWdvSkNRbFRNVE0zTGpnc01qUXlMREUxTUN3eU5ESjZJRTB4TnpRc01qSXdZekFzTVRNdU15MHhNQzQzTERJMExUSTBMREkwY3kweU5DMHhNQzQzTFRJMExUSTBiREFzTUdNd0xURXpMak1zTVRBdU55MHlOQ3d5TkMweU5GTXhOelFzTWpBMkxqY3NNVGMwTERJeU1Ib2dUVEUwTlM0MkxESXpOeTQzQ2drSkNXd3lMVEF1T1dNeExqVXRNQzQyTERNdU1pMHdMallzTkM0M0xEQnNNaXd3TGpsak1DNDVMREF1TkN3eUxEQXNNaTQxTFRBdU9Hd3hMakV0TVM0NVl6QXVPQzB4TGpRc01pNHlMVEl1TkN3ekxqZ3RNaTQ0YkRJdU1TMHdMalZqTVMwd0xqSXNNUzQyTFRFdU1Td3hMalV0TWk0eGJDMHdMakl0TWk0eUNna0pDV010TUM0eExURXVOaXd3TGpRdE15NHlMREV1TkMwMExqVnNNUzQwTFRFdU4yTXdMamN0TUM0NExEQXVOeTB4TGprc01DMHlMalpzTFRFdU5DMHhMamRqTFRFdU1TMHhMakl0TVM0MkxUSXVPQzB4TGpRdE5DNDFiREF1TWkweUxqSmpNQzR4TFRFdE1DNDJMVEV1T1MweExqWXRNaTR4Q2drSkNXd3RNaTR4TFRBdU5XTXRNUzQyTFRBdU5DMHpMVEV1TkMwekxqZ3RNaTQ0YkMweExqRXRNUzQ1WXkwd0xqVXRNQzQ1TFRFdU5pMHhMakl0TWk0MUxUQXVPR3d0TWl3d0xqbGpMVEV1TlN3d0xqWXRNeTR5TERBdU5pMDBMamNzTUd3dE1pMHdMamxqTFRBdU9TMHdMalF0TWl3d0xUSXVOU3d3TGpnS0NRa0piQzB4TERJdU1XTXRNQzQ0TERFdU5DMHlMaklzTWk0MExUTXVPQ3d5TGpoc0xUSXVNU3d3TGpWakxURXNNQzR5TFRFdU5pd3hMakV0TVM0MUxESXVNV3d3TGpJc01pNHlZekF1TVN3eExqWXRNQzQwTERNdU1pMHhMalFzTkM0MWJDMHhMalFzTVM0M0Nna0pDV010TUM0M0xEQXVPQzB3TGpjc01TNDVMREFzTWk0MmJERXVOQ3d4TGpkak1TNHhMREV1TWl3eExqWXNNaTQ0TERFdU5DdzBMalZzTFRBdU1pd3lMakpqTFRBdU1Td3hMREF1Tml3eExqa3NNUzQyTERJdU1Xd3lMakVzTUM0MVl6RXVOaXd3TGpRc015d3hMalFzTXk0NExESXVPR3d4TGpFc01TNDVDZ2tKQ1VNeE5ETXVOaXd5TXpjdU9Dd3hORFF1Tnl3eU16Z3VNU3d4TkRVdU5pd3lNemN1TjB3eE5EVXVOaXd5TXpjdU4zb2dUVEUwT0M0MExESXpPQzQzWXpFdE1DNDBMREl1TVMwd0xqUXNNeTR4TERCc01pd3dMamxqTVM0NExEQXVPQ3cwTERBdU1TdzFMVEV1Tm13eExqRXRNUzQ1Q2drSkNXTXdMall0TUM0NUxERXVOUzB4TGpZc01pNDFMVEV1T0d3eUxqRXRNQzQxWXpFdU9TMHdMalFzTXk0ekxUSXVNeXd6TGpFdE5DNHliQzB3TGpJdE1pNHlZeTB3TGpFdE1TNHhMREF1TXkweUxqSXNNUzB6YkRFdU5DMHhMamRqTVM0ekxURXVOU3d4TGpNdE15NDNMREF0TlM0eWJDMHhMalF0TVM0M0Nna0pDV010TUM0M0xUQXVPQzB4TGpFdE1TNDVMVEV0TTJ3d0xqSXRNaTR5WXpBdU1pMHlMVEV1TVMwekxqZ3RNeTR4TFRRdU1td3RNaTR4TFRBdU5XTXRNUzR4TFRBdU1pMHlMVEF1T1MweUxqVXRNUzQ0YkMweExqRXRNUzQ1WXkweExURXVOeTB6TGpJdE1pNDBMVFV0TVM0MmJDMHlMREF1T1FvSkNRbGpMVEVzTUM0MExUSXVNU3d3TGpRdE15NHhMREJzTFRJdE1DNDVZeTB4TGpndE1DNDRMVFF0TUM0eExUVXNNUzQyYkMweExqRXNNUzQ1WXkwd0xqWXNNQzQ1TFRFdU5Td3hMall0TWk0MUxERXVPR3d0TWk0eExEQXVOV010TVM0NUxEQXVOQzB6TGpNc01pNHpMVE11TVN3MExqSnNNQzR5TERJdU1nb0pDUWxqTUM0eExERXVNUzB3TGpNc01pNHlMVEVzTTJ3dE1TNDBMREV1TjJNdE1TNHpMREV1TlMweExqTXNNeTQzTERBc05TNHliREV1TkN3eExqZGpNQzQzTERBdU9Dd3hMakVzTVM0NUxERXNNMnd0TUM0eUxESXVNbU10TUM0eUxESXNNUzR4TERNdU9Dd3pMakVzTkM0eWJESXVNU3d3TGpVS0NRa0pZekV1TVN3d0xqSXNNaXd3TGprc01pNDFMREV1T0d3eExqRXNNUzQ1WXpFc01TNDNMRE11TWl3eUxqUXNOU3d4TGpaTU1UUTRMalFzTWpNNExqZDZJRTB4TlRJc01qQTNZekF0TUM0MkxEQXVOQzB4TERFdE1YTXhMREF1TkN3eExERnpMVEF1TkN3eExURXNNUW9KQ1FsVE1UVXlMREl3Tnk0MkxERTFNaXd5TURkNklFMHhOVGdzTWpBNVl6QXRNQzQyTERBdU5DMHhMREV0TVhNeExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01WTXhOVGdzTWpBNUxqWXNNVFU0TERJd09Yb2dUVEUwTnl3eU1UQmpNQzB3TGpZc01DNDBMVEVzTVMweGN6RXNNQzQwTERFc01Rb0pDUWx6TFRBdU5Dd3hMVEVzTVZNeE5EY3NNakV3TGpZc01UUTNMREl4TUhvZ1RURTBNU3d5TVRCak1DMHdMallzTUM0MExURXNNUzB4Y3pFc01DNDBMREVzTVhNdE1DNDBMREV0TVN3eFV6RTBNU3d5TVRBdU5pd3hOREVzTWpFd2VpQk5NVFEwTERJd05XTXdMVEF1Tml3d0xqUXRNU3d4TFRFS0NRa0pjekVzTUM0MExERXNNWE10TUM0MExERXRNU3d4VXpFME5Dd3lNRFV1Tml3eE5EUXNNakExZWlCTk1UTTJMREl4TTJNd0xUQXVOaXd3TGpRdE1Td3hMVEZ6TVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGVE1UTTJMREl4TXk0MkxERXpOaXd5TVRONklFMHhNemtzTWpFNUNna0pDV013TFRBdU5pd3dMalF0TVN3eExURnpNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZUTVRNNUxESXhPUzQyTERFek9Td3lNVGw2SUUweE16a3NNakkxWXpBdE1DNDJMREF1TkMweExERXRNWE14TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVZNeE16a3NNakkxTGpZc01UTTVMREl5TlhvS0NRa0pJRTB4TkRNc01qTXlZekF0TUM0MkxEQXVOQzB4TERFdE1YTXhMREF1TkN3eExERnpMVEF1TkN3eExURXNNVk14TkRNc01qTXlMallzTVRRekxESXpNbm9nVFRFME9Dd3lNekJqTUMwd0xqWXNNQzQwTFRFc01TMHhjekVzTUM0MExERXNNWE10TUM0MExERXRNU3d4Q2drSkNWTXhORGdzTWpNd0xqWXNNVFE0TERJek1Ib2dUVEUxTXl3eU16UmpNQzB3TGpZc01DNDBMVEVzTVMweGN6RXNNQzQwTERFc01YTXRNQzQwTERFdE1Td3hVekUxTXl3eU16UXVOaXd4TlRNc01qTTBlaUJOTVRVM0xESXlPR013TFRBdU5pd3dMalF0TVN3eExURnpNU3d3TGpRc01Td3hDZ2tKQ1hNdE1DNDBMREV0TVN3eFV6RTFOeXd5TWpndU5pd3hOVGNzTWpJNGVpQk5NVFl6TERJeU5HTXdMVEF1Tml3d0xqUXRNU3d4TFRGek1Td3dMalFzTVN3eGN5MHdMalFzTVMweExERlRNVFl6TERJeU5DNDJMREUyTXl3eU1qUjZJRTB4TlRrc01qSXhZekF0TUM0MkxEQXVOQzB4TERFdE1Rb0pDUWx6TVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGVE1UVTVMREl5TVM0MkxERTFPU3d5TWpGNklFMHhOak1zTWpFNFl6QXRNQzQyTERBdU5DMHhMREV0TVhNeExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01WTXhOak1zTWpFNExqWXNNVFl6TERJeE9Ib2dUVEUxT0N3eU1UUUtDUWtKWXpBdE1DNDJMREF1TkMweExERXRNWE14TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVZNeE5UZ3NNakUwTGpZc01UVTRMREl4TkhvZ1RURXpOQ3d5TWpCak1DMHdMallzTUM0MExURXNNUzB4Y3pFc01DNDBMREVzTVhNdE1DNDBMREV0TVN3eFV6RXpOQ3d5TWpBdU5pd3hNelFzTWpJd2Vnb0pDUWtnVFRFMU1Dd3lNalZqTWk0NExEQXNOUzB5TGpJc05TMDFjeTB5TGpJdE5TMDFMVFZ6TFRVc01pNHlMVFVzTlZNeE5EY3VNaXd5TWpVc01UVXdMREl5TlhvZ1RURTFOeXd5TWpCak1Dd3pMamt0TXk0eExEY3ROeXczY3kwM0xUTXVNUzAzTFRkek15NHhMVGNzTnkwM0Nna0pDVk14TlRjc01qRTJMakVzTVRVM0xESXlNSG9nVFRJME15d3hPVEZqTFRBdU5pd3dMVEVzTUM0MExURXNNWE13TGpRc01Td3hMREZvTW1Nd0xqWXNNQ3d4TFRBdU5Dd3hMVEZ6TFRBdU5DMHhMVEV0TVVneU5ETjZJRTB5TmpJc01qQXdZekF0TUM0MkxEQXVOQzB4TERFdE1XZ3lDZ2tKQ1dNd0xqWXNNQ3d4TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVdndE1rTXlOakl1TkN3eU1ERXNNall5TERJd01DNDJMREkyTWl3eU1EQjZJRTB5TkRnc01qQTFZeTB3TGpZc01DMHhMREF1TkMweExERnpNQzQwTERFc01Td3hhREpqTUM0MkxEQXNNUzB3TGpRc01TMHhjeTB3TGpRdE1TMHhMVEVLQ1FrSlNESTBPSG9nVFRJeU15d3lNRFpqTFRBdU5pd3dMVEVzTUM0MExURXNNWE13TGpRc01Td3hMREZvTW1Nd0xqWXNNQ3d4TFRBdU5Dd3hMVEZ6TFRBdU5DMHhMVEV0TVVneU1qTjZJRTB5TWpnc01qRXdZeTB3TGpZc01DMHhMREF1TkMweExERnpNQzQwTERFc01Td3hhRElLQ1FrSll6QXVOaXd3TERFdE1DNDBMREV0TVhNdE1DNDBMVEV0TVMweFNESXlPSG9nVFRJek55d3lNVEJqTUMwd0xqWXNNQzQwTFRFc01TMHhhREpqTUM0MkxEQXNNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZvTFRKRE1qTTNMalFzTWpFeExESXpOeXd5TVRBdU5pd3lNemNzTWpFd2Vnb0pDUWtnVFRJMU1pd3lNVEZqTUMwd0xqWXNNQzQwTFRFc01TMHhhREpqTUM0MkxEQXNNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZvTFRKRE1qVXlMalFzTWpFeUxESTFNaXd5TVRFdU5pd3lOVElzTWpFeGVpQk5NalkwTERJd09XTXRNQzQyTERBdE1Td3dMalF0TVN3eGN6QXVOQ3d4TERFc01XZ3lDZ2tKQ1dNd0xqWXNNQ3d4TFRBdU5Dd3hMVEZ6TFRBdU5DMHhMVEV0TVVneU5qUjZJRTB5TlRNc01UazFZekF0TUM0MkxEQXVOQzB4TERFdE1XZ3lZekF1Tml3d0xERXNNQzQwTERFc01YTXRNQzQwTERFdE1Td3hhQzB5UXpJMU15NDBMREU1Tml3eU5UTXNNVGsxTGpZc01qVXpMREU1TlhvS0NRa0pJRTB5TXpRc01UazFZeTB3TGpZc01DMHhMREF1TkMweExERnpNQzQwTERFc01Td3hhREpqTUM0MkxEQXNNUzB3TGpRc01TMHhjeTB3TGpRdE1TMHhMVEZJTWpNMGVpQk5NalF3TERJd01HTXdMVEF1Tml3d0xqUXRNU3d4TFRGb01tTXdMallzTUN3eExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01Rb0pDUWxvTFRKRE1qUXdMalFzTWpBeExESTBNQ3d5TURBdU5pd3lOREFzTWpBd2VpQk5NakUxTERJeE5XTXdMVEF1TlN3d0xUQXVPU3d3TFRFdU5HTXRNaTQxTFRFdU1TMHpMamN0TkMweUxqWXROaTQyWXpBdU1pMHdMalVzTUM0MUxURXNNQzQ1TFRFdU5HTXRNQzQ1TFRJc01DMDBMaklzTVM0NUxUVXVNZ29KQ1FsakxUQXVPQzB5TGpZc01DNDNMVFV1TkN3ekxqUXROaTR5YkRBc01HTXdMalF0TUM0MUxEQXVPUzB3TGprc01TNDFMVEV1TVdNd0xqVXRNaTQzTERNdU1TMDBMalVzTlM0NExUUXVNV013TGpjc01DNHhMREV1TkN3d0xqUXNNaXd3TGpoak5TNHpMVE11T0N3eE1TNDJMVFV1T1N3eE9DNHlMVFV1T1FvSkNRbGpOaTQ0TERBc01UTXVNU3d5TGpJc01UZ3VNaXcxTGpsak1pNHpMVEV1Tml3MUxqUXRNU3czTERFdU0yTXdMalFzTUM0MkxEQXVOeXd4TGpNc01DNDRMREpqTUM0MkxEQXVNaXd4TGpFc01DNDJMREV1TlN3eExqRmpNaTQzTERBdU9DdzBMaklzTXk0MUxETXVOQ3cyTGpKc01Dd3dDZ2tKQ1dNeExqa3NNU3d5TGpjc015NHlMREV1T1N3MUxqSmpNUzQ1TERJc01TNDRMRFV1TWkwd0xqSXNOMk10TUM0MExEQXVOQzB3TGprc01DNDNMVEV1TlN3eFl6QXNNQzQxTERBc01DNDVMREFzTVM0MGRqRm9MVFl5ZGkweFNESXhOWG9nVFRJeE5TNDRMREl3Tnk0NENna0pDV010TUM0ekxERXVNaTB3TGpVc01pNDBMVEF1Tml3ekxqWmpMVEV1TXkweExURXVOaTB5TGprdE1DNDJMVFF1TW13d0xEQkRNakUxTERJd055NDFMREl4TlM0MExESXdOeTQzTERJeE5TNDRMREl3Tnk0NFRESXhOUzQ0TERJd055NDRlaUJOTWpFM0xqTXNNakF6TGpJS0NRa0pZeTB3TGpRc01DNDVMVEF1Tnl3eExqZ3RNU3d5TGpkakxURXRNQzQwTFRFdU5pMHhMalV0TVM0ekxUSXVOV013TGpJdE1DNDFMREF1Tmkwd0xqa3NNUzR4TFRFdU1rTXlNVFl1TlN3eU1ESXVOaXd5TVRZdU9Td3lNREl1T1N3eU1UY3VNeXd5TURNdU1rd3lNVGN1TXl3eU1ETXVNbm9LQ1FrSklFMHlNVGt1Tml3eE9UZ3VOMk10TUM0MUxEQXVPUzB4TERFdU9DMHhMalVzTWk0M1l5MHhMak10TVMweExqVXRNaTQ1TFRBdU5TMDBMakpqTUM0eExUQXVNaXd3TGpNdE1DNHpMREF1TkMwd0xqVkRNakU0TGpNc01UazNMallzTWpFNExqa3NNVGs0TGpNc01qRTVMallzTVRrNExqY0tDUWtKVERJeE9TNDJMREU1T0M0M2VpQk5Nakl3TGpnc01UazNZekF1TkMwd0xqVXNNQzQzTFRFc01TNHhMVEV1TldNdE1DNHpMVEF1TlMwd0xqa3RNQzQzTFRFdU5DMHdMalJ6TFRBdU55d3dMamt0TUM0MExERXVORU15TWpBdU15d3hPVFl1Tnl3eU1qQXVOU3d4T1RZdU9Td3lNakF1T0N3eE9UY0tDUWtKVERJeU1DNDRMREU1TjNvZ1RUSXlOaTR4TERFNU1TNHlZeTB4TERBdU9TMHlMREV1T0MweUxqa3NNaTQ0WXkwd0xqTXRNQzR6TFRBdU55MHdMall0TVM0eExUQXVPR013TGpRdE1TNDJMREl1TVMweUxqVXNNeTQzTFRJdU1Rb0pDUWxETWpJMUxqa3NNVGt4TGpFc01qSTJMREU1TVM0eUxESXlOaTR4TERFNU1TNHlUREl5Tmk0eExERTVNUzR5ZWlCTk1qWTRMamdzTVRrMFl5MHdMamt0TVMweExqa3RNUzQ1TFRJdU9TMHlMamhqTVM0MUxUQXVOaXd6TGpNc01DNHhMRE11T1N3eExqY0tDUWtKWXpBc01DNHhMREF1TVN3d0xqSXNNQzR4TERBdU0wTXlOamt1TlN3eE9UTXVOQ3d5TmprdU1Td3hPVE11Tml3eU5qZ3VPQ3d4T1RSTU1qWTRMamdzTVRrMGVpQk5NamN3TGpFc01UazFMalZqTUM0MExEQXVOU3d3TGpnc01Td3hMakVzTVM0MENna0pDV013TGpVdE1DNHhMREF1T1Mwd0xqY3NNQzQ0TFRFdU1uTXRNQzQzTFRBdU9TMHhMakl0TUM0NFF6STNNQzQxTERFNU5TNHhMREkzTUM0ekxERTVOUzR6TERJM01DNHhMREU1TlM0MWVpQk5NamN6TGprc01qQXhMalJqTFRBdU5TMHdMamt0TVMweExqZ3RNUzQxTFRJdU53b0pDUWxqTUM0NExUQXVOQ3d4TGpRdE1TNHhMREV1TmkweVl6RXVNeXd4TGpFc01TNDBMRE1zTUM0MExEUXVNa015TnpRdU1pd3lNREV1TVN3eU56UXNNakF4TGpJc01qY3pMamtzTWpBeExqUjZJRTB5TnpVdU5pd3lNRFV1T1dNdE1DNHpMVEF1T1Mwd0xqWXRNUzQ0TFRFdE1pNDNDZ2tKQ1dNd0xqUXRNQzR6TERBdU9DMHdMallzTVM0eUxURmpNU3d3TGpVc01TNDBMREV1Tnl3eExESXVOME15TnpZdU5pd3lNRFV1TXl3eU56WXVNaXd5TURVdU55d3lOelV1Tml3eU1EVXVPWG9nVFRJM05pNDRMREl4TVM0MFl5MHdMakV0TVM0eUxUQXVOQzB5TGpRdE1DNDJMVE11TmdvSkNRbGpNQzQxTFRBdU1Td3dMamt0TUM0MExERXVNaTB3TGpaRE1qYzRMalFzTWpBNExqVXNNamM0TGpFc01qRXdMalFzTWpjMkxqZ3NNakV4TGpSTU1qYzJMamdzTWpFeExqUk1NamMyTGpnc01qRXhMalI2SUUweU56VXNNakUwWXkwd0xqVXRNVFl0TVRNdU9TMHlPQzQyTFRJNUxqa3RNamd1TVFvSkNRbGpMVEUxTGpNc01DNDFMVEkzTGpZc01USXVPQzB5T0M0eExESTRMakZJTWpjMVRESTNOU3d5TVRSNklFMDNNaTR6TERFNU9DNHhZeTB3TGpJdE1DNHpMVEF1TXkwd0xqY3RNQzR6TFRFdU1YWXRNVEpvTFRKMk1USmpNQ3d5TGpJc01TNDRMRFFzTkN3MENna0pDV014TGpJc01Dd3lMak10TUM0MUxETXVNUzB4TGpSak1DNDJMVEF1Tnl3d0xqa3RNUzQyTERBdU9TMHlMalYyTFRFeWFDMHlkakV5WXpBc01TNHhMVEF1T1N3eUxUSXNNbXd3TERCRE56TXVNeXd4T1Rrc056SXVOeXd4T1RndU55dzNNaTR6TERFNU9DNHhlaUJOTnpVc01UYzJDZ2tKQ1dNd0xqUXNNQ3d3TGpjc01Dd3hMakV0TUM0eFl6QXVOU3d5TGpJc01pNDJMRE11TlN3MExqZ3NNMk13TGpVdE1DNHhMREV0TUM0ekxERXVOQzB3TGpaak1TNHhMREl1TVN3eExqY3NOQzQwTERFdU55dzJMamQyTWpSak1Dd3pMak10TWk0M0xEWXROaXcyYUMwemRqa0tDUWtKWXpBc01pNDRMVEl1TWl3MUxUVXNOWE10TlMweUxqSXROUzAxZGkwNWFDMHpZeTB6TGpNc01DMDJMVEl1TnkwMkxUWjJMVEkwWXpBdE55NDNMRFl1TXkweE5Dd3hOQzB4TkVNM01Dd3hOek11T0N3M01pNHlMREUzTml3M05Td3hOelo2SUUwMU9Dd3hPVEYyTVRJS0NRa0pZekFzTUM0NExEQXVOU3d4TGpVc01TNHlMREV1T0dNd0xqa3NNQzQwTERFdU9Td3dMakVzTWk0MExUQXVOMk13TGpJdE1DNHpMREF1TXkwd0xqY3NNQzR6TFRFdU1YWXRNVEpvTW5ZeE1tTXdMREl1TWkweExqY3NOQzB6TGprc05HTXRNQzQxTERBdE1TMHdMakV0TVM0MExUQXVNZ29KQ1FsakxUQXVNaTB3TGpFdE1DNDBMVEF1TWkwd0xqY3RNQzR6ZGpJdU5XTXdMREl1TWl3eExqZ3NOQ3cwTERSb01UWmpNaTR5TERBc05DMHhMamdzTkMwMGRpMHlOR013TFRFdU5TMHdMakl0TWk0NUxUQXVOeTAwTGpKakxUQXVOQ3d3TGpFdE1DNDVMREF1TWkweExqTXNNQzR5Q2drSkNXTXRNaTR4TERBdE5DNHhMVEV1TVMwMUxqSXRNMk10TXkwd0xqRXROUzQyTFRJdE5pNDFMVFF1T1VNMk1pNDBMREUzTkN3MU9Dd3hOemtzTlRnc01UZzFWakU1TVhvZ1RUWTNMREl4TlhZNVl6QXNNUzQzTERFdU15d3pMRE1zTTNNekxURXVNeXd6TFROMkxUbElOamQ2SWk4K0Nna0pQSEJoZEdnZ1kyeGhjM005SW5OME1DSWdaRDBpVFMweE55d3hPVEZqTFRBdU5pd3dMVEVzTUM0MExURXNNWE13TGpRc01Td3hMREZvTW1Nd0xqWXNNQ3d4TFRBdU5Dd3hMVEZ6TFRBdU5DMHhMVEV0TVVndE1UZDZJRTB5TERJd01HTXdMVEF1Tml3d0xqUXRNU3d4TFRGb01nb0pDUWxqTUM0MkxEQXNNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZJTTBNeUxqUXNNakF4TERJc01qQXdMallzTWl3eU1EQjZJRTB0TVRJc01qQTFZeTB3TGpZc01DMHhMREF1TkMweExERnpNQzQwTERFc01Td3hhREpqTUM0MkxEQXNNUzB3TGpRc01TMHhjeTB3TGpRdE1TMHhMVEZJTFRFeWVnb0pDUWtnVFMwek55d3lNRFpqTFRBdU5pd3dMVEVzTUM0MExURXNNWE13TGpRc01Td3hMREZvTW1Nd0xqWXNNQ3d4TFRBdU5Dd3hMVEZ6TFRBdU5DMHhMVEV0TVVndE16ZDZJRTB0TXpJc01qRXdZeTB3TGpZc01DMHhMREF1TkMweExERnpNQzQwTERFc01Td3hhREpqTUM0MkxEQXNNUzB3TGpRc01TMHhDZ2tKQ1hNdE1DNDBMVEV0TVMweFNDMHpNbm9nVFMweU15d3lNVEJqTUMwd0xqWXNNQzQwTFRFc01TMHhhREpqTUM0MkxEQXNNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZvTFRKRExUSXlMallzTWpFeExUSXpMREl4TUM0MkxUSXpMREl4TUhvZ1RTMDRMREl4TVdNd0xUQXVOaXd3TGpRdE1Td3hMVEVLQ1FrSmFESmpNQzQyTERBc01Td3dMalFzTVN3eGN5MHdMalFzTVMweExERm9MVEpETFRjdU5pd3lNVEl0T0N3eU1URXVOaTA0TERJeE1Yb2dUVFFzTWpBNVl5MHdMallzTUMweExEQXVOQzB4TERGek1DNDBMREVzTVN3eGFESmpNQzQyTERBc01TMHdMalFzTVMweGN5MHdMalF0TVMweExURklOSG9LQ1FrSklFMHROeXd4T1RWak1DMHdMallzTUM0MExURXNNUzB4YURKak1DNDJMREFzTVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGb0xUSkRMVFl1Tml3eE9UWXROeXd4T1RVdU5pMDNMREU1TlhvZ1RTMHlOaXd4T1RWakxUQXVOaXd3TFRFc01DNDBMVEVzTVhNd0xqUXNNU3d4TERGb01nb0pDUWxqTUM0MkxEQXNNUzB3TGpRc01TMHhjeTB3TGpRdE1TMHhMVEZJTFRJMmVpQk5MVEl3TERJd01HTXdMVEF1Tml3d0xqUXRNU3d4TFRGb01tTXdMallzTUN3eExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01XZ3RNa010TVRrdU5pd3lNREV0TWpBc01qQXdMall0TWpBc01qQXdlaUJOTFRRMUxESXhOUW9KQ1Fsak1DMHdMalVzTUMwd0xqa3NNQzB4TGpSakxUSXVOUzB4TGpFdE15NDNMVFF0TWk0MkxUWXVObU13TGpJdE1DNDFMREF1TlMweExEQXVPUzB4TGpSakxUQXVPUzB5TERBdE5DNHlMREV1T1MwMUxqSmpMVEF1T0MweUxqWXNNQzQzTFRVdU5Dd3pMalF0Tmk0eWJEQXNNQW9KQ1Fsak1DNDBMVEF1TlN3d0xqa3RNQzQ1TERFdU5TMHhMakZqTUM0MUxUSXVOeXd6TGpFdE5DNDFMRFV1T0MwMExqRmpNQzQzTERBdU1Td3hMalFzTUM0MExESXNNQzQ0WXpVdU15MHpMamdzTVRFdU5pMDFMamtzTVRndU1pMDFMamxqTmk0NExEQXNNVE11TVN3eUxqSXNNVGd1TWl3MUxqa0tDUWtKWXpJdU15MHhMallzTlM0MExURXNOeXd4TGpOak1DNDBMREF1Tml3d0xqY3NNUzR6TERBdU9Dd3lZekF1Tml3d0xqSXNNUzR4TERBdU5pd3hMalVzTVM0eFl6SXVOeXd3TGpnc05DNHlMRE11TlN3ekxqUXNOaTR5YkRBc01HTXhMamtzTVN3eUxqY3NNeTR5TERFdU9TdzFMaklLQ1FrSll6RXVPU3d5TERFdU9DdzFMakl0TUM0eUxEZGpMVEF1TkN3d0xqUXRNQzQ1TERBdU55MHhMalVzTVdNd0xEQXVOU3d3TERBdU9Td3dMREV1TkhZeGFDMDJNbll0TVVndE5EVjZJRTB0TkRRdU1pd3lNRGN1T0dNdE1DNHpMREV1TWkwd0xqVXNNaTQwTFRBdU5pd3pMallLQ1FrSll5MHhMak10TVMweExqWXRNaTQ1TFRBdU5pMDBMakpzTUN3d1F5MDBOU3d5TURjdU5TMDBOQzQyTERJd055NDNMVFEwTGpJc01qQTNMamhNTFRRMExqSXNNakEzTGpoNklFMHROREl1Tnl3eU1ETXVNbU10TUM0MExEQXVPUzB3TGpjc01TNDRMVEVzTWk0M0Nna0pDV010TVMwd0xqUXRNUzQyTFRFdU5TMHhMak10TWk0MVl6QXVNaTB3TGpVc01DNDJMVEF1T1N3eExqRXRNUzR5UXkwME15NDFMREl3TWk0MkxUUXpMakVzTWpBeUxqa3ROREl1Tnl3eU1ETXVNa3d0TkRJdU55d3lNRE11TW5vZ1RTMDBNQzQwTERFNU9DNDNDZ2tKQ1dNdE1DNDFMREF1T1MweExERXVPQzB4TGpVc01pNDNZeTB4TGpNdE1TMHhMalV0TWk0NUxUQXVOUzAwTGpKak1DNHhMVEF1TWl3d0xqTXRNQzR6TERBdU5DMHdMalZETFRReExqY3NNVGszTGpZdE5ERXVNU3d4T1RndU15MDBNQzQwTERFNU9DNDNlaUJOTFRNNUxqSXNNVGszQ2drSkNXTXdMak10TUM0MUxEQXVOeTB4TERFdU1TMHhMalZqTFRBdU15MHdMalV0TUM0NUxUQXVOeTB4TGpRdE1DNDBjeTB3TGpjc01DNDVMVEF1TkN3eExqUkRMVE01TGpjc01UazJMamN0TXprdU5Td3hPVFl1T1Mwek9TNHlMREU1TjB3dE16a3VNaXd4T1RkNklFMHRNek11T1N3eE9URXVNZ29KQ1FsakxURXNNQzQ1TFRJc01TNDRMVEl1T1N3eUxqaGpMVEF1TXkwd0xqTXRNQzQzTFRBdU5pMHhMakV0TUM0NFl6QXVOQzB4TGpZc01pNHhMVEl1TlN3ekxqY3RNaTR4UXkwek5DNHhMREU1TVM0eExUTTBMREU1TVM0eUxUTXpMamtzTVRreExqSk1MVE16TGprc01Ua3hMako2SUUwNExqZ3NNVGswQ2drSkNXTXRNQzQ1TFRFdE1TNDVMVEV1T1MweUxqa3RNaTQ0WXpFdU5TMHdMallzTXk0ekxEQXVNU3d6TGprc01TNDNZekFzTUM0eExEQXVNU3d3TGpJc01DNHhMREF1TTBNNUxqVXNNVGt6TGpRc09TNHhMREU1TXk0MkxEZ3VPQ3d4T1RSTU9DNDRMREU1TkhvZ1RURXdMakVzTVRrMUxqVUtDUWtKWXpBdU5Dd3dMalVzTUM0NExERXNNUzR4TERFdU5HTXdMalV0TUM0eExEQXVPUzB3TGpjc01DNDRMVEV1TW1NdE1DNHhMVEF1TlMwd0xqY3RNQzQ1TFRFdU1pMHdMamhETVRBdU5Td3hPVFV1TVN3eE1DNHpMREU1TlM0ekxERXdMakVzTVRrMUxqVjZJRTB4TXk0NUxESXdNUzQwQ2drSkNXTXRNQzQxTFRBdU9TMHdMamt0TVM0NExURXVOUzB5TGpkak1DNDRMVEF1TkN3eExqUXRNUzR4TERFdU5pMHlZekV1TXl3eExqRXNNUzQwTERNc01DNDBMRFF1TWtNeE5DNHlMREl3TVM0eExERTBMREl3TVM0eUxERXpMamtzTWpBeExqUjZJRTB4TlM0M0xESXdOUzQ1Q2drSkNXTXRNQzR6TFRBdU9TMHdMall0TVM0NExURXRNaTQzWXpBdU5DMHdMak1zTUM0NExUQXVOaXd4TGpJdE1XTXhMREF1TlN3eExqUXNNUzQzTERFc01pNDNRekUyTGpZc01qQTFMak1zTVRZdU1pd3lNRFV1Tnl3eE5TNDNMREl3TlM0NWVpQk5NVFl1T0N3eU1URXVOQW9KQ1FsakxUQXVNUzB4TGpJdE1DNDBMVEl1TkMwd0xqWXRNeTQyWXpBdU5TMHdMakVzTUM0NUxUQXVOQ3d4TGpJdE1DNDJRekU0TGpRc01qQTRMalVzTVRndU1Td3lNVEF1TkN3eE5pNDRMREl4TVM0MFRERTJMamdzTWpFeExqUk1NVFl1T0N3eU1URXVOSG9nVFRFMUxESXhOQW9KQ1FsakxUQXVOUzB4TmkweE15NDVMVEk0TGpZdE1qa3VPUzB5T0M0eFl5MHhOUzR6TERBdU5TMHlOeTQyTERFeUxqZ3RNamd1TVN3eU9DNHhTREUxVERFMUxESXhOSG9pTHo0S0NUd3ZaejRLUEM5blBnbzhMM04yWno0Syc7XG4kY2hhdC1iZy1kYXJrOiAnZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpZFhSbUxUZ2lQejRLUENFdExTQkhaVzVsY21GMGIzSTZJRUZrYjJKbElFbHNiSFZ6ZEhKaGRHOXlJREkxTGpBdU1Dd2dVMVpISUVWNGNHOXlkQ0JRYkhWbkxVbHVJQzRnVTFaSElGWmxjbk5wYjI0NklEWXVNREFnUW5WcGJHUWdNQ2tnSUMwdFBnbzhjM1puSUhabGNuTnBiMjQ5SWpFdU1TSWdhV1E5SWt4aGVXVnlYekVpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUlnZUcxc2JuTTZlR3hwYm1zOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6RTVPVGt2ZUd4cGJtc2lJSGc5SWpCd2VDSWdlVDBpTUhCNElnb0pJSFpwWlhkQ2IzZzlJakFnTUNBeU5qQWdNall3SWlCemRIbHNaVDBpWlc1aFlteGxMV0poWTJ0bmNtOTFibVE2Ym1WM0lEQWdNQ0F5TmpBZ01qWXdPeUlnZUcxc09uTndZV05sUFNKd2NtVnpaWEoyWlNJK0NqeHpkSGxzWlNCMGVYQmxQU0owWlhoMEwyTnpjeUkrQ2drdWMzUXdlMlpwYkd3dGNuVnNaVHBsZG1WdWIyUmtPMk5zYVhBdGNuVnNaVHBsZG1WdWIyUmtPMlpwYkd3Nkl6RTNNVUV5TkR0OUNqd3ZjM1I1YkdVK0NqeG5QZ29KUEdjZ2FXUTlJbWt0YkdsclpTMW1iMjlrSWo0S0NRazhjR0YwYUNCamJHRnpjejBpYzNRd0lpQmtQU0pOTWpRdU5Dd3hObU13TGpJc01DNDJMREF1TkN3eExqTXNNQzQxTERKb0xUTXVOMnd4TGpJc01pNHpiREF1TlN3d0xqbHNMVEF1TWl3d0xqRldNamhqTWk0eUxERXVOeXd5TGpjc05DNDRMREVzTndvSkNRbGpMVEF1T0N3eExURXVPU3d4TGpjdE15NHlMREV1T1ZZek4yTXRNQzQ1TERNdU5TMDBMakVzTmkwM0xqZ3NObWd0TWpCakxUTXVOaXd3TFRZdU9DMHlMalV0Tnk0M0xUWjJMVEF1TVdNdE1pNDNMVEF1TkMwMExqWXRNeTAwTGpJdE5TNDNZekF1TWkweExqTXNNQzQ1TFRJdU5Td3hMamt0TXk0eUNna0pDWFl0Tmk0NGJDMHdMamd0TVM0MmJDMHdMalF0TUM0NWJEQXVPUzB3TGpSTUxURTNMREU0YUMwelF5MHhOeTR5TERVdU5pMDBMamt0TWk0eUxEY3VOU3d3TGpaRE1UVXVOQ3d5TGpNc01qRXVPU3c0TGpJc01qUXVOQ3d4Tm5vZ1RTMHhNaTQwTERFNFl5MHdMaklzTUMwd0xqTXNNQzB3TGpRc01DNHhDZ2tKQ1d3dE15NHhMREV1Tm13d0xqa3NNUzQ0YkRFdU15MHdMamRqTUM0NExUQXVOQ3d4TGpndE1DNDBMREl1Tnl3d2JESXVNaXd4TGpGak1DNHpMREF1TVN3d0xqWXNNQzR4TERBdU9Td3diREl1TWkweExqRmpNQzQ0TFRBdU5Dd3hMamd0TUM0MExESXVOeXd3YkRJdU1pd3hMakVLQ1FrSll6QXVNeXd3TGpFc01DNDJMREF1TVN3d0xqa3NNR3d5TGpJdE1TNHhZekF1T0Mwd0xqUXNNUzQ0TFRBdU5Dd3lMamNzTUd3eUxqSXNNUzR4UXpjdU5Dd3lNaXczTGpjc01qSXNPQ3d5TVM0NWJESXVPUzB4TGpOak1DNDRMVEF1TXl3eExqY3RNQzR6TERJdU5Dd3diREl1T1N3eExqTUtDUWtKWXpBdU15d3dMakVzTUM0MkxEQXVNU3d3TGprc01Hd3pMakV0TVM0MWJDMHdMamt0TVM0NGJDMHhMalFzTUM0M1l5MHdMamdzTUM0MExURXVOeXd3TGpRdE1pNDJMREF1TVd3dE1pNDRMVEV1TWtNeE1pNHpMREU0TERFeUxqSXNNVGdzTVRJdU1Td3hPR3d3TERBS0NRa0pZeTB3TGpFc01DMHdMak1zTUMwd0xqUXNNQzR4YkMweUxqZ3NNUzR5WXkwd0xqZ3NNQzQwTFRFdU9Dd3dMak10TWk0MkxUQXVNVXcwTERFNExqRkRNeTQ1TERFNExETXVOeXd4T0N3ekxqWXNNVGhzTUN3d1l5MHdMaklzTUMwd0xqTXNNQzB3TGpRc01DNHhUREVzTVRrdU1nb0pDUWxqTFRBdU9Dd3dMalF0TVM0NExEQXVOQzB5TGpjc01Fd3ROQ3d4T0M0eFF5MDBMakVzTVRndE5DNHpMREU0TFRRdU5Dd3hPR3d3TERCakxUQXVNaXd3TFRBdU15d3dMVEF1TkN3d0xqRk1MVGNzTVRrdU1tTXRNQzQ0TERBdU5DMHhMamdzTUM0MExUSXVOeXd3YkMweUxqSXRNUzR4Q2drSkNVTXRNVEl1TVN3eE9DMHhNaTR6TERFNExURXlMalFzTVRoTUxURXlMalFzTVRoTUxURXlMalFzTVRoNklFMHRNVEl1TkN3eE5tZ3ROQzQ1UXkweE15NDFMRFV1TVMweExqVXRNQzQzTERrdU5Td3pMakpqTml3eUxqRXNNVEF1Tnl3MkxqZ3NNVEl1T0N3eE1pNDRhQzB5TGpGc0xUQXVNUzB3TGpFS0NRa0pUREU1TGprc01UWklMVEV5TGpSTUxURXlMalFzTVRaNklFMHhOeTQ1TERJekxqZHNNUzQwTFRBdU4yZ3hMak4yTW1ndE16WjJMVEV1TVd3d0xqTXRNQzR5YkRFdU5DMHdMamRvTWk0MmJERXVOQ3d3TGpkak1DNDRMREF1TkN3eExqZ3NNQzQwTERJdU55d3diREV1TkMwd0xqZElMVE1LQ1FrSmJERXVOQ3d3TGpkak1DNDRMREF1TkN3eExqZ3NNQzQwTERJdU55d3dUREl1TXl3eU0yZ3lMalpzTVM0MExEQXVOMk13TGpjc01DNDBMREV1Tnl3d0xqUXNNaTQxTERCc01TNDNMVEF1TjJnekxqSnNNUzQzTERBdU4wTXhOaTR5TERJMExqRXNNVGN1TVN3eU5DNHhMREUzTGprc01qTXVOM29LQ1FrSklFMHRNVE11T0N3eU4yd3hOaTQwTERRdU9Vd3hPQzQ1TERJM1NDMHhNeTQ0ZWlCTkxURTBMalFzTWpsb01DNHpiREUyTGpjc05Xd3hOaTQzTFRWb01DNHpZekV1Tnl3d0xETXNNUzR6TERNc00zTXRNUzR6TERNdE15d3phQzB6TkdNdE1TNDNMREF0TXkweExqTXRNeTB6Q2drSkNVTXRNVGN1TkN3ek1DNHpMVEUyTGpFc01qa3RNVFF1TkN3eU9Yb2dUUzB4TXk0eExETTNZekF1T0N3eUxqUXNNeTR4TERRc05TNDNMRFJvTWpCak1pNDFMREFzTkM0NExURXVOaXcxTGpjdE5FTXhPQzR5TERNM0xURXpMakVzTXpjdE1UTXVNU3d6TjNvaUx6NEtDUWs4Y0dGMGFDQnBaRDBpY0dGMGFEWmZabWxzYkMxamIzQjVJaUJqYkdGemN6MGljM1F3SWlCa1BTSk5NamcwTGpRc01UWmpNQzR5TERBdU5pd3dMalFzTVM0ekxEQXVOU3d5YUMwekxqZHNNUzR5TERJdU0yd3dMalVzTUM0NWJDMHdMaklzTUM0eFZqSTRZekl1TWl3eExqY3NNaTQzTERRdU9Dd3hMRGNLQ1FrSll5MHdMamdzTVMweExqa3NNUzQzTFRNdU1pd3hMamxXTXpkakxUQXVPU3d6TGpVdE5DNHhMRFl0Tnk0NExEWm9MVEl3WXkwekxqWXNNQzAyTGpndE1pNDFMVGN1TnkwMmRpMHdMakZqTFRJdU55MHdMalF0TkM0MkxUTXROQzR5TFRVdU4yTXdMakl0TVM0ekxEQXVPUzB5TGpVc01TNDVMVE11TWdvSkNRbDJMVFl1T0d3dE1DNDRMVEV1Tm13dE1DNDBMVEF1T1d3d0xqa3RNQzQwVERJME15d3hPR2d0TTJNeUxqZ3RNVEl1TkN3eE5TNHhMVEl3TGpJc01qY3VOUzB4Tnk0MFF6STNOUzQwTERJdU15d3lPREV1T1N3NExqSXNNamcwTGpRc01UWjZJRTB5TkRjdU5Td3hPQW9KQ1FsakxUQXVNaXd3TFRBdU15d3dMVEF1TkN3d0xqRnNMVE11TVN3eExqWnNNQzQ1TERFdU9Hd3hMak10TUM0M1l6QXVPQzB3TGpRc01TNDRMVEF1TkN3eUxqY3NNR3d5TGpJc01TNHhZekF1TXl3d0xqRXNNQzQyTERBdU1Td3dMamtzTUd3eUxqSXRNUzR4Q2drSkNXTXdMamd0TUM0MExERXVPQzB3TGpRc01pNDNMREJzTWk0eUxERXVNV013TGpNc01DNHhMREF1Tml3d0xqRXNNQzQ1TERCc01pNHlMVEV1TVdNd0xqZ3RNQzQwTERFdU9DMHdMalFzTWk0M0xEQnNNaTR5TERFdU1XTXdMak1zTUM0eExEQXVOaXd3TGpFc01DNDVMREJzTWk0NUxURXVNd29KQ1Fsak1DNDRMVEF1TXl3eExqY3RNQzR6TERJdU5Dd3diREl1T1N3eExqTmpNQzR6TERBdU1Td3dMallzTUM0eExEQXVPU3d3YkRNdU1TMHhMalZzTFRBdU9TMHhMamhzTFRFdU5Dd3dMamRqTFRBdU9Dd3dMalF0TVM0M0xEQXVOQzB5TGpZc01DNHhiQzB5TGpndE1TNHlDZ2tKQ1dNdE1DNHhMVEF1TVMwd0xqTXRNQzR4TFRBdU5DMHdMakZzTUN3d1l5MHdMakVzTUMwd0xqTXNNQzB3TGpRc01DNHhiQzB5TGpnc01TNHlZeTB3TGpnc01DNDBMVEV1T0N3d0xqTXRNaTQyTFRBdU1Xd3RNaTR6TFRFdU1XTXRNQzR4TFRBdU1TMHdMak10TUM0eExUQXVOUzB3TGpGc01Dd3dDZ2tKQ1dNdE1DNHlMREF0TUM0ekxEQXRNQzQwTERBdU1Xd3RNaTR5TERFdU1XTXRNQzQ0TERBdU5DMHhMamdzTUM0MExUSXVOeXd3YkMweUxqSXRNUzR4WXkwd0xqRXRNQzR4TFRBdU15MHdMakV0TUM0MExUQXVNV3d3TERCakxUQXVNaXd3TFRBdU15d3dMVEF1TkN3d0xqRnNMVEl1TWl3eExqRUtDUWtKWXkwd0xqZ3NNQzQwTFRFdU9Dd3dMalF0TWk0M0xEQnNMVEl1TWkweExqRkRNalEzTGprc01UZ3NNalEzTGpjc01UZ3NNalEzTGpVc01UaE1NalEzTGpVc01UaE1NalEzTGpVc01UaDZJRTB5TkRjdU5Td3hObWd0TkM0NVl6TXVPUzB4TUM0NUxERTFMamt0TVRZdU55d3lOaTQ0TFRFeUxqZ0tDUWtKWXpZc01pNHhMREV3TGpjc05pNDRMREV5TGpnc01USXVPR2d0TWk0eGJDMHdMakV0TUM0eGJDMHdMak1zTUM0eFNESTBOeTQxVERJME55NDFMREUyZWlCTk1qYzNMamtzTWpNdU4yd3hMalF0TUM0M2FERXVNM1l5YUMwek5uWXRNUzR4YkRBdU15MHdMakpzTVM0MExUQXVOMmd5TGpZS0NRa0piREV1TkN3d0xqZGpNQzQ0TERBdU5Dd3hMamdzTUM0MExESXVOeXd3YkRFdU5DMHdMamRvTWk0MmJERXVOQ3d3TGpkak1DNDRMREF1TkN3eExqZ3NNQzQwTERJdU55d3diREV1TkMwd0xqZG9NaTQyYkRFdU5Dd3dMamRqTUM0NExEQXVOQ3d4TGpjc01DNDBMREl1Tml3d0xqRnNNUzQzTFRBdU53b0pDUWxvTXk0eWJERXVOeXd3TGpkRE1qYzJMaklzTWpRdU1Td3lOemN1TVN3eU5DNHhMREkzTnk0NUxESXpMamRNTWpjM0xqa3NNak11TjNvZ1RUSTBOaTR5TERJM2JERTJMalFzTkM0NVRESTNPU3d5TjBneU5EWXVNbm9nVFRJME5TNDFMREk1YURBdU0yd3hOaTQzTERWc01UWXVOeTAxYURBdU13b0pDUWxqTVM0M0xEQXNNeXd4TGpNc015d3pjeTB4TGpNc015MHpMRE5vTFRNMFl5MHhMamNzTUMwekxURXVNeTB6TFROVE1qUXpMamtzTWprc01qUTFMalVzTWpsNklFMHlORFl1T1N3ek4yTXdMamdzTWk0MExETXVNU3cwTERVdU5pdzBhREl3WXpJdU5Td3dMRFF1T0MweExqWXNOUzQzTFRRS0NRa0pTREkwTmk0NWVpSXZQZ29KQ1R4d1lYUm9JR05zWVhOelBTSnpkREFpSUdROUlrMHhOVGt1TlN3eU1XTXRNUzR6TFRNdU5pMDBMamN0TmkwNExqVXRObWd0TkRKakxUTXVPQ3d3TFRjdU1pd3lMalF0T0M0MUxEWmpMVE11TXl3d0xqTXROUzQ0TERNdU1pMDFMalVzTmk0MVl6QXVNaXd5TGprc01pNDJMRFV1TWl3MUxqVXNOUzQxQ2drSkNXTXRNUzQzTERRdU55d3dMamdzT1M0NExEVXVOQ3d4TVM0MVl6RXNNQzR6TERJc01DNDFMRE1zTUM0MWFEUXlZelVzTUN3NUxUUXNPUzA1WXpBdE1TMHdMakl0TWk0eExUQXVOUzB6WXpNdU15MHdMak1zTlM0NExUTXVNaXcxTGpVdE5pNDFDZ2tKQ1VNeE5qUXVOeXd5TXk0MkxERTJNaTQwTERJeExqTXNNVFU1TGpVc01qRjZJRTB4TlRFc01UZG9MVFF5WXkweUxqY3NNQzAxTGpJc01TNDJMVFl1TXl3MGFEVTBMamRETVRVMkxqSXNNVGd1Tml3eE5UTXVOeXd4Tnl3eE5URXNNVGQ2SUUweE5ERXVOeXcwTXdvSkNRbGpNaTR4TFRFdU55d3pMak10TkM0ekxETXVNeTAzYUMweVl6QXNNeTQ1TFRNdU1TdzNMVGNzTjJndE5DNHpZekl1TVMweExqY3NNeTR6TFRRdU15d3pMak10TjJndE1tTXdMRE11T1MwekxqRXNOeTAzTERkb0xUUXVNMk15TGpFdE1TNDNMRE11TXkwMExqTXNNeTR6TFRkb0xUSUtDUWtKWXpBc015NDVMVE11TVN3M0xUY3NOMmd0TjJNdE15NDVMREF0TnkwekxqRXROeTAzY3pNdU1TMDNMRGN0TjJnME1tTXpMamtzTUN3M0xETXVNU3czTERkekxUTXVNU3czTFRjc04wZ3hOREV1TjNvZ1RURXdPU3d5TjJNdE15d3dMVFV1T0N3eExqVXROeTQxTERSSU1UQXhDZ2tKQ1dNdE1pNHlMREF0TkMweExqZ3ROQzAwY3pFdU9DMDBMRFF0TkdnMU9HTXlMaklzTUN3MExERXVPQ3cwTERSekxURXVPQ3cwTFRRc05HZ3RNQzQxWXkweExqY3RNaTQxTFRRdU5TMDBMVGN1TlMwMFNERXdPWG9pTHo0S0NRazhjR0YwYUNCamJHRnpjejBpYzNRd0lpQmtQU0pOTXprc01URTFZelF1TkN3d0xEZ3RNeTQyTERndE9ITXRNeTQyTFRndE9DMDRjeTA0TERNdU5pMDRMRGhUTXpRdU5pd3hNVFVzTXprc01URTFlaUJOTkRVc01UQTNZekFzTXk0ekxUSXVOeXcyTFRZc05uTXROaTB5TGpjdE5pMDJDZ2tKQ1hNeUxqY3ROaXcyTFRaVE5EVXNNVEF6TGpjc05EVXNNVEEzZWlCTk5ESXNOemgyTFRKb09IWXROa2cwTUdNdE1pNHlMREF0TkN3eExqZ3ROQ3cwZGpFd1NESXliQzB4TGpNc05Fd3lNQ3c1TUdneUxqSnNNeTQ0TERRd2FESTJiRE11T0MwME1FZzFPR3d0TUM0M0xUSk1OVFlzT0RSSU5ESldOemg2Q2drSkNTQk5NemdzTnpSMk1UQm9NbFkzTkdnNGRpMHlhQzA0UXpNNExqa3NOeklzTXpnc056SXVPU3d6T0N3M05Ib2dUVFF3TERnMmFERTBMalpzTUM0M0xESklNakl1T0d3d0xqY3RNa2cwTUhvZ1RUVXpMamdzT1RCSU1qUXVNbXd6TGpZc016aG9Nakl1TkV3MU15NDRMRGt3ZWlJdlBnb0pDVHh3WVhSb0lHTnNZWE56UFNKemREQWlJR1E5SWsweE1qa3NPVEpvTFRaMk5HZ3ROblkwYUMwMmRqRTBhQzB6YkRBdU1pd3liRE11T0N3ek1tZ3pObXd6TGpndE16SnNNQzR5TFRKb0xUTjJMVEUwYUMwMmRpMDBhQzAyZGkwMFNERXlPWG9nVFRFME55d3hNVFIyTFRFeWFDMDBkalJvTTNZNFNERTBOd29KQ1FsNklFMHhORFFzTVRFMGRpMDJhQzAwZGpaSU1UUTBlaUJOTVRNNExERXlNSFl0TVRab0xUUjJNVGt1TWtNeE16VXVOaXd4TWpJdU5Td3hNemNzTVRJeExqUXNNVE00TERFeU1Ib2dUVEV6TWl3eE1qTXVPRll4TURCb0xUUjJNak11T0FvSkNRbERNVEk1TGpNc01USTBMakVzTVRNd0xqY3NNVEkwTGpFc01UTXlMREV5TXk0NGVpQk5NVEkyTERFeU15NHlWakV3TkdndE5IWXhOa014TWpNc01USXhMalFzTVRJMExqUXNNVEl5TGpVc01USTJMREV5TXk0eWVpQk5NVEl3TERFeE5IWXRObWd0TkhZMlNERXlNSG9nVFRFeE5Dd3hNVFIyTFRob013b0pDUWwyTFRSb0xUUjJNVEpJTVRFMGVpQk5NVFF4TERFd01uWXROR2d0TkhZMGFETjJOR2d4VmpFd01ub2dUVEV6TlN3eE1ESjJMVGhvTFRSMk5HZ3pkalJJTVRNMWVpQk5NVEk1TERrNGRpMDBhQzAwZGpob01YWXRORWd4TWpsNklFMHhNak1zTVRBeWRpMDBhQzAwZGpob01YWXRORWd4TWpONkNna0pDU0JOTVRNd0xERXlObU0xTGprc01Dd3hNQzQ1TFRRdU1pd3hNUzQ0TFRFd2FEY3VPV3d0TXk0MUxETXdhQzB6TWk0MGJDMHpMalV0TXpCb055NDVRekV4T1M0eExERXlNUzQ0TERFeU5DNHhMREV5Tml3eE16QXNNVEkyZWlJdlBnb0pDVHh3WVhSb0lHTnNZWE56UFNKemREQWlJR1E5SWsweU1USXNPRFoyTW1ndE5IWXRNa2d5TVRKNklFMHlNVFlzT0Rab0xUSjJNbWd5VmpnMmVpQk5NVGsyTERnMlRERTVOaXc0Tm1NdE1pNDNMREF1TnkwMExqVXNNeTR6TFRNdU9TdzJZekF1TkN3eExqZ3NNUzQyTERNdU1pd3pMak1zTXk0NENna0pDV3d3TGpFc01DNHliREV1TVN3MExqVmpNQzR5TERBdU9Td3hMREV1TlN3eExqa3NNUzQxYkRBc01HdzNMREkwTGpaak1DNHlMREF1T1N3eExERXVOQ3d4TGprc01TNDBhRFZqTUM0NUxEQXNNUzQzTFRBdU5pd3hMamt0TVM0MGJEY3RNalF1Tm1Nd0xqa3NNQ3d4TGpjdE1DNDJMREV1T1MweExqVUtDUWtKYkRFdU1TMDBMalZzTUM0eExUQXVNbU15TGpZdE1DNDVMRFF1TVMwekxqY3NNeTR5TFRZdU0yTXRNQzQyTFRFdU55MHlMVE10TXk0NExUTXVNMVk0Tm1Nd0xUY3VOeTAyTGpNdE1UUXRNVFF0TVRSVE1UazJMRGM0TGpNc01UazJMRGcyZWlCTk1qQXdMRGcyYURaMk1tZ3RPUW9KQ1FsakxURXVOeXd3TFRNc01TNHpMVE1zTTNNeExqTXNNeXd6TEROb01qWmpNUzQzTERBc015MHhMak1zTXkwemN5MHhMak10TXkwekxUTm9MVE4yTFRKb01tTXdMVFl1TmkwMUxqUXRNVEl0TVRJdE1USnpMVEV5TERVdU5DMHhNaXd4TWtneU1EQjZJRTB4T1RndU5pd3hNREJzTFRFdE5HZ3lOQzQ1Q2drSkNXd3RNU3cwU0RFNU9DNDJlaUJOTWpBM0xqVXNNVEkyYkMwMkxqa3RNalJvTVRndU4yd3ROaTQ1TERJMFNESXdOeTQxZWlCTk1UVXdMREkwTW1NeE1pNHlMREFzTWpJdE9TNDRMREl5TFRJeWN5MDVMamd0TWpJdE1qSXRNakp6TFRJeUxEa3VPQzB5TWl3eU1nb0pDUWxUTVRNM0xqZ3NNalF5TERFMU1Dd3lOREo2SUUweE56UXNNakl3WXpBc01UTXVNeTB4TUM0M0xESTBMVEkwTERJMGN5MHlOQzB4TUM0M0xUSTBMVEkwYkRBc01HTXdMVEV6TGpNc01UQXVOeTB5TkN3eU5DMHlORk14TnpRc01qQTJMamNzTVRjMExESXlNSG9nVFRFME5TNDJMREl6Tnk0M0Nna0pDV3d5TFRBdU9XTXhMalV0TUM0MkxETXVNaTB3TGpZc05DNDNMREJzTWl3d0xqbGpNQzQ1TERBdU5Dd3lMREFzTWk0MUxUQXVPR3d4TGpFdE1TNDVZekF1T0MweExqUXNNaTR5TFRJdU5Dd3pMamd0TWk0NGJESXVNUzB3TGpWak1TMHdMaklzTVM0MkxURXVNU3d4TGpVdE1pNHhiQzB3TGpJdE1pNHlDZ2tKQ1dNdE1DNHhMVEV1Tml3d0xqUXRNeTR5TERFdU5DMDBMalZzTVM0MExURXVOMk13TGpjdE1DNDRMREF1TnkweExqa3NNQzB5TGpac0xURXVOQzB4TGpkakxURXVNUzB4TGpJdE1TNDJMVEl1T0MweExqUXROQzQxYkRBdU1pMHlMakpqTUM0eExURXRNQzQyTFRFdU9TMHhMall0TWk0eENna0pDV3d0TWk0eExUQXVOV010TVM0MkxUQXVOQzB6TFRFdU5DMHpMamd0TWk0NGJDMHhMakV0TVM0NVl5MHdMalV0TUM0NUxURXVOaTB4TGpJdE1pNDFMVEF1T0d3dE1pd3dMamxqTFRFdU5Td3dMall0TXk0eUxEQXVOaTAwTGpjc01Hd3RNaTB3TGpsakxUQXVPUzB3TGpRdE1pd3dMVEl1TlN3d0xqZ0tDUWtKYkMweExESXVNV010TUM0NExERXVOQzB5TGpJc01pNDBMVE11T0N3eUxqaHNMVEl1TVN3d0xqVmpMVEVzTUM0eUxURXVOaXd4TGpFdE1TNDFMREl1TVd3d0xqSXNNaTR5WXpBdU1Td3hMall0TUM0MExETXVNaTB4TGpRc05DNDFiQzB4TGpRc01TNDNDZ2tKQ1dNdE1DNDNMREF1T0Mwd0xqY3NNUzQ1TERBc01pNDJiREV1TkN3eExqZGpNUzR4TERFdU1pd3hMallzTWk0NExERXVOQ3cwTGpWc0xUQXVNaXd5TGpKakxUQXVNU3d4TERBdU5pd3hMamtzTVM0MkxESXVNV3d5TGpFc01DNDFZekV1Tml3d0xqUXNNeXd4TGpRc015NDRMREl1T0d3eExqRXNNUzQ1Q2drSkNVTXhORE11Tml3eU16Y3VPQ3d4TkRRdU55d3lNemd1TVN3eE5EVXVOaXd5TXpjdU4wd3hORFV1Tml3eU16Y3VOM29nVFRFME9DNDBMREl6T0M0M1l6RXRNQzQwTERJdU1TMHdMalFzTXk0eExEQnNNaXd3TGpsak1TNDRMREF1T0N3MExEQXVNU3cxTFRFdU5td3hMakV0TVM0NUNna0pDV013TGpZdE1DNDVMREV1TlMweExqWXNNaTQxTFRFdU9Hd3lMakV0TUM0MVl6RXVPUzB3TGpRc015NHpMVEl1TXl3ekxqRXROQzR5YkMwd0xqSXRNaTR5WXkwd0xqRXRNUzR4TERBdU15MHlMaklzTVMwemJERXVOQzB4TGpkak1TNHpMVEV1TlN3eExqTXRNeTQzTERBdE5TNHliQzB4TGpRdE1TNDNDZ2tKQ1dNdE1DNDNMVEF1T0MweExqRXRNUzQ1TFRFdE0yd3dMakl0TWk0eVl6QXVNaTB5TFRFdU1TMHpMamd0TXk0eExUUXVNbXd0TWk0eExUQXVOV010TVM0eExUQXVNaTB5TFRBdU9TMHlMalV0TVM0NGJDMHhMakV0TVM0NVl5MHhMVEV1TnkwekxqSXRNaTQwTFRVdE1TNDJiQzB5TERBdU9Rb0pDUWxqTFRFc01DNDBMVEl1TVN3d0xqUXRNeTR4TERCc0xUSXRNQzQ1WXkweExqZ3RNQzQ0TFRRdE1DNHhMVFVzTVM0MmJDMHhMakVzTVM0NVl5MHdMallzTUM0NUxURXVOU3d4TGpZdE1pNDFMREV1T0d3dE1pNHhMREF1TldNdE1TNDVMREF1TkMwekxqTXNNaTR6TFRNdU1TdzBMakpzTUM0eUxESXVNZ29KQ1Fsak1DNHhMREV1TVMwd0xqTXNNaTR5TFRFc00yd3RNUzQwTERFdU4yTXRNUzR6TERFdU5TMHhMak1zTXk0M0xEQXNOUzR5YkRFdU5Dd3hMamRqTUM0M0xEQXVPQ3d4TGpFc01TNDVMREVzTTJ3dE1DNHlMREl1TW1NdE1DNHlMRElzTVM0eExETXVPQ3d6TGpFc05DNHliREl1TVN3d0xqVUtDUWtKWXpFdU1Td3dMaklzTWl3d0xqa3NNaTQxTERFdU9Hd3hMakVzTVM0NVl6RXNNUzQzTERNdU1pd3lMalFzTlN3eExqWk1NVFE0TGpRc01qTTRMamQ2SUUweE5USXNNakEzWXpBdE1DNDJMREF1TkMweExERXRNWE14TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVFvSkNRbFRNVFV5TERJd055NDJMREUxTWl3eU1EZDZJRTB4TlRnc01qQTVZekF0TUM0MkxEQXVOQzB4TERFdE1YTXhMREF1TkN3eExERnpMVEF1TkN3eExURXNNVk14TlRnc01qQTVMallzTVRVNExESXdPWG9nVFRFME55d3lNVEJqTUMwd0xqWXNNQzQwTFRFc01TMHhjekVzTUM0MExERXNNUW9KQ1FsekxUQXVOQ3d4TFRFc01WTXhORGNzTWpFd0xqWXNNVFEzTERJeE1Ib2dUVEUwTVN3eU1UQmpNQzB3TGpZc01DNDBMVEVzTVMweGN6RXNNQzQwTERFc01YTXRNQzQwTERFdE1Td3hVekUwTVN3eU1UQXVOaXd4TkRFc01qRXdlaUJOTVRRMExESXdOV013TFRBdU5pd3dMalF0TVN3eExURUtDUWtKY3pFc01DNDBMREVzTVhNdE1DNDBMREV0TVN3eFV6RTBOQ3d5TURVdU5pd3hORFFzTWpBMWVpQk5NVE0yTERJeE0yTXdMVEF1Tml3d0xqUXRNU3d4TFRGek1Td3dMalFzTVN3eGN5MHdMalFzTVMweExERlRNVE0yTERJeE15NDJMREV6Tml3eU1UTjZJRTB4TXprc01qRTVDZ2tKQ1dNd0xUQXVOaXd3TGpRdE1Td3hMVEZ6TVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGVE1UTTVMREl4T1M0MkxERXpPU3d5TVRsNklFMHhNemtzTWpJMVl6QXRNQzQyTERBdU5DMHhMREV0TVhNeExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01WTXhNemtzTWpJMUxqWXNNVE01TERJeU5Yb0tDUWtKSUUweE5ETXNNak15WXpBdE1DNDJMREF1TkMweExERXRNWE14TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVZNeE5ETXNNak15TGpZc01UUXpMREl6TW5vZ1RURTBPQ3d5TXpCak1DMHdMallzTUM0MExURXNNUzB4Y3pFc01DNDBMREVzTVhNdE1DNDBMREV0TVN3eENna0pDVk14TkRnc01qTXdMallzTVRRNExESXpNSG9nVFRFMU15d3lNelJqTUMwd0xqWXNNQzQwTFRFc01TMHhjekVzTUM0MExERXNNWE10TUM0MExERXRNU3d4VXpFMU15d3lNelF1Tml3eE5UTXNNak0wZWlCTk1UVTNMREl5T0dNd0xUQXVOaXd3TGpRdE1Td3hMVEZ6TVN3d0xqUXNNU3d4Q2drSkNYTXRNQzQwTERFdE1Td3hVekUxTnl3eU1qZ3VOaXd4TlRjc01qSTRlaUJOTVRZekxESXlOR013TFRBdU5pd3dMalF0TVN3eExURnpNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZUTVRZekxESXlOQzQyTERFMk15d3lNalI2SUUweE5Ua3NNakl4WXpBdE1DNDJMREF1TkMweExERXRNUW9KQ1Fsek1Td3dMalFzTVN3eGN5MHdMalFzTVMweExERlRNVFU1TERJeU1TNDJMREUxT1N3eU1qRjZJRTB4TmpNc01qRTRZekF0TUM0MkxEQXVOQzB4TERFdE1YTXhMREF1TkN3eExERnpMVEF1TkN3eExURXNNVk14TmpNc01qRTRMallzTVRZekxESXhPSG9nVFRFMU9Dd3lNVFFLQ1FrSll6QXRNQzQyTERBdU5DMHhMREV0TVhNeExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01WTXhOVGdzTWpFMExqWXNNVFU0TERJeE5Ib2dUVEV6TkN3eU1qQmpNQzB3TGpZc01DNDBMVEVzTVMweGN6RXNNQzQwTERFc01YTXRNQzQwTERFdE1Td3hVekV6TkN3eU1qQXVOaXd4TXpRc01qSXdlZ29KQ1FrZ1RURTFNQ3d5TWpWak1pNDRMREFzTlMweUxqSXNOUzAxY3kweUxqSXROUzAxTFRWekxUVXNNaTR5TFRVc05WTXhORGN1TWl3eU1qVXNNVFV3TERJeU5Yb2dUVEUxTnl3eU1qQmpNQ3d6TGprdE15NHhMRGN0Tnl3M2N5MDNMVE11TVMwM0xUZHpNeTR4TFRjc055MDNDZ2tKQ1ZNeE5UY3NNakUyTGpFc01UVTNMREl5TUhvZ1RUSTBNeXd4T1RGakxUQXVOaXd3TFRFc01DNDBMVEVzTVhNd0xqUXNNU3d4TERGb01tTXdMallzTUN3eExUQXVOQ3d4TFRGekxUQXVOQzB4TFRFdE1VZ3lORE42SUUweU5qSXNNakF3WXpBdE1DNDJMREF1TkMweExERXRNV2d5Q2drSkNXTXdMallzTUN3eExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01XZ3RNa015TmpJdU5Dd3lNREVzTWpZeUxESXdNQzQyTERJMk1pd3lNREI2SUUweU5EZ3NNakExWXkwd0xqWXNNQzB4TERBdU5DMHhMREZ6TUM0MExERXNNU3d4YURKak1DNDJMREFzTVMwd0xqUXNNUzB4Y3kwd0xqUXRNUzB4TFRFS0NRa0pTREkwT0hvZ1RUSXlNeXd5TURaakxUQXVOaXd3TFRFc01DNDBMVEVzTVhNd0xqUXNNU3d4TERGb01tTXdMallzTUN3eExUQXVOQ3d4TFRGekxUQXVOQzB4TFRFdE1VZ3lNak42SUUweU1qZ3NNakV3WXkwd0xqWXNNQzB4TERBdU5DMHhMREZ6TUM0MExERXNNU3d4YURJS0NRa0pZekF1Tml3d0xERXRNQzQwTERFdE1YTXRNQzQwTFRFdE1TMHhTREl5T0hvZ1RUSXpOeXd5TVRCak1DMHdMallzTUM0MExURXNNUzB4YURKak1DNDJMREFzTVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGb0xUSkRNak0zTGpRc01qRXhMREl6Tnl3eU1UQXVOaXd5TXpjc01qRXdlZ29KQ1FrZ1RUSTFNaXd5TVRGak1DMHdMallzTUM0MExURXNNUzB4YURKak1DNDJMREFzTVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGb0xUSkRNalV5TGpRc01qRXlMREkxTWl3eU1URXVOaXd5TlRJc01qRXhlaUJOTWpZMExESXdPV010TUM0MkxEQXRNU3d3TGpRdE1Td3hjekF1TkN3eExERXNNV2d5Q2drSkNXTXdMallzTUN3eExUQXVOQ3d4TFRGekxUQXVOQzB4TFRFdE1VZ3lOalI2SUUweU5UTXNNVGsxWXpBdE1DNDJMREF1TkMweExERXRNV2d5WXpBdU5pd3dMREVzTUM0MExERXNNWE10TUM0MExERXRNU3d4YUMweVF6STFNeTQwTERFNU5pd3lOVE1zTVRrMUxqWXNNalV6TERFNU5Yb0tDUWtKSUUweU16UXNNVGsxWXkwd0xqWXNNQzB4TERBdU5DMHhMREZ6TUM0MExERXNNU3d4YURKak1DNDJMREFzTVMwd0xqUXNNUzB4Y3kwd0xqUXRNUzB4TFRGSU1qTTBlaUJOTWpRd0xESXdNR013TFRBdU5pd3dMalF0TVN3eExURm9NbU13TGpZc01Dd3hMREF1TkN3eExERnpMVEF1TkN3eExURXNNUW9KQ1Fsb0xUSkRNalF3TGpRc01qQXhMREkwTUN3eU1EQXVOaXd5TkRBc01qQXdlaUJOTWpFMUxESXhOV013TFRBdU5Td3dMVEF1T1N3d0xURXVOR010TWk0MUxURXVNUzB6TGpjdE5DMHlMall0Tmk0Mll6QXVNaTB3TGpVc01DNDFMVEVzTUM0NUxURXVOR010TUM0NUxUSXNNQzAwTGpJc01TNDVMVFV1TWdvSkNRbGpMVEF1T0MweUxqWXNNQzQzTFRVdU5Dd3pMalF0Tmk0eWJEQXNNR013TGpRdE1DNDFMREF1T1Mwd0xqa3NNUzQxTFRFdU1XTXdMalV0TWk0M0xETXVNUzAwTGpVc05TNDRMVFF1TVdNd0xqY3NNQzR4TERFdU5Dd3dMalFzTWl3d0xqaGpOUzR6TFRNdU9Dd3hNUzQyTFRVdU9Td3hPQzR5TFRVdU9Rb0pDUWxqTmk0NExEQXNNVE11TVN3eUxqSXNNVGd1TWl3MUxqbGpNaTR6TFRFdU5pdzFMalF0TVN3M0xERXVNMk13TGpRc01DNDJMREF1Tnl3eExqTXNNQzQ0TERKak1DNDJMREF1TWl3eExqRXNNQzQyTERFdU5Td3hMakZqTWk0M0xEQXVPQ3cwTGpJc015NDFMRE11TkN3MkxqSnNNQ3d3Q2drSkNXTXhMamtzTVN3eUxqY3NNeTR5TERFdU9TdzFMakpqTVM0NUxESXNNUzQ0TERVdU1pMHdMaklzTjJNdE1DNDBMREF1TkMwd0xqa3NNQzQzTFRFdU5Td3hZekFzTUM0MUxEQXNNQzQ1TERBc01TNDBkakZvTFRZeWRpMHhTREl4TlhvZ1RUSXhOUzQ0TERJd055NDRDZ2tKQ1dNdE1DNHpMREV1TWkwd0xqVXNNaTQwTFRBdU5pd3pMalpqTFRFdU15MHhMVEV1TmkweUxqa3RNQzQyTFRRdU1td3dMREJETWpFMUxESXdOeTQxTERJeE5TNDBMREl3Tnk0M0xESXhOUzQ0TERJd055NDRUREl4TlM0NExESXdOeTQ0ZWlCTk1qRTNMak1zTWpBekxqSUtDUWtKWXkwd0xqUXNNQzQ1TFRBdU55d3hMamd0TVN3eUxqZGpMVEV0TUM0MExURXVOaTB4TGpVdE1TNHpMVEl1TldNd0xqSXRNQzQxTERBdU5pMHdMamtzTVM0eExURXVNa015TVRZdU5Td3lNREl1Tml3eU1UWXVPU3d5TURJdU9Td3lNVGN1TXl3eU1ETXVNa3d5TVRjdU15d3lNRE11TW5vS0NRa0pJRTB5TVRrdU5pd3hPVGd1TjJNdE1DNDFMREF1T1MweExERXVPQzB4TGpVc01pNDNZeTB4TGpNdE1TMHhMalV0TWk0NUxUQXVOUzAwTGpKak1DNHhMVEF1TWl3d0xqTXRNQzR6TERBdU5DMHdMalZETWpFNExqTXNNVGszTGpZc01qRTRMamtzTVRrNExqTXNNakU1TGpZc01UazRMamNLQ1FrSlRESXhPUzQyTERFNU9DNDNlaUJOTWpJd0xqZ3NNVGszWXpBdU5DMHdMalVzTUM0M0xURXNNUzR4TFRFdU5XTXRNQzR6TFRBdU5TMHdMamt0TUM0M0xURXVOQzB3TGpSekxUQXVOeXd3TGprdE1DNDBMREV1TkVNeU1qQXVNeXd4T1RZdU55d3lNakF1TlN3eE9UWXVPU3d5TWpBdU9Dd3hPVGNLQ1FrSlRESXlNQzQ0TERFNU4zb2dUVEl5Tmk0eExERTVNUzR5WXkweExEQXVPUzB5TERFdU9DMHlMamtzTWk0NFl5MHdMak10TUM0ekxUQXVOeTB3TGpZdE1TNHhMVEF1T0dNd0xqUXRNUzQyTERJdU1TMHlMalVzTXk0M0xUSXVNUW9KQ1FsRE1qSTFMamtzTVRreExqRXNNakkyTERFNU1TNHlMREl5Tmk0eExERTVNUzR5VERJeU5pNHhMREU1TVM0eWVpQk5Nalk0TGpnc01UazBZeTB3TGprdE1TMHhMamt0TVM0NUxUSXVPUzB5TGpoak1TNDFMVEF1Tml3ekxqTXNNQzR4TERNdU9Td3hMamNLQ1FrSll6QXNNQzR4TERBdU1Td3dMaklzTUM0eExEQXVNME15TmprdU5Td3hPVE11TkN3eU5qa3VNU3d4T1RNdU5pd3lOamd1T0N3eE9UUk1Nalk0TGpnc01UazBlaUJOTWpjd0xqRXNNVGsxTGpWak1DNDBMREF1TlN3d0xqZ3NNU3d4TGpFc01TNDBDZ2tKQ1dNd0xqVXRNQzR4TERBdU9TMHdMamNzTUM0NExURXVNbk10TUM0M0xUQXVPUzB4TGpJdE1DNDRRekkzTUM0MUxERTVOUzR4TERJM01DNHpMREU1TlM0ekxESTNNQzR4TERFNU5TNDFlaUJOTWpjekxqa3NNakF4TGpSakxUQXVOUzB3TGprdE1TMHhMamd0TVM0MUxUSXVOd29KQ1Fsak1DNDRMVEF1TkN3eExqUXRNUzR4TERFdU5pMHlZekV1TXl3eExqRXNNUzQwTERNc01DNDBMRFF1TWtNeU56UXVNaXd5TURFdU1Td3lOelFzTWpBeExqSXNNamN6TGprc01qQXhMalI2SUUweU56VXVOaXd5TURVdU9XTXRNQzR6TFRBdU9TMHdMall0TVM0NExURXRNaTQzQ2drSkNXTXdMalF0TUM0ekxEQXVPQzB3TGpZc01TNHlMVEZqTVN3d0xqVXNNUzQwTERFdU55d3hMREl1TjBNeU56WXVOaXd5TURVdU15d3lOell1TWl3eU1EVXVOeXd5TnpVdU5pd3lNRFV1T1hvZ1RUSTNOaTQ0TERJeE1TNDBZeTB3TGpFdE1TNHlMVEF1TkMweUxqUXRNQzQyTFRNdU5nb0pDUWxqTUM0MUxUQXVNU3d3TGprdE1DNDBMREV1TWkwd0xqWkRNamM0TGpRc01qQTRMalVzTWpjNExqRXNNakV3TGpRc01qYzJMamdzTWpFeExqUk1NamMyTGpnc01qRXhMalJNTWpjMkxqZ3NNakV4TGpSNklFMHlOelVzTWpFMFl5MHdMalV0TVRZdE1UTXVPUzB5T0M0MkxUSTVMamt0TWpndU1Rb0pDUWxqTFRFMUxqTXNNQzQxTFRJM0xqWXNNVEl1T0MweU9DNHhMREk0TGpGSU1qYzFUREkzTlN3eU1UUjZJRTAzTWk0ekxERTVPQzR4WXkwd0xqSXRNQzR6TFRBdU15MHdMamN0TUM0ekxURXVNWFl0TVRKb0xUSjJNVEpqTUN3eUxqSXNNUzQ0TERRc05DdzBDZ2tKQ1dNeExqSXNNQ3d5TGpNdE1DNDFMRE11TVMweExqUmpNQzQyTFRBdU55d3dMamt0TVM0MkxEQXVPUzB5TGpWMkxURXlhQzB5ZGpFeVl6QXNNUzR4TFRBdU9Td3lMVElzTW13d0xEQkROek11TXl3eE9Ua3NOekl1Tnl3eE9UZ3VOeXczTWk0ekxERTVPQzR4ZWlCTk56VXNNVGMyQ2drSkNXTXdMalFzTUN3d0xqY3NNQ3d4TGpFdE1DNHhZekF1TlN3eUxqSXNNaTQyTERNdU5TdzBMamdzTTJNd0xqVXRNQzR4TERFdE1DNHpMREV1TkMwd0xqWmpNUzR4TERJdU1Td3hMamNzTkM0MExERXVOeXcyTGpkMk1qUmpNQ3d6TGpNdE1pNDNMRFl0Tml3MmFDMHpkamtLQ1FrSll6QXNNaTQ0TFRJdU1pdzFMVFVzTlhNdE5TMHlMakl0TlMwMWRpMDVhQzB6WXkwekxqTXNNQzAyTFRJdU55MDJMVFoyTFRJMFl6QXROeTQzTERZdU15MHhOQ3d4TkMweE5FTTNNQ3d4TnpNdU9DdzNNaTR5TERFM05pdzNOU3d4TnpaNklFMDFPQ3d4T1RGMk1USUtDUWtKWXpBc01DNDRMREF1TlN3eExqVXNNUzR5TERFdU9HTXdMamtzTUM0MExERXVPU3d3TGpFc01pNDBMVEF1TjJNd0xqSXRNQzR6TERBdU15MHdMamNzTUM0ekxURXVNWFl0TVRKb01uWXhNbU13TERJdU1pMHhMamNzTkMwekxqa3NOR010TUM0MUxEQXRNUzB3TGpFdE1TNDBMVEF1TWdvSkNRbGpMVEF1TWkwd0xqRXRNQzQwTFRBdU1pMHdMamN0TUM0emRqSXVOV013TERJdU1pd3hMamdzTkN3MExEUm9NVFpqTWk0eUxEQXNOQzB4TGpnc05DMDBkaTB5TkdNd0xURXVOUzB3TGpJdE1pNDVMVEF1TnkwMExqSmpMVEF1TkN3d0xqRXRNQzQ1TERBdU1pMHhMak1zTUM0eUNna0pDV010TWk0eExEQXROQzR4TFRFdU1TMDFMakl0TTJNdE15MHdMakV0TlM0MkxUSXROaTQxTFRRdU9VTTJNaTQwTERFM05DdzFPQ3d4Tnprc05UZ3NNVGcxVmpFNU1Yb2dUVFkzTERJeE5YWTVZekFzTVM0M0xERXVNeXd6TERNc00zTXpMVEV1TXl3ekxUTjJMVGxJTmpkNklpOCtDZ2tKUEhCaGRHZ2dZMnhoYzNNOUluTjBNQ0lnWkQwaVRTMHhOeXd4T1RGakxUQXVOaXd3TFRFc01DNDBMVEVzTVhNd0xqUXNNU3d4TERGb01tTXdMallzTUN3eExUQXVOQ3d4TFRGekxUQXVOQzB4TFRFdE1VZ3RNVGQ2SUUweUxESXdNR013TFRBdU5pd3dMalF0TVN3eExURm9NZ29KQ1Fsak1DNDJMREFzTVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGSU0wTXlMalFzTWpBeExESXNNakF3TGpZc01pd3lNREI2SUUwdE1USXNNakExWXkwd0xqWXNNQzB4TERBdU5DMHhMREZ6TUM0MExERXNNU3d4YURKak1DNDJMREFzTVMwd0xqUXNNUzB4Y3kwd0xqUXRNUzB4TFRGSUxURXllZ29KQ1FrZ1RTMHpOeXd5TURaakxUQXVOaXd3TFRFc01DNDBMVEVzTVhNd0xqUXNNU3d4TERGb01tTXdMallzTUN3eExUQXVOQ3d4TFRGekxUQXVOQzB4TFRFdE1VZ3RNemQ2SUUwdE16SXNNakV3WXkwd0xqWXNNQzB4TERBdU5DMHhMREZ6TUM0MExERXNNU3d4YURKak1DNDJMREFzTVMwd0xqUXNNUzB4Q2drSkNYTXRNQzQwTFRFdE1TMHhTQzB6TW5vZ1RTMHlNeXd5TVRCak1DMHdMallzTUM0MExURXNNUzB4YURKak1DNDJMREFzTVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGb0xUSkRMVEl5TGpZc01qRXhMVEl6TERJeE1DNDJMVEl6TERJeE1Ib2dUUzA0TERJeE1XTXdMVEF1Tml3d0xqUXRNU3d4TFRFS0NRa0phREpqTUM0MkxEQXNNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZvTFRKRExUY3VOaXd5TVRJdE9Dd3lNVEV1TmkwNExESXhNWG9nVFRRc01qQTVZeTB3TGpZc01DMHhMREF1TkMweExERnpNQzQwTERFc01Td3hhREpqTUM0MkxEQXNNUzB3TGpRc01TMHhjeTB3TGpRdE1TMHhMVEZJTkhvS0NRa0pJRTB0Tnl3eE9UVmpNQzB3TGpZc01DNDBMVEVzTVMweGFESmpNQzQyTERBc01Td3dMalFzTVN3eGN5MHdMalFzTVMweExERm9MVEpETFRZdU5pd3hPVFl0Tnl3eE9UVXVOaTAzTERFNU5Yb2dUUzB5Tml3eE9UVmpMVEF1Tml3d0xURXNNQzQwTFRFc01YTXdMalFzTVN3eExERm9NZ29KQ1Fsak1DNDJMREFzTVMwd0xqUXNNUzB4Y3kwd0xqUXRNUzB4TFRGSUxUSTJlaUJOTFRJd0xESXdNR013TFRBdU5pd3dMalF0TVN3eExURm9NbU13TGpZc01Dd3hMREF1TkN3eExERnpMVEF1TkN3eExURXNNV2d0TWtNdE1Ua3VOaXd5TURFdE1qQXNNakF3TGpZdE1qQXNNakF3ZWlCTkxUUTFMREl4TlFvSkNRbGpNQzB3TGpVc01DMHdMamtzTUMweExqUmpMVEl1TlMweExqRXRNeTQzTFRRdE1pNDJMVFl1Tm1Nd0xqSXRNQzQxTERBdU5TMHhMREF1T1MweExqUmpMVEF1T1MweUxEQXROQzR5TERFdU9TMDFMakpqTFRBdU9DMHlMallzTUM0M0xUVXVOQ3d6TGpRdE5pNHliREFzTUFvSkNRbGpNQzQwTFRBdU5Td3dMamt0TUM0NUxERXVOUzB4TGpGak1DNDFMVEl1Tnl3ekxqRXROQzQxTERVdU9DMDBMakZqTUM0M0xEQXVNU3d4TGpRc01DNDBMRElzTUM0NFl6VXVNeTB6TGpnc01URXVOaTAxTGprc01UZ3VNaTAxTGpsak5pNDRMREFzTVRNdU1Td3lMaklzTVRndU1pdzFMamtLQ1FrSll6SXVNeTB4TGpZc05TNDBMVEVzTnl3eExqTmpNQzQwTERBdU5pd3dMamNzTVM0ekxEQXVPQ3d5WXpBdU5pd3dMaklzTVM0eExEQXVOaXd4TGpVc01TNHhZekl1Tnl3d0xqZ3NOQzR5TERNdU5Td3pMalFzTmk0eWJEQXNNR014TGprc01Td3lMamNzTXk0eUxERXVPU3cxTGpJS0NRa0pZekV1T1N3eUxERXVPQ3cxTGpJdE1DNHlMRGRqTFRBdU5Dd3dMalF0TUM0NUxEQXVOeTB4TGpVc01XTXdMREF1TlN3d0xEQXVPU3d3TERFdU5IWXhhQzAyTW5ZdE1VZ3RORFY2SUUwdE5EUXVNaXd5TURjdU9HTXRNQzR6TERFdU1pMHdMalVzTWk0MExUQXVOaXd6TGpZS0NRa0pZeTB4TGpNdE1TMHhMall0TWk0NUxUQXVOaTAwTGpKc01Dd3dReTAwTlN3eU1EY3VOUzAwTkM0MkxESXdOeTQzTFRRMExqSXNNakEzTGpoTUxUUTBMaklzTWpBM0xqaDZJRTB0TkRJdU55d3lNRE11TW1NdE1DNDBMREF1T1Mwd0xqY3NNUzQ0TFRFc01pNDNDZ2tKQ1dNdE1TMHdMalF0TVM0MkxURXVOUzB4TGpNdE1pNDFZekF1TWkwd0xqVXNNQzQyTFRBdU9Td3hMakV0TVM0eVF5MDBNeTQxTERJd01pNDJMVFF6TGpFc01qQXlMamt0TkRJdU55d3lNRE11TWt3dE5ESXVOeXd5TURNdU1ub2dUUzAwTUM0MExERTVPQzQzQ2drSkNXTXRNQzQxTERBdU9TMHhMREV1T0MweExqVXNNaTQzWXkweExqTXRNUzB4TGpVdE1pNDVMVEF1TlMwMExqSmpNQzR4TFRBdU1pd3dMak10TUM0ekxEQXVOQzB3TGpWRExUUXhMamNzTVRrM0xqWXROREV1TVN3eE9UZ3VNeTAwTUM0MExERTVPQzQzZWlCTkxUTTVMaklzTVRrM0Nna0pDV013TGpNdE1DNDFMREF1TnkweExERXVNUzB4TGpWakxUQXVNeTB3TGpVdE1DNDVMVEF1TnkweExqUXRNQzQwY3kwd0xqY3NNQzQ1TFRBdU5Dd3hMalJETFRNNUxqY3NNVGsyTGpjdE16a3VOU3d4T1RZdU9TMHpPUzR5TERFNU4wd3RNemt1TWl3eE9UZDZJRTB0TXpNdU9Td3hPVEV1TWdvSkNRbGpMVEVzTUM0NUxUSXNNUzQ0TFRJdU9Td3lMamhqTFRBdU15MHdMak10TUM0M0xUQXVOaTB4TGpFdE1DNDRZekF1TkMweExqWXNNaTR4TFRJdU5Td3pMamN0TWk0eFF5MHpOQzR4TERFNU1TNHhMVE0wTERFNU1TNHlMVE16TGprc01Ua3hMakpNTFRNekxqa3NNVGt4TGpKNklFMDRMamdzTVRrMENna0pDV010TUM0NUxURXRNUzQ1TFRFdU9TMHlMamt0TWk0NFl6RXVOUzB3TGpZc015NHpMREF1TVN3ekxqa3NNUzQzWXpBc01DNHhMREF1TVN3d0xqSXNNQzR4TERBdU0wTTVMalVzTVRrekxqUXNPUzR4TERFNU15NDJMRGd1T0N3eE9UUk1PQzQ0TERFNU5Ib2dUVEV3TGpFc01UazFMalVLQ1FrSll6QXVOQ3d3TGpVc01DNDRMREVzTVM0eExERXVOR013TGpVdE1DNHhMREF1T1Mwd0xqY3NNQzQ0TFRFdU1tTXRNQzR4TFRBdU5TMHdMamN0TUM0NUxURXVNaTB3TGpoRE1UQXVOU3d4T1RVdU1Td3hNQzR6TERFNU5TNHpMREV3TGpFc01UazFMalY2SUUweE15NDVMREl3TVM0MENna0pDV010TUM0MUxUQXVPUzB3TGprdE1TNDRMVEV1TlMweUxqZGpNQzQ0TFRBdU5Dd3hMalF0TVM0eExERXVOaTB5WXpFdU15d3hMakVzTVM0MExETXNNQzQwTERRdU1rTXhOQzR5TERJd01TNHhMREUwTERJd01TNHlMREV6TGprc01qQXhMalI2SUUweE5TNDNMREl3TlM0NUNna0pDV010TUM0ekxUQXVPUzB3TGpZdE1TNDRMVEV0TWk0M1l6QXVOQzB3TGpNc01DNDRMVEF1Tml3eExqSXRNV014TERBdU5Td3hMalFzTVM0M0xERXNNaTQzUXpFMkxqWXNNakExTGpNc01UWXVNaXd5TURVdU55d3hOUzQzTERJd05TNDVlaUJOTVRZdU9Dd3lNVEV1TkFvSkNRbGpMVEF1TVMweExqSXRNQzQwTFRJdU5DMHdMall0TXk0Mll6QXVOUzB3TGpFc01DNDVMVEF1TkN3eExqSXRNQzQyUXpFNExqUXNNakE0TGpVc01UZ3VNU3d5TVRBdU5Dd3hOaTQ0TERJeE1TNDBUREUyTGpnc01qRXhMalJNTVRZdU9Dd3lNVEV1TkhvZ1RURTFMREl4TkFvSkNRbGpMVEF1TlMweE5pMHhNeTQ1TFRJNExqWXRNamt1T1MweU9DNHhZeTB4TlM0ekxEQXVOUzB5Tnk0MkxERXlMamd0TWpndU1Td3lPQzR4U0RFMVRERTFMREl4TkhvaUx6NEtDVHd2Wno0S1BDOW5QZ284TDNOMlp6NEsnO1xuIiwiLy8gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gID8gVElQOiAgSXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoaXMgZmlsZSBmb3Igb3ZlcnJpZGluZyBib290c3RyYXAgdmFyaWFibGVzLlxuLy8gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLyBCb290c3RyYXAgdmFyaWFibGVzXG4kcHJpbWFyeTogIzQxODZlMDtcbiIsIi8vIEJyZWFrcG9pbnQgdmlld3BvcnQgc2l6ZXMgYW5kIG1lZGlhIHF1ZXJpZXMuXG4vL1xuLy8gQnJlYWtwb2ludHMgYXJlIGRlZmluZWQgYXMgYSBtYXAgb2YgKG5hbWU6IG1pbmltdW0gd2lkdGgpLCBvcmRlciBmcm9tIHNtYWxsIHRvIGxhcmdlOlxuLy9cbi8vICAgICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweClcbi8vXG4vLyBUaGUgbWFwIGRlZmluZWQgaW4gdGhlIGAkZ3JpZC1icmVha3BvaW50c2AgZ2xvYmFsIHZhcmlhYmxlIGlzIHVzZWQgYXMgdGhlIGAkYnJlYWtwb2ludHNgIGFyZ3VtZW50IGJ5IGRlZmF1bHQuXG5cbi8vIE5hbWUgb2YgdGhlIG5leHQgYnJlYWtwb2ludCwgb3IgbnVsbCBmb3IgdGhlIGxhc3QgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20pXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgJGJyZWFrcG9pbnQtbmFtZXM6ICh4cyBzbSBtZCBsZyB4bCkpXG4vLyAgICBtZFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cywgJGJyZWFrcG9pbnQtbmFtZXM6IG1hcC1rZXlzKCRicmVha3BvaW50cykpIHtcbiAgJG46IGluZGV4KCRicmVha3BvaW50LW5hbWVzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG4gIT0gbnVsbCBhbmQgJG4gPCBsZW5ndGgoJGJyZWFrcG9pbnQtbmFtZXMpLCBudGgoJGJyZWFrcG9pbnQtbmFtZXMsICRuICsgMSksIG51bGwpO1xufVxuXG4vLyBNaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBzbWFsbGVzdCAoZmlyc3QpIGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1taW4oc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA1NzZweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG1pbiAhPSAwLCAkbWluLCBudWxsKTtcbn1cblxuLy8gTWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgbGFyZ2VzdCAobGFzdCkgYnJlYWtwb2ludC5cbi8vIFRoZSBtYXhpbXVtIHZhbHVlIGlzIGNhbGN1bGF0ZWQgYXMgdGhlIG1pbmltdW0gb2YgdGhlIG5leHQgb25lIGxlc3MgMC4wMnB4XG4vLyB0byB3b3JrIGFyb3VuZCB0aGUgbGltaXRhdGlvbnMgb2YgYG1pbi1gIGFuZCBgbWF4LWAgcHJlZml4ZXMgYW5kIHZpZXdwb3J0cyB3aXRoIGZyYWN0aW9uYWwgd2lkdGhzLlxuLy8gU2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9tZWRpYXF1ZXJpZXMtNC8jbXEtbWluLW1heFxuLy8gVXNlcyAwLjAycHggcmF0aGVyIHRoYW4gMC4wMXB4IHRvIHdvcmsgYXJvdW5kIGEgY3VycmVudCByb3VuZGluZyBidWcgaW4gU2FmYXJpLlxuLy8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzgyNjFcbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1heChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDc2Ny45OHB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG5leHQ6IGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQHJldHVybiBpZigkbmV4dCwgYnJlYWtwb2ludC1taW4oJG5leHQsICRicmVha3BvaW50cykgLSAuMDIsIG51bGwpO1xufVxuXG4vLyBSZXR1cm5zIGEgYmxhbmsgc3RyaW5nIGlmIHNtYWxsZXN0IGJyZWFrcG9pbnQsIG90aGVyd2lzZSByZXR1cm5zIHRoZSBuYW1lIHdpdGggYSBkYXNoIGluIGZyb250LlxuLy8gVXNlZnVsIGZvciBtYWtpbmcgcmVzcG9uc2l2ZSB1dGlsaXRpZXMuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeCh4cywgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiXCIgIChSZXR1cm5zIGEgYmxhbmsgc3RyaW5nKVxuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiLXNtXCJcbkBmdW5jdGlvbiBicmVha3BvaW50LWluZml4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gIEByZXR1cm4gaWYoYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cykgPT0gbnVsbCwgXCJcIiwgXCItI3skbmFtZX1cIik7XG59XG5cbi8vIE1lZGlhIG9mIGF0IGxlYXN0IHRoZSBtaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgd2lkZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtaW4ge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIG9mIGF0IG1vc3QgdGhlIG1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBsYXJnZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtYXgge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIHRoYXQgc3BhbnMgbXVsdGlwbGUgYnJlYWtwb2ludCB3aWR0aHMuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgYmV0d2VlbiB0aGUgbWluIGFuZCBtYXggYnJlYWtwb2ludHNcbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWJldHdlZW4oJGxvd2VyLCAkdXBwZXIsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJGxvd2VyLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkdXBwZXIsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGxvd2VyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkdXBwZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbi8vIE1lZGlhIGJldHdlZW4gdGhlIGJyZWFrcG9pbnQncyBtaW5pbXVtIGFuZCBtYXhpbXVtIHdpZHRocy5cbi8vIE5vIG1pbmltdW0gZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LCBhbmQgbm8gbWF4aW11bSBmb3IgdGhlIGxhcmdlc3Qgb25lLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IG9ubHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQsIG5vdCB2aWV3cG9ydHMgYW55IHdpZGVyIG9yIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtb25seSgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuIiwiLy8gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBGaWxlIE5hbWU6IG1haW4tbWVudS1taXhpbi5zY3NzXG4vLyBEZXNjcmlwdGlvbjogQ29tbW9uIG1peGluIGZvciBtZW51cywgY29udGFpbiBkYXJrIGFuZCBsaWdodCB2ZXJzaW9uIHNjc3MuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBJdGVtIE5hbWU6IFZ1ZXh5IC0gVnVlanMsIFJlYWN0LCBBbmd1bGFyLCBIVE1MICYgTGFyYXZlbCBBZG1pbiBEYXNoYm9hcmQgVGVtcGxhdGVcbi8vIEF1dGhvcjogUElYSU5WRU5UXG4vLyBBdXRob3IgVVJMOiBodHRwOi8vd3d3LnRoZW1lZm9yZXN0Lm5ldC91c2VyL3BpeGludmVudFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy8gSGVhZGVyIG5hdmJhciBjb250ZW50IGFuZCBicmFuZCBleHBhbmRlZCAmIGNvbGxhcHNlZCBzdGF0c1xuLy8gc3BhY2luZyBhbmQgc2l6aW5nLlxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vIE1peGlucyBmb3IgdGhlIG1lbnUgYW5kIG5hdmJhciBwb3NpdGlvbiwgbWFyZ2luIGFuZCB3aWR0aCBjaGFuZ2VcbkBtaXhpbiBtYWluLW1lbnUtd2lkdGgoJG1lbnUtd2lkdGgpIHtcbiAgbWFyZ2luLWxlZnQ6ICRtZW51LXdpZHRoO1xufVxuQG1peGluIG1lbnUtbmF2YmFyLXdpZHRoKCRtZW51LXdpZHRoKSB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogJG1lbnUtd2lkdGg7XG59XG4vLyBNaXhpbnMgZm9yIHRoZSBtZW51IHNob3cgaGlkZSBiYXNlZCBvbiB3aWR0aFxuQG1peGluIHZlcnRpY2FsLW1lbnUtdHJhbnNmb3JtLXNob3coJHRyYW5zZm9ybS13aWR0aCkge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKCR0cmFuc2Zvcm0td2lkdGgsIDAsIDApO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIHBlcnNwZWN0aXZlOiAxMDAwO1xufVxuQG1peGluIHZlcnRpY2FsLW1lbnUtdHJhbnNmb3JtLWhpZGUoKSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG59XG5cbi8vIE1peGlucyBmb3IgdGhlIHN1YiBtZW51IGFycm93XG5AbWl4aW4gdmVydGljYWwtbWVudS1oYXMtc3ViLWFycm93KCRhcnJvdy1mb250LXNpemUpIHtcbiAgJi5oYXMtc3ViIHtcbiAgICA+IGE6YWZ0ZXIge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoc3RyLXJlcGxhY2Uoc3RyLXJlcGxhY2UoJGNoZXZyb24tcmlnaHQsICdjdXJyZW50Q29sb3InLCAkYm9keS1jb2xvciksICcjJywgJyUyMycpKTtcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6ICRhcnJvdy1mb250LXNpemU7XG4gICAgICBoZWlnaHQ6ICRhcnJvdy1mb250LXNpemU7XG4gICAgICB3aWR0aDogJGFycm93LWZvbnQtc2l6ZTtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHJpZ2h0OiAyMHB4O1xuICAgICAgdG9wOiAxNHB4O1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcbiAgICB9XG4gICAgJi5vcGVuOm5vdCgubWVudS1pdGVtLWNsb3NpbmcpIHtcbiAgICAgID4gYTphZnRlciB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8vIFVzZWQgZm9yIGFwcHNcbkBtaXhpbiBjb250ZW50LWFyZWEtd3JhcHBlci1oZWlnaHQoXG4gICRjb250ZW50UGFkZGluZzogMHJlbSxcbiAgJG5hdmJhckhlaWdodDogMHJlbSxcbiAgJGZvb3RlckhlaWdodDogMHJlbSxcbiAgJGZsb2F0aW5nTmF2TWFyZ2luOiAwcmVtLFxuICAkaG9yaXpvbnRhbE1lbnVIZWlnaHQ6IDByZW0sXG4gICRzcGFjaW5nU2lkZXM6IDEsXG4gICRob3Jpem9udGFsTGF5b3V0OiBmYWxzZVxuKSB7XG4gIGhlaWdodDogY2FsYyhcbiAgICAxMDB2aCAtXG4gICAgICBjYWxjKFxuICAgICAgICBjYWxjKCN7JGNvbnRlbnRQYWRkaW5nfSAqICN7JHNwYWNpbmdTaWRlc30pICsgI3skbmF2YmFySGVpZ2h0fSArICN7JGZvb3RlckhlaWdodH0gKyAjeyRmbG9hdGluZ05hdk1hcmdpbn0gKyAjeyRob3Jpem9udGFsTWVudUhlaWdodH1cbiAgICAgIClcbiAgKTtcbiAgaGVpZ2h0OiBjYWxjKFxuICAgIHZhcigtLXZoLCAxdmgpICogMTAwIC1cbiAgICAgIGNhbGMoXG4gICAgICAgIGNhbGMoI3skY29udGVudFBhZGRpbmd9ICogI3skc3BhY2luZ1NpZGVzfSkgKyAjeyRuYXZiYXJIZWlnaHR9ICsgI3skZm9vdGVySGVpZ2h0fSArICN7JGZsb2F0aW5nTmF2TWFyZ2lufSArICN7JGhvcml6b250YWxNZW51SGVpZ2h0fVxuICAgICAgKVxuICApO1xuICAvLyByZXNwb25zaXZlIHNpemUgaGVpZ2h0XG4gIEBpZiAkaG9yaXpvbnRhbExheW91dCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKGxnKSB7XG4gICAgICBoZWlnaHQ6IGNhbGMoXG4gICAgICAgIDEwMHZoIC0gY2FsYyhjYWxjKGNhbGMoI3skY29udGVudFBhZGRpbmd9IC0gMC44cmVtKSAqICN7JHNwYWNpbmdTaWRlc30pICsgI3skbmF2YmFySGVpZ2h0fSArICN7JGZvb3RlckhlaWdodH0pXG4gICAgICApO1xuICAgICAgaGVpZ2h0OiBjYWxjKFxuICAgICAgICB2YXIoLS12aCwgMXZoKSAqIDEwMCAtXG4gICAgICAgICAgY2FsYyhjYWxjKGNhbGMoI3skY29udGVudFBhZGRpbmd9IC0gMC44cmVtKSAqICN7JHNwYWNpbmdTaWRlc30pICsgI3skbmF2YmFySGVpZ2h0fSArICN7JGZvb3RlckhlaWdodH0pXG4gICAgICApO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKHhzKSB7XG4gICAgICBoZWlnaHQ6IGNhbGMoXG4gICAgICAgIDEwMHZoIC1cbiAgICAgICAgICBjYWxjKFxuICAgICAgICAgICAgY2FsYyhjYWxjKCN7JGNvbnRlbnRQYWRkaW5nfSAqICN7JHNwYWNpbmdTaWRlc30pIC0gY2FsYygwLjhyZW0gKiAjeyRzcGFjaW5nU2lkZXN9KSkgKyAjeyRuYXZiYXJIZWlnaHR9ICsgI3skZm9vdGVySGVpZ2h0fSArXG4gICAgICAgICAgICAgICN7JGZsb2F0aW5nTmF2TWFyZ2lufSArICN7JGhvcml6b250YWxNZW51SGVpZ2h0fVxuICAgICAgICAgIClcbiAgICAgICk7XG4gICAgICBoZWlnaHQ6IGNhbGMoXG4gICAgICAgIHZhcigtLXZoLCAxdmgpICogMTAwIC1cbiAgICAgICAgICBjYWxjKFxuICAgICAgICAgICAgY2FsYyhjYWxjKCN7JGNvbnRlbnRQYWRkaW5nfSAqICN7JHNwYWNpbmdTaWRlc30pIC0gY2FsYygwLjhyZW0gKiAjeyRzcGFjaW5nU2lkZXN9KSkgKyAjeyRuYXZiYXJIZWlnaHR9ICsgI3skZm9vdGVySGVpZ2h0fSArXG4gICAgICAgICAgICAgICN7JGZsb2F0aW5nTmF2TWFyZ2lufSArICN7JGhvcml6b250YWxNZW51SGVpZ2h0fVxuICAgICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICB9XG59XG5cbi8vIExpZ2h0ICYgRGFyayBtZW51IG1peGluXG4vLyAkdGhlbWUtY29sb3IgOiBNZW51IHRleHQgY29sb3Jcbi8vICR0aGVtZS1iZyAgICA6IE1lbnUgYmFja2dyb3VuZCBjb2xvclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5AbWl4aW4gbWVudS10aGVtZSgkdGhlbWUtY29sb3IsICR0aGVtZS1iZykge1xuICAkbWFpbi1tZW51LXRvcC1vcGVuLWNvbG9yOiBkYXJrZW4oJHRoZW1lLWNvbG9yLCAxMCUpO1xuICAkbWFpbi1tZW51LXRvcC1vcGVuLWhvdmVyLWJnOiBkYXJrZW4oJHRoZW1lLWJnLCA2JSk7XG4gICRtYWluLW1lbnUtdG9wLW9wZW4taGVhZC1iZzogZGFya2VuKCR0aGVtZS1iZywgNCUpO1xuXG4gICRtYWluLW1lbnUtdG9wLWFjdGl2ZS1oZWFkLWJnOiBkYXJrZW4oJHRoZW1lLWJnLCA0JSk7IC8vJHByaW1hcnlcblxuICAkbWFpbi1tZW51LXN1Yi1jb2xvcjogJHRoZW1lLWNvbG9yO1xuICAkbWFpbi1tZW51LXN1Yi1ob3Zlci1jb2xvcjogbGlnaHRlbigkdGhlbWUtY29sb3IsIDQlKTtcblxuICAkbWFpbi1tZW51LXN1Yi1vcGVuLWNvbG9yOiAkdGhlbWUtY29sb3I7XG5cbiAgY29sb3I6ICR0aGVtZS1jb2xvcjtcbiAgYmFja2dyb3VuZDogJHRoZW1lLWJnO1xuXG4gIC5uYXZpZ2F0aW9uIHtcbiAgICBiYWNrZ3JvdW5kOiAkdGhlbWUtYmc7XG4gICAgLm5hdmlnYXRpb24taGVhZGVyIHtcbiAgICAgIGNvbG9yOiBsaWdodGVuKCR0aGVtZS1jb2xvciwgMjEuNSUpO1xuICAgICAgbWFyZ2luOiBjYWxjKCN7JGNvbnRlbnQtcGFkZGluZ30gKyAwLjI4NnJlbSkgMCAwLjhyZW0gKCRjb250ZW50LXBhZGRpbmcgKyAwLjJyZW0pO1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4wMXJlbTtcbiAgICAgIHNwYW4ge1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgfVxuICAgIH1cbiAgICBsaSB7XG4gICAgICAmLmhhcy1zdWIge1xuICAgICAgICA+IGEge1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UsIGJhY2tncm91bmQgMHMsIGNvbG9yIDBzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBhIHtcbiAgICAgICAgY29sb3I6IGRhcmtlbigkdGhlbWUtY29sb3IsIDQuOSUpO1xuICAgICAgICBwYWRkaW5nOiAkbWVudS1wYWRkaW5nO1xuICAgICAgICBsaW5lLWhlaWdodDogMS40NTtcblxuICAgICAgICBzcGFuLm1lbnUtc3ViLXRpdGxlIHtcbiAgICAgICAgICBjb2xvcjogbGlnaHRlbigkdGhlbWUtY29sb3IsIDMwJSk7XG4gICAgICAgIH1cblxuICAgICAgICAmID4gKiB7XG4gICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMjVzIGVhc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBNZW51IEl0ZW0gSG92ZXIgQW5pbWF0aW9uXG4gICAgbGkubmF2LWl0ZW0ge1xuICAgICAgYTpob3ZlciA+ICoge1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yNXMgZWFzZTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCk7XG4gICAgICB9XG4gICAgICB1bC5tZW51LWNvbnRlbnQge1xuICAgICAgICBsaSB7XG4gICAgICAgICAgYTpob3ZlciA+ICoge1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMjVzIGVhc2U7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICA+IGxpIHtcbiAgICAgID4gYSB7XG4gICAgICAgIG1hcmdpbjogMCAxNXB4O1xuICAgICAgICAubGFiZWwge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgfVxuICAgICAgICBpLFxuICAgICAgICBzdmcge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB0b3A6IDFweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgPiB1bCBsaSB7XG4gICAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogN3B4ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmOm5vdCguaGFzLXN1Yikge1xuICAgICAgICAgIG1hcmdpbjogMCAxNXB4O1xuICAgICAgICB9XG4gICAgICAgICYuaGFzLXN1YiB7XG4gICAgICAgICAgPiBhIHtcbiAgICAgICAgICAgIG1hcmdpbjogMCAxNXB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgID4gdWwgPiBsaSB7XG4gICAgICAgICAgICBtYXJnaW46IDAgMTVweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICYub3Blbjpub3QoLm1lbnUtaXRlbS1jbG9zaW5nKSxcbiAgICAgICYuc2lkZWJhci1ncm91cC1hY3RpdmUge1xuICAgICAgICA+IGEge1xuICAgICAgICAgIGNvbG9yOiAkbWFpbi1tZW51LXRvcC1vcGVuLWNvbG9yO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICRtYWluLW1lbnUtdG9wLW9wZW4taGVhZC1iZztcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJjpub3QoLm9wZW4pIHtcbiAgICAgICAgPiB1bCB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAuYWN0aXZlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgPiBhIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTE4ZGVnLCByZ2JhKCRwcmltYXJ5LCAxKSwgcmdiYSgkcHJpbWFyeSwgMC43KSk7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggMXB4IHJnYmEoJHByaW1hcnksIDAuNyk7XG4gICAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuYWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZDogJG1haW4tbWVudS10b3Atb3Blbi1ob3Zlci1iZztcblxuICAgICAgICA+IGEge1xuICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmhvdmVyLFxuICAgICAgICA6aG92ZXIge1xuICAgICAgICAgID4gYSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkbWFpbi1tZW51LXRvcC1hY3RpdmUtaGVhZC1iZztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdWwge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDA7XG5cbiAgICAgICAgbGkge1xuICAgICAgICAgIGNvbG9yOiAkbWFpbi1tZW51LXN1Yi1jb2xvcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICA+IGEge1xuICAgICAgICAgICAgcGFkZGluZzogJG1lbnUtc2Vjb25kLWxldmVsLXBhZGRpbmc7XG4gICAgICAgICAgfVxuICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAkbWVudS10aGlyZC1sZXZlbC1wYWRkaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuaGFzLXN1YiB7XG4gICAgICAgICAgJjpub3QoLm9wZW4pIHtcbiAgICAgICAgICAgID4gdWwge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAuYWN0aXZlIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5vcGVuLFxuICAgICAgICAuc2lkZWJhci1ncm91cC1hY3RpdmUge1xuICAgICAgICAgID4gYSB7XG4gICAgICAgICAgICBjb2xvcjogJG1haW4tbWVudS1zdWItb3Blbi1jb2xvcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICRtYWluLW1lbnUtdG9wLWFjdGl2ZS1oZWFkLWJnO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAvL2ZvciAycmQgbGV2ZWwgbWVudVxuICAgICAgICAgID4gdWwge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAvL2ZvciAzcmQgbGV2ZWwgbWVudVxuICAgICAgICAgICAgLm9wZW4ge1xuICAgICAgICAgICAgICA+IHVsIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5ob3ZlcixcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgPiBhIHtcbiAgICAgICAgICAgIGNvbG9yOiAkbWFpbi1tZW51LXN1Yi1ob3Zlci1jb2xvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuYWN0aXZlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTE4ZGVnLCByZ2JhKCRwcmltYXJ5LCAxKSwgcmdiYSgkcHJpbWFyeSwgMC43KSk7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggMXB4IHJnYmEoJHByaW1hcnksIDAuNyk7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgPiBhIHtcbiAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4vLyBNZW51IGNvbnRlbnQgZGlzcGxheSBtaXhpblxuLy8gJG1lbnUtZXhwYW5kZWQtd2lkdGggOiBFeHBhbmRlZCBtZW51IHdpZHRoXG4vLyAkbWVudS1jb2xsYXBzZWQtd2lkdGg6IENvbGxhcHNlZCBtZW51IHdpZHRoXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkBtaXhpbiBtZW51LWNvbnRlbnQoJG1lbnUtZXhwYW5kZWQtd2lkdGgsICRtZW51LWNvbGxhcHNlZC13aWR0aCwgJHRoZW1lLWNvbG9yLCAkdGhlbWUtYmcpIHtcbiAgLm1haW4tbWVudS1jb250ZW50IHtcbiAgICA+IHNwYW4ubWVudS10aXRsZSxcbiAgICBhLm1lbnUtdGl0bGUge1xuICAgICAgcmlnaHQ6IC0oJG1lbnUtZXhwYW5kZWQtd2lkdGgpO1xuICAgICAgd2lkdGg6ICRtZW51LWV4cGFuZGVkLXdpZHRoO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeTtcbiAgICAgIGJvcmRlci1jb2xvcjogJHByaW1hcnk7XG4gICAgICBwYWRkaW5nOiAxM3B4IDIwcHg7XG4gICAgfVxuICAgID4gdWwubWVudS1jb250ZW50IHtcbiAgICAgIGxlZnQ6ICRtZW51LWNvbGxhcHNlZC13aWR0aDtcbiAgICAgIHdpZHRoOiAkbWVudS1leHBhbmRlZC13aWR0aDtcbiAgICAgIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMC4yNXMsIG9wYWNpdHkgMC4yNXM7XG4gICAgICBib3gtc2hhZG93OiAxcHggMHB4IDJweCByZ2JhKCRibGFjaywgMC4xKTtcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKCRibGFjaywgMC4yKTtcbiAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiYSgkYmxhY2ssIDAuMDIpO1xuXG4gICAgICBsaSB7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICBhIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBwYWRkaW5nOiA4cHggMjBweCA4cHggMjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIEBpbmNsdWRlIHZlcnRpY2FsLW1lbnUtaGFzLXN1Yi1hcnJvdygxcmVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBGaWxlIE5hbWU6IHZlcnRpY2FsLW92ZXJsYXktbWVudS5zY3NzXG4gICAgRGVzY3JpcHRpb246IEEgb3ZlcmxheSBzdHlsZSB2ZXJ0aWNhbCBtZW51IHdpdGggc2hvdyBhbmQgaGlkZSBzdXBwb3J0LiBJdCBzdXBwb3J0XG4gICAgbGlnaHQgJiBkYXJrIHZlcnNpb24sIGZpbHBwZWQgbGF5b3V0LCByaWdodCBzaWRlIGljb25zLCBuYXRpdmUgc2Nyb2xsIGFuZCBib3JkZXJzIG1lbnVcbiAgICBpdGVtIHNlcGVyYXRpb24uXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIEl0ZW0gTmFtZTogVnVleHkgLSBWdWVqcywgUmVhY3QsIEFuZ3VsYXIsIEhUTUwgJiBMYXJhdmVsIEFkbWluIERhc2hib2FyZCBUZW1wbGF0ZVxuICAgIEF1dGhvcjogUElYSU5WRU5UXG4gICAgQXV0aG9yIFVSTDogaHR0cDovL3d3dy50aGVtZWZvcmVzdC5uZXQvdXNlci9waXhpbnZlbnRcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cbkBpbXBvcnQgJy4uLy4uLy4uL2Jvb3RzdHJhcC1leHRlbmRlZC9pbmNsdWRlJzsgLy8gQm9vdHN0cmFwIGluY2x1ZGVzXG5AaW1wb3J0ICcuLi8uLi8uLi9jb21wb25lbnRzL2luY2x1ZGUnOyAvLyBDb21wb25lbnRzIGluY2x1ZGVzXG5cbi8vIEltcG9ydCBmaXJzdCBtYWluIG1lbnUgbWl4aW5cbkBpbXBvcnQgJy4uLy4uL21peGlucy9tYWluLW1lbnUtbWl4aW4nO1xuXG4vLyBWZXJ0aWNhbCBPdmVybGF5IE1lbnVcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PVxuLnZlcnRpY2FsLW92ZXJsYXktbWVudSB7XG4gIC8vQ29udGVudCBleHBhbmRlZFxuICAuY29udGVudCB7XG4gICAgQGluY2x1ZGUgbWFpbi1tZW51LXdpZHRoKDApO1xuICB9XG4gIC8vTmF2YmFyIGV4cGFuZGVkXG4gIC5uYXZiYXIge1xuICAgIC5uYXZiYXItaGVhZGVyIHtcbiAgICAgIEBpbmNsdWRlIG1lbnUtbmF2YmFyLXdpZHRoKCRtZW51LWV4cGFuZGVkLXdpZHRoKTtcbiAgICB9XG4gIH1cbiAgLy8gTWFpbiBtZW51IGV4cGFuZGVkXG4gIC5tYWluLW1lbnUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjI1cywgb3BhY2l0eSAwLjI1cywgdHJhbnNmb3JtIDAuMjVzO1xuICAgIHdpZHRoOiAkbWVudS1leHBhbmRlZC13aWR0aDtcbiAgICBsZWZ0OiAtKCRtZW51LWV4cGFuZGVkLXdpZHRoKTtcblxuICAgIC5uYXZpZ2F0aW9uIHtcbiAgICAgID4gbGkge1xuICAgICAgICA+IGEge1xuICAgICAgICAgID4gc3ZnLFxuICAgICAgICAgID4gaSB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE0cHg7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDIwMG1zIGVhc2UgYWxsO1xuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IDIwMG1zIGVhc2UgYWxsO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEuNDI5cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGkge1xuICAgICAgICBAaW5jbHVkZSB2ZXJ0aWNhbC1tZW51LWhhcy1zdWItYXJyb3coMXJlbSk7XG4gICAgICB9XG5cbiAgICAgIC5uYXZpZ2F0aW9uLWhlYWRlciB7XG4gICAgICAgIC5mZWF0aGVyLW1vcmUtaG9yaXpvbnRhbCB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAmLm1lbnUtb3BlbiB7XG4gICAgLm1haW4tbWVudSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgkbWVudS1leHBhbmRlZC13aWR0aCwgMCwgMCk7XG4gICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjI1cywgb3BhY2l0eSAwLjI1cywgdHJhbnNmb3JtIDAuMjVzO1xuICAgIH1cbiAgfVxuICAmLm1lbnUtaGlkZSB7XG4gICAgLm1haW4tbWVudSB7XG4gICAgICBAZXh0ZW5kIC5tYWluLW1lbnU7XG4gICAgfVxuICB9XG59XG4iXX0= */"],
  encapsulation: 2
});

/***/ }),

/***/ 43809:
/*!***************************************************************!*\
  !*** ./src/app/layout/horizontal/horizontal-layout.module.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HorizontalLayoutModule": function() { return /* binding */ HorizontalLayoutModule; }
/* harmony export */ });
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _core_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components */ 69065);
/* harmony import */ var _core_common_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/common.module */ 75078);
/* harmony import */ var app_layout_components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/layout/components/navbar/navbar.module */ 17777);
/* harmony import */ var app_layout_components_content_content_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/layout/components/content/content.module */ 92181);
/* harmony import */ var app_layout_components_menu_menu_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/layout/components/menu/menu.module */ 79287);
/* harmony import */ var app_layout_components_footer_footer_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/layout/components/footer/footer.module */ 73030);
/* harmony import */ var app_layout_horizontal_horizontal_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/layout/horizontal/horizontal-layout.component */ 54487);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);











var HorizontalLayoutModule = /*#__PURE__*/(0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function HorizontalLayoutModule() {
  (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HorizontalLayoutModule);
});

HorizontalLayoutModule.ɵfac = function HorizontalLayoutModule_Factory(t) {
  return new (t || HorizontalLayoutModule)();
};

HorizontalLayoutModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: HorizontalLayoutModule
});
HorizontalLayoutModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, _core_common_module__WEBPACK_IMPORTED_MODULE_3__.CoreCommonModule, _core_components__WEBPACK_IMPORTED_MODULE_2__.CoreSidebarModule, app_layout_components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_4__.NavbarModule, app_layout_components_content_content_module__WEBPACK_IMPORTED_MODULE_5__.ContentModule, app_layout_components_menu_menu_module__WEBPACK_IMPORTED_MODULE_6__.MenuModule, app_layout_components_footer_footer_module__WEBPACK_IMPORTED_MODULE_7__.FooterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](HorizontalLayoutModule, {
    declarations: [app_layout_horizontal_horizontal_layout_component__WEBPACK_IMPORTED_MODULE_8__.HorizontalLayoutComponent],
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, _core_common_module__WEBPACK_IMPORTED_MODULE_3__.CoreCommonModule, _core_components__WEBPACK_IMPORTED_MODULE_2__.CoreSidebarModule, app_layout_components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_4__.NavbarModule, app_layout_components_content_content_module__WEBPACK_IMPORTED_MODULE_5__.ContentModule, app_layout_components_menu_menu_module__WEBPACK_IMPORTED_MODULE_6__.MenuModule, app_layout_components_footer_footer_module__WEBPACK_IMPORTED_MODULE_7__.FooterModule],
    exports: [app_layout_horizontal_horizontal_layout_component__WEBPACK_IMPORTED_MODULE_8__.HorizontalLayoutComponent]
  });
})();

/***/ }),

/***/ 4805:
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutModule": function() { return /* binding */ LayoutModule; }
/* harmony export */ });
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ 71378);
/* harmony import */ var app_layout_custom_breakpoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/layout/custom-breakpoints */ 41724);
/* harmony import */ var app_layout_vertical_vertical_layout_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/layout/vertical/vertical-layout.module */ 16800);
/* harmony import */ var app_layout_horizontal_horizontal_layout_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/layout/horizontal/horizontal-layout.module */ 43809);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);








var LayoutModule = /*#__PURE__*/(0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function LayoutModule() {
  (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, LayoutModule);
});

LayoutModule.ɵfac = function LayoutModule_Factory(t) {
  return new (t || LayoutModule)();
};

LayoutModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: LayoutModule
});
LayoutModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  providers: [app_layout_custom_breakpoints__WEBPACK_IMPORTED_MODULE_2__.CustomBreakPointsProvider],
  imports: [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__.FlexLayoutModule.withConfig({
    disableDefaultBps: true
  }), app_layout_vertical_vertical_layout_module__WEBPACK_IMPORTED_MODULE_3__.VerticalLayoutModule, app_layout_horizontal_horizontal_layout_module__WEBPACK_IMPORTED_MODULE_4__.HorizontalLayoutModule, app_layout_vertical_vertical_layout_module__WEBPACK_IMPORTED_MODULE_3__.VerticalLayoutModule, app_layout_horizontal_horizontal_layout_module__WEBPACK_IMPORTED_MODULE_4__.HorizontalLayoutModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](LayoutModule, {
    imports: [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__.FlexLayoutModule, app_layout_vertical_vertical_layout_module__WEBPACK_IMPORTED_MODULE_3__.VerticalLayoutModule, app_layout_horizontal_horizontal_layout_module__WEBPACK_IMPORTED_MODULE_4__.HorizontalLayoutModule],
    exports: [app_layout_vertical_vertical_layout_module__WEBPACK_IMPORTED_MODULE_3__.VerticalLayoutModule, app_layout_horizontal_horizontal_layout_module__WEBPACK_IMPORTED_MODULE_4__.HorizontalLayoutModule]
  });
})();

/***/ }),

/***/ 80836:
/*!**************************************************************!*\
  !*** ./src/app/layout/vertical/vertical-layout.component.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerticalLayoutComponent": function() { return /* binding */ VerticalLayoutComponent; }
/* harmony export */ });
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 85921);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/config.service */ 52553);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/extended */ 1570);
/* harmony import */ var _core_components_core_sidebar_core_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/components/core-sidebar/core-sidebar.component */ 9831);
/* harmony import */ var app_layout_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/layout/components/navbar/navbar.component */ 903);
/* harmony import */ var app_layout_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/layout/components/menu/menu.component */ 92393);
/* harmony import */ var app_layout_components_content_content_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/layout/components/content/content.component */ 24714);
/* harmony import */ var app_layout_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/layout/components/footer/footer.component */ 92223);














function VerticalLayoutComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainer"](0);
  }
}

function VerticalLayoutComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainer"](0);
  }
}

function VerticalLayoutComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "div", 7);
  }
}

function VerticalLayoutComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainer"](0);
  }
}

var _c0 = function _c0(a0, a1) {
  return [a0, a1];
};

function VerticalLayoutComponent_ng_template_7_app_navbar_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-navbar", 9);
  }

  if (rf & 2) {
    var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](1, _c0, ctx_r10.coreConfig.layout.navbar.customBackgroundColor === true ? ctx_r10.coreConfig.layout.navbar.background + " " + ctx_r10.coreConfig.layout.navbar.type + " " + ctx_r10.coreConfig.layout.navbar.backgroundColor : ctx_r10.coreConfig.layout.navbar.background + " " + ctx_r10.coreConfig.layout.navbar.type, ctx_r10.coreConfig.layout.navbar.type === "floating-nav" ? "container-xxl" : ""));
  }
}

function VerticalLayoutComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, VerticalLayoutComponent_ng_template_7_app_navbar_0_Template, 1, 4, "app-navbar", 8);
  }

  if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r5.coreConfig.layout.navbar.hidden);
  }
}

function VerticalLayoutComponent_ng_template_9_core_sidebar_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "core-sidebar", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-menu", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("collapsed", ctx_r11.coreConfig.layout.menu.collapsed)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](2, _c0, ctx_r11.coreConfig.layout.skin === "semi-dark" || ctx_r11.coreConfig.layout.skin === "dark" ? "menu-dark" : "menu-light", ctx_r11.coreConfig.layout.menu.collapsed ? "" : "expanded"));
  }
}

function VerticalLayoutComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, VerticalLayoutComponent_ng_template_9_core_sidebar_0_Template, 2, 5, "core-sidebar", 10);
  }

  if (rf & 2) {
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r7.coreConfig.layout.menu.hidden);
  }
}

function VerticalLayoutComponent_ng_template_11_footer_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "footer", 14);
  }

  if (rf & 2) {
    var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", ctx_r12.coreConfig.layout.footer.customBackgroundColor === true ? ctx_r12.coreConfig.layout.footer.background + " " + ctx_r12.coreConfig.layout.footer.type + " " + ctx_r12.coreConfig.layout.footer.backgroundColor : ctx_r12.coreConfig.layout.footer.background + " " + ctx_r12.coreConfig.layout.footer.type);
  }
}

function VerticalLayoutComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, VerticalLayoutComponent_ng_template_11_footer_0_Template, 1, 1, "footer", 13);
  }

  if (rf & 2) {
    var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r9.coreConfig.layout.footer.hidden);
  }
}

var VerticalLayoutComponent = /*#__PURE__*/function () {
  /**
   * Constructor
   *
   * @param {CoreConfigService} _coreConfigService
   */
  function VerticalLayoutComponent(_coreConfigService, _elementRef) {
    (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, VerticalLayoutComponent);

    this._coreConfigService = _coreConfigService;
    this._elementRef = _elementRef; // Set the private defaults

    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
  } // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */


  (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(VerticalLayoutComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      // Subscribe to config changes
      this._coreConfigService.config.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this._unsubscribeAll)).subscribe(function (config) {
        _this.coreConfig = config;
      });
    }
    /**
     * On destroy
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      // Unsubscribe from all subscriptions
      this._unsubscribeAll.next();

      this._unsubscribeAll.complete();
    }
  }]);

  return VerticalLayoutComponent;
}();

VerticalLayoutComponent.ɵfac = function VerticalLayoutComponent_Factory(t) {
  return new (t || VerticalLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_services_config_service__WEBPACK_IMPORTED_MODULE_2__.CoreConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ElementRef));
};

VerticalLayoutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: VerticalLayoutComponent,
  selectors: [["vertical-layout"]],
  decls: 13,
  vars: 4,
  consts: [[4, "ngTemplateOutlet"], [1, "app-content", "content"], [1, "content-overlay"], ["class", "header-navbar-shadow", 4, "ngIf"], ["navbar", ""], ["menu", ""], ["footer", ""], [1, "header-navbar-shadow"], ["class", "header-navbar navbar navbar-expand-lg align-items-center navbar-shadow", 3, "ngClass", 4, "ngIf"], [1, "header-navbar", "navbar", "navbar-expand-lg", "align-items-center", "navbar-shadow", 3, "ngClass"], ["name", "menu", "collapsibleSidebar", "bs-gt-xl", "class", "main-menu menu-fixed menu-accordio menu-shadow", "overlayClass", "sidenav-overlay", 3, "collapsed", "ngClass", 4, "ngIf"], ["name", "menu", "collapsibleSidebar", "bs-gt-xl", "overlayClass", "sidenav-overlay", 1, "main-menu", "menu-fixed", "menu-accordio", "menu-shadow", 3, "collapsed", "ngClass"], ["menuType", "vertical-menu", 1, "vertical-menu"], ["class", "footer", 3, "ngClass", 4, "ngIf"], [1, "footer", 3, "ngClass"]],
  template: function VerticalLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, VerticalLayoutComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, VerticalLayoutComponent_ng_container_1_Template, 1, 0, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, VerticalLayoutComponent_div_4_Template, 1, 0, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "content");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, VerticalLayoutComponent_ng_container_6_Template, 1, 0, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, VerticalLayoutComponent_ng_template_7_Template, 1, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, VerticalLayoutComponent_ng_template_9_Template, 1, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, VerticalLayoutComponent_ng_template_11_Template, 1, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    }

    if (rf & 2) {
      var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](8);

      var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](10);

      var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](12);

      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngTemplateOutlet", _r4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngTemplateOutlet", _r6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.coreConfig.layout.navbar.hidden);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngTemplateOutlet", _r8);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgTemplateOutlet, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__.DefaultClassDirective, _core_components_core_sidebar_core_sidebar_component__WEBPACK_IMPORTED_MODULE_3__.CoreSidebarComponent, app_layout_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__.NavbarComponent, app_layout_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__.MenuComponent, app_layout_components_content_content_component__WEBPACK_IMPORTED_MODULE_6__.ContentComponent, app_layout_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__.FooterComponent],
  styles: ["/*=========================================================================================\n    File Name: vertical-menu.scss\n    Description: A classic vertical modern style menu with expand and collops support. It support\n    light & dark version, flipped layout, right side icons, native scroll and borders menu\n    item separation.\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, React, Angular, HTML & Laravel Admin Dashboard Template\n    Author: PIXINVENT\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n.vertical-layout.vertical-menu-modern .main-menu {\n  transition: 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), background 0s;\n  transform: translate3d(0, 0, 0);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n.vertical-layout.vertical-menu-modern .main-menu .navigation li a {\n  align-items: center;\n}\n.vertical-layout.vertical-menu-modern .main-menu .navigation > li > a svg,\n.vertical-layout.vertical-menu-modern .main-menu .navigation > li > a i {\n  height: 20px;\n  width: 20px;\n  font-size: 1.45rem;\n  margin-right: 1.1rem;\n  flex-shrink: 0;\n}\n.vertical-layout.vertical-menu-modern .main-menu .navigation .menu-content > li > a svg,\n.vertical-layout.vertical-menu-modern .main-menu .navigation .menu-content > li > a i {\n  margin-right: 1.45rem;\n  font-size: 11px;\n  height: 11px;\n  width: 11px;\n}\n.vertical-layout.vertical-menu-modern.menu-expanded .main-menu {\n  width: 260px;\n}\n.vertical-layout.vertical-menu-modern.menu-expanded .main-menu .navigation .navigation-header .feather-more-horizontal {\n  display: none;\n}\n.vertical-layout.vertical-menu-modern.menu-expanded .main-menu .navigation > li > a > i:before,\n.vertical-layout.vertical-menu-modern.menu-expanded .main-menu .navigation > li > a > svg:before {\n  height: 20px;\n  width: 20px;\n  font-size: 1.45rem;\n}\n.vertical-layout.vertical-menu-modern.menu-expanded .main-menu .navigation li.has-sub > a:after {\n  content: \"\";\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236e6b7b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 1.1rem;\n  height: 1.1rem;\n  width: 1.1rem;\n  display: inline-block;\n  position: absolute;\n  right: 20px;\n  top: 14px;\n  transform: rotate(0deg);\n  transition: all 0.2s ease-out;\n}\n.vertical-layout.vertical-menu-modern.menu-expanded .main-menu .navigation li.has-sub.open:not(.menu-item-closing) > a:after {\n  transform: rotate(90deg);\n}\n.vertical-layout.vertical-menu-modern.menu-expanded .footer {\n  margin-left: 260px;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .navbar .navbar-header {\n  float: left;\n  width: 80px;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .navbar .navbar-header .modern-nav-toggle {\n  display: none;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .navbar .navbar-header.expanded {\n  width: 260px;\n  z-index: 1000;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .navbar .navbar-header.expanded .modern-nav-toggle {\n  display: block;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .navbar.fixed-top, .vertical-layout.vertical-menu-modern.menu-collapsed .navbar.floating-nav {\n  left: 80px;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu {\n  width: 80px;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu .navbar-header .brand-text,\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu .modern-nav-toggle {\n  display: none;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu:not(.expanded) .navigation-header {\n  margin-left: 2.2rem;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu:not(.expanded) .navigation-header span {\n  display: none;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu:not(.expanded) .navigation-header .feather-more-horizontal {\n  display: block;\n  font-size: 1.285rem;\n  width: 18px;\n  height: 18px;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu:not(.expanded) .navigation li:last-child {\n  margin-bottom: 1.25rem !important;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu:not(.expanded) .navigation li.active a {\n  background: whitesmoke;\n  box-shadow: none;\n  color: #565656;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu.expanded {\n  width: 260px;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu.expanded .navigation > li.navigation-header span {\n  display: block;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu.expanded .navigation > li.navigation-header .feather-more-horizontal {\n  display: none;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu.expanded .navigation li.has-sub > a:after {\n  content: \"\";\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236e6b7b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 1rem;\n  height: 1rem;\n  width: 1rem;\n  display: inline-block;\n  position: absolute;\n  right: 20px;\n  top: 14px;\n  transform: rotate(0deg);\n  transition: all 0.2s ease-out;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu.expanded .navigation li.has-sub.open:not(.menu-item-closing) > a:after {\n  transform: rotate(90deg);\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu.expanded .navbar-header .brand-text {\n  display: inline;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu.expanded .modern-nav-toggle {\n  display: block;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu .navigation {\n  overflow: visible;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu .navigation > li.navigation-header span {\n  display: none;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu .navigation > li > a {\n  text-overflow: inherit;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .app-content,\n.vertical-layout.vertical-menu-modern.menu-collapsed .footer {\n  margin-left: 80px;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .header-navbar.floating-nav {\n  width: calc(100vw - (100vw - 100%) - 4.4rem - 74px);\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .header-navbar.navbar-static-top {\n  width: calc(100vw - (100vw - 100%) - 74px);\n  left: 74px;\n}\n.vertical-layout.vertical-menu-modern .toggle-icon,\n.vertical-layout.vertical-menu-modern .collapse-toggle-icon {\n  margin-right: 0.425rem;\n}\n.vertical-layout.vertical-menu-modern .toggle-icon:focus,\n.vertical-layout.vertical-menu-modern .collapse-toggle-icon:focus {\n  outline: none;\n}\n@media (min-width: 992px) {\n  .vertical-layout.vertical-menu-modern .main-menu {\n    width: 260px;\n  }\n}\n@media (max-width: 1199.98px) {\n  .vertical-layout.vertical-menu-modern .main-menu {\n    width: 0;\n  }\n  .vertical-layout.vertical-menu-modern .navbar .navbar-header {\n    width: 0;\n  }\n  .vertical-layout.vertical-menu-modern .content,\n.vertical-layout.vertical-menu-modern .footer {\n    margin-left: 0;\n  }\n  .vertical-layout.vertical-menu-modern.menu-collapsed .app-content,\n.vertical-layout.vertical-menu-modern.menu-collapsed .footer {\n    margin-left: 0;\n  }\n  .vertical-layout.vertical-menu-modern.menu-collapsed .main-menu {\n    width: 0;\n  }\n}\n@media (max-width: 767.98px) {\n  .vertical-layout.vertical-menu-modern .main-menu {\n    width: 0;\n  }\n  .vertical-layout.vertical-menu-modern .navbar .navbar-header {\n    width: 0;\n  }\n  .vertical-layout.vertical-menu-modern .content,\n.vertical-layout.vertical-menu-modern .footer {\n    margin-left: 0;\n  }\n}\n@-webkit-keyframes fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes fadeout {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n@keyframes fadeout {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n  .vertical-menu-modern.vertical-layout .main-menu .navigation > li > a > span {\n    -webkit-animation: none;\n            animation: none;\n  }\n}\n/*=========================================================================================\n    File Name: vertical-overlay-menu.scss\n    Description: A overlay style vertical menu with show and hide support. It support\n    light & dark version, filpped layout, right side icons, native scroll and borders menu\n    item seperation.\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, React, Angular, HTML & Laravel Admin Dashboard Template\n    Author: PIXINVENT\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n.vertical-overlay-menu .content {\n  margin-left: 0;\n}\n.vertical-overlay-menu .navbar .navbar-header {\n  float: left;\n  width: 260px;\n}\n.vertical-overlay-menu .main-menu, .vertical-overlay-menu.menu-hide .main-menu {\n  opacity: 0;\n  transform: translate3d(0, 0, 0);\n  transition: width 0.25s, opacity 0.25s, transform 0.25s;\n  width: 260px;\n  left: -260px;\n}\n.vertical-overlay-menu .main-menu .navigation > li > a > svg,\n.vertical-overlay-menu .main-menu .navigation > li > a > i {\n  margin-right: 14px;\n  float: left;\n  transition: 200ms ease all;\n  height: 20px;\n  width: 20px;\n}\n.vertical-overlay-menu .main-menu .navigation > li > a > svg:before,\n.vertical-overlay-menu .main-menu .navigation > li > a > i:before {\n  transition: 200ms ease all;\n  font-size: 1.429rem;\n}\n.vertical-overlay-menu .main-menu .navigation li.has-sub > a:after {\n  content: \"\";\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236e6b7b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 1rem;\n  height: 1rem;\n  width: 1rem;\n  display: inline-block;\n  position: absolute;\n  right: 20px;\n  top: 14px;\n  transform: rotate(0deg);\n  transition: all 0.2s ease-out;\n}\n.vertical-overlay-menu .main-menu .navigation li.has-sub.open:not(.menu-item-closing) > a:after {\n  transform: rotate(90deg);\n}\n.vertical-overlay-menu .main-menu .navigation .navigation-header .feather-more-horizontal {\n  display: none;\n}\n.vertical-overlay-menu.menu-open .main-menu {\n  opacity: 1;\n  transform: translate3d(260px, 0, 0);\n  transition: width 0.25s, opacity 0.25s, transform 0.25s;\n}\n/*=========================================================================================\n    File Name: vertical-overlay-menu.scss\n    Description: A overlay style vertical menu with show and hide support. It support\n    light & dark version, filpped layout, right side icons, native scroll and borders menu\n    item seperation.\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, React, Angular, HTML & Laravel Admin Dashboard Template\n    Author: PIXINVENT\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n.vertical-overlay-menu .content {\n  margin-left: 0;\n}\n.vertical-overlay-menu .navbar .navbar-header {\n  float: left;\n  width: 260px;\n}\n.vertical-overlay-menu .main-menu, .vertical-overlay-menu.menu-hide .main-menu {\n  opacity: 0;\n  transform: translate3d(0, 0, 0);\n  transition: width 0.25s, opacity 0.25s, transform 0.25s;\n  width: 260px;\n  left: -260px;\n}\n.vertical-overlay-menu .main-menu .navigation > li > a > svg,\n.vertical-overlay-menu .main-menu .navigation > li > a > i {\n  margin-right: 14px;\n  float: left;\n  transition: 200ms ease all;\n  height: 20px;\n  width: 20px;\n}\n.vertical-overlay-menu .main-menu .navigation > li > a > svg:before,\n.vertical-overlay-menu .main-menu .navigation > li > a > i:before {\n  transition: 200ms ease all;\n  font-size: 1.429rem;\n}\n.vertical-overlay-menu .main-menu .navigation li.has-sub > a:after {\n  content: \"\";\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236e6b7b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 1rem;\n  height: 1rem;\n  width: 1rem;\n  display: inline-block;\n  position: absolute;\n  right: 20px;\n  top: 14px;\n  transform: rotate(0deg);\n  transition: all 0.2s ease-out;\n}\n.vertical-overlay-menu .main-menu .navigation li.has-sub.open:not(.menu-item-closing) > a:after {\n  transform: rotate(90deg);\n}\n.vertical-overlay-menu .main-menu .navigation .navigation-header .feather-more-horizontal {\n  display: none;\n}\n.vertical-overlay-menu.menu-open .main-menu {\n  opacity: 1;\n  transform: translate3d(260px, 0, 0);\n  transition: width 0.25s, opacity 0.25s, transform 0.25s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL0Bjb3JlL3Njc3MvYmFzZS9jb3JlL21lbnUvbWVudS10eXBlcy92ZXJ0aWNhbC1tZW51LnNjc3MiLCJ2ZXJ0aWNhbC1sYXlvdXQuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi9AY29yZS9zY3NzL2Jhc2UvY29tcG9uZW50cy9fdmFyaWFibGVzLnNjc3MiLCIuLi8uLi8uLi9AY29yZS9zY3NzL2Jhc2UvY29yZS9taXhpbnMvbWFpbi1tZW51LW1peGluLnNjc3MiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvbWl4aW5zL19icmVha3BvaW50cy5zY3NzIiwiLi4vLi4vLi4vQGNvcmUvc2Nzcy9iYXNlL2NvcmUvbWVudS9tZW51LXR5cGVzL3ZlcnRpY2FsLW92ZXJsYXktbWVudS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7MkZBQUE7QUFxQkk7RUFDRSxnRUFBQTtFQUNBLCtCQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtBQ1ZOO0FEWVE7RUFDRSxtQkFBQTtBQ1ZWO0FEWVE7O0VBRUUsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtBQ1ZWO0FEY1U7O0VBRUUscUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNaWjtBRHFCTTtFQUNFLFlFTmM7QURidEI7QURzQlk7RUFDRSxhQUFBO0FDcEJkO0FEMkJnQjs7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDeEJsQjtBRVZJO0VBQ0UsV0FBQTtFQUNBLGdUQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLHVCSG1DMkM7RUdsQzNDLGNIa0MyQztFR2pDM0MsYUhpQzJDO0VHaEMzQyxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtFQUNBLDZCQUFBO0FGWU47QUVUTTtFQUNFLHdCQUFBO0FGV1I7QURpQk07RUdoRUosa0JEaUNvQjtBRGlCdEI7QURzQlE7RUdyRU4sV0FBQTtFQUNBLFdEOEJxQjtBRG9CdkI7QURvQlU7RUFDRSxhQUFBO0FDbEJaO0FEb0JVO0VBQ0UsWUU3Q1U7RUY4Q1YsYUFBQTtBQ2xCWjtBRG1CWTtFQUNFLGNBQUE7QUNqQmQ7QURzQlE7RUFFRSxVRXREYTtBRGlDdkI7QUR5Qk07RUFDRSxXRTNEZTtBRG9DdkI7QUR5QlE7O0VBRUUsYUFBQTtBQ3ZCVjtBRDRCVTtFQUNFLG1CQUFBO0FDMUJaO0FEMkJZO0VBQ0UsYUFBQTtBQ3pCZDtBRDJCWTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDekJkO0FENkJZO0VBQ0UsaUNBQUE7QUMzQmQ7QUQ4QmM7RUFDRSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQzVCaEI7QURtQ1E7RUFDRSxZRWpHWTtBRGdFdEI7QURvQ2M7RUFDRSxjQUFBO0FDbENoQjtBRG9DYztFQUNFLGFBQUE7QUNsQ2hCO0FFcEZJO0VBQ0UsV0FBQTtFQUNBLGdUQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLHFCSHFINkM7RUdwSDdDLFlIb0g2QztFR25IN0MsV0htSDZDO0VHbEg3QyxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtFQUNBLDZCQUFBO0FGc0ZOO0FFbkZNO0VBQ0Usd0JBQUE7QUZxRlI7QUR1QlU7RUFDRSxlQUFBO0FDckJaO0FEdUJVO0VBQ0UsY0FBQTtBQ3JCWjtBRDBCUTtFQUNFLGlCQUFBO0FDeEJWO0FEMEJZO0VBQ0UsYUFBQTtBQ3hCZDtBRDRCWTtFQUNFLHNCQUFBO0FDMUJkO0FEZ0NNOztFR3hLSixpQkRrQ3FCO0FEMEd2QjtBRGtDUTtFQUNFLG1EQUFBO0FDaENWO0FEbUNRO0VBQ0UsMENBQUE7RUFDQSxVQUFBO0FDakNWO0FEc0NJOztFQUVFLHNCQUFBO0FDcENOO0FEcUNNOztFQUNFLGFBQUE7QUNsQ1I7QUc5R0k7RUowSkU7SUFDRSxZRXZLYztFRCtIcEI7QUFDRjtBR3ZHSTtFSnlKRTtJQUNFLFFBQUE7RUMvQ047RURrRE07SUFDRSxRQUFBO0VDaERSO0VEbURJOztJRzNOSixjSDZOK0I7RUNqRC9CO0VEb0RNOztJQUVFLGNBQUE7RUNsRFI7RURvRE07SUFDRSxRQUFBO0VDbERSO0FBQ0Y7QUcxSEk7RUp1TEU7SUFDRSxRQUFBO0VDMUROO0VENkRNO0lBQ0UsUUFBQTtFQzNEUjtFRDhESTs7SUd6UEosY0gyUCtCO0VDNUQvQjtBQUNGO0FEaUVBO0VBQ0U7SUFDRSxVQUFBO0VDL0RGO0VEaUVBO0lBQ0UsVUFBQTtFQy9ERjtBQUNGO0FEeURBO0VBQ0U7SUFDRSxVQUFBO0VDL0RGO0VEaUVBO0lBQ0UsVUFBQTtFQy9ERjtBQUNGO0FEaUVBO0VBQ0U7SUFDRSxVQUFBO0VDL0RGO0VEaUVBO0lBQ0UsVUFBQTtFQy9ERjtBQUNGO0FEeURBO0VBQ0U7SUFDRSxVQUFBO0VDL0RGO0VEaUVBO0lBQ0UsVUFBQTtFQy9ERjtBQUNGO0FEa0VBO0VBQ0U7SUFDRSx1QkFBQTtZQUFBLGVBQUE7RUNoRUY7QUFDRjtBSXBPQTs7Ozs7Ozs7OzJGQUFBO0FBcUJFO0VGTkEsY0VPMkI7QUoyTjdCO0FJdk5JO0VGUkYsV0FBQTtFQUNBLFlENkJvQjtBRHFNdEI7QUl0TkU7RUFDRSxVQUFBO0VBQ0EsK0JBQUE7RUFDQSx1REFBQTtFQUNBLFlIYWtCO0VHWmxCLFlBQUE7QUp3Tko7QUluTlU7O0VBRUUsa0JBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBSnFOWjtBSXBOWTs7RUFDRSwwQkFBQTtFQUNBLG1CQUFBO0FKdU5kO0FFdk9JO0VBQ0UsV0FBQTtFQUNBLGdUQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLHFCRWlCdUM7RUZoQnZDLFlFZ0J1QztFRmZ2QyxXRWV1QztFRmR2QyxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtFQUNBLDZCQUFBO0FGeU9OO0FFdE9NO0VBQ0Usd0JBQUE7QUZ3T1I7QUkvTlE7RUFDRSxhQUFBO0FKaU9WO0FJM05JO0VBQ0UsVUFBQTtFQUNBLG1DQUFBO0VBQ0EsdURBQUE7QUo2Tk47QUluU0E7Ozs7Ozs7OzsyRkFBQTtBQXFCRTtFRk5BLGNFTzJCO0FKMFI3QjtBSXRSSTtFRlJGLFdBQUE7RUFDQSxZRDZCb0I7QURvUXRCO0FJclJFO0VBQ0UsVUFBQTtFQUNBLCtCQUFBO0VBQ0EsdURBQUE7RUFDQSxZSGFrQjtFR1psQixZQUFBO0FKdVJKO0FJbFJVOztFQUVFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUpvUlo7QUluUlk7O0VBQ0UsMEJBQUE7RUFDQSxtQkFBQTtBSnNSZDtBRXRTSTtFQUNFLFdBQUE7RUFDQSxnVEFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkVpQnVDO0VGaEJ2QyxZRWdCdUM7RUZmdkMsV0VldUM7RUZkdkMscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtBRndTTjtBRXJTTTtFQUNFLHdCQUFBO0FGdVNSO0FJOVJRO0VBQ0UsYUFBQTtBSmdTVjtBSTFSSTtFQUNFLFVBQUE7RUFDQSxtQ0FBQTtFQUNBLHVEQUFBO0FKNFJOIiwiZmlsZSI6InZlcnRpY2FsLWxheW91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBGaWxlIE5hbWU6IHZlcnRpY2FsLW1lbnUuc2Nzc1xuICAgIERlc2NyaXB0aW9uOiBBIGNsYXNzaWMgdmVydGljYWwgbW9kZXJuIHN0eWxlIG1lbnUgd2l0aCBleHBhbmQgYW5kIGNvbGxvcHMgc3VwcG9ydC4gSXQgc3VwcG9ydFxuICAgIGxpZ2h0ICYgZGFyayB2ZXJzaW9uLCBmbGlwcGVkIGxheW91dCwgcmlnaHQgc2lkZSBpY29ucywgbmF0aXZlIHNjcm9sbCBhbmQgYm9yZGVycyBtZW51XG4gICAgaXRlbSBzZXBhcmF0aW9uLlxuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBJdGVtIE5hbWU6IFZ1ZXh5IC0gVnVlanMsIFJlYWN0LCBBbmd1bGFyLCBIVE1MICYgTGFyYXZlbCBBZG1pbiBEYXNoYm9hcmQgVGVtcGxhdGVcbiAgICBBdXRob3I6IFBJWElOVkVOVFxuICAgIEF1dGhvciBVUkw6IGh0dHA6Ly93d3cudGhlbWVmb3Jlc3QubmV0L3VzZXIvcGl4aW52ZW50XG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG5AaW1wb3J0ICcuLi8uLi8uLi9ib290c3RyYXAtZXh0ZW5kZWQvaW5jbHVkZSc7IC8vIEJvb3RzdHJhcCBpbmNsdWRlc1xuQGltcG9ydCAnLi4vLi4vLi4vY29tcG9uZW50cy9pbmNsdWRlJzsgLy8gQ29tcG9uZW50cyBpbmNsdWRlc1xuXG4vLyBJbXBvcnQgZmlyc3QgbWFpbiBtZW51IG1peGluXG5AaW1wb3J0ICcuLi8uLi9taXhpbnMvbWFpbi1tZW51LW1peGluJztcblxuLy8gIFZlcnRpY2FsIG1lbnVcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PVxuLnZlcnRpY2FsLWxheW91dCB7XG4gICYudmVydGljYWwtbWVudS1tb2Rlcm4ge1xuICAgIC5tYWluLW1lbnUge1xuICAgICAgdHJhbnNpdGlvbjogMC40cyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKSwgYmFja2dyb3VuZCAwcztcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAubmF2aWdhdGlvbiB7XG4gICAgICAgIGxpIGEge1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgPiBsaSA+IGEgc3ZnLFxuICAgICAgICA+IGxpID4gYSBpIHtcbiAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjQ1cmVtO1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMS4xcmVtO1xuICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICB9XG4gICAgICAgIC8vIFN1Yi1tZW51IGljb24gc2l6ZVxuICAgICAgICAubWVudS1jb250ZW50IHtcbiAgICAgICAgICA+IGxpID4gYSBzdmcsXG4gICAgICAgICAgPiBsaSA+IGEgaSB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEuNDVyZW07XG4gICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDExcHg7XG4gICAgICAgICAgICB3aWR0aDogMTFweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvL1ZlcnRpY2FsIG1lbnUgW0V4cGFuZGVkXVxuICAgICYubWVudS1leHBhbmRlZCB7XG4gICAgICAvLyBNYWluIG1lbnUgZXhwYW5kZWRcbiAgICAgIC5tYWluLW1lbnUge1xuICAgICAgICB3aWR0aDogJG1lbnUtZXhwYW5kZWQtd2lkdGg7XG4gICAgICAgIC5uYXZpZ2F0aW9uIHtcbiAgICAgICAgICAubmF2aWdhdGlvbi1oZWFkZXIge1xuICAgICAgICAgICAgLmZlYXRoZXItbW9yZS1ob3Jpem9udGFsIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgPiBsaSB7XG4gICAgICAgICAgICA+IGEge1xuICAgICAgICAgICAgICA+IGksXG4gICAgICAgICAgICAgID4gc3ZnIHtcbiAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40NXJlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgbGkge1xuICAgICAgICAgICAgQGluY2x1ZGUgdmVydGljYWwtbWVudS1oYXMtc3ViLWFycm93KCRmb250LXNpemUtYmFzZSArIDAuMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvL0NvbnRlbnQgZXhwYW5kZWRcbiAgICAgIC5mb290ZXIge1xuICAgICAgICBAaW5jbHVkZSBtYWluLW1lbnUtd2lkdGgoJG1lbnUtZXhwYW5kZWQtd2lkdGgpO1xuICAgICAgfVxuICAgIH1cbiAgICAvL1ZlcnRpY2FsIG1lbnUgW0NvbGxhcHNlZF1cbiAgICAmLm1lbnUtY29sbGFwc2VkIHtcbiAgICAgIC8vTmF2YmFyIGNvbGxhcHNlZFxuICAgICAgLm5hdmJhciB7XG4gICAgICAgIC5uYXZiYXItaGVhZGVyIHtcbiAgICAgICAgICBAaW5jbHVkZSBtZW51LW5hdmJhci13aWR0aCgkbWVudS1jb2xsYXBzZWQtd2lkdGgpO1xuICAgICAgICAgIC5tb2Rlcm4tbmF2LXRvZ2dsZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAmLmV4cGFuZGVkIHtcbiAgICAgICAgICAgIHdpZHRoOiAkbWVudS1leHBhbmRlZC13aWR0aDtcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMDA7XG4gICAgICAgICAgICAubW9kZXJuLW5hdi10b2dnbGUge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gZml4ZWQtdG9wIG5hdmJhciB3aGVuIG1lbnUtY29sbGFwc2VkXG4gICAgICAgICYuZml4ZWQtdG9wLFxuICAgICAgICAmLmZsb2F0aW5nLW5hdiB7XG4gICAgICAgICAgbGVmdDogJG1lbnUtY29sbGFwc2VkLXdpZHRoO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBNYWluIG1lbnUgY29sbGFwc2VkXG4gICAgICAubWFpbi1tZW51IHtcbiAgICAgICAgd2lkdGg6ICRtZW51LWNvbGxhcHNlZC13aWR0aDtcblxuICAgICAgICAubmF2YmFyLWhlYWRlciAuYnJhbmQtdGV4dCxcbiAgICAgICAgLm1vZGVybi1uYXYtdG9nZ2xlIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gV2hlbiBtZW51IGlzIGNvbGxhcHNlZCBhbmQgbW91c2UgaXMgbm90IGhvdmVyZWQgb3ZlciBtZW51XG4gICAgICAgICY6bm90KC5leHBhbmRlZCkge1xuICAgICAgICAgIC5uYXZpZ2F0aW9uLWhlYWRlciB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMi4ycmVtO1xuICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZmVhdGhlci1tb3JlLWhvcml6b250YWwge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjI4NXJlbTtcbiAgICAgICAgICAgICAgd2lkdGg6IDE4cHg7XG4gICAgICAgICAgICAgIGhlaWdodDogMThweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLm5hdmlnYXRpb24gbGkge1xuICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM1NjU2NTY7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBXaGVuIG1lbnUgaXMgY29sbGFwc2VkIGJ1dCBtb3VzZSBpcyBob3ZlcmVkIG92ZXIgbWVudVxuICAgICAgICAmLmV4cGFuZGVkIHtcbiAgICAgICAgICB3aWR0aDogJG1lbnUtZXhwYW5kZWQtd2lkdGg7XG4gICAgICAgICAgLm5hdmlnYXRpb24ge1xuICAgICAgICAgICAgPiBsaS5uYXZpZ2F0aW9uLWhlYWRlciB7XG4gICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5mZWF0aGVyLW1vcmUtaG9yaXpvbnRhbCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICBAaW5jbHVkZSB2ZXJ0aWNhbC1tZW51LWhhcy1zdWItYXJyb3coMXJlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC5uYXZiYXItaGVhZGVyIC5icmFuZC10ZXh0IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1vZGVybi1uYXYtdG9nZ2xlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vTmF2aWdhdGlvbiBjb2xsYXBzZWRcbiAgICAgICAgLm5hdmlnYXRpb24ge1xuICAgICAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgICAgICAgID4gbGkubmF2aWdhdGlvbi1oZWFkZXIge1xuICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgID4gbGkge1xuICAgICAgICAgICAgPiBhIHtcbiAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogaW5oZXJpdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vQnJhbmQgY2VudGVyIGNvbnRlbnQgY29sbGFwc2VkXG4gICAgICAuYXBwLWNvbnRlbnQsXG4gICAgICAuZm9vdGVyIHtcbiAgICAgICAgQGluY2x1ZGUgbWFpbi1tZW51LXdpZHRoKCRtZW51LWNvbGxhcHNlZC13aWR0aCk7XG4gICAgICB9XG4gICAgICAuaGVhZGVyLW5hdmJhciB7XG4gICAgICAgIC8vIEZsb2F0aW5nLW5hdmJhclxuICAgICAgICAmLmZsb2F0aW5nLW5hdiB7XG4gICAgICAgICAgd2lkdGg6IGNhbGMoMTAwdncgLSAoMTAwdncgLSAxMDAlKSAtIDQuNHJlbSAtIDc0cHgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIE5hdmJhci1zdGF0aWMtdG9wXG4gICAgICAgICYubmF2YmFyLXN0YXRpYy10b3Age1xuICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gKDEwMHZ3IC0gMTAwJSkgLSA3NHB4KTtcbiAgICAgICAgICBsZWZ0OiA3NHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnRvZ2dsZS1pY29uLFxuICAgIC5jb2xsYXBzZS10b2dnbGUtaWNvbiB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDAuNDI1cmVtO1xuICAgICAgJjpmb2N1cyB7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIEluaXRpYWxseSBtZW51ICYgY29udGVudCB3aWR0aCBmb3IgbGcgYW5kIHVwIHNjcmVlblxuQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChsZykge1xuICAudmVydGljYWwtbGF5b3V0IHtcbiAgICAmLnZlcnRpY2FsLW1lbnUtbW9kZXJuIHtcbiAgICAgIC5tYWluLW1lbnUge1xuICAgICAgICB3aWR0aDogJG1lbnUtZXhwYW5kZWQtd2lkdGg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIEluaXRpYWxseSBtZW51ICYgY29udGVudCB3aWR0aCBmb3IgbWQgYW5kIGRvd24gc2NyZWVuXG5AaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24obGcpIHtcbiAgLnZlcnRpY2FsLWxheW91dCB7XG4gICAgJi52ZXJ0aWNhbC1tZW51LW1vZGVybiB7XG4gICAgICAvLyBub3QgdXNpbmcgdGhpcyBjbGFzcyBpbiBiZWxvdyA8IDk5MlxuICAgICAgLm1haW4tbWVudSB7XG4gICAgICAgIHdpZHRoOiAwO1xuICAgICAgfVxuICAgICAgLm5hdmJhciB7XG4gICAgICAgIC5uYXZiYXItaGVhZGVyIHtcbiAgICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLmNvbnRlbnQsXG4gICAgICAuZm9vdGVyIHtcbiAgICAgICAgQGluY2x1ZGUgbWFpbi1tZW51LXdpZHRoKDApO1xuICAgICAgfVxuICAgICAgJi5tZW51LWNvbGxhcHNlZCB7XG4gICAgICAgIC5hcHAtY29udGVudCxcbiAgICAgICAgLmZvb3RlciB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgIH1cbiAgICAgICAgLm1haW4tbWVudSB7XG4gICAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gSW5pdGlhbGx5IG1lbnUgJiBjb250ZW50IHdpZHRoIGZvciBzbSBhbmQgZG93biBzY3JlZW5cbkBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bihzbSkge1xuICAudmVydGljYWwtbGF5b3V0IHtcbiAgICAmLnZlcnRpY2FsLW1lbnUtbW9kZXJuIHtcbiAgICAgIC8vIG5vdCB1c2luZyB0aGlzIGNsYXNzIDw5OTJcbiAgICAgIC5tYWluLW1lbnUge1xuICAgICAgICB3aWR0aDogMDtcbiAgICAgIH1cbiAgICAgIC5uYXZiYXIge1xuICAgICAgICAubmF2YmFyLWhlYWRlciB7XG4gICAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5jb250ZW50LFxuICAgICAgLmZvb3RlciB7XG4gICAgICAgIEBpbmNsdWRlIG1haW4tbWVudS13aWR0aCgwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQGtleWZyYW1lcyBmYWRlaW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZhZGVvdXQge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG4vLyBJRSBTcGVjaWZpYyBDU1NcbkBtZWRpYSBzY3JlZW4gYW5kICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSwgKC1tcy1oaWdoLWNvbnRyYXN0OiBub25lKSB7XG4gIC52ZXJ0aWNhbC1tZW51LW1vZGVybi52ZXJ0aWNhbC1sYXlvdXQgLm1haW4tbWVudSAubmF2aWdhdGlvbiA+IGxpID4gYSA+IHNwYW4ge1xuICAgIGFuaW1hdGlvbjogbm9uZTtcbiAgfVxufVxuLy8gSW1wb3J0IHZlcnRpY2FsLW92ZXJsYXktbWVudS5zY3NzIGZvciBzbWFsbCBzY3JlZW4gc3VwcG9ydFxuQGltcG9ydCAndmVydGljYWwtb3ZlcmxheS1tZW51LnNjc3MnO1xuIiwiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIEZpbGUgTmFtZTogdmVydGljYWwtbWVudS5zY3NzXG4gICAgRGVzY3JpcHRpb246IEEgY2xhc3NpYyB2ZXJ0aWNhbCBtb2Rlcm4gc3R5bGUgbWVudSB3aXRoIGV4cGFuZCBhbmQgY29sbG9wcyBzdXBwb3J0LiBJdCBzdXBwb3J0XG4gICAgbGlnaHQgJiBkYXJrIHZlcnNpb24sIGZsaXBwZWQgbGF5b3V0LCByaWdodCBzaWRlIGljb25zLCBuYXRpdmUgc2Nyb2xsIGFuZCBib3JkZXJzIG1lbnVcbiAgICBpdGVtIHNlcGFyYXRpb24uXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIEl0ZW0gTmFtZTogVnVleHkgLSBWdWVqcywgUmVhY3QsIEFuZ3VsYXIsIEhUTUwgJiBMYXJhdmVsIEFkbWluIERhc2hib2FyZCBUZW1wbGF0ZVxuICAgIEF1dGhvcjogUElYSU5WRU5UXG4gICAgQXV0aG9yIFVSTDogaHR0cDovL3d3dy50aGVtZWZvcmVzdC5uZXQvdXNlci9waXhpbnZlbnRcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4udmVydGljYWwtbGF5b3V0LnZlcnRpY2FsLW1lbnUtbW9kZXJuIC5tYWluLW1lbnUge1xuICB0cmFuc2l0aW9uOiAwLjRzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpLCBiYWNrZ3JvdW5kIDBzO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG59XG4udmVydGljYWwtbGF5b3V0LnZlcnRpY2FsLW1lbnUtbW9kZXJuIC5tYWluLW1lbnUgLm5hdmlnYXRpb24gbGkgYSB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udmVydGljYWwtbGF5b3V0LnZlcnRpY2FsLW1lbnUtbW9kZXJuIC5tYWluLW1lbnUgLm5hdmlnYXRpb24gPiBsaSA+IGEgc3ZnLFxuLnZlcnRpY2FsLWxheW91dC52ZXJ0aWNhbC1tZW51LW1vZGVybiAubWFpbi1tZW51IC5uYXZpZ2F0aW9uID4gbGkgPiBhIGkge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBmb250LXNpemU6IDEuNDVyZW07XG4gIG1hcmdpbi1yaWdodDogMS4xcmVtO1xuICBmbGV4LXNocmluazogMDtcbn1cbi52ZXJ0aWNhbC1sYXlvdXQudmVydGljYWwtbWVudS1tb2Rlcm4gLm1haW4tbWVudSAubmF2aWdhdGlvbiAubWVudS1jb250ZW50ID4gbGkgPiBhIHN2Zyxcbi52ZXJ0aWNhbC1sYXlvdXQudmVydGljYWwtbWVudS1tb2Rlcm4gLm1haW4tbWVudSAubmF2aWdhdGlvbiAubWVudS1jb250ZW50ID4gbGkgPiBhIGkge1xuICBtYXJnaW4tcmlnaHQ6IDEuNDVyZW07XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgaGVpZ2h0OiAxMXB4O1xuICB3aWR0aDogMTFweDtcbn1cbi52ZXJ0aWNhbC1sYXlvdXQudmVydGljYWwtbWVudS1tb2Rlcm4ubWVudS1leHBhbmRlZCAubWFpbi1tZW51IHtcbiAgd2lkdGg6IDI2MHB4O1xufVxuLnZlcnRpY2FsLWxheW91dC52ZXJ0aWNhbC1tZW51LW1vZGVybi5tZW51LWV4cGFuZGVkIC5tYWluLW1lbnUgLm5hdmlnYXRpb24gLm5hdmlnYXRpb24taGVhZGVyIC5mZWF0aGVyLW1vcmUtaG9yaXpvbnRhbCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4udmVydGljYWwtbGF5b3V0LnZlcnRpY2FsLW1lbnUtbW9kZXJuLm1lbnUtZXhwYW5kZWQgLm1haW4tbWVudSAubmF2aWdhdGlvbiA+IGxpID4gYSA+IGk6YmVmb3JlLFxuLnZlcnRpY2FsLWxheW91dC52ZXJ0aWNhbC1tZW51LW1vZGVybi5tZW51LWV4cGFuZGVkIC5tYWluLW1lbnUgLm5hdmlnYXRpb24gPiBsaSA+IGEgPiBzdmc6YmVmb3JlIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgZm9udC1zaXplOiAxLjQ1cmVtO1xufVxuLnZlcnRpY2FsLWxheW91dC52ZXJ0aWNhbC1tZW51LW1vZGVybi5tZW51LWV4cGFuZGVkIC5tYWluLW1lbnUgLm5hdmlnYXRpb24gbGkuaGFzLXN1YiA+IGE6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9JyUyMzZlNmI3Yicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItY2hldnJvbi1yaWdodCclM0UlM0Nwb2x5bGluZSBwb2ludHM9JzkgMTggMTUgMTIgOSA2JyUzRSUzQy9wb2x5bGluZSUzRSUzQy9zdmclM0VcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiAxLjFyZW07XG4gIGhlaWdodDogMS4xcmVtO1xuICB3aWR0aDogMS4xcmVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIwcHg7XG4gIHRvcDogMTRweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xufVxuLnZlcnRpY2FsLWxheW91dC52ZXJ0aWNhbC1tZW51LW1vZGVybi5tZW51LWV4cGFuZGVkIC5tYWluLW1lbnUgLm5hdmlnYXRpb24gbGkuaGFzLXN1Yi5vcGVuOm5vdCgubWVudS1pdGVtLWNsb3NpbmcpID4gYTphZnRlciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbn1cbi52ZXJ0aWNhbC1sYXlvdXQudmVydGljYWwtbWVudS1tb2Rlcm4ubWVudS1leHBhbmRlZCAuZm9vdGVyIHtcbiAgbWFyZ2luLWxlZnQ6IDI2MHB4O1xufVxuLnZlcnRpY2FsLWxheW91dC52ZXJ0aWNhbC1tZW51LW1vZGVybi5tZW51LWNvbGxhcHNlZCAubmF2YmFyIC5uYXZiYXItaGVhZGVyIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA4MHB4O1xufVxuLnZlcnRpY2FsLWxheW91dC52ZXJ0aWNhbC1tZW51LW1vZGVybi5tZW51LWNvbGxhcHNlZCAubmF2YmFyIC5uYXZiYXItaGVhZGVyIC5tb2Rlcm4tbmF2LXRvZ2dsZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4udmVydGljYWwtbGF5b3V0LnZlcnRpY2FsLW1lbnUtbW9kZXJuLm1lbnUtY29sbGFwc2VkIC5uYXZiYXIgLm5hdmJhci1oZWFkZXIuZXhwYW5kZWQge1xuICB3aWR0aDogMjYwcHg7XG4gIHotaW5kZXg6IDEwMDA7XG59XG4udmVydGljYWwtbGF5b3V0LnZlcnRpY2FsLW1lbnUtbW9kZXJuLm1lbnUtY29sbGFwc2VkIC5uYXZiYXIgLm5hdmJhci1oZWFkZXIuZXhwYW5kZWQgLm1vZGVybi1uYXYtdG9nZ2xlIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4udmVydGljYWwtbGF5b3V0LnZlcnRpY2FsLW1lbnUtbW9kZXJuLm1lbnUtY29sbGFwc2VkIC5uYXZiYXIuZml4ZWQtdG9wLCAudmVydGljYWwtbGF5b3V0LnZlcnRpY2FsLW1lbnUtbW9kZXJuLm1lbnUtY29sbGFwc2VkIC5uYXZiYXIuZmxvYXRpbmctbmF2IHtcbiAgbGVmdDogODBweDtcbn1cbi52ZXJ0aWNhbC1sYXlvdXQudmVydGljYWwtbWVudS1tb2Rlcm4ubWVudS1jb2xsYXBzZWQgLm1haW4tbWVudSB7XG4gIHdpZHRoOiA4MHB4O1xufVxuLnZlcnRpY2FsLWxheW91dC52ZXJ0aWNhbC1tZW51LW1vZGVybi5tZW51LWNvbGxhcHNlZCAubWFpbi1tZW51IC5uYXZiYXItaGVhZGVyIC5icmFuZC10ZXh0LFxuLnZlcnRpY2FsLWxheW91dC52ZXJ0aWNhbC1tZW51LW1vZGVybi5tZW51LWNvbGxhcHNlZCAubWFpbi1tZW51IC5tb2Rlcm4tbmF2LXRvZ2dsZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4udmVydGljYWwtbGF5b3V0LnZlcnRpY2FsLW1lbnUtbW9kZXJuLm1lbnUtY29sbGFwc2VkIC5tYWluLW1lbnU6bm90KC5leHBhbmRlZCkgLm5hdmlnYXRpb24taGVhZGVyIHtcbiAgbWFyZ2luLWxlZnQ6IDIuMnJlbTtcbn1cbi52ZXJ0aWNhbC1sYXlvdXQudmVydGljYWwtbWVudS1tb2Rlcm4ubWVudS1jb2xsYXBzZWQgLm1haW4tbWVudTpub3QoLmV4cGFuZGVkKSAubmF2aWdhdGlvbi1oZWFkZXIgc3BhbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4udmVydGljYWwtbGF5b3V0LnZlcnRpY2FsLW1lbnUtbW9kZXJuLm1lbnUtY29sbGFwc2VkIC5tYWluLW1lbnU6bm90KC5leHBhbmRlZCkgLm5hdmlnYXRpb24taGVhZGVyIC5mZWF0aGVyLW1vcmUtaG9yaXpvbnRhbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEuMjg1cmVtO1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAxOHB4O1xufVxuLnZlcnRpY2FsLWxheW91dC52ZXJ0aWNhbC1tZW51LW1vZGVybi5tZW51LWNvbGxhcHNlZCAubWFpbi1tZW51Om5vdCguZXhwYW5kZWQpIC5uYXZpZ2F0aW9uIGxpOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtICFpbXBvcnRhbnQ7XG59XG4udmVydGljYWwtbGF5b3V0LnZlcnRpY2FsLW1lbnUtbW9kZXJuLm1lbnUtY29sbGFwc2VkIC5tYWluLW1lbnU6bm90KC5leHBhbmRlZCkgLm5hdmlnYXRpb24gbGkuYWN0aXZlIGEge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xuICBib3gtc2hhZG93OiBub25lO1xuICBjb2xvcjogIzU2NTY1Njtcbn1cbi52ZXJ0aWNhbC1sYXlvdXQudmVydGljYWwtbWVudS1tb2Rlcm4ubWVudS1jb2xsYXBzZWQgLm1haW4tbWVudS5leHBhbmRlZCB7XG4gIHdpZHRoOiAyNjBweDtcbn1cbi52ZXJ0aWNhbC1sYXlvdXQudmVydGljYWwtbWVudS1tb2Rlcm4ubWVudS1jb2xsYXBzZWQgLm1haW4tbWVudS5leHBhbmRlZCAubmF2aWdhdGlvbiA+IGxpLm5hdmlnYXRpb24taGVhZGVyIHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi52ZXJ0aWNhbC1sYXlvdXQudmVydGljYWwtbWVudS1tb2Rlcm4ubWVudS1jb2xsYXBzZWQgLm1haW4tbWVudS5leHBhbmRlZCAubmF2aWdhdGlvbiA+IGxpLm5hdmlnYXRpb24taGVhZGVyIC5mZWF0aGVyLW1vcmUtaG9yaXpvbnRhbCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4udmVydGljYWwtbGF5b3V0LnZlcnRpY2FsLW1lbnUtbW9kZXJuLm1lbnUtY29sbGFwc2VkIC5tYWluLW1lbnUuZXhwYW5kZWQgLm5hdmlnYXRpb24gbGkuaGFzLXN1YiA+IGE6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9JyUyMzZlNmI3Yicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItY2hldnJvbi1yaWdodCclM0UlM0Nwb2x5bGluZSBwb2ludHM9JzkgMTggMTUgMTIgOSA2JyUzRSUzQy9wb2x5bGluZSUzRSUzQy9zdmclM0VcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiAxcmVtO1xuICBoZWlnaHQ6IDFyZW07XG4gIHdpZHRoOiAxcmVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIwcHg7XG4gIHRvcDogMTRweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xufVxuLnZlcnRpY2FsLWxheW91dC52ZXJ0aWNhbC1tZW51LW1vZGVybi5tZW51LWNvbGxhcHNlZCAubWFpbi1tZW51LmV4cGFuZGVkIC5uYXZpZ2F0aW9uIGxpLmhhcy1zdWIub3Blbjpub3QoLm1lbnUtaXRlbS1jbG9zaW5nKSA+IGE6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG59XG4udmVydGljYWwtbGF5b3V0LnZlcnRpY2FsLW1lbnUtbW9kZXJuLm1lbnUtY29sbGFwc2VkIC5tYWluLW1lbnUuZXhwYW5kZWQgLm5hdmJhci1oZWFkZXIgLmJyYW5kLXRleHQge1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG4udmVydGljYWwtbGF5b3V0LnZlcnRpY2FsLW1lbnUtbW9kZXJuLm1lbnUtY29sbGFwc2VkIC5tYWluLW1lbnUuZXhwYW5kZWQgLm1vZGVybi1uYXYtdG9nZ2xlIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4udmVydGljYWwtbGF5b3V0LnZlcnRpY2FsLW1lbnUtbW9kZXJuLm1lbnUtY29sbGFwc2VkIC5tYWluLW1lbnUgLm5hdmlnYXRpb24ge1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cbi52ZXJ0aWNhbC1sYXlvdXQudmVydGljYWwtbWVudS1tb2Rlcm4ubWVudS1jb2xsYXBzZWQgLm1haW4tbWVudSAubmF2aWdhdGlvbiA+IGxpLm5hdmlnYXRpb24taGVhZGVyIHNwYW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnZlcnRpY2FsLWxheW91dC52ZXJ0aWNhbC1tZW51LW1vZGVybi5tZW51LWNvbGxhcHNlZCAubWFpbi1tZW51IC5uYXZpZ2F0aW9uID4gbGkgPiBhIHtcbiAgdGV4dC1vdmVyZmxvdzogaW5oZXJpdDtcbn1cbi52ZXJ0aWNhbC1sYXlvdXQudmVydGljYWwtbWVudS1tb2Rlcm4ubWVudS1jb2xsYXBzZWQgLmFwcC1jb250ZW50LFxuLnZlcnRpY2FsLWxheW91dC52ZXJ0aWNhbC1tZW51LW1vZGVybi5tZW51LWNvbGxhcHNlZCAuZm9vdGVyIHtcbiAgbWFyZ2luLWxlZnQ6IDgwcHg7XG59XG4udmVydGljYWwtbGF5b3V0LnZlcnRpY2FsLW1lbnUtbW9kZXJuLm1lbnUtY29sbGFwc2VkIC5oZWFkZXItbmF2YmFyLmZsb2F0aW5nLW5hdiB7XG4gIHdpZHRoOiBjYWxjKDEwMHZ3IC0gKDEwMHZ3IC0gMTAwJSkgLSA0LjRyZW0gLSA3NHB4KTtcbn1cbi52ZXJ0aWNhbC1sYXlvdXQudmVydGljYWwtbWVudS1tb2Rlcm4ubWVudS1jb2xsYXBzZWQgLmhlYWRlci1uYXZiYXIubmF2YmFyLXN0YXRpYy10b3Age1xuICB3aWR0aDogY2FsYygxMDB2dyAtICgxMDB2dyAtIDEwMCUpIC0gNzRweCk7XG4gIGxlZnQ6IDc0cHg7XG59XG4udmVydGljYWwtbGF5b3V0LnZlcnRpY2FsLW1lbnUtbW9kZXJuIC50b2dnbGUtaWNvbixcbi52ZXJ0aWNhbC1sYXlvdXQudmVydGljYWwtbWVudS1tb2Rlcm4gLmNvbGxhcHNlLXRvZ2dsZS1pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiAwLjQyNXJlbTtcbn1cbi52ZXJ0aWNhbC1sYXlvdXQudmVydGljYWwtbWVudS1tb2Rlcm4gLnRvZ2dsZS1pY29uOmZvY3VzLFxuLnZlcnRpY2FsLWxheW91dC52ZXJ0aWNhbC1tZW51LW1vZGVybiAuY29sbGFwc2UtdG9nZ2xlLWljb246Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLnZlcnRpY2FsLWxheW91dC52ZXJ0aWNhbC1tZW51LW1vZGVybiAubWFpbi1tZW51IHtcbiAgICB3aWR0aDogMjYwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMTk5Ljk4cHgpIHtcbiAgLnZlcnRpY2FsLWxheW91dC52ZXJ0aWNhbC1tZW51LW1vZGVybiAubWFpbi1tZW51IHtcbiAgICB3aWR0aDogMDtcbiAgfVxuICAudmVydGljYWwtbGF5b3V0LnZlcnRpY2FsLW1lbnUtbW9kZXJuIC5uYXZiYXIgLm5hdmJhci1oZWFkZXIge1xuICAgIHdpZHRoOiAwO1xuICB9XG4gIC52ZXJ0aWNhbC1sYXlvdXQudmVydGljYWwtbWVudS1tb2Rlcm4gLmNvbnRlbnQsXG4udmVydGljYWwtbGF5b3V0LnZlcnRpY2FsLW1lbnUtbW9kZXJuIC5mb290ZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG4gIC52ZXJ0aWNhbC1sYXlvdXQudmVydGljYWwtbWVudS1tb2Rlcm4ubWVudS1jb2xsYXBzZWQgLmFwcC1jb250ZW50LFxuLnZlcnRpY2FsLWxheW91dC52ZXJ0aWNhbC1tZW51LW1vZGVybi5tZW51LWNvbGxhcHNlZCAuZm9vdGVyIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxuICAudmVydGljYWwtbGF5b3V0LnZlcnRpY2FsLW1lbnUtbW9kZXJuLm1lbnUtY29sbGFwc2VkIC5tYWluLW1lbnUge1xuICAgIHdpZHRoOiAwO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcbiAgLnZlcnRpY2FsLWxheW91dC52ZXJ0aWNhbC1tZW51LW1vZGVybiAubWFpbi1tZW51IHtcbiAgICB3aWR0aDogMDtcbiAgfVxuICAudmVydGljYWwtbGF5b3V0LnZlcnRpY2FsLW1lbnUtbW9kZXJuIC5uYXZiYXIgLm5hdmJhci1oZWFkZXIge1xuICAgIHdpZHRoOiAwO1xuICB9XG4gIC52ZXJ0aWNhbC1sYXlvdXQudmVydGljYWwtbWVudS1tb2Rlcm4gLmNvbnRlbnQsXG4udmVydGljYWwtbGF5b3V0LnZlcnRpY2FsLW1lbnUtbW9kZXJuIC5mb290ZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZhZGVpbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmFkZW91dCB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSwgKC1tcy1oaWdoLWNvbnRyYXN0OiBub25lKSB7XG4gIC52ZXJ0aWNhbC1tZW51LW1vZGVybi52ZXJ0aWNhbC1sYXlvdXQgLm1haW4tbWVudSAubmF2aWdhdGlvbiA+IGxpID4gYSA+IHNwYW4ge1xuICAgIGFuaW1hdGlvbjogbm9uZTtcbiAgfVxufVxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIEZpbGUgTmFtZTogdmVydGljYWwtb3ZlcmxheS1tZW51LnNjc3NcbiAgICBEZXNjcmlwdGlvbjogQSBvdmVybGF5IHN0eWxlIHZlcnRpY2FsIG1lbnUgd2l0aCBzaG93IGFuZCBoaWRlIHN1cHBvcnQuIEl0IHN1cHBvcnRcbiAgICBsaWdodCAmIGRhcmsgdmVyc2lvbiwgZmlscHBlZCBsYXlvdXQsIHJpZ2h0IHNpZGUgaWNvbnMsIG5hdGl2ZSBzY3JvbGwgYW5kIGJvcmRlcnMgbWVudVxuICAgIGl0ZW0gc2VwZXJhdGlvbi5cbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgSXRlbSBOYW1lOiBWdWV4eSAtIFZ1ZWpzLCBSZWFjdCwgQW5ndWxhciwgSFRNTCAmIExhcmF2ZWwgQWRtaW4gRGFzaGJvYXJkIFRlbXBsYXRlXG4gICAgQXV0aG9yOiBQSVhJTlZFTlRcbiAgICBBdXRob3IgVVJMOiBodHRwOi8vd3d3LnRoZW1lZm9yZXN0Lm5ldC91c2VyL3BpeGludmVudFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbi52ZXJ0aWNhbC1vdmVybGF5LW1lbnUgLmNvbnRlbnQge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cbi52ZXJ0aWNhbC1vdmVybGF5LW1lbnUgLm5hdmJhciAubmF2YmFyLWhlYWRlciB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMjYwcHg7XG59XG4udmVydGljYWwtb3ZlcmxheS1tZW51IC5tYWluLW1lbnUsIC52ZXJ0aWNhbC1vdmVybGF5LW1lbnUubWVudS1oaWRlIC5tYWluLW1lbnUge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjI1cywgb3BhY2l0eSAwLjI1cywgdHJhbnNmb3JtIDAuMjVzO1xuICB3aWR0aDogMjYwcHg7XG4gIGxlZnQ6IC0yNjBweDtcbn1cbi52ZXJ0aWNhbC1vdmVybGF5LW1lbnUgLm1haW4tbWVudSAubmF2aWdhdGlvbiA+IGxpID4gYSA+IHN2Zyxcbi52ZXJ0aWNhbC1vdmVybGF5LW1lbnUgLm1haW4tbWVudSAubmF2aWdhdGlvbiA+IGxpID4gYSA+IGkge1xuICBtYXJnaW4tcmlnaHQ6IDE0cHg7XG4gIGZsb2F0OiBsZWZ0O1xuICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlIGFsbDtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbn1cbi52ZXJ0aWNhbC1vdmVybGF5LW1lbnUgLm1haW4tbWVudSAubmF2aWdhdGlvbiA+IGxpID4gYSA+IHN2ZzpiZWZvcmUsXG4udmVydGljYWwtb3ZlcmxheS1tZW51IC5tYWluLW1lbnUgLm5hdmlnYXRpb24gPiBsaSA+IGEgPiBpOmJlZm9yZSB7XG4gIHRyYW5zaXRpb246IDIwMG1zIGVhc2UgYWxsO1xuICBmb250LXNpemU6IDEuNDI5cmVtO1xufVxuLnZlcnRpY2FsLW92ZXJsYXktbWVudSAubWFpbi1tZW51IC5uYXZpZ2F0aW9uIGxpLmhhcy1zdWIgPiBhOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSclMjM2ZTZiN2InIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tcmlnaHQnJTNFJTNDcG9seWxpbmUgcG9pbnRzPSc5IDE4IDE1IDEyIDkgNiclM0UlM0MvcG9seWxpbmUlM0UlM0Mvc3ZnJTNFXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogMXJlbTtcbiAgaGVpZ2h0OiAxcmVtO1xuICB3aWR0aDogMXJlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyMHB4O1xuICB0b3A6IDE0cHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcbn1cbi52ZXJ0aWNhbC1vdmVybGF5LW1lbnUgLm1haW4tbWVudSAubmF2aWdhdGlvbiBsaS5oYXMtc3ViLm9wZW46bm90KC5tZW51LWl0ZW0tY2xvc2luZykgPiBhOmFmdGVyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xufVxuLnZlcnRpY2FsLW92ZXJsYXktbWVudSAubWFpbi1tZW51IC5uYXZpZ2F0aW9uIC5uYXZpZ2F0aW9uLWhlYWRlciAuZmVhdGhlci1tb3JlLWhvcml6b250YWwge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnZlcnRpY2FsLW92ZXJsYXktbWVudS5tZW51LW9wZW4gLm1haW4tbWVudSB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjYwcHgsIDAsIDApO1xuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjI1cywgb3BhY2l0eSAwLjI1cywgdHJhbnNmb3JtIDAuMjVzO1xufVxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIEZpbGUgTmFtZTogdmVydGljYWwtb3ZlcmxheS1tZW51LnNjc3NcbiAgICBEZXNjcmlwdGlvbjogQSBvdmVybGF5IHN0eWxlIHZlcnRpY2FsIG1lbnUgd2l0aCBzaG93IGFuZCBoaWRlIHN1cHBvcnQuIEl0IHN1cHBvcnRcbiAgICBsaWdodCAmIGRhcmsgdmVyc2lvbiwgZmlscHBlZCBsYXlvdXQsIHJpZ2h0IHNpZGUgaWNvbnMsIG5hdGl2ZSBzY3JvbGwgYW5kIGJvcmRlcnMgbWVudVxuICAgIGl0ZW0gc2VwZXJhdGlvbi5cbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgSXRlbSBOYW1lOiBWdWV4eSAtIFZ1ZWpzLCBSZWFjdCwgQW5ndWxhciwgSFRNTCAmIExhcmF2ZWwgQWRtaW4gRGFzaGJvYXJkIFRlbXBsYXRlXG4gICAgQXV0aG9yOiBQSVhJTlZFTlRcbiAgICBBdXRob3IgVVJMOiBodHRwOi8vd3d3LnRoZW1lZm9yZXN0Lm5ldC91c2VyL3BpeGludmVudFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbi52ZXJ0aWNhbC1vdmVybGF5LW1lbnUgLmNvbnRlbnQge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cbi52ZXJ0aWNhbC1vdmVybGF5LW1lbnUgLm5hdmJhciAubmF2YmFyLWhlYWRlciB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMjYwcHg7XG59XG4udmVydGljYWwtb3ZlcmxheS1tZW51IC5tYWluLW1lbnUsIC52ZXJ0aWNhbC1vdmVybGF5LW1lbnUubWVudS1oaWRlIC5tYWluLW1lbnUge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjI1cywgb3BhY2l0eSAwLjI1cywgdHJhbnNmb3JtIDAuMjVzO1xuICB3aWR0aDogMjYwcHg7XG4gIGxlZnQ6IC0yNjBweDtcbn1cbi52ZXJ0aWNhbC1vdmVybGF5LW1lbnUgLm1haW4tbWVudSAubmF2aWdhdGlvbiA+IGxpID4gYSA+IHN2Zyxcbi52ZXJ0aWNhbC1vdmVybGF5LW1lbnUgLm1haW4tbWVudSAubmF2aWdhdGlvbiA+IGxpID4gYSA+IGkge1xuICBtYXJnaW4tcmlnaHQ6IDE0cHg7XG4gIGZsb2F0OiBsZWZ0O1xuICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlIGFsbDtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbn1cbi52ZXJ0aWNhbC1vdmVybGF5LW1lbnUgLm1haW4tbWVudSAubmF2aWdhdGlvbiA+IGxpID4gYSA+IHN2ZzpiZWZvcmUsXG4udmVydGljYWwtb3ZlcmxheS1tZW51IC5tYWluLW1lbnUgLm5hdmlnYXRpb24gPiBsaSA+IGEgPiBpOmJlZm9yZSB7XG4gIHRyYW5zaXRpb246IDIwMG1zIGVhc2UgYWxsO1xuICBmb250LXNpemU6IDEuNDI5cmVtO1xufVxuLnZlcnRpY2FsLW92ZXJsYXktbWVudSAubWFpbi1tZW51IC5uYXZpZ2F0aW9uIGxpLmhhcy1zdWIgPiBhOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSclMjM2ZTZiN2InIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tcmlnaHQnJTNFJTNDcG9seWxpbmUgcG9pbnRzPSc5IDE4IDE1IDEyIDkgNiclM0UlM0MvcG9seWxpbmUlM0UlM0Mvc3ZnJTNFXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogMXJlbTtcbiAgaGVpZ2h0OiAxcmVtO1xuICB3aWR0aDogMXJlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyMHB4O1xuICB0b3A6IDE0cHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcbn1cbi52ZXJ0aWNhbC1vdmVybGF5LW1lbnUgLm1haW4tbWVudSAubmF2aWdhdGlvbiBsaS5oYXMtc3ViLm9wZW46bm90KC5tZW51LWl0ZW0tY2xvc2luZykgPiBhOmFmdGVyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xufVxuLnZlcnRpY2FsLW92ZXJsYXktbWVudSAubWFpbi1tZW51IC5uYXZpZ2F0aW9uIC5uYXZpZ2F0aW9uLWhlYWRlciAuZmVhdGhlci1tb3JlLWhvcml6b250YWwge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnZlcnRpY2FsLW92ZXJsYXktbWVudS5tZW51LW9wZW4gLm1haW4tbWVudSB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjYwcHgsIDAsIDApO1xuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjI1cywgb3BhY2l0eSAwLjI1cywgdHJhbnNmb3JtIDAuMjVzO1xufSIsIi8vICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vICBGaWxlIE5hbWU6IHZhcmlhYmxlcy5zY3NzXG4vLyAgRGVzY3JpcHRpb246IEN1c3RvbSBjb21wb25lbnQgdmFyaWFibGVcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAgSXRlbSBOYW1lOiBWdWV4eSAtIFZ1ZWpzLCBSZWFjdCwgQW5ndWxhciwgSFRNTCAmIExhcmF2ZWwgQWRtaW4gRGFzaGJvYXJkIFRlbXBsYXRlXG4vLyAgQXV0aG9yOiBQSVhJTlZFTlRcbi8vICBBdXRob3IgVVJMOiBodHRwOi8vd3d3LnRoZW1lZm9yZXN0Lm5ldC91c2VyL3BpeGludmVudFxuLy8gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLyAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyAgV0FSTklORzogUExFQVNFIERPIE5PVCBDSEFOR0UgVEhJUyBWQVJJQUJMRSBGSUxFLlxuLy8gIFRISVMgRklMRSBXSUxMIEdFVCBPVkVSV1JJVFRFTiBXSVRIIEVBQ0ggVlVFWFkgSFRNTCBURU1QTEFURSBSRUxFQVNFLlxuLy8gIFRJUDpcbi8vICBXZSBzdWdnZXN0IHlvdSB0byB1c2UgdGhpcyAoYXNzZXRzL3Njc3MvdmFyaWFibGVzL192YXJpYWJsZXMtY29tcG9uZW50cy5zY3NzKSBmaWxlIGZvciBvdmVycmlkaW5nIGNvbXBvbmVudHMgdmFyaWFibGVzLlxuLy8gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4kYmFzZS1mb250LXNpemU6IDE0cHggIWRlZmF1bHQ7XG4kYm9keS1kaXJlY3Rpb246IGx0ciAhZGVmYXVsdDsgLy8gRGVmYXVsdCBsdHIsIGNoYW5nZSBpdCB0byBydGwgZm9yIFJpZ2h0IFRvIExlZnQgc3VwcG9ydC5cbiRjb250ZW50LXBhZGRpbmc6IDJyZW0gIWRlZmF1bHQ7XG5cbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vICAgIENvbG9yc1xuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuJG5hdi1jb21wb25lbnQtYm9yZGVyLWNvbG9yOiAjZGRkICFkZWZhdWx0O1xuXG4kc3dpcGVyLWJnOiAjZjJmNGY0ICFkZWZhdWx0O1xuXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAgICBOYXZiYXJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiRuYXZiYXItaGVpZ2h0OiA0LjQ1cmVtICFkZWZhdWx0O1xuJGhvcml6b250YWwtbWVudS1oZWlnaHQ6IDQuNDVyZW0gIWRlZmF1bHQ7XG4kZm9vdGVyLWhlaWdodDogMy4zNXJlbSAhZGVmYXVsdDtcblxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gICAgTWFpbiBNZW51XG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vbWFpbiBtZW51IGRhcmtcbiRtZW51LWRhcmstY29sb3I6ICNkY2RjZGMgIWRlZmF1bHQ7XG4kbWVudS1kYXJrLWJnLWNvbG9yOiAjMTAxNjNhICFkZWZhdWx0O1xuXG4kbWVudS1wYWRkaW5nOiAxMHB4IDE1cHggMTBweCAxNXB4ICFkZWZhdWx0O1xuJG1lbnUtc2Vjb25kLWxldmVsLXBhZGRpbmc6IDEwcHggMTVweCAxMHB4IDIwcHggIWRlZmF1bHQ7XG4kbWVudS10aGlyZC1sZXZlbC1wYWRkaW5nOiAxMHB4IDE1cHggMTBweCA1M3B4ICFkZWZhdWx0O1xuJG1lbnUtZm9ydGgtbGV2ZWwtcGFkZGluZzogMTBweCAxNXB4IDEwcHggNTNweCAhZGVmYXVsdDtcblxuLy8gdmVydGljYWwgbWVudVxuJG1lbnUtZXhwYW5kZWQtd2lkdGg6IDI2MHB4ICFkZWZhdWx0O1xuJG1lbnUtY29sbGFwc2VkLXdpZHRoOiA4MHB4ICFkZWZhdWx0O1xuXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAgICBTaWRlYmFyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuJHNpZGViYXItd2lkdGg6IDI2MHB4ICFkZWZhdWx0O1xuJGNoYXQtc2lkZWJhci13aWR0aDogMzYwcHggIWRlZmF1bHQ7XG5cbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAgICBBdmF0YXJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiRhdmF0YXItc2l6ZTogMzJweCAhZGVmYXVsdDtcbiRhdmF0YXItc3RhdHVzLXNpemU6IDExcHggIWRlZmF1bHQ7XG4kYXZhdGFyLXN0YXR1cy1zaXplLWxnOiAxN3B4ICFkZWZhdWx0O1xuXG4kYXZhdGFyLXNpemUteGw6IDcwcHggIWRlZmF1bHQ7XG4kYXZhdGFyLXNpemUtbGc6IDUwcHggIWRlZmF1bHQ7XG4kYXZhdGFyLXNpemUtc206IDI0cHggIWRlZmF1bHQ7XG5cbiRhdmF0YXItYmc6ICNjM2MzYzM7XG4kYXZhdGFyLWdyb3VwLWJvcmRlcjogJHdoaXRlO1xuXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gIFByb2dyZXNzXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuJHByb2dyZXNzLXNpemUteGw6IDEuMTRyZW0gIWRlZmF1bHQ7XG4kcHJvZ3Jlc3Mtc2l6ZS1sZzogMC44NTdyZW0gIWRlZmF1bHQ7XG4kcHJvZ3Jlc3Mtc2l6ZS1tZDogMC41N3JlbSAhZGVmYXVsdDtcbiRwcm9ncmVzcy1zaXplLXNtOiAwLjE0M3JlbSAhZGVmYXVsdDtcblxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vICBGb3JtXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyAkaW5wdXQtaGVpZ2h0LCAkaW5wdXQtaGVpZ2h0LWxnLCAkaW5wdXQtaGVpZ2h0LXNtIGFyZSBpbiB2YXJpYWJsZXNcbiRmb250LXNpemUteHM6IDAuNzVyZW0gIWRlZmF1bHQ7XG4kZm9udC1zaXplLXhsOiAoJGZvbnQtc2l6ZS1iYXNlICsgMC41KSAhZGVmYXVsdDtcbiRsaW5lLWhlaWdodC14bDogMS43ICFkZWZhdWx0O1xuJGxpbmUtaGVpZ2h0LXhzOiAxLjUgIWRlZmF1bHQ7XG4kaW5wdXQtcGFkZGluZy15LXhsOiAwLjVyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtcGFkZGluZy14LXhsOiAwLjVyZW0gIWRlZmF1bHQ7XG5cbiRpbnB1dC1wYWRkaW5nLXkteHM6IDAuMnJlbSAhZGVmYXVsdDtcbiRpbnB1dC1wYWRkaW5nLXgteHM6IDAuMjc1cmVtICFkZWZhdWx0O1xuXG4kYm9yZGVyLXJhZGl1cy14bDogMC4zNXJlbSAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLXhzOiAwLjEycmVtICFkZWZhdWx0O1xuJGlucHV0LWJvcmRlci1yYWRpdXMteGw6ICRib3JkZXItcmFkaXVzLXhsICFkZWZhdWx0O1xuJGlucHV0LWJvcmRlci1yYWRpdXMteHM6ICRib3JkZXItcmFkaXVzLXhzICFkZWZhdWx0O1xuXG4kaW5wdXQtaGVpZ2h0LXhsOiAoKCRmb250LXNpemUteGwgKiAkbGluZS1oZWlnaHQteGwpICsgKCRpbnB1dC1wYWRkaW5nLXkteGwgKiAyKSkgIWRlZmF1bHQ7XG4kaW5wdXQtaGVpZ2h0LXhzOiAoKCRmb250LXNpemUteHMgKiAkbGluZS1oZWlnaHQteHMpICsgKCRpbnB1dC1wYWRkaW5nLXkteHMgKiAyKSkgIWRlZmF1bHQ7XG4kaW5wdXQtaGVpZ2h0LXNtOiAoKCRmb250LXNpemUtc20gKiAkbGluZS1oZWlnaHQtc20pICsgKCRpbnB1dC1wYWRkaW5nLXktc20gKiAyKSkgIWRlZmF1bHQ7XG5cbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAgQmxhbmsgUGFnZSBCZyBDb2xvclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuJGJsYW5rLWJnLWNvbG9yOiAjZWZmMmY3ICFkZWZhdWx0O1xuXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gIERhdGEgVGFibGVzIEJnIENvbG9yXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4kZGF0YXRhYmxlLWJnLWNvbG9yOiAjZjhmOGY4ICFkZWZhdWx0O1xuXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gIFN3aXRjaFxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiRzd2l0Y2gtYmctY29sb3I6ICNlMmUyZTIgIWRlZmF1bHQ7XG4kc3dpdGNoLWluZGljYXRvci1jb2xvcjogJHdoaXRlICFkZWZhdWx0O1xuXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gIFRpbWVsaW5lXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuJHRpbWVsaW5lLWJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcblxuJHRpbWVsaW5lLXBvaW50LXNpemU6IDEuNzVyZW0gIWRlZmF1bHQ7XG4kdGltZWxpbmUtcG9pbnQtaW5kaWNhdG9yLXNpemU6IDEycHggIWRlZmF1bHQ7XG4kdGltZWxpbmUtcG9pbnQtaW5kaWNhdG9yLWNvbG9yOiAkcHJpbWFyeSAhZGVmYXVsdDtcbiR0aW1lbGluZS1wb2ludC1pbmRpY2F0b3Itd3JhcHBlci1zaXplOiAyMHB4ICFkZWZhdWx0O1xuXG4kdGltZWxpbmUtaXRlbS1taW4taGVpZ2h0OiA0cmVtICFkZWZhdWx0O1xuJHRpbWVsaW5lLWl0ZW0taWNvbi1mb250LXNpemU6IDAuODVyZW0gIWRlZmF1bHQ7XG5cbiR0aW1lbGluZS1ldmVudC10aW1lLXNpemU6IDAuODVyZW0gIWRlZmF1bHQ7XG4kdGltZWxpbmUtZXZlbnQtdGltZS1jb2xvcjogJHRleHQtbXV0ZWQgIWRlZmF1bHQ7XG4iLCIvLyAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEZpbGUgTmFtZTogbWFpbi1tZW51LW1peGluLnNjc3Ncbi8vIERlc2NyaXB0aW9uOiBDb21tb24gbWl4aW4gZm9yIG1lbnVzLCBjb250YWluIGRhcmsgYW5kIGxpZ2h0IHZlcnNpb24gc2Nzcy5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEl0ZW0gTmFtZTogVnVleHkgLSBWdWVqcywgUmVhY3QsIEFuZ3VsYXIsIEhUTUwgJiBMYXJhdmVsIEFkbWluIERhc2hib2FyZCBUZW1wbGF0ZVxuLy8gQXV0aG9yOiBQSVhJTlZFTlRcbi8vIEF1dGhvciBVUkw6IGh0dHA6Ly93d3cudGhlbWVmb3Jlc3QubmV0L3VzZXIvcGl4aW52ZW50XG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLyBIZWFkZXIgbmF2YmFyIGNvbnRlbnQgYW5kIGJyYW5kIGV4cGFuZGVkICYgY29sbGFwc2VkIHN0YXRzXG4vLyBzcGFjaW5nIGFuZCBzaXppbmcuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy8gTWl4aW5zIGZvciB0aGUgbWVudSBhbmQgbmF2YmFyIHBvc2l0aW9uLCBtYXJnaW4gYW5kIHdpZHRoIGNoYW5nZVxuQG1peGluIG1haW4tbWVudS13aWR0aCgkbWVudS13aWR0aCkge1xuICBtYXJnaW4tbGVmdDogJG1lbnUtd2lkdGg7XG59XG5AbWl4aW4gbWVudS1uYXZiYXItd2lkdGgoJG1lbnUtd2lkdGgpIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAkbWVudS13aWR0aDtcbn1cbi8vIE1peGlucyBmb3IgdGhlIG1lbnUgc2hvdyBoaWRlIGJhc2VkIG9uIHdpZHRoXG5AbWl4aW4gdmVydGljYWwtbWVudS10cmFuc2Zvcm0tc2hvdygkdHJhbnNmb3JtLXdpZHRoKSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoJHRyYW5zZm9ybS13aWR0aCwgMCwgMCk7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgcGVyc3BlY3RpdmU6IDEwMDA7XG59XG5AbWl4aW4gdmVydGljYWwtbWVudS10cmFuc2Zvcm0taGlkZSgpIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbn1cblxuLy8gTWl4aW5zIGZvciB0aGUgc3ViIG1lbnUgYXJyb3dcbkBtaXhpbiB2ZXJ0aWNhbC1tZW51LWhhcy1zdWItYXJyb3coJGFycm93LWZvbnQtc2l6ZSkge1xuICAmLmhhcy1zdWIge1xuICAgID4gYTphZnRlciB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChzdHItcmVwbGFjZShzdHItcmVwbGFjZSgkY2hldnJvbi1yaWdodCwgJ2N1cnJlbnRDb2xvcicsICRib2R5LWNvbG9yKSwgJyMnLCAnJTIzJykpO1xuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogJGFycm93LWZvbnQtc2l6ZTtcbiAgICAgIGhlaWdodDogJGFycm93LWZvbnQtc2l6ZTtcbiAgICAgIHdpZHRoOiAkYXJyb3ctZm9udC1zaXplO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgcmlnaHQ6IDIwcHg7XG4gICAgICB0b3A6IDE0cHg7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xuICAgIH1cbiAgICAmLm9wZW46bm90KC5tZW51LWl0ZW0tY2xvc2luZykge1xuICAgICAgPiBhOmFmdGVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLy8gVXNlZCBmb3IgYXBwc1xuQG1peGluIGNvbnRlbnQtYXJlYS13cmFwcGVyLWhlaWdodChcbiAgJGNvbnRlbnRQYWRkaW5nOiAwcmVtLFxuICAkbmF2YmFySGVpZ2h0OiAwcmVtLFxuICAkZm9vdGVySGVpZ2h0OiAwcmVtLFxuICAkZmxvYXRpbmdOYXZNYXJnaW46IDByZW0sXG4gICRob3Jpem9udGFsTWVudUhlaWdodDogMHJlbSxcbiAgJHNwYWNpbmdTaWRlczogMSxcbiAgJGhvcml6b250YWxMYXlvdXQ6IGZhbHNlXG4pIHtcbiAgaGVpZ2h0OiBjYWxjKFxuICAgIDEwMHZoIC1cbiAgICAgIGNhbGMoXG4gICAgICAgIGNhbGMoI3skY29udGVudFBhZGRpbmd9ICogI3skc3BhY2luZ1NpZGVzfSkgKyAjeyRuYXZiYXJIZWlnaHR9ICsgI3skZm9vdGVySGVpZ2h0fSArICN7JGZsb2F0aW5nTmF2TWFyZ2lufSArICN7JGhvcml6b250YWxNZW51SGVpZ2h0fVxuICAgICAgKVxuICApO1xuICBoZWlnaHQ6IGNhbGMoXG4gICAgdmFyKC0tdmgsIDF2aCkgKiAxMDAgLVxuICAgICAgY2FsYyhcbiAgICAgICAgY2FsYygjeyRjb250ZW50UGFkZGluZ30gKiAjeyRzcGFjaW5nU2lkZXN9KSArICN7JG5hdmJhckhlaWdodH0gKyAjeyRmb290ZXJIZWlnaHR9ICsgI3skZmxvYXRpbmdOYXZNYXJnaW59ICsgI3skaG9yaXpvbnRhbE1lbnVIZWlnaHR9XG4gICAgICApXG4gICk7XG4gIC8vIHJlc3BvbnNpdmUgc2l6ZSBoZWlnaHRcbiAgQGlmICRob3Jpem9udGFsTGF5b3V0IHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24obGcpIHtcbiAgICAgIGhlaWdodDogY2FsYyhcbiAgICAgICAgMTAwdmggLSBjYWxjKGNhbGMoY2FsYygjeyRjb250ZW50UGFkZGluZ30gLSAwLjhyZW0pICogI3skc3BhY2luZ1NpZGVzfSkgKyAjeyRuYXZiYXJIZWlnaHR9ICsgI3skZm9vdGVySGVpZ2h0fSlcbiAgICAgICk7XG4gICAgICBoZWlnaHQ6IGNhbGMoXG4gICAgICAgIHZhcigtLXZoLCAxdmgpICogMTAwIC1cbiAgICAgICAgICBjYWxjKGNhbGMoY2FsYygjeyRjb250ZW50UGFkZGluZ30gLSAwLjhyZW0pICogI3skc3BhY2luZ1NpZGVzfSkgKyAjeyRuYXZiYXJIZWlnaHR9ICsgI3skZm9vdGVySGVpZ2h0fSlcbiAgICAgICk7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oeHMpIHtcbiAgICAgIGhlaWdodDogY2FsYyhcbiAgICAgICAgMTAwdmggLVxuICAgICAgICAgIGNhbGMoXG4gICAgICAgICAgICBjYWxjKGNhbGMoI3skY29udGVudFBhZGRpbmd9ICogI3skc3BhY2luZ1NpZGVzfSkgLSBjYWxjKDAuOHJlbSAqICN7JHNwYWNpbmdTaWRlc30pKSArICN7JG5hdmJhckhlaWdodH0gKyAjeyRmb290ZXJIZWlnaHR9ICtcbiAgICAgICAgICAgICAgI3skZmxvYXRpbmdOYXZNYXJnaW59ICsgI3skaG9yaXpvbnRhbE1lbnVIZWlnaHR9XG4gICAgICAgICAgKVxuICAgICAgKTtcbiAgICAgIGhlaWdodDogY2FsYyhcbiAgICAgICAgdmFyKC0tdmgsIDF2aCkgKiAxMDAgLVxuICAgICAgICAgIGNhbGMoXG4gICAgICAgICAgICBjYWxjKGNhbGMoI3skY29udGVudFBhZGRpbmd9ICogI3skc3BhY2luZ1NpZGVzfSkgLSBjYWxjKDAuOHJlbSAqICN7JHNwYWNpbmdTaWRlc30pKSArICN7JG5hdmJhckhlaWdodH0gKyAjeyRmb290ZXJIZWlnaHR9ICtcbiAgICAgICAgICAgICAgI3skZmxvYXRpbmdOYXZNYXJnaW59ICsgI3skaG9yaXpvbnRhbE1lbnVIZWlnaHR9XG4gICAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gTGlnaHQgJiBEYXJrIG1lbnUgbWl4aW5cbi8vICR0aGVtZS1jb2xvciA6IE1lbnUgdGV4dCBjb2xvclxuLy8gJHRoZW1lLWJnICAgIDogTWVudSBiYWNrZ3JvdW5kIGNvbG9yXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkBtaXhpbiBtZW51LXRoZW1lKCR0aGVtZS1jb2xvciwgJHRoZW1lLWJnKSB7XG4gICRtYWluLW1lbnUtdG9wLW9wZW4tY29sb3I6IGRhcmtlbigkdGhlbWUtY29sb3IsIDEwJSk7XG4gICRtYWluLW1lbnUtdG9wLW9wZW4taG92ZXItYmc6IGRhcmtlbigkdGhlbWUtYmcsIDYlKTtcbiAgJG1haW4tbWVudS10b3Atb3Blbi1oZWFkLWJnOiBkYXJrZW4oJHRoZW1lLWJnLCA0JSk7XG5cbiAgJG1haW4tbWVudS10b3AtYWN0aXZlLWhlYWQtYmc6IGRhcmtlbigkdGhlbWUtYmcsIDQlKTsgLy8kcHJpbWFyeVxuXG4gICRtYWluLW1lbnUtc3ViLWNvbG9yOiAkdGhlbWUtY29sb3I7XG4gICRtYWluLW1lbnUtc3ViLWhvdmVyLWNvbG9yOiBsaWdodGVuKCR0aGVtZS1jb2xvciwgNCUpO1xuXG4gICRtYWluLW1lbnUtc3ViLW9wZW4tY29sb3I6ICR0aGVtZS1jb2xvcjtcblxuICBjb2xvcjogJHRoZW1lLWNvbG9yO1xuICBiYWNrZ3JvdW5kOiAkdGhlbWUtYmc7XG5cbiAgLm5hdmlnYXRpb24ge1xuICAgIGJhY2tncm91bmQ6ICR0aGVtZS1iZztcbiAgICAubmF2aWdhdGlvbi1oZWFkZXIge1xuICAgICAgY29sb3I6IGxpZ2h0ZW4oJHRoZW1lLWNvbG9yLCAyMS41JSk7XG4gICAgICBtYXJnaW46IGNhbGMoI3skY29udGVudC1wYWRkaW5nfSArIDAuMjg2cmVtKSAwIDAuOHJlbSAoJGNvbnRlbnQtcGFkZGluZyArIDAuMnJlbSk7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAxcmVtO1xuICAgICAgc3BhbiB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICB9XG4gICAgfVxuICAgIGxpIHtcbiAgICAgICYuaGFzLXN1YiB7XG4gICAgICAgID4gYSB7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZSwgYmFja2dyb3VuZCAwcywgY29sb3IgMHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGEge1xuICAgICAgICBjb2xvcjogZGFya2VuKCR0aGVtZS1jb2xvciwgNC45JSk7XG4gICAgICAgIHBhZGRpbmc6ICRtZW51LXBhZGRpbmc7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ1O1xuXG4gICAgICAgIHNwYW4ubWVudS1zdWItdGl0bGUge1xuICAgICAgICAgIGNvbG9yOiBsaWdodGVuKCR0aGVtZS1jb2xvciwgMzAlKTtcbiAgICAgICAgfVxuXG4gICAgICAgICYgPiAqIHtcbiAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yNXMgZWFzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE1lbnUgSXRlbSBIb3ZlciBBbmltYXRpb25cbiAgICBsaS5uYXYtaXRlbSB7XG4gICAgICBhOmhvdmVyID4gKiB7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjI1cyBlYXNlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KTtcbiAgICAgIH1cbiAgICAgIHVsLm1lbnUtY29udGVudCB7XG4gICAgICAgIGxpIHtcbiAgICAgICAgICBhOmhvdmVyID4gKiB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yNXMgZWFzZTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgID4gbGkge1xuICAgICAgPiBhIHtcbiAgICAgICAgbWFyZ2luOiAwIDE1cHg7XG4gICAgICAgIC5sYWJlbCB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICB9XG4gICAgICAgIGksXG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHRvcDogMXB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICA+IHVsIGxpIHtcbiAgICAgICAgJjpmaXJzdC1vZi10eXBlIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA3cHggIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6bm90KC5oYXMtc3ViKSB7XG4gICAgICAgICAgbWFyZ2luOiAwIDE1cHg7XG4gICAgICAgIH1cbiAgICAgICAgJi5oYXMtc3ViIHtcbiAgICAgICAgICA+IGEge1xuICAgICAgICAgICAgbWFyZ2luOiAwIDE1cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgPiB1bCA+IGxpIHtcbiAgICAgICAgICAgIG1hcmdpbjogMCAxNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgJi5vcGVuOm5vdCgubWVudS1pdGVtLWNsb3NpbmcpLFxuICAgICAgJi5zaWRlYmFyLWdyb3VwLWFjdGl2ZSB7XG4gICAgICAgID4gYSB7XG4gICAgICAgICAgY29sb3I6ICRtYWluLW1lbnUtdG9wLW9wZW4tY29sb3I7XG4gICAgICAgICAgYmFja2dyb3VuZDogJG1haW4tbWVudS10b3Atb3Blbi1oZWFkLWJnO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmOm5vdCgub3Blbikge1xuICAgICAgICA+IHVsIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIC5hY3RpdmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgJi5hY3RpdmUge1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICA+IGEge1xuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMThkZWcsIHJnYmEoJHByaW1hcnksIDEpLCByZ2JhKCRwcmltYXJ5LCAwLjcpKTtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCAxcHggcmdiYSgkcHJpbWFyeSwgMC43KTtcbiAgICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5hY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kOiAkbWFpbi1tZW51LXRvcC1vcGVuLWhvdmVyLWJnO1xuXG4gICAgICAgID4gYSB7XG4gICAgICAgICAgY29sb3I6ICRwcmltYXJ5O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIH1cblxuICAgICAgICAuaG92ZXIsXG4gICAgICAgIDpob3ZlciB7XG4gICAgICAgICAgPiBhIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICRtYWluLW1lbnUtdG9wLWFjdGl2ZS1oZWFkLWJnO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB1bCB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcblxuICAgICAgICBsaSB7XG4gICAgICAgICAgY29sb3I6ICRtYWluLW1lbnUtc3ViLWNvbG9yO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgID4gYSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAkbWVudS1zZWNvbmQtbGV2ZWwtcGFkZGluZztcbiAgICAgICAgICB9XG4gICAgICAgICAgdWwge1xuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6ICRtZW51LXRoaXJkLWxldmVsLXBhZGRpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5oYXMtc3ViIHtcbiAgICAgICAgICAmOm5vdCgub3Blbikge1xuICAgICAgICAgICAgPiB1bCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgIC5hY3RpdmUge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLm9wZW4sXG4gICAgICAgIC5zaWRlYmFyLWdyb3VwLWFjdGl2ZSB7XG4gICAgICAgICAgPiBhIHtcbiAgICAgICAgICAgIGNvbG9yOiAkbWFpbi1tZW51LXN1Yi1vcGVuLWNvbG9yO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJG1haW4tbWVudS10b3AtYWN0aXZlLWhlYWQtYmc7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vZm9yIDJyZCBsZXZlbCBtZW51XG4gICAgICAgICAgPiB1bCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIC8vZm9yIDNyZCBsZXZlbCBtZW51XG4gICAgICAgICAgICAub3BlbiB7XG4gICAgICAgICAgICAgID4gdWwge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmhvdmVyLFxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICA+IGEge1xuICAgICAgICAgICAgY29sb3I6ICRtYWluLW1lbnUtc3ViLWhvdmVyLWNvbG9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5hY3RpdmUge1xuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMThkZWcsIHJnYmEoJHByaW1hcnksIDEpLCByZ2JhKCRwcmltYXJ5LCAwLjcpKTtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCAxcHggcmdiYSgkcHJpbWFyeSwgMC43KTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICA+IGEge1xuICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8vIE1lbnUgY29udGVudCBkaXNwbGF5IG1peGluXG4vLyAkbWVudS1leHBhbmRlZC13aWR0aCA6IEV4cGFuZGVkIG1lbnUgd2lkdGhcbi8vICRtZW51LWNvbGxhcHNlZC13aWR0aDogQ29sbGFwc2VkIG1lbnUgd2lkdGhcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQG1peGluIG1lbnUtY29udGVudCgkbWVudS1leHBhbmRlZC13aWR0aCwgJG1lbnUtY29sbGFwc2VkLXdpZHRoLCAkdGhlbWUtY29sb3IsICR0aGVtZS1iZykge1xuICAubWFpbi1tZW51LWNvbnRlbnQge1xuICAgID4gc3Bhbi5tZW51LXRpdGxlLFxuICAgIGEubWVudS10aXRsZSB7XG4gICAgICByaWdodDogLSgkbWVudS1leHBhbmRlZC13aWR0aCk7XG4gICAgICB3aWR0aDogJG1lbnUtZXhwYW5kZWQtd2lkdGg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5O1xuICAgICAgYm9yZGVyLWNvbG9yOiAkcHJpbWFyeTtcbiAgICAgIHBhZGRpbmc6IDEzcHggMjBweDtcbiAgICB9XG4gICAgPiB1bC5tZW51LWNvbnRlbnQge1xuICAgICAgbGVmdDogJG1lbnUtY29sbGFwc2VkLXdpZHRoO1xuICAgICAgd2lkdGg6ICRtZW51LWV4cGFuZGVkLXdpZHRoO1xuICAgICAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwLjI1cywgb3BhY2l0eSAwLjI1cztcbiAgICAgIGJveC1zaGFkb3c6IDFweCAwcHggMnB4IHJnYmEoJGJsYWNrLCAwLjEpO1xuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYmEoJGJsYWNrLCAwLjIpO1xuICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKCRibGFjaywgMC4wMik7XG5cbiAgICAgIGxpIHtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgIGEge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHBhZGRpbmc6IDhweCAyMHB4IDhweCAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgQGluY2x1ZGUgdmVydGljYWwtbWVudS1oYXMtc3ViLWFycm93KDFyZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLy8gQnJlYWtwb2ludCB2aWV3cG9ydCBzaXplcyBhbmQgbWVkaWEgcXVlcmllcy5cbi8vXG4vLyBCcmVha3BvaW50cyBhcmUgZGVmaW5lZCBhcyBhIG1hcCBvZiAobmFtZTogbWluaW11bSB3aWR0aCksIG9yZGVyIGZyb20gc21hbGwgdG8gbGFyZ2U6XG4vL1xuLy8gICAgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KVxuLy9cbi8vIFRoZSBtYXAgZGVmaW5lZCBpbiB0aGUgYCRncmlkLWJyZWFrcG9pbnRzYCBnbG9iYWwgdmFyaWFibGUgaXMgdXNlZCBhcyB0aGUgYCRicmVha3BvaW50c2AgYXJndW1lbnQgYnkgZGVmYXVsdC5cblxuLy8gTmFtZSBvZiB0aGUgbmV4dCBicmVha3BvaW50LCBvciBudWxsIGZvciB0aGUgbGFzdCBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAkYnJlYWtwb2ludC1uYW1lczogKHhzIHNtIG1kIGxnIHhsKSlcbi8vICAgIG1kXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludC1uYW1lczogbWFwLWtleXMoJGJyZWFrcG9pbnRzKSkge1xuICAkbjogaW5kZXgoJGJyZWFrcG9pbnQtbmFtZXMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbiAhPSBudWxsIGFuZCAkbiA8IGxlbmd0aCgkYnJlYWtwb2ludC1uYW1lcyksIG50aCgkYnJlYWtwb2ludC1uYW1lcywgJG4gKyAxKSwgbnVsbCk7XG59XG5cbi8vIE1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIHNtYWxsZXN0IChmaXJzdCkgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1pbihzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDU3NnB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbWluICE9IDAsICRtaW4sIG51bGwpO1xufVxuXG4vLyBNYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBsYXJnZXN0IChsYXN0KSBicmVha3BvaW50LlxuLy8gVGhlIG1heGltdW0gdmFsdWUgaXMgY2FsY3VsYXRlZCBhcyB0aGUgbWluaW11bSBvZiB0aGUgbmV4dCBvbmUgbGVzcyAwLjAycHhcbi8vIHRvIHdvcmsgYXJvdW5kIHRoZSBsaW1pdGF0aW9ucyBvZiBgbWluLWAgYW5kIGBtYXgtYCBwcmVmaXhlcyBhbmQgdmlld3BvcnRzIHdpdGggZnJhY3Rpb25hbCB3aWR0aHMuXG4vLyBTZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL21lZGlhcXVlcmllcy00LyNtcS1taW4tbWF4XG4vLyBVc2VzIDAuMDJweCByYXRoZXIgdGhhbiAwLjAxcHggdG8gd29yayBhcm91bmQgYSBjdXJyZW50IHJvdW5kaW5nIGJ1ZyBpbiBTYWZhcmkuXG4vLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE3ODI2MVxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWF4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNzY3Ljk4cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbmV4dDogYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAcmV0dXJuIGlmKCRuZXh0LCBicmVha3BvaW50LW1pbigkbmV4dCwgJGJyZWFrcG9pbnRzKSAtIC4wMiwgbnVsbCk7XG59XG5cbi8vIFJldHVybnMgYSBibGFuayBzdHJpbmcgaWYgc21hbGxlc3QgYnJlYWtwb2ludCwgb3RoZXJ3aXNlIHJldHVybnMgdGhlIG5hbWUgd2l0aCBhIGRhc2ggaW4gZnJvbnQuXG4vLyBVc2VmdWwgZm9yIG1ha2luZyByZXNwb25zaXZlIHV0aWxpdGllcy5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHhzLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCJcIiAgKFJldHVybnMgYSBibGFuayBzdHJpbmcpXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCItc21cIlxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtaW5maXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgQHJldHVybiBpZihicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKSA9PSBudWxsLCBcIlwiLCBcIi0jeyRuYW1lfVwiKTtcbn1cblxuLy8gTWVkaWEgb2YgYXQgbGVhc3QgdGhlIG1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCB3aWRlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1pbiB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgb2YgYXQgbW9zdCB0aGUgbWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIGxhcmdlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1heCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgdGhhdCBzcGFucyBtdWx0aXBsZSBicmVha3BvaW50IHdpZHRocy5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBiZXR3ZWVuIHRoZSBtaW4gYW5kIG1heCBicmVha3BvaW50c1xuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtYmV0d2VlbigkbG93ZXIsICR1cHBlciwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbG93ZXIsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCR1cHBlciwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbG93ZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCR1cHBlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuLy8gTWVkaWEgYmV0d2VlbiB0aGUgYnJlYWtwb2ludCdzIG1pbmltdW0gYW5kIG1heGltdW0gd2lkdGhzLlxuLy8gTm8gbWluaW11bSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQsIGFuZCBubyBtYXhpbXVtIGZvciB0aGUgbGFyZ2VzdCBvbmUuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgb25seSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCwgbm90IHZpZXdwb3J0cyBhbnkgd2lkZXIgb3IgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1vbmx5KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG4iLCIvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgRmlsZSBOYW1lOiB2ZXJ0aWNhbC1vdmVybGF5LW1lbnUuc2Nzc1xuICAgIERlc2NyaXB0aW9uOiBBIG92ZXJsYXkgc3R5bGUgdmVydGljYWwgbWVudSB3aXRoIHNob3cgYW5kIGhpZGUgc3VwcG9ydC4gSXQgc3VwcG9ydFxuICAgIGxpZ2h0ICYgZGFyayB2ZXJzaW9uLCBmaWxwcGVkIGxheW91dCwgcmlnaHQgc2lkZSBpY29ucywgbmF0aXZlIHNjcm9sbCBhbmQgYm9yZGVycyBtZW51XG4gICAgaXRlbSBzZXBlcmF0aW9uLlxuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBJdGVtIE5hbWU6IFZ1ZXh5IC0gVnVlanMsIFJlYWN0LCBBbmd1bGFyLCBIVE1MICYgTGFyYXZlbCBBZG1pbiBEYXNoYm9hcmQgVGVtcGxhdGVcbiAgICBBdXRob3I6IFBJWElOVkVOVFxuICAgIEF1dGhvciBVUkw6IGh0dHA6Ly93d3cudGhlbWVmb3Jlc3QubmV0L3VzZXIvcGl4aW52ZW50XG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG5AaW1wb3J0ICcuLi8uLi8uLi9ib290c3RyYXAtZXh0ZW5kZWQvaW5jbHVkZSc7IC8vIEJvb3RzdHJhcCBpbmNsdWRlc1xuQGltcG9ydCAnLi4vLi4vLi4vY29tcG9uZW50cy9pbmNsdWRlJzsgLy8gQ29tcG9uZW50cyBpbmNsdWRlc1xuXG4vLyBJbXBvcnQgZmlyc3QgbWFpbiBtZW51IG1peGluXG5AaW1wb3J0ICcuLi8uLi9taXhpbnMvbWFpbi1tZW51LW1peGluJztcblxuLy8gVmVydGljYWwgT3ZlcmxheSBNZW51XG4vLz09PT09PT09PT09PT09PT09PT09PT09PT1cbi52ZXJ0aWNhbC1vdmVybGF5LW1lbnUge1xuICAvL0NvbnRlbnQgZXhwYW5kZWRcbiAgLmNvbnRlbnQge1xuICAgIEBpbmNsdWRlIG1haW4tbWVudS13aWR0aCgwKTtcbiAgfVxuICAvL05hdmJhciBleHBhbmRlZFxuICAubmF2YmFyIHtcbiAgICAubmF2YmFyLWhlYWRlciB7XG4gICAgICBAaW5jbHVkZSBtZW51LW5hdmJhci13aWR0aCgkbWVudS1leHBhbmRlZC13aWR0aCk7XG4gICAgfVxuICB9XG4gIC8vIE1haW4gbWVudSBleHBhbmRlZFxuICAubWFpbi1tZW51IHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC4yNXMsIG9wYWNpdHkgMC4yNXMsIHRyYW5zZm9ybSAwLjI1cztcbiAgICB3aWR0aDogJG1lbnUtZXhwYW5kZWQtd2lkdGg7XG4gICAgbGVmdDogLSgkbWVudS1leHBhbmRlZC13aWR0aCk7XG5cbiAgICAubmF2aWdhdGlvbiB7XG4gICAgICA+IGxpIHtcbiAgICAgICAgPiBhIHtcbiAgICAgICAgICA+IHN2ZyxcbiAgICAgICAgICA+IGkge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNHB4O1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlIGFsbDtcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlIGFsbDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjQyOXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpIHtcbiAgICAgICAgQGluY2x1ZGUgdmVydGljYWwtbWVudS1oYXMtc3ViLWFycm93KDFyZW0pO1xuICAgICAgfVxuXG4gICAgICAubmF2aWdhdGlvbi1oZWFkZXIge1xuICAgICAgICAuZmVhdGhlci1tb3JlLWhvcml6b250YWwge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgJi5tZW51LW9wZW4ge1xuICAgIC5tYWluLW1lbnUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoJG1lbnUtZXhwYW5kZWQtd2lkdGgsIDAsIDApO1xuICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC4yNXMsIG9wYWNpdHkgMC4yNXMsIHRyYW5zZm9ybSAwLjI1cztcbiAgICB9XG4gIH1cbiAgJi5tZW51LWhpZGUge1xuICAgIC5tYWluLW1lbnUge1xuICAgICAgQGV4dGVuZCAubWFpbi1tZW51O1xuICAgIH1cbiAgfVxufVxuIl19 */"],
  encapsulation: 2
});

/***/ }),

/***/ 16800:
/*!***********************************************************!*\
  !*** ./src/app/layout/vertical/vertical-layout.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerticalLayoutModule": function() { return /* binding */ VerticalLayoutModule; }
/* harmony export */ });
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _core_common_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/common.module */ 75078);
/* harmony import */ var _core_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/components */ 69065);
/* harmony import */ var app_layout_components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/layout/components/navbar/navbar.module */ 17777);
/* harmony import */ var app_layout_components_content_content_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/layout/components/content/content.module */ 92181);
/* harmony import */ var app_layout_components_menu_menu_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/layout/components/menu/menu.module */ 79287);
/* harmony import */ var app_layout_components_footer_footer_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/layout/components/footer/footer.module */ 73030);
/* harmony import */ var app_layout_vertical_vertical_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/layout/vertical/vertical-layout.component */ 80836);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);











var VerticalLayoutModule = /*#__PURE__*/(0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function VerticalLayoutModule() {
  (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, VerticalLayoutModule);
});

VerticalLayoutModule.ɵfac = function VerticalLayoutModule_Factory(t) {
  return new (t || VerticalLayoutModule)();
};

VerticalLayoutModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: VerticalLayoutModule
});
VerticalLayoutModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, _core_common_module__WEBPACK_IMPORTED_MODULE_2__.CoreCommonModule, _core_components__WEBPACK_IMPORTED_MODULE_3__.CoreSidebarModule, app_layout_components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_4__.NavbarModule, app_layout_components_menu_menu_module__WEBPACK_IMPORTED_MODULE_6__.MenuModule, app_layout_components_content_content_module__WEBPACK_IMPORTED_MODULE_5__.ContentModule, app_layout_components_footer_footer_module__WEBPACK_IMPORTED_MODULE_7__.FooterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](VerticalLayoutModule, {
    declarations: [app_layout_vertical_vertical_layout_component__WEBPACK_IMPORTED_MODULE_8__.VerticalLayoutComponent],
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, _core_common_module__WEBPACK_IMPORTED_MODULE_2__.CoreCommonModule, _core_components__WEBPACK_IMPORTED_MODULE_3__.CoreSidebarModule, app_layout_components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_4__.NavbarModule, app_layout_components_menu_menu_module__WEBPACK_IMPORTED_MODULE_6__.MenuModule, app_layout_components_content_content_module__WEBPACK_IMPORTED_MODULE_5__.ContentModule, app_layout_components_footer_footer_module__WEBPACK_IMPORTED_MODULE_7__.FooterModule],
    exports: [app_layout_vertical_vertical_layout_component__WEBPACK_IMPORTED_MODULE_8__.VerticalLayoutComponent]
  });
})();

/***/ }),

/***/ 86894:
/*!*******************************************************!*\
  !*** ./src/app/main/dashboard/dashboard.component.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": function() { return /* binding */ DashboardComponent; }
/* harmony export */ });
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_layout_components_content_header_content_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/layout/components/content-header/content-header.component */ 4810);




var DashboardComponent = /*#__PURE__*/function () {
  function DashboardComponent() {
    (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DashboardComponent);
  }

  (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(DashboardComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.contentHeader = {
        headerTitle: 'Home',
        actionButton: true,
        breadcrumb: {
          type: '',
          links: [{
            name: 'Home',
            isLink: true,
            link: '/'
          }, {
            name: 'Sample',
            isLink: false
          }]
        }
      };
    }
  }]);

  return DashboardComponent;
}();

DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
  return new (t || DashboardComponent)();
};

DashboardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: DashboardComponent,
  selectors: [["app-dashboard"]],
  decls: 18,
  vars: 1,
  consts: [[1, "content-wrapper", "container-xxl", "p-0"], [1, "content-body"], [3, "contentHeader"], ["id", "home-page"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body", "pb-1"], [1, "card-text"], ["href", "https://pixinvent.com/demo/vuexy-angular-admin-dashboard-template/documentation/", "target", "_blank"]],
  template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "app-content-header", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "section", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "h4", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Kick start your project \uD83D\uDE80");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 9)(11, "p", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "All the best for your new project.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "p", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, " Please make sure to read our ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Template Documentation");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, " to understand where to go from here and how to use our template. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("contentHeader", ctx.contentHeader);
    }
  },
  dependencies: [app_layout_components_content_header_content_header_component__WEBPACK_IMPORTED_MODULE_2__.ContentHeaderComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"]
});

/***/ }),

/***/ 95929:
/*!****************************************************!*\
  !*** ./src/app/main/dashboard/dashboard.module.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardModule": function() { return /* binding */ DashboardModule; }
/* harmony export */ });
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var app_layout_components_content_header_content_header_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/layout/components/content-header/content-header.module */ 50619);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var _core_common_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/common.module */ 75078);
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard.component */ 86894);
/* harmony import */ var _core_services_seguridad_auth_guard_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/services/seguridad/auth-guard.guard */ 11342);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);











 // routing

var routes = [{
  path: 'dashboard',
  component: _dashboard_component__WEBPACK_IMPORTED_MODULE_4__.DashboardComponent,
  canActivate: [_core_services_seguridad_auth_guard_guard__WEBPACK_IMPORTED_MODULE_5__.AuthGuardGuard]
}];
var DashboardModule = /*#__PURE__*/(0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function DashboardModule() {
  (0,_Users_elpoloxrodriguez_Desktop_Developer_Sinfona_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, DashboardModule);
});

DashboardModule.ɵfac = function DashboardModule_Factory(t) {
  return new (t || DashboardModule)();
};

DashboardModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: DashboardModule
});
DashboardModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _core_common_module__WEBPACK_IMPORTED_MODULE_3__.CoreCommonModule, app_layout_components_content_header_content_header_module__WEBPACK_IMPORTED_MODULE_2__.ContentHeaderModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](DashboardModule, {
    declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_4__.DashboardComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _core_common_module__WEBPACK_IMPORTED_MODULE_3__.CoreCommonModule, app_layout_components_content_header_content_header_module__WEBPACK_IMPORTED_MODULE_2__.ContentHeaderModule]
  });
})();

/***/ }),

/***/ 15132:
/*!*********************************!*\
  !*** ./src/app/menu/i18n/de.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "locale": function() { return /* binding */ locale; }
/* harmony export */ });
var locale = {
  lang: 'de',
  data: {
    MENU: {
      HOME: 'Zuhause',
      SAMPLE: 'Stichprobe'
    }
  }
};

/***/ }),

/***/ 43831:
/*!*********************************!*\
  !*** ./src/app/menu/i18n/en.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "locale": function() { return /* binding */ locale; }
/* harmony export */ });
var locale = {
  lang: 'en',
  data: {
    MENU: {
      HOME: 'Home',
      SAMPLE: 'Sample'
    }
  }
};

/***/ }),

/***/ 813:
/*!*********************************!*\
  !*** ./src/app/menu/i18n/fr.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "locale": function() { return /* binding */ locale; }
/* harmony export */ });
var locale = {
  lang: 'fr',
  data: {
    MENU: {
      HOME: 'Maison',
      SAMPLE: 'Échantillon'
    }
  }
};

/***/ }),

/***/ 59595:
/*!*********************************!*\
  !*** ./src/app/menu/i18n/pt.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "locale": function() { return /* binding */ locale; }
/* harmony export */ });
var locale = {
  lang: 'pt',
  data: {
    MENU: {
      HOME: 'Casa',
      SAMPLE: 'Amostra'
    }
  }
};

/***/ }),

/***/ 70318:
/*!******************************!*\
  !*** ./src/app/menu/menu.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menu": function() { return /* binding */ menu; }
/* harmony export */ });
//? DOC: http://localhost:7777/demo/vuexy-angular-admin-dashboard-template/documentation/guide/development/navigation-menus.html#interface
var menu = [// Dashboard
{
  id: 'dashboard',
  title: 'Dashboard',
  icon: 'home',
  type: 'item',
  url: 'dashboard'
}, {
  id: 'soporte',
  title: 'Soporte',
  type: 'collapsible',
  // role: ['Admin'], //? To hide collapsible based on user role
  icon: 'tool',
  children: [{
    id: 'analytics',
    title: 'Gestion Usuario',
    type: 'item',
    role: ['Admin'],
    icon: 'circle',
    url: 'dashboard/analytics'
  }, {
    id: 'ecommerce',
    title: 'Gestion Tablas',
    type: 'item',
    icon: 'circle',
    url: 'dashboard/ecommerce'
  }, {
    id: 'ecommerce',
    title: 'Cambiar Contraseña',
    type: 'item',
    icon: 'circle',
    url: 'dashboard/ecommerce'
  }, {
    id: 'ecommerce',
    title: 'Copias de Seguridad',
    type: 'item',
    icon: 'circle',
    url: 'dashboard/ecommerce'
  }, {
    id: 'ecommerce',
    title: 'Roles de Usuarios',
    type: 'item',
    icon: 'circle',
    url: 'dashboard/ecommerce'
  }, {
    id: 'ecommerce',
    title: 'Perfiles de Seguridad',
    type: 'item',
    icon: 'circle',
    url: 'dashboard/ecommerce'
  }, {
    id: 'ecommerce',
    title: 'Auditoria',
    type: 'item',
    icon: 'circle',
    url: 'dashboard/ecommerce'
  }]
}, {
  id: 'soporte',
  title: 'Registro Contribuyente',
  type: 'collapsible',
  // role: ['Admin'], //? To hide collapsible based on user role
  icon: 'tool',
  children: [{
    id: 'analytics',
    title: 'Gestion Inscripcion',
    type: 'item',
    role: ['Admin'],
    icon: 'circle',
    url: 'dashboard/analytics'
  }, {
    id: 'ecommerce',
    title: 'Desclaracion y Pagos',
    type: 'item',
    icon: 'circle',
    url: 'dashboard/ecommerce'
  }, {
    id: 'ecommerce',
    title: 'Planilla Solvencia',
    type: 'item',
    icon: 'circle',
    url: 'dashboard/ecommerce'
  }]
}, {
  id: 'soporte',
  title: 'Recaudación',
  type: 'collapsible',
  // role: ['Admin'], //? To hide collapsible based on user role
  icon: 'tool',
  children: [{
    id: 'analytics',
    title: 'Empresas Contribuyentes',
    type: 'item',
    role: ['Admin'],
    icon: 'circle',
    url: 'dashboard/analytics'
  }, {
    id: 'ecommerce',
    title: 'Pagos Contribuyentes',
    type: 'item',
    icon: 'circle',
    url: 'dashboard/ecommerce'
  }, {
    id: 'ecommerce',
    title: 'Consolidación de Pagos',
    type: 'item',
    icon: 'circle',
    url: 'dashboard/ecommerce'
  }, {
    id: 'ecommerce',
    title: 'Gestión de Metas',
    type: 'item',
    icon: 'circle',
    url: 'dashboard/ecommerce'
  }]
}, {
  id: 'soporte',
  title: 'Documentación Digital',
  type: 'collapsible',
  // role: ['Admin'], //? To hide collapsible based on user role
  icon: 'tool',
  children: [{
    id: 'analytics',
    title: 'Contribuyentes',
    type: 'item',
    role: ['Admin'],
    icon: 'circle',
    url: 'dashboard/analytics'
  }, {
    id: 'ecommerce',
    title: 'Comunicaciones',
    type: 'item',
    icon: 'circle',
    url: 'dashboard/ecommerce'
  }]
}, {
  id: 'soporte',
  title: 'Reportes y Alertas',
  type: 'collapsible',
  // role: ['Admin'], //? To hide collapsible based on user role
  icon: 'tool',
  children: [{
    id: 'analytics',
    title: 'Gestión Alertas',
    type: 'item',
    role: ['Admin'],
    icon: 'circle',
    url: 'dashboard/analytics'
  }, {
    id: 'ecommerce',
    title: 'Definición Alertas',
    type: 'item',
    icon: 'circle',
    url: 'dashboard/ecommerce'
  }, {
    id: 'ecommerce',
    title: 'Configuración Usuarios Alertados',
    type: 'item',
    icon: 'circle',
    url: 'dashboard/ecommerce'
  }, {
    id: 'ecommerce',
    title: 'Reportes Dinamicos',
    type: 'item',
    icon: 'circle',
    url: 'dashboard/ecommerce'
  }, {
    id: 'ecommerce',
    title: 'Reportes Estaticos',
    type: 'item',
    icon: 'circle',
    url: 'dashboard/ecommerce'
  }]
}];

/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
  production: false,
  Url: 'https://localhost',
  API: '/devel/api/',
  hmr: false,
  ID: 'ID-001',
  apiUrl: 'https://localhost',
  Hash: ':c521f27fb1b3311d686d511b668e5bd4'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 84187:
/*!********************!*\
  !*** ./src/hmr.ts ***!
  \********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hmrBootstrap": function() { return /* binding */ hmrBootstrap; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angularclass_hmr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angularclass/hmr */ 39006);


var hmrBootstrap = function hmrBootstrap(module, bootstrap) {
  var ngModule;
  module.hot.accept();
  bootstrap().then(function (mod) {
    return ngModule = mod;
  });
  module.hot.dispose(function () {
    var appRef = ngModule.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationRef);
    var elements = appRef.components.map(function (c) {
      return c.location.nativeElement;
    });
    var makeVisible = (0,_angularclass_hmr__WEBPACK_IMPORTED_MODULE_1__.createNewHosts)(elements);
    ngModule.destroy();
    makeVisible();
  });
};

/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);
/* harmony import */ var _hmr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hmr */ 84187);






if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
}

var bootstrap = function bootstrap() {
  return _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule);
};

if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.hmr) {
  if (false) {} else {
    console.error('HMR is not enabled for webpack-dev-server!');
    console.log('Are you using the --hmr flag for ng serve?');
  }
} else {
  bootstrap().catch(function (err) {
    return console.log(err);
  });
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(14431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map