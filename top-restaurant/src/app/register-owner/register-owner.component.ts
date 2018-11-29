import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-owner',
  templateUrl: './register-owner.component.html',
  styleUrls: ['./register-owner.component.css']
})
export class RegisterOwnerComponent implements OnInit {

  public firstName;
  public lastName;
  public restaurantId;
  public password;

  constructor() { }

  ngOnInit() {
  }

  registerOwner() {

    let owner = {
      firstName: this.firstName,
      lastName: this.lastName,
      restaurantId: this.restaurantId,
      password:this.password
    };

    let rest_owner = JSON.parse(localStorage.getItem('rest_owner'));

    if(rest_owner == null) {
      let o = [];
      o.push(owner);
      localStorage.setItem('rest_owner',JSON.stringify(o));

    } else {
      rest_owner.push(owner);
      localStorage.setItem('rest_owner',JSON.stringify(rest_owner));
    }

  }

}
