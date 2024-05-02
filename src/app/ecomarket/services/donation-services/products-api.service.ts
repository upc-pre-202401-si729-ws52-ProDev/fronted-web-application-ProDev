import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environmente.development";

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {
  baseURL = environment.serverBasePath + 'products';

  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get<any>(this.baseURL);
  }
}
