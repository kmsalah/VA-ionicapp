webpackJsonp([1],{

/***/ 32:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 32;

/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/result/result.module": [
		92,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 34;

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ResultPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ResultPage = (function () {
    function ResultPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.quiz = navParams.get('quiz');
        this.score = navParams.get('score');
    }
    ResultPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ResultPage');
    };
    return ResultPage;
}());
ResultPage = __decorate([
    __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPage"](),
    __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"]({
        selector: 'page-result',template:/*ion-inline-start:"/Users/khalidsalah/Desktop/VA-ionicapp/src/pages/result/result.html"*/'<!--\n  Generated template for the ResultPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar hideBackButton color="primary">\n    <ion-title>Your Results</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list inset no-lines *ngFor  = "let item of quiz;  let i=index">\n    <h3><span class="num">{{i+1}}.</span> &nbsp;{{item.question}}</h3>\n    <div *ngIf="item.solution != item.answer">\n      <ion-item class="incorrect" >\n        <ion-icon name="radio-button-on" item-left></ion-icon>\n        {{item.answer}} was incorrect.\n      </ion-item>\n      <ion-item class="correct">\n        <ion-icon name="radio-button-off" item-left></ion-icon>\n        {{item.solution}} is the correct answer.\n      </ion-item>\n    </div>\n    <div *ngIf="item.solution == item.answer">\n      <ion-item class="correct">\n        <ion-icon name="radio-button-on" item-left></ion-icon>\n        {{item.solution}} is correct.  Great!\n      </ion-item>\n    </div>\n    <br><br>\n  </ion-list>\n  <hr class="incorrect">\n  <h1 style="margin-left:35px;" class="incorrect">Final Score: &nbsp;{{score}}%</h1>\n</ion-content>\n'/*ion-inline-end:"/Users/khalidsalah/Desktop/VA-ionicapp/src/pages/result/result.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
], ResultPage);

//# sourceMappingURL=result.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./src/pages/contact/contact.ts
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return ContactPage;
}());
ContactPage = __decorate([
    __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"]({
        selector: 'page-contact',template:/*ion-inline-start:"/Users/khalidsalah/Desktop/VA-ionicapp/src/pages/contact/contact.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <ion-title>Contact</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <ion-list>\n        <ion-list-header class="lab_dir">HeRC Lab Director</ion-list-header>\n        <br>\n        <ion-item>\n            <ion-icon name="school" item-left></ion-icon>\n            Dr. Jason D. Bakos\n        </ion-item>\n        <ion-item>\n            <ion-icon name="navigate" item-left></ion-icon>\n            University of South Carolina\n            <br>\n            <p>\n                College of Engineering and Computing\n                <br> Office: Swearingen 3A45\n            </p>\n        </ion-item>\n        <ion-item>\n            <ion-icon name="call" item-left></ion-icon>\n            (803) 777-8627\n        </ion-item>\n        <ion-item>\n            <ion-icon name="mail" item-left></ion-icon>\n            <a href="mailto:jbakos@cse.sc.edu">jbakos@cse.sc.edu</a>\n        </ion-item>\n        <ion-item>\n            <ion-icon name="bookmark" item-left></ion-icon>\n            <a href="https://www.cse.sc.edu/~jbakos">www.cse.sc.edu/~jbakos</a>\n        </ion-item>\n        <ion-list>\n            <ion-list-header class="lab_dir">Developer</ion-list-header>\n            <br>\n            <ion-item>\n                <ion-icon name="school" item-left></ion-icon>\n                Khalid Salah\n            </ion-item>\n            <ion-item>\n                <ion-icon name="navigate" item-left></ion-icon>\n                University of South Carolina\n                <br>\n                <p>\n                    College of Engineering and Computing\n                    <br>\n                </p>\n            </ion-item>\n            <ion-item>\n                <ion-icon name="mail" item-left></ion-icon>\n                <a href="mailto:ksalah@email.sc.edu">ksalah@email.sc.edu</a>\n            </ion-item>\n        </ion-list>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/khalidsalah/Desktop/VA-ionicapp/src/pages/contact/contact.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]])
], ContactPage);

//# sourceMappingURL=contact.js.map
// CONCATENATED MODULE: ./src/pages/survey/survey.ts
/* harmony import */ var survey___WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var survey___WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(43);
var survey___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var survey___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SurveyPage = (function () {
    function SurveyPage(navCtrl, db, afAuth) {
        this.navCtrl = navCtrl;
        this.newResponse = {
            age: 0,
            race: '',
            psaLevel: 0,
            weight: 0,
            height: '',
            questionOne: '',
            questionTwo: '',
            questionThree: {
                optionA: false,
                optionB: false,
                optionC: false,
                optionD: false,
                optionE: false
            },
            comments: ''
        };
        this.raceColumns = [
            {
                name: 'col1',
                options: [
                    { text: "Asian/Pacific Islander", value: "Asian/Pacific Islander" },
                    { text: "Black", value: "Black" },
                    { text: "White", value: "White" },
                    { text: "Native American", value: "Native American" },
                    { text: "Hispanic/Latino", value: "Hispanic/Latino" },
                    { text: "Other", value: "Other" }
                ]
            }
        ];
        this.ageColumns = [
            {
                name: 'col1',
                options: [
                    { text: '1', value: '1' },
                    { text: '2', value: '2' },
                    { text: '3', value: '3' },
                    { text: '4', value: '4' },
                    { text: '5', value: '5' },
                    { text: '6', value: '6' },
                    { text: '7', value: '7' },
                    { text: '8', value: '8' },
                    { text: '9', value: '9' },
                    { text: '10', value: '10' },
                    { text: '11', value: '11' },
                    { text: '12', value: '12' },
                    { text: '13', value: '13' },
                    { text: '14', value: '14' },
                    { text: '15', value: '15' },
                    { text: '16', value: '16' },
                    { text: '17', value: '17' },
                    { text: '18', value: '18' },
                    { text: '19', value: '19' },
                    { text: '20', value: '20' },
                    { text: '21', value: '21' },
                    { text: '22', value: '22' },
                    { text: '23', value: '23' },
                    { text: '24', value: '24' },
                    { text: '25', value: '25' },
                    { text: '26', value: '26' },
                    { text: '27', value: '27' },
                    { text: '28', value: '28' },
                    { text: '29', value: '29' },
                    { text: '30', value: '30' },
                    { text: '31', value: '31' },
                    { text: '32', value: '32' },
                    { text: '33', value: '33' },
                    { text: '34', value: '34' },
                    { text: '35', value: '35' },
                    { text: '36', value: '36' },
                    { text: '37', value: '37' },
                    { text: '38', value: '38' },
                    { text: '39', value: '39' },
                    { text: '40', value: '40' },
                    { text: '41', value: '41' },
                    { text: '42', value: '42' },
                    { text: '43', value: '43' },
                    { text: '44', value: '44' },
                    { text: '45', value: '45' },
                    { text: '46', value: '46' },
                    { text: '47', value: '47' },
                    { text: '48', value: '48' },
                    { text: '49', value: '49' },
                    { text: '50', value: '50' },
                    { text: '51', value: '51' },
                    { text: '52', value: '52' },
                    { text: '53', value: '53' },
                    { text: '54', value: '54' },
                    { text: '55', value: '55' },
                    { text: '56', value: '56' },
                    { text: '57', value: '57' },
                    { text: '58', value: '58' },
                    { text: '59', value: '59' },
                    { text: '60', value: '60' },
                    { text: '61', value: '61' },
                    { text: '62', value: '62' },
                    { text: '63', value: '63' },
                    { text: '64', value: '64' },
                    { text: '65', value: '65' },
                    { text: '66', value: '66' },
                    { text: '67', value: '67' },
                    { text: '68', value: '68' },
                    { text: '69', value: '69' },
                    { text: '70', value: '70' },
                    { text: '71', value: '71' },
                    { text: '72', value: '72' },
                    { text: '73', value: '73' },
                    { text: '74', value: '74' },
                    { text: '75', value: '75' },
                    { text: '76', value: '76' },
                    { text: '77', value: '77' },
                    { text: '78', value: '78' },
                    { text: '79', value: '79' },
                    { text: '80', value: '80' },
                    { text: '81', value: '81' },
                    { text: '82', value: '82' },
                    { text: '83', value: '83' },
                    { text: '84', value: '84' },
                    { text: '85', value: '85' },
                    { text: '86', value: '86' },
                    { text: '87', value: '87' },
                    { text: '88', value: '88' },
                    { text: '89', value: '89' },
                    { text: '90', value: '90' },
                    { text: '91', value: '91' },
                    { text: '92', value: '92' },
                    { text: '93', value: '93' },
                    { text: '94', value: '94' },
                    { text: '95', value: '95' },
                    { text: '96', value: '96' },
                    { text: '97', value: '97' },
                    { text: '98', value: '98' },
                    { text: '99', value: '99' },
                    { text: '100', value: '100' },
                    { text: '101', value: '101' },
                    { text: '102', value: '102' },
                    { text: '103', value: '103' },
                    { text: '104', value: '104' },
                    { text: '105', value: '105' },
                    { text: '106', value: '106' },
                    { text: '107', value: '107' },
                    { text: '108', value: '108' },
                    { text: '109', value: '109' },
                    { text: '110', value: '110' },
                    { text: '111', value: '111' },
                    { text: '112', value: '112' },
                    { text: '113', value: '113' },
                    { text: '114', value: '114' },
                    { text: '115', value: '115' },
                ]
            }
        ];
        this.psaColumns = [
            {
                name: 'col1',
                options: [
                    { text: '1', value: '1' },
                    { text: '2', value: '2' },
                    { text: '3', value: '3' },
                    { text: '4', value: '4' },
                    { text: '5', value: '5' },
                    { text: '6', value: '6' },
                    { text: '7', value: '7' },
                    { text: '8', value: '8' },
                    { text: '9', value: '9' },
                    { text: '10', value: '10' }
                ]
            }
        ];
        this.heightColumns = [
            {
                name: 'col1',
                options: [
                    { text: "1'", value: '1' },
                    { text: "2'", value: '2' },
                    { text: "3'", value: '3' },
                    { text: "4'", value: '4' },
                    { text: "5'", value: '5' },
                    { text: "6'", value: '6' },
                    { text: "7'", value: '7' },
                    { text: "8'", value: '8' },
                ]
            }, {
                name: 'col2',
                options: [
                    { text: '1"', value: '1' },
                    { text: '2"', value: '2' },
                    { text: '3"', value: '3' },
                    { text: '4"', value: '4' },
                    { text: '5"', value: '5' },
                    { text: '6"', value: '6' },
                    { text: '7"', value: '7' },
                    { text: '8"', value: '8' },
                    { text: '9"', value: '9' },
                    { text: '10"', value: '10' },
                    { text: '11"', value: '11' },
                    { text: '12"', value: '12' }
                ]
            }
        ];
        this.weightColumns = [
            {
                name: 'col1',
                options: [
                    { text: '50', value: '50' },
                    { text: '51', value: '51' },
                    { text: '52', value: '52' },
                    { text: '53', value: '53' },
                    { text: '54', value: '54' },
                    { text: '55', value: '55' },
                    { text: '56', value: '56' },
                    { text: '57', value: '57' },
                    { text: '58', value: '58' },
                    { text: '59', value: '59' },
                    { text: '60', value: '60' },
                    { text: '61', value: '61' },
                    { text: '62', value: '62' },
                    { text: '63', value: '63' },
                    { text: '64', value: '64' },
                    { text: '65', value: '65' },
                    { text: '66', value: '66' },
                    { text: '67', value: '67' },
                    { text: '68', value: '68' },
                    { text: '69', value: '69' },
                    { text: '70', value: '70' },
                    { text: '71', value: '71' },
                    { text: '72', value: '72' },
                    { text: '73', value: '73' },
                    { text: '74', value: '74' },
                    { text: '75', value: '75' },
                    { text: '76', value: '76' },
                    { text: '77', value: '77' },
                    { text: '78', value: '78' },
                    { text: '79', value: '79' },
                    { text: '80', value: '80' },
                    { text: '81', value: '81' },
                    { text: '82', value: '82' },
                    { text: '83', value: '83' },
                    { text: '84', value: '84' },
                    { text: '85', value: '85' },
                    { text: '86', value: '86' },
                    { text: '87', value: '87' },
                    { text: '88', value: '88' },
                    { text: '89', value: '89' },
                    { text: '90', value: '90' },
                    { text: '91', value: '91' },
                    { text: '92', value: '92' },
                    { text: '93', value: '93' },
                    { text: '94', value: '94' },
                    { text: '95', value: '95' },
                    { text: '96', value: '96' },
                    { text: '97', value: '97' },
                    { text: '98', value: '98' },
                    { text: '99', value: '99' },
                    { text: '100', value: '100' },
                    { text: '101', value: '101' },
                    { text: '102', value: '102' },
                    { text: '103', value: '103' },
                    { text: '104', value: '104' },
                    { text: '105', value: '105' },
                    { text: '106', value: '106' },
                    { text: '107', value: '107' },
                    { text: '108', value: '108' },
                    { text: '109', value: '109' },
                    { text: '110', value: '110' },
                    { text: '111', value: '111' },
                    { text: '112', value: '112' },
                    { text: '113', value: '113' },
                    { text: '114', value: '114' },
                    { text: '115', value: '115' },
                    { text: '116', value: '116' },
                    { text: '117', value: '117' },
                    { text: '118', value: '118' },
                    { text: '119', value: '119' },
                    { text: '120', value: '120' },
                    { text: '121', value: '121' },
                    { text: '122', value: '122' },
                    { text: '123', value: '123' },
                    { text: '124', value: '124' },
                    { text: '125', value: '125' },
                    { text: '126', value: '126' },
                    { text: '127', value: '127' },
                    { text: '128', value: '128' },
                    { text: '129', value: '129' },
                    { text: '130', value: '130' },
                    { text: '131', value: '131' },
                    { text: '132', value: '132' },
                    { text: '133', value: '133' },
                    { text: '134', value: '134' },
                    { text: '135', value: '135' },
                    { text: '136', value: '136' },
                    { text: '137', value: '137' },
                    { text: '138', value: '138' },
                    { text: '139', value: '139' },
                    { text: '140', value: '140' },
                    { text: '141', value: '141' },
                    { text: '142', value: '142' },
                    { text: '143', value: '143' },
                    { text: '144', value: '144' },
                    { text: '145', value: '145' },
                    { text: '146', value: '146' },
                    { text: '147', value: '147' },
                    { text: '148', value: '148' },
                    { text: '149', value: '149' },
                    { text: '150', value: '150' },
                    { text: '151', value: '151' },
                    { text: '152', value: '152' },
                    { text: '153', value: '153' },
                    { text: '154', value: '154' },
                    { text: '155', value: '155' },
                    { text: '156', value: '156' },
                    { text: '157', value: '157' },
                    { text: '158', value: '158' },
                    { text: '159', value: '159' },
                    { text: '160', value: '160' },
                    { text: '161', value: '161' },
                    { text: '162', value: '162' },
                    { text: '163', value: '163' },
                    { text: '164', value: '164' },
                    { text: '165', value: '165' },
                    { text: '166', value: '166' },
                    { text: '167', value: '167' },
                    { text: '168', value: '168' },
                    { text: '169', value: '169' },
                    { text: '170', value: '170' },
                    { text: '171', value: '171' },
                    { text: '172', value: '172' },
                    { text: '173', value: '173' },
                    { text: '174', value: '174' },
                    { text: '175', value: '175' },
                    { text: '176', value: '176' },
                    { text: '177', value: '177' },
                    { text: '178', value: '178' },
                    { text: '179', value: '179' },
                    { text: '180', value: '180' },
                    { text: '181', value: '181' },
                    { text: '182', value: '182' },
                    { text: '183', value: '183' },
                    { text: '184', value: '184' },
                    { text: '185', value: '185' },
                    { text: '186', value: '186' },
                    { text: '187', value: '187' },
                    { text: '188', value: '188' },
                    { text: '189', value: '189' },
                    { text: '190', value: '190' },
                    { text: '191', value: '191' },
                    { text: '192', value: '192' },
                    { text: '193', value: '193' },
                    { text: '194', value: '194' },
                    { text: '195', value: '195' },
                    { text: '196', value: '196' },
                    { text: '197', value: '197' },
                    { text: '198', value: '198' },
                    { text: '199', value: '199' },
                    { text: '200', value: '200' },
                    { text: '201', value: '201' },
                    { text: '202', value: '202' },
                    { text: '203', value: '203' },
                    { text: '204', value: '204' },
                    { text: '205', value: '205' },
                    { text: '206', value: '206' },
                    { text: '207', value: '207' },
                    { text: '208', value: '208' },
                    { text: '209', value: '209' },
                    { text: '210', value: '210' },
                    { text: '211', value: '211' },
                    { text: '212', value: '212' },
                    { text: '213', value: '213' },
                    { text: '214', value: '214' },
                    { text: '215', value: '215' },
                    { text: '216', value: '216' },
                    { text: '217', value: '217' },
                    { text: '218', value: '218' },
                    { text: '219', value: '219' },
                    { text: '220', value: '220' },
                    { text: '221', value: '221' },
                    { text: '222', value: '222' },
                    { text: '223', value: '223' },
                    { text: '224', value: '224' },
                    { text: '225', value: '225' },
                    { text: '226', value: '226' },
                    { text: '227', value: '227' },
                    { text: '228', value: '228' },
                    { text: '229', value: '229' },
                    { text: '230', value: '230' },
                    { text: '231', value: '231' },
                    { text: '232', value: '232' },
                    { text: '233', value: '233' },
                    { text: '234', value: '234' },
                    { text: '235', value: '235' },
                    { text: '236', value: '236' },
                    { text: '237', value: '237' },
                    { text: '238', value: '238' },
                    { text: '239', value: '239' },
                    { text: '240', value: '240' },
                    { text: '241', value: '241' },
                    { text: '242', value: '242' },
                    { text: '243', value: '243' },
                    { text: '244', value: '244' },
                    { text: '245', value: '245' },
                    { text: '246', value: '246' },
                    { text: '247', value: '247' },
                    { text: '248', value: '248' },
                    { text: '249', value: '249' },
                    { text: '250', value: '250' },
                    { text: '251', value: '251' },
                    { text: '252', value: '252' },
                    { text: '253', value: '253' },
                    { text: '254', value: '254' },
                    { text: '255', value: '255' },
                    { text: '256', value: '256' },
                    { text: '257', value: '257' },
                    { text: '258', value: '258' },
                    { text: '259', value: '259' },
                    { text: '260', value: '260' },
                    { text: '261', value: '261' },
                    { text: '262', value: '262' },
                    { text: '263', value: '263' },
                    { text: '264', value: '264' },
                    { text: '265', value: '265' },
                    { text: '266', value: '266' },
                    { text: '267', value: '267' },
                    { text: '268', value: '268' },
                    { text: '269', value: '269' },
                    { text: '270', value: '270' },
                    { text: '271', value: '271' },
                    { text: '272', value: '272' },
                    { text: '273', value: '273' },
                    { text: '274', value: '274' },
                    { text: '275', value: '275' },
                    { text: '276', value: '276' },
                    { text: '277', value: '277' },
                    { text: '278', value: '278' },
                    { text: '279', value: '279' },
                    { text: '280', value: '280' },
                    { text: '281', value: '281' },
                    { text: '282', value: '282' },
                    { text: '283', value: '283' },
                    { text: '284', value: '284' },
                    { text: '285', value: '285' },
                    { text: '286', value: '286' },
                    { text: '287', value: '287' },
                    { text: '288', value: '288' },
                    { text: '289', value: '289' },
                    { text: '290', value: '290' },
                    { text: '291', value: '291' },
                    { text: '292', value: '292' },
                    { text: '293', value: '293' },
                    { text: '294', value: '294' },
                    { text: '295', value: '295' },
                    { text: '296', value: '296' },
                    { text: '297', value: '297' },
                    { text: '298', value: '298' },
                    { text: '299', value: '299' },
                    { text: '300', value: '300' },
                    { text: '301', value: '301' },
                    { text: '302', value: '302' },
                    { text: '303', value: '303' },
                    { text: '304', value: '304' },
                    { text: '305', value: '305' },
                    { text: '306', value: '306' },
                    { text: '307', value: '307' },
                    { text: '308', value: '308' },
                    { text: '309', value: '309' },
                    { text: '310', value: '310' },
                    { text: '311', value: '311' },
                    { text: '312', value: '312' },
                    { text: '313', value: '313' },
                    { text: '314', value: '314' },
                    { text: '315', value: '315' },
                    { text: '316', value: '316' },
                    { text: '317', value: '317' },
                    { text: '318', value: '318' },
                    { text: '319', value: '319' },
                    { text: '320', value: '320' },
                    { text: '321', value: '321' },
                    { text: '322', value: '322' },
                    { text: '323', value: '323' },
                    { text: '324', value: '324' },
                    { text: '325', value: '325' },
                    { text: '326', value: '326' },
                    { text: '327', value: '327' },
                    { text: '328', value: '328' },
                    { text: '329', value: '329' },
                    { text: '330', value: '330' },
                    { text: '331', value: '331' },
                    { text: '332', value: '332' },
                    { text: '333', value: '333' },
                    { text: '334', value: '334' },
                    { text: '335', value: '335' },
                    { text: '336', value: '336' },
                    { text: '337', value: '337' },
                    { text: '338', value: '338' },
                    { text: '339', value: '339' },
                    { text: '340', value: '340' },
                    { text: '341', value: '341' },
                    { text: '342', value: '342' },
                    { text: '343', value: '343' },
                    { text: '344', value: '344' },
                    { text: '345', value: '345' },
                    { text: '346', value: '346' },
                    { text: '347', value: '347' },
                    { text: '348', value: '348' },
                    { text: '349', value: '349' },
                    { text: '350', value: '350' },
                    { text: '351', value: '351' },
                    { text: '352', value: '352' },
                    { text: '353', value: '353' },
                    { text: '354', value: '354' },
                    { text: '355', value: '355' },
                    { text: '356', value: '356' },
                    { text: '357', value: '357' },
                    { text: '358', value: '358' },
                    { text: '359', value: '359' },
                    { text: '360', value: '360' },
                    { text: '361', value: '361' },
                    { text: '362', value: '362' },
                    { text: '363', value: '363' },
                    { text: '364', value: '364' },
                    { text: '365', value: '365' },
                    { text: '366', value: '366' },
                    { text: '367', value: '367' },
                    { text: '368', value: '368' },
                    { text: '369', value: '369' },
                    { text: '370', value: '370' },
                    { text: '371', value: '371' },
                    { text: '372', value: '372' },
                    { text: '373', value: '373' },
                    { text: '374', value: '374' },
                    { text: '375', value: '375' },
                    { text: '376', value: '376' },
                    { text: '377', value: '377' },
                    { text: '378', value: '378' },
                    { text: '379', value: '379' },
                    { text: '380', value: '380' },
                    { text: '381', value: '381' },
                    { text: '382', value: '382' },
                    { text: '383', value: '383' },
                    { text: '384', value: '384' },
                    { text: '385', value: '385' },
                    { text: '386', value: '386' },
                    { text: '387', value: '387' },
                    { text: '388', value: '388' },
                    { text: '389', value: '389' },
                    { text: '390', value: '390' },
                    { text: '391', value: '391' },
                    { text: '392', value: '392' },
                    { text: '393', value: '393' },
                    { text: '394', value: '394' },
                    { text: '395', value: '395' },
                    { text: '396', value: '396' },
                    { text: '397', value: '397' },
                    { text: '398', value: '398' },
                    { text: '399', value: '399' },
                    { text: '400', value: '400' },
                    { text: '401', value: '401' },
                    { text: '402', value: '402' },
                    { text: '403', value: '403' },
                    { text: '404', value: '404' },
                    { text: '405', value: '405' },
                    { text: '406', value: '406' },
                    { text: '407', value: '407' },
                    { text: '408', value: '408' },
                    { text: '409', value: '409' },
                    { text: '410', value: '410' },
                    { text: '411', value: '411' },
                    { text: '412', value: '412' },
                    { text: '413', value: '413' },
                    { text: '414', value: '414' },
                    { text: '415', value: '415' },
                    { text: '416', value: '416' },
                    { text: '417', value: '417' },
                    { text: '418', value: '418' },
                    { text: '419', value: '419' },
                    { text: '420', value: '420' },
                    { text: '421', value: '421' },
                    { text: '422', value: '422' },
                    { text: '423', value: '423' },
                    { text: '424', value: '424' },
                    { text: '425', value: '425' },
                    { text: '426', value: '426' },
                    { text: '427', value: '427' },
                    { text: '428', value: '428' },
                    { text: '429', value: '429' },
                    { text: '430', value: '430' },
                    { text: '431', value: '431' },
                    { text: '432', value: '432' },
                    { text: '433', value: '433' },
                    { text: '434', value: '434' },
                    { text: '435', value: '435' },
                    { text: '436', value: '436' },
                    { text: '437', value: '437' },
                    { text: '438', value: '438' },
                    { text: '439', value: '439' },
                    { text: '440', value: '440' },
                    { text: '441', value: '441' },
                    { text: '442', value: '442' },
                    { text: '443', value: '443' },
                    { text: '444', value: '444' },
                    { text: '445', value: '445' },
                    { text: '446', value: '446' },
                    { text: '447', value: '447' },
                    { text: '448', value: '448' },
                    { text: '449', value: '449' },
                    { text: '450', value: '450' },
                    { text: '451', value: '451' },
                    { text: '452', value: '452' },
                    { text: '453', value: '453' },
                    { text: '454', value: '454' },
                    { text: '455', value: '455' },
                    { text: '456', value: '456' },
                    { text: '457', value: '457' },
                    { text: '458', value: '458' },
                    { text: '459', value: '459' },
                    { text: '460', value: '460' },
                    { text: '461', value: '461' },
                    { text: '462', value: '462' },
                    { text: '463', value: '463' },
                    { text: '464', value: '464' },
                    { text: '465', value: '465' },
                    { text: '466', value: '466' },
                    { text: '467', value: '467' },
                    { text: '468', value: '468' },
                    { text: '469', value: '469' },
                    { text: '470', value: '470' },
                    { text: '471', value: '471' },
                    { text: '472', value: '472' },
                    { text: '473', value: '473' },
                    { text: '474', value: '474' },
                    { text: '475', value: '475' },
                    { text: '476', value: '476' },
                    { text: '477', value: '477' },
                    { text: '478', value: '478' },
                    { text: '479', value: '479' },
                    { text: '480', value: '480' },
                    { text: '481', value: '481' },
                    { text: '482', value: '482' },
                    { text: '483', value: '483' },
                    { text: '484', value: '484' },
                    { text: '485', value: '485' },
                    { text: '486', value: '486' },
                    { text: '487', value: '487' },
                    { text: '488', value: '488' },
                    { text: '489', value: '489' },
                    { text: '490', value: '490' },
                    { text: '491', value: '491' },
                    { text: '492', value: '492' },
                    { text: '493', value: '493' },
                    { text: '494', value: '494' },
                    { text: '495', value: '495' },
                    { text: '496', value: '496' },
                    { text: '497', value: '497' },
                    { text: '498', value: '498' },
                    { text: '499', value: '499' },
                    { text: '500', value: '500' },
                    { text: '501', value: '501' },
                    { text: '502', value: '502' },
                    { text: '503', value: '503' },
                    { text: '504', value: '504' },
                    { text: '505', value: '505' },
                    { text: '506', value: '506' },
                    { text: '507', value: '507' },
                    { text: '508', value: '508' },
                    { text: '509', value: '509' },
                    { text: '510', value: '510' },
                    { text: '511', value: '511' },
                    { text: '512', value: '512' },
                    { text: '513', value: '513' },
                    { text: '514', value: '514' },
                    { text: '515', value: '515' },
                    { text: '516', value: '516' },
                    { text: '517', value: '517' },
                    { text: '518', value: '518' },
                    { text: '519', value: '519' },
                    { text: '520', value: '520' },
                    { text: '521', value: '521' },
                    { text: '522', value: '522' },
                    { text: '523', value: '523' },
                    { text: '524', value: '524' },
                    { text: '525', value: '525' },
                    { text: '526', value: '526' },
                    { text: '527', value: '527' },
                    { text: '528', value: '528' },
                    { text: '529', value: '529' },
                    { text: '530', value: '530' },
                    { text: '531', value: '531' },
                    { text: '532', value: '532' },
                    { text: '533', value: '533' },
                    { text: '534', value: '534' },
                    { text: '535', value: '535' },
                    { text: '536', value: '536' },
                    { text: '537', value: '537' },
                    { text: '538', value: '538' },
                    { text: '539', value: '539' },
                    { text: '540', value: '540' },
                    { text: '541', value: '541' },
                    { text: '542', value: '542' },
                    { text: '543', value: '543' },
                    { text: '544', value: '544' },
                    { text: '545', value: '545' },
                    { text: '546', value: '546' },
                    { text: '547', value: '547' },
                    { text: '548', value: '548' },
                    { text: '549', value: '549' },
                    { text: '550', value: '550' },
                    { text: '551', value: '551' },
                    { text: '552', value: '552' },
                    { text: '553', value: '553' },
                    { text: '554', value: '554' },
                    { text: '555', value: '555' },
                    { text: '556', value: '556' },
                    { text: '557', value: '557' },
                    { text: '558', value: '558' },
                    { text: '559', value: '559' },
                    { text: '560', value: '560' },
                    { text: '561', value: '561' },
                    { text: '562', value: '562' },
                    { text: '563', value: '563' },
                    { text: '564', value: '564' },
                    { text: '565', value: '565' },
                    { text: '566', value: '566' },
                    { text: '567', value: '567' },
                    { text: '568', value: '568' },
                    { text: '569', value: '569' },
                    { text: '570', value: '570' },
                    { text: '571', value: '571' },
                    { text: '572', value: '572' },
                    { text: '573', value: '573' },
                    { text: '574', value: '574' },
                    { text: '575', value: '575' },
                    { text: '576', value: '576' },
                    { text: '577', value: '577' },
                    { text: '578', value: '578' },
                    { text: '579', value: '579' },
                    { text: '580', value: '580' },
                    { text: '581', value: '581' },
                    { text: '582', value: '582' },
                    { text: '583', value: '583' },
                    { text: '584', value: '584' },
                    { text: '585', value: '585' },
                    { text: '586', value: '586' },
                    { text: '587', value: '587' },
                    { text: '588', value: '588' },
                    { text: '589', value: '589' },
                    { text: '590', value: '590' },
                    { text: '591', value: '591' },
                    { text: '592', value: '592' },
                    { text: '593', value: '593' },
                    { text: '594', value: '594' },
                    { text: '595', value: '595' },
                    { text: '596', value: '596' },
                    { text: '597', value: '597' },
                    { text: '598', value: '598' },
                    { text: '599', value: '599' }
                ]
            }
        ];
        this.responses = db.list('/Responses'); //grabbing the responses object from firebase
        afAuth.authState; //a requirement for firebase 
    } // end_constructor
    SurveyPage.prototype.saveResponse = function () {
        console.log("sending response to firebase");
        this.responses.push(this.newResponse); //this pushes the new response to the database
        this.navCtrl.pop();
    };
    return SurveyPage;
}());
SurveyPage = survey___decorate([
    survey___WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"]({
        selector: 'page-survey',template:/*ion-inline-start:"/Users/khalidsalah/Desktop/VA-ionicapp/src/pages/survey/survey.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <ion-title>Survey</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content overflow-scroll="true">\n    <ion-row align-items-start>\n        <ion-col>\n            <h1>Please fill out the information below:</h1>\n            <ion-item>\n                <ion-label class="">Age (years)</ion-label>\n                <ion-multi-picker item-content placeholder="-" [(ngModel)]="newResponse.age" [multiPickerColumns]="ageColumns">\n                </ion-multi-picker>\n            </ion-item>\n            <ion-item>\n                <ion-label>Race</ion-label>\n                <ion-multi-picker item-content placeholder="-" [(ngModel)]="newResponse.race" [multiPickerColumns]="raceColumns"> </ion-multi-picker>\n            </ion-item>\n            <ion-item>\n                <ion-label>PSA Level</ion-label>\n                <ion-multi-picker item-content placeholder="-" [(ngModel)]="newResponse.psaLevel" [multiPickerColumns]="psaColumns"> </ion-multi-picker>\n            </ion-item>\n            <ion-item>\n                <ion-label>Weight (lbs)</ion-label>\n                <ion-multi-picker item-content placeholder="-" [(ngModel)]="newResponse.weight" [multiPickerColumns]="weightColumns"> </ion-multi-picker>\n            </ion-item>\n            <ion-item>\n                <ion-label>Height (ft,in)</ion-label>\n                <ion-multi-picker item-content placeholder="-" [(ngModel)]="newResponse.height" [multiPickerColumns]="heightColumns"></ion-multi-picker>\n            </ion-item>\n            <h4>If Drug A and Drug B provided the same clinical benefit, which of the following options is more acceptable to you?</h4>\n            <ion-list radio-group [(ngModel)]="newResponse.questionOne">\n                <ion-item>\n                    <ion-label>4 pills of drug A taken once a day AND A steroid taken twice a day</ion-label>\n                    <ion-radio value="A"></ion-radio>\n                </ion-item>\n                <ion-item>\n                    <ion-label>4 pills of drug B taken once a day AND Feeling dizzy</ion-label>\n                    <ion-radio value="B"></ion-radio>\n                </ion-item>\n            </ion-list>\n            <h4>Would you be interested in a shared decision making tool that allows you to share information with your provider about your goals for therapy and things that are important to you such as not feeling dizzy or not losing sleep at night with a medication?</h4>\n            <ion-list radio-group [(ngModel)]="newResponse.questionTwo">\n                <ion-item>\n                    <ion-label>Yes</ion-label>\n                    <ion-radio value="Yes"></ion-radio>\n                </ion-item>\n                <ion-item>\n                    <ion-label>No</ion-label>\n                    <ion-radio value="No"></ion-radio>\n                </ion-item>\n            </ion-list>\n            <h4>What are some of the things that are most important to you about a shared decision making tool?</h4>\n            <h5>Please check all that apply:</h5>\n            <ion-list>\n                <ion-item>\n                    <ion-label>Get more information about my options for treatment</ion-label>\n                    <ion-checkbox color="primary" [(ngModel)]="newResponse.questionThree.optionA"></ion-checkbox>\n                </ion-item>\n                <ion-item>\n                    <ion-label>Get details about side effects</ion-label>\n                    <ion-checkbox color="primary" [(ngModel)]="newResponse.questionThree.optionB"></ion-checkbox>\n                </ion-item>\n                <ion-item>\n                    <ion-label>Get a personalized treatment plan based on my medical history and priorities (such as not fee ling dizzy, not losing sleep, not taking too many pills, etc)</ion-label>\n                    <ion-checkbox color="primary" [(ngModel)]="newResponse.questionThree.optionC"></ion-checkbox>\n                </ion-item>\n                <ion-item>\n                    <ion-label>Share information about my priorities with my provider</ion-label>\n                    <ion-checkbox color="primary" [(ngModel)]="newResponse.questionThree.optionD"></ion-checkbox>\n                </ion-item>\n                <ion-item>\n                    <ion-label>Other\n                    </ion-label>\n                    <ion-checkbox color="primary" [(ngModel)]="newResponse.questionThree.optionE"></ion-checkbox>\n                </ion-item>\n            </ion-list>\n            <ion-item>\n                <ion-label floating>If you checked other, please specify what other things would be important for you in a shared decision making tool?\n                </ion-label>\n                <ion-textarea [(ngModel)]="newResponse.comments"></ion-textarea>\n            </ion-item>\n            <button ion-button (click)="saveResponse()">\n                Complete Survey\n                <ion-icon name="checkmark-circle-outline"></ion-icon>\n            </button>\n        </ion-col>\n    </ion-row>\n    <!--\n            <ion-item>\n                <ion-label>4 pills of drug A taken once a day AND A steroid taken twice a day</ion-label>\n                <ion-checkbox color="primary"></ion-checkbox>\n            </ion-item>\n            <ion-item>\n                <ion-label>4 pills of drug B taken once a day AND Feeling dizzy</ion-label>\n                <ion-checkbox color="secondary"></ion-checkbox>\n            </ion-item> -->\n</ion-content>\n'/*ion-inline-end:"/Users/khalidsalah/Desktop/VA-ionicapp/src/pages/survey/survey.html"*/
    }),
    survey___metadata("design:paramtypes", [survey___WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]])
], SurveyPage);

