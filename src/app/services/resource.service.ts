import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  constructor(protected http: HttpClient) { }

  getResources(): Observable<any> {
    return this.http.get(environment.reqresApi + 'unknown');
  }

  getResource(): Observable<any> {
    return this.http.get(environment.reqresApi + 'unknown/2');
  }
}
