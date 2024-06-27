import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {CartService} from "../../services/shopping-cart-services/cart.service";
import {ToolbarCustomerComponent} from "../../../public/components/toolbar-customer/toolbar-customer.component";
import {MatCard, MatCardModule} from "@angular/material/card";
import {ActivatedRoute} from "@angular/router";

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
  cartId:any = 0;

  constructor(private cartService:CartService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.cartId = this.route.snapshot.paramMap.get('cartId');
    this.cartService.getCartItems(this.cartId).subscribe(response => {
      this.cartItems = response;
    });
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