//# sourceMappingURL=survey.js.map
// CONCATENATED MODULE: ./src/pages/home/home.ts
/* harmony import */ var home___WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var home___WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var home___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var home___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var home_HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.takeSurvey = function () {
        this.navCtrl.push(SurveyPage);
    };
    return HomePage;
}());
home_HomePage = home___decorate([
    home___WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"]({
        selector: 'page-home',template:/*ion-inline-start:"/Users/khalidsalah/Desktop/VA-ionicapp/src/pages/home/home.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <ion-title>HeRC NSF Proposal Survey App</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <!--\n  <ion-slides autoplay="9500"\n              speed="500"\n              loop="true"\n              spaceBetween="200"\n              pager>\n\n    <ion-slide>\n      <img class="herc" src="/assets/img/logo.jpg">\n      <h3>Heterogeneous and<br>Reconfigurable Computing</h3>\n    </ion-slide>\n\n\n    <ion-slide>\n      <img src="/assets/img/mission.jpg">\n      <p>\n         Our mission is to develop new technologies that establish the\n         best practical implementation of special-purpose processing and other\n         emerging technologies for use in the fields of scientific and real-time\n         embedded computing.\n      </p>\n    </ion-slide>\n\n\n    <ion-slide>\n      <img src="/assets/img/ionic.png">\n      <p>\n         Ionic is an open-source software development kit featuring\n         hybrid app development for Android and iPhone.\n         <br><br>\n         This quiz app has been developed as a proof of concept and to further\n         analyize the abilities of the Ionic moble-app framework.\n      </p>\n    </ion-slide>\n\n\n  </ion-slides> -->\n  <ion-row>\n  <ion-col>\n    <h1>Heterogenous and <br>Reconfigurable Computing </h1>\n     <img class="herc" src="/assets/img/logo.jpg">\n    <p> Our mission is to develop new technologies that establish the best practical implementation of special-purpose processing and other emerging technologies for use in the fields of scientific and real-time embedded computing. This is a proposal Ionic application for a <strong> Shared Decision Making (SDM) tool for Advanced Prostate Cancer (aPCa) </strong></p>\n    \n    <button ion-button color="primary" outline large (click)="takeSurvey()">Take the survey</button>\n    </ion-col>\n    </ion-row>\n</ion-content>\n'/*ion-inline-end:"/Users/khalidsalah/Desktop/VA-ionicapp/src/pages/home/home.html"*/
    }),
    home___metadata("design:paramtypes", [home___WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]])
], home_HomePage);

