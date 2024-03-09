import { Component, OnInit } from '@angular/core';
import { TopBarComponent } from '../../top-bar/top-bar.component';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { ThemeService } from '../../services/theme.service';
import { NgClass } from '@angular/common';
import { HeaderComponent } from '../../header/header.component';import { CommonModule } from '@angular/common';
import {
  RouterLink,
  RouterModule,
  Router,
  ActivatedRoute,
} from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { VendorDashboardService } from '../../services/vendor-dashboard.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-account-settings',
  standalone: true,
  imports: [
    TopBarComponent,
    SideBarComponent,
    CommonModule,
    RouterLink,
    HttpClientModule,
    RouterModule,
    FormsModule
  ,NgClass,
HeaderComponent
],
  templateUrl: './account-settings.component.html',
  styleUrl: './account-settings.component.css',
})
export class AccountSettingsComponent implements OnInit {
  // is_loading: boolean = false;
  // Plan: any;

  vendor: any;

  constructor(
    private route: ActivatedRoute,
    private _vendorDashboardService: VendorDashboardService,
    private _http: HttpClient,
    private _Router: Router,
    public _themeservice:ThemeService
  ) {}

  ngOnInit(): void {
    // console.log(this.productId);
    // this.fetchProductDetails();
    // fetchProductDetails() {
    const vendorToken = localStorage.getItem('vendorToken');
    // console.log(vendorToken);

    if (vendorToken) {
      this._vendorDashboardService
        .getVendorProfileDetails(vendorToken)
        .subscribe(
          (res) => {
            this.vendor = res.data;
            console.log(res.data);
          },
          (error) => {
            console.error('Error fetching product details:', error);
          }
        );
      // }
    }
  }

  onUpdateDetails() {
    const vendorToken = localStorage.getItem('vendorToken');
    if (vendorToken) {
      const inputData = {
        fname: this.vendor.fname,
        lname: this.vendor.lname,
        business_name: this.vendor.business_name,
        email: this.vendor.email,
        phone_number: this.vendor.phone_number,

        // add here the fields that i want to update
      };
      this._vendorDashboardService
        .updateVendorProfileDetails(inputData, vendorToken)
        .subscribe(
          (res) => {
            // this._Router.navigate(['/vendor/dashboard/products']);
            // console.log(vendorToken);
            console.log(res);
          },
          (error) => {
            console.error('Error fetching vendor details: ', error);
          }
        );
    }
  }
}
