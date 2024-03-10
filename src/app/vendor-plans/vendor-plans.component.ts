import { Component } from '@angular/core';
import { RouterLink,Route } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { ThemeService } from '../services/theme.service';
import { NgClass } from '@angular/common';


@Component({
  selector: 'app-vendor-plans',
  standalone: true,
  imports: [RouterLink,HeaderComponent,NavbarComponent,FooterComponent,NgClass],
  templateUrl: './vendor-plans.component.html',
  styleUrl: './vendor-plans.component.css'
})
export class VendorPlansComponent {
constructor(public _themeservice:ThemeService){}
}

// can be designed better
