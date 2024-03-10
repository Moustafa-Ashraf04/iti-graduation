import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { TopBarComponent } from '../top-bar/top-bar.component';
import { FooterComponent } from '../footer/footer.component';
import { RecommendedComponent } from '../recommended/recommended.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { ThemeService } from '../services/theme.service';
import { ProductsService } from '../services/products.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    TopBarComponent,
    RecommendedComponent,
    RouterLink,
    NgClass,
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  constructor(
    public _themeService: ThemeService,
    private _activatedRoute: ActivatedRoute,
    private _productService: ProductsService,
    private _cartService: CartService
  ) {}
  data: any;
  id!: number;

  ngOnInit() {
    this.id = this._activatedRoute.snapshot.params['id'];
    console.log(this.id);
    this._productService
      .getSingleProduct(this.id)
      .subscribe((res) => (this.data = res));
  }
  toggleDarkMood() {
    this._themeService.toggleDarkMood();
  }

  addToCart(addedProduct: any) {
    this._cartService.addToCart(addedProduct);
  }
}
