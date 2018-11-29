import { Component, OnInit } from '@angular/core';
import { UserFilterService} from "../user-filter.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-owner',
  templateUrl: './login-owner.component.html',
  styleUrls: ['./login-owner.component.css']
})
export class LoginOwnerComponent implements OnInit {

  business_owner;
  password_owner;

  constructor(private filter:UserFilterService, private router: Router) { }

  ngOnInit() {
  }

  loginOwner() {
    this.filter.setBusinessId(this.business_owner);
    this.router.navigateByUrl('/dashboard_owner');
  }


}
