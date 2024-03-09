import { Component } from '@angular/core';
import { TopBarComponent } from '../../top-bar/top-bar.component';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-vendor-products',
  standalone: true,
  imports: [TopBarComponent, SideBarComponent, RouterLink, CommonModule,NgClass],
  templateUrl: './vendor-products.component.html',
  styleUrl: './vendor-products.component.css',
})
export class VendorProductsComponent {
  constructor(public _themeservice:ThemeService){}

  items = new Array(15).fill(0);

}
