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
import { NotFoundComponent } from './components/not-found/not-found.component';

import {RouterModule, Routes} from '@angular/router';
// import { ProductModule } from './product/product.module';

// Angular 4.3 onwards
// includes simple api's
// interceptors [auth]
import {HttpClientModule} from '@angular/common/http';


const routes : Routes = [
    {
        path: '',
        component: HomeComponent
    }, 
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },

    // Lazy loading of product module
    {
        path : 'products',
        loadChildren: 'app/product/product.module#ProductModule'  // path to module file, class name
    },
    
    {
        path: '**',
        component: NotFoundComponent
    },


]



@NgModule({
    //for all the modules
    imports: [
        BrowserModule,
        FormsModule,
        //creates router module, based on routes
        RouterModule.forRoot(routes), //forRoot is a static method from RouterModule which works like a factory
        HttpClientModule,  //this module provides certain api's which help to retrieve the data

        SharedModule,

        //TODO: lazy loading of Product module
        // ProductModule,


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
        NotFoundComponent,
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