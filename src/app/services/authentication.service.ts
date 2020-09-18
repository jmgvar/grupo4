import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Admin } from '../models/admin';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) { }

  login(admin: Admin) : Observable<any> {
    
    /**
     * for success
     * "email": "eve.holt@reqres.in",
        "password": "cityslicka"
     */

    const body = {
      email: admin.email,
      password: admin.password
    } 

    return this.httpClient.post('https://reqres.in/api/login', body);
  }

}
