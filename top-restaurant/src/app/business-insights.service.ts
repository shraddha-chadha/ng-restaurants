import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {UserFilterService} from "./user-filter.service";

@Injectable()
export class BusinessInsightsService {

  public url = 'http://127.0.0.1:8080/get_insights/';
  public business_id;
  public zipcode;
  public quarter;
  public year;
  public parameters = [];

  constructor(private http: HttpClient, private userfilter:UserFilterService) { }

  getBusinessInsights() {
    this.parameters = this.userfilter.getFilterValues();
    this.business_id = this.userfilter.getBusinessID();
    this.zipcode = this.parameters[0];
    this.quarter = this.parameters[1];
    this.year = this.parameters[2];

    console.log(this.url + this.business_id + '/' + this.quarter + '/' + this.year);
    return this.http.get(this.url + this.business_id + '/' + this.quarter + '/' + this.year);
  }

}
