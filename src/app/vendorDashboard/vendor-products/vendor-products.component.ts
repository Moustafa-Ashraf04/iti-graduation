import { Component } from '@angular/core';
import { TopBarComponent } from '../../top-bar/top-bar.component';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vendor-products',
  standalone: true,
  imports: [TopBarComponent, SideBarComponent, RouterLink, CommonModule],
  templateUrl: './vendor-products.component.html',
  styleUrl: './vendor-products.component.css',
})
export class VendorProductsComponent {

  items = new Array(15).fill(0);

}
