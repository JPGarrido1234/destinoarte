(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-mi-cuenta-mi-cuenta-module"],{

/***/ "./src/app/pages/mi-cuenta/mi-cuenta.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/mi-cuenta/mi-cuenta.module.ts ***!
  \*****************************************************/
/*! exports provided: MiCuentaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiCuentaPageModule", function() { return MiCuentaPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _mi_cuenta_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mi-cuenta.page */ "./src/app/pages/mi-cuenta/mi-cuenta.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _mi_cuenta_page__WEBPACK_IMPORTED_MODULE_5__["MiCuentaPage"]
    }
];
var MiCuentaPageModule = /** @class */ (function () {
    function MiCuentaPageModule() {
    }
    MiCuentaPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"]
            ],
            declarations: [_mi_cuenta_page__WEBPACK_IMPORTED_MODULE_5__["MiCuentaPage"]]
        })
    ], MiCuentaPageModule);
    return MiCuentaPageModule;
}());



/***/ }),

/***/ "./src/app/pages/mi-cuenta/mi-cuenta.page.html":
/*!*****************************************************!*\
  !*** ./src/app/pages/mi-cuenta/mi-cuenta.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"ion-no-border\">\n    <ion-toolbar class=\"toolbarppl\">   \n        <ion-buttons slot=\"start\">\n            <ion-button (click)=\"clickedStar()\">\n                <ion-icon slot=\"icon-only\" src=\"/assets/img/menu_atras.svg\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n      <ion-title style=\"font-size: unset; text-align: center;\">\n        MI CUENTA\n      </ion-title> \n      <ion-buttons slot=\"end\">\n        <ion-menu-button menu=\"first\"\n                         style=\"color: #39B1C0;\">\n        </ion-menu-button>\n      </ion-buttons> \n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n    <ion-grid>\n      <ion-row>\n        <ion-col class=\"title\" size=\"12\">\n          Nombre\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf=\"response == null\">\n        <ion-col class=\"subtitle\" size=\"12\">\n          N/A\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf=\"response != null\">\n        <ion-col class=\"subtitle\" size=\"12\">\n          {{response.user_login}}\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class=\"title\" size=\"12\">\n          Correo electrónico\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf=\"response == null\">\n        <ion-col class=\"subtitle\" size=\"12\">\n          N/A\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf=\"response != null\">\n        <ion-col class=\"subtitle\" size=\"12\">\n          {{response.user_email}}\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class=\"title\" size=\"12\">\n          Nombre de usuario\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf=\"response == null\">\n        <ion-col class=\"subtitle\" size=\"12\">\n          N/A\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf=\"response != null\">\n        <ion-col class=\"subtitle\" size=\"12\">\n          {{response.display_name}}\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class=\"title\" size=\"12\">\n          Contraseña\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf=\"response == null\">\n        <ion-col class=\"subtitle\" size=\"12\">\n          N/A\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf=\"response != null\">\n        <ion-col class=\"subtitle\" size=\"12\">\n          **********\n        </ion-col>\n      </ion-row>\n      <ion-row></ion-row>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-button \n          expand=\"block\"\n          class=\"btnformppl\"\n          type=\"submit\"\n          routerLink=\"/modificar-usuario\"\n          style=\"text-transform: none;\"\n          shape=\"round\">\n        MODIFICAR DATOS\n        </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/mi-cuenta/mi-cuenta.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/mi-cuenta/mi-cuenta.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background:#dfe6ee; }\n\n.toolbarppl {\n  --background:#dfe6ee;\n  color: #1F4D9A; }\n\n.title {\n  color: #1F4D9A;\n  font-weight: bold; }\n\n.subtitle {\n  color: #575756; }\n\n.btnformppl {\n  --background: #1F4D9A;\n  margin-top: 10%;\n  margin-bottom: 5%;\n  width: 70%;\n  font-size: 1em;\n  margin-left: auto;\n  margin-right: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rcHJvL0Rlc2t0b3AvcHJveWVjdG9zL2Rlc3Rpbm9hcnRlX2FwcC9mcm9udC1pb25pYy9zcmMvYXBwL3BhZ2VzL21pLWN1ZW50YS9taS1jdWVudGEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQWEsRUFDaEI7O0FBQ0Q7RUFDSSxxQkFBYTtFQUNiLGVBQWMsRUFDakI7O0FBRUQ7RUFDSSxlQUFjO0VBQ2Qsa0JBQWlCLEVBQ3BCOztBQUVEO0VBQ0ksZUFBYSxFQUNoQjs7QUFFRDtFQUNJLHNCQUFhO0VBQ2IsZ0JBQWU7RUFDZixrQkFBaUI7RUFDakIsV0FBVTtFQUNWLGVBQWM7RUFDZCxrQkFBaUI7RUFDakIsbUJBQWtCLEVBQ3JCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWktY3VlbnRhL21pLWN1ZW50YS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIC0tYmFja2dyb3VuZDojZGZlNmVlO1xyXG59XHJcbi50b29sYmFycHBse1xyXG4gICAgLS1iYWNrZ3JvdW5kOiNkZmU2ZWU7XHJcbiAgICBjb2xvcjogIzFGNEQ5QTtcclxufVxyXG5cclxuLnRpdGxle1xyXG4gICAgY29sb3I6ICMxRjREOUE7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnN1YnRpdGxle1xyXG4gICAgY29sb3I6IzU3NTc1NjtcclxufVxyXG5cclxuLmJ0bmZvcm1wcGx7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMxRjREOUE7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/mi-cuenta/mi-cuenta.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/mi-cuenta/mi-cuenta.page.ts ***!
  \***************************************************/
/*! exports provided: MiCuentaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiCuentaPage", function() { return MiCuentaPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_user_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/user-data.service */ "./src/app/service/user-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MiCuentaPage = /** @class */ (function () {
    function MiCuentaPage(router, serviceRegister) {
        this.router = router;
        this.serviceRegister = serviceRegister;
        this.userId = null;
        this.response = null;
    }
    MiCuentaPage.prototype.ngOnInit = function () {
        var _this = this;
        if (this.userId == null) {
            this.serviceRegister.present('Cargando datos usuario');
            this.serviceRegister.getUserId()
                .then(function (data) {
                _this.userId = data;
                _this.serviceRegister.getDataUser(_this.userId)
                    .then(function (datauser) {
                    _this.serviceRegister.dismiss();
                    _this.response = JSON.parse(datauser.data)[0];
                    console.log(JSON.parse(datauser.data)[0]);
                })
                    .catch(function (error) {
                    _this.serviceRegister.dismiss();
                    console.log('Error al obtener los datos');
                });
            })
                .catch(function (error) {
                _this.serviceRegister.dismiss();
                console.log('Error de conexión');
            });
        }
    };
    MiCuentaPage.prototype.clickedStar = function () {
        this.router.navigate(['/tabs/inicio']);
    };
    MiCuentaPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mi-cuenta',
            template: __webpack_require__(/*! ./mi-cuenta.page.html */ "./src/app/pages/mi-cuenta/mi-cuenta.page.html"),
            styles: [__webpack_require__(/*! ./mi-cuenta.page.scss */ "./src/app/pages/mi-cuenta/mi-cuenta.page.scss")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _service_user_data_service__WEBPACK_IMPORTED_MODULE_2__["UserDataService"]])
    ], MiCuentaPage);
    return MiCuentaPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-mi-cuenta-mi-cuenta-module.js.map