webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/product/product.module": [
		"./src/app/product/product.module.ts",
		"product.module"
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
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "h2 {\n    color: blue;\n    text-align: center;\n}\n\ndiv {\n\n    background: lightgray;\n\n    \n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class = \"container\">\n\n        <h2>\n                Welcome to Angular {{appTitle}}! \n        </h2>\n    <app-header>\n    </app-header>\n\n    <div class = \"container\">\n    <!-- <app-home></app-home>\n\n    <app-about>\n    </app-about>\n\n    <app-contact></app-contact> -->\n\n    <!-- code to use for routing -->\n\n    <!-- place holder for dynamic views -->\n    <router-outlet>\n            \n    </router-outlet>\n    \n</div>\n\n    <!-- parent to child communication we use @Input in child -->\n    <!-- child to parent communication we use @Output and EventEmitter -->\n    <!-- <app-footer year = '2018' appTitle = 'Test app footer'> -->\n    <!-- <app-footer year = '{{2018 + 1}}' appTitle = 'Test app footer'> -->\n     <!-- <app-footer [year] = '2018 + 2' appTitle = 'Test app footer'>  preserves the datatypes -->\n\n        <!-- <app-footer [year] = 'year + 1' [appTitle] = 'appTitle'> -->\n                <app-footer [year] = 'year + 1' [x-title] = 'appTitle' (contactEvent) = \"fromChild($event)\">\n    </app-footer>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { setTimeout } from 'timers';
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.appTitle = 'Product App';
        this.year = 1987;
    }
    // called after view initialized in browser
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            console.log('Timeout called');
            _this.year = 2014;
        }, 3000);
        // let that = this;
        // setTimeout(function() {
        //     console.log('Timeout called');
        //     that.year = 2020;
        // }, 3000);
    };
    AppComponent.prototype.fromChild = function (msg) {
        alert(msg);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/app.component.html"),
            //component html tag name
            selector: 'app-root',
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_about_about_component__ = __webpack_require__("./src/app/components/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_contact_contact_component__ = __webpack_require__("./src/app/components/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_header_header_component__ = __webpack_require__("./src/app/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_footer_footer_component__ = __webpack_require__("./src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_not_found_not_found_component__ = __webpack_require__("./src/app/components/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_guards_auth_guard__ = __webpack_require__("./src/app/shared/guards/auth.guard.ts");
//module is logical collection of all the components
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// +
// module references












// import { ProductModule } from './product/product.module';
// Angular 4.3 onwards
// includes simple api's
// interceptors [auth]


var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_4__components_home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'about',
        component: __WEBPACK_IMPORTED_MODULE_5__components_about_about_component__["a" /* AboutComponent */]
    },
    {
        path: 'contact',
        component: __WEBPACK_IMPORTED_MODULE_6__components_contact_contact_component__["a" /* ContactComponent */]
    },
    // Lazy loading of product module
    {
        path: 'products',
        loadChildren: 'app/product/product.module#ProductModule',
        canActivate: [__WEBPACK_IMPORTED_MODULE_13__shared_guards_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_10__components_not_found_not_found_component__["a" /* NotFoundComponent */]
    },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            //for all the modules
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                //creates router module, based on routes
                __WEBPACK_IMPORTED_MODULE_11__angular_router__["c" /* RouterModule */].forRoot(routes),
                __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_9__shared_shared_module__["a" /* SharedModule */],
            ],
            // for all the components
            declarations: [
                //all components, directives, pipes
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_not_found_not_found_component__["a" /* NotFoundComponent */],
            ],
            // to specify the top most component i.e., root component
            bootstrap: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/about/about.component.css":
/***/ (function(module, exports) {

module.exports = "div {\n    background-color : rgb(186, 189, 143);\n}\n\n.highlightBg {\n    background : lightblue\n}"

/***/ }),

/***/ "./src/app/components/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n<h2> About </h2>\n\n<button (click) = \"addMember()\">\n  Add Member\n</button>\n\n<button (click) = \"members = []\">\n    Empty Members\n</button>\n\n<button (click) = \"show = !show\">\n  {{show ? \"Hide\" : \"Show\"}}\n</button>\n\n<div [ngClass] = \"{highlightBg: highlight}\" (mouseenter) = \"highlight = true\" (mouseleave) = \"highlight = false\">\n<ul *ngIf = \"show else listNotShown\">\n  <!-- * is structural directive which modifies the dom elements dynamically -->\n  <li *ngFor=\"let member of members; let k = index;\">\n    {{k}} -- {{member.name}}\n  </li>\n</ul>\n</div>\n\n<!-- Angular 4.0 feature else for ngIf -->\n<ng-template #listNotShown>\n  <p>List is not shown</p>\n</ng-template>\n</div>\n"

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
        //  members: {name: string} [] = [ {name: 'V S K Murari'}, {name : 'Satyaa'}];  OR use the interface as below
        this.members = [{ name: 'V S K Murari' }, { name: 'Satyaa' }];
        this.show = true;
        this.highlight = false;
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent.prototype.addMember = function () {
        this.members.push({ name: 'Member' + Math.random() });
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("./src/app/components/about/about.component.html"),
            styles: [__webpack_require__("./src/app/components/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/contact/contact.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div #rootDiv>\n  <h2>Contact</h2>\n <span> power {{8 | power:2 }}</span>\n\n  <!-- # template reference variable -->\n\n  <input #name />\n  \n  <p #para1>\n\n  </p>\n\n  <button (click) = \"name.focus()\"> <!-- here name is the dom element from line 5 so we can directly access its functions--> \n    Focus\n  </button>\n\n  <button (click) = \"name.value = '' \"> <!-- here name is the dom element from line 5 so we can directly access its functions--> \n    Clear\n  </button>\n\n  <button (click)=\"para1.textContent = name.value \">\n      Set Text\n  </button>\n\n  <span> City : {{address?.city}},\n     pin : {{address?.pincode}}</span>\n\n</div>"

/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 //jquery can go beyond the component boundary
var ContactComponent = /** @class */ (function () {
    //dependency injection
    //option2 , angular shall inject top element no need to specify #rootDiv on top of the div element
    function ContactComponent(topDiv) {
        this.topDiv = topDiv;
    }
    ContactComponent.prototype.ngOnInit = function () {
        var _this = this;
        //nativeElement is the DOM object
        this.nameInput.nativeElement.focus();
        this.nameInput.nativeElement.value = 'From TS';
        //BAD
        // $("p").text("Hi JQuery");
        //JQuery Scoped search
        // $(this.rootDiv.nativeElement).find("p").text("Hi Scoped JQuery");
        __WEBPACK_IMPORTED_MODULE_1_jquery__(this.topDiv.nativeElement).find("p").text("Hi Scoped JQuery");
        setTimeout(function () {
            _this.address = { city: 'BLR', pincode: 560078 };
        }, 3000);
        //Intellisense for jquery
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("name"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], ContactComponent.prototype, "nameInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("para1"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], ContactComponent.prototype, "para1", void 0);
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("./src/app/components/contact/contact.component.html"),
            styles: [__webpack_require__("./src/app/components/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = "p {\n    text-align: right\n}\n\nbutton {\n    align: center\n}"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div appHighlight #myfooterDiv = \"appHighlightDirective\"> <!-- #myfooterDiv gets the dom element reference  // where as the name after = gives the reference of the highlight directive which we want to export -->\n<hr />\n<p>\n  Copyrights @{{year}}, {{appTitle}}\n</p>\n\n<button (click) = \"contact()\">\n  Contact Us\n</button>\n\n<p> Highlight color {{myfooterDiv.color}}</p>\n\n<button (click) = \"myfooterDiv.setColor('yellow')\">Set Color Yellow</button>\n\n</div>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_directives_highlight_directive__ = __webpack_require__("./src/app/shared/directives/highlight.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Input } from '@angular/core/src/metadata/directives';
var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        // output, event binding () -- child to parent communication via events
        this.contactEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    FooterComponent.prototype.ngOnInit = function () {
        console.log("year ", this.year, typeof this.year);
        this.directiveRef.setColor('red');
    };
    FooterComponent.prototype.contact = function () {
        this.contactEvent.emit("Contact us");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], FooterComponent.prototype, "year", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])("x-title")
        // @Input()
        ,
        __metadata("design:type", String)
    ], FooterComponent.prototype, "appTitle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('myfooterDiv') //ref to highlight directive
        ,
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__shared_directives_highlight_directive__["a" /* HighlightDirective */])
    ], FooterComponent.prototype, "directiveRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], FooterComponent.prototype, "contactEvent", void 0);
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/***/ (function(module, exports) {

module.exports = "h2 {\n    color: blue;\n    text-align: center;\n}"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n<h2> Product App</h2>\n\n\n<a routerLink = '/' class = 'button' routerLinkActive = \"success\" [routerLinkActiveOptions] = '{exact: true}'>Home</a>\n<a routerLink = '/products' class = \"button \" routerLinkActive = \"success\">Product</a>\n\n<!-- <a routerLink = '/cart' class = \"button\" routerLinkActive = \"success\" >Cart [{{totalCount}}]</a> -->\n<a routerLink = '/cart' class = \"button\" routerLinkActive = \"success\" >Cart [{{cartItems.length}}]</a>\n\n<a routerLink = '/about' class = \"button\" routerLinkActive = \"success\">About</a>\n<a routerLink = '/contact' class = \"button\" routerLinkActive = \"success\" >Contact</a>\n\n<button> {{totalCount}}</button>\n\n<button (click) = \"emptyCart()\"> Empty Cart</button>\n\n<!-- <a routerLink = '/login' class = \"button\" \n*ngIf = '!(authSource$ | async)'\nrouterLinkActive = \"success\">Login</a>\n\n<button (click) = \"logout()\" *ngIf = 'authSource$ | async' >Logout</button> -->\n\n\n<a routerLink=\"/login\"\nrouterLinkActive=\"success\"\nclass=\"button\"\n*ngIf=\"!(authSource$ | async)\"\n>\nLogin\n</a>\n\n<button (click)=\"logout()\"\n     *ngIf=\"(authSource$ | async)\"\n>\nLogout\n</button>\n\n\n<hr />\n</div>"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_data_service__ = __webpack_require__("./src/app/shared/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_auth_service__ = __webpack_require__("./src/app/shared/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(dataService, authService) {
        this.dataService = dataService;
        this.authService = authService;
        this.cartItems = [];
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authSource$ = this.authService.authSource;
        this.totalCount = this.dataService.cartItems.length;
        // workaround -- added line 13
        // this.cartItems = this.dataService.cartItems;
        //RxJs way
        // subscribe
        this.dataService.cartItemsSource.subscribe(function (cartItems) {
            _this.cartItems = cartItems;
            _this.totalCount = cartItems.length;
            console.log("header subscribe : ", cartItems);
        });
    };
    HeaderComponent.prototype.emptyCart = function () {
        this.dataService.empty();
    };
    HeaderComponent.prototype.logout = function () {
        this.authService.logout();
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/components/header/header.component.html"),
            styles: [__webpack_require__("./src/app/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__shared_services_auth_service__["a" /* AuthService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>{{title | uppercase}}</h2>\n\n<input appHighlight [value] = \"counter * 2\"\n        *ngIf = \"counter %3 != 0\" />\n<p>Counter: {{counter}}</p>\n<p>Counter * 3: {{counter * 3}}</p>\n\n<div (click) = 'parentClick()'> <!-- bubbles the click event to the parent --> \n  <button (click) = 'increment($event)'>\n    +1\n  </button>\n</div>\n\n<button (click) = 'counter = counter-1'>\n    -1\n  </button>\n\n<!--\n  {{}} interpolation -- data binding\n  () - event binding\n  [] - property binding\n-->\n\n<!-- two way binding -->\n<span> Price </span>\n<input [(ngModel)] = 'price' type = \"number\" />\n<p> price is {{price | currency: 'EUR'}}</p>\n\n<!-- two way binding, output should have input name + \"Change\" -->\n<p> Option 2 two way binding</p>\n<input [ngModel] = 'price'  type = \"number\"\n       (ngModelChange) = \"price = $event\" />\n\n<p> Current Date (full): {{today | date: 'full'}}</p>\n<p> Current Date(short): {{today | date: 'short'}}</p>\n<p> Current Date(fullDate): {{today | date: 'fullDate'}}</p>\n<p> Current Date(fullDate): {{today | date: 'fullDate' | uppercase}}</p>\n<p> Current Date(fullDate): {{today | date: 'dd/MMM/yy' | uppercase}}</p>\n<p> Current Date(fullDate): {{today | date: 'ddMMMyyyy' | uppercase}}</p>\n\n<p> Power 4^2 = {{ 4 | power: 2}}</p>\n<p> Power 3 = {{ 3 | power}}</p>\n<p> Power counter^2 = {{counter}} -- {{counter | power: 2}}</p>\n<p> Power 2^counter = {{ 2 | power: counter}}</p>\n\n\n<!-- sharedModule related-->\n\n<!-- two way binding from the like module to home module -->\n<p> Home Likes {{homeLikes}}</p>\n<!-- <app-like [likes] = \"homeLikes\"\n          (likesChange) = \"homeLikes = $event\"> -->\n    \n  <!-- OR -->\n    <app-like [(likes)] = \"homeLikes\" *ngIf = 'counter %2 == 1'>\n\n</app-like>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.price = 99.99;
        this.title = 'Home';
        this.counter = 0;
        this.today = new Date();
        this.homeLikes = 10;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.parentClick = function () {
        alert('Parent');
    };
    HomeComponent.prototype.increment = function (e) {
        console.log("incrementing...");
        this.counter += 1;
        //cancel bubble
        e.stopPropagation();
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/components/home/home.component.html"),
            styles: [__webpack_require__("./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/not-found/not-found.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-not-found',
            template: __webpack_require__("./src/app/components/not-found/not-found.component.html"),
            styles: [__webpack_require__("./src/app/components/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/address/address.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/components/address/address.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  address works!\n</p>\n"

/***/ }),

/***/ "./src/app/shared/components/address/address.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddressComponent = /** @class */ (function () {
    function AddressComponent() {
    }
    AddressComponent.prototype.ngOnInit = function () {
    };
    AddressComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-address',
            template: __webpack_require__("./src/app/shared/components/address/address.component.html"),
            styles: [__webpack_require__("./src/app/shared/components/address/address.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AddressComponent);
    return AddressComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/like/like.component.css":
/***/ (function(module, exports) {

module.exports = "div {\n  \n    margin: 30 px;\n}"

/***/ }),

/***/ "./src/app/shared/components/like/like.component.html":
/***/ (function(module, exports) {

module.exports = "<div appHighlight color = 'lightblue'>\n\n  <span> likes count {{likes}} </span>\n\n  <button (click) = 'up()'>\n    UP\n  </button>\n  <button (click) = 'down()'>Down</button>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/like/like.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LikeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("./src/app/shared/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LikeComponent = /** @class */ (function () {
    function LikeComponent(injector) {
        this.injector = injector;
        //input name + Change
        this.likesChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        console.log("Like component created via a injector");
        this.dataService = this.injector.get(__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]);
    }
    LikeComponent.prototype.ngOnInit = function () {
    };
    LikeComponent.prototype.up = function () {
        this.likesChange.emit(this.likes + 1);
    };
    LikeComponent.prototype.down = function () {
        this.likesChange.emit(this.likes - 1);
    };
    LikeComponent.prototype.ngOnDestroy = function () {
        console.log("Like component Destroyed");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], LikeComponent.prototype, "likes", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], LikeComponent.prototype, "likesChange", void 0);
    LikeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-like',
            template: __webpack_require__("./src/app/shared/components/like/like.component.html"),
            styles: [__webpack_require__("./src/app/shared/components/like/like.component.css")],
            //as service is provide in the component, to the life time of service is based on compoment life time.
            // this instance of DataService is not shared with any other components
            providers: [],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injector */]])
    ], LikeComponent);
    return LikeComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class = 'container'>\n  <h2>Login Page</h2>\n\n  <p *ngIf='errorMessage'>{{errorMessage}}</p>\n  <form (ngSubmit) = 'login()'>\n\n    User Name: <input [(ngModel)] = 'username' name = 'username'/>\n    Password: <input [(ngModel)] = 'password' name = 'password'/>\n\n    <button type = 'submit'>Login</button>\n  </form>\n  </div>\n\n"

/***/ }),

/***/ "./src/app/shared/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.authService.login(this.username, this.password).subscribe(function () {
            _this.router.navigateByUrl('/');
        }, function (error) {
            _this.errorMessage = 'invalid username/password';
        });
    };
    LoginComponent.prototype.logout = function () {
        this.authService.logout();
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/shared/components/login/login.component.html"),
            styles: [__webpack_require__("./src/app/shared/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/shared/directives/highlight.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HighlightDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HighlightDirective = /** @class */ (function () {
    // <p appHighlight ==> p is a hostElement
    // Renderer is the highlevel reference for the DOM element  -- wraper for the DOM elements
    function HighlightDirective(hostElement, renderer) {
        this.hostElement = hostElement;
        this.renderer = renderer;
        console.log('highlight directive created');
    }
    HighlightDirective.prototype.ngOnInit = function () {
        console.log("Directive Init");
        //default if color is not passed by host
        this.color = this.color || 'lightgreen';
        console.log("Color: ", this.color);
    };
    //if you want to listen to any directive events
    HighlightDirective.prototype.onclick = function () {
        console.log("directive click event");
    };
    HighlightDirective.prototype.onEnter = function () {
        console.log("directive mouse enter event");
        this.renderer.setStyle(this.hostElement.nativeElement, "background", this.color);
        this.renderer.removeStyle(this.hostElement.nativeElement, "opacity");
        this.renderer.removeStyle(this.hostElement.nativeElement, "transition");
    };
    HighlightDirective.prototype.onLeave = function () {
        console.log("directive mouse leave event");
        this.renderer.removeStyle(this.hostElement.nativeElement, "background");
        this.renderer.setStyle(this.hostElement.nativeElement, "opacity", 0);
        this.renderer.setStyle(this.hostElement.nativeElement, "transition", "opacity 2s");
    };
    HighlightDirective.prototype.setColor = function (color) {
        this.color = color;
        console.log("Directive method");
    };
    HighlightDirective.prototype.ngOnDestroy = function () {
        console.log("Directive Destroy");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], HighlightDirective.prototype, "color", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])("click"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HighlightDirective.prototype, "onclick", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])("mouseenter"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HighlightDirective.prototype, "onEnter", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])("mouseleave"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HighlightDirective.prototype, "onLeave", null);
    HighlightDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[appHighlight]',
            exportAs: 'appHighlightDirective'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */]])
    ], HighlightDirective);
    return HighlightDirective;
}());



