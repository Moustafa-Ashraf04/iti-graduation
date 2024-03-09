import { AuthVendor } from './../services/authVendor.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { ThemeService } from '../services/theme.service';
import { NgClass } from '@angular/common';
import { AuthUserService } from '../services/auth-user.service';

@Component({
  selector: 'app-navbar',
  standalone: true,

  imports: [RouterLink, RouterLinkActive, RouterModule, CommonModule, NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  isUserLogin: boolean = false;

  constructor(
    private AuthService: AuthUserService,
    public _themeservice: ThemeService
  ) {}

  ngOnInit(): void {
    this.AuthService.userToken.subscribe({
      next: () => {
        if (this.AuthService.userToken.getValue() != null) {
          this.isUserLogin = true;
          console.log(this.isUserLogin);
        } else {
          this.isUserLogin = false;
        }
      },
    });
  }
  darkMoodToggle() {
    this._themeservice.toggleDarkMood();
  }
}

// need to add dark mode icon and multilang if done
// when its a vendor display the word dashboard and logout instead of help and login
