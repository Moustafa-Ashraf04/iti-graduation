import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { CommonModule } from '@angular/common';
import { AdminDashboardService } from '../../services/admin-dashboard.service';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [NavBarComponent, CommonModule],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css',
})
export class ReviewsComponent {
  reviews: any[] = [];

  constructor(private _adminDashboard: AdminDashboardService) {
    const adminToken = sessionStorage.getItem('adminToken');
    if (adminToken) {
      this._adminDashboard.getReviews(adminToken).subscribe(
        (res) => {
          this.reviews = res.data;
        },
        (error) => {
          console.error('message:', error);
        }
      );
    }
  }

  deleteReview(reviewId) {
    const adminToken = sessionStorage.getItem('adminToken');
    if (adminToken) {
      this._adminDashboard.deleteReview(adminToken, reviewId).subscribe(
        (res) => {
          location.reload();
        },
        (error) => {
          console.error('Error fetching products:', error);
        }
      );
    }
  }
}
