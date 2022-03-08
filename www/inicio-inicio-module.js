(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["inicio-inicio-module"],{

/***/ "./src/app/pages/inicio/inicio-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/inicio/inicio-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: InicioPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioPageRoutingModule", function() { return InicioPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _inicio_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inicio.page */ "./src/app/pages/inicio/inicio.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _inicio_page__WEBPACK_IMPORTED_MODULE_2__["InicioPage"]
    }
];
var InicioPageRoutingModule = /** @class */ (function () {
    function InicioPageRoutingModule() {
    }
    InicioPageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], InicioPageRoutingModule);
    return InicioPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/inicio/inicio.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/inicio/inicio.module.ts ***!
  \***********************************************/
/*! exports provided: InicioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioPageModule", function() { return InicioPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _inicio_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inicio-routing.module */ "./src/app/pages/inicio/inicio-routing.module.ts");
/* harmony import */ var _inicio_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inicio.page */ "./src/app/pages/inicio/inicio.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var InicioPageModule = /** @class */ (function () {
    function InicioPageModule() {
    }
    InicioPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _inicio_routing_module__WEBPACK_IMPORTED_MODULE_4__["InicioPageRoutingModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]
            ],
            declarations: [_inicio_page__WEBPACK_IMPORTED_MODULE_5__["InicioPage"]]
        })
    ], InicioPageModule);
    return InicioPageModule;
}());



/***/ }),

/***/ "./src/app/pages/inicio/inicio.page.html":
/*!***********************************************!*\
  !*** ./src/app/pages/inicio/inicio.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar class=\"toolbarppl\">\n    <ion-title style=\"font-size: unset; text-align: center; margin-left: 12%;\">\n      INICIO\n    </ion-title> \n    <ion-buttons slot=\"end\">\n      <ion-menu-button menu=\"first\"\n                       style=\"color: #39B1C0;\">\n      </ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding fondoppal\">\n  <!--\n  <ion-list class=\"fondoppal\" style=\"background-color: #dfe6ee;\" *ngIf=\"arr_mon_see != null && arr_mon_see.length > 0 && mydestines != null\">\n    <p style=\"font-size: 0.9em; font-weight: bold; width: 60%; text-align: left;\">Últimas audioguias reproducidas</p>\n    <div *ngFor=\"let key of arr_mon_see | objngfor\">\n      <ion-card mode=\"md\">\n        <loading-image *ngIf=\"arr_mon_see[key].imgthumb != null\" [url]=\"arr_mon_see[key].imgthumb\"></loading-image>\n      </ion-card>\n      <ion-item class=\"fondoppal\" routerLink=\"/tabs/mis-destinos/{{arr_mon_see[key].idguia}}/{{arr_mon_see[key].iditinerario}}\">\n        <ion-label class=\"ion-text-uppercase\">{{arr_mon_see[key].title}}</ion-label>\n        <ion-icon slot=\"end\" class=\"color_play_icon\" src=\"/assets/img/audio/play-circle-outline.svg\"></ion-icon>\n      </ion-item>\n    </div>\n  </ion-list>\n  -->\n  <ion-list style=\"background-color: #dfe6ee;\">\n    <ion-item routerLink=\"/tabs/mis-destinos\" style=\"--background: #dfe6ee;\">\n      <ion-list style=\"width:100%; height: 100%; background-color: #dfe6ee;\">\n        <div class=\"caja_texto\"><img width=\"25\" height=\"25\" src=\"/assets/img/mis_destinos_config.svg\"/></div>\n        <div class=\"caja_texto_dest\"><p>Mis destinos</p></div>\n        <div class=\"caja_text_descrip\"><p>Biblioteca con todos tus destinos en un sólo lugar para ver, oír y escuchar cuando quieras</p></div>\n      </ion-list>\n    </ion-item>\n    <ion-item routerLink=\"/tabs/buscar\" style=\"--background: #dfe6ee;\">\n      <ion-list style=\"width:100%; height: 100%; background-color: #dfe6ee;\">\n        <div class=\"caja_texto\"><img width=\"25\" height=\"25\" src=\"/assets/img/buscar_config.svg\"/></div>\n        <div class=\"caja_texto_dest\"><p>Buscar</p></div>\n        <div class=\"caja_text_descrip\"><p>Busca y encuentra destinos en nuestro catálogo: monumentos, itinerarios, ciudades, packs, etc..</p></div>\n      </ion-list>\n    </ion-item>\n    <ion-item (click)=\"productBuy()\" style=\"--background: #dfe6ee;\">\n      <ion-list style=\"width:100%; height: 100%; background-color: #dfe6ee;\">\n        <div class=\"caja_texto\"><img width=\"25\" height=\"25\" src=\"/assets/img/comprar_config.svg\"/></div>\n        <div class=\"caja_texto_dest\"><p>Comprar</p></div>\n        <div class=\"caja_text_descrip\"><p>Accede directamente a Destino Arte.</p></div>\n      </ion-list>\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/pages/inicio/inicio.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/inicio/inicio.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toolbarppl {\n  --background:#dfe6ee;\n  color: #1F4D9A; }\n\n.fondoppal {\n  --background:#dfe6ee;\n  background-color: #dfe6ee; }\n\n.caja_texto {\n  text-align: center; }\n\n.caja_texto_dest {\n  font-size: 1em;\n  text-align: center;\n  color: #1F4D9A; }\n\n.caja_text_descrip {\n  font-size: 0.8em;\n  text-align: center;\n  color: #1F4D9A; }\n\n.color_play_icon {\n  color: #1F4D9A; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rcHJvL0Rlc2t0b3AvcHJveWVjdG9zL2Rlc3Rpbm9hcnRlX2FwcC9mcm9udC1pb25pYy9zcmMvYXBwL3BhZ2VzL2luaWNpby9pbmljaW8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQWE7RUFDYixlQUFjLEVBQ2pCOztBQUVEO0VBQ0kscUJBQWE7RUFDYiwwQkFBeUIsRUFDNUI7O0FBRUQ7RUFDSSxtQkFBaUIsRUFDcEI7O0FBRUQ7RUFDSSxlQUFhO0VBQ2IsbUJBQWlCO0VBQ2pCLGVBQWEsRUFDaEI7O0FBRUQ7RUFDSSxpQkFBZTtFQUNmLG1CQUFpQjtFQUNqQixlQUFhLEVBQ2hCOztBQUVEO0VBQ0ksZUFBYSxFQUNoQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luaWNpby9pbmljaW8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvb2xiYXJwcGx7XHJcbiAgICAtLWJhY2tncm91bmQ6I2RmZTZlZTtcclxuICAgIGNvbG9yOiAjMUY0RDlBO1xyXG59XHJcblxyXG4uZm9uZG9wcGFse1xyXG4gICAgLS1iYWNrZ3JvdW5kOiNkZmU2ZWU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZlNmVlO1xyXG59XHJcblxyXG4uY2FqYV90ZXh0b3tcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcblxyXG4uY2FqYV90ZXh0b19kZXN0e1xyXG4gICAgZm9udC1zaXplOjFlbTsgXHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIGNvbG9yOiMxRjREOUE7XHJcbn1cclxuXHJcbi5jYWphX3RleHRfZGVzY3JpcHtcclxuICAgIGZvbnQtc2l6ZTowLjhlbTsgXHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIGNvbG9yOiMxRjREOUE7XHJcbn1cclxuXHJcbi5jb2xvcl9wbGF5X2ljb257XHJcbiAgICBjb2xvcjojMUY0RDlBO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/inicio/inicio.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/inicio/inicio.page.ts ***!
  \*********************************************/
