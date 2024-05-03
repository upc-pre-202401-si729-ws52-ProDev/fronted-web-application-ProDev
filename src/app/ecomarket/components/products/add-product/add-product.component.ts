import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { ProductsApiService } from '../../../services/donation-services/products-api.service';
import { MatCardModule} from "@angular/material/card";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  standalone: true,
  imports: [
    MatCardModule,
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    MatButton,
    MatLabel
  ],
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  productForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private productsApiService: ProductsApiService) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      stock: ['', Validators.required],
      price: ['', Validators.required],
      type: ['', Validators.required],
      expirationDate: ['', Validators.required],
      urlImage: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      this.productsApiService.createProduct(this.productForm.value).subscribe(
        response => {
          console.log(response);
          //Muestra mensaje de exito
          alert('Product added successfully!');

        },
        error => {
          console.error(error);
          // Aquí puedes manejar los errores, como mostrar un mensaje de error al usuario.
        }
      );
    }
  }
}
