import {Component, OnChanges, OnInit} from '@angular/core';
import {LoginComponent} from "./component/login/login.component";
import {SocialUser} from "angularx-social-login";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnChanges {
  title = 'app';
  user: SocialUser | undefined;
  loggedIn?: boolean;

  constructor(private loginComponent: LoginComponent) {
  }

  ngOnInit(): void {
    this.user = this.loginComponent.user;
    this.loggedIn = this.loginComponent.loggedIn;
  }

  ngOnChanges(): void {
    this.user = this.loginComponent.user;
    this.loggedIn = this.loginComponent.loggedIn;
  }
}
