import { Injectable } from '@angular/core';
import { Resolve, Data } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpService } from '../http/http.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OverviewService implements Resolve<any> {

  private passages: string[] = [];

  constructor(private httpService: HttpService) { }

  getPassages(): string[] {
    return this.passages;
  }

  updatePassage(index: number, text: string): void {
    this.passages[index] = text;
  }

  updateOverview(text: string) {
    const request = {
      passage: text
    }
    return this.httpService.updateOverview(request);
  }

  resolve(): Observable<any> {
    return this.httpService.getOverview().pipe(map((data: Data) => data));      
  }
}
