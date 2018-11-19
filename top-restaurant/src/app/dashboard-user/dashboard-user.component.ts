import { Component, OnInit } from '@angular/core';
import { TopRestaurantService} from "../top-restaurant.service";
import { UserRecommendationService} from "../user-recommendation.service";

@Component({
  selector: 'app-dashboard-user',
  templateUrl: './dashboard-user.component.html',
  styleUrls: ['./dashboard-user.component.css']
})
export class DashboardUserComponent implements OnInit {

  public api_rest_result
  public api_recomd_result;
  public restaurants = [];
  public recommendations = [];
  constructor(private restservice:TopRestaurantService, private userservice: UserRecommendationService ) { }

  ngOnInit() {
    this.getRestaurantList();
    this.getUserRecommendations();
  }

  getRestaurantList() {
    this.restservice.getTopRestaurants().subscribe( (data) => {

      this.api_rest_result = data['business_list'];
      console.log(typeof this.api_rest_result);
      let temp = [];

      for( let key in this.api_rest_result ) {
        temp.push(this.api_rest_result[key]);
      }

      temp.sort((a,b) => {
        return a.rank - b.rank;
      });

      this.restaurants = temp;
      console.log(typeof this.restaurants);
    });
  }

  getUserRecommendations() {
    this.userservice.getUserRecommendation().subscribe( (data) => {
      this.api_recomd_result = data['response'];
      let temp = [];

      for( let key in this.api_recomd_result ) {
        temp.push(this.api_recomd_result[key]);
      }

      this.recommendations = temp;
      console.log(this.recommendations);
    });
  }
}
