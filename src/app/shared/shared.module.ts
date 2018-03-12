import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressComponent } from './components/address/address.component';
import { LikeComponent } from './components/like/like.component';
import { HighlightDirective } from './directives/highlight.directive';
import { PowerPipe } from './pipes/power.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { DataService } from './services/data.service';
import { LoginComponent } from './components/login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { SaveAlertGuard } from './guards/save-alert.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptorService } from './services/request-interceptor.service';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddressComponent, LikeComponent, HighlightDirective, PowerPipe, FilterPipe, LoginComponent],

  exports: [
    //allow other modules to use component, directive, pipes 
    LikeComponent,
    PowerPipe,
    HighlightDirective,
    FilterPipe
  ],

  //module provider
  // single instance per application
  // if we have DataService also in component level, then component level takes higher precidence.
  providers: [
    DataService,
    AuthService,
    AuthGuard,
    SaveAlertGuard,

    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptorService,
      multi: true  // as we can have n-number of interceptors we need to specify this multi property, if false it will override the other interceptors
    }
  ]

})
export class SharedModule { }
