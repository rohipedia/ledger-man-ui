import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) { }

  getOverview() {
    return this.http.get(`${this.API_URL}/overview`);
  }

  updateOverview(text: any) {
    return this.http.post(`${this.API_URL}/overview`, text);
  }
}
