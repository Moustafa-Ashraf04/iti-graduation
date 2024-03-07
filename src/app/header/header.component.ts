import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../services/theme.service';
import { NgClass } from '@angular/common';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
 constructor(public _themeServices:ThemeService){}
 toggleDarkMood(){
  this._themeServices.toggleDarkMood()
 }


}
