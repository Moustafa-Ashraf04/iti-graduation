import { Component } from '@angular/core';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  preventClick(event: Event): void {
    event.preventDefault();
  }
}


// need to be adjusted with the right data that will be displayed 