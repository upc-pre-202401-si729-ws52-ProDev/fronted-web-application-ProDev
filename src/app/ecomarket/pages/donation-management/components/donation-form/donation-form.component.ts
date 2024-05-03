import { Component,OnInit } from '@angular/core';
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import { DonationApiService} from "../../services/donation-api.service";
import {ProductsApiService} from "../../../../services/donation-services/products-api.service";
import {MatOption, MatSelect} from "@angular/material/select";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-donation-form',
  standalone: true,
  imports: [
    MatCard,
    MatCardTitle,
    MatFormField,
    MatCardContent,
    MatInput,
    MatLabel,
    MatButton,
    ReactiveFormsModule,
    MatSelect,
    MatOption,
    NgForOf
  ],
  templateUrl: './donation-form.component.html',
  styleUrl: './donation-form.component.css'
})
export class DonationFormComponent implements OnInit{

  donationForm!: FormGroup;
  products:any[] = [];

  constructor(private formBuilder: FormBuilder, private donationApiService:DonationApiService, private productsApiService: ProductsApiService) { }

  ngOnInit(): void {
    this.donationForm = this.formBuilder.group({
      ong: ['', Validators.required],
      product: ['', Validators.required],
      quantity: ['', [Validators.required, Validators.min(1)]]
    });

    this.productsApiService.getProducts().subscribe(products => {
      this.products = products;
    });
  }
  onSubmit(): void {
    if (this.donationForm.valid) {
      const formData = this.donationForm.value;
      const product = this.products.find(product => product.name === formData.product);
      if (product) {
        product.quantity = formData.quantity;
      }
      const donation = {
        id: this.generateId(),
        ong: formData.ong,
        product: product
      };
      this.donationApiService.createDonation(donation)
        .subscribe({
          next: (response: any) => {
            console.log('Response from server:', response);
          },
          error: (error: any) => {
            console.log('Error:', error);
          }
        });
    } else {
      console.log('Form is not valid');
    }
  }

  generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }
}
