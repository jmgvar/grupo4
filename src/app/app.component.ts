import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  userLogged = false;
  title = 'grupo4';

  constructor(private route: Router, private authenticationService: AuthenticationService) {
    authenticationService.changeAuthenticationState.subscribe(userIsLogged => {
      if(!userIsLogged) {
        this.route.navigate(['login']);
      }
    });
  }

}