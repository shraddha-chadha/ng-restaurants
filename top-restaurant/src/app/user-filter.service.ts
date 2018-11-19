import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Accept': 'text/html' })
};


@Injectable()
export class UserFilterService {
  public url = 'https://ordinary-moose-47.localtunnel.me/get_top_restaurants_quarter_qy/';

  constructor(private http: HttpClient) { }

  getFilterResults(quater, year, zipcode) {
    return this.http.get(this.url + quater + '/' + year);
  }
}
