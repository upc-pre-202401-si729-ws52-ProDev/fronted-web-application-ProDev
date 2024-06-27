import { Component, OnInit, OnChanges } from '@angular/core';
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
export class ProfileCustomerComponent implements OnInit, OnChanges {
  profileData: Profile | null = null;

  constructor(private customerApiService: CustomerApiService, private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.loadProfileData();
  }

  ngOnChanges(): void {
    this.loadProfileData();
  }

  loadProfileData(): void {
    const userId = this.route.snapshot.paramMap.get('id');
    if (userId) {
      this.customerApiService.getUserById(userId).pipe(
        switchMap(userData => {
          console.log('userData:', userData); // Agregar console.log aquí
          return this.customerApiService.getCustomer(userData.customerId);
        }),
        map(customerArray => {
          console.log('customerArray:', customerArray); // Agregar console.log aquí
          return customerArray[0];
        }) // Accedemos al primer objeto del array
      ).subscribe(data => {
        this.profileData = data;
        console.log('data:', data); // Línea 42
      }, error => {
        console.error('Error:', error);
      });
    }
  }

  navigateToEditProfileUser() {
      this.router.navigate(['profile/edit-user-profile', this.route.snapshot.paramMap.get('id')]);
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
}undefined
