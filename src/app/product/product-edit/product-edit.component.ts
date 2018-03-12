import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ProductService } from '../services/product.service';

// GET /api/products/34345
// Edit existing data (id exist) or create new one (id is not present)

// the following import helps to read the data from the url parameter
import {ActivatedRoute, //read url params
      Router // helps to navigate between pages
  } from '@angular/router';
import { Product } from '../models/product';
import { Brand } from '../models/brand';
import { Subscription } from 'rxjs/Subscription';

import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit, OnDestroy {


  product: Product = new Product(); //create 
  brands: Brand[] = [];
  
  // to stop the processing request when component is not in scope.
  subscription: Subscription;

  @ViewChild('productForm')
  productForm : NgForm;


  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    console.log (" ID is : ", id );

    // GET product with id
    this.subscription = this.productService.getProduct(id).subscribe(product => {
      this.product = product;
    });

    // GET list of all Brands
    this.productService.getBrands().subscribe(brands => {
      this.brands = brands;
    });
    
  }

  gotoList() {
    this.router.navigateByUrl('/products');  // goes to product list 

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  saveProduct() {
    console.log("Saved Product: ", this.product);


    if (this.productForm.invalid) {
      alert('Invalid form data');
      return;
    }
    this.productService.saveProduct(this.product).subscribe(savedProduct => {

      //option 1: continue working same form
      this.product = savedProduct;

      //option 2: goto to list page.
      this.gotoList();
    });   
  }
}
