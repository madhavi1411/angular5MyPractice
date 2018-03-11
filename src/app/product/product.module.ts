import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductHomeComponent } from './product-home/product-home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductSearchComponent } from './product-search/product-search.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProductHomeComponent, ProductListComponent, ProductEditComponent, ProductSearchComponent]
})
export class ProductModule { }
