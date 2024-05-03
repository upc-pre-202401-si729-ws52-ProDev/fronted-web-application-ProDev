import { Component } from '@angular/core';
import { ToolbarCustomerComponent } from "../../../public/components/toolbar-customer/toolbar-customer.component";

import{ MatButtonModule } from  '@angular/material/button' ;
import { MatCardModule } from  '@angular/material/card' ;
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-profile-customer',
  standalone: true,
  imports: [
    ToolbarCustomerComponent, MatButtonModule, MatCardModule, MatListModule
  ],
  templateUrl: './profile-customer.component.html',
  styleUrl: './profile-customer.component.css'
})
export class ProfileCustomerComponent {
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

}
