import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class CheckoutApiService {

  baseUrl = environment.serverBasePath;
  constructor(private http:HttpClient) { }

  postPayment(paymentData: { amount: any, description: any, method: any, customerId: any }) {
    return this.http.post(this.baseUrl + 'payments', paymentData);
  }

  postPurchase(date: any, totalAmount: any, status: any, paymentMethod: any, customerId: any, paymentId: any) {
    const data = {
      date: date,
      totalAmount: totalAmount,
      status: status,
      paymentMethod: paymentMethod,
      customerId: customerId,
      paymentId: paymentId
    };

    return this.http.post(this.baseUrl + 'purchases', data);
  }
}
