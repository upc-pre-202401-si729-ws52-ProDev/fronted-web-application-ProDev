import { Component, OnInit  } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import{MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import {ToolbarContentComponent} from "../../../public/components/toolbar-content/toolbar-content.component";
import {ProfileApiService} from "../../services/profile-services/profile-api.service";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, CommonModule, MatIconModule, ToolbarContentComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  rows: any[] = [];

  constructor(private productsApiService: ProfileApiService) {
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

