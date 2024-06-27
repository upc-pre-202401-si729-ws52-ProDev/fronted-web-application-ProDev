import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment.prod";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CustomerApiService {

  baseUrl = environment.serverBasePath;

  constructor(private http:HttpClient) { }

  updateCustomer(id: any, customerData: any) {
    return this.http.put<any>(this.baseUrl + 'customers/', id, customerData);
  }

  getCustomer(id: any) {
    return this.http.get<any>(this.baseUrl + 'customers/' + id);
  }

  getUserById(id: any) {
    return this.http.get<any>(this.baseUrl + 'users/' + id);
  }
}
