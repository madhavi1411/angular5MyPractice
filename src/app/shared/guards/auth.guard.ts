import { Injectable } from '@angular/core';
import { CanActivate,
          ActivatedRouteSnapshot,
          RouterStateSnapshot,  // where the user is going next
            Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';


// This is the Entry Guard

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router : Router) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
     // depending on the return value angular will decide on the loadin the next component or not
     if (this.authService.isAuthenticated()) {
       return true;
     }

     console.log('You are visiting: ', state.url)
     this.router.navigateByUrl('/login');
     return false;
  }
}
