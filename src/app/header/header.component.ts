import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthVendor } from '../services/authVendor.service';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../services/theme.service';
import { NgClass } from '@angular/common';
import { AuthUserService } from '../services/auth-user.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule, NgClass],
  providers: [AuthVendor],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  isUserLogin: boolean = false;
  _cartService = inject(CartService);
  constructor(
    private AuthService: AuthUserService,
    public _themeServices: ThemeService
  ) {}

  toggleDarkMood() {
    this._themeServices.toggleDarkMood();
  }

  ngOnInit(): void {
    this.isUserLogin = localStorage.getItem('userToken') ? true : false;
  }

  logOut() {
    this.AuthService.signOutUser();
  }

  // test this after the help menu and user login
}
