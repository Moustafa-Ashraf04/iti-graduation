import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { RecommendedComponent } from '../recommended/recommended.component';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { TopBarComponent } from '../top-bar/top-bar.component';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent,
    RecommendedComponent,
    CartItemComponent,
    TopBarComponent,
    RouterLink,
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {}
