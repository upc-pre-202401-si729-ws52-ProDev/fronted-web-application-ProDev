import { Routes } from '@angular/router';
import { LoginPageComponent} from "./ecomarket/pages/login-page/login-page.component";
import { LayoutComponent } from "./ecomarket/pages/layout/layout.component";
import { DashboardComponent } from "./ecomarket/pages/dashboard/dashboard.component";
import { SignupPageComponent } from "./ecomarket/pages/signup-page/signup-page.component";

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
  }

];
