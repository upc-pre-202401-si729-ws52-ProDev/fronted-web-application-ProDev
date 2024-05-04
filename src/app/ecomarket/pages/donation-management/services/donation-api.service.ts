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
    return this.http.get<any>(this.baseUrl);
  }

  createDonation(donation: any): Observable<any> {
    console.log('Simulating a post request:', donation);

    // Simulamos una respuesta como si fuera exitosa
    return of(donation).pipe(
      tap(() => {
        this.donationCreatedSource.next();
        console.log('Simulated donation creation:', donation);
      }),
      catchError(error => {
        console.error('Error during donation simulation:', error);
        return of(`Failed to create donation: ${error}`);
      })
    );
  }


}
