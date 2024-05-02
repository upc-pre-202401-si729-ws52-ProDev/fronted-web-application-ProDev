import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Subject, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DonationApiService {

  baseUrl = 'http://localhost:3000/donations';

  private donationCreatedSource = new Subject<void>();
  donationCreated$ = this.donationCreatedSource.asObservable();

  constructor(private http: HttpClient) { }

  getDonations(){
    return this.http.get<any>(this.baseUrl);
  }

  createDonation(donation: any){
    return this.http.post(this.baseUrl, donation).pipe(
      tap(() => {
        this.donationCreatedSource.next();
      })
    );
  }
}
