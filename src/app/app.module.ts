//module is logical collection of all the components

// +
// module references
import {NgModule} from '@angular/core';
import { AppComponent } from './app.component';

import {BrowserModule} from '@angular/platform-browser';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
    //for all the modules
    imports: [
        BrowserModule,

        //InventoryModule
    ],

    // for all the components
    declarations: [
        //all components, directives, pipes
        AppComponent,
        HomeComponent,
        AboutComponent,
        ContactComponent,
        HeaderComponent,
        FooterComponent,
        //HeaderComponent,
        //FooterComponent,
        //HomeComponent
    ],
    // to specify the top most component i.e., root component
    bootstrap: [ 
        AppComponent
    ]
})
export class AppModule {

}