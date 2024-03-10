import { Component, Input, OnInit, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthVendor } from '../services/authVendor.service';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../services/theme.service';
import { NgClass } from '@angular/common';
import { AuthUserService } from '../services/auth-user.service';
import { CartService } from '../services/cart.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule, NgClass, FormsModule],
  providers: [AuthVendor],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  isUserLogin: boolean = false;
  queryParam: string = '';
  @Input() isSearchPage: boolean = false;
  _cartService = inject(CartService);
  constructor(
    private AuthService: AuthUserService,
    public _themeServices: ThemeService,
    private router: Router
  ) { }

  toggleDarkMood() {
    this._themeServices.toggleDarkMood();
  }

  ngOnInit(): void {
    this.isUserLogin = localStorage.getItem('userToken') ? true : false;
  }

  logOut() {
    this.AuthService.signOutUser();
  }

  goToOtherPage(): void {


    this.router.navigate(['/search'], { queryParams: { query: this.queryParam } });
  }
}
