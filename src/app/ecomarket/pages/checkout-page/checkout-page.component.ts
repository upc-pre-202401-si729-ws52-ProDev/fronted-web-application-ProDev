import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {CartService} from "../../services/shopping-cart-services/cart.service";
import {ToolbarCustomerComponent} from "../../../public/components/toolbar-customer/toolbar-customer.component";
import {MatCard, MatCardModule} from "@angular/material/card";

@Component({
  selector: 'app-checkout-page',
  standalone: true,
  imports: [
    NgForOf,
    ToolbarCustomerComponent,
    MatCardModule
  ],
  templateUrl: './checkout-page.component.html',
  styleUrl: './checkout-page.component.css'
})
export class CheckoutPageComponent implements OnInit{
  cartItems:any = []; // Aquí se almacenarán los productos del carrito
  selectedPaymentMethod = null; // Aquí se almacenará el método de pago seleccionado
  paymentMethods = ['Tarjeta de crédito', 'Paypal', 'Transferencia bancaria']; // Métodos de pago disponibles
  total:any = 0; // Aquí se almacenará el total de la compra


  constructor(private cartService:CartService) {
  }

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
    //TODO LLAMAR AL SHOPPING CART PARA OBTENER LOS CART ITEMS Y TOTAL
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
