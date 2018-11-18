import { Component, OnInit } from '@angular/core';
import { TopRestaurantService} from "../top-restaurant.service";

@Component({
  selector: 'app-dashboard-user',
  templateUrl: './dashboard-user.component.html',
  styleUrls: ['./dashboard-user.component.css']
})
export class DashboardUserComponent implements OnInit {

  public api_result;
  public restaurants = [];
  constructor(private restservice:TopRestaurantService ) { }

  ngOnInit() {
    this.getRestaurantList();
  }

  getRestaurantList() {
    this.restservice.getTopRestaurants().subscribe( (data) => {
      this.api_result = data['business_list'];

      for( let key in this.api_result ) {
        this.restaurants.push(this.api_result[key]);
      }
      console.log(this.restaurants);

    });
  }

}
