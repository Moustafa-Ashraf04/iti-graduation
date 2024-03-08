import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DetailsComponent } from '../details/details.component';
import { NgClass, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../services/theme.service';
import { ProductsService } from '../services/products.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, DetailsComponent, NgIf, RouterLink, NgClass],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() product!: any;

  constructor(
    public _themeService: ThemeService,
    private _productsService: ProductsService,
  ) {}

  preventClick(event: Event): void {
    event.preventDefault();
  }
  showDetails: boolean = false;
  showDetailsInfo() {
    this.showDetails = !this.showDetails;
  }
  openDetails() {
    this.showDetails = true;
  }
  endPropagation($event: Event) {
    $event.stopPropagation();
  }

  toggleDarkMood() {
    this._themeService.toggleDarkMood();
  }
}

// need to be adjusted with the right data that will be displayed
