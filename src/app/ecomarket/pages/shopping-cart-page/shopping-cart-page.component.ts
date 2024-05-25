import {Component, OnInit} from '@angular/core';
import {CartService} from "../../services/shopping-cart-services/cart.service";
import {MatCard, MatCardModule} from "@angular/material/card";
import {NgForOf} from "@angular/common";
import {ToolbarCustomerComponent} from "../../../public/components/toolbar-customer/toolbar-customer.component";

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

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    console.log('Items en el carrito:', this.cartItems);
  }
}
