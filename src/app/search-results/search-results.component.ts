import { Component } from '@angular/core';
import { TopBarComponent } from '../top-bar/top-bar.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-search-results',
  standalone: true, 
  imports: [TopBarComponent,NavbarComponent,HeaderComponent,FooterComponent,ProductCardComponent],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.css'
})
export class SearchResultsComponent {
}
