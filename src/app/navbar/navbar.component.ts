import { AuthVendor } from './../services/authVendor.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { ThemeService } from '../services/theme.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,

  imports: [RouterLink, RouterLinkActive, RouterModule, CommonModule, NgClass],
  providers: [AuthVendor],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  isVendorLogin: boolean = false;

  constructor(
    private AuthService: AuthVendor,
    public _themeservice: ThemeService
  ) {}

  ngOnInit(): void {
    this.AuthService.vendorData.subscribe({
      next: () => {
        if (this.AuthService.vendorData.getValue() != null) {
          this.isVendorLogin = true;
        } else {
          this.isVendorLogin = false;
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
