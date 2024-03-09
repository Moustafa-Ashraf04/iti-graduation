import { Component } from '@angular/core';
import { TopBarComponent } from '../../top-bar/top-bar.component';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-ratings',
  standalone: true,
  imports: [TopBarComponent, SideBarComponent,CommonModule,NgClass,],
  templateUrl: './ratings.component.html',
  styleUrl: './ratings.component.css',
})
export class RatingsComponent {
  constructor(public _themeservice:ThemeService){}



  // here we will display the array of reviews for that vendor
}