//# sourceMappingURL=home.js.map
// CONCATENATED MODULE: ./src/pages/tabs/tabs.ts
/* harmony import */ var tabs___WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var tabs___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var tabs___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var tabs_TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = home_HomePage;
        this.tab2Root = ContactPage;
    }
    return TabsPage;
}());
tabs_TabsPage = tabs___decorate([
    tabs___WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"]({template:/*ion-inline-start:"/Users/khalidsalah/Desktop/VA-ionicapp/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/khalidsalah/Desktop/VA-ionicapp/src/pages/tabs/tabs.html"*/
    }),
    tabs___metadata("design:paramtypes", [])
], tabs_TabsPage);

//# sourceMappingURL=tabs.js.map
// CONCATENATED MODULE: ./src/app/app.component.ts
/* harmony import */ var app_component___WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var app_component___WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(37);
var app_component___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var app_component___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var app_component_MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = tabs_TabsPage;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
app_component_MyApp = app_component___decorate([
    app_component___WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"]({template:/*ion-inline-start:"/Users/khalidsalah/Desktop/VA-ionicapp/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/khalidsalah/Desktop/VA-ionicapp/src/app/app.html"*/
    }),
    app_component___metadata("design:paramtypes", [app_component___WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], app_component_MyApp);

//# sourceMappingURL=app.component.js.map
// CONCATENATED MODULE: ./src/app/app.module.ts
/* harmony import */ var app_module___WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ion_multi_picker__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ion_multi_picker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ion_multi_picker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_result_result__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(37);
var app_module___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var firebaseConfig = {
    apiKey: "AIzaSyAMQ-49Y8Pdr4E4e-CzJVujTZN5L231I7Y",
    authDomain: "vapp-e179d.firebaseapp.com",
    databaseURL: "https://vapp-e179d.firebaseio.com",
    projectId: "vapp-e179d",
    storageBucket: "vapp-e179d.appspot.com",
    messagingSenderId: "229757817225"
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = app_module___decorate([
    app_module___WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"]({
        declarations: [
            app_component_MyApp,
            SurveyPage,
            ContactPage,
            home_HomePage,
            tabs_TabsPage,
            __WEBPACK_IMPORTED_MODULE_12__pages_result_result__["a" /* ResultPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicModule"].forRoot(app_component_MyApp, {}, {
                links: [
                    { loadChildren: '../pages/result/result.module#ResultPageModule', name: 'ResultPage', segment: 'result', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_4_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
            __WEBPACK_IMPORTED_MODULE_7_ion_multi_picker__["MultiPickerModule"] //https://github.com/raychenfj/ion-multi-picker
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicApp"]],
        entryComponents: [
            app_component_MyApp,
            SurveyPage,
            ContactPage,
            home_HomePage,
            tabs_TabsPage,
            __WEBPACK_IMPORTED_MODULE_12__pages_result_result__["a" /* ResultPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: app_module___WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicErrorHandler"] },
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map
// CONCATENATED MODULE: ./src/app/main.ts
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(48);


__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */]().bootstrapModule(AppModule);
//# sourceMappingURL=main.js.map

/***/ })

},[95]);
//# sourceMappingURL=main.js.map