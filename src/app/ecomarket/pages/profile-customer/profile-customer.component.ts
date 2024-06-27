import { Component, OnInit } from '@angular/core';
import { ToolbarCustomerComponent } from "../../../public/components/toolbar-customer/toolbar-customer.component";
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { ActivatedRoute, Router } from "@angular/router";
import { CustomerApiService } from "../../services/customer-services/customer-api.service";
import {EMPTY, map, Observable, switchMap} from "rxjs";
import { AsyncPipe } from "@angular/common";

@Component({
  selector: 'app-profile-customer',
  standalone: true,
  imports: [
    ToolbarCustomerComponent, MatButtonModule, MatCardModule, MatListModule, AsyncPipe
  ],
  templateUrl: './profile-customer.component.html',
  styleUrls: ['./profile-customer.component.css']
})
export class ProfileCustomerComponent implements OnInit {
  profileData: Profile | null = null;

  constructor(private customerApiService: CustomerApiService, private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.customerApiService.getUserById(id).pipe(
        switchMap(userData => this.customerApiService.getCustomer(userData.customerId)),
        map(customerArray => customerArray[0]) // Accedemos al primer objeto del array
      ).subscribe(data => {
        this.profileData = data;
        console.log(data);
      });
    }
  }

  navigateToEditProfileUser() {
    if (this.profileData) {
      this.router.navigate(['profile/edit-user-profile', this.profileData.id]);
    }
  }
}

interface Profile {
  id: number;
  loyaltyPoi: number;
  name: string;
  lastName: string;
  age: number;
  address: string;
  email: string;
  phone: string;
}
