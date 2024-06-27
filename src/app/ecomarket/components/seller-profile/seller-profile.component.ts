import {Component, Injectable, OnInit} from '@angular/core';
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
import {MatIcon} from "@angular/material/icon";
import {AuthserviceService} from "../../services/authentication/authservice.service";
import {ProfileApiService} from "../../services/profile-services/profile-api.service";
import {ProfileApiService} from "../../services/profile-services/profile-api.service";

@Component({
  selector: 'app-seller-profile',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgOptimizedImage, MatLabel, NgForOf, ToolbarContentComponent, MatButton, MatCard, MatCardAvatar, MatCardContent, MatCardHeader, MatCardImage, MatCardSmImage, MatCardSubtitle, MatCardTitle, MatCardTitleGroup, MatList, ToolbarCustomerComponent, RouterLink],
  templateUrl: './seller-profile.component.html',
  styleUrl: './seller-profile.component.css'
})



export class SellerProfileComponent {
  title = 'untitled';
  profileForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    ruc: new FormControl(''),
    phone: new FormControl(''),
    description: new FormControl(''),
    user: new FormControl('')
  });

  profileImage!: string;
  constructor(private formBuilder: FormBuilder, private authService: AuthserviceService, private profileApiService: ProfileApiService) {

  }

  ngOnInit() {
    const user = this.authService.getCurrentUser();
    this.profileApiService.getProfileCompany(user).subscribe((response: any) => {
      const profile = response[0];
      this.profileForm.setValue({
        name: profile.name,
        email: profile.email,
        ruc: profile.ruc,
        phone: profile.phone,
        description: profile.description,
        user: profile.user
      });
      this.profileImage = profile.profileImage; // Asegúrate de que 'profileImage' es la propiedad correcta para la imagen de perfil
    });

  guardar() {
    console.log('Perfil guardado: ', this.user);
  }
}
