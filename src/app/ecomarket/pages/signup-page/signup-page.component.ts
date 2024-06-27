import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import {Router} from "@angular/router";
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {LoginService} from "../../services/login/login.service";
import {NgIf} from "@angular/common";


@Component({
  selector: 'app-signup-page',
  standalone: true,
  imports: [
    FormsModule, MatFormFieldModule, MatSelectModule, NgIf
  ],
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.css'
})
export class SignupPageComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  selected = '';
  ruc = '';
  aboutDescription = '';


  constructor(private router: Router, private http: HttpClient,
              private loginService: LoginService) {
  }


  onSubmit() {
    this.loginService.signUp(this.name, this.password, this.email, this.selected, this.ruc, this.aboutDescription).subscribe(response => {
      console.log(response);
      this.router.navigate(['/login']);
    }, error => {
      console.log(error);
    });
  }
}
