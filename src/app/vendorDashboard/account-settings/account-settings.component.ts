import { Component } from '@angular/core';
import { TopBarComponent } from '../../top-bar/top-bar.component';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { ThemeService } from '../../services/theme.service';
import { NgClass } from '@angular/common';
import { HeaderComponent } from '../../header/header.component';
@Component({
  selector: 'app-account-settings',
  standalone: true,
  imports: [TopBarComponent,SideBarComponent,NgClass,
HeaderComponent
],
  templateUrl: './account-settings.component.html',
  styleUrl: './account-settings.component.css'
})
export class AccountSettingsComponent {
  constructor(public _themeservice:ThemeService){}

}
