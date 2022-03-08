(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-detalles-detalles-module"],{

/***/ "./src/app/pages/detalles/detalles.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/detalles/detalles.module.ts ***!
  \***************************************************/
/*! exports provided: DetallesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetallesPageModule", function() { return DetallesPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _detalles_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detalles.page */ "./src/app/pages/detalles/detalles.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _detalles_page__WEBPACK_IMPORTED_MODULE_5__["DetallesPage"]
    }
];
var DetallesPageModule = /** @class */ (function () {
    function DetallesPageModule() {
    }
    DetallesPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_detalles_page__WEBPACK_IMPORTED_MODULE_5__["DetallesPage"]]
        })
    ], DetallesPageModule);
    return DetallesPageModule;
}());



/***/ }),

/***/ "./src/app/pages/detalles/detalles.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/detalles/detalles.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar class=\"toolbarppl\">   \n      <ion-buttons slot=\"start\">\n          <ion-button (click)=\"clickedStar()\">\n              <ion-icon slot=\"icon-only\" src=\"/assets/img/menu_atras.svg\"></ion-icon>\n          </ion-button>\n      </ion-buttons> \n      <ion-grid style=\"text-align: center;\">\n          <ion-row>\n              <ion-col *ngFor=\"let item_det of menu_guia_aux\">\n                <div>\n                    <ion-icon style=\"width: 50px; height: 40px;\" [src]=\"item_det.icon\" [routerLink]=\"item_det.redirectTo.concat('/').concat(idguia).concat('/').concat(iditinerario)\"></ion-icon>\n                </div>\n              </ion-col>\n          </ion-row>\n      </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding fondoppal\">\n    <div style=\"text-align:center; font-size: 1.4em; color:#1F4D9A; width: 100%;\">\n        <ion-label class=\"ion-text-uppercase\" *ngIf=\"titleaudio != null\">\n            {{titleaudio}}\n        </ion-label>\n    </div>\n    <div *ngIf=\"detalle_monumento != null\">\n        <div *ngFor=\"let item of detalle_monumento\">\n            <img *ngIf=\"item.tipo == 2\" [src]=\"item.contenido\"/>\n            <br>\n            <ion-text *ngIf=\"item.tipo == 1\" [innerHTML]=\"sanitizer.bypassSecurityTrustHtml(item.contenido)\"></ion-text>\n            <br>\n        </div>\n    </div>\n    <ion-fab *ngIf=\"detalle_monumento != null\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"setSizeText(detalle_monumento)\">\n        <ion-fab-button>\n          <ion-icon src=\"/assets/img/text-outline.svg\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n    <div *ngIf=\"detalle != null\">\n        <div *ngFor=\"let item of detalle\">\n            <img *ngIf=\"item.id_tipo_parte == 2\" [src]=\"item.contenido\"/>\n            <br>\n            <ion-text *ngIf=\"item.id_tipo_parte == 1\" [innerHTML]=\"sanitizer.bypassSecurityTrustHtml(item.contenido)\"></ion-text>\n            <br>\n        </div>\n    </div>\n    <ion-fab *ngIf=\"detalle != null\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"setSizeText(detalle)\">\n        <ion-fab-button>\n          <ion-icon src=\"/assets/img/text-outline.svg\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n</ion-content>\n<ion-footer>\n    <ion-toolbar class=\"toolbarppl\">\n        <ion-item>\n            <ion-icon *ngIf=\"showPlayAudio\" slot=\"start\" class=\"color_play_icon\" src=\"/assets/img/audio/play.svg\" (click)=\"playAudio()\"></ion-icon>\n            <ion-icon *ngIf=\"!showPlayAudio\" slot=\"start\" class=\"color_play_icon\" (click)=\"pause()\" src=\"/assets/img/audio/pause.svg\"></ion-icon>\n            <ion-title class=\"ion-text-uppercase\">{{titleaudio}}</ion-title>\n        </ion-item>\n        \n    </ion-toolbar>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/pages/detalles/detalles.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/detalles/detalles.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toolbarppl {\n  --background:#dfe6ee; }\n\n.fondoppal {\n  --background:#dfe6ee; }\n\n.color_play_icon {\n  color: #39B1C0;\n  width: 25px;\n  height: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rcHJvL0Rlc2t0b3AvcHJveWVjdG9zL2Rlc3Rpbm9hcnRlX2FwcC9mcm9udC1pb25pYy9zcmMvYXBwL3BhZ2VzL2RldGFsbGVzL2RldGFsbGVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFhLEVBQ2hCOztBQUVEO0VBQ0kscUJBQWEsRUFDaEI7O0FBRUQ7RUFDSSxlQUFhO0VBQ2IsWUFBVztFQUNYLGFBQVksRUFDZiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RldGFsbGVzL2RldGFsbGVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b29sYmFycHBse1xyXG4gICAgLS1iYWNrZ3JvdW5kOiNkZmU2ZWU7XHJcbn1cclxuXHJcbi5mb25kb3BwYWx7XHJcbiAgICAtLWJhY2tncm91bmQ6I2RmZTZlZTtcclxufVxyXG5cclxuLmNvbG9yX3BsYXlfaWNvbntcclxuICAgIGNvbG9yOiMzOUIxQzA7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGhlaWdodDogMzBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/detalles/detalles.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/detalles/detalles.page.ts ***!
  \*************************************************/
