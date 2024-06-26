import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {
  baseURL = environment.serverBasePath + 'products';

  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get<any>(this.baseURL);
  }

  createProduct(product: any){
    return this.http.post<any>(this.baseURL, product);
  }
}
