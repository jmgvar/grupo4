import { Injectable, Output, EventEmitter } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Admin } from '../models/admin';
import { LoginResponse } from '../models/response/login-response';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  @Output()
  changeAuthenticationState: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private httpClient: HttpClient) { }

  login(admin: Admin) : Observable<LoginResponse> {

    const body = {
      email: admin.email,
      password: admin.password
    } 

    return this.httpClient
    .post('https://reqres.in/api/login', body)
    .pipe(map((response: any) => {
      this.changeAuthenticationState.emit(true);
      return new LoginResponse('',response.token);
    }), 
    catchError(error => {
      return throwError(error.error);
    }));

  }

  logout () : void {
    this.changeAuthenticationState.emit(false);
  }
}