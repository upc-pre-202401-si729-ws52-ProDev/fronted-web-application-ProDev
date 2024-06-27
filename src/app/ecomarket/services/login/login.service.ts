import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from "../../../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl = environment.serverBasePath;

  constructor(private http: HttpClient) { }

  signIn(user: string, password: string) {
    return this.http.post(this.baseUrl + 'authentication/sign-in', { username: user, password: password });
  }

  getUserRole(userId:any){
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(this.baseUrl + 'users/' + userId, { headers: headers });
  }

  signUp(user: string, password: string, email: string, type: string,ruc:any, aboutDescription:any) {
    const body = {
      username: user,
      password: password,
      roles: [type === 'Company' ? 'ROLE_COMPANY' : 'ROLE_CUSTOMER'],
      ruc: ruc,
      aboutDescription: aboutDescription,
      address: 'default',
      loyaltyPoi: 0,
      email: email,
      name: 'default',
      lastName: 'default',
      phone: 'default',
      age: 0
    };
      console.log(type);
      console.log(body);

    return this.http.post(this.baseUrl + 'authentication/sign-up', body);
  }
}
