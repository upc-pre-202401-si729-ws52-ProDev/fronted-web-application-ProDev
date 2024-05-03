import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class ProfileApiService {

  baseUrl = environment.serverBasePath;

  constructor(private http:HttpClient) { }

  getProfileCompany(){
    return this.http.get(this.baseUrl + 'companies');
  }

  getProfileCustomer(){
    return this.http.get<any>(this.baseUrl + 'users?id=642d');
  }
}
