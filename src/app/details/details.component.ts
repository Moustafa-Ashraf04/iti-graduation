import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { TopBarComponent } from '../top-bar/top-bar.component';
import { FooterComponent } from '../footer/footer.component';
import { RecommendedComponent } from '../recommended/recommended.component';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { ThemeService } from '../services/theme.service';



@Component({
  selector: 'app-details',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,NavbarComponent,TopBarComponent,RecommendedComponent,RouterLink,NgClass],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
constructor(public _themeService:ThemeService){}
toggleDarkMood(){
  this._themeService.toggleDarkMood()
}
}
