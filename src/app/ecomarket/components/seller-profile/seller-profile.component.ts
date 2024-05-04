import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import { FormsModule } from "@angular/forms";
import {NgForOf, NgOptimizedImage, NgStyle} from "@angular/common";
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
import {ProfileApiService} from "../../services/profile-services/profile-api.service";

@Component({
  selector: 'app-seller-profile',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgOptimizedImage, MatLabel, NgForOf, ToolbarContentComponent, MatButton, MatCard, MatCardAvatar, MatCardContent, MatCardHeader, MatCardImage, MatCardSmImage, MatCardSubtitle, MatCardTitle, MatCardTitleGroup, MatList, ToolbarCustomerComponent, RouterLink, NgStyle],
  templateUrl: './seller-profile.component.html',
  styleUrl: './seller-profile.component.css'
})
export class SellerProfileComponent implements OnInit{
  title = 'untitled';
  products: any[] = [];
  company:any;
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

  constructor(private profileApiService:ProfileApiService) {
  }

  ngOnInit() {
    this.profileApiService.getProfileCompany().subscribe(data => {
      this.company = data[0];
      console.log(this.company);
    });
  }

  guardar() {
    console.log('Perfil guardado: ', this.user);
  }
}
