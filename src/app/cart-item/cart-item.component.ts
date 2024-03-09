import { Component, Input, inject } from '@angular/core';
import { ThemeService } from '../services/theme.service';
import { NgClass } from '@angular/common';
import { TopBarComponent } from '../top-bar/top-bar.component';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [NgClass, TopBarComponent],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css',
})
export class CartItemComponent {
  @Input() item!: any;
  _cartService = inject(CartService);
  constructor(public _themeservice: ThemeService) {}
  toggleDarkMood() {
    this._themeservice.toggleDarkMood();
  }
  deleteFromCart(item: any) {
    this._cartService.delete(item);
  }
}
