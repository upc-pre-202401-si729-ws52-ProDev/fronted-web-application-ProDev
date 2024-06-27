import { Component, OnInit  } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import{MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import {ProductsApiService} from "../../services/donation-services/products-api.service";
import {ToolbarContentComponent} from "../../../public/components/toolbar-content/toolbar-content.component";
import {ToolbarCustomerComponent} from "../../../public/components/toolbar-customer/toolbar-customer.component";
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { startWith } from 'rxjs/operators';
import {Router} from "@angular/router";
import {CartService} from "../../services/shopping-cart-services/cart.service";
import {RouterLink} from "@angular/router";
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, CommonModule, MatIconModule, ToolbarContentComponent, ToolbarCustomerComponent, ReactiveFormsModule, FormsModule, RouterLink],
  templateUrl: 'product-list-customers.component.html',
  styleUrl: 'product-list-customers.component.css'
})


export class ProductListCustomersComponent implements OnInit {
  rows: any[] = [];
  filteredRows: any[] = [];
  searchControl = new FormControl();
  quantity: number = 0;
  productsAtCart: any[] = [];
  mockUser = {
    id: '1',
    name: 'Test User'
  };
  private cartId: any;





  constructor(private productsApiService: ProductsApiService
  ,private router: Router,
              private cartService: CartService) {
  }

  ngOnInit(): void {
    this.productsApiService.getProducts().subscribe(
      (data: any) => {
        this.rows = data;
        this.filteredRows = this.rows;
      },
      error => {
        console.log('Error obteniendo productos:', error);
      }
    );

    this.searchControl.valueChanges
      .pipe(startWith(''))
      .subscribe(value => {
        this.filteredRows = this.rows.filter(product => product.name.toLowerCase().includes(value.toLowerCase()));
      });
  }

  addToCart(product: any, quantity: number){
    console.log('Añadiendo al carrito:', product , quantity);

    // Aquí implemento la lógica para añadir al carrito
    // por ejemplo, podrías guardar los productos en un arreglo
    // y luego mostrarlos en un componente de carrito

    this.cartService.addToCart(product, quantity, 1).subscribe((data: any) => {
      console.log('Producto añadido al carrito:', data);
      this.productsAtCart.push(data);
    } , error => {
      console.log('Error añadiendo al carrito:', error);
    } );
    //Limpiando la variable quantity
    this.quantity = 0;

  }

  viewReviews(product: any) {
    this.router.navigate(['/review-list']);
  }

  goToShoppingCart() {
    this.cartService.createCart(this.mockUser.id).subscribe((response: CartResponse) => {
      this.cartId = response.cartId;
      // Navega al carrito de compras
      this.router.navigate(['/shopping-cart']);
    });
  }
}

interface CartResponse{
  cartId: any;
}
