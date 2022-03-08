(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-inicio-sesion-inicio-sesion-module"],{

/***/ "./src/app/pages/inicio-sesion/inicio-sesion-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/inicio-sesion/inicio-sesion-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: InicioSesionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioSesionPageRoutingModule", function() { return InicioSesionPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _inicio_sesion_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inicio-sesion.page */ "./src/app/pages/inicio-sesion/inicio-sesion.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _inicio_sesion_page__WEBPACK_IMPORTED_MODULE_2__["InicioSesionPage"]
    }
];
var InicioSesionPageRoutingModule = /** @class */ (function () {
    function InicioSesionPageRoutingModule() {
    }
    InicioSesionPageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], InicioSesionPageRoutingModule);
    return InicioSesionPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/inicio-sesion/inicio-sesion.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/inicio-sesion/inicio-sesion.module.ts ***!
  \*************************************************************/
/*! exports provided: InicioSesionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioSesionPageModule", function() { return InicioSesionPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _inicio_sesion_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inicio-sesion-routing.module */ "./src/app/pages/inicio-sesion/inicio-sesion-routing.module.ts");
/* harmony import */ var _inicio_sesion_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inicio-sesion.page */ "./src/app/pages/inicio-sesion/inicio-sesion.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var InicioSesionPageModule = /** @class */ (function () {
    function InicioSesionPageModule() {
    }
    InicioSesionPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _inicio_sesion_routing_module__WEBPACK_IMPORTED_MODULE_4__["InicioSesionPageRoutingModule"]
            ],
            declarations: [_inicio_sesion_page__WEBPACK_IMPORTED_MODULE_5__["InicioSesionPage"]]
        })
    ], InicioSesionPageModule);
    return InicioSesionPageModule;
}());



/***/ }),

/***/ "./src/app/pages/inicio-sesion/inicio-sesion.page.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/inicio-sesion/inicio-sesion.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar class=\"toolbarppl\">\n    \n    <ion-buttons slot=\"start\">\n      <ion-back-button style=\"color: #39B1C0;\"\n                       defaultHref=\"/\">\n      </ion-back-button>\n    </ion-buttons>\n\n    <ion-title style=\"font-size: unset; text-align: center; margin-right: 13%;\">\n      INICIAR SESIÓN\n    </ion-title> \n  </ion-toolbar>\n</ion-header>\n \n<ion-content class=\"ion-padding\">\n\n  <form #formulario=\"ngForm\" (ngSubmit)=\"onSubmit(formulario)\">\n\n    <ion-input type=\"email\" \n                class=\"itemform\"\n                placeholder=\"Email\"\n                name=\"email\"\n                [(ngModel)]=\"usuario.email\"\n                pattern=\"^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$\"\n                required></ion-input>\n    \n\n    <ion-input type=\"password\" \n                class=\"itemform\"\n                name=\"password\"\n                [(ngModel)]=\"usuario.password\"\n                required\n                placeholder=\"Contraseña\"></ion-input>\n    <!--\n    <ion-button *ngIf=\"isLoggedIn === true\" expand=\"block\" fill=\"clear\" shape=\"round\">\n      Usuario registrado con facebook\n    </ion-button>\n    <ion-button *ngIf=\"isLoggedIn === false\" expand=\"full\" color=\"primary\" (click)=\"fbLogin()\">\n      Registrate con\n      <ion-icon name=\"logo-facebook\"></ion-icon>\n    </ion-button>\n    -->\n    <ion-button [disabled]=\"formulario.invalid\"\n                class=\"btnformppl\"\n                type=\"submit\" \n                expand=\"block\"\n                shape=\"round\">\n      INICIAR SESIÓN\n    </ion-button>\n\n    <ion-button expand=\"block\" \n                class=\"btnformsec\"\n                routerLink=\"/forget-pass\"\n                style=\"text-transform: none;\"\n                shape=\"round\">\n      ¿No recuerdas tu contraseña?\n    </ion-button>\n\n    <ion-button expand=\"block\" \n                class=\"btnformsec\"\n                routerLink=\"/registrar-usuario\"\n                style=\"text-transform: none;\"\n                shape=\"round\">\n      ¿No estás registrado? Crea tu perfil.\n    </ion-button>\n\n  </form>  \n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/pages/inicio-sesion/inicio-sesion.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/inicio-sesion/inicio-sesion.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toolbarppl {\n  --background:#dfe6ee;\n  color: #1F4D9A; }\n\nion-content {\n  --background:#dfe6ee; }\n\n.itemform {\n  font-size: 1em;\n  color: #575756;\n  border: 1px solid #575756;\n  background: #fff;\n  border-radius: 3px !important;\n  margin-top: 5%; }\n\n.btnformppl {\n  --background: #1F4D9A;\n  margin-top: 10%;\n  margin-bottom: 5%;\n  width: 60%;\n  font-size: 1em;\n  margin-left: auto;\n  margin-right: auto; }\n\n.btnformsec {\n  --background:#39B1C0;\n  color: #575756;\n  margin-top: 7%;\n  font-size: 0.9em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rcHJvL0Rlc2t0b3AvcHJveWVjdG9zL2Rlc3Rpbm9hcnRlX2FwcC9mcm9udC1pb25pYy9zcmMvYXBwL3BhZ2VzL2luaWNpby1zZXNpb24vaW5pY2lvLXNlc2lvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBYTtFQUNiLGVBQWMsRUFDakI7O0FBRUQ7RUFDSSxxQkFBYSxFQUNoQjs7QUFFRDtFQUNJLGVBQWM7RUFDZCxlQUFjO0VBQ2QsMEJBQXlCO0VBQ3pCLGlCQUFnQjtFQUNoQiw4QkFBNkI7RUFDN0IsZUFBYyxFQUNqQjs7QUFFRDtFQUNJLHNCQUFhO0VBQ2IsZ0JBQWU7RUFDZixrQkFBaUI7RUFDakIsV0FBVTtFQUNWLGVBQWM7RUFDZCxrQkFBaUI7RUFDakIsbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0kscUJBQWE7RUFDYixlQUFhO0VBQ2IsZUFBYztFQUNkLGlCQUFnQixFQUNuQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luaWNpby1zZXNpb24vaW5pY2lvLXNlc2lvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9vbGJhcnBwbHtcclxuICAgIC0tYmFja2dyb3VuZDojZGZlNmVlO1xyXG4gICAgY29sb3I6ICMxRjREOUE7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiNkZmU2ZWU7XHJcbn1cclxuXHJcbi5pdGVtZm9ybSB7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIGNvbG9yOiAjNTc1NzU2O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzU3NTc1NjtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG59XHJcblxyXG4uYnRuZm9ybXBwbHtcclxuICAgIC0tYmFja2dyb3VuZDogIzFGNEQ5QTtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDUlO1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5idG5mb3Jtc2Vje1xyXG4gICAgLS1iYWNrZ3JvdW5kOiMzOUIxQzA7XHJcbiAgICBjb2xvcjojNTc1NzU2O1xyXG4gICAgbWFyZ2luLXRvcDogNyU7XHJcbiAgICBmb250LXNpemU6IDAuOWVtO1xyXG59XHJcblxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/inicio-sesion/inicio-sesion.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/inicio-sesion/inicio-sesion.page.ts ***!
  \***********************************************************/