/***/ }),

/***/ "./src/app/shared/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/shared/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// This is the Entry Guard
var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        // depending on the return value angular will decide on the loadin the next component or not
        if (this.authService.isAuthenticated()) {
            return true;
        }
        console.log('You are visiting: ', state.url);
        this.router.navigateByUrl('/login');
        return false;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/shared/guards/save-alert.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaveAlertGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SaveAlertGuard = /** @class */ (function () {
    function SaveAlertGuard() {
    }
    SaveAlertGuard.prototype.canActivate = function (next, state) {
        return true;
    };
    SaveAlertGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], SaveAlertGuard);
    return SaveAlertGuard;
}());



/***/ }),

/***/ "./src/app/shared/pipes/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/*
  input - products or any array of objects

  params:

  fieldName
  predicate
  value

*/
var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, fieldName, predicate, value) {
        if (!items || !fieldName || !predicate || !value) {
            return items;
        }
        if (predicate == 'gt') {
            return items.filter(function (item) { return item[fieldName] > value; });
        }
        if (predicate == 'lt') {
            return items.filter(function (item) { return item[fieldName] < value; });
        }
    };
    FilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/shared/pipes/power.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PowerPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// {{2 | power: 3}} => (2^3) = 8
// {{ 8 | power }}  => (8^1) = 8
var PowerPipe = /** @class */ (function () {
    function PowerPipe() {
        console.log("power pipe called");
    }
    PowerPipe.prototype.transform = function (value, exponent) {
        if (exponent === void 0) { exponent = 1; }
        console.log("power pipe called ", value, exponent);
        return Math.pow(value, exponent);
    };
    PowerPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'power'
        }),
        __metadata("design:paramtypes", [])
    ], PowerPipe);
    return PowerPipe;
}());



