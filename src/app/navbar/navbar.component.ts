import { AuthVendor } from './../services/authVendor.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  providers: [AuthVendor],

  imports: [RouterLink, RouterLinkActive, RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  isVendorLogin: boolean = false;

  constructor(private AuthService: AuthVendor) {}

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
}


// need to add dark mode icon and multilang if done 
// when its a vendor display the word dashboard and logout instead of help and login 
