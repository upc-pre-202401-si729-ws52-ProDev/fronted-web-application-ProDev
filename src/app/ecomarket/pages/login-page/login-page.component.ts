import { Component, OnInit } from '@angular/core';
import {FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { Router } from "@angular/router";
import { LoginService } from "../../services/login/login.service";
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    FormsModule, MatSlideToggleModule, ReactiveFormsModule
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent implements OnInit{
  user: string = '';
  password: string = '';
  companyId: string = '';
  loginForm: FormGroup = new FormGroup({});

  // @ts-ignore
  rememberMe: false;
  constructor(private router: Router, private http: HttpClient) {
  }

ngOnInit() {
  const savedUsername = localStorage.getItem('username');
  const savedPassword = localStorage.getItem('password');

  if (savedUsername && savedPassword) {
    this.user = savedUsername;
    this.password = savedPassword;
    this.login();
  }
}

  onSubmit() {
    if (this.loginForm.valid) {
      // Aquí va tu lógica para manejar el envío del formulario
      console.log(this.loginForm.value);
    }
  }

  onSignup() {
    this.router.navigate(['/signup']);
  }

  login() {
    this.http.get('http://localhost:3000/users').subscribe((data: any) => {
      console.log(data);
      const currentUser = data.find((user: any) => user.user === this.user && user.password === this.password);
      const companyId = data.find((user: any) => user.companyId === this.companyId);

      if (currentUser) {
        localStorage.setItem('user', currentUser.user);
        localStorage.setItem('companyId', companyId.companyId);

        if (currentUser.type === 'customer') {
          this.router.navigate(['/profile-customer']);
        } else {
          this.router.navigate(['/seller-profile']);
          console.log(companyId);

        }
      } else {
        alert('Correo electrónico o contraseña incorrectos o no registrados');
      }
    });
      if (this.rememberMe) {
        localStorage.setItem('username', this.user);
        localStorage.setItem('password', this.password);
      }

  }
}
