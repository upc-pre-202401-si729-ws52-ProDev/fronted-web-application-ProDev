import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environmente.development";

@Injectable({
  providedIn: 'root'
})
export class ProfileApiService {

  baseUrl = environment.serverBasePath;

  constructor(private http:HttpClient) { }

  getProfileCompany(){
    return this.http.get(this.baseUrl + 'companies');
  }
}
