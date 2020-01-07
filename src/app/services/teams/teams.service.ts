import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import teams from './team-structure.js';

@Injectable({
  providedIn: 'root'
})
export class TeamsService implements Resolve<any> {

  constructor() { }

  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(teams);
      }, 1000);
    });
  }
}
