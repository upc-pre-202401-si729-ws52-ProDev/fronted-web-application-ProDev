import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Subject, tap} from "rxjs";
import {environment} from "../../../../../environments/environmente.development";

@Injectable({
  providedIn: 'root'
})
export class DonationApiService {

  baseUrl = environment.serverBasePath + 'donations';

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
