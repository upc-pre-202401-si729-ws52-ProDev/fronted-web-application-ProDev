import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import {Router} from "@angular/router";
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'app-signup-page',
  standalone: true,
  imports: [
    FormsModule, MatFormFieldModule, MatSelectModule
  ],
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.css'
})
export class SignupPageComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  selected = '';


  constructor(private router: Router, private http: HttpClient) {
  }


  onSubmit() {
    const newUser = {
      user: this.name,
      password: this.password,
      email: this.email,
      type: this.selected
    };

    this.http.post('https://my-json-server.typicode.com/upc-pre-202401-si729-ws52-ProDev/eco-market-api/users', newUser).subscribe(response => {
      console.log(response);
      this.router.navigate(['/login']);
    }, error => {
      console.log(error);
    });
  }
}
