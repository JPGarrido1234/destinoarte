(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["buscar-buscar-module"],{

/***/ "./src/app/pages/buscar/buscar.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/buscar/buscar.module.ts ***!
  \***********************************************/
/*! exports provided: BuscarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuscarPageModule", function() { return BuscarPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _buscar_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./buscar.page */ "./src/app/pages/buscar/buscar.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        component: _buscar_page__WEBPACK_IMPORTED_MODULE_5__["BuscarPage"]
    }
];
var BuscarPageModule = /** @class */ (function () {
    function BuscarPageModule() {
    }
    BuscarPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]
            ],
            declarations: [_buscar_page__WEBPACK_IMPORTED_MODULE_5__["BuscarPage"]]
        })
    ], BuscarPageModule);
    return BuscarPageModule;
}());



/***/ }),

/***/ "./src/app/pages/buscar/buscar.page.html":
/*!***********************************************!*\
  !*** ./src/app/pages/buscar/buscar.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"ion-no-border\">\n    <ion-toolbar class=\"toolbarppl\">   \n        <ion-buttons slot=\"start\">\n            <ion-button (click)=\"clickedStar()\">\n                <ion-icon slot=\"icon-only\" src=\"/assets/img/menu_atras.svg\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n      <ion-title style=\"font-size: unset; text-align: center;\">\n        BUSCAR\n      </ion-title> \n      <ion-buttons slot=\"end\">\n        <ion-menu-button menu=\"first\"\n                         style=\"color: #39B1C0;\">\n        </ion-menu-button>\n      </ion-buttons> \n    </ion-toolbar>\n    <ion-searchbar *ngIf=\"data == null ? true : false\" animated\n                (ionChange)=\"buscar( $event )\">\n  </ion-searchbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n  \n  <ion-list class=\"toolbarppl\" lines=\"none\">\n    <div *ngIf=\"list_disponibles != null && showSearch\">\n      <div *ngIf=\"all_itinerarios != null\">\n        <div *ngFor=\"let itinerario of all_itinerarios | filtro: textoBuscar: 'ciudad'\" routerLink = \"/tabs/buscar/{{itinerario.id_woo}}\">\n          <ion-item class=\"fondoitem\" [style.color]=\"itinerario.color\">\n            {{ itinerario.titulo }}  \n          </ion-item>\n        </div>\n      </div>\n    </div>\n  </ion-list>\n  <ion-card *ngIf=\"response == null ? false : true\">\n    <loading-image *ngIf=\"response.img_thumb != null\" [url]=\"response.img_thumb\"></loading-image>\n    <ion-card-header>\n      <ion-card-title class=\"title_card\"><h3>{{response.titulo}}</h3></ion-card-title>\n      <ion-card-subtitle>{{response.nombre}}</ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content class=\"content_card\">\n      <p style=\"text-align: center;\" *ngIf=\"response.resumen != ''\">\n      {{response.resumen}}\n      <p>\n      <p style=\"text-align: center;\" *ngIf=\"response.resumen == ''\">\n        Loremipsu Lorem ipsu, Loremipsu Lorem ipsuLore mipsu Lorem ipsu Loremipsu Lorem ipsu\n        Loremipsu Lorem ipsuLoremipsu Lorem ipsu Loremipsu Lorem ipsu Loremipsu Lorem ipsu\n      </p>\n    </ion-card-content>\n    <ion-button [ngClass]=\"btnColor\"\n                [disabled]=\"btnActivo\"\n                (click)=\"buyToWeb(response.id_woo)\"\n                type=\"submit\" \n                expand=\"block\"\n                shape=\"round\">\n      <ion-icon name=\"cart\"></ion-icon>\n      {{btnText}}\n    </ion-button>\n    <ion-text class=\"text_aviso\">\n      <h3>{{description}}.</h3>\n    </ion-text>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/buscar/buscar.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/buscar/buscar.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background:#dfe6ee; }\n\nion-searchbar {\n  background-color: #dfe6ee; }\n\nion-list {\n  background-color: #dfe6ee;\n  color: #1F4D9A; }\n\n.toolbarppl {\n  --background:#dfe6ee;\n  color: #1F4D9A; }\n\n.fondoitem {\n  --background:#dfe6ee; }\n\n.btnGris {\n  --background:#575756;\n  margin-top: 10%;\n  margin-bottom: 5%;\n  width: 60%;\n  font-size: 1em;\n  margin-left: auto;\n  margin-right: auto; }\n\n.btnAzul {\n  --background:#1F4D9A;\n  margin-top: 10%;\n  margin-bottom: 5%;\n  width: 60%;\n  font-size: 1em;\n  margin-left: auto;\n  margin-right: auto; }\n\n.title_card {\n  font-size: 0.9em;\n  text-align: center; }\n\n.content_card {\n  color: #575756; }\n\n.text_aviso h3 {\n  font-size: 0.7em;\n  text-align: center;\n  color: #575756; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rcHJvL0Rlc2t0b3AvcHJveWVjdG9zL2Rlc3Rpbm9hcnRlX2FwcC9mcm9udC1pb25pYy9zcmMvYXBwL3BhZ2VzL2J1c2Nhci9idXNjYXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQWEsRUFDaEI7O0FBRUQ7RUFDSSwwQkFBeUIsRUFDNUI7O0FBRUQ7RUFDSSwwQkFBeUI7RUFDekIsZUFBYyxFQUNqQjs7QUFFRDtFQUNJLHFCQUFhO0VBQ2IsZUFBYyxFQUNqQjs7QUFFRDtFQUNFLHFCQUFhLEVBQ2Q7O0FBRUQ7RUFDSSxxQkFBYTtFQUNiLGdCQUFlO0VBQ2Ysa0JBQWlCO0VBQ2pCLFdBQVU7RUFDVixlQUFjO0VBQ2Qsa0JBQWlCO0VBQ2pCLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLHFCQUFhO0VBQ2IsZ0JBQWU7RUFDZixrQkFBaUI7RUFDakIsV0FBVTtFQUNWLGVBQWM7RUFDZCxrQkFBaUI7RUFDakIsbUJBQWtCLEVBQ3JCOztBQUdEO0VBQ0ksaUJBQWdCO0VBQ2hCLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLGVBQWEsRUFDaEI7O0FBRUQ7RUFDSSxpQkFBZ0I7RUFDaEIsbUJBQWtCO0VBQ2xCLGVBQWEsRUFDaEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9idXNjYXIvYnVzY2FyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiNkZmU2ZWU7XHJcbn1cclxuXHJcbmlvbi1zZWFyY2hiYXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZlNmVlO1xyXG59XHJcblxyXG5pb24tbGlzdHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZmU2ZWU7XHJcbiAgICBjb2xvcjogIzFGNEQ5QTtcclxufVxyXG5cclxuLnRvb2xiYXJwcGx7XHJcbiAgICAtLWJhY2tncm91bmQ6I2RmZTZlZTtcclxuICAgIGNvbG9yOiAjMUY0RDlBO1xyXG59XHJcblxyXG4uZm9uZG9pdGVte1xyXG4gIC0tYmFja2dyb3VuZDojZGZlNmVlO1xyXG59XHJcblxyXG4uYnRuR3Jpc3tcclxuICAgIC0tYmFja2dyb3VuZDojNTc1NzU2O1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLmJ0bkF6dWx7XHJcbiAgICAtLWJhY2tncm91bmQ6IzFGNEQ5QTtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDUlO1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcblxyXG4udGl0bGVfY2FyZHtcclxuICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb250ZW50X2NhcmR7XHJcbiAgICBjb2xvcjojNTc1NzU2O1xyXG59XHJcblxyXG4udGV4dF9hdmlzbyBoM3tcclxuICAgIGZvbnQtc2l6ZTogMC43ZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjojNTc1NzU2O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/buscar/buscar.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/buscar/buscar.page.ts ***!
  \*********************************************/
