import { Component } from '@angular/core';
import { DetailsComponent } from '../details/details.component';
import { NgClass, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../services/theme.service';


@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [DetailsComponent,NgIf,RouterLink,NgClass],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {

constructor(public _themeService:ThemeService){}

  preventClick(event: Event): void {
    event.preventDefault();
  }
showDetails:boolean=false
  showDetailsInfo(){
    this.showDetails=! this.showDetails

  }
  openDetails(){
    this.showDetails=true
  }
endPropagation($event:Event){
$event.stopPropagation()
}

toggleDarkMood(){
  this._themeService.toggleDarkMood()
}
}
