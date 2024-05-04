import {Component, Injectable} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import { FormsModule } from "@angular/forms";
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {MatLabel} from "@angular/material/form-field";
import {ToolbarContentComponent} from "../../../public/components/toolbar-content/toolbar-content.component";
import {MatButton} from "@angular/material/button";
import {
  MatCard,
  MatCardAvatar,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardSmImage, MatCardSubtitle, MatCardTitle, MatCardTitleGroup
} from "@angular/material/card";
import {MatList} from "@angular/material/list";
import {ToolbarCustomerComponent} from "../../../public/components/toolbar-customer/toolbar-customer.component";

@Component({
  selector: 'app-seller-profile',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgOptimizedImage, MatLabel, NgForOf, ToolbarContentComponent, MatButton, MatCard, MatCardAvatar, MatCardContent, MatCardHeader, MatCardImage, MatCardSmImage, MatCardSubtitle, MatCardTitle, MatCardTitleGroup, MatList, ToolbarCustomerComponent, RouterLink],
  templateUrl: './seller-profile.component.html',
  styleUrl: './seller-profile.component.css'
})



export class SellerProfileComponent {
  title = 'untitled';
  products: any[] = [];
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
