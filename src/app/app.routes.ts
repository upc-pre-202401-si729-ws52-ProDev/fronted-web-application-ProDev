import { Routes } from '@angular/router';
import {DonationsPageComponent} from "./donation-management/components/donations-page/donations-page.component";

export const routes: Routes = [
  {
    path: 'donations',
    component: DonationsPageComponent
  }
];
