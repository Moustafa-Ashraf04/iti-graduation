import { Component } from '@angular/core';
import { TopBarComponent } from '../top-bar/top-bar.component';
import { HeaderComponent } from './../header/header.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ HeaderComponent,TopBarComponent,],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {}
