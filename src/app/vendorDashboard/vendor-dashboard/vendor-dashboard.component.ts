import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TopBarComponent } from '../../top-bar/top-bar.component';
import { HeaderComponent } from '../../header/header.component';
import { SideBarComponent } from '../side-bar/side-bar.component';

@Component({
  selector: 'app-vendor-dashboard',
  standalone: true,
  imports: [RouterLink, TopBarComponent, HeaderComponent, SideBarComponent],
  templateUrl: './vendor-dashboard.component.html',
  styleUrl: './vendor-dashboard.component.css',
})
export class VendorDashboardComponent {
  // will get the values and names from the api and two way data binding it into the html
  constructor() {}
}
