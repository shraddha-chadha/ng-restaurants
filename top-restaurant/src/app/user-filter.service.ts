import { Injectable } from '@angular/core';

@Injectable()
export class UserFilterService {
  public args = [];
  public userId;
  public businessId;

  constructor() { }

  setFilterValues(zipcode,quarter,year) {
    this.args.length = 0;
    this.args.push(zipcode);
    this.args.push(quarter);
    this.args.push(year);
    console.log(this.args);
  }

  getFilterValues() {
    return this.args;
  }

  setUserId(user) {
    this.userId = user;
  }

  getUserId() {
    return this.userId;
  }

  setBusinessId(business) {
    this.businessId = business;
  }

  getBusinessID() {
    return this.businessId;
  }

}
