import { Component } from '@angular/core';
import { TopBarComponent } from '../top-bar/top-bar.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ProductCardComponent } from '../product-card/product-card.component';
import { SearchService } from '../search-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [TopBarComponent, NavbarComponent, HeaderComponent, FooterComponent, ProductCardComponent],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.css'
})
export class SearchResultsComponent {
  products: [] = [];
  queryParam: string = '';
  isSearchPage :boolean = true;
  constructor(
    private _searchService: SearchService, private route: ActivatedRoute
  ) { };

  ngOnInit() {
    this.route.queryParamMap.subscribe((params) => {

      this.queryParam = params.get('query')!;

    });
    this._searchService.search(this.queryParam).subscribe((res) => {
      this.products = res.results;
      console.log(this.products);
    });
   

  }

}
