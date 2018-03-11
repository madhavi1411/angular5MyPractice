import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductHomeComponent } from './product-home/product-home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductSearchComponent } from './product-search/product-search.component';

import {RouterModule, Routes} from '@angular/router';
import { componentFactoryName } from '@angular/compiler';

export const routes: Routes = [
  {
    path: 'products',
    component: ProductHomeComponent,

    //nested navigation
    children: [
      {
        path: 'list',
        component: ProductListComponent
      },
      {
        path: 'edit/:id',
        component: ProductEditComponent
      },
      {
        path: 'create',
        component: ProductEditComponent
      },
      {
        path: 'search',
        component: ProductSearchComponent
      }
    ]
  }
]

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProductHomeComponent, ProductListComponent, ProductEditComponent, ProductSearchComponent]
})
export class ProductModule { }
