import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {CartService} from "../../services/shopping-cart-services/cart.service";

@Component({
  selector: 'app-checkout-page',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './checkout-page.component.html',
  styleUrl: './checkout-page.component.css'
})
export class CheckoutPageComponent implements OnInit{
  cartItems:any = []; // Aquí se almacenarán los productos del carrito
  selectedPaymentMethod = null; // Aquí se almacenará el método de pago seleccionado
  paymentMethods = ['Tarjeta de crédito', 'Paypal', 'Transferencia bancaria']; // Métodos de pago disponibles

  constructor(private cartService:CartService) {
  }

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
  }

  selectPaymentMethod(method:any) {
    this.selectedPaymentMethod = method;
  }

  pay() {
    if (this.selectedPaymentMethod) {
      // Aquí se realizaría el proceso de pago
      console.log('Pago realizado con: ', this.selectedPaymentMethod);
    } else {
      console.log('Por favor, seleccione un método de pago');
    }
  }
}
