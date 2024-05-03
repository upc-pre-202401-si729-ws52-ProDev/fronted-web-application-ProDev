import { Component } from '@angular/core';
import {DonationListComponent} from "../donation-list/donation-list.component";
import {DonationFormComponent} from "../donation-form/donation-form.component";
import {ToolbarContentComponent} from "../../../public/components/toolbar-content/toolbar-content.component";



@Component({
  selector: 'app-donations-page',
  standalone: true,
    imports: [
        DonationListComponent,
        DonationFormComponent,
        ToolbarContentComponent
    ],
  templateUrl: './donations-page.component.html',
  styleUrl: './donations-page.component.css'
})
export class DonationsPageComponent {

}
