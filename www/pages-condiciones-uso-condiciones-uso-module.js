(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-condiciones-uso-condiciones-uso-module"],{

/***/ "./src/app/pages/condiciones-uso/condiciones-uso.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/condiciones-uso/condiciones-uso.module.ts ***!
  \*****************************************************************/
/*! exports provided: CondicionesUsoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CondicionesUsoPageModule", function() { return CondicionesUsoPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _condiciones_uso_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./condiciones-uso.page */ "./src/app/pages/condiciones-uso/condiciones-uso.page.ts");
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
        component: _condiciones_uso_page__WEBPACK_IMPORTED_MODULE_5__["CondicionesUsoPage"]
    }
];
var CondicionesUsoPageModule = /** @class */ (function () {
    function CondicionesUsoPageModule() {
    }
    CondicionesUsoPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"]
            ],
            declarations: [_condiciones_uso_page__WEBPACK_IMPORTED_MODULE_5__["CondicionesUsoPage"]]
        })
    ], CondicionesUsoPageModule);
    return CondicionesUsoPageModule;
}());



/***/ }),

/***/ "./src/app/pages/condiciones-uso/condiciones-uso.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/condiciones-uso/condiciones-uso.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"ion-no-border\">\n    <ion-toolbar class=\"toolbarppl\">   \n        <ion-buttons slot=\"start\">\n            <ion-button (click)=\"clickedStar()\">\n                <ion-icon slot=\"icon-only\" src=\"/assets/img/menu_atras.svg\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n      <ion-title style=\"font-size: unset; text-align: center;\">\n        CONDICIONES\n      </ion-title> \n      <ion-buttons slot=\"end\">\n        <ion-menu-button menu=\"first\"\n                         style=\"color: #39B1C0;\">\n        </ion-menu-button>\n      </ion-buttons> \n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <p>\n    <strong>AR??NZAZU VAQUERO JIM??NEZ</strong> ??? Destino Arte es una entidad no s??lo comprometida con ofrecer a sus clientes la m??xima calidad de los productos y servicios que tiene, sino tambi??n con el escrupuloso cumplimiento de la \n    legislaci??n vigente en materia de privacidad e internet. Es por ello que, a trav??s del presente aviso, el prestador de servicios de la sociedad de la informaci??n, proporciona los datos que est?? obligado a poner a \n    disposici??n de los consumidores y usuarios, de conformidad con lo previsto en el art. 10 de la Ley 34/2002, de 11 de Julio, de servicios de la sociedad de la informaci??n y de comercio electr??nico y en la normativa\n    europea sobre Protecci??n de Datos de Car??cter Personal. Y todo ello en los siguientes t??rminos:\n  </p>\n  <p>\n    <strong>\n      1??. Esta app es propiedad de:\n    </strong>\n  </p>\n  <ul>\n    <li><strong>Identidad: </strong>AR??NZAZU VAQUERO JIM??NEZ ??? Destino Arte</li> \n    <li><strong>DNI: </strong>54065760M</li>\n    <li><strong>Direcci??n postal:</strong> C/ Cruz de Ayala, n?? 4, 35200 Telde</li>\n    <li><strong>Tel??fono: </strong>655 104 032</li>\n    <li><strong>Correo electr??nico: </strong>info@destinoarte.com</li>\n  </ul>\n  <p>\n    <strong>\n      2??. Todas las marcas, logotipos, nombres comerciales, signos distintivos, servicios, contenidos, v??deos, textos, fotograf??as, gr??ficos, im??genes, software, links e informaciones de cualquier clase que \n      aparecen en esta web son igualmente de propiedad de AR??NZAZU VAQUERO JIM??NEZ, por lo que no podr??n ser reproducidos, distribuidos, comunicados p??blicamente, transformados o modificados sin su autorizaci??n expresa \n      y por escrito.\n    </strong>\n  </p>\n  <p>\n    <strong>AR??NZAZU VAQUERO JIM??NEZ</strong> se reserva expresamente los derechos de reproducci??n, modificaci??n, adaptaci??n, comunicaci??n p??blica, mantenimiento, correcci??n de errores, cesi??n, venta, alquiler, pr??stamo y cualquier \n    otro derecho de propiedad intelectual o industrial sobre los contenidos de la web, prohibi??ndose el ejercicio de los anteriores derechos sin su autorizaci??n expresa.\n    El establecimiento de un enlace o link a otra p??gina o sitio en Internet, no implica en ning??n caso la aceptaci??n y aprobaci??n por parte de <strong>AR??NZAZU VAQUERO JIM??NEZ</strong> de sus contenidos o servicios, y por tanto no \n    asume ninguna responsabilidad por ellos.\n    Quien se proponga establecer un enlace o link en esta web deber?? solicitar previamente el consentimiento de su titular, reserv??ndose el mismo el derecho a reclamar los posibles da??os que se pudieran provocar \n    por el establecimiento de este enlace o link sin la necesaria autorizaci??n.\n  </p>\n  <p>\n    <strong>\n      3??. Pol??tica de Privacidad: AR??NZAZU VAQUERO JIM??NEZ ha procedido a adecuarse a la normativa vigente de protecci??n de datos de car??cter personal, adaptando todas las medidas t??cnicas y organizativas necesarias \n      para garantizar la seguridad de los datos de car??cter personal de sus clientes y usuarios, y para evitar su alteraci??n, p??rdida, tratamiento o acceso no autorizado.\n    </strong>\n  </p>\n  <p>\n    Los datos de car??cter personal que pudieran recogerse a trav??s de esta web, ser??n tratados de forma leal y l??cita conforme a los principios y derechos recogidos en la legislaci??n de Protecci??n de Datos de Car??cter \n    Personal.\n    Dichos datos podr??n ser incorporados a los sistemas de tratamiento de AR??NZAZU VAQUERO JIM??NEZ, con las finalidades concretas que se deriven de cumplir adecuadamente con los servicios o productos solicitados y \n    comunicarse con usted.\n    En el supuesto de que se hubiera facilitado a los usuarios o clientes la posibilidad de crear claves personales de acceso, compuestas por un c??digo de cliente (login) y una contrase??a (password) para poder \n    visitar zonas de uso restringido, ??stos ser??n los ??nicos que podr??n hacer uso del mismo y, en consecuencia, se responsabilizar??n por todas las operaciones realizadas con dichas claves.\n    A este fin, el usuario deber?? seleccionar unos caracteres que no sean f??cilmente identificables y mantenerlos en secreto. Facilitar, usar, intentar descifrar las claves de acceso de otros o desvelarlas a \n    otras personas no autorizadas es considerado como una grave violaci??n de las normas de utilizaci??n y seguridad. Si el usuario tuviera razones para creer que su clave es o puede ser conocido por alguna persona \n    no autorizada para ello, deber?? ponerlo inmediatamente en conocimiento de AR??NZAZU VAQUERO JIM??NEZ para que le sea asignada una nueva.\n    Menores de edad\n    Los servicios prestados est??n dirigidos a personas mayores de edad. Si en el alg??n caso fueran dirigidos espec??ficamente a menores de edad, AR??NZAZU VAQUERO JIM??NEZ solicitar?? la conformidad de los padres o \n    tutores para la recogida y tratamiento de los datos personales.\n    Si el usuario registrado es menor de edad, se requiere que cuente con el previo consentimiento de sus padres o tutores antes de proceder a la inclusi??n de sus datos personales en los formularios del Sitio Web.\n    Sus datos no podr??n ser cedidos a terceros sin su consentimiento, con las excepciones establecidas en la Ley.\n    Los usuarios de la web podr??n ejercer sus derechos de acceso, rectificaci??n, supresi??n y otros en relaci??n con sus datos, ante AR??NZAZU VAQUERO JIM??NEZ mediante e-mail, carta o personaci??n en el domicilio \n    indicado al principio.\n  </p>\n  <p>\n    Resumen pol??tica privacidad:\n  </p>\n  <p>\n    <strong>\n      INFORMACI??N B??SICA SOBRE PROTECCI??N DE DATOS\n    </strong>\n  </p>\n  <table>\n    <tbody>\n      <tr>\n        <td width=\"121\">Responsable</td>\n        <td width=\"456\">AR??NZAZU VAQUERO JIM??NEZ</td>\n      </tr>\n      <tr>\n        <td width=\"121\">Finalidad</td>\n        <td width=\"456\">Gesti??n de sus datos para prestarle servicios o ventas, atender sus consultas, facturarle y comunicarse con usted.</td>\n      </tr>\n      <tr>\n        <td width=\"121\">Legitimaci??n</td>\n        <td width=\"456\">Contrato de prestaci??n de servicios/compraventa y consentimiento del interesado.</td>\n      </tr>\n      <tr>\n        <td width=\"121\">Destinatarios</td>\n        <td width=\"456\">Supuestos exigidos por Ley y encargados de tratamiento.</td>\n      </tr>\n      <tr>\n        <td width=\"121\">Derechos</td>\n        <td width=\"456\">Acceder, rectificar y suprimir los datos, as?? como otros derechos, como se explica en la informaci??n adicional.</td>\n      </tr>\n      <tr>\n        <td width=\"121\">Informaci??n adicional</td>\n        <td width=\"456\">Ver en texto adjunto</td>\n      </tr>\n    </tbody>\n  </table>&nbsp;\n  <p>\n    <strong>\n      INFORMACI??N ADICIONAL SOBRE PROTECCI??N DE DATOS:\n    </strong>\n  </p>\n  <p>\n    <strong>\n      1??. ??Qui??n es el responsable de tratamiento de sus datos?\n    </strong>\n  </p>\n  <ul>\n    <li><strong>Identidad:</strong> AR??NZAZU VAQUERO JIM??NEZ.</li>\n    <li><strong>DNI:</strong> 54065760M</li>\n    <li><strong>Direcci??n postal:</strong> C/ Cruz de Ayala, 4 35200 Telde</li>\n    <li><strong>Tel??fono:</strong> 655 104 032</li>\n    <li><strong>Correo electr??nico:</strong> info@destinoarte.com</li>\n  </ul>\n  <p>\n    <strong>\n      2??. ??Con qu?? finalidad se tratan sus datos personales?\n    </strong>\n  </p>\n  <p>\n    Sus datos ser??n tratados con el fin de prestarle servicios o ventas relacionados con nuestra actividad, atender sus consultas, facturarle y comunicarse con usted.\n    Los datos que se tratan tienen car??cter obligatorio y debe proporcionarlos en todo caso, pues de lo contrario, no se podr??a prestar el servicio o venta encomendado ni cumplir las dem??s finalidades expresadas.\n  </p>\n  <p>\n    <strong>\n      3??. ??Por cu??nto tiempo se van a conservar sus datos?\n    </strong>\n  </p>\n  <p>\n    Los datos personales proporcionados se conservar??n mientras se mantenga la relaci??n contractual o mientras no se solicite su supresi??n por el interesado. No obstante, sus datos permanecer??n bloqueados durante \n    los plazos de prescripci??n pertinentes.\n  </p>\n  <p>\n    <strong>\n      4??. ??Cu??l es la legitimaci??n para el tratamiento de sus datos?\n    </strong>\n  </p>\n  <p>\n    La base legal para el tratamiento de sus datos es la ejecuci??n del contrato de venta o de prestaci??n de servicios.\n    Tambi??n lo es su consentimiento.\n  </p>\n  <p>\n    <strong>\n      5??. ??A qu?? destinatarios se comunicar??n sus datos?\n    </strong>\n  </p>\n  <p>\n    Los datos se comunicar??n ???por imperativo legal- a las Administraciones P??blicas con competencia en la materia, y a nuestros encargados de tratamiento (si desea m??s informaci??n sobre su identidad, nos la puede \n    solicitar). No se producen transferencias internacionales de datos, salvo cuando se hace un pedido desde terceros pa??ses.\n  </p>\n  <p>\n    <strong>\n      6??. ??Cu??les son sus derechos al facilitar sus datos?\n    </strong>\n  </p>\n  <ul>\n    <li>\n      Sus derechos son los regulados en el Reglamento General de Protecci??n de Datos Europeos, es decir:\n    </li>\n    <ul>\n      <li>- Derecho a acceder o rectificar sus datos, a su supresi??n, a la oposici??n y limitaci??n de su tratamiento, y a su portabilidad.</li>\n      <li>- Derecho a revocar su consentimiento cuando se haya dada para alg??n fin concreto.</li>\n      <li>- Estos derechos los puede ejercer mediante carta postal certificada, e-mail o personaci??n directa y por escrito en nuestra sede, solicit??ndonos previamente si lo desea un formulario al efecto.</li>\n      <li>- Tambi??n tiene derecho a reclamar ante la Autoridad de control cuando no haya obtenido satisfacci??n en el ejercicio de sus derechos, presentando solicitud escrita por medio del Registro (f??sico o electr??nico) de la misma.</li>\n      <li>- Si quiere ampliar informaci??n sobre en qu?? consiste cada uno de sus derechos, nos lo puede solicitar por cualquier v??a.</li>\n    </ul>\n  </ul>\n  <p>\n    <strong>\n      7??. ??Cu??l es la procedencia de sus datos?\n    </strong>\n  </p>\n  <ul>\n    <li>\n      Sus datos han sido recibidos:\n    </li>\n    <ul>\n      <li>- Porque nos los ha facilitado directamente.</li>\n    </ul>\n  </ul>\n  <p>\n    Los datos que se tratan pueden consistir en denominaci??n social, nombres, apellidos, documento identificativo, tel??fonos, e-mails, direcciones postales.\n  </p>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/condiciones-uso/condiciones-uso.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/condiciones-uso/condiciones-uso.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toolbarppl {\n  --background:#dfe6ee;\n  color: #1F4D9A; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rcHJvL0Rlc2t0b3AvcHJveWVjdG9zL2Rlc3Rpbm9hcnRlX2FwcC9mcm9udC1pb25pYy9zcmMvYXBwL3BhZ2VzL2NvbmRpY2lvbmVzLXVzby9jb25kaWNpb25lcy11c28ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQWE7RUFDYixlQUFjLEVBQ2pCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY29uZGljaW9uZXMtdXNvL2NvbmRpY2lvbmVzLXVzby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9vbGJhcnBwbHtcclxuICAgIC0tYmFja2dyb3VuZDojZGZlNmVlO1xyXG4gICAgY29sb3I6ICMxRjREOUE7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/condiciones-uso/condiciones-uso.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/condiciones-uso/condiciones-uso.page.ts ***!
  \***************************************************************/
/*! exports provided: CondicionesUsoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CondicionesUsoPage", function() { return CondicionesUsoPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CondicionesUsoPage = /** @class */ (function () {
    function CondicionesUsoPage(router) {
        this.router = router;
    }
    CondicionesUsoPage.prototype.ngOnInit = function () {
    };
    CondicionesUsoPage.prototype.clickedStar = function () {
        this.router.navigate(['/tabs/inicio']);
    };
    CondicionesUsoPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-condiciones-uso',
            template: __webpack_require__(/*! ./condiciones-uso.page.html */ "./src/app/pages/condiciones-uso/condiciones-uso.page.html"),
            styles: [__webpack_require__(/*! ./condiciones-uso.page.scss */ "./src/app/pages/condiciones-uso/condiciones-uso.page.scss")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CondicionesUsoPage);
    return CondicionesUsoPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-condiciones-uso-condiciones-uso-module.js.map