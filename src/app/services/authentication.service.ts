import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { SnackBarService } from './content/snack-bar.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements CanActivate {

  private loggedIn: boolean = false;

  constructor(private router: Router, private snackBarService: SnackBarService) { }

  login() {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.loggedIn = true;
        resolve();
      }, 2000);
    });
  }

  logout() {
    this.loggedIn = false;
    this.router.navigate(['/landing']);
    this.snackBarService.openSnackbar('Log out Successful...');
  }

  register() {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.loggedIn = false;
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