/***/ }),

/***/ "./src/app/shared/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import 'rxjs/Rx'; -- Rx has more imports, as we need only operator map we can get that alone as in line 9

var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.authStatus = false;
        this.token = window.localStorage.getItem('token');
        if (this.token) {
            this.authStatus = true;
        }
        this.authSource = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](this.authStatus);
    }
    AuthService.prototype.isAuthenticated = function () {
        return this.authStatus;
    };
    AuthService.prototype.login = function (username, password) {
        var _this = this;
        var data = {
            username: username,
            password: password
        };
        //TODO: Save token
        return this.http.post("" + __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].authEndPoint, data)
            .map(function (tokenObj) {
            console.log("Response: ", tokenObj);
            _this.authStatus = true;
            _this.authSource.next(_this.authStatus);
            _this.token = tokenObj['token'];
            // to store the token on localstorage 
            window.localStorage.setItem('token', _this.token);
            return tokenObj; // pass to subscribe
        });
    };
    AuthService.prototype.logout = function () {
        window.localStorage.removeItem('token');
        this.token = '';
        this.authStatus = false;
        //TODO: Delete token
        this.authSource.next(this.authStatus);
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/shared/services/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// BehaviorSubject => subscribe called as soon as subscribed
// publish the last known value

// Business logic communication with webservice
// data sharing among components
//Angular creates service object, inject the instance
//singleton object and multiple instances
//scope of service can be per component or one for every component
var DataService = /** @class */ (function () {
    // OnInit, OnDestroy -- should be used only for the components, directives and pipes but not on services.
    // ngOnDestroy(): void {
    //  console.log("data service on Destroy")
    // }
    // ngOnInit(): void {
    //   console.log("data service on Init")
    // }
    function DataService() {
        this.cartItems = [];
        //RxJS:
        // Source - produces some data and we have subscribers to receive the data
        // Here source is DataService, and we have changes in the cartItem
        // we need to publish the changes
        // EventEmitter --> Subject --> Observable
        // RxJs has feasibility to subscribe to n number of subscribers
        // RxJs also allows to unsubscribe and re-subscribe any point in time
        // we can subscribe based on a filter as well. -- this is not as part of RxJs
        // components can react depending on the need of the data from source. -- transformation of data
        // cartItemsSource : Subject<CartItem[]> = new Subject();
        this.cartItemsSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        console.log("DataService created");
    }
    DataService.prototype.addItem = function (cartItem) {
        console.log("added Item");
        this.cartItems.push(cartItem);
        //RxJs 
        //publish
        this.cartItemsSource.next(this.cartItems);
    };
    // cartItemsSource : BehaviorSubject<CartItem[]> = new BehaviorSubject(this.cartItems);
    DataService.prototype.empty = function () {
        console.log("empty cart called");
        this.cartItems = []; // we are loosing the reference here. [here we need to user observable pattern from RxJs]
        //RxJs 
        //publish
        this.cartItemsSource.next(this.cartItems);
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/shared/services/request-interceptor.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestInterceptorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("./src/app/shared/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RequestInterceptorService = /** @class */ (function () {
    function RequestInterceptorService(injector) {
        this.injector = injector;
        console.log("Interceptor created");
    }
    RequestInterceptorService.prototype.intercept = function (request, next) {
        console.log("Intercepter ", request.url);
        //TODO: injector
        if (!this.authService) {
            this.authService = this.injector.get(__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]);
        }
        //TODO: Inject token
        if (this.authService.isAuthenticated()) {
            request = request.clone({
                setHeaders: {
                    Authorization: "JWT " + this.authService.token
                }
            });
        }
        return next.handle(request);
    };
    RequestInterceptorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injector */]])
    ], RequestInterceptorService);
    return RequestInterceptorService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_address_address_component__ = __webpack_require__("./src/app/shared/components/address/address.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_like_like_component__ = __webpack_require__("./src/app/shared/components/like/like.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_highlight_directive__ = __webpack_require__("./src/app/shared/directives/highlight.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_power_pipe__ = __webpack_require__("./src/app/shared/pipes/power.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pipes_filter_pipe__ = __webpack_require__("./src/app/shared/pipes/filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_data_service__ = __webpack_require__("./src/app/shared/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__ = __webpack_require__("./src/app/shared/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_auth_service__ = __webpack_require__("./src/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__guards_auth_guard__ = __webpack_require__("./src/app/shared/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__guards_save_alert_guard__ = __webpack_require__("./src/app/shared/guards/save-alert.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_request_interceptor_service__ = __webpack_require__("./src/app/shared/services/request-interceptor.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var routes = [
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__["a" /* LoginComponent */],
    }
];
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_router__["c" /* RouterModule */].forChild(routes)
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__components_address_address_component__["a" /* AddressComponent */], __WEBPACK_IMPORTED_MODULE_3__components_like_like_component__["a" /* LikeComponent */], __WEBPACK_IMPORTED_MODULE_4__directives_highlight_directive__["a" /* HighlightDirective */], __WEBPACK_IMPORTED_MODULE_5__pipes_power_pipe__["a" /* PowerPipe */], __WEBPACK_IMPORTED_MODULE_6__pipes_filter_pipe__["a" /* FilterPipe */], __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__["a" /* LoginComponent */]],
            exports: [
                //allow other modules to use component, directive, pipes 
                __WEBPACK_IMPORTED_MODULE_3__components_like_like_component__["a" /* LikeComponent */],
                __WEBPACK_IMPORTED_MODULE_5__pipes_power_pipe__["a" /* PowerPipe */],
                __WEBPACK_IMPORTED_MODULE_4__directives_highlight_directive__["a" /* HighlightDirective */],
                __WEBPACK_IMPORTED_MODULE_6__pipes_filter_pipe__["a" /* FilterPipe */]
            ],
            //module provider
            // single instance per application
            // if we have DataService also in component level, then component level takes higher precidence.
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__services_data_service__["a" /* DataService */],
                __WEBPACK_IMPORTED_MODULE_11__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_12__guards_auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_13__guards_save_alert_guard__["a" /* SaveAlertGuard */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_15__services_request_interceptor_service__["a" /* RequestInterceptorService */],
                    multi: true // as we can have n-number of interceptors we need to specify this multi property, if false it will override the other interceptors
                }
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    buildName: 'development',
    // apiEndPoint: 'http://localhost:7070',
    // apiEndPoint: 'http://localhost:7070/delayed',
    apiEndPoint: 'http://localhost:7070/secured',
    authEndPoint: 'http://localhost:7070/oauth/token',
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
//bootstrap app angular module into browser


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])()
    .bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map