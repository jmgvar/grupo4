import { Component, OnInit } from '@angular/core';

import { Admin } from '../../models/admin';

import { AuthenticationService } from '../../services/authentication.service';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

  onSubmit(admin: Admin): void {
    console.log("admin: ", admin);

    this.authenticationService
    .login(admin)
    .toPromise()
    .then(data => {
      console.log("Usuario existe ", data);
      alert(data);
    })
    .catch(error => {
      alert("El usuario no existe, debe registrarse primero !");
    });

  }

}
