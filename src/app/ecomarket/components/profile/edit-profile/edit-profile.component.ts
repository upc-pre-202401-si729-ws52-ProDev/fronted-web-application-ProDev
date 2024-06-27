import {Component, OnInit} from '@angular/core';
import {MatCard, MatCardModule} from "@angular/material/card";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {ToolbarContentComponent} from "../../../../public/components/toolbar-content/toolbar-content.component";
import {ProfileApiService} from "../../../services/profile-services/profile-api.service";
import {Profile} from "../../../models/profile/profile";
import {RouterLink} from "@angular/router";
import {AuthserviceService} from "../../../services/authentication/authservice.service";

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [
    MatCardModule,
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    MatButton,
    MatLabel,
    ToolbarContentComponent,
    RouterLink
  ],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css'
})

export class EditProfileComponent implements OnInit {
  profileForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    ruc: new FormControl(''),
    phone: new FormControl(''),
    description: new FormControl(''),
  });

  profileImage!: string;
  constructor(private profileApiService:ProfileApiService, private authService: AuthserviceService) {
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
      });
      this.profileImage = profile.profileImage; // Asegúrate de que 'profileImage' es la propiedad correcta para la imagen de perfil
    });
  }

  onSubmit() {
    console.log(this.profileForm.value);
  }
}
