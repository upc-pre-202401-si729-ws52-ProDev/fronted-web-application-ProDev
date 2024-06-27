import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment.prod";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PurchaseApiService {

  baseUrl = environment.serverBasePath;

  constructor(private http:HttpClient) {
  }

  getPurchases(customerId: any){
    return this.http.get<any>(this.baseUrl + 'purchases/' + customerId);
  }
}
