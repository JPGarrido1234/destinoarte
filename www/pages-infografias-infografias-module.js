(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-infografias-infografias-module"],{

/***/ "./src/app/pages/infografias/infografias.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/infografias/infografias.module.ts ***!
  \*********************************************************/
/*! exports provided: InfografiasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfografiasPageModule", function() { return InfografiasPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _infografias_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./infografias.page */ "./src/app/pages/infografias/infografias.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _infografias_page__WEBPACK_IMPORTED_MODULE_5__["InfografiasPage"]
    }
];
var InfografiasPageModule = /** @class */ (function () {
    function InfografiasPageModule() {
    }
    InfografiasPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_infografias_page__WEBPACK_IMPORTED_MODULE_5__["InfografiasPage"]]
        })
    ], InfografiasPageModule);
    return InfografiasPageModule;
}());



/***/ }),

/***/ "./src/app/pages/infografias/infografias.page.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/infografias/infografias.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header id=\"header\" style=\"display: block;\" class=\"ion-no-border\">\n  <ion-toolbar class=\"toolbarppl\">   \n      <ion-buttons slot=\"start\">\n          <ion-button (click)=\"clickedStar()\">\n              <ion-icon slot=\"icon-only\" src=\"/assets/img/menu_atras.svg\"></ion-icon>\n          </ion-button>\n      </ion-buttons> \n      <ion-grid>\n          <ion-row style=\"text-align: center;\">\n              <ion-col *ngFor=\"let item_infog of menu_guia_aux\">\n                <div>\n                    <ion-icon style=\"width: 50px; height: 40px;\" [src]=\"item_infog.icon\" [routerLink]=\"item_infog.redirectTo.concat('/').concat(idguia).concat('/').concat(iditinerario)\"></ion-icon>\n                </div>\n              </ion-col>\n          </ion-row>\n      </ion-grid>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"fondoppal\">\n    <ion-slides *ngIf=\"infografia_img\" [options]=\"imgOpt\" zoom>\n        <ion-slide>\n            <div class=\"swiper-zoom-container\">\n                <img [src]=\"infografia_img_url\"/>\n            </div>\n        </ion-slide>\n    </ion-slides>\n    <div class=\"fondoppal\" *ngIf=\"!infografia_img\">\n        <ion-list class=\"fondoppal\" *ngFor=\"let item of response_info\" lines=\"none\">\n            <ion-item  class=\"fondoppal\" (click)=\"showPhoto(item.id_img)\">\n                <ion-card style=\"width:100%; background-color:#ffffff;\">\n                    <img style=\"height: 270px;\" [src]=\"item.id_img\"/>\n                    <ion-card-header>\n                      <ion-card-title class=\"title_card\"><h3 style=\"font-size: 1em;\">{{item.titulo}}</h3></ion-card-title>\n                    </ion-card-header>\n                </ion-card>\n            </ion-item>    \n        </ion-list>\n    </div>\n</ion-content>\n<ion-footer id=\"footer\" style=\"display: block;\">\n    <ion-toolbar class=\"toolbarppl\">\n        <ion-item>\n            <ion-icon *ngIf=\"showPlayAudio\" slot=\"start\" class=\"color_play_icon\" src=\"/assets/img/audio/play.svg\" (click)=\"playAudio()\"></ion-icon>\n            <ion-icon *ngIf=\"!showPlayAudio\" slot=\"start\" class=\"color_play_icon\" (click)=\"pause()\" src=\"/assets/img/audio/pause.svg\"></ion-icon>\n            <ion-title class=\"ion-text-uppercase\">{{titleaudio}}</ion-title>\n        </ion-item>\n    </ion-toolbar>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/pages/infografias/infografias.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/infografias/infografias.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toolbarppl {\n  --background:#dfe6ee; }\n\n.fondoppal {\n  --background:#dfe6ee;\n  background-color: #dfe6ee; }\n\n.color_play_icon {\n  color: #39B1C0;\n  width: 25px;\n  height: 30px; }\n\n.title_card {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rcHJvL0Rlc2t0b3AvcHJveWVjdG9zL2Rlc3Rpbm9hcnRlX2FwcC9mcm9udC1pb25pYy9zcmMvYXBwL3BhZ2VzL2luZm9ncmFmaWFzL2luZm9ncmFmaWFzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFhLEVBQ2hCOztBQUVEO0VBQ0kscUJBQWE7RUFDYiwwQkFBeUIsRUFDNUI7O0FBRUQ7RUFDSSxlQUFhO0VBQ2IsWUFBVztFQUNYLGFBQVksRUFDZjs7QUFFRDtFQUNJLG1CQUFrQixFQUNyQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luZm9ncmFmaWFzL2luZm9ncmFmaWFzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b29sYmFycHBse1xyXG4gICAgLS1iYWNrZ3JvdW5kOiNkZmU2ZWU7XHJcbn1cclxuXHJcbi5mb25kb3BwYWx7XHJcbiAgICAtLWJhY2tncm91bmQ6I2RmZTZlZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZmU2ZWU7XHJcbn1cclxuXHJcbi5jb2xvcl9wbGF5X2ljb257XHJcbiAgICBjb2xvcjojMzlCMUMwO1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi50aXRsZV9jYXJke1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/infografias/infografias.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/infografias/infografias.page.ts ***!
  \*******************************************************/
