import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  price: number = 99.99;
  title: string = 'Home';
  counter: number = 0;

  constructor() { }

  ngOnInit() {
  }

  parentClick() {
    alert('Parent');
  }

  increment(e: Event) {
    console.log("incrementing...");
    this.counter += 1;

    //cancel bubble
    e.stopPropagation();
  }

}
