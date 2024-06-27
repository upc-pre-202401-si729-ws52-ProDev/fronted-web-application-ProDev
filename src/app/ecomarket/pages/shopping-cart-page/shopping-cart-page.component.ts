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
  cartId:any = 1; //TODO: Traer el id del carrito del usuario logueado

  constructor(private cartService: CartService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.cartService.getCartItems(this.cartId).subscribe((data: any) => {
      this.cartItems = data.map((item: any) => {
        return {
          id: item.id,
          product: item.product,
          quantity: item.quantity
        }
      });
      console.log('Items en el carrito:', this.cartItems);
      this.calculateTotal();
    });
  }

  calculateTotal() {
    this.total = this.cartItems.map(item => item.product.price * item.quantity).reduce((prev, next) => prev + next, 0);
  }

  checkout() {
    //TODO: Hacer llamado al backend para realizar la compra
    console.log('Llevando a checkout');
    this.router.navigate(['checkout', this.cartId]);
  }

  removeFromCart(item: any) {
    this.cartService.removeItemFromCart(this.cartId, item.id).subscribe(() => {
      this.cartItems = this.cartItems.filter(i => i.id !== item.id);
      this.calculateTotal();
    });
  }
}

