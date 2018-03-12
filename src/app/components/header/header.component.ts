import { Component, OnInit } from '@angular/core';
import { DataService, CartItem } from '../../shared/services/data.service';
import { AuthService } from '../../shared/services/auth.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  totalCount: number;

  cartItems : CartItem[] = [];

  authSource$: Observable<boolean>;

  constructor(private dataService: DataService, private authService: AuthService) { }

  ngOnInit() {
    this.authSource$ = this.authService.authSource;


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

  logout() {
    this.authService.logout();
  }

}
