import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {UserFilterService} from "./user-filter.service";

@Injectable()
export class TopRestaurantService {

public url = 'http://127.0.0.1:8080/get_top_restaurants_quarter_qy/';
public zipcode;
public quarter;
public year;
public lat;
public long;
public parameters = [];

  constructor(private http: HttpClient, private userfilter:UserFilterService) { }

  getResponse() {
    this.parameters = this.userfilter.getFilterValues();
    this.zipcode = this.parameters[0];
    this.quarter = this.parameters[1];
    this.year = this.parameters[2];

    if(this.zipcode == undefined || this.zipcode == null) {
      this.url = 'http://127.0.0.1:8080/get_top_restaurants_quarter_qy/';
      console.log(this.url + this.quarter + '/' + this.year);
      return this.http.get(this.url + this.quarter + '/' + this.year);

    } else {
      this.url = 'http://127.0.0.1:8080/get_top_restaurants_location/';
      console.log(this.url + this.lat + '/' + this.long + '/' + this.quarter + '/' + this.year);
      return this.http.get(this.url + this.quarter + '/' + this.year);

    }

  }


}
