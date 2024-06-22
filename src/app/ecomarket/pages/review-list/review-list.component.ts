import {Component, OnInit} from '@angular/core';
import {ToolbarContentComponent} from "../../../public/components/toolbar-content/toolbar-content.component";
import {MatCardModule} from "@angular/material/card";
import { CommonModule } from '@angular/common';

interface Review {
  id: number;
  content: string;
  qualification: number;
  date: string;
  product: string;
}
@Component({
  selector: 'app-review-list',
  standalone: true,
  imports: [
    ToolbarContentComponent, MatCardModule, CommonModule
  ],
  templateUrl: './review-list.component.html',
  styleUrl: './review-list.component.css'
})
export class ReviewListComponent implements OnInit {
  reviews: Review[] = [
    {
      id: 1,
      content: 'Buen producto, recomendado',
      qualification: 5,
      date: '2024-06-21',
      product: 'Pasta dental'
    },
    // Agrega más reseñas aquí
  ];
  constructor() { }

  ngOnInit(): void {
  }
}
