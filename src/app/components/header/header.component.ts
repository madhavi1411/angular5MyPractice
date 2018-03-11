import { Component, OnInit } from '@angular/core';
import { DataService, CartItem } from '../../shared/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  totalCount: number;

  cartItems : CartItem[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.totalCount = this.dataService.cartItems.length;

    // workaround -- added line 13
    // this.cartItems = this.dataService.cartItems;

    //RxJs way
    // subscribe
    this.dataService.cartItemsSource.subscribe(cartItems => {
      this.cartItems = cartItems;
      this.totalCount = cartItems.length
      console.log("header subscribe : ", cartItems);
    });
  }

  emptyCart() {
    this.dataService.empty();
  }

}
