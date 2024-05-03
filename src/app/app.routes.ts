import { Routes } from '@angular/router';
import { LoginPageComponent} from "./ecomarket/pages/login-page/login-page.component";
import { LayoutComponent } from "./ecomarket/pages/layout/layout.component";
import { SignupPageComponent } from "./ecomarket/pages/signup-page/signup-page.component";
import {
  DonationsPageComponent
} from "./ecomarket/pages/donation-management/components/donations-page/donations-page.component";
import {EditProfileComponent} from "./ecomarket/components/profile/edit-profile/edit-profile.component";
import { ProfileCustomerComponent } from "./ecomarket/pages/profile-customer/profile-customer.component";

export const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'login', component: LoginPageComponent
  },
  {
    path: 'signup', component: SignupPageComponent
  },

  {
    path: 'donations',
    component: DonationsPageComponent
  },

  {
    path: 'profile-customer',
    component: ProfileCustomerComponent
  },

  {
    path:'profile/edit-profile',
    component: EditProfileComponent
  }
];
