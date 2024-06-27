import { Component } from '@angular/core';
import {DonationFormComponent} from "../../../donation-management/components/donation-form/donation-form.component";
import {DonationListComponent} from "../../../donation-management/components/donation-list/donation-list.component";
import {ToolbarContentComponent} from "../../../../../public/components/toolbar-content/toolbar-content.component";
import {PurchasesListComponent} from "../purchases-list/purchases-list.component";

@Component({
  selector: 'app-purchases-page',
  standalone: true,
  imports: [
    DonationFormComponent,
    DonationListComponent,
    ToolbarContentComponent,
    PurchasesListComponent
  ],
  templateUrl: './purchases-page.component.html',
  styleUrl: './purchases-page.component.css'
})
export class PurchasesPageComponent {

}
