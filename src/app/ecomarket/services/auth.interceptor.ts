import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log('Intercepting request:', req);  // Log the original request

    const token = localStorage.getItem('authToken');

    if (token) {
      const cloned = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`)
      });

      console.log('Modified request:', cloned);  // Log the modified request

      return next.handle(cloned);
    } else {
      return next.handle(req);
    }
  }
}
