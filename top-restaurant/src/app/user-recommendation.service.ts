import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Accept': 'text/html' })
};

@Injectable()
export class UserRecommendationService {

  public url = 'https://ordinary-moose-47.localtunnel.me/get_recommendation/';
  public user = 'vMrnL8HA0OvnME8PC0Dg1A';

  constructor(private http: HttpClient) { }

  getUserRecommendation() {
    return this.http.get(this.url + this.user);
  }

}
