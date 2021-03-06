import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductHomeComponent } from './product-home/product-home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductSearchComponent } from './product-search/product-search.component';

import {RouterModule, Routes} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from './services/product.service';
import { SharedModule } from '../shared/shared.module';
import { SaveAlertGuard } from '../shared/guards/save-alert.guard';
import { SaveWorkGuardService } from './services/save-work-guard.service';

export const routes: Routes = [
  {
    // path: 'products',
    // when we do the lazy loading of product module
    path: '',
    component: ProductHomeComponent,

    //nested navigation
    children: [
      {
        path: '',
        component: ProductListComponent
      },
      {
        path: 'edit/:id',
        component: ProductEditComponent,
        canDeactivate: [SaveWorkGuardService]
      },
      {
        path: 'create',
        component: ProductEditComponent,
        canDeactivate: [SaveWorkGuardService]
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
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    //FIXME: forChild
    // RouterModule.forRoot(routes),
    // For lazy loading
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [ProductHomeComponent, ProductListComponent, ProductEditComponent, ProductSearchComponent],
  providers: [
    ProductService,
    SaveWorkGuardService
  ]
})
export class ProductModule { }