/*! exports provided: InfografiasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfografiasPage", function() { return InfografiasPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_menu_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/menu-data.service */ "./src/app/service/menu-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_user_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/user-data.service */ "./src/app/service/user-data.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _providers_audio_audio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../providers/audio/audio */ "./src/app/providers/audio/audio.ts");
/* harmony import */ var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/photo-viewer/ngx */ "./node_modules/@ionic-native/photo-viewer/ngx/index.js");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/ngx/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var InfografiasPage = /** @class */ (function () {
    function InfografiasPage(dataService, router, serviceRegister, route, audioProvider, storage, photoViewer, screenOrientation) {
        this.dataService = dataService;
        this.router = router;
        this.serviceRegister = serviceRegister;
        this.route = route;
        this.audioProvider = audioProvider;
        this.storage = storage;
        this.photoViewer = photoViewer;
        this.screenOrientation = screenOrientation;
        this.idguia = null;
        this.iditinerario = null;
        this.response_info = null;
        this.idparte = null;
        this.mydestines = null;
        this.menu_guia_aux = null;
        this.lookFor = null;
        this.showPlayAudio = null;
        this.titleaudio = null;
        this.infografia_img = false;
        this.infografia_img_url = null;
        this.imgOpt = {
            zoom: {
                maxRatio: 5
            }
        };
        this.hiddenFooterHeader();
    }
    InfografiasPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.menu_guia_aux = new Array();
        this.infografia = this.dataService.getMenuGuia();
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
                _this.idguia = params['id'];
                _this.iditinerario = parseInt(params['iditi']);
                _this.serviceRegister.getTitleAudio()
                    .then(function (titleaudio) {
                    if (titleaudio != null) {
                        _this.titleaudio = titleaudio;
                    }
                });
                if (_this.mydestines == null) {
                    _this.serviceRegister.present('Preparando infografías..');
                    _this.serviceRegister.getAllData()
                        .then(function (data) {
                        _this.serviceRegister.dismiss();
                        _this.mydestines = data;
                        _this.infografia.subscribe(function (res) {
                            _this.menu_guia_aux = res;
                            if (_this.mydestines != null) {
                                _this.getShowBtnHeader(_this.mydestines, _this.idguia, _this.iditinerario);
                            }
                        });
                    })
                        .catch(function (error) {
                        _this.serviceRegister.dismiss();
                        console.log('Error al obtener los datos');
                    });
                }
                else {
                    _this.infografia.subscribe(function (res) {
                        _this.menu_guia_aux = res;
                        _this.getShowBtnHeader(_this.mydestines, _this.idguia, _this.iditinerario);
                    });
                }
            }
        });
    };
    InfografiasPage.prototype.getShowBtnHeader = function (mydestines, idguia, iditinerario) {
        var _this = this;
        this.response_info = null;
        this.lookFor = false;
        if (mydestines.monumento != null && mydestines.monumento.length > 0) {
            mydestines.monumento.forEach(function (element) {
                if (idguia == element.idguia) {
                    if (iditinerario == 0) {
                        if (!_this.lookFor) {
                            _this.showBtnDetails(element);
                            _this.response_info = element.infografia;
                        }
                        _this.lookFor = true;
                    }
                    else {
                        if (element.partes != null && element.partes.length > 0 && _this.thisIsArray(element.partes)) {
                            element.partes.forEach(function (parte) {
                                if (idguia == parte.id_itinerario && iditinerario == parseInt(parte.idguiapartes)) {
                                    if (!_this.lookFor) {
                                        _this.showBtnDetails(parte);
                                        _this.response_info = parte.infografia;
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
                //if(this.idguia == element.idguia){
                if (iditinerario == 0) {
                    if (!_this.lookFor) {
                        _this.showBtnDetails(element);
                        _this.response_info = element.infografia;
                    }
                    _this.lookFor = true;
                }
                else {
                    if (_this.thisIsArray(element.partes) && element.partes != null && element.partes.length > 0) {
                        element.partes.forEach(function (parte) {
                            if (idguia == parseInt(parte.idguiapartes) && iditinerario == parseInt(parte.id_itinerario)) {
                                if (!_this.lookFor) {
                                    _this.showBtnDetails(parte);
                                    _this.response_info = parte.infografia;
                                }
                                _this.lookFor = true;
                            }
                            if (_this.thisIsArray(parte.partes) && parte.partes != null && parte.partes.length > 0) {
                                parte.partes.forEach(function (parte) {
                                    if (idguia == parseInt(parte.idguiapartes) && iditinerario == parseInt(parte.id_itinerario)) {
                                        //console.log(idguia == parseInt(parte.idguiapartes) && iditinerario == parseInt(parte.id_itinerario));
                                        if (!_this.lookFor) {
                                            _this.showBtnDetails(parte);
                                            _this.response_info = parte.infografia;
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
                        if (_this.response_info == null && _this.thisIsArray(element.infografia)) {
                            _this.response_info = element.infografia;
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
                                    if (_this.response_info == null && _this.thisIsArray(parte.infografia)) {
                                        _this.response_info = parte.infografia;
                                    }
                                }
                                _this.lookFor = true;
                            }
                            if (_this.thisIsArray(parte.partes) && parte.partes != null && parte.partes.length > 0) {
                                parte.partes.forEach(function (parte) {
                                    if (idguia == parseInt(parte.idguiapartes) && iditinerario == parseInt(parte.id_itinerario)) {
                                        if (!_this.lookFor) {
                                            _this.showBtnDetails(parte);
                                            if (_this.response_info == null && _this.thisIsArray(parte.infografia)) {
                                                _this.response_info = parte.infografia;
                                            }
                                        }
                                        _this.lookFor = true;
                                    }
                                    if (_this.thisIsArray(parte.partes) && parte.partes != null && parte.partes.length > 0) {
                                        parte.partes.forEach(function (parte) {
                                            if (idguia == parseInt(parte.idguiapartes) && iditinerario == parseInt(parte.id_itinerario)) {
                                                if (!_this.lookFor) {
                                                    _this.showBtnDetails(parte);
                                                    if (_this.response_info == null && _this.thisIsArray(parte.infografia)) {
                                                        _this.response_info = parte.infografia;
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
                        if (_this.response_info == null && _this.thisIsArray(element.infografia)) {
                            _this.response_info = element.infografia;
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
                                    if (_this.response_info == null && _this.thisIsArray(parte.infografia)) {
                                        _this.response_info = parte.infografia;
                                    }
                                }
                                _this.lookFor = true;
                            }
                            if (_this.thisIsArray(parte.partes) && parte.partes != null && parte.partes.length > 0) {
                                parte.partes.forEach(function (parte) {
                                    if (idguia == parseInt(parte.idguiapartes) && iditinerario == parseInt(parte.id_itinerario)) {
                                        if (!_this.lookFor) {
                                            _this.showBtnDetails(parte);
                                            if (_this.response_info == null && _this.thisIsArray(parte.infografia)) {
                                                _this.response_info = parte.infografia;
                                            }
                                        }
                                        _this.lookFor = true;
                                    }
                                    if (_this.thisIsArray(parte.partes) && parte.partes != null && parte.partes.length > 0) {
                                        parte.partes.forEach(function (parte) {
                                            if (idguia == parseInt(parte.idguiapartes) && iditinerario == parseInt(parte.id_itinerario)) {
                                                if (!_this.lookFor) {
                                                    _this.showBtnDetails(parte);
                                                    if (_this.response_info == null && _this.thisIsArray(parte.infografia)) {
                                                        _this.response_info = parte.infografia;
                                                    }
                                                }
                                                _this.lookFor = true;
                                            }
                                            if (_this.thisIsArray(parte.partes) && parte.partes != null && parte.partes.length > 0) {
                                                parte.partes.forEach(function (parte) {
                                                    if (idguia == parseInt(parte.idguiapartes) && iditinerario == parseInt(parte.id_itinerario)) {
                                                        if (!_this.lookFor) {
                                                            _this.showBtnDetails(parte);
                                                            if (_this.response_info == null && _this.thisIsArray(parte.infografia)) {
                                                                _this.response_info = parte.infografia;
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
    InfografiasPage.prototype.showBtnDetails = function (element) {
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
    InfografiasPage.prototype.thisIsArray = function ($array) {
        return Array.isArray($array) ? true : false;
    };
    InfografiasPage.prototype.ngOnInit = function () {
    };
    InfografiasPage.prototype.showPhoto = function (url) {
        if (url != null) {
            this.infografia_img_url = url;
            this.infografia_img = true;
        }
    };
    InfografiasPage.prototype.hiddenFooterHeader = function () {
        var _this = this;
        this.currentScreenOrientation = this.screenOrientation.type;
        this.screenOrientation.onChange().subscribe(function () {
            _this.currentScreenOrientation = _this.screenOrientation.type;
            if (_this.currentScreenOrientation == 'landscape-primary' || _this.currentScreenOrientation == 'landscape-secondary') {
                if (_this.infografia_img == true) {
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
    InfografiasPage.prototype.playAudio = function () {
        this.audioProvider.play();
        this.storage.set('modoAudio', 'reproduciendo');
        this.showPlayAudio = false;
    };
    InfografiasPage.prototype.pause = function () {
        this.audioProvider.pause();
        this.storage.set('modoAudio', 'pause');
        this.showPlayAudio = true;
    };
    InfografiasPage.prototype.elimina = function (elem) {
        this.menu_guia_aux = this.menu_guia_aux.filter(function (e) { return e.name !== elem.name; });
    };
    InfografiasPage.prototype.clickedStar = function () {
        if (this.infografia_img) {
            this.infografia_img = false;
        }
        else {
            var showBackMisDestinos = this.showPlayAudio;
            var navigationExtras = {
                queryParams: {
                    audio: JSON.stringify(showBackMisDestinos)
                }
            };
            this.router.navigate(['/tabs/mis-destinos/'.concat(this.idguia).concat('/').concat(this.iditinerario)], navigationExtras);
        }
    };
    InfografiasPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-infografias',
            template: __webpack_require__(/*! ./infografias.page.html */ "./src/app/pages/infografias/infografias.page.html"),
            styles: [__webpack_require__(/*! ./infografias.page.scss */ "./src/app/pages/infografias/infografias.page.scss")],
        }),
        __metadata("design:paramtypes", [_service_menu_data_service__WEBPACK_IMPORTED_MODULE_1__["MenuDataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _service_user_data_service__WEBPACK_IMPORTED_MODULE_3__["UserDataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _providers_audio_audio__WEBPACK_IMPORTED_MODULE_5__["AudioProvider"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
            _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_6__["PhotoViewer"],
            _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_7__["ScreenOrientation"]])
    ], InfografiasPage);
    return InfografiasPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-infografias-infografias-module.js.map