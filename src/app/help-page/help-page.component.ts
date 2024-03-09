import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { TopBarComponent } from '../top-bar/top-bar.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { ThemeService } from '../services/theme.service';
import { NgClass } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { PaymentComponent } from './payment/payment.component';
import { SidebarHelpComponent } from './sidebar-help/sidebar-help.component';

@Component({
  selector: 'app-help-page',
  standalone: true,
  imports: [RouterOutlet,PaymentComponent,RouterLink,FooterComponent,HeaderComponent,TopBarComponent,NavbarComponent,NgClass,
  SidebarHelpComponent,
  ],
  templateUrl: './help-page.component.html',
  styleUrl: './help-page.component.css'
})
export class HelpPageComponent {
constructor(public _themeservice:ThemeService){}
taggleDarkMood(){
  // this._themeservice.toggleDarkMood()
}
}
