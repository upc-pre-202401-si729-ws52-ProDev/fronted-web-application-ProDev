import { Component } from '@angular/core';
import {DonationListComponent} from "../donation-list/donation-list.component";
import {DonationFormComponent} from "../donation-form/donation-form.component";

@Component({
  selector: 'app-donations-page',
  standalone: true,
  imports: [
    DonationListComponent,
    DonationFormComponent
  ],
  templateUrl: './donations-page.component.html',
  styleUrl: './donations-page.component.css'
})
export class DonationsPageComponent {

}
