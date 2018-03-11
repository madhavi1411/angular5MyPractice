import { Injectable } from '@angular/core';

// Subject => subscribe called only on next()
import { Subject } from 'rxjs/Subject';

// BehaviorSubject => subscribe called as soon as subscribed
// publish the last known value
import {BehaviorSubject} from 'rxjs/BehaviorSubject';


// sharing data between services (not from parent to child or child to parent)
export interface CartItem {
  name: string;
  price : number;
  id : number;
}


// Business logic communication with webservice
// data sharing among components

//Angular creates service object, inject the instance

//singleton object and multiple instances
//scope of service can be per component or one for every component


@Injectable()
export class DataService {
 
  // OnInit, OnDestroy -- should be used only for the components, directives and pipes but not on services.

  // ngOnDestroy(): void {
  //  console.log("data service on Destroy")
  // }
  // ngOnInit(): void {
  //   console.log("data service on Init")
  // }
  constructor() { 
    console.log("DataService created");
  }

  cartItems: CartItem[] = [];

  addItem(cartItem: CartItem) {
    console.log("added Item");
    this.cartItems.push(cartItem);

    //RxJs 
    //publish
    this.cartItemsSource.next(this.cartItems);

  }


  //RxJS:
// Source - produces some data and we have subscribers to receive the data
// Here source is DataService, and we have changes in the cartItem
// we need to publish the changes
// EventEmitter --> Subject --> Observable
// RxJs has feasibility to subscribe to n number of subscribers
// RxJs also allows to unsubscribe and re-subscribe any point in time


// we can subscribe based on a filter as well. -- this is not as part of RxJs
// components can react depending on the need of the data from source.

  // cartItemsSource : Subject<CartItem[]> = new Subject();
  cartItemsSource : BehaviorSubject<CartItem[]> = new BehaviorSubject([]);
  // cartItemsSource : BehaviorSubject<CartItem[]> = new BehaviorSubject(this.cartItems);


  empty() {
    console.log("empty cart called");
    this.cartItems = []; // we are loosing the reference here. [here we need to user observable pattern from RxJs]

    //RxJs 
    //publish
    this.cartItemsSource.next(this.cartItems);
  }

}
