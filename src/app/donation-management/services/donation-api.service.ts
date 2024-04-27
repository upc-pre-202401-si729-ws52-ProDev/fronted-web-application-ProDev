import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DonationApiService {

  baseUrl = 'assets/data/donations.json';

  constructor(private http: HttpClient) { }

  getDonations(){
    return this.http.get<any>(this.baseUrl);
  }

}
