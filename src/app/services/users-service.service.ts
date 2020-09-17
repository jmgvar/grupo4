import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<any> {
    return this.http.get('https://reqres.in/api/users?page=2');
  }

  createUser(user : User): Observable<any> {
   return this.http.post('https://reqres.in/api/users', user);
  }

  updateUser(user : User): Observable<any> {

    return this.http.put('/api/users/2', user);

  }

  deleteUser(user : User): Observable<any> {
    return this.http.delete('/api/users/2');
  }

  getUser(): Observable<any> {
    return this.http.get('/api/users/2');
  }


}
