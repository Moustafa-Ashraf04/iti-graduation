import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthVendor } from '../services/authVendor.service';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../services/theme.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule, NgClass],
  providers: [AuthVendor],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  isVendorLogin: boolean = false;

  constructor(
    private AuthService: AuthVendor,
    public _themeServices: ThemeService
  ) {}

  toggleDarkMood() {
    this._themeServices.toggleDarkMood();
  }

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

  logOut() {
    this.AuthService.signOut();
  }

  // test this after the help menu and user login
}
