import {Component, Injectable, OnInit} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
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
import {ProfileApiService} from "../../services/profile-services/profile-api.service";
import {AuthserviceService} from "../../services/authentication/authservice.service";


@Component({
  selector: 'app-seller-profile',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgOptimizedImage, MatLabel, NgForOf, ToolbarContentComponent, MatButton, MatCard, MatCardAvatar, MatCardContent, MatCardHeader, MatCardImage, MatCardSmImage, MatCardSubtitle, MatCardTitle, MatCardTitleGroup, MatList, ToolbarCustomerComponent, RouterLink, MatIcon, ReactiveFormsModule],
  templateUrl: './seller-profile.component.html',
  styleUrl: './seller-profile.component.css'
})



export class SellerProfileComponent implements OnInit{
  title = 'untitled';
  profileForm = new FormGroup({
    name: new FormControl(''),
    ruc: new FormControl(''),
    aboutdescription: new FormControl(''),
    user: new FormControl('')
  });

  constructor(private formBuilder: FormBuilder, private authService: AuthserviceService, private profileApiService: ProfileApiService) {

  }

  ngOnInit() {
    const user = this.authService.getCurrentUser();
    this.profileApiService.getProfileCompany(user).subscribe((response: any) => {
      const profile = response[0];
      this.profileForm.setValue({
        name: profile.name,
        ruc: profile.ruc,
        aboutdescription: profile.description,
        user: profile.user
      });
    });


  }

}
