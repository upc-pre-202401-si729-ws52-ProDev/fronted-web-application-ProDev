import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, of, Subject, tap} from "rxjs";
import {environment} from "../../../../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class DonationApiService {

  baseUrl = environment.serverBasePath + 'donations';

  private donationCreatedSource = new Subject<void>();
  donationCreated$ = this.donationCreatedSource.asObservable();

  constructor(private http: HttpClient) { }

  getDonations(){
    return this.http.get<any>(this.baseUrl + '/company/' + 1);
  }

  createDonation(donation: any): Observable<any> {

    return this.http.post<any>(this.baseUrl, donation).pipe(
      tap(() => {
        this.donationCreatedSource.next();
        console.log('Donation created:', donation);
      }),
      catchError(error => {
        console.error('Error during donation creation:', error);
        return of(`Failed to create donation: ${error}`);
      })
    );
  }


}
