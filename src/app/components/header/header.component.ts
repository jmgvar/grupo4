import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { LocalStorageServiceService } from '../../services/local-storage-service.service';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userLogged = false;

  constructor(private localStorageService: LocalStorageServiceService, private authenticationService: AuthenticationService, private route: Router) { }

  ngOnInit(): void {
    if (this.localStorageService.isUserLogged()) { 
      this.userLogged = true; 
    } 
    
    this.authenticationService
      .changeAuthenticationState
      .subscribe(userIsLogged => {
        this.userLogged = userIsLogged;
      });
    
  }

  logout(): void {
    this.localStorageService.setUserLogged('false','');
    this.userLogged = false;
    this.authenticationService.logout();
  }

}
