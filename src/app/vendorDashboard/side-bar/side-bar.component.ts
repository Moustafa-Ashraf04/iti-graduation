import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthVendor } from '../../services/authVendor.service';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  providers: [AuthVendor],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css',
})
export class SideBarComponent implements OnInit {
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

  logOut() {
    this.AuthService.signOut();
  }
}
