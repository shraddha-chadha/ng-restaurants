import {Component, Input, OnInit} from '@angular/core';
import { TopRestaurantService} from "../top-restaurant.service";
import { UserRecommendationService} from "../user-recommendation.service";
import {UserFilterService} from "../user-filter.service";
import {BusinessInsightsService} from "../business-insights.service";

@Component({
  selector: 'app-dashboard-owner',
  templateUrl: './dashboard-owner.component.html',
  styleUrls: ['./dashboard-owner.component.css']
})
export class DashboardOwnerComponent implements OnInit {

  public years: number[];
  quarters = [
    {
      "name": "First",
      "value": "quarter1"
    },
    {
      "name": "Second",
      "value": "quarter2"
    },
    {
      "name": "Third",
      "value": "quarter3"
    },
    {
      "name": "Fourth",
      "value": "quarter4"
    }
  ];
  selectedQuarter = 'quarter1';
  selectedYear = 2017;
  zipCode;
  public api_recomd_result;
  public restaurants = [];
  public recommendations = [];
  public businessin = [];

  constructor(private buss:BusinessInsightsService, private restservice:TopRestaurantService, private userservice: UserRecommendationService, private userfilter:UserFilterService ) {
    let yearsList = [];
    for (let i = 2018; i >= 1900; i--) {
      yearsList.push(i);
    }
    this.years = yearsList;
  }

  ngOnInit() {
    this.search();
    this.getTopRest();
    this.getBusinessNeighbourhoodInsights();
  }

  search() {
    this.userfilter.setFilterValues(this.zipCode, this.selectedQuarter, this.selectedYear);
    this.getTopRest();
    this.getBusinessNeighbourhoodInsights();
  }

  getTopRest () {
    this.restservice.getResponse().subscribe((data) => {
      console.log(data['business_list']);
      let temp = [];

      for( let key in data['business_list']) {
        temp.push(data['business_list'][key]);
      }

      temp.sort((a,b) => {
        return a.rank - b.rank;
      });

      temp = temp.slice(0, temp.length - 2);

      this.restaurants = temp;
      console.log("REST ", this.restaurants);
    });
  }

  getBusinessNeighbourhoodInsights() {
    this.buss.getBusinessInsights().subscribe( (data) => {
      let temp =[];

      for( let key in data['response'] ) {
        temp.push(data['response'][key]);
      }

      temp.sort((a,b) => {
        return a.rank - b.rank;
      });

      temp = temp.slice(0, temp.length - 1);

      this.businessin = temp;
      console.log(this.businessin);
    });
  }
}
