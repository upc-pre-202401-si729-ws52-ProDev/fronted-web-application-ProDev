import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ReviewApiService {
  baseURL = environment.serverBasePath + 'reviews';

  constructor(private http: HttpClient) { }

  getReviews() {
    return this.http.get<any>(this.baseURL);
  }

  createReview(review: any) {
    return this.http.post<any>(this.baseURL, review);
  }
}
