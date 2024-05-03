import { Component } from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-purchase-confirmation',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './purchase-confirmation.component.html',
  styleUrl: './purchase-confirmation.component.css'
})
export class PurchaseConfirmationComponent {
  mostrarMensaje: boolean = true;

  ocultarMensaje() {
    this.mostrarMensaje = false;
  }
}

