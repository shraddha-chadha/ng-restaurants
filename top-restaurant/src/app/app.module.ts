import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { LoginOwnerComponent } from './login-owner/login-owner.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './home/home.component';
import { RegisterOwnerComponent } from './register-owner/register-owner.component';
import { DashboardUserComponent } from './dashboard-user/dashboard-user.component';
import { RestaurantCardComponent } from './restaurant-card/restaurant-card.component';
import {TopRestaurantService} from "./top-restaurant.service";

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'register_user',
    component: RegisterUserComponent
  },
  {
    path: 'register_owner',
    component: RegisterOwnerComponent
  },
  {
    path: 'dashboard_user',
    component: DashboardUserComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginUserComponent,
    LoginOwnerComponent,
    RegisterUserComponent,
    HomeComponent,
    RegisterOwnerComponent,
    DashboardUserComponent,
    RestaurantCardComponent

  ],
  imports: [
    BrowserModule,HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [TopRestaurantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
