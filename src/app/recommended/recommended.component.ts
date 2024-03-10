import { Component, Input } from '@angular/core';
import { ThemeService } from '../services/theme.service';
import { NgClass } from '@angular/common';
import { CartService } from '../services/cart.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recommended',
  standalone: true,
  imports: [NgClass, RouterLink, CommonModule],
  templateUrl: './recommended.component.html',
  styleUrl: './recommended.component.css',
})
export class RecommendedComponent {
  @Input() product!: any;
  constructor(
    public _themeservice: ThemeService,
    private _cartService: CartService,
    private router: Router,
  ) {}
  taggleDarkMood() {
    this._themeservice.toggleDarkMood();
  }
  addToCart(addedProduct: any) {
    this._cartService.addToCart(addedProduct);

    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }
}

// will get here the api for the recommended items to display under the products details page
