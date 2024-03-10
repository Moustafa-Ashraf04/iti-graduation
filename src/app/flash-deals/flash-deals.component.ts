import { Component } from '@angular/core';
import { TopBarComponent } from '../top-bar/top-bar.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CommonModule, NgClass } from '@angular/common';
import { ThemeService } from '../services/theme.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-flash-deals',
  standalone: true,
  imports: [
    TopBarComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    ProductCardComponent,
    CommonModule,
    NgClass,
  ],
  templateUrl: './flash-deals.component.html',
  styleUrl: './flash-deals.component.css',
})
export class FlashDealsComponent {
  constructor(
    private _productsService: ProductsService,
    public _themeservice: ThemeService
  ) {}
  products!: any[];

  ngOnInit() {
    this._productsService.getAllProducts().subscribe((res) => {
      this.products = res.products;
    });
  }

  // will get all products and display the once on sale and display the discount precentage
}
