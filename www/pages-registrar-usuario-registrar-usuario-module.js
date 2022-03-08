(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-registrar-usuario-registrar-usuario-module"],{

/***/ "./src/app/pages/registrar-usuario/registrar-usuario-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/registrar-usuario/registrar-usuario-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: RegistrarUsuarioPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrarUsuarioPageRoutingModule", function() { return RegistrarUsuarioPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _registrar_usuario_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registrar-usuario.page */ "./src/app/pages/registrar-usuario/registrar-usuario.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _registrar_usuario_page__WEBPACK_IMPORTED_MODULE_2__["RegistrarUsuarioPage"]
    }
];
var RegistrarUsuarioPageRoutingModule = /** @class */ (function () {
    function RegistrarUsuarioPageRoutingModule() {
    }
    RegistrarUsuarioPageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], RegistrarUsuarioPageRoutingModule);
    return RegistrarUsuarioPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/registrar-usuario/registrar-usuario.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/registrar-usuario/registrar-usuario.module.ts ***!
  \*********************************************************************/
/*! exports provided: RegistrarUsuarioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrarUsuarioPageModule", function() { return RegistrarUsuarioPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _registrar_usuario_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./registrar-usuario-routing.module */ "./src/app/pages/registrar-usuario/registrar-usuario-routing.module.ts");
/* harmony import */ var _registrar_usuario_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registrar-usuario.page */ "./src/app/pages/registrar-usuario/registrar-usuario.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var RegistrarUsuarioPageModule = /** @class */ (function () {
    function RegistrarUsuarioPageModule() {
    }
    RegistrarUsuarioPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _registrar_usuario_routing_module__WEBPACK_IMPORTED_MODULE_4__["RegistrarUsuarioPageRoutingModule"]
            ],
            declarations: [_registrar_usuario_page__WEBPACK_IMPORTED_MODULE_5__["RegistrarUsuarioPage"]]
        })
    ], RegistrarUsuarioPageModule);
    return RegistrarUsuarioPageModule;
}());



/***/ }),

/***/ "./src/app/pages/registrar-usuario/registrar-usuario.page.html":
/*!*********************************************************************!*\
  !*** ./src/app/pages/registrar-usuario/registrar-usuario.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"ion-no-border\">\n    <ion-toolbar class=\"toolbarppl\">\n      \n      <ion-buttons slot=\"start\">\n        <ion-back-button style=\"color: #39B1C0;\"\n                         defaultHref=\"/\">\n        </ion-back-button>\n      </ion-buttons>\n  \n      <ion-title style=\"font-size: unset; text-align: center; margin-right: 15%;\">\n        REGISTRO\n      </ion-title> \n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n    <form #formulario=\"ngForm\" (ngSubmit)=\"onSubmit(formulario)\">\n     \n            <ion-input type=\"text\"\n                       class=\"itemform\"\n                       placeholder=\"Nombre y apellidos\"\n                       name=\"nameSurname\"\n                       [(ngModel)]=\"registerUser.nameSurname\"\n                       required>\n            </ion-input>      \n            <ion-input type=\"email\"\n                       class=\"itemform\"\n                       placeholder=\"Correo electrónico\"\n                       name=\"email\"\n                       [(ngModel)]=\"registerUser.email\"\n                       pattern=\"^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$\"\n                       required>\n            </ion-input>         \n            <ion-input  type=\"email\"\n                        class=\"itemform\"\n                        placeholder=\"Confirmar correo electrónico\"\n                        name=\"confirmar_email\"\n                        [(ngModel)]=\"registerUser.conf_email\"\n                        pattern=\"^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$\"\n                        required>\n            </ion-input>  \n            <ion-input type=\"text\"\n                       class=\"itemform\" \n                       name=\"username\"\n                       [(ngModel)]=\"registerUser.username\"\n                       placeholder=\"Nombre de usuario\"\n                       required>\n            </ion-input>     \n            <ion-input type=\"password\" \n                       class=\"itemform\"\n                       name=\"pass\"\n                       [(ngModel)]=\"registerUser.pass\"\n                       placeholder=\"Contraseña\"\n                       required>\n            </ion-input>\n            <ion-checkbox\n                      class=\"fondoppal\"\n                      slot=\"start\" \n                      checked=\"false\" \n                      required>\n            </ion-checkbox>\n            <ion-label>Acepto <strong routerLink=\"/aviso-legal\" style=\"color: #1F4D9A;\">aviso legal, condiciones de uso y política de privacidad</strong></ion-label>\n            \n            \n            <ion-button [disabled]=\"formulario.invalid || registerUser.email != registerUser.conf_email\"\n                    type=\"submit\" \n                    class=\"btnformppl\"\n                    expand=\"block\"\n                    shape=\"round\">\n            REGISTRARSE\n            </ion-button>      \n    </form>\n    <ion-text class=\"txt_registro\">\n        <span>También puedes registrarte automáticamente mediante:</span>\n    </ion-text>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/registrar-usuario/registrar-usuario.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/registrar-usuario/registrar-usuario.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toolbarppl {\n  --background:#dfe6ee;\n  color: #1F4D9A; }\n\nion-content {\n  --background:#dfe6ee; }\n\n.itemform {\n  font-size: 1em;\n  color: #575756;\n  border: 1px solid #575756;\n  background: #fff;\n  border-radius: 3px !important;\n  margin-top: 5%; }\n\n.fondoppal {\n  --background:#dfe6ee;\n  color: #1F4D9A;\n  font-size: 0.9em;\n  margin-top: 15px;\n  margin-right: 10px; }\n\n.btnformppl {\n  --background: #1F4D9A;\n  margin-top: 10%;\n  margin-bottom: 5%;\n  width: 60%;\n  font-size: 1em;\n  margin-left: auto;\n  margin-right: auto; }\n\n.txt_registro {\n  color: #1F4D9A;\n  font-size: 0.9em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rcHJvL0Rlc2t0b3AvcHJveWVjdG9zL2Rlc3Rpbm9hcnRlX2FwcC9mcm9udC1pb25pYy9zcmMvYXBwL3BhZ2VzL3JlZ2lzdHJhci11c3VhcmlvL3JlZ2lzdHJhci11c3VhcmlvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFhO0VBQ2IsZUFBYyxFQUNqQjs7QUFFRDtFQUNJLHFCQUFhLEVBQ2hCOztBQUVEO0VBQ0ksZUFBYztFQUNkLGVBQWM7RUFDZCwwQkFBeUI7RUFDekIsaUJBQWdCO0VBQ2hCLDhCQUE2QjtFQUM3QixlQUFjLEVBQ2pCOztBQUVEO0VBQ0kscUJBQWE7RUFDYixlQUFhO0VBQ2IsaUJBQWdCO0VBQ2hCLGlCQUFnQjtFQUNoQixtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSxzQkFBYTtFQUNiLGdCQUFlO0VBQ2Ysa0JBQWlCO0VBQ2pCLFdBQVU7RUFDVixlQUFjO0VBQ2Qsa0JBQWlCO0VBQ2pCLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLGVBQWE7RUFDYixpQkFBZ0IsRUFDbkIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZWdpc3RyYXItdXN1YXJpby9yZWdpc3RyYXItdXN1YXJpby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9vbGJhcnBwbHtcclxuICAgIC0tYmFja2dyb3VuZDojZGZlNmVlO1xyXG4gICAgY29sb3I6ICMxRjREOUE7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiNkZmU2ZWU7XHJcbn1cclxuXHJcbi5pdGVtZm9ybSB7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIGNvbG9yOiAjNTc1NzU2O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzU3NTc1NjtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG59XHJcblxyXG4uZm9uZG9wcGFse1xyXG4gICAgLS1iYWNrZ3JvdW5kOiNkZmU2ZWU7XHJcbiAgICBjb2xvcjojMUY0RDlBO1xyXG4gICAgZm9udC1zaXplOiAwLjllbTtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5idG5mb3JtcHBse1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMUY0RDlBO1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLnR4dF9yZWdpc3Ryb3tcclxuICAgIGNvbG9yOiMxRjREOUE7XHJcbiAgICBmb250LXNpemU6IDAuOWVtO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/registrar-usuario/registrar-usuario.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/registrar-usuario/registrar-usuario.page.ts ***!
  \*******************************************************************/
/*! exports provided: RegistrarUsuarioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrarUsuarioPage", function() { return RegistrarUsuarioPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_user_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/user-data.service */ "./src/app/service/user-data.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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




var RegistrarUsuarioPage = /** @class */ (function () {
    function RegistrarUsuarioPage(alertCtrl, serviceRegister, router) {
        this.alertCtrl = alertCtrl;
        this.serviceRegister = serviceRegister;
        this.router = router;
        this.registerUser = {
            nameSurname: '',
            username: '',
            email: '',
            conf_email: '',
            pass: '',
            check: false
        };
    }
    RegistrarUsuarioPage.prototype.ngOnInit = function () {
    };
    RegistrarUsuarioPage.prototype.onSubmit = function (formulario) {
        var _this = this;
        this.serviceRegister.present('Validando formulario..');
        this.serviceRegister.postUserToken()
            .then(function (data) {
            _this.serviceRegister.dismiss();
            _this.serviceRegister.present('Registrando usuario..');
            var response = JSON.parse(data.data);
            _this.serviceRegister.postUserRegister(formulario, response)
                .then(function (data) {
                _this.serviceRegister.dismiss();
                _this.router.navigate(['inicio-sesion']);
            })
                .catch(function (error) {
                _this.serviceRegister.dismiss();
                var msg = JSON.parse(error.error);
                _this.presentAlert(msg.message);
            });
        })
            .catch(function (error) {
            _this.serviceRegister.dismiss();
            var msg = JSON.parse(error.error);
            _this.presentAlert(msg.message);
        });
    };
    RegistrarUsuarioPage.prototype.presentAlert = function (msg) {
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
    RegistrarUsuarioPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registrar-usuario',
            template: __webpack_require__(/*! ./registrar-usuario.page.html */ "./src/app/pages/registrar-usuario/registrar-usuario.page.html"),
            styles: [__webpack_require__(/*! ./registrar-usuario.page.scss */ "./src/app/pages/registrar-usuario/registrar-usuario.page.scss")],
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _service_user_data_service__WEBPACK_IMPORTED_MODULE_1__["UserDataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegistrarUsuarioPage);
    return RegistrarUsuarioPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-registrar-usuario-registrar-usuario-module.js.map