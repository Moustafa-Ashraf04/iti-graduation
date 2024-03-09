import { Component } from '@angular/core';
import { TopBarComponent } from '../top-bar/top-bar.component';
import { HeaderComponent } from '../header/header.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CommonModule, NgClass } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { PaginatorModule } from 'primeng/paginator';
import {
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  FormControl,
} from '@angular/forms';
<<<<<<< HEAD
import { ThemeService } from '../services/theme.service';
=======
import { ProductsService } from '../services/products.service';
>>>>>>> d49c3b40b794222af23d32ae752c3d9428f27632

@Component({
  selector: 'app-category-products',
  standalone: true,
  imports: [
    TopBarComponent,
    NavbarComponent,
    NgClass,
    HeaderComponent,
    FooterComponent,
    ProductCardComponent,
    CommonModule,
    PaginatorModule,
    ButtonModule,
    PaginatorModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './category-products.component.html',
  styleUrl: './category-products.component.css',
})
export class CategoryProductsComponent {

  constructor(public _themeService:ThemeService,private _productsService: ProductsService){}

  products!: any[];

  ngOnInit() {
    this._productsService.getAllProducts().subscribe((res) => {
      this.products = res.products;
    });
  }





  page: number = 1;
  first: number = 0;
  rows: number = 20;

  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
    this.page = event.page + 1;
    // this.apiResponse
    //   .getMoviesList(this.page)
    //   .subscribe((res: MovieApiResponse) => {
    //     console.log(res);
    //     this.moviesList = res.results;
    //   });
  }

  filterForm: FormGroup = new FormGroup({
    category: new FormControl('', []),
  });
  submitFilter(filterForm: FormGroup) {
    console.log(filterForm.value);
  }

  // will do 4 functions for sorting after we get the data from the api
  // will see how we want to display the categories name in the side bar
}
