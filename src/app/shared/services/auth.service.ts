import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import {HttpClient} from '@angular/common/http';
import { environment } from '../../../environments/environment';

import {BehaviorSubject} from 'rxjs/BehaviorSubject';
// import 'rxjs/Rx'; -- Rx has more imports, as we need only operator map we can get that alone as in line 9
import 'rxjs/add/operator/map';
@Injectable()
export class AuthService {

  authStatus: boolean = false;
  authSource: BehaviorSubject<boolean>;

  token: string;

  constructor(private http: HttpClient) {
    this.authSource = new BehaviorSubject(false);
   }

  isAuthenticated() : boolean {
    return this.authStatus;
  }

  login(username: string, password: string): Observable<any> {
    let data = {
      username: username,
      password: password
    };
    //TODO: Save token
    return this.http.post(`${environment.authEndPoint}`, data)
                    .map(tokenObj => { // now map is available as we have import stmt on line 9
                      console.log("Response: ", tokenObj);
                      this.authStatus = true;
                      this.authSource.next(true);
                      this.token = tokenObj['token'];
                     
                      return tokenObj; // pass to subscribe
                    }); 
  }

  logout() {
    this.token = '';
    this.authStatus = false;
    //TODO: Delete token

  }
}
