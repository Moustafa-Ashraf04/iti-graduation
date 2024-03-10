import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { TopBarComponent } from '../top-bar/top-bar.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { ThemeService } from '../services/theme.service';
import { CartItemComponent } from '../cart-item/cart-item.component';
@Component({
  selector: 'app-user-profile-orders',
  standalone: true,
  imports: [
    HeaderComponent,FooterComponent,NavbarComponent,TopBarComponent,NgClass,RouterLink,CartItemComponent
  ],
  templateUrl: './user-profile-orders.component.html',
  styleUrl: './user-profile-orders.component.css'
})
export class UserProfileOrdersComponent {
  constructor(public _themeService:ThemeService){}

}
