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

module.exports = "<ion-header class=\"ion-no-border\">\n    <ion-toolbar class=\"toolbarppl\">   \n        <ion-buttons slot=\"start\">\n            <ion-button (click)=\"clickedStar()\">\n                <ion-icon slot=\"icon-only\" src=\"/assets/img/menu_atras.svg\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n      <ion-title style=\"font-size: unset; text-align: center;\">\n        CONDICIONES\n      </ion-title> \n      <ion-buttons slot=\"end\">\n        <ion-menu-button menu=\"first\"\n                         style=\"color: #39B1C0;\">\n        </ion-menu-button>\n      </ion-buttons> \n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <p>\n    <strong>ARÁNZAZU VAQUERO JIMÉNEZ</strong> – Destino Arte es una entidad no sólo comprometida con ofrecer a sus clientes la máxima calidad de los productos y servicios que tiene, sino también con el escrupuloso cumplimiento de la \n    legislación vigente en materia de privacidad e internet. Es por ello que, a través del presente aviso, el prestador de servicios de la sociedad de la información, proporciona los datos que está obligado a poner a \n    disposición de los consumidores y usuarios, de conformidad con lo previsto en el art. 10 de la Ley 34/2002, de 11 de Julio, de servicios de la sociedad de la información y de comercio electrónico y en la normativa\n    europea sobre Protección de Datos de Carácter Personal. Y todo ello en los siguientes términos:\n  </p>\n  <p>\n    <strong>\n      1º. Esta app es propiedad de:\n    </strong>\n  </p>\n  <ul>\n    <li><strong>Identidad: </strong>ARÁNZAZU VAQUERO JIMÉNEZ – Destino Arte</li> \n    <li><strong>DNI: </strong>54065760M</li>\n    <li><strong>Dirección postal:</strong> C/ Cruz de Ayala, nº 4, 35200 Telde</li>\n    <li><strong>Teléfono: </strong>655 104 032</li>\n    <li><strong>Correo electrónico: </strong>info@destinoarte.com</li>\n  </ul>\n  <p>\n    <strong>\n      2º. Todas las marcas, logotipos, nombres comerciales, signos distintivos, servicios, contenidos, vídeos, textos, fotografías, gráficos, imágenes, software, links e informaciones de cualquier clase que \n      aparecen en esta web son igualmente de propiedad de ARÁNZAZU VAQUERO JIMÉNEZ, por lo que no podrán ser reproducidos, distribuidos, comunicados públicamente, transformados o modificados sin su autorización expresa \n      y por escrito.\n    </strong>\n  </p>\n  <p>\n    <strong>ARÁNZAZU VAQUERO JIMÉNEZ</strong> se reserva expresamente los derechos de reproducción, modificación, adaptación, comunicación pública, mantenimiento, corrección de errores, cesión, venta, alquiler, préstamo y cualquier \n    otro derecho de propiedad intelectual o industrial sobre los contenidos de la web, prohibiéndose el ejercicio de los anteriores derechos sin su autorización expresa.\n    El establecimiento de un enlace o link a otra página o sitio en Internet, no implica en ningún caso la aceptación y aprobación por parte de <strong>ARÁNZAZU VAQUERO JIMÉNEZ</strong> de sus contenidos o servicios, y por tanto no \n    asume ninguna responsabilidad por ellos.\n    Quien se proponga establecer un enlace o link en esta web deberá solicitar previamente el consentimiento de su titular, reservándose el mismo el derecho a reclamar los posibles daños que se pudieran provocar \n    por el establecimiento de este enlace o link sin la necesaria autorización.\n  </p>\n  <p>\n    <strong>\n      3º. Política de Privacidad: ARÁNZAZU VAQUERO JIMÉNEZ ha procedido a adecuarse a la normativa vigente de protección de datos de carácter personal, adaptando todas las medidas técnicas y organizativas necesarias \n      para garantizar la seguridad de los datos de carácter personal de sus clientes y usuarios, y para evitar su alteración, pérdida, tratamiento o acceso no autorizado.\n    </strong>\n  </p>\n  <p>\n    Los datos de carácter personal que pudieran recogerse a través de esta web, serán tratados de forma leal y lícita conforme a los principios y derechos recogidos en la legislación de Protección de Datos de Carácter \n    Personal.\n    Dichos datos podrán ser incorporados a los sistemas de tratamiento de ARÁNZAZU VAQUERO JIMÉNEZ, con las finalidades concretas que se deriven de cumplir adecuadamente con los servicios o productos solicitados y \n    comunicarse con usted.\n    En el supuesto de que se hubiera facilitado a los usuarios o clientes la posibilidad de crear claves personales de acceso, compuestas por un código de cliente (login) y una contraseña (password) para poder \n    visitar zonas de uso restringido, éstos serán los únicos que podrán hacer uso del mismo y, en consecuencia, se responsabilizarán por todas las operaciones realizadas con dichas claves.\n    A este fin, el usuario deberá seleccionar unos caracteres que no sean fácilmente identificables y mantenerlos en secreto. Facilitar, usar, intentar descifrar las claves de acceso de otros o desvelarlas a \n    otras personas no autorizadas es considerado como una grave violación de las normas de utilización y seguridad. Si el usuario tuviera razones para creer que su clave es o puede ser conocido por alguna persona \n    no autorizada para ello, deberá ponerlo inmediatamente en conocimiento de ARÁNZAZU VAQUERO JIMÉNEZ para que le sea asignada una nueva.\n    Menores de edad\n    Los servicios prestados están dirigidos a personas mayores de edad. Si en el algún caso fueran dirigidos específicamente a menores de edad, ARÁNZAZU VAQUERO JIMÉNEZ solicitará la conformidad de los padres o \n    tutores para la recogida y tratamiento de los datos personales.\n    Si el usuario registrado es menor de edad, se requiere que cuente con el previo consentimiento de sus padres o tutores antes de proceder a la inclusión de sus datos personales en los formularios del Sitio Web.\n    Sus datos no podrán ser cedidos a terceros sin su consentimiento, con las excepciones establecidas en la Ley.\n    Los usuarios de la web podrán ejercer sus derechos de acceso, rectificación, supresión y otros en relación con sus datos, ante ARÁNZAZU VAQUERO JIMÉNEZ mediante e-mail, carta o personación en el domicilio \n    indicado al principio.\n  </p>\n  <p>\n    Resumen política privacidad:\n  </p>\n  <p>\n    <strong>\n      INFORMACIÓN BÁSICA SOBRE PROTECCIÓN DE DATOS\n    </strong>\n  </p>\n  <table>\n    <tbody>\n      <tr>\n        <td width=\"121\">Responsable</td>\n        <td width=\"456\">ARÁNZAZU VAQUERO JIMÉNEZ</td>\n      </tr>\n      <tr>\n        <td width=\"121\">Finalidad</td>\n        <td width=\"456\">Gestión de sus datos para prestarle servicios o ventas, atender sus consultas, facturarle y comunicarse con usted.</td>\n      </tr>\n      <tr>\n        <td width=\"121\">Legitimación</td>\n        <td width=\"456\">Contrato de prestación de servicios/compraventa y consentimiento del interesado.</td>\n      </tr>\n      <tr>\n        <td width=\"121\">Destinatarios</td>\n        <td width=\"456\">Supuestos exigidos por Ley y encargados de tratamiento.</td>\n      </tr>\n      <tr>\n        <td width=\"121\">Derechos</td>\n        <td width=\"456\">Acceder, rectificar y suprimir los datos, así como otros derechos, como se explica en la información adicional.</td>\n      </tr>\n      <tr>\n        <td width=\"121\">Información adicional</td>\n        <td width=\"456\">Ver en texto adjunto</td>\n      </tr>\n    </tbody>\n  </table>&nbsp;\n  <p>\n    <strong>\n      INFORMACIÓN ADICIONAL SOBRE PROTECCIÓN DE DATOS:\n    </strong>\n  </p>\n  <p>\n    <strong>\n      1º. ¿Quién es el responsable de tratamiento de sus datos?\n    </strong>\n  </p>\n  <ul>\n    <li><strong>Identidad:</strong> ARÁNZAZU VAQUERO JIMÉNEZ.</li>\n    <li><strong>DNI:</strong> 54065760M</li>\n    <li><strong>Dirección postal:</strong> C/ Cruz de Ayala, 4 35200 Telde</li>\n    <li><strong>Teléfono:</strong> 655 104 032</li>\n    <li><strong>Correo electrónico:</strong> info@destinoarte.com</li>\n  </ul>\n  <p>\n    <strong>\n      2º. ¿Con qué finalidad se tratan sus datos personales?\n    </strong>\n  </p>\n  <p>\n    Sus datos serán tratados con el fin de prestarle servicios o ventas relacionados con nuestra actividad, atender sus consultas, facturarle y comunicarse con usted.\n    Los datos que se tratan tienen carácter obligatorio y debe proporcionarlos en todo caso, pues de lo contrario, no se podría prestar el servicio o venta encomendado ni cumplir las demás finalidades expresadas.\n  </p>\n  <p>\n    <strong>\n      3º. ¿Por cuánto tiempo se van a conservar sus datos?\n    </strong>\n  </p>\n  <p>\n    Los datos personales proporcionados se conservarán mientras se mantenga la relación contractual o mientras no se solicite su supresión por el interesado. No obstante, sus datos permanecerán bloqueados durante \n    los plazos de prescripción pertinentes.\n  </p>\n  <p>\n    <strong>\n      4º. ¿Cuál es la legitimación para el tratamiento de sus datos?\n    </strong>\n  </p>\n  <p>\n    La base legal para el tratamiento de sus datos es la ejecución del contrato de venta o de prestación de servicios.\n    También lo es su consentimiento.\n  </p>\n  <p>\n    <strong>\n      5º. ¿A qué destinatarios se comunicarán sus datos?\n    </strong>\n  </p>\n  <p>\n    Los datos se comunicarán –por imperativo legal- a las Administraciones Públicas con competencia en la materia, y a nuestros encargados de tratamiento (si desea más información sobre su identidad, nos la puede \n    solicitar). No se producen transferencias internacionales de datos, salvo cuando se hace un pedido desde terceros países.\n  </p>\n  <p>\n    <strong>\n      6º. ¿Cuáles son sus derechos al facilitar sus datos?\n    </strong>\n  </p>\n  <ul>\n    <li>\n      Sus derechos son los regulados en el Reglamento General de Protección de Datos Europeos, es decir:\n    </li>\n    <ul>\n      <li>- Derecho a acceder o rectificar sus datos, a su supresión, a la oposición y limitación de su tratamiento, y a su portabilidad.</li>\n      <li>- Derecho a revocar su consentimiento cuando se haya dada para algún fin concreto.</li>\n      <li>- Estos derechos los puede ejercer mediante carta postal certificada, e-mail o personación directa y por escrito en nuestra sede, solicitándonos previamente si lo desea un formulario al efecto.</li>\n      <li>- También tiene derecho a reclamar ante la Autoridad de control cuando no haya obtenido satisfacción en el ejercicio de sus derechos, presentando solicitud escrita por medio del Registro (físico o electrónico) de la misma.</li>\n      <li>- Si quiere ampliar información sobre en qué consiste cada uno de sus derechos, nos lo puede solicitar por cualquier vía.</li>\n    </ul>\n  </ul>\n  <p>\n    <strong>\n      7º. ¿Cuál es la procedencia de sus datos?\n    </strong>\n  </p>\n  <ul>\n    <li>\n      Sus datos han sido recibidos:\n    </li>\n    <ul>\n      <li>- Porque nos los ha facilitado directamente.</li>\n    </ul>\n  </ul>\n  <p>\n    Los datos que se tratan pueden consistir en denominación social, nombres, apellidos, documento identificativo, teléfonos, e-mails, direcciones postales.\n  </p>\n</ion-content>\n"

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