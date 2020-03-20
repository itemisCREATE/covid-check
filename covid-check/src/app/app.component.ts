import { Component } from '@angular/core';
import { AuthService } from './auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'covid-check';

  constructor(private authService: AuthService) {
  }

  isLoggedIn(): boolean {
   return this.authService.isLoggedIn();
  }

}
