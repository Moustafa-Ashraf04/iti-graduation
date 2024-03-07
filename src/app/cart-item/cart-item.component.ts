import { Component } from '@angular/core';
import { ThemeService } from '../services/theme.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [NgClass],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})
export class CartItemComponent {
constructor(public _themeservice:ThemeService){}
toggleDarkMood(){
  this._themeservice.toggleDarkMood()
}
}
