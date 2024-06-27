import {Component, OnInit} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {NgForOf} from "@angular/common";
import {DonationApiService} from "../../../donation-management/services/donation-api.service";
import {ProfileApiService} from "../../../../services/profile-services/profile-api.service";
import {FormControl} from "@angular/forms";
import {startWith} from "rxjs/operators";
import {PurchaseApiService} from "../../../../services/purchase-services/purchase-api.service";

@Component({
  selector: 'app-purchases-list',
  standalone: true,
  imports: [MatCardModule, NgForOf],
  templateUrl: './purchases-list.component.html',
  styleUrl: './purchases-list.component.css'
})
export class PurchasesListComponent implements OnInit{
  purchases: any =[];
  rows: any[] = [];
  filteredRows: any[] = [];
  searchControl = new FormControl();
  customerId: any = 1;

  constructor(private purchaseApiService: PurchaseApiService) { }

  ngOnInit(){
    this.purchaseApiService.getPurchases(this.customerId).subscribe(
      (data: any) => {
        this.rows = data;
        this.filteredRows = this.rows;
      },
      error => {
        console.log('Error obteniendo las compras:', error);
      }
    );

    this.searchControl.valueChanges
      .pipe(startWith(''))
      .subscribe(value =>{
        this.filteredRows = this.rows.filter(product => product.name.toLowerCase().includes(value.toLowerCase()));
      })
  }
}
