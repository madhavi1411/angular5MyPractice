//module is logical collection of all the components

// +
// module references
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharedModule } from './shared/shared.module';




@NgModule({
    //for all the modules
    imports: [
        BrowserModule,
        FormsModule,

        SharedModule,


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