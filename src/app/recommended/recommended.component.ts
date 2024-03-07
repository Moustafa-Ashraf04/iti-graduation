import { Component } from '@angular/core';
import { ThemeService } from '../services/theme.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-recommended',
  standalone: true,
  imports: [NgClass],
  templateUrl: './recommended.component.html',
  styleUrl: './recommended.component.css'
})
export class RecommendedComponent {
constructor(public _themeservice:ThemeService){}
taggleDarkMood(){
  this._themeservice.toggleDarkMood()}
}
