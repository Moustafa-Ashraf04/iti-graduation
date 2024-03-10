import { Component, inject } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { RecommendedComponent } from '../recommended/recommended.component';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { TopBarComponent } from '../top-bar/top-bar.component';
import { Router, RouterLink } from '@angular/router';
import { ThemeService } from '../services/theme.service';
import { CommonModule, NgClass } from '@angular/common';
import { CartService } from '../services/cart.service';
import { ProductsService } from '../services/products.service';

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
    CommonModule,
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  _cartService = inject(CartService);
  _productService = inject(ProductsService);

  items: any[] = [];
  recommendedProducts: any[] = [];
  paymentMethods: any;
  constructor(public _themeservice: ThemeService) {
    // this.taggleDarkMood()
  }
  ngOnInit() {
    this._cartService.getCartFromDb().subscribe((res) => {
      console.log(res.data);
      this.items = res.data;
      this._cartService.setCart(this.items);
      this._cartService.setItems(this.items['products']);
    });
    this._productService.getRecommendedProducts().subscribe((res) => {
      console.log('recommended', res);
      this.recommendedProducts = res;
    });
    
  }
  handleItemDeleted(deletedItem: any) {
    console.log(deletedItem);
    console.log(this.items);

    const index = this.items['products'].findIndex(
      (item) => item.id === deletedItem.id
    );
    if (index !== -1) {
      this.items['products'].splice(index, 1);
    }
  }

  emptyCart(cart: any) {
    cart.products.forEach((product) => {
      this._cartService.delete(product);
    });
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
