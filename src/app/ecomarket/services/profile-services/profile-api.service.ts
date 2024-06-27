import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment.prod";
import {error} from "@angular/compiler-cli/src/transformers/util";
import { Product } from "../../models/product/product.model";
import {map, Observable} from "rxjs";
import {Profile} from "../../models/profile/profile";
import {FormControl, ɵFormGroupValue, ɵTypedOrUntyped} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class ProfileApiService {

  baseUrl = environment.serverBasePath;

  constructor(private http:HttpClient) { }

  getProfileCompany(user: string | null): Observable<Profile> {
    return this.http.get<any>(`${this.baseUrl + 'companies'}?user=${user}`);
  }

  getProfileCustomer(){
    return this.http.get<any>(this.baseUrl + 'users?id=642d');
  }

  getProducts(user: string | null){
    return this.http.get<any>(`${this.baseUrl + 'products/user/'}${user}`);
  }

  addProduct(product: Product) {
    return this.http.post<Product>(this.baseUrl + 'products', product);
  }

  updateCompanyProfile(Profile: string | null, updatedData: ɵTypedOrUntyped<{
    ruc: FormControl<string | null>;
    name: FormControl<string | null>;
    description: FormControl<string | null>
  }, ɵFormGroupValue<{
    ruc: FormControl<string | null>;
    name: FormControl<string | null>;
    description: FormControl<string | null>
  }>, any>) {
    return this.http.put(`${this.baseUrl}/companies/${Profile}`, updatedData);
  }

}
