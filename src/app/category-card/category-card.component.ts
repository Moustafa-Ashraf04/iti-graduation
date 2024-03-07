import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { NgOptimizedImage } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-category-card',
  standalone: true,
  imports: [CarouselModule, NgOptimizedImage, RouterLink],
  templateUrl: './category-card.component.html',
  styleUrl: './category-card.component.css',
})
export class CategoryCardComponent {
  preventClick(event: Event): void {
    event.preventDefault();
  }

    // will do a loop to generate all the categories images and title to display home 
}
