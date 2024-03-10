import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { TopBarComponent } from '../top-bar/top-bar.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { ThemeService } from '../services/theme.service';
import { UserService } from '../user-service.service';
@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    TopBarComponent,
    NgClass,
    RouterLink,
  ],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
})
export class UserProfileComponent {
  userData: any;
  authToken: any;
  constructor(
    public _themeService: ThemeService,
    private _userService: UserService
  ) {}
  ngOnInit(): void {
    const userToken = localStorage.getItem('userToken');
    if (userToken) {
      this._userService.getUserData(userToken).subscribe((res) => {
        this.userData = res.user;
      });
    }
  }
}
