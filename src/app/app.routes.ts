import { Routes } from '@angular/router';
import { LoginPageComponent} from "./ecomarket/pages/login-page/login-page.component";
import { LayoutComponent } from "./ecomarket/pages/layout/layout.component";
import { DashboardComponent } from "./ecomarket/pages/dashboard/dashboard.component";
import { SignupPageComponent } from "./ecomarket/pages/signup-page/signup-page.component";
import {DonationsPageComponent} from "./donation-management/components/donations-page/donations-page.component";
import {EditProfileComponent} from "./ecomarket/components/profile/edit-profile/edit-profile.component";

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
    path: 'layout', component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      }
    ]
  },
  {
    path: 'donations',
    component: DonationsPageComponent
  },

  {
    path:'profile/edit-profile',
    component: EditProfileComponent
  }

];
