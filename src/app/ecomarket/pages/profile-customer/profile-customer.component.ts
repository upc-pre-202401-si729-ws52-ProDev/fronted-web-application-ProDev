import {Component, OnInit} from '@angular/core';
import { ToolbarCustomerComponent } from "../../../public/components/toolbar-customer/toolbar-customer.component";

import{ MatButtonModule } from  '@angular/material/button' ;
import { MatCardModule } from  '@angular/material/card' ;
import {MatListModule} from '@angular/material/list';
import {Router} from "@angular/router";
import {ProfileApiService} from "../../services/profile-services/profile-api.service";

@Component({
  selector: 'app-profile-customer',
  standalone: true,
  imports: [
    ToolbarCustomerComponent, MatButtonModule, MatCardModule, MatListModule
  ],
  templateUrl: './profile-customer.component.html',
  styleUrl: './profile-customer.component.css'
})



export class ProfileCustomerComponent implements OnInit{
  profileData:any;

  constructor(private router: Router,private profileApiService:ProfileApiService) { }



  ngOnInit(): void {
    this.profileApiService.getProfileCustomer().subscribe(data => {
      this.profileData = data[0]; // asumimos que solo hay un objeto en la respuesta
    });
  }

  navigateToEditProfileUser() {
    this.router.navigate(['profile/edit-user-profile']);
  }

}
