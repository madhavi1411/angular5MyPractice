webpackJsonp(["product.module"],{

/***/ "./src/app/product/models/product.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Product; });
var Product = /** @class */ (function () {
    function Product() {
    }
    return Product;
}());



/***/ }),

/***/ "./src/app/product/product-edit/product-edit.component.css":
/***/ (function(module, exports) {

module.exports = "input.ng-invalid {\n    border: 2px solid red;\n}\n\n\ninput.ng-dirty, select.ng-dirty {\n    background: yellow;\n\n}"

/***/ }),

/***/ "./src/app/product/product-edit/product-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Product Edit -- {{product.name}}</h2>\n\n<button (click) = 'gotoList()'>GO BACK TO LIST</button>\n\n<form (ngSubmit) = 'saveProduct()' #productForm = 'ngForm'> \n    <p *ngIf = 'productForm.invalid'>Invalid Data on Form</p>\n    <p *ngIf = 'productForm.dirty'>Data on Form Changed</p>\n  <div class=\"form-group\">\n    <!-- ngModel has properties for checking the validations like required, minlength, maxlength -->\n<label> Name: </label> <input [(ngModel)] = 'product.name' type='text' name = 'name' required minlength=\"3\" #productName = 'ngModel'/>\n<p *ngIf = 'productName.invalid'>Invalid Name</p>\n</div>\nYear: <input [(ngModel)] = 'product.year'  type = 'number' name = 'year'/>\nPrice: <input [(ngModel)] = 'product.price' type = 'number' name ='price'/>\nWeight: <input [(ngModel)] = 'product.weight' type = 'text' name = 'weight' />\n\n<label>Brand</label>\n<select name = 'brandId' [(ngModel)] = \"product.brandId\">\n  <option [value] = \"brand.id\" *ngFor = 'let brand of brands'>{{brand.name}}</option>\n</select> \n\n<button type = 'submit' >\n  Save\n</button>\n\n</form>\n\n"

/***/ }),

/***/ "./src/app/product/product-edit/product-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service__ = __webpack_require__("./src/app/product/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_product__ = __webpack_require__("./src/app/product/models/product.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// GET /api/products/34345
// Edit existing data (id exist) or create new one (id is not present)
// the following import helps to read the data from the url parameter



var ProductEditComponent = /** @class */ (function () {
    function ProductEditComponent(route, router, productService) {
        this.route = route;
        this.router = router;
        this.productService = productService;
        this.product = new __WEBPACK_IMPORTED_MODULE_3__models_product__["a" /* Product */](); //create 
        this.brands = [];
    }
    ProductEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.params['id'];
        console.log(" ID is : ", id);
        // GET product with id
        this.subscription = this.productService.getProduct(id).subscribe(function (product) {
            _this.product = product;
        });
        // GET list of all Brands
        this.productService.getBrands().subscribe(function (brands) {
            _this.brands = brands;
        });
    };
    ProductEditComponent.prototype.gotoList = function () {
        this.router.navigateByUrl('/products'); // goes to product list 
    };
    ProductEditComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ProductEditComponent.prototype.saveProduct = function () {
        var _this = this;
        console.log("Saved Product: ", this.product);
        if (this.productForm.invalid) {
            alert('Invalid form data');
            return;
        }
        this.productService.saveProduct(this.product).subscribe(function (savedProduct) {
            //option 1: continue working same form
            _this.product = savedProduct;
            _this.productForm.reset(savedProduct);
            //option 2: goto to list page.
            _this.gotoList();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('productForm'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* NgForm */])
    ], ProductEditComponent.prototype, "productForm", void 0);
    ProductEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-product-edit',
            template: __webpack_require__("./src/app/product/product-edit/product-edit.component.html"),
            styles: [__webpack_require__("./src/app/product/product-edit/product-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */]])
    ], ProductEditComponent);
    return ProductEditComponent;
}());



/***/ }),

/***/ "./src/app/product/product-home/product-home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product/product-home/product-home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class = 'container'>\n   <h2> Product Home</h2>\n\n   <div>\n     <a routerLink = '/products' ngClass = 'button' routerLinkActive = 'success' [routerLinkActiveOptions] = '{exact: true}'>List</a>\n      <a routerLink = '/products/create' class = 'button' routerLinkActive = 'success'>Create</a>\n      <a routerLink = '/products/search' class = 'button' routerLinkActive = 'success'>Search</a>\n   </div> \n\n   <!-- <ul class=\"nav nav-tabs\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/products\" routerLinkActive = 'success' [routerLinkActiveOptions] = '{exact: true}'>List</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink = '/products/create' routerLinkActive = 'success'>Create</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink = '/products/search' routerLinkActive = 'success'>Search</a>\n      </li>\n     \n    </ul> -->\n\n   <router-outlet>\n\n   </router-outlet>\n  </div>\n"

/***/ }),

/***/ "./src/app/product/product-home/product-home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductHomeComponent; });
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

