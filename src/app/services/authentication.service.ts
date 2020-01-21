import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { SnackBarService } from './content/snack-bar.service';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements CanActivate {

  private loggedIn: boolean = false;
  private API_URL = environment.API_URL;

  constructor(private router: Router, private httpClient: HttpClient, private snackBarService: SnackBarService) { }

  login() {
    this.httpClient.get(`${this.API_URL}/login`).subscribe((response: Response) => {
      this.router.navigate(['/main'], {state: {data: response}});
      this.loggedIn = true;
      this.snackBarService.openSnackbar('Login successful..');
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
    //return true;
    if (this.loggedIn) {
      return true;
    }
    this.router.navigate(['/landing']);
  }
}
