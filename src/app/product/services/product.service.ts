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
    return this.http.get<Product[]>('http://localhost:7070/api/products');
  }

}
