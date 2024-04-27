import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DonationListComponent} from "./donation-management/components/donation-list/donation-list.component";
import {DonationsPageComponent} from "./donation-management/components/donations-page/donations-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DonationListComponent, DonationsPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fronted-ecomarket';
}