var ProductHomeComponent = /** @class */ (function () {
    function ProductHomeComponent() {
    }
    ProductHomeComponent.prototype.ngOnInit = function () {
    };
    ProductHomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-product-home',
            template: __webpack_require__("./src/app/product/product-home/product-home.component.html"),
            styles: [__webpack_require__("./src/app/product/product-home/product-home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductHomeComponent);
    return ProductHomeComponent;
}());



/***/ }),

/***/ "./src/app/product/product-list/product-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product/product-list/product-list.component.html":
/***/ (function(module, exports) {

module.exports = "\n<h2>Product List [Cart {{cartItems.length}}]</h2>\n\nObservable {{products$}}\n\n<label >Field Name</label>\n<select [(ngModel)]=\"fieldName\">\n  <option value='price'>Price</option>\n  <option value='year'>Year</option>\n  <option value='weight'>Weight</option>\n</select>\n\n<label>Condition</label>\n<select [(ngModel)]=\"predicate\">\n  <option value=\"gt\"> &gt; </option>\n  <option value=\"lt\"> &lt; </option>\n</select>\n\n<label>Value</label> \n<input [(ngModel)]=\"expectedValue\" />\n\n<p> Filtering for {{fieldName}} {{predicate}} {{expectedValue}} </p>\n\n\n  <div class=\"table-responsive\">\n  <table class=\"table  table-hover\">\n      <thead class=\"thead-dark\">\n    <tr>\n    <th>ID</th>\n    <th>Name</th>\n    <th>Price</th>\n    <th>Year</th>\n    <th>Weight</th>\n    <th>Brand Id</th>\n    <th>Delete</th>\n    </tr>\n    </thead>\n\n    <!-- <tr *ngFor = 'let product of (products | filter:fieldName:predicate:expectedValue)'> -->\n      <!-- Observable way to acces products - async pipe is provided by Angular which does the subscribe for itself  \n            cons: we can't handle the error cases, we should be sure that it is going to be success.\n            pros: we avoid the boiler code to subscribe in the components\n                  also unsubscribes when we move out of this page\n          -->\n        <tr *ngFor = 'let product of (products$ | async | filter:fieldName:predicate:expectedValue)'>\n      <td>{{product.id}}</td>\n      <!-- <td>{{product.name}}</td> -->\n      <td> \n        <a [routerLink] = \"['/', 'products', 'edit', product.id]\">  <!-- '/'' - delimiter, for all the next coming strings products/edit/product.id - this is how it forms -->\n          {{product.name}}\n        </a>\n      </td>\n      <td>{{product.price}}</td>\n      <td>{{product.year}}</td>\n      <td>{{product.weight}}</td>\n      <td>{{product.brandId}}</td>\n      <td>\n        <button (click) = deleteProduct(product)>Delete</button>\n        <button (click) = addToCart(product)>Add to Cart</button>\n\n      </td>\n    </tr>\n\n\n    \n    </table>\n  </div>\n"

/***/ }),

/***/ "./src/app/product/product-list/product-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service__ = __webpack_require__("./src/app/product/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_data_service__ = __webpack_require__("./src/app/shared/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(productService, dataService) {
        this.productService = productService;
        this.dataService = dataService;
        this.cartItems = [];
    }
    ProductListComponent.prototype.ngOnInit = function () {
        // this.subscription = this.productService.getProducts().subscribe(products => {
        //   this.products = products;
        var _this = this;
        //   console.log("got products: ", this.products);
        // });
        this.products$ = this.productService.getProducts();
        // workaround to pre-fill the number of cart items when we go back to another tab and come here again -- Start
        // this.cartItems = this.dataService.cartItems;
        // workaround -- END  ( Actual Way is publish using BehaviourSubject)
        this.cartSubscription = this.dataService.cartItemsSource.subscribe(function (cartItems) {
            _this.cartItems = cartItems;
            console.log("Product list CART Subscription, ", cartItems);
        });
    };
    ProductListComponent.prototype.addToCart = function (product) {
        var cartItem = {
            id: product.id,
            name: product.name,
            price: product.price
        };
        this.dataService.addItem(cartItem);
    };
    ProductListComponent.prototype.deleteProduct = function (product) {
    };
    ProductListComponent.prototype.ngOnDestroy = function () {
        // if (!this.subscription.closed) {
        //   this.subscription.unsubscribe();
        // }
        // this.cartSubscription.unsubscribe();
    };
    ProductListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-product-list',
            template: __webpack_require__("./src/app/product/product-list/product-list.component.html"),
            styles: [__webpack_require__("./src/app/product/product-list/product-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_2__shared_services_data_service__["a" /* DataService */]])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "./src/app/product/product-search/product-search.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product/product-search/product-search.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  product-search works!\n</p>\n"

/***/ }),

/***/ "./src/app/product/product-search/product-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductSearchComponent; });
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

var ProductSearchComponent = /** @class */ (function () {
    function ProductSearchComponent() {
    }
    ProductSearchComponent.prototype.ngOnInit = function () {
    };
    ProductSearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-product-search',
            template: __webpack_require__("./src/app/product/product-search/product-search.component.html"),
            styles: [__webpack_require__("./src/app/product/product-search/product-search.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductSearchComponent);
    return ProductSearchComponent;
}());



/***/ }),

