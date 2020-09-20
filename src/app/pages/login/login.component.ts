import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Admin } from '../../models/admin';

import { AuthenticationService } from '../../services/authentication.service';
import { LocalStorageServiceService } from '../../services/local-storage-service.service';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage = '';

  constructor(private authenticationService: AuthenticationService, private route: Router, private localStorageService: LocalStorageServiceService) { }

  ngOnInit(): void {
    if(this.localStorageService.isUserLogged()) {
      this.route.navigate(['home']);
    }
  }

  onSubmit(admin: Admin): void {

    this.authenticationService
    .login(admin)
    .toPromise()
    .then(data => {
      this.errorMessage = '';
      this.localStorageService.setUserLogged('true',admin.email);
      this.route.navigate(['home']);
    })
    .catch(error => {
      this.errorMessage = error.error;
    });

  }

}
