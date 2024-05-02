import {Component, OnInit} from '@angular/core';
import {DonationApiService} from "../../services/donation-api.service";
import {MatCardModule} from "@angular/material/card";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-donation-list',
  standalone: true,
  imports: [MatCardModule, NgForOf],
  templateUrl: './donation-list.component.html',
  styleUrl: './donation-list.component.css'
})
export class DonationListComponent implements OnInit{
  donations: any = [];

  constructor(private donationApiService: DonationApiService) { }

  ngOnInit() {
    this.getDonations();

    this.donationApiService.donationCreated$.subscribe(() => {
      this.getDonations();
    });
  }

  getDonations(): void {
    this.donationApiService.getDonations().subscribe(donations => {
      this.donations = donations;
    });
  }

}
