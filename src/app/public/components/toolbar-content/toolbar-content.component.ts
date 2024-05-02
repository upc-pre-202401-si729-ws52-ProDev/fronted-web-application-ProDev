import { Component } from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatIconButton} from "@angular/material/button";

@Component({
  selector: 'app-toolbar-content',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIcon,
    MatIconButton,
    MatButton
  ],
  templateUrl: './toolbar-content.component.html',
  styleUrl: './toolbar-content.component.css'
})
export class ToolbarContentComponent {

}