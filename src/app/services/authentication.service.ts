import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements CanActivate {

  private loggedIn: boolean = false;

  constructor(private router: Router) { }

  login() {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.loggedIn = true;
        resolve();
      }, 2000);
    });
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return true;
    // if (this.loggedIn) {
    //   return true;
    // }
    // this.router.navigate(['/login']);
  }
}