/*! exports provided: InicioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioPage", function() { return InicioPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_user_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/user-data.service */ "./src/app/service/user-data.service.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InicioPage = /** @class */ (function () {
    function InicioPage(serviceRegister, iab) {
        this.serviceRegister = serviceRegister;
        this.iab = iab;
        this.arr_mon_see = [];
        this.mydestines = null;
    }
    InicioPage.prototype.ngOnInit = function () {
    };
    InicioPage.prototype.ionViewWillEnter = function () {
        //this.getCargaVistos();  
    };
    InicioPage.prototype.getCargaVistos = function () {
        var _this = this;
        //this.serviceRegister.present('Audioguias vistas..');
        this.serviceRegister.getAllData()
            .then(function (res) {
            if (res != null) {
                _this.mydestines = res;
                _this.serviceRegister.getMonSee()
                    .then(function (res) {
                    if (res != null) {
                        _this.arr_mon_see = res;
                        //this.serviceRegister.dismiss();
                    }
                });
            }
            else {
                _this.serviceRegister.dismiss();
            }
        })
            .catch(function (err) {
            console.log('Error al extraer los monumentos');
            _this.serviceRegister.dismiss();
        });
    };
    InicioPage.prototype.productBuy = function () {
        this.iab.create('https://www.destinoarte.com/audioguias-culturales/', '_system').show();
    };
    InicioPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-inicio',
            template: __webpack_require__(/*! ./inicio.page.html */ "./src/app/pages/inicio/inicio.page.html"),
            styles: [__webpack_require__(/*! ./inicio.page.scss */ "./src/app/pages/inicio/inicio.page.scss")],
        })
        /*
        @Pipe({
          name: 'objngfor'
        })
        */
        ,
        __metadata("design:paramtypes", [_service_user_data_service__WEBPACK_IMPORTED_MODULE_1__["UserDataService"],
            _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__["InAppBrowser"]])
    ], InicioPage);
    return InicioPage;
}());



/***/ })

}]);
//# sourceMappingURL=inicio-inicio-module.js.map