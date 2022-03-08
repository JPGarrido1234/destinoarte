(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-mas-info-mas-info-module"],{

/***/ "./src/app/pages/mas-info/mas-info-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/mas-info/mas-info-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: MasInfoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasInfoPageRoutingModule", function() { return MasInfoPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _mas_info_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mas-info.page */ "./src/app/pages/mas-info/mas-info.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _mas_info_page__WEBPACK_IMPORTED_MODULE_2__["MasInfoPage"]
    }
];
var MasInfoPageRoutingModule = /** @class */ (function () {
    function MasInfoPageRoutingModule() {
    }
    MasInfoPageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], MasInfoPageRoutingModule);
    return MasInfoPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/mas-info/mas-info.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/mas-info/mas-info.module.ts ***!
  \***************************************************/
/*! exports provided: MasInfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasInfoPageModule", function() { return MasInfoPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _mas_info_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mas-info-routing.module */ "./src/app/pages/mas-info/mas-info-routing.module.ts");
/* harmony import */ var _mas_info_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mas-info.page */ "./src/app/pages/mas-info/mas-info.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var MasInfoPageModule = /** @class */ (function () {
    function MasInfoPageModule() {
    }
    MasInfoPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _mas_info_routing_module__WEBPACK_IMPORTED_MODULE_4__["MasInfoPageRoutingModule"]
            ],
            declarations: [_mas_info_page__WEBPACK_IMPORTED_MODULE_5__["MasInfoPage"]]
        })
    ], MasInfoPageModule);
    return MasInfoPageModule;
}());



/***/ }),

/***/ "./src/app/pages/mas-info/mas-info.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/mas-info/mas-info.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"ion-no-border\">\n    <ion-toolbar class=\"toolbarppl\">\n      \n      <ion-buttons slot=\"start\">\n        <ion-back-button style=\"color: #39B1C0;\"\n                         defaultHref=\"/\">\n        </ion-back-button>\n      </ion-buttons>\n  \n      <ion-title style=\"font-size: unset; text-align: center; margin-right: 10%;\">\n        MÁS INFORMACIÓN\n      </ion-title> \n    </ion-toolbar>\n  </ion-header>\n\n<ion-content class=\"ion-padding\">\n<p>\n  Desde nuestra web <b class=\"colorText\">destinoarte.com,</b> podrás comprar itinerarios de la ciudad que quieras\n  visitar o monumentos sueltos organizando tú mismo el recorrido.\n</p>\n<p>\n  Una vez que compres un itinerario o un monumento recibirás un e-mail con los datos de tu compra y el enlace de nuestra \n  App, para que puedas acceder a las audioguías adquiridas en tu dispositivo móvil. Aclraramos que las audioguías sólo \n  podrán ser escuchadas a través de nuestra App. A medida que vayas comprando nuestras distintas audioguías siempre las\n  tendrás a tu disposición.\n</p>\n<p>\n  Con nuestra App de <b class=\"colorText\">Destino Arte</b> podrás viajar a la ciudad que elijas a tu ritmo y sin\n  perderte nada, tendrás el contenido necesario de cada uno de los monumentos y museos que vayas a visitar.\n</p>  \n<p>\n  Adquiriendo un itinerario dispondrás de un plano de la ciudad con el recorrido para que puedas situarte, además incluimos\n  la planta de cada uno de los monumentos e infografías detalladas para seguir con facilidad la explicación de la audioguía.\n</p>\n<p>\n  Puedes ver como funciona nuestra aplicación registrándote aquí o en nuestra web <b class=\"colorText\">destinoarte.com.</b>\n  Con el registro, tendrás <b class=\"colorText\">cuatro audioguías gratuitas</b> para que puedas comprobar como funciona\n  nuestra App y escuches alguna de nuestra audioguías.\n</p>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/mas-info/mas-info.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/mas-info/mas-info.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toolbarppl {\n  --background:#dfe6ee;\n  color: #1F4D9A; }\n\nion-content {\n  --background:#dfe6ee; }\n\n.colorText {\n  color: #1F4D9A; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rcHJvL0Rlc2t0b3AvcHJveWVjdG9zL2Rlc3Rpbm9hcnRlX2FwcC9mcm9udC1pb25pYy9zcmMvYXBwL3BhZ2VzL21hcy1pbmZvL21hcy1pbmZvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFhO0VBQ2IsZUFBYyxFQUNqQjs7QUFFRDtFQUNJLHFCQUFhLEVBQ2hCOztBQUVEO0VBQ0ksZUFBYSxFQUNoQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hcy1pbmZvL21hcy1pbmZvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b29sYmFycHBse1xyXG4gICAgLS1iYWNrZ3JvdW5kOiNkZmU2ZWU7XHJcbiAgICBjb2xvcjogIzFGNEQ5QTtcclxufVxyXG5cclxuaW9uLWNvbnRlbnR7XHJcbiAgICAtLWJhY2tncm91bmQ6I2RmZTZlZTtcclxufVxyXG5cclxuLmNvbG9yVGV4dHtcclxuICAgIGNvbG9yOiMxRjREOUE7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/mas-info/mas-info.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/mas-info/mas-info.page.ts ***!
  \*************************************************/
/*! exports provided: MasInfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasInfoPage", function() { return MasInfoPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MasInfoPage = /** @class */ (function () {
    function MasInfoPage() {
    }
    MasInfoPage.prototype.ngOnInit = function () {
    };
    MasInfoPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mas-info',
            template: __webpack_require__(/*! ./mas-info.page.html */ "./src/app/pages/mas-info/mas-info.page.html"),
            styles: [__webpack_require__(/*! ./mas-info.page.scss */ "./src/app/pages/mas-info/mas-info.page.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], MasInfoPage);
    return MasInfoPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-mas-info-mas-info-module.js.map