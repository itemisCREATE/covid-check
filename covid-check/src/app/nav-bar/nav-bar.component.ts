import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  name: string;

  constructor(public authService: AuthService) {
  }

  isLoggedIn(): boolean {
   return this.authService.isLoggedIn();
  }

  loginWithGoogle() {
    this.authService.signInWithGoogle();
    this.name = this.authService.userDetails.displayName;
  }

  logout() {
    this.authService.logout();
  }


}
