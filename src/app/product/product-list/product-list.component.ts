import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { CartItem, DataService } from '../../shared/services/data.service';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {


  // products : Product[] = [];

  //how to reduce the boiler place code
  products$ : Observable<Product[]>     // $ - at the end of variable name to represent async that the data will be delayed

  // to stop the processing request when component is not in scope.
  // subscription: Subscription;

  //how to reduce the boiler place code


  cartSubscription : Subscription;
  cartItems : CartItem[] = [];

  fieldName: string;
  predicate: string;
  expectedValue: any;

  constructor(private productService: ProductService, private dataService : DataService) {

   }

  ngOnInit() {
    // this.subscription = this.productService.getProducts().subscribe(products => {
    //   this.products = products;

    //   console.log("got products: ", this.products);
      
    // });

    this.products$ = this.productService.getProducts();

    // workaround to pre-fill the number of cart items when we go back to another tab and come here again -- Start
    // this.cartItems = this.dataService.cartItems;
    // workaround -- END  ( Actual Way is publish using BehaviourSubject)

    this.cartSubscription = this.dataService.cartItemsSource.subscribe(cartItems => {
      this.cartItems = cartItems;
      console.log("Product list CART Subscription, ", cartItems);
    });

  }

  addToCart(product: Product) {
    let cartItem: CartItem = {
      id : product.id,
      name: product.name,
      price: product.price
    };
    
    this.dataService.addItem(cartItem);


  }

  deleteProduct(product: Product) {

  }

  ngOnDestroy(): void {
    // if (!this.subscription.closed) {
    //   this.subscription.unsubscribe();
    // }

    // this.cartSubscription.unsubscribe();
  }

}
