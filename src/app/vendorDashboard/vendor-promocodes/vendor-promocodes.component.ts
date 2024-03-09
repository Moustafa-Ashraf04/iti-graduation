import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TopBarComponent } from '../../top-bar/top-bar.component';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { ThemeService } from '../../services/theme.service';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-vendor-promocodes',
  standalone: true,
  imports: [RouterLink,TopBarComponent,SideBarComponent ,
  NgClass],
  templateUrl: './vendor-promocodes.component.html',
  styleUrl: './vendor-promocodes.component.css'
})
export class VendorPromocodesComponent {
  constructor(public _themeservice:ThemeService){}

}
