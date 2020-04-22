import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { SnackBarService } from './content/snack-bar.service';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { defineAbilitiesFor, AppAbility } from './ability/ability.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements CanActivate {

  private API_URL = environment.API_URL;
  private loggedIn: boolean = true;
  public role: string = 'user';

  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private snackBarService: SnackBarService,
    private ability: AppAbility) { }

  login(req: any) {
    const success = (response) => {
      this.router.navigate(['/main'], { state: response });
      this.loggedIn = true;
      this.snackBarService.openSnackbar('Login successful..');
      this.setUserPermissions();
    }
    const failure = (error) => {
      success(error.name);
      //this.snackBarService.openSnackbar('Login failed..');
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
    if (this.loggedIn) {
      return true;
    }
    this.router.navigate(['/landing']);
  }

  private setUserPermissions() {
    if (this.role) {
      const abilities = this.ability.update(defineAbilitiesFor(this.role));
      console.log(abilities);
    }
  }
}