/*! exports provided: DetallesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetallesPage", function() { return DetallesPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_user_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/user-data.service */ "./src/app/service/user-data.service.ts");
/* harmony import */ var _service_menu_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/menu-data.service */ "./src/app/service/menu-data.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _providers_audio_audio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../providers/audio/audio */ "./src/app/providers/audio/audio.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var DetallesPage = /** @class */ (function () {
    function DetallesPage(dataService, router, serviceRegister, route, sanitizer, alertController, audioProvider, storage) {
        this.dataService = dataService;
        this.router = router;
        this.serviceRegister = serviceRegister;
        this.route = route;
        this.sanitizer = sanitizer;
        this.alertController = alertController;
        this.audioProvider = audioProvider;
        this.storage = storage;
        this.idguia = null;
        this.iditinerario = null;
        this.detalle_monumento = null;
        this.detalle = null;
        this.idparte = null;
        this.mydestines = null;
        this.titleaudio = null;
        this.showPlayAudio = null;
        this.menu_guia_aux = null;
        this.lookFor = null;
        this.text_size = 16;
        this.datos = [];
        this.cambiado = null;
        this.textDefaultSize = 'font-size: ';
        this.textDefaultLineHeigth = 'line-height: ';
        this.arrayDefaultSize = ['9pt', '12px', '10pt', '12pt', '11pt']; //web destinoarte
    }
    DetallesPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.menu_guia_aux = new Array();
        this.detalles = this.dataService.getMenuGuia();
        this.serviceRegister.getModoAudio()
            .then(function (modoaudio) {
            if (modoaudio != null) {
                if (modoaudio == 'reproduciendo') {
                    _this.showPlayAudio = false;
                }
                if (modoaudio == 'pause') {
                    _this.showPlayAudio = true;
                }
            }
        });
        this.route.params.subscribe(function (params) {
            if (params['id']) {
                _this.idguia = parseInt(params['id']);
                _this.iditinerario = parseInt(params['iditi']);
                _this.serviceRegister.getTitleAudio()
                    .then(function (titleaudio) {
                    if (titleaudio != null) {
                        _this.titleaudio = titleaudio;
                    }
                });
                if (_this.mydestines == null) {
                    _this.serviceRegister.present('Obteniendo datos de los detalles..');
                    _this.serviceRegister.getAllData()
                        .then(function (data) {
                        _this.serviceRegister.dismiss();
                        _this.mydestines = data;
                        _this.detalles.subscribe(function (res) {
                            _this.menu_guia_aux = res;
                            if (_this.mydestines != null) {
                                _this.getShowBtnHeader(_this.mydestines, _this.idguia, _this.iditinerario);
                            }
                            //console.log("BtnDetailsShow : "+this.menu_guia_aux);
                        });
                    })
                        .catch(function (error) {
                        _this.serviceRegister.dismiss();
                        console.log('Error al obtener los datos');
                    });
                }
                else {
                    _this.detalles.subscribe(function (res) {
                        _this.menu_guia_aux = res;
                        _this.getShowBtnHeader(_this.mydestines, _this.idguia, _this.iditinerario);
                    });
                }
            }
        });
    };
    DetallesPage.prototype.getShowBtnHeader = function (mydestines, idguia, iditinerario) {
        var _this = this;
        this.lookFor = false;
        if (mydestines.monumento != null && mydestines.monumento.length > 0) {
            mydestines.monumento.forEach(function (element) {
                if (idguia == element.idguia) {
                    if (iditinerario == 0) {
                        if (!_this.lookFor) {
                            if (element.plano == null) {
                                _this.elimina({ name: "planta" });
                            }
                            _this.showBtnDetails(element);
                            _this.detalle_monumento = element.detalle_monumento;
                            _this.fontActual(_this.detalle_monumento);
                        }
                        _this.lookFor = true;
                    }
                    else {
                        if (element.partes != null && element.partes.length > 0 && _this.thisIsArray(element.partes)) {
                            element.partes.forEach(function (parte) {
                                if (idguia == parseInt(parte.id_itinerario) && iditinerario == parseInt(parte.idguiapartes)) {
                                    if (!_this.lookFor) {
                                        _this.showBtnDetails(parte);
                                        _this.detalle = parte.detalles;
                                        _this.fontActual(_this.detalle);
                                    }
                                    _this.lookFor = true;
                                }
                            });
                        }
                    }
                }
            });
        }
        if (mydestines.monumento_comp != null && mydestines.monumento_comp.length > 0) {
            mydestines.monumento_comp.forEach(function (element) {
                if (iditinerario == 0) {
                    if (!_this.lookFor) {
                        if (element.plano == null && idguia == element.idguia) {
                            _this.elimina({ name: "planta" });
                        }
                        _this.showBtnDetails(element);
                        if (_this.detalle_monumento == null) {
                            _this.detalle_monumento = element.detalle_monumento;
                            _this.fontActual(_this.detalle_monumento);
                        }
                    }
                    _this.lookFor = true;
                }
                else {
                    if (_this.thisIsArray(element.partes) && element.partes != null && element.partes.length > 0) {
                        element.partes.forEach(function (parte) {
                            if (idguia == parseInt(parte.idguiapartes) && iditinerario == parseInt(parte.id_itinerario)) {
                                if (!_this.lookFor) {
                                    _this.showBtnDetails(parte);
                                    _this.detalle = parte.detalles;
                                    _this.fontActual(_this.detalle);
                                }
                                _this.lookFor = true;
                            }
                            if (_this.thisIsArray(parte.partes) && parte.partes != null && parte.partes.length > 0) {
                                parte.partes.forEach(function (parte) {
                                    if (idguia == parseInt(parte.idguiapartes) && iditinerario == parseInt(parte.id_itinerario)) {
                                        if (!_this.lookFor) {
                                            _this.showBtnDetails(parte);
                                            _this.detalle = parte.detalles;
                                            _this.fontActual(_this.detalle);
                                        }
                                        _this.lookFor = true;
                                    }
                                });
                            }
                        });
                    }
                }
                //}
            });
        }
        if (mydestines.dia != null && mydestines.dia.length > 0) {
            mydestines.dia.forEach(function (element) {
                if (iditinerario == 0) {
                    if (!_this.lookFor) {
                        _this.showBtnDetails(element);
                        if (_this.detalle_monumento == null && _this.thisIsArray(element.detalle_monumento)) {
                            _this.detalle_monumento = element.detalle_monumento;
                            _this.fontActual(_this.detalle_monumento);
                        }
                    }
                    _this.lookFor = true;
                }
                else {
                    if (_this.thisIsArray(element.partes) && element.partes != null && element.partes.length > 0) {
                        element.partes.forEach(function (parte) {
                            if (idguia == parseInt(parte.idguiapartes) && iditinerario == parseInt(parte.id_itinerario)) {
                                if (!_this.lookFor) {
                                    _this.showBtnDetails(parte);
                                    if (_this.detalle == null && _this.thisIsArray(parte.detalles)) {
                                        _this.detalle = parte.detalles;
                                        _this.fontActual(_this.detalle);
                                    }
                                }
                                _this.lookFor = true;
                            }
                            if (_this.thisIsArray(parte.partes) && parte.partes != null && parte.partes.length > 0) {
                                parte.partes.forEach(function (parte) {
                                    if (idguia == parseInt(parte.idguiapartes) && iditinerario == parseInt(parte.id_itinerario)) {
                                        if (!_this.lookFor) {
                                            _this.showBtnDetails(parte);
                                            if (_this.detalle == null && _this.thisIsArray(parte.detalles)) {
                                                _this.detalle = parte.detalles;
                                                _this.fontActual(_this.detalle);
                                            }
                                        }
                                        _this.lookFor = true;
                                    }
                                    if (_this.thisIsArray(parte.partes) && parte.partes != null && parte.partes.length > 0) {
                                        parte.partes.forEach(function (parte) {
                                            if (idguia == parseInt(parte.idguiapartes) && iditinerario == parseInt(parte.id_itinerario)) {
                                                if (!_this.lookFor) {
                                                    _this.showBtnDetails(parte);
                                                    if (_this.detalle == null && _this.thisIsArray(parte.detalles)) {
                                                        _this.detalle = parte.detalles;
                                                        _this.fontActual(_this.detalle);
                                                    }
                                                }
                                                _this.lookFor = true;
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    }
                }
            });
        }
        if (mydestines.itinerario != null && mydestines.itinerario.length > 0) {
            mydestines.itinerario.forEach(function (element) {
                if (iditinerario == 0) {
                    if (!_this.lookFor) {
                        _this.showBtnDetails(element);
                        if (_this.detalle_monumento == null && _this.thisIsArray(element.detalle_monumento)) {
                            _this.detalle_monumento = element.detalle_monumento;
                            _this.fontActual(_this.detalle_monumento);
                        }
                    }
                    _this.lookFor = true;
                }
                else {
                    if (_this.thisIsArray(element.partes) && element.partes != null && element.partes.length > 0) {
                        element.partes.forEach(function (parte) {
                            if (idguia == parseInt(parte.idguiapartes) && iditinerario == parseInt(parte.id_itinerario)) {
                                _this.showBtnDetails(parte);
                                if (!_this.lookFor) {
                                    if (_this.detalle == null && _this.thisIsArray(parte.detalles)) {
                                        _this.detalle = parte.detalles;
                                        _this.fontActual(_this.detalle);
                                    }
                                }
                                _this.lookFor = true;
                            }
                            if (_this.thisIsArray(parte.partes) && parte.partes != null && parte.partes.length > 0) {
                                parte.partes.forEach(function (parte) {
                                    if (idguia == parseInt(parte.idguiapartes) && iditinerario == parseInt(parte.id_itinerario)) {
                                        if (!_this.lookFor) {
                                            _this.showBtnDetails(parte);
                                            if (_this.detalle == null && _this.thisIsArray(parte.detalles)) {
                                                _this.detalle = parte.detalles;
                                                _this.fontActual(_this.detalle);
                                            }
                                        }
                                        _this.lookFor = true;
                                    }
                                    if (_this.thisIsArray(parte.partes) && parte.partes != null && parte.partes.length > 0) {
                                        parte.partes.forEach(function (parte) {
                                            if (idguia == parseInt(parte.idguiapartes) && iditinerario == parseInt(parte.id_itinerario)) {
                                                if (!_this.lookFor) {
                                                    _this.showBtnDetails(parte);
                                                    if (_this.detalle == null && _this.thisIsArray(parte.detalles)) {
                                                        _this.detalle = parte.detalles;
                                                        _this.fontActual(_this.detalle);
                                                    }
                                                }
                                                _this.lookFor = true;
                                            }
                                            if (_this.thisIsArray(parte.partes) && parte.partes != null && parte.partes.length > 0) {
                                                parte.partes.forEach(function (parte) {
                                                    if (idguia == parseInt(parte.idguiapartes) && iditinerario == parseInt(parte.id_itinerario)) {
                                                        if (!_this.lookFor) {
                                                            _this.showBtnDetails(parte);
                                                            if (_this.detalle == null && _this.thisIsArray(parte.detalles)) {
                                                                _this.detalle = parte.detalles;
                                                                _this.fontActual(_this.detalle);
                                                            }
                                                        }
                                                        _this.lookFor = true;
                                                    }
                                                });
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    }
                }
            });
        }
    };
    DetallesPage.prototype.showBtnDetails = function (element) {
        if (element.mapa != null && element.mapa.length == 0 || element.mapa == null) {
            this.elimina({ name: 'mapa' });
        }
        if (element.plano == null) {
            this.elimina({ name: 'planta' });
        }
        if (element.detalle_monumento != undefined) {
            if (element.detalle_monumento != null && element.detalle_monumento.length == 0 || element.detalle_monumento == null) {
                this.elimina({ name: 'textos' });
            }
        }
        if (element.detalles != undefined) {
            if (element.detalles != null && element.detalles.length == 0 || element.detalles == null) {
                this.elimina({ name: 'textos' });
            }
        }
        if (element.infografia != null && element.infografia.length == 0 || element.infografia == null) {
            this.elimina({ name: 'infografias' });
        }
    };
    DetallesPage.prototype.thisIsArray = function ($array) {
        return Array.isArray($array) ? true : false;
    };
    DetallesPage.prototype.ngOnInit = function () {
    };
    DetallesPage.prototype.setSizeText = function (contenido) {
        this.presentAlertPrompt(contenido);
    };
    DetallesPage.prototype.elimina = function (elem) {
        this.menu_guia_aux = this.menu_guia_aux.filter(function (e) { return e.name !== elem.name; });
    };
    DetallesPage.prototype.presentAlertPrompt = function (contenido) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.detalle = contenido;
                        return [4 /*yield*/, this.alertController.create({
                                cssClass: 'my-custom-class',
                                header: 'Tamaño letra',
                                inputs: [
                                    {
                                        name: 'peque',
                                        type: 'radio',
                                        label: 'Pequeño',
                                        value: 'min',
                                        handler: function () {
                                            console.log('Size min');
                                            _this.text_size = '11pt';
                                        },
                                        checked: true
                                    },
                                    {
                                        name: 'medio',
                                        type: 'radio',
                                        label: 'Medio',
                                        value: 'med',
                                        handler: function () {
                                            console.log('Size medio');
                                            _this.text_size = '15pt';
                                        }
                                    },
                                    {
                                        name: 'maximo',
                                        type: 'radio',
                                        label: 'Máximo',
                                        value: 'max',
                                        handler: function () {
                                            console.log('Size máximo');
                                            _this.text_size = '21pt';
                                        }
                                    }
                                ],
                                buttons: [
                                    {
                                        text: 'NO',
                                        role: 'cancel',
                                        cssClass: 'secondary',
                                        handler: function () {
                                            console.log('Confirm Cancel');
                                        }
                                    }, {
                                        text: 'SI',
                                        handler: function () {
                                            console.log('Confirm Ok');
                                            setTimeout(function () {
                                                _this.datos = [];
                                                if (_this.detalle !== undefined && _this.detalle != null && _this.thisIsArray(_this.detalle)) {
                                                    var count_1 = 0;
                                                    _this.cambiado = false;
                                                    var res1_1, res2_1, res3_1, res4_1 = null;
                                                    _this.serviceRegister.getFontSize()
                                                        .then(function (font) {
                                                        if (font != null) {
                                                            _this.detalle.forEach(function (text) {
                                                                if (text.tipo == 1 || text.id_tipo_parte == 1) {
                                                                    res1_1 = text.contenido.replaceAll(font, _this.text_size);
                                                                    _this.detalle[count_1].contenido = res1_1;
                                                                    _this.storage.set('fontSize', _this.text_size);
                                                                }
                                                                count_1++;
                                                            });
                                                        }
                                                        else {
                                                            _this.detalle.forEach(function (text) {
                                                                if (text.tipo == 1 || text.id_tipo_parte == 1) {
                                                                    res1_1 = text.contenido.replaceAll(_this.textDefaultSize.concat(_this.arrayDefaultSize[0]), _this.textDefaultSize.concat(_this.text_size));
                                                                    res2_1 = res1_1.replaceAll(_this.textDefaultSize.concat(_this.arrayDefaultSize[1]), _this.textDefaultSize.concat(_this.text_size));
                                                                    res4_1 = res2_1.replaceAll(_this.textDefaultSize.concat(_this.arrayDefaultSize[4]), _this.textDefaultSize.concat(_this.text_size));
                                                                    res3_1 = res4_1.replaceAll(_this.textDefaultLineHeigth.concat(_this.arrayDefaultSize[3]), _this.textDefaultLineHeigth.concat('18pt'));
                                                                    _this.detalle[count_1].contenido = res3_1;
                                                                    _this.storage.set('fontSize', _this.text_size);
                                                                }
                                                                count_1++;
                                                            });
                                                        }
                                                    });
                                                }
                                            }, 100);
                                        }
                                    }
                                ]
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DetallesPage.prototype.playAudio = function () {
        this.audioProvider.play();
        this.storage.set('modoAudio', 'reproduciendo');
        this.showPlayAudio = false;
    };
    DetallesPage.prototype.pause = function () {
        this.audioProvider.pause();
        this.storage.set('modoAudio', 'pause');
        this.showPlayAudio = true;
    };
    DetallesPage.prototype.fontActual = function (detalles) {
        var _this = this;
        var res1, res2, res3, res4 = null;
        this.serviceRegister.getFontSize()
            .then(function (size) {
            if (size != null) {
                var count_2 = 0;
                detalles.forEach(function (texto) {
                    if (texto.tipo == 1 || texto.id_tipo_parte == 1) {
                        res1 = texto.contenido.replaceAll(_this.textDefaultSize.concat(_this.arrayDefaultSize[0]), _this.textDefaultSize.concat(size));
                        res2 = res1.replaceAll(_this.textDefaultSize.concat(_this.arrayDefaultSize[1]), _this.textDefaultSize.concat(size));
                        res4 = res2.replaceAll(_this.textDefaultSize.concat(_this.arrayDefaultSize[4]), _this.textDefaultSize.concat(size));
                        res3 = res4.replaceAll(_this.textDefaultLineHeigth.concat(_this.arrayDefaultSize[3]), _this.textDefaultLineHeigth.concat('18pt'));
                        detalles[count_2].contenido = res3;
                    }
                    count_2++;
                });
            }
        });
    };
    DetallesPage.prototype.clickedStar = function () {
        var showBackMisDestinos = this.showPlayAudio;
        var navigationExtras = {
            queryParams: {
                audio: JSON.stringify(showBackMisDestinos)
            }
        };
        this.router.navigate(['/tabs/mis-destinos/'.concat(this.idguia).concat('/').concat(this.iditinerario)], navigationExtras);
    };
    DetallesPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-detalles',
            template: __webpack_require__(/*! ./detalles.page.html */ "./src/app/pages/detalles/detalles.page.html"),
            styles: [__webpack_require__(/*! ./detalles.page.scss */ "./src/app/pages/detalles/detalles.page.scss")],
        }),
        __metadata("design:paramtypes", [_service_menu_data_service__WEBPACK_IMPORTED_MODULE_3__["MenuDataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _service_user_data_service__WEBPACK_IMPORTED_MODULE_2__["UserDataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
            _providers_audio_audio__WEBPACK_IMPORTED_MODULE_7__["AudioProvider"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]])
    ], DetallesPage);
    return DetallesPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-detalles-detalles-module.js.map