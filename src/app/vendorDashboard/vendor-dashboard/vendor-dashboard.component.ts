import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TopBarComponent } from '../../top-bar/top-bar.component';
import { HeaderComponent } from '../../header/header.component';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { VendorDashboardService } from '../../services/vendor-dashboard.service';

@Component({
  selector: 'app-vendor-dashboard',
  standalone: true,
  imports: [RouterLink, TopBarComponent, HeaderComponent, SideBarComponent],
  templateUrl: './vendor-dashboard.component.html',
  styleUrl: './vendor-dashboard.component.css',
})
export class VendorDashboardComponent {
  data: any;
  // will get the values and names from the api and two way data binding it into the html
  constructor(private _vendorDashboardService: VendorDashboardService) {}

  ngOnInit(): void {
    const vendorToken = localStorage.getItem('vendorToken');
    if (vendorToken) {
      this._vendorDashboardService.getVendorData(vendorToken).subscribe(
        (response) => {
          // this.products = response.products;
          this.data = response.data;
          console.log(response);
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