/*! exports provided: BuscarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuscarPage", function() { return BuscarPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_user_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/user-data.service */ "./src/app/service/user-data.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BuscarPage = /** @class */ (function () {
    function BuscarPage(router, serviceRegister, route, storage, iab) {
        this.router = router;
        this.serviceRegister = serviceRegister;
        this.route = route;
        this.storage = storage;
        this.iab = iab;
        this.textoBuscar = '';
        this.all_itinerarios = null;
        this.data = null;
        this.response = null;
        this.btnColor = null;
        this.btnText = null;
        this.btnActivo = null;
        this.btnLink = null;
        this.description = null;
        this.userId = null;
        this.showSearch = null;
        this.my_destines = null;
        this.list_disponibles = [];
        this.isLoading = false;
        this.productBuy = false;
    }
    BuscarPage.prototype.ngOnInit = function () {
        var _this = this;
        if (this.route.snapshot.data['special']) {
            this.data = this.route.snapshot.data['special'];
            if (this.data != null) {
                this.showSearch = false;
                this.serviceRegister.present('Carga datos..');
                this.serviceRegister.getUserId()
                    .then(function (user) {
                    if (user != null) {
                        _this.serviceRegister.getAllData()
                            .then(function (destinos) {
                            if (destinos != null) {
                                _this.my_destines = destinos;
                                if (_this.all_itinerarios == null || _this.all_itinerarios.length == 0) {
                                    _this.getListGuiasCompradas(_this.my_destines);
                                    _this.getAllItinerario(user);
                                    _this.response = JSON.parse(_this.data.data)[0];
                                    if (_this.list_disponibles.includes(Number(_this.response.id))) {
                                        _this.btnColor = 'btnGris';
                                        _this.description = 'Actualmente tienes comprado el producto';
                                        _this.btnActivo = true;
                                        _this.btnText = 'COMPRADO';
                                    }
                                    else {
                                        _this.btnColor = 'btnAzul';
                                        _this.description = 'Actualmente no tienes comprado el producto';
                                        _this.btnActivo = false;
                                        _this.btnText = 'COMPRAR';
                                    }
                                    _this.serviceRegister.dismiss();
                                }
                            }
                        });
                    }
                });
            }
        }
        else {
            this.showSearch = true;
            if (this.userId == null) {
                this.serviceRegister.present('Listado de guías..');
                this.serviceRegister.getUserId()
                    .then(function (data) {
                    _this.userId = data;
                    _this.getAllDataUserColor(_this.userId);
                    _this.serviceRegister.dismiss();
                })
                    .catch(function (error) {
                    console.log('Error al obtener el usuario');
                });
            }
            else {
                this.getAllDataUserColor(this.userId);
            }
        }
    };
    BuscarPage.prototype.buscar = function (event) {
        this.showSearch = true;
        this.textoBuscar = event.detail.value;
        if (this.userId != null) {
            this.getAllDataUserColor(this.userId);
        }
    };
    BuscarPage.prototype.clickedStar = function () {
        this.router.navigate(['/tabs/inicio']);
    };
    BuscarPage.prototype.getAllDataUserColor = function (userID) {
        var _this = this;
        this.serviceRegister.getAllData()
            .then(function (res) {
            if (res != null) {
                _this.my_destines = res;
                if (_this.all_itinerarios == null || _this.all_itinerarios.length == 0) {
                    _this.getListGuiasCompradas(_this.my_destines);
                    _this.getAllItinerario(userID);
                }
            }
            else {
                _this.serviceRegister.present('Cargando datos..');
                _this.serviceRegister.getDataMyDestines(userID)
                    .then(function (data) {
                    if (data != null) {
                        _this.my_destines = JSON.parse(data.data);
                        if (_this.all_itinerarios == null || _this.all_itinerarios.length == 0) {
                            _this.getListGuiasCompradas(_this.my_destines);
                            _this.getAllItinerario(userID);
                        }
                        _this.storage.set('mydestines', _this.my_destines);
                        _this.serviceRegister.dismiss();
                    }
                })
                    .catch(function (error) { console.log('Error al obtener los datos.'); });
            }
        });
    };
    BuscarPage.prototype.getAllItinerario = function (userID) {
        var _this = this;
        this.serviceRegister.getBuscarItinerario(userID)
            .then(function (data) {
            _this.all_itinerarios = JSON.parse(data.data);
            _this.all_itinerarios.forEach(function (iti) {
                if (_this.list_disponibles.includes(Number(iti.id))) {
                    iti.color = '#575756'; //GRIS
                }
                else {
                    iti.color = '#1F4D9A'; //AZUL
                }
            });
        })
            .catch(function (error) {
            console.log(error.error);
        });
    };
    BuscarPage.prototype.getListGuiasCompradas = function (lista) {
        var _this = this;
        if (lista != null) {
            if (lista.monumento != null && lista.monumento.length > 0) {
                lista.monumento.forEach(function (nivel1) {
                    if (!_this.list_disponibles.includes(nivel1.idguia)) {
                        _this.list_disponibles.push(nivel1.idguia);
                    }
                });
            }
            if (lista.monumento_comp != null && lista.monumento_comp.length > 0) {
                lista.monumento_comp.forEach(function (nivel1) {
                    if (!_this.list_disponibles.includes(nivel1.idguia)) {
                        _this.list_disponibles.push(nivel1.idguia);
                    }
                });
            }
            if (lista.dia != null && lista.dia.length > 0) {
                lista.dia.forEach(function (nivel1) {
                    if (!_this.list_disponibles.includes(nivel1.idguia)) {
                        _this.list_disponibles.push(nivel1.idguia);
                    }
                });
            }
            if (lista.itinerario != null && lista.itinerario.length > 0) {
                lista.itinerario.forEach(function (nivel1) {
                    if (!_this.list_disponibles.includes(nivel1.idguia)) {
                        _this.list_disponibles.push(nivel1.idguia);
                    }
                });
            }
            console.log(this.list_disponibles);
        }
    };
    BuscarPage.prototype.buyToWeb = function (id_woo) {
        var _this = this;
        this.serviceRegister.postUserToken()
            .then(function (data) {
            if (data != null) {
                var res = JSON.parse(data.data);
                _this.serviceRegister.goToProductToWeb(res.token, id_woo)
                    .then(function (res) {
                    if (res != null) {
                        var result = JSON.parse(res.data);
                        _this.iab.create(result.permalink, '_system').show();
                    }
                });
            }
        });
    };
    BuscarPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-buscar',
            template: __webpack_require__(/*! ./buscar.page.html */ "./src/app/pages/buscar/buscar.page.html"),
            styles: [__webpack_require__(/*! ./buscar.page.scss */ "./src/app/pages/buscar/buscar.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _service_user_data_service__WEBPACK_IMPORTED_MODULE_2__["UserDataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
            _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__["InAppBrowser"]])
    ], BuscarPage);
    return BuscarPage;
}());



/***/ })

}]);
//# sourceMappingURL=buscar-buscar-module.js.map