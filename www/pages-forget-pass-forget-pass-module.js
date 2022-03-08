(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-forget-pass-forget-pass-module"],{

/***/ "./src/app/pages/forget-pass/forget-pass-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/forget-pass/forget-pass-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ForgetPassPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPassPageRoutingModule", function() { return ForgetPassPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _forget_pass_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forget-pass.page */ "./src/app/pages/forget-pass/forget-pass.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _forget_pass_page__WEBPACK_IMPORTED_MODULE_2__["ForgetPassPage"]
    }
];
var ForgetPassPageRoutingModule = /** @class */ (function () {
    function ForgetPassPageRoutingModule() {
    }
    ForgetPassPageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], ForgetPassPageRoutingModule);
    return ForgetPassPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/forget-pass/forget-pass.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/forget-pass/forget-pass.module.ts ***!
  \*********************************************************/
/*! exports provided: ForgetPassPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPassPageModule", function() { return ForgetPassPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _forget_pass_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forget-pass-routing.module */ "./src/app/pages/forget-pass/forget-pass-routing.module.ts");
/* harmony import */ var _forget_pass_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forget-pass.page */ "./src/app/pages/forget-pass/forget-pass.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ForgetPassPageModule = /** @class */ (function () {
    function ForgetPassPageModule() {
    }
    ForgetPassPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _forget_pass_routing_module__WEBPACK_IMPORTED_MODULE_4__["ForgetPassPageRoutingModule"]
            ],
            declarations: [_forget_pass_page__WEBPACK_IMPORTED_MODULE_5__["ForgetPassPage"]]
        })
    ], ForgetPassPageModule);
    return ForgetPassPageModule;
}());



/***/ }),

/***/ "./src/app/pages/forget-pass/forget-pass.page.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/forget-pass/forget-pass.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"ion-no-border\">\n    <ion-toolbar class=\"toolbarppl\">\n      \n      <ion-buttons slot=\"start\">\n        <ion-back-button style=\"color: #39B1C0;\"\n                         defaultHref=\"/\">\n        </ion-back-button>\n      </ion-buttons>\n  \n      <ion-title style=\"font-size: unset; text-align: center; margin-right: 8%;\">\n        RECORDAR CONTRASEÑA\n      </ion-title> \n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n    <form *ngIf=\"showResetPass\" #formulario=\"ngForm\" (ngSubmit)=\"onSubmit(formulario)\">\n        <ion-input  type=\"email\" \n                    class=\"itemform\"\n                    placeholder=\"e-mail\"\n                    name=\"email\"\n                    [(ngModel)]=\"forgetUserPass.email\"\n                    pattern=\"^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$\"\n                    required>\n        </ion-input>   \n        <ion-button [disabled]=\"formulario.invalid\"\n                type=\"submit\" \n                class=\"btnformppl\"\n                expand=\"block\"\n                shape=\"round\">\n        ENVIAR\n        </ion-button>\n      \n        <ion-text class=\"txt_forget\">\n          <span>Recibirás en tu bandeja de entrada las indicaciones para recuperar tu contraseña.</span>\n        </ion-text>\n    </form>\n\n    <form *ngIf=\"!showResetPass\" #myform=\"ngForm\" (ngSubmit)=\"onSubmitBis(myform)\">\n      <ion-input  type=\"password\" \n                  class=\"itemform\"\n                  placeholder=\"password\"\n                  name=\"password\"\n                  [(ngModel)]=\"resetUser.password\"\n                  required>\n      </ion-input> \n      <ion-input  type=\"text\" \n                  class=\"itemform\"\n                  placeholder=\"codigo\"\n                  name=\"codigo\"\n                  [(ngModel)]=\"resetUser.codigo\"\n                  required>\n      </ion-input>     \n      <ion-button  [disabled]=\"myform.invalid\"\n              type=\"submit\" \n              class=\"btnformppl\"\n              expand=\"block\"\n              shape=\"round\">\n      RESET\n      </ion-button>\n  </form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/forget-pass/forget-pass.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/forget-pass/forget-pass.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toolbarppl {\n  --background:#dfe6ee;\n  color: #1F4D9A; }\n\nion-content {\n  --background:#dfe6ee; }\n\n.itemform {\n  font-size: 1em;\n  color: #575756;\n  border: 1px solid #575756;\n  background: #fff;\n  border-radius: 3px !important;\n  margin-top: 5%; }\n\n.btnformppl {\n  --background: #1F4D9A;\n  margin-top: 10%;\n  margin-bottom: 5%;\n  width: 60%;\n  font-size: 1em;\n  margin-left: auto;\n  margin-right: auto; }\n\n.txt_forget {\n  color: #575756;\n  font-size: 0.8em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rcHJvL0Rlc2t0b3AvcHJveWVjdG9zL2Rlc3Rpbm9hcnRlX2FwcC9mcm9udC1pb25pYy9zcmMvYXBwL3BhZ2VzL2ZvcmdldC1wYXNzL2ZvcmdldC1wYXNzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFhO0VBQ2IsZUFBYyxFQUNqQjs7QUFFRDtFQUNJLHFCQUFhLEVBQ2hCOztBQUVEO0VBQ0ksZUFBYztFQUNkLGVBQWM7RUFDZCwwQkFBeUI7RUFDekIsaUJBQWdCO0VBQ2hCLDhCQUE2QjtFQUM3QixlQUFjLEVBQ2pCOztBQUVEO0VBQ0ksc0JBQWE7RUFDYixnQkFBZTtFQUNmLGtCQUFpQjtFQUNqQixXQUFVO0VBQ1YsZUFBYztFQUNkLGtCQUFpQjtFQUNqQixtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSxlQUFhO0VBQ2IsaUJBQWdCLEVBQ25CIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZm9yZ2V0LXBhc3MvZm9yZ2V0LXBhc3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvb2xiYXJwcGx7XHJcbiAgICAtLWJhY2tncm91bmQ6I2RmZTZlZTtcclxuICAgIGNvbG9yOiAjMUY0RDlBO1xyXG59XHJcblxyXG5pb24tY29udGVudHtcclxuICAgIC0tYmFja2dyb3VuZDojZGZlNmVlO1xyXG59XHJcblxyXG4uaXRlbWZvcm0ge1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBjb2xvcjogIzU3NTc1NjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM1NzU3NTY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxufVxyXG5cclxuLmJ0bmZvcm1wcGx7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMxRjREOUE7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4udHh0X2ZvcmdldHtcclxuICAgIGNvbG9yOiM1NzU3NTY7XHJcbiAgICBmb250LXNpemU6IDAuOGVtO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/forget-pass/forget-pass.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/forget-pass/forget-pass.page.ts ***!
  \*******************************************************/
/*! exports provided: ForgetPassPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPassPage", function() { return ForgetPassPage; });
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




var ForgetPassPage = /** @class */ (function () {
    function ForgetPassPage(serviceForgetPass, alertCtrl, router) {
        this.serviceForgetPass = serviceForgetPass;
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.forgetUserPass = {
            email: '',
            pass: '',
            repeatPass: ''
        };
        this.resetUser = {
            password: '',
            codigo: ''
        };
        this.showResetPass = null;
        this.email = null;
    }
    ForgetPassPage.prototype.ngOnInit = function () {
        this.showResetPass = true;
    };
    ForgetPassPage.prototype.onSubmit = function (formulario) {
        var _this = this;
        this.email = formulario.form.value.email;
        this.serviceForgetPass.present('Validando formulario..');
        this.serviceForgetPass.postResetUserPassword(this.email)
            .then(function (res) {
            if (res != null) {
                var data = JSON.parse(res.data);
                _this.serviceForgetPass.dismiss();
                _this.showResetPass = false;
            }
        })
            .catch(function (err) {
            if (err != null) {
                console.log(JSON.parse(err.data));
                _this.serviceForgetPass.dismiss();
                _this.showResetPass = true;
            }
        });
    };
    ForgetPassPage.prototype.presentAlert = function (msg) {
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
    ForgetPassPage.prototype.onSubmitBis = function (myform) {
        var _this = this;
        var pass = myform.form.value.password;
        var codigo = myform.form.value.codigo;
        this.serviceForgetPass.postUserSetPassword(this.email, pass, codigo)
            .then(function (res) {
            if (res != null) {
                console.log(res.data);
                _this.router.navigate(['/inicio-sesion']);
            }
        })
            .catch(function (err) {
            if (err != null) {
                console.log(JSON.parse(err.data));
            }
        });
    };
    ForgetPassPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forget-pass',
            template: __webpack_require__(/*! ./forget-pass.page.html */ "./src/app/pages/forget-pass/forget-pass.page.html"),
            styles: [__webpack_require__(/*! ./forget-pass.page.scss */ "./src/app/pages/forget-pass/forget-pass.page.scss")],
        }),
        __metadata("design:paramtypes", [_service_user_data_service__WEBPACK_IMPORTED_MODULE_1__["UserDataService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ForgetPassPage);
    return ForgetPassPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-forget-pass-forget-pass-module.js.map