import { Component, OnInit  } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import{MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import {ToolbarContentComponent} from "../../../public/components/toolbar-content/toolbar-content.component";
import {ProfileApiService} from "../../services/profile-services/profile-api.service";
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import { startWith } from 'rxjs/operators';
import {Router} from "@angular/router";
import {AuthserviceService} from "../../services/authentication/authservice.service";


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, CommonModule, MatIconModule, ToolbarContentComponent, ReactiveFormsModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  rows: any[] = [];
  filteredRows: any[] = [];
  searchControl = new FormControl();
  constructor(private productsApiService: ProfileApiService, private router: Router, private authService: AuthserviceService) {
  }

  ngOnInit(): void {
    const user = this.authService.getCurrentUser();

    this.productsApiService.getProducts(user).subscribe(
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

    onAddDonation() {
    this.router.navigate(['/add-product']);  }

    onAddProduct() {
    this.router.navigate(['/product-add']);
    }


}

