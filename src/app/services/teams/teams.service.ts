import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import teams from './team-structure.js';

@Injectable({
  providedIn: 'root'
})
export class TeamsService implements Resolve<any> {

  constructor() { }
  
  resolve(): Observable<any> | Promise<any> | any {

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(teams);
      }, 1000);
    });
  }
}
