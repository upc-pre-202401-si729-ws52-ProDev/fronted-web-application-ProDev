import { Routes } from '@angular/router';
import {
  DonationsPageComponent
} from "./ecomarket/pages/donation-management/components/donations-page/donations-page.component";
import {EditProfileComponent} from "./ecomarket/components/profile/edit-profile/edit-profile.component";

export const routes: Routes = [
  {
    path: 'donations',
    component: DonationsPageComponent
  },

  {
    path:'profile/edit-profile',
    component: EditProfileComponent
  }
];
