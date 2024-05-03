import { Component, OnInit  } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import{MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import {ProductsApiService} from "../../services/donation-services/products-api.service";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, CommonModule, MatIconModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  rows: any[] = [];

  constructor(private productsApiService: ProductsApiService) {
  }

  ngOnInit(): void {
    this.productsApiService.getProducts().subscribe(
      (data: any) => {
        // Dependiendo de cómo esté estructurado tu JSON, necesitarás acceder a la propiedad adecuada
        this.rows = data; // Ajusta esto según la estructura de tu JSON
      },
      error => {
        console.log('Error obteniendo productos:', error);
      }
    );
  }
}

