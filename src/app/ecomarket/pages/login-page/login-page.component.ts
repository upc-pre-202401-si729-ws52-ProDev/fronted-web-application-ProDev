import { Component } from '@angular/core';
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
export class LoginPageComponent {
  user: string = '';
  password: string = '';
  loginForm: FormGroup = new FormGroup({});

  // @ts-ignore
  constructor(private router: Router, private http: HttpClient) {
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
    this.http.get('https://my-json-server.typicode.com/upc-pre-202401-si729-ws52-ProDev/eco-market-api/users').subscribe((data: any) => {
      console.log(data);
      const currentUser = data.find((user: any) => user.user === this.user && user.password === this.password);
      if (currentUser) {
        if (currentUser.type === 'customer') {
          this.router.navigate(['/profile-customer']);
        } else {
          this.router.navigate(['/seller-profile']);
        }
      } else {
        alert('Correo electrónico o contraseña incorrectos o no registrados');
      }
    });
  }
}
