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

    this.http.get('http://localhost:3000/users').subscribe((data: any) => {
      console.log(data);
      if (data) {
        const userExists = data.some((user: {
          user: string,
          password: string
        }) => user.user === this.user && user.password === this.password);
        if (userExists) {
          alert('Inicio de sesión exitoso');
          // Redirigir al usuario al dashboard o a la página principal
          this.router.navigate(['/dashboard']);
        } else {
          alert('Correo electrónico o contraseña incorrectos o no registrados');
        }
      } else {
        console.log('Data or data.users is undefined');
      }
    });
  }
}