/*! exports provided: InicioSesionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioSesionPage", function() { return InicioSesionPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _service_user_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/user-data.service */ "./src/app/service/user-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
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





var InicioSesionPage = /** @class */ (function () {
    function InicioSesionPage(serviceRegister, alertCtrl, router, storage) {
        this.serviceRegister = serviceRegister;
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.storage = storage;
        this.usuario = {
            //email: '',
            //password: ''
            email: 'empresitanosotras@gmail.com',
            password: '19511965empre'
        };
        this.isLoggedIn = false;
        this.users = { id: '', name: '', email: '', picture: { data: { url: '' } } };
        /*
          fb.getLoginStatus()
          .then(res => {
      
            console.log(res.status);
            if (res.status === 'connect') {
              this.isLoggedIn = true;
            } else {
              this.isLoggedIn = false;
            }
      
          })
          .catch(e => console.log(e));
        */
    }
    InicioSesionPage.prototype.ngOnInit = function () {
    };
    InicioSesionPage.prototype.onSubmit = function (formulario) {
        var _this = this;
        this.serviceRegister.present('Validando datos..');
        this.response = this.serviceRegister.postLoginToken(formulario);
        this.response
            .then(function (data) {
            var res = JSON.parse(data.data);
            _this.serviceRegister.dismiss();
            if (res.token != null || res.token != undefined) {
                _this.storage.set('IDUser', res.user_ID);
                _this.storage.remove('existCityInSelect');
                _this.storage.remove('mydestines');
                _this.router.navigate(['tabs/inicio']);
            }
            else {
                _this.presentAlert('Error al introducir los datos.');
            }
        })
            .catch(function (error) {
            _this.serviceRegister.dismiss();
            if (error.error != null) {
                _this.presentAlert('Error de conexi�n.');
            }
        });
    };
    //Facebook
    /*
    fbLogin() {
      this.fb.login(['public_profile', 'user_friends', 'email'])
        .then(res => {
          if (res.status === 'connected') {
            this.isLoggedIn = true;
            this.getUserDetail(res.authResponse.userID);
          } else {
            this.isLoggedIn = false;
          }
        })
        .catch(e => console.log('Error logging into Facebook', e));
    }
  
    getUserDetail(userid: any) {
      this.fb.api('/' + userid + '/?fields=id,email,name,picture', ['public_profile'])
        .then(res => {
          console.log(res);
          this.users = res;
        })
        .catch(e => {
          console.log(e);
        });
    }
  
    logout() {
      this.fb.logout()
        .then( res => this.isLoggedIn = false)
        .catch(e => console.log('Error logout from Facebook', e));
    }
    */
    InicioSesionPage.prototype.presentAlert = function (msg) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            //cssClass: 'my-custom-class',
                            header: 'Alert',
                            message: msg,
                            buttons: ['Aceptar']
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
    InicioSesionPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-inicio-sesion',
            template: __webpack_require__(/*! ./inicio-sesion.page.html */ "./src/app/pages/inicio-sesion/inicio-sesion.page.html"),
            styles: [__webpack_require__(/*! ./inicio-sesion.page.scss */ "./src/app/pages/inicio-sesion/inicio-sesion.page.scss")],
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_service_user_data_service__WEBPACK_IMPORTED_MODULE_2__["UserDataService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]])
    ], InicioSesionPage);
    return InicioSesionPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-inicio-sesion-inicio-sesion-module.js.map