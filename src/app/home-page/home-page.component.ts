import { Component } from '@angular/core';
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
export class HomePageComponent {
constructor(public _themeservice:ThemeService){}
  items = [1, 2, 3, 4];
  itemss = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];


  // remove new arrivals and display 20 random products from all categories 

toggleDarkMood(){
  this._themeservice.toggleDarkMood()
}

}
