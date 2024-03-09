import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { CommonModule } from '@angular/common';
import { AdminDashboardService } from '../../services/admin-dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendors',
  standalone: true,
  imports: [NavBarComponent, CommonModule],
  templateUrl: './vendors.component.html',
  styleUrl: './vendors.component.css',
})
export class VendorsComponent {
  // vendors: any[] = [1, 2, 3, 4, 5, 6, 7, 8];
  vendors: any[] = [];

  constructor(
    private _adminDashboard: AdminDashboardService,
    private router: Router
  ) {
    const adminToken = sessionStorage.getItem('adminToken');
    if (adminToken) {
      this._adminDashboard.getAllVendors(adminToken).subscribe(
        (res) => {
          this.vendors = res.data;
          // console.log(res.data);
        },
        (error) => {
          console.error('message:', error);
        }
      );
    }
  }

  activateVendor(vendorId: any) {
    const adminToken = sessionStorage.getItem('adminToken');

    console.log(adminToken);
    console.log(vendorId);
    // debugger;
    if (adminToken) {
      this._adminDashboard.activateVendor(adminToken, vendorId).subscribe(
        (res) => {
          window.location.reload();
        },
        (error) => {
          console.error('message:', error);
        }
      );
    }
  }

  suspendVendor(vendorId: number) {
    const adminToken = sessionStorage.getItem('adminToken');
    console.log(adminToken);
    console.log(vendorId);

    if (adminToken) {
      this._adminDashboard.suspendVendor(adminToken, vendorId).subscribe(
        (res) => {
          window.location.reload();
        },
        (error) => {
          console.error('message:', error);
        }
      );
    }
  }
}
