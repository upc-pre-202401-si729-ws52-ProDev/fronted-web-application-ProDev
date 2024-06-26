import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatToolbar} from "@angular/material/toolbar";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-toolbar-customer',
  standalone: true,
  imports: [
    MatButton,
    MatToolbar,
    RouterLink
  ],
  templateUrl: './toolbar-customer.component.html',
  styleUrl: './toolbar-customer.component.css'
})
export class ToolbarCustomerComponent {

  constructor(private route: Router) {
  }

  onLogout() {
    this.route.navigate(['/login']);
  }
}
