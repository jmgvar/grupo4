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

  constructor(private authenticationService: AuthenticationService, private router: Router, private localStorageService: LocalStorageServiceService) { }

  ngOnInit(): void {
  }

  onSubmit(admin: Admin): void {
    console.log("admin: ", admin);

    this.authenticationService
    .login(admin)
    .toPromise()
    .then(data => {
      console.log("Usuario existe ", data);
      this.localStorageService.setUserLogged('true');
      this.router.navigate(['home']);
      //alert(data);
    })
    .catch(error => {
      alert("El usuario no existe, debe registrarse primero !");
    });

  }

}
