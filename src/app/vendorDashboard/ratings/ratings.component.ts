import { Component } from '@angular/core';
import { TopBarComponent } from '../../top-bar/top-bar.component';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ratings',
  standalone: true,
  imports: [TopBarComponent, SideBarComponent,CommonModule],
  templateUrl: './ratings.component.html',
  styleUrl: './ratings.component.css',
})
export class RatingsComponent {
  constructor(){}


  // here we will display the array of reviews for that vendor 
} 
