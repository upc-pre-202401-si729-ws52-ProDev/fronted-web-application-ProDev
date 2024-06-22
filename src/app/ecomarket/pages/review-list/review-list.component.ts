import {Component, OnInit} from '@angular/core';
import {ToolbarContentComponent} from "../../../public/components/toolbar-content/toolbar-content.component";
import {MatCardModule} from "@angular/material/card";
import { CommonModule } from '@angular/common';
import {ReviewApiService} from "../../services/review-services/reviews-api.service";
import {NgForOf} from "@angular/common";

/*interface Review {
  id: number;
  content: string;
  qualification: number;
  date: string;
  product: string;
}*/
@Component({
  selector: 'app-review-list',
  standalone: true,
  imports: [
    ToolbarContentComponent, MatCardModule, CommonModule, NgForOf
  ],
  templateUrl: './review-list.component.html',
  styleUrl: './review-list.component.css'
})
export class ReviewListComponent implements OnInit {
  reviews: any[] = [];

  constructor(private reviewApiService: ReviewApiService) { }

  ngOnInit(): void {
    this.getReviews();
  }

  getReviews(): void {
    this.reviewApiService.getReviews().subscribe(reviews => {
      this.reviews = reviews;
    });
  }
}
