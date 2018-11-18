import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Accept': 'text/html' })
};

@Injectable()
export class TopRestaurantService {
  public toprest;

  constructor(private http: HttpClient) { }

  getTopRestaurants() {
    return this.http.get('http://127.0.0.1:8080/api/v1/entries/quarter1/2017');
  }


}
