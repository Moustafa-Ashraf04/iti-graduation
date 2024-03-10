import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../header/header.component';
import { TopBarComponent } from '../../top-bar/top-bar.component';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { ThemeService } from '../../services/theme.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-vendor-orders',
  standalone: true,
  imports: [RouterLink, HeaderComponent,TopBarComponent,SideBarComponent ,NgClass],
  templateUrl: './vendor-orders.component.html',
  styleUrl: './vendor-orders.component.css',
})
export class VendorOrdersComponent {
  constructor(public _themeservice:ThemeService){}

}
