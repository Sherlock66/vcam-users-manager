import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//import { user } from 'classes/user';
import * as Routes from '../Routes';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*',
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  
 
  login(email:string, password:string): Promise<any>{
    let datas = {
      email:email,
      password: password,
    }
    return this.http.post<any>(Routes.LOGIN, datas).toPromise();

  }

  saveToken(token : any) {
    localStorage.setItem("token", JSON.stringify(token));
  }

  getToken() {
    return JSON.parse(localStorage.getItem('token'));
  }

  saveUser(user : any) {
    localStorage.setItem("user", JSON.stringify(user));
  }

  getUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

}