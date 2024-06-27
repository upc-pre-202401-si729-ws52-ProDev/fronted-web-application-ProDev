import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from "../../../../environments/environment.prod";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  baseUrl = environment.serverBasePath;

  constructor(private http: HttpClient) {}

  createCart(customerId: any):Observable<any> {
    return this.http.post(this.baseUrl + 'shopping-cart/create', { customerId: customerId });
  }

  clearCart(cartId: any) {
    return this.http.delete(this.baseUrl + 'shopping-cart/' + cartId + '/clear');
  }

  getCartItems(cartId: any) {
    return this.http.get(this.baseUrl + 'shopping-cart/' + cartId);
  }

  addToCart(product: any, quantity: number, shoppingCartId: number) {
    return this.http.post(this.baseUrl + 'shopping-cart/' + shoppingCartId , {
      quantity: quantity,
      productId: product.id,
      shoppingCartId: shoppingCartId
    });
  }

  removeItemFromCart(cartId: number, itemId: number) {
    return this.http.delete(this.baseUrl + 'shopping-cart/' + cartId + '/cart-item/' + itemId);
  }
}
