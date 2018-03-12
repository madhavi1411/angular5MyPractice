import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Product } from '../models/product';
import { environment } from '../../../environments/environment';
import { Brand } from '../models/brand';


console.log("ENV: " , environment)

@Injectable()
export class ProductService { 

  // Dependency injection (DI)
  constructor(private http: HttpClient) { 

  }

  getProducts(): Observable<Product[]> {
    // let productApi : string = 'http://localhost:7070/api/products';
    // let delayedProductApi: string = "http://localhost:7070/delayed/api/products";

    const productApi : string = `${environment.apiEndPoint}/api/products`;
    const delayedProductApi: string = `${environment.apiEndPoint}/delayed/api/products`;
   
    
    return this.http.get<Product[]>(productApi);
  }

  getBrands(): Observable<Brand[]> {
    // let productApi : string = 'http://localhost:7070/api/products';
    // let delayedProductApi: string = "http://localhost:7070/delayed/api/products";

    const brandsapi : string = `${environment.apiEndPoint}/api/brands`;
   
    return this.http.get<Brand[]>(brandsapi);
  }

  // GET /api/products/12345
  getProduct(id): Observable<Product> {
    return this.http.get<Product>(`${environment.apiEndPoint}/api/products/${id}`);
  }

  //update
  //PUT /api/products/123
  // {json data}

  // server receives, commmit data to db
  // server read data from db, sends back to client
  private updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(`${environment.apiEndPoint}/api/products/${product.id}`, product);
  }
  

  //Create no ID
  //POST /api/products
  // {json data}

  // server receives, commit data to db, server generates id
  // server read data from db, sends back to client, with id.
  private createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${environment.apiEndPoint}/api/products`, product);
  }


  saveProduct(product: Product): Observable<Product> {
    if (product.id) {
      return this.updateProduct(product);
    }
 
    return this.createProduct(product);
 }

}
