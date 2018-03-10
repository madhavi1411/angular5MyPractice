import {Component, OnInit} from '@angular/core';
import { setTimeout } from 'timers';

@Component({
    //view
    // template: '<h1> PRODUCT-APP </h1>',
    templateUrl: 'app.component.html', 
    //component html tag name
    selector: 'app-root',

    // scoped styles for the this component.
    styleUrls: [
        'app.component.css'
    ]
    

})
export class AppComponent implements OnInit {

    // called after view initialized in browser
    ngOnInit(): void {
        setTimeout(() => {
            console.log('Timeout called');
            this.year = 2014;
        }, 3000);

        // let that = this;
        // setTimeout(function() {
        //     console.log('Timeout called');
        //     that.year = 2020;
        // }, 3000);
        throw new Error("Method not implemented.");
    }
     appTitle: string = 'Product App';
     year: number = 1987;

     constructor() {

     }

     fromChild(msg: string) {
         alert(msg);
     }

}
