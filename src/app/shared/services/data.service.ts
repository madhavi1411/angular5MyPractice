import { Injectable, OnInit, OnDestroy } from '@angular/core';

// Business logic communication with webservice
// data sharing among components

//Angular creates service object, inject the instance

//singleton object and multiple instances
//scope of service can be per component or one for every component


@Injectable()
export class DataService implements OnInit, OnDestroy{


  ngOnDestroy(): void {
   console.log("data service on Destroy")
  }
  ngOnInit(): void {
    console.log("data service on Init")
  }
  constructor() { 
    console.log("DataService created");
  }

}
