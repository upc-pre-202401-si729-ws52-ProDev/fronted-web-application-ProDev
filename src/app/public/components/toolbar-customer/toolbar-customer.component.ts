import { Component } from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {AuthserviceService} from "../../../ecomarket/services/authentication/authservice.service";
import {MatButton} from "@angular/material/button";
import {MatToolbar} from "@angular/material/toolbar";

class AuthService {
}

@Component({
  selector: 'app-toolbar-customer',
  templateUrl: './toolbar-customer.component.html',
  standalone: true,
  imports: [
    MatButton,
    RouterLink,
    MatToolbar
  ],
  styleUrls: ['./toolbar-customer.component.css']
})
export class ToolbarCustomerComponent {
  userId: any;

  constructor(private route: Router, private authService: AuthserviceService) {
    this.userId = this.authService.getCurrentUser();
  }

  onLogout() {
    this.route.navigate(['/login']);
  }
}
