import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Product } from '../models/product';

@Injectable()
export class ProductService {

  // Dependency injection (DI)
  constructor(private http: HttpClient) { 

  }

  getProducts(): Observable<Product[]> {
    let productApi : string = 'http://localhost:7070/api/products';
    let delayedProductApi: string = "http://localhost:7070/delayed/api/products";
    
    return this.http.get<Product[]>(delayedProductApi);
  }

}
