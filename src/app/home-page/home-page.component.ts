import { Component, OnInit } from '@angular/core';
import { TopBarComponent } from '../top-bar/top-bar.component';
import { HeaderComponent } from './../header/header.component';
import { CommonModule, NgClass } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { CategoryCardComponent } from '../category-card/category-card.component';
import { NgOptimizedImage } from '@angular/common';
import { DetailsComponent } from '../details/details.component';
import { ThemeService } from '../services/theme.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    HeaderComponent,
    DetailsComponent,
    TopBarComponent,
    CommonModule,
    ProductCardComponent,
    RouterModule,
    FooterComponent,
    NavbarComponent,
    CategoryCardComponent,
    NgOptimizedImage,
    NgClass,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent implements OnInit {
  constructor(
    public _themeservice: ThemeService,
    private _productsService: ProductsService,
  ) {}
  // products!: any[];

  products: any[] = [];


  ngOnInit() {
    // console.log('parent');

    this._productsService.getAllProducts().subscribe((res) => {
      this.products = res.products;
    });
  }
  // remove new arrivals and display 20 random products from all categories

  toggleDarkMood() {
    this._themeservice.toggleDarkMood();
  }
}
