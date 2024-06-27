import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {CartService} from "../../services/shopping-cart-services/cart.service";
import {ToolbarCustomerComponent} from "../../../public/components/toolbar-customer/toolbar-customer.component";
import {MatCard, MatCardModule} from "@angular/material/card";
import {ActivatedRoute, Router} from "@angular/router";
import {CheckoutApiService} from "../../services/checkout-service/checkout-api.service";
import {AuthserviceService} from "../../services/authentication/authservice.service";

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
              private route: ActivatedRoute,
              private checkoutService: CheckoutApiService,
              private AuthService:AuthserviceService,
              private router:Router
              ) {
  }

  ngOnInit() {
    this.cartId = this.route.snapshot.paramMap.get('cartId');
    this.cartService.getCartItems(this.cartId).subscribe(response => {
      this.cartItems = response;
      this.total = this.cartItems.reduce((total:any, item:any) => total + item.subtotal, 0);
    });
  }

  selectPaymentMethod(method:any) {
    this.selectedPaymentMethod = method;
  }

  pay() {
    if (this.selectedPaymentMethod) {
      // Aquí se realizaría el proceso de pago
      console.log('Pago realizado con: ', this.selectedPaymentMethod);

      this.router.navigate(['/Confirmation']);
      } else {
      console.log('Por favor, seleccione un método de pago');
    }
  }

  /*pay() {
    if (this.selectedPaymentMethod) {
      // Aquí se realizaría el proceso de pago
      console.log('Pago realizado con: ', this.selectedPaymentMethod);

      // Define the parameters for postPayment and postPurchase
      const amount = this.total;
      const description = 'Compra de productos';
      const method = this.selectedPaymentMethod;
      const customerId = Number(this.AuthService.getCurrentUser()); // Convierte el string a un número
      console.log('Datos de pago: ', amount, description, method, customerId);

      // Llama a los métodos payment y purchase de CheckoutService
      this.checkoutService.postPayment({amount, description, method, customerId}).subscribe(paymentResponse => {
        // Aquí puedes manejar la respuesta del pago
        // Y luego llamar al método postPurchase si es necesario
      });
    } else {
      console.log('Por favor, seleccione un método de pago');
    }
  }*/
}
