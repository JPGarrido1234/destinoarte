(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "./src/app/pages/home/home-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_2__["HomePage"]
    }
];
var HomePageRoutingModule = /** @class */ (function () {
    function HomePageRoutingModule() {
    }
    HomePageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], HomePageRoutingModule);
    return HomePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/pages/home/home-routing.module.ts");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _home_routing_module__WEBPACK_IMPORTED_MODULE_4__["HomePageRoutingModule"]
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/pages/home/home.page.html":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"ion-padding\">\n  <ion-img class=\"imgTam\" src=\"assets/img/logo.png\"></ion-img>\n  <ion-text class=\"txtColorBlue\">\n    <p>Visita la ciudad que eligas a tu ritmo y sin perderte nada</p>\n  </ion-text>\n  <ion-button \n            routerLink=\"/inicio-sesion\"\n            class=\"btnformppl\" \n            expand=\"block\" \n            shape=\"round\">\n    INICIAR SESIÓN\n  </ion-button>\n  <ion-button \n            routerLink=\"/mas-info\"\n            class=\"btnformsec\"\n            expand=\"block\"\n            shape=\"round\">\n    MÁS INFO\n  </ion-button>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background:#dfe6ee; }\n\n.imgTam {\n  margin-top: 60%;\n  width: 80%;\n  margin-left: auto;\n  margin-right: auto; }\n\n.txtColorBlue p {\n  color: #39B1C0;\n  font-size: 1.2em;\n  margin-top: 10%;\n  width: 80%;\n  margin-left: auto;\n  margin-right: auto;\n  text-align: center; }\n\n.btnformppl {\n  --background: #1F4D9A;\n  margin-top: 20%;\n  margin-bottom: 5%;\n  width: 70%;\n  font-size: 1em;\n  margin-left: auto;\n  margin-right: auto; }\n\n.btnformsec {\n  --background:#39B1C0;\n  color: #FFFFFF;\n  margin-top: 7%;\n  width: 70%;\n  font-size: 1.1em;\n  margin-left: auto;\n  margin-right: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rcHJvL0Rlc2t0b3AvcHJveWVjdG9zL2Rlc3Rpbm9hcnRlX2FwcC9mcm9udC1pb25pYy9zcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBYSxFQUNoQjs7QUFFRDtFQUNJLGdCQUFjO0VBQ2QsV0FBVTtFQUNWLGtCQUFpQjtFQUNqQixtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSxlQUFhO0VBQ2IsaUJBQWdCO0VBQ2hCLGdCQUFlO0VBQ2YsV0FBVTtFQUNWLGtCQUFpQjtFQUNqQixtQkFBa0I7RUFDbEIsbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksc0JBQWE7RUFDYixnQkFBZTtFQUNmLGtCQUFpQjtFQUNqQixXQUFVO0VBQ1YsZUFBYztFQUNkLGtCQUFpQjtFQUNqQixtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSxxQkFBYTtFQUNiLGVBQWE7RUFDYixlQUFjO0VBQ2QsV0FBVTtFQUNWLGlCQUFnQjtFQUNoQixrQkFBaUI7RUFDakIsbUJBQWtCLEVBQ3JCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiNkZmU2ZWU7XHJcbn1cclxuXHJcbi5pbWdUYW17XHJcbiAgICBtYXJnaW4tdG9wOjYwJTtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLnR4dENvbG9yQmx1ZSBwe1xyXG4gICAgY29sb3I6IzM5QjFDMDtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idG5mb3JtcHBse1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMUY0RDlBO1xyXG4gICAgbWFyZ2luLXRvcDogMjAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLmJ0bmZvcm1zZWN7XHJcbiAgICAtLWJhY2tncm91bmQ6IzM5QjFDMDtcclxuICAgIGNvbG9yOiNGRkZGRkY7XHJcbiAgICBtYXJnaW4tdG9wOiA3JTtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBmb250LXNpemU6IDEuMWVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
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

var HomePage = /** @class */ (function () {
    function HomePage() {
    }
    HomePage.prototype.ngOnInit = function () {
    };
    HomePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/pages/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module.js.map