import { Component } from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatIconButton} from "@angular/material/button";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-toolbar-content',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIcon,
    MatIconButton,
    MatButton,
    RouterLink
  ],
  templateUrl: './toolbar-content.component.html',
  styleUrl: './toolbar-content.component.css'
})
export class ToolbarContentComponent {

  constructor(private route: Router) {
  }

  onLogout() {
    this.route.navigate(['/login']);
  }
}
