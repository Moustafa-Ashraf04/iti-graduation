import { Component } from '@angular/core';
import { TopBarComponent } from '../../top-bar/top-bar.component';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';
import { NgClass } from '@angular/common';
import { VendorDashboardService } from '../../services/vendor-dashboard.service';

@Component({
  selector: 'app-ratings',
  standalone: true,
  imports: [TopBarComponent, SideBarComponent, CommonModule, NgClass],
  templateUrl: './ratings.component.html',
  styleUrl: './ratings.component.css',
})
export class RatingsComponent {

  reviews: any[] = [];

  constructor(
    public _themeservice: ThemeService,
    private _vendorDashboardService: VendorDashboardService
  ) {
    const vendorToken = sessionStorage.getItem('vendorToken');
    if (vendorToken) {
      this._vendorDashboardService.getReviews(vendorToken).subscribe(
        (res) => {
          this.reviews = res.data;
        },
        (error) => {
          console.error('message:', error);
        }
      );
    }
  }
}
