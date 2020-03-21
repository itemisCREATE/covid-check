import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth-service.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

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
