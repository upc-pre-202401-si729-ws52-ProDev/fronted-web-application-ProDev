import {Component, OnInit} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardContent, MatCardHeader, MatCardSubtitle} from "@angular/material/card";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import { Product } from "../../models/product/product.model";
import { ProfileApiService } from "../../services/profile-services/profile-api.service";
import {Router} from "@angular/router";
import {AuthserviceService} from "../../services/authentication/authservice.service";

@Component({
  selector: 'app-product-add',
  standalone: true,
    imports: [
        MatButton,
        MatCard,
        MatCardContent,
        MatCardHeader,
        MatCardSubtitle,
        MatFormField,
        MatInput,
        MatLabel,
        ReactiveFormsModule
    ],
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})

export class ProductAddComponent implements OnInit {
  productForm!: FormGroup;
  constructor(private profileApiService: ProfileApiService, private formBuilder: FormBuilder, private router: Router, private authService: AuthserviceService) {
  }


  ngOnInit() {
    this.productForm = this.formBuilder.group({
      name: [''],
      quantity: [''],
      price: [''],
      type: [''],
      defect: [''],
      urlImage: [''],
      description: [''],
      userId: ['']
    });
    const currentUser = this.authService.getCurrentUser();
    this.productForm.patchValue({userId: currentUser});
  }

  onSubmit() {

    if (this.productForm.valid) {
      console.log(this.productForm.value);
      this.profileApiService.addProduct(this.productForm.value).subscribe(
        response => {
          console.log('Product added successfully', response);
          this.router.navigate(['/product-list']);
        },
        error => {
          console.error(error);
        }
      );
    }
  }
}
