import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as Routes from '../Routes';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http: HttpClient) { }

  createRole(role: any) {
    return this.http.post<any>(Routes.ROLES, role).toPromise();
  }

}
