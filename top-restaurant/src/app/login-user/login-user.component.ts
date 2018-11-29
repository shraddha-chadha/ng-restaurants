import { Component, OnInit } from '@angular/core';
import {UserFilterService} from "../user-filter.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  public userId;
  public password;

  constructor(private filter:UserFilterService, private router: Router) { }

  ngOnInit() {
  }

  loginUser() {
    this.filter.setUserId(this.userId);
    this.router.navigateByUrl('/dashboard_user');
  }

}