/***/ "./src/app/product/product.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductModule", function() { return ProductModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_home_product_home_component__ = __webpack_require__("./src/app/product/product-home/product-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_list_product_list_component__ = __webpack_require__("./src/app/product/product-list/product-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__product_edit_product_edit_component__ = __webpack_require__("./src/app/product/product-edit/product-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product_search_product_search_component__ = __webpack_require__("./src/app/product/product-search/product-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_product_service__ = __webpack_require__("./src/app/product/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_save_work_guard_service__ = __webpack_require__("./src/app/product/services/save-work-guard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    {
        // path: 'products',
        // when we do the lazy loading of product module
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__product_home_product_home_component__["a" /* ProductHomeComponent */],
        //nested navigation
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_3__product_list_product_list_component__["a" /* ProductListComponent */]
            },
            {
                path: 'edit/:id',
                component: __WEBPACK_IMPORTED_MODULE_4__product_edit_product_edit_component__["a" /* ProductEditComponent */],
                canDeactivate: [__WEBPACK_IMPORTED_MODULE_10__services_save_work_guard_service__["a" /* SaveWorkGuardService */]]
            },
            {
                path: 'create',
                component: __WEBPACK_IMPORTED_MODULE_4__product_edit_product_edit_component__["a" /* ProductEditComponent */],
                canDeactivate: [__WEBPACK_IMPORTED_MODULE_10__services_save_work_guard_service__["a" /* SaveWorkGuardService */]]
            },
            {
                path: 'search',
                component: __WEBPACK_IMPORTED_MODULE_5__product_search_product_search_component__["a" /* ProductSearchComponent */]
            }
        ]
    }
];
var ProductModule = /** @class */ (function () {
    function ProductModule() {
    }
    ProductModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["c" /* ReactiveFormsModule */],
                //FIXME: forChild
                // RouterModule.forRoot(routes),
                // For lazy loading
                __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_9__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__product_home_product_home_component__["a" /* ProductHomeComponent */], __WEBPACK_IMPORTED_MODULE_3__product_list_product_list_component__["a" /* ProductListComponent */], __WEBPACK_IMPORTED_MODULE_4__product_edit_product_edit_component__["a" /* ProductEditComponent */], __WEBPACK_IMPORTED_MODULE_5__product_search_product_search_component__["a" /* ProductSearchComponent */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__services_product_service__["a" /* ProductService */],
                __WEBPACK_IMPORTED_MODULE_10__services_save_work_guard_service__["a" /* SaveWorkGuardService */]
            ]
        })
    ], ProductModule);
    return ProductModule;
}());



/***/ }),

/***/ "./src/app/product/services/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



console.log("ENV: ", __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */]);
var ProductService = /** @class */ (function () {
    // Dependency injection (DI)
    function ProductService(http) {
        this.http = http;
    }
    ProductService.prototype.getProducts = function () {
        // let productApi : string = 'http://localhost:7070/api/products';
        // let delayedProductApi: string = "http://localhost:7070/delayed/api/products";
        var productApi = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiEndPoint + "/api/products";
        var delayedProductApi = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiEndPoint + "/delayed/api/products";
        return this.http.get(productApi);
    };
    ProductService.prototype.getBrands = function () {
        // let productApi : string = 'http://localhost:7070/api/products';
        // let delayedProductApi: string = "http://localhost:7070/delayed/api/products";
        var brandsapi = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiEndPoint + "/api/brands";
        return this.http.get(brandsapi);
    };
    // GET /api/products/12345
    ProductService.prototype.getProduct = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiEndPoint + "/api/products/" + id);
    };
    //update
    //PUT /api/products/123
    // {json data}
    // server receives, commmit data to db
    // server read data from db, sends back to client
    ProductService.prototype.updateProduct = function (product) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiEndPoint + "/api/products/" + product.id, product);
    };
    //Create no ID
    //POST /api/products
    // {json data}
    // server receives, commit data to db, server generates id
    // server read data from db, sends back to client, with id.
    ProductService.prototype.createProduct = function (product) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiEndPoint + "/api/products", product);
    };
    ProductService.prototype.saveProduct = function (product) {
        if (product.id) {
            return this.updateProduct(product);
        }
        return this.createProduct(product);
    };
    ProductService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/product/services/save-work-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaveWorkGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SaveWorkGuardService = /** @class */ (function () {
    function SaveWorkGuardService() {
    }
    // angular passes the component instance
    SaveWorkGuardService.prototype.canDeactivate = function (target) {
        // return true/false
        // true, you can leave the component
        // false, stay at component
        if (target.productForm.pristine) {
            return true;
        }
        //alert warning, form is changed
        var result;
        result = window.confirm('unsaved data, proceed?');
        return result;
    };
    SaveWorkGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], SaveWorkGuardService);
    return SaveWorkGuardService;
}());



/***/ })

});
//# sourceMappingURL=product.module.chunk.js.map