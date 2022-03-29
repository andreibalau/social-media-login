import {Component, OnChanges, OnInit} from '@angular/core';
import {FacebookLoginProvider, SocialAuthService, SocialUser} from "angularx-social-login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnChanges {
  user: SocialUser | undefined;
  loggedIn?: boolean;

  constructor(private authService: SocialAuthService) { }

  ngOnInit(): void {
    this.getAuthState();
  }

  ngOnChanges(): void {
    this.getAuthState();
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }

  refreshToken(): void {
    this.authService.refreshAuthToken(FacebookLoginProvider.PROVIDER_ID);
  }

  getAuthState() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }

}
