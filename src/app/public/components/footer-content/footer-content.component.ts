import { Component } from '@angular/core';
import {MatButton, MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-footer-content',
  standalone: true,
  imports: [
    MatButtonModule
  ],
  templateUrl: './footer-content.component.html',
  styleUrl: './footer-content.component.css'
})
export class FooterContentComponent {

}
