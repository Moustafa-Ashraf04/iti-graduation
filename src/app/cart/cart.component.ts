import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { RecommendedComponent } from '../recommended/recommended.component';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { TopBarComponent } from '../top-bar/top-bar.component';
import { Router, RouterLink } from '@angular/router';
import { ThemeService } from '../services/theme.service';
import { NgClass } from '@angular/common';

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
    NgClass,
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  constructor(public _themeservice: ThemeService) {
    // this.taggleDarkMood()
  }
  taggleDarkMood() {
    this._themeservice.toggleDarkMood();
    // this.darkMoodBody()
  }
  // lightMood:boolean=false
  // darkMoodBody(){
  //   this.lightMood =! this.lightMood
  //   document.getElementsByTagName('section')[0].classList.remove('bg-light')

  // }
}
