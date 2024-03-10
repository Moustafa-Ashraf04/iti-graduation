import { Component } from '@angular/core';
import { HelpPageComponent } from '../help-page.component';
import { SidebarHelpComponent } from '../sidebar-help/sidebar-help.component';
import { CommonModule, NgClass } from '@angular/common';
import { ThemeService } from '../../services/theme.service';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../header/header.component';
import { TopBarComponent } from '../../top-bar/top-bar.component';
@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [
    HelpPageComponent,
    SidebarHelpComponent,
NgClass,
CommonModule,
RouterLink,
HeaderComponent,
TopBarComponent,
NgClass
,



  ],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {
  constructor(public _themeservice:ThemeService ){}
}
