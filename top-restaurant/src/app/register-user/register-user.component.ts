import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  public firstName;
  public lastName;
  public userId;
  public password;
  constructor() { }

  ngOnInit() {

  }

  registerUser() {

    let user = {
      firstName: this.firstName,
      lastName: this.lastName,
      userId: this.userId,
      password:this.password
    };

    let users = JSON.parse(localStorage.getItem('users'));

    if(users == null) {
      let u = [];
      u.push(user);
      localStorage.setItem('users',JSON.stringify(u));

    } else {
      users.push(user);
      localStorage.setItem('users',JSON.stringify(users));
    }

  }
}
