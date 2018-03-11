import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import * as $ from 'jquery'; //jquery can go beyond the component boundary

interface Address {
  city: string;
  pincode: number;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  // <input #name />
  @ViewChild("name")
  nameInput: ElementRef;

  @ViewChild("para1")
  para1 : ElementRef;

  // @ViewChild("rootDiv")
  // rootDiv : ElementRef;

address: Address; //undefined


  //dependency injection
  //option2 , angular shall inject top element no need to specify #rootDiv on top of the div element
  constructor(private topDiv: ElementRef) { }

  ngOnInit() {
    //nativeElement is the DOM object
    this.nameInput.nativeElement.focus(); 
    this.nameInput.nativeElement.value = 'From TS'; 

    //BAD
    // $("p").text("Hi JQuery");

    //JQuery Scoped search
    // $(this.rootDiv.nativeElement).find("p").text("Hi Scoped JQuery");
    $(this.topDiv.nativeElement).find("p").text("Hi Scoped JQuery");

    setTimeout(() => {
      this.address = {city: 'BLR', pincode: 560078};
    }, 3000);

    //Intellisense for jquery
    

  }

}
