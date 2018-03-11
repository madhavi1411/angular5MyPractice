import { Injectable, } from '@angular/core';

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

}
