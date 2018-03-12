import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressComponent } from './components/address/address.component';
import { LikeComponent } from './components/like/like.component';
import { HighlightDirective } from './directives/highlight.directive';
import { PowerPipe } from './pipes/power.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { DataService } from './services/data.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AddressComponent, LikeComponent, HighlightDirective, PowerPipe, FilterPipe],

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
    DataService
  ]

})
export class SharedModule { }
