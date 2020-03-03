import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { SnackBarService } from './content/snack-bar.service';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements CanActivate {

  private loggedIn: boolean = true;
  private API_URL = environment.API_URL;

  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private snackBarService: SnackBarService) { }

  login(req: any) {
    const temporarySuccess = (error) => {
      this.router.navigate(['/main'], { state: error.name });
      this.loggedIn = true;
      this.snackBarService.openSnackbar('Login successful..');
    }
    const success = (response) => {
      this.router.navigate(['/main'], { state: response });
      this.loggedIn = true;
      this.snackBarService.openSnackbar('Login successful..');
    }
    const failure = (error) => {
      // temporarySuccess(error);
      this.snackBarService.openSnackbar('Login failed..');
    }
    this.httpClient.post(`${this.API_URL}/login`, req).subscribe(success, failure);    
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
