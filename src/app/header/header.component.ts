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
<<<<<<< HEAD
    public _themeServices: ThemeService
  ) { }
=======
    public _themeServices: ThemeService,
  ) {}
>>>>>>> 7c4284a61ffb87d4d0cfe017747489ec9a1cd3cd

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
