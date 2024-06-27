import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('authToken');

    // Check if the request is for sign in or sign up
    if (req.url.includes('authentication/sign-in') || req.url.includes('authentication/sign-up')) {
      // If it is, simply forward the request without modifying it
      return next.handle(req);
    } else {
      // If it's not, add the Authorization header
      const cloned = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`)
      });

      return next.handle(cloned);
    }
  }
}
