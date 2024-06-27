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
  loginForm: FormGroup = new FormGroup({});

  // @ts-ignore
  rememberMe: false;
  constructor(private router: Router, private http: HttpClient,
              private loginService: LoginService) {
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
    this.loginService.signIn(this.user, this.password).subscribe((data: any) => {
      if (data) {
        // Guarda el token en el almacenamiento local
        localStorage.setItem('authToken', data.token);
        console.log(data);

        // Obtiene el rol del usuario
        this.loginService.getUserRole(data.id).subscribe((userData: any) => {
          // Navega a la página de perfil correspondiente
          if (userData.roles.includes('ROLE_COMPANY')) {
            this.router.navigate(['/seller-profile']);
          } else if (userData.roles.includes('ROLE_CUSTOMER')) {
            this.router.navigate(['/profile-customer',data.id]);
          }
        });
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
