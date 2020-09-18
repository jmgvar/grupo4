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

    console.log('Llamada al servicio que obtienen los usuarios');
    return this.http.get('https://reqres.in/api/users?page=2');
  }

  createUser(user : User): Observable<any> {
    console.log('Llamada al servicio que crea el usuario');
   return this.http.post('https://reqres.in/api/users', user);
  }

  updateUser(user : User): Observable<any> {
    console.log('Llamada al servicio que modifica el usuario');
    return this.http.put('https://reqres.in/api/users/2', user);

  }

  deleteUser(user : User): Observable<any> {
    console.log('Llamada al servicio que borra el usuario');
    return this.http.delete('https://reqres.in/api/users/2');
  }

  getUser(): Observable<any> {
    console.log('Llamada al servicio que obtiene el usuario');
    return this.http.get('https://reqres.in/api/users/2');
  }


}
