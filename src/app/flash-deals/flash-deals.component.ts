import { Component } from '@angular/core';
import { TopBarComponent } from '../top-bar/top-bar.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { ProductCardComponent } from '../product-card/product-card.component';
<<<<<<< HEAD
import { CommonModule, NgClass } from '@angular/common';
import { ThemeService } from '../services/theme.service';
=======
import { CommonModule } from '@angular/common';
import { ProductsService } from '../services/products.service';
>>>>>>> d49c3b40b794222af23d32ae752c3d9428f27632

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
    NgClass
  ],
  templateUrl: './flash-deals.component.html',
  styleUrl: './flash-deals.component.css',
})
export class FlashDealsComponent {
<<<<<<< HEAD
  constructor(public _themeservice:ThemeService){}
  items = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28,
  ];
=======
  // items = [
  //   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  //   22, 23, 24, 25, 26, 27, 28,
  // ];
  constructor(private _productsService: ProductsService) {}
  products!: any[];
>>>>>>> d49c3b40b794222af23d32ae752c3d9428f27632

  ngOnInit() {
    this._productsService.getAllProducts().subscribe((res) => {
      this.products = res.products;
    });
  }

  // will get all products and display the once on sale and display the discount precentage
}
