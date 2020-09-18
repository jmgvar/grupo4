import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageServiceService {

  constructor() { }

  isUserLogged () : boolean {
    return localStorage.getItem('userLogged') === 'true';
  }

  setUserLogged (userLogged: string ) {
    localStorage.setItem('userLogged', userLogged);
  }
}
