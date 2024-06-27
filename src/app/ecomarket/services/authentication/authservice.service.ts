import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor() { }

  getCurrentUser(): string | null{
    return localStorage.getItem('user');
  }

  getCurrentCompanyId(): string | null {
    return localStorage.getItem('companyId');
  }
}
