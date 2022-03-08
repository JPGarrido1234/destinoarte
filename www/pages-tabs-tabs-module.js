(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tabs-tabs-module"],{

/***/ "./src/app/pages/tabs/tabs.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/tabs/tabs.module.ts ***!
  \*******************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs.page */ "./src/app/pages/tabs/tabs.page.ts");
/* harmony import */ var _resolver_data_resolver_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../resolver/data-resolver.service */ "./src/app/resolver/data-resolver.service.ts");
/* harmony import */ var _resolver_data_get_resolver_service___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../resolver/data-get-resolver.service  */ "./src/app/resolver/data-get-resolver.service .ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        redirectTo: 'inicio'
    },
    {
        path: '',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_5__["TabsPage"],
        children: [
            {
                path: 'inicio',
                loadChildren: '../inicio/inicio.module#InicioPageModule'
            },
            {
                path: 'buscar',
                children: [
                    {
                        path: '',
                        loadChildren: '../buscar/buscar.module#BuscarPageModule'
                    },
                    {
                        path: ':id',
                        resolve: {
                            special: _resolver_data_resolver_service__WEBPACK_IMPORTED_MODULE_6__["DataResolverService"]
                        },
                        loadChildren: '../buscar/buscar.module#BuscarPageModule'
                    }
                ]
            },
            {
                path: 'mis-destinos',
                children: [
                    {
                        path: '',
                        loadChildren: '../mis-destinos/mis-destinos.module#MisDestinosPageModule'
                    },
                    {
                        path: ':id/:iditi',
                        resolve: {
                            special: _resolver_data_get_resolver_service___WEBPACK_IMPORTED_MODULE_7__["DataGetResolverService"]
                        },
                        loadChildren: '../mis-destinos/mis-destinos.module#MisDestinosPageModule'
                    }
                ]
            },
            {
                path: 'comprar'
            }
        ]
    }
];
var TabsPageModule = /** @class */ (function () {
    function TabsPageModule() {
    }
    TabsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_5__["TabsPage"]]
        })
    ], TabsPageModule);
    return TabsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/tabs/tabs.page.html":
/*!*******************************************!*\
  !*** ./src/app/pages/tabs/tabs.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-tabs>\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"inicio\">\n      <ion-icon src=\"/assets/img/menu_inf/inicio.svg\"></ion-icon>\n      <ion-label>Inicio</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"buscar\">\n      <ion-icon src=\"/assets/img/menu_inf/buscar.svg\"></ion-icon>\n      <ion-label>Buscar</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"mis-destinos\">\n      <ion-icon src=\"/assets/img/menu_inf/mis_destinos.svg\"></ion-icon>\n      <ion-label>Mis destinos</ion-label>\n    </ion-tab-button>\n    <ion-tab-button (click)=\"productBuy()\" tab=\"comprar\">\n      <ion-icon src=\"/assets/img/menu_inf/comprar.svg\"></ion-icon>\n      <ion-label>Comprar</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>"

/***/ }),

/***/ "./src/app/pages/tabs/tabs.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/tabs/tabs.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RhYnMvdGFicy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/tabs/tabs.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/tabs/tabs.page.ts ***!
  \*****************************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TabsPage = /** @class */ (function () {
    function TabsPage(iab) {
        this.iab = iab;
    }
    TabsPage.prototype.ngOnInit = function () {
    };
    TabsPage.prototype.productBuy = function () {
        this.iab.create('https://www.destinoarte.com/audioguias-culturales/', '_system').show();
    };
    TabsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tabs',
            template: __webpack_require__(/*! ./tabs.page.html */ "./src/app/pages/tabs/tabs.page.html"),
            styles: [__webpack_require__(/*! ./tabs.page.scss */ "./src/app/pages/tabs/tabs.page.scss")],
        }),
        __metadata("design:paramtypes", [_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_1__["InAppBrowser"]])
    ], TabsPage);
    return TabsPage;
}());



/***/ }),

/***/ "./src/app/resolver/data-get-resolver.service .ts":
/*!********************************************************!*\
  !*** ./src/app/resolver/data-get-resolver.service .ts ***!
  \********************************************************/
/*! exports provided: DataGetResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataGetResolverService", function() { return DataGetResolverService; });
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

var DataGetResolverService = /** @class */ (function () {
    function DataGetResolverService() {
        this.paramsGuia = {
            idguia: null,
            iditinerario: null
        };
    }
    DataGetResolverService.prototype.resolve = function (route) {
        this.paramsGuia.idguia = route.paramMap.get('id');
        this.paramsGuia.iditinerario = route.paramMap.get('iditi');
        return this.paramsGuia;
    };
    DataGetResolverService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], DataGetResolverService);
    return DataGetResolverService;
}());



/***/ }),

/***/ "./src/app/resolver/data-resolver.service.ts":
/*!***************************************************!*\
  !*** ./src/app/resolver/data-resolver.service.ts ***!
  \***************************************************/
/*! exports provided: DataResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataResolverService", function() { return DataResolverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_user_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/user-data.service */ "./src/app/service/user-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataResolverService = /** @class */ (function () {
    function DataResolverService(dataService) {
        this.dataService = dataService;
    }
    DataResolverService.prototype.resolve = function (route) {
        var id = route.paramMap.get('id');
        return this.dataService.getDataGuia(id);
    };
    DataResolverService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_service_user_data_service__WEBPACK_IMPORTED_MODULE_1__["UserDataService"]])
    ], DataResolverService);
    return DataResolverService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-tabs-tabs-module.js.map