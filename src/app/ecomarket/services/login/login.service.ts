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
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(this.baseUrl + 'authentication/sign-in', { username: user, password: password }, { headers: headers });
  }

  getUserRole(userId:any){
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(this.baseUrl + 'users/' + userId, { headers: headers });
  }

}
