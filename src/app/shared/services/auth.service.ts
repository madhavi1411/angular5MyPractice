import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import {HttpClient} from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthService {

 

  constructor(private http: HttpClient) { }

  isAuthenticated() : boolean {
    return false;
  }

  login(username: string, password: string): Observable<any> {
    let data = {
      username: username,
      password: password
    };
    //TODO: Save token
    return this.http.post(`${environment.authEndPoint}`, data);
  }

  logout() {

    //TODO: Delete token

  }
}
