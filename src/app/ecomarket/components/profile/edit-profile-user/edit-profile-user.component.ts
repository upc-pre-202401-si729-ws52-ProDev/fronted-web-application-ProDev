import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from "@angular/forms";
import {NgOptimizedImage} from "@angular/common";
import {MatLabel} from "@angular/material/form-field";
import {ToolbarContentComponent} from "../../../../public/components/toolbar-content/toolbar-content.component";
import {ToolbarCustomerComponent} from "../../../../public/components/toolbar-customer/toolbar-customer.component";

@Component({
  selector: 'app-edit-profile-user',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgOptimizedImage, MatLabel, ToolbarContentComponent, ToolbarCustomerComponent],
  templateUrl: './edit-profile-user.component.html',
  styleUrl: './edit-profile-user.component.css'
})
export class EditProfileUserComponent {
  title = 'untitled';
  user = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    region: '',
    direction: '',
    genre: '',
    postcode: ''
  };

  guardar() {
    console.log('Perfil guardado: ', this.user);
  }
}
