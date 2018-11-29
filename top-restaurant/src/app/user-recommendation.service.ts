import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserFilterService} from "./user-filter.service";

const httpOptions = {
  headers: new HttpHeaders({ 'Accept': 'text/html' })
};

@Injectable()
export class UserRecommendationService {

  public url = 'http://127.0.0.1:8080/get_recommendation_after_topic_modelling/';
  public user;

  constructor(private http: HttpClient, private filter:UserFilterService) { }

  getUserRecommendation() {
    this.user = this.filter.getUserId();
    console.log(this.url + this.user);
    return this.http.get(this.url + this.user);
  }

}
