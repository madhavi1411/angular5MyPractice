import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { CartItem, DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products : Product[] = [];


  constructor(private productService: ProductService, private dataService : DataService) {

   }

  ngOnInit() {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
      
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

}
