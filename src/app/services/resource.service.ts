import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http';
import { Resource } from 'src/app/models/resource'
import { Observable } from 'rxjs';
import { resourceUsage } from 'process';


@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  listResource: Array<Resource> = [];

  constructor(protected http: HttpClient) { }

  getResources(): Observable<any> {
    return this.http.get(environment.reqresApi + 'unknown');
  }

  getResource(): Observable<any> {
    return this.http.get(environment.reqresApi + 'unknown/2');
  }
}
