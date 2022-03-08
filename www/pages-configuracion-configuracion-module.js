(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-configuracion-configuracion-module"],{

/***/ "./src/app/pages/configuracion/configuracion.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/configuracion/configuracion.module.ts ***!
  \*************************************************************/
/*! exports provided: ConfiguracionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfiguracionPageModule", function() { return ConfiguracionPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _configuracion_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./configuracion.page */ "./src/app/pages/configuracion/configuracion.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _configuracion_page__WEBPACK_IMPORTED_MODULE_5__["ConfiguracionPage"]
    }
];
var ConfiguracionPageModule = /** @class */ (function () {
    function ConfiguracionPageModule() {
    }
    ConfiguracionPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"]
            ],
            declarations: [_configuracion_page__WEBPACK_IMPORTED_MODULE_5__["ConfiguracionPage"]]
        })
    ], ConfiguracionPageModule);
    return ConfiguracionPageModule;
}());



/***/ }),

/***/ "./src/app/pages/configuracion/configuracion.page.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/configuracion/configuracion.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"ion-no-border\">\n    <ion-toolbar class=\"toolbarppl\">   \n        <ion-buttons slot=\"start\">\n            <ion-button (click)=\"clickedStar()\">\n                <ion-icon slot=\"icon-only\" src=\"/assets/img/menu_atras.svg\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n      <ion-title style=\"font-size: unset; text-align: center;\">\n        CONFIGURACIÓN\n      </ion-title> \n      <ion-buttons slot=\"end\">\n        <ion-menu-button menu=\"first\"\n                         style=\"color: #39B1C0;\">\n        </ion-menu-button>\n      </ion-buttons> \n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-grid>\n    <ion-row>\n      <ion-col class=\"subtitle\" size=\"12\">\n        Permitir notificaciones\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-toggle></ion-toggle>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/configuracion/configuracion.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/configuracion/configuracion.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background:#dfe6ee; }\n\nion-toggle {\n  --background: #575756;\n  --background-checked: #4273c7;\n  --handle-background: rgb(123, 123, 116);\n  --handle-background-checked: #1F4D9A; }\n\n.toolbarppl {\n  --background:#dfe6ee;\n  color: #1F4D9A; }\n\n.subtitle {\n  color: #575756; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rcHJvL0Rlc2t0b3AvcHJveWVjdG9zL2Rlc3Rpbm9hcnRlX2FwcC9mcm9udC1pb25pYy9zcmMvYXBwL3BhZ2VzL2NvbmZpZ3VyYWNpb24vY29uZmlndXJhY2lvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBYSxFQUNoQjs7QUFFRDtFQUNJLHNCQUFhO0VBQ2IsOEJBQXFCO0VBRXJCLHdDQUFvQjtFQUNwQixxQ0FBNEIsRUFDN0I7O0FBRUg7RUFDSSxxQkFBYTtFQUNiLGVBQWMsRUFDakI7O0FBRUQ7RUFDSSxlQUFhLEVBQ2hCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY29uZmlndXJhY2lvbi9jb25maWd1cmFjaW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiNkZmU2ZWU7XHJcbn1cclxuXHJcbmlvbi10b2dnbGUgeyBcclxuICAgIC0tYmFja2dyb3VuZDogIzU3NTc1NjtcclxuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjNDI3M2M3O1xyXG4gICAgXHJcbiAgICAtLWhhbmRsZS1iYWNrZ3JvdW5kOiByZ2IoMTIzLCAxMjMsIDExNik7XHJcbiAgICAtLWhhbmRsZS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICMxRjREOUE7XHJcbiAgfVxyXG5cclxuLnRvb2xiYXJwcGx7XHJcbiAgICAtLWJhY2tncm91bmQ6I2RmZTZlZTtcclxuICAgIGNvbG9yOiAjMUY0RDlBO1xyXG59XHJcblxyXG4uc3VidGl0bGV7XHJcbiAgICBjb2xvcjojNTc1NzU2O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/configuracion/configuracion.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/configuracion/configuracion.page.ts ***!
  \***********************************************************/
/*! exports provided: ConfiguracionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfiguracionPage", function() { return ConfiguracionPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfiguracionPage = /** @class */ (function () {
    function ConfiguracionPage(router) {
        this.router = router;
    }
    ConfiguracionPage.prototype.ngOnInit = function () {
    };
    ConfiguracionPage.prototype.clickedStar = function () {
        this.router.navigate(['/tabs/inicio']);
    };
    ConfiguracionPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-configuracion',
            template: __webpack_require__(/*! ./configuracion.page.html */ "./src/app/pages/configuracion/configuracion.page.html"),
            styles: [__webpack_require__(/*! ./configuracion.page.scss */ "./src/app/pages/configuracion/configuracion.page.scss")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ConfiguracionPage);
    return ConfiguracionPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-configuracion-configuracion-module.js.map