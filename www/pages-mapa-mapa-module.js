(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-mapa-mapa-module"],{

/***/ "./src/app/pages/mapa/mapa.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/mapa/mapa.module.ts ***!
  \*******************************************/
/*! exports provided: MapaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapaPageModule", function() { return MapaPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _mapa_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mapa.page */ "./src/app/pages/mapa/mapa.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _mapa_page__WEBPACK_IMPORTED_MODULE_5__["MapaPage"]
    }
];
var MapaPageModule = /** @class */ (function () {
    function MapaPageModule() {
    }
    MapaPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_mapa_page__WEBPACK_IMPORTED_MODULE_5__["MapaPage"]]
        })
    ], MapaPageModule);
    return MapaPageModule;
}());



/***/ }),

/***/ "./src/app/pages/mapa/mapa.page.html":
/*!*******************************************!*\
  !*** ./src/app/pages/mapa/mapa.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header id=\"header\" style=\"display: block;\" class=\"ion-no-border\" translucent>\n  <ion-toolbar class=\"toolbarppl\">   \n      <ion-buttons slot=\"start\">\n          <ion-button (click)=\"clickedStar()\">\n              <ion-icon slot=\"icon-only\" src=\"/assets/img/menu_atras.svg\"></ion-icon>\n          </ion-button>\n      </ion-buttons> \n      <ion-grid>\n        <div *ngFor=\"let item of response_map; first as isFirst\">\n            <div *ngIf=\"isFirst\">\n                <ion-row *ngIf=\"item.tipo == 'mon' || item.tipo == 'monc'\" style=\"text-align: center;\">\n                    <ion-col *ngFor=\"let item_map of menu_guia_aux\">\n                    <div>\n                        <ion-icon style=\"width: 50px; height: 40px;\" [src]=\"item_map.icon\" [routerLink]=\"item_map.redirectTo.concat('/').concat(idguia).concat('/').concat(iditinerario)\"></ion-icon>\n                    </div>\n                    </ion-col>\n                </ion-row>\n            </div>\n        </div>\n      </ion-grid>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"fondoppal\">\n    <ion-slides *ngIf=\"mapa_img\" [options]=\"imgOpt\" zoom>\n        <ion-slide>\n            <div class=\"swiper-zoom-container\">\n                <img [src]=\"mapa_img_url\"/>\n            </div>\n        </ion-slide>\n    </ion-slides>\n    <div *ngIf=\"!mapa_img\">      \n        <ion-list *ngFor=\"let item of response_map\">\n            <ion-item (click)=\"showPhoto(item.mapa)\">\n                <ion-card style=\"width:100%; background-color:#ffffff;\">\n                    <img style=\"height: 270px;\" [src]=\"item.mapa\"/>\n                    <ion-card-header>\n                      <ion-card-title class=\"title_card\"><h3 style=\"font-size: 1em;\">{{item.titulo}}</h3></ion-card-title>\n                    </ion-card-header>\n                </ion-card>\n            </ion-item>    \n        </ion-list>\n    </div>\n</ion-content>\n\n<ion-footer id=\"footer\" style=\"display: none;\">\n    <!--\n    <ion-toolbar class=\"toolbarppl\">\n        <ion-item>\n            <ion-icon *ngIf=\"showPlayAudio\" slot=\"start\" class=\"color_play_icon\" src=\"/assets/img/audio/play.svg\" (click)=\"playAudio()\"></ion-icon>\n            <ion-icon *ngIf=\"!showPlayAudio\" slot=\"start\" class=\"color_play_icon\" (click)=\"pause()\" src=\"/assets/img/audio/pause.svg\"></ion-icon>\n            <ion-title class=\"ion-text-uppercase\">{{titleaudio}}</ion-title>\n        </ion-item> \n    </ion-toolbar>\n    -->\n</ion-footer>\n\n\n"

/***/ }),

/***/ "./src/app/pages/mapa/mapa.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/mapa/mapa.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toolbarppl {\n  --background:#dfe6ee; }\n\n.fondoppal {\n  --background:#dfe6ee; }\n\n.color_play_icon {\n  color: #39B1C0;\n  width: 25px;\n  height: 30px; }\n\n.title_card {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rcHJvL0Rlc2t0b3AvcHJveWVjdG9zL2Rlc3Rpbm9hcnRlX2FwcC9mcm9udC1pb25pYy9zcmMvYXBwL3BhZ2VzL21hcGEvbWFwYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBYSxFQUNoQjs7QUFFRDtFQUNJLHFCQUFhLEVBQ2hCOztBQUVEO0VBQ0ksZUFBYTtFQUNiLFlBQVc7RUFDWCxhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSxtQkFBa0IsRUFDckIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tYXBhL21hcGEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvb2xiYXJwcGx7XHJcbiAgICAtLWJhY2tncm91bmQ6I2RmZTZlZTtcclxufVxyXG5cclxuLmZvbmRvcHBhbHtcclxuICAgIC0tYmFja2dyb3VuZDojZGZlNmVlO1xyXG59XHJcblxyXG4uY29sb3JfcGxheV9pY29ue1xyXG4gICAgY29sb3I6IzM5QjFDMDtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4udGl0bGVfY2FyZHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/mapa/mapa.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/mapa/mapa.page.ts ***!
  \*****************************************/
/*! exports provided: MapaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapaPage", function() { return MapaPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_menu_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/menu-data.service */ "./src/app/service/menu-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_user_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/user-data.service */ "./src/app/service/user-data.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _providers_audio_audio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../providers/audio/audio */ "./src/app/providers/audio/audio.ts");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/ngx/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MapaPage = /** @class */ (function () {
    function MapaPage(dataService, router, serviceRegister, route, audioProvider, storage, screenOrientation) {
        this.dataService = dataService;
        this.router = router;
        this.serviceRegister = serviceRegister;
        this.route = route;
        this.audioProvider = audioProvider;
        this.storage = storage;
        this.screenOrientation = screenOrientation;
        this.idguia = null;
        this.iditinerario = null;
        this.idmapa = null;
        this.response_map = []; //id, tipo, url_mapa
        this.idparte = null;
        this.mydestines = null;
        this.menu_guia_aux = null;
        this.lookFor = null;
        this.titleaudio = null;
        this.showPlayAudio = null;
        this.imgOpt = {
            zoom: {
                maxRatio: 5
            }
        };
        this.mapa_img = false;
        this.mapa_img_url = null;
        this.hiddenFooterHeader();
    }
    MapaPage.prototype.setObjetctMaps = function (idguia, object, tipo) {
        var _this = this;
        if (idguia === void 0) { idguia = null; }
        if (object != null) {
            object.forEach(function (mapa) {
                //this.response_map.push({"idguia": idguia, "iditi": mapa.id_guia, "titulo": mapa.titulo, "tipo": tipo, "mapa": mapa.mapa});   
                _this.response_map.push({ "idguia": idguia, "iditi": mapa.id_guia, "titulo": mapa.titulo, "tipo": tipo, "mapa": mapa.mapa });
                console.log(_this.response_map);
            });
        }
    };
    MapaPage.prototype.getShowBtnHeader = function (mydestines, idguia, iditinerario) {
        var _this = this;
        this.response_map = [];
        this.lookFor = false;
        if (mydestines.monumento != null && mydestines.monumento.length > 0) {
            mydestines.monumento.forEach(function (element) {
                if (iditinerario == 0) {
                    if (idguia == element.idguia) {
                        if (!_this.lookFor) {
                            if (element.plano == null) {
                                _this.elimina({ name: "planta" });
                            }
                            _this.showBtnDetails(element);
                            _this.setObjetctMaps(element.idguia, element.mapa, 'mon');
                        }
                        _this.lookFor = true;
                    }
                }
                else {
                    if (element.partes != null && element.partes.length > 0 && _this.thisIsArray(element.partes)) {
                        element.partes.forEach(function (parte) {
                            if (idguia == parte.idguiapartes && iditinerario == parseInt(parte.id_itinerario)) {
                                //if(idguia == parseInt(parte.id_itinerario) && iditinerario == parte.idguiapartes){
                                if (!_this.lookFor) {
                                    _this.showBtnDetails(parte);
                                    _this.setObjetctMaps(parte.idguiapartes, parte.mapa, 'mon');
                                }
                                _this.lookFor = true;
                            }
                        });
                    }
                }
            });
        }
        if (mydestines.monumento_comp != null && mydestines.monumento_comp.length > 0) {
            mydestines.monumento_comp.forEach(function (element) {
                if (iditinerario == 0) {
                    if (idguia == element.idguia) {
                        if (!_this.lookFor) {
                            if (element.plano == null) {
                                _this.elimina({ name: "planta" });
                            }
                            _this.showBtnDetails(element);
                            _this.setObjetctMaps(element.idguia, element.mapa, 'monc');
                        }
                        _this.lookFor = true;
                    }
                }
                else {
                    if (_this.thisIsArray(element.partes) && element.partes != null && element.partes.length > 0) {
                        element.partes.forEach(function (parte) {
                            if (idguia == parseInt(parte.idguiapartes) && iditinerario == parseInt(parte.id_itinerario)) {
                                if (!_this.lookFor) {
                                    _this.showBtnDetails(parte);
                                    _this.setObjetctMaps(parte.idguiapartes, parte.mapa, 'monc');
                                }
                                _this.lookFor = true;
                            }
                            if (_this.thisIsArray(parte.partes) && parte.partes != null && parte.partes.length > 0) {
                                parte.partes.forEach(function (parte) {
                                    if (idguia == parseInt(parte.idguiapartes) && iditinerario == parseInt(parte.id_itinerario)) {
                                        if (!_this.lookFor) {
                                            _this.showBtnDetails(parte);
                                            _this.setObjetctMaps(parte.idguiapartes, parte.mapa, 'monc');
                                        }
                                        _this.lookFor = true;
                                    }
                                });
                            }
                        });
                    }
                }
            });
        }
        if (mydestines.dia != null && mydestines.dia.length > 0) {
            mydestines.dia.forEach(function (element) {
                if (iditinerario == 0) {
                    if (idguia == element.idguia) {
                        if (!_this.lookFor) {
                            _this.showBtnDetails(element);
                            _this.setObjetctMaps(element.idguia, element.mapa, 'dia');
                        }
                        _this.lookFor = true;
                    }
                }
                else {
                    if (_this.thisIsArray(element.partes) && element.partes != null && element.partes.length > 0) {
                        element.partes.forEach(function (parte) {
                            if (idguia == parseInt(parte.idguiapartes) && iditinerario == parseInt(parte.id_itinerario)) {
                                if (!_this.lookFor) {
                                    _this.showBtnDetails(parte);
                                    _this.setObjetctMaps(parte.idguiapartes, parte.mapa, 'dia');
                                }
                                _this.lookFor = true;
                            }
                            if (_this.thisIsArray(parte.partes) && parte.partes != null && parte.partes.length > 0) {
                                parte.partes.forEach(function (parte) {
                                    if (idguia == parseInt(parte.idguiapartes) && iditinerario == parseInt(parte.id_itinerario)) {
                                        if (!_this.lookFor) {
                                            _this.showBtnDetails(parte);
                                            _this.setObjetctMaps(parte.idguiapartes, parte.mapa, 'dia');
                                        }
                                        _this.lookFor = true;
                                    }
                                    if (_this.thisIsArray(parte.partes) && parte.partes != null && parte.partes.length > 0) {
                                        parte.partes.forEach(function (parte) {
                                            if (idguia == parseInt(parte.idguiapartes) && iditinerario == parseInt(parte.id_itinerario)) {
                                                if (!_this.lookFor) {
                                                    _this.showBtnDetails(parte);
                                                    _this.setObjetctMaps(parte.idguiapartes, parte.mapa, 'dia');
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
                    if (idguia == element.idguia) {
                        if (!_this.lookFor) {
                            _this.showBtnDetails(element);
                            _this.setObjetctMaps(element.idguia, element.mapa, 'iti');
                        }
                        _this.lookFor = true;
                    }
                }
                else {
                    if (_this.thisIsArray(element.partes) && element.partes != null && element.partes.length > 0) {
                        element.partes.forEach(function (parte) {
                            if (idguia == parseInt(parte.idguiapartes) && iditinerario == parseInt(parte.id_itinerario)) {
                                if (!_this.lookFor) {
                                    _this.showBtnDetails(parte);
                                    _this.setObjetctMaps(parte.idguiapartes, parte.mapa, 'iti');
                                }
                                _this.lookFor = true;
                            }
                            if (_this.thisIsArray(parte.partes) && parte.partes != null && parte.partes.length > 0) {
                                parte.partes.forEach(function (parte) {
                                    if (idguia == parseInt(parte.idguiapartes) && iditinerario == parseInt(parte.id_itinerario)) {
                                        if (!_this.lookFor) {
                                            _this.showBtnDetails(parte);
                                            _this.setObjetctMaps(parte.idguiapartes, parte.mapa, 'iti');
                                        }
                                        _this.lookFor = true;
                                    }
                                    if (_this.thisIsArray(parte.partes) && parte.partes != null && parte.partes.length > 0) {
                                        parte.partes.forEach(function (parte) {
                                            if (idguia == parseInt(parte.idguiapartes) && iditinerario == parseInt(parte.id_itinerario)) {
                                                if (!_this.lookFor) {
                                                    _this.showBtnDetails(parte);
                                                    _this.setObjetctMaps(parte.idguiapartes, parte.mapa, 'iti');
                                                }
                                                _this.lookFor = true;
                                            }
                                            if (_this.thisIsArray(parte.partes) && parte.partes != null && parte.partes.length > 0) {
                                                parte.partes.forEach(function (parte) {
                                                    if (idguia == parseInt(parte.idguiapartes) && iditinerario == parseInt(parte.id_itinerario)) {
                                                        if (!_this.lookFor) {
                                                            _this.showBtnDetails(parte);
                                                            _this.setObjetctMaps(parte.idguiapartes, parte.mapa, 'iti');
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
        this.response_map = this.response_map.filter(function (e) { return e.idguia == idguia; });
    };
    MapaPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.menu_guia_aux = new Array();
        this.mapa = this.dataService.getMenuGuia();
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
                if (params['idm'] != undefined) {
                    _this.idmapa = parseInt(params['idm']);
                }
                _this.serviceRegister.getTitleAudio()
                    .then(function (titleaudio) {
                    if (titleaudio != null) {
                        _this.titleaudio = titleaudio;
                    }
                });
                if (_this.mydestines == null) {
                    _this.serviceRegister.present('Preparando mapa..');
                    _this.serviceRegister.getAllData()
                        .then(function (data) {
                        if (data != null) {
                            _this.mydestines = data;
                            _this.serviceRegister.getTitleAudio()
                                .then(function (titleaudio) {
                                if (titleaudio != null) {
                                    _this.titleaudio = titleaudio;
                                }
                            });
                            _this.mapa.subscribe(function (res) {
                                _this.menu_guia_aux = res;
                                if (_this.mydestines != null) {
                                    _this.getShowBtnHeader(_this.mydestines, _this.idguia, _this.iditinerario);
                                }
                            });
                        }
                        _this.serviceRegister.dismiss();
                    })
                        .catch(function (error) {
                        _this.serviceRegister.dismiss();
                        console.log('Error al obtener los datos');
                    });
                }
                else {
                    _this.mapa.subscribe(function (res) {
                        _this.menu_guia_aux = res;
                        _this.getShowBtnHeader(_this.mydestines, _this.idguia, _this.iditinerario);
                    });
                }
            }
        });
    };
    MapaPage.prototype.showBtnDetails = function (element) {
        if (element.mapa == null) {
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
    MapaPage.prototype.thisIsArray = function ($array) {
        return Array.isArray($array) ? true : false;
    };
    MapaPage.prototype.ngOnInit = function () {
    };
    MapaPage.prototype.elimina = function (elem) {
        this.menu_guia_aux = this.menu_guia_aux.filter(function (e) { return e.name !== elem.name; });
    };
    MapaPage.prototype.playAudio = function () {
        this.audioProvider.play();
        this.storage.set('modoAudio', 'reproduciendo');
        this.showPlayAudio = false;
    };
    MapaPage.prototype.hiddenFooterHeader = function () {
        var _this = this;
        this.currentScreenOrientation = this.screenOrientation.type;
        this.screenOrientation.onChange().subscribe(function () {
            _this.currentScreenOrientation = _this.screenOrientation.type;
            if (_this.currentScreenOrientation == 'landscape-primary' || _this.currentScreenOrientation == 'landscape-secondary') {
                if (_this.mapa_img == true) {
                    document.getElementById('header').style.display = 'none';
                    document.getElementById('footer').style.display = 'none';
                }
                else {
                    document.getElementById('header').style.display = 'block';
                    document.getElementById('footer').style.display = 'block';
                }
            }
            else {
                document.getElementById('header').style.display = 'block';
                document.getElementById('footer').style.display = 'block';
            }
        });
    };
    MapaPage.prototype.pause = function () {
        this.audioProvider.pause();
        this.storage.set('modoAudio', 'pause');
        this.showPlayAudio = true;
    };
    MapaPage.prototype.showPhoto = function (url) {
        if (url != null) {
            this.mapa_img_url = url;
            this.mapa_img = true;
        }
    };
    MapaPage.prototype.clickedStar = function () {
        if (this.mapa_img) {
            this.mapa_img = false;
        }
        else {
            var showBackMisDestinos = this.showPlayAudio;
            var navigationExtras = {
                queryParams: {
                    audio: JSON.stringify(showBackMisDestinos)
                }
            };
            if (this.idmapa != null) {
                this.router.navigate(['/tabs/mis-destinos/']);
            }
            else {
                this.router.navigate(['/tabs/mis-destinos/'.concat(this.idguia).concat('/').concat(this.iditinerario)], navigationExtras);
            }
        }
    };
    MapaPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mapa',
            template: __webpack_require__(/*! ./mapa.page.html */ "./src/app/pages/mapa/mapa.page.html"),
            styles: [__webpack_require__(/*! ./mapa.page.scss */ "./src/app/pages/mapa/mapa.page.scss")],
        }),
        __metadata("design:paramtypes", [_service_menu_data_service__WEBPACK_IMPORTED_MODULE_1__["MenuDataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _service_user_data_service__WEBPACK_IMPORTED_MODULE_3__["UserDataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _providers_audio_audio__WEBPACK_IMPORTED_MODULE_5__["AudioProvider"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
            _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_6__["ScreenOrientation"]])
    ], MapaPage);
    return MapaPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-mapa-mapa-module.js.map