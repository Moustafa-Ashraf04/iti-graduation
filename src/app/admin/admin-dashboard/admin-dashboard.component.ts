import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { RouterLink } from '@angular/router';
import { AdminDashboardService } from '../../services/admin-dashboard.service';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [NavBarComponent, RouterLink],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css',
})
export class AdminDashboardComponent {
  data: any;
  constructor(private _adminDashboard: AdminDashboardService) {}

  ngOnInit(): void {
    const adminToken = sessionStorage.getItem('adminToken');
    if (adminToken) {
      this._adminDashboard.getAdminData(adminToken).subscribe(
        (response) => {
          this.data = response;
        },
        (error) => {
          console.error('Error fetching products:', error);
        }
      );
    } else {
      console.error('Vendor token not found.');
    }
  }
}
