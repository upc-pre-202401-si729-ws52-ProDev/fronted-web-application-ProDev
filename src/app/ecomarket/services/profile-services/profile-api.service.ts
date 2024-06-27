import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment.prod";
import {error} from "@angular/compiler-cli/src/transformers/util";
import { Product } from "../../models/product/product.model";
import {map, Observable} from "rxjs";
import {Profile} from "../../models/profile/profile";

@Injectable({
  providedIn: 'root'
})
export class ProfileApiService {

  baseUrl = environment.serverBasePath;

  constructor(private http:HttpClient) { }

  getProfileCompany(user: string | null): Observable<Profile> {
    return this.http.get<Profile[]>(`${this.baseUrl + 'companies'}?user=${user}`).pipe(
      map(response => response[0])
    );
  }

  getProfileCustomer(){
    return this.http.get<any>(this.baseUrl + 'users?id=642d');
  }

  getProducts(user: string | null){
    return this.http.get<any>(`${this.baseUrl + 'products'}?user=${user}`);
  }

  addProduct(product: Product) {
    return this.http.post<Product>(this.baseUrl + 'products', product);
  }

}
