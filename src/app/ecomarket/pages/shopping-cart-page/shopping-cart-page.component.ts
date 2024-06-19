import {Component, OnInit} from '@angular/core';
import {CartService} from "../../services/shopping-cart-services/cart.service";
import {MatCard, MatCardModule} from "@angular/material/card";
import {NgForOf} from "@angular/common";
import {ToolbarCustomerComponent} from "../../../public/components/toolbar-customer/toolbar-customer.component";
import {routes} from "../../../app.routes";
import {Router} from "@angular/router";

@Component({
  selector: 'app-shopping-cart-page',
  standalone: true,
  imports: [
    MatCardModule,
    NgForOf,
    ToolbarCustomerComponent
  ],
  templateUrl: './shopping-cart-page.component.html',
  styleUrl: './shopping-cart-page.component.css'
})
export class ShoppingCartPageComponent implements OnInit{

  cartItems: any[] = [];
  total = 0;

  constructor(private cartService: CartService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    console.log('Items en el carrito:', this.cartItems);
    this.calculateTotal();
  }

  calculateTotal() {
    this.total = this.cartItems.map(item => item.product.price * item.quantity).reduce((prev, next) => prev + next, 0);
  }

  checkout() {
    //TODO: Hacer llamado al backend para realizar la compra
    console.log('Compra realizada');
    this.router.navigate(['checkout']);
  }

  removeFromCart(item: any) {
    this.cartService.removeItemFromCart(item);
    this.calculateTotal();
  }
}

