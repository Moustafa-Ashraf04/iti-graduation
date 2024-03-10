import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { TopBarComponent } from '../top-bar/top-bar.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { ThemeService } from '../services/theme.service';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { UserService } from '../user-service.service';
@Component({
  selector: 'app-user-profile-orders',
  standalone: true,
  imports: [
    HeaderComponent, FooterComponent, NavbarComponent, TopBarComponent, NgClass, RouterLink, CartItemComponent, CommonModule
  ],
  templateUrl: './user-profile-orders.component.html',
  styleUrl: './user-profile-orders.component.css'
})
export class UserProfileOrdersComponent {
  userOrders: any;
  userData: any;
  constructor(public _themeService: ThemeService, private _userService: UserService) {

  }


  ngOnInit(): void {
    const userToken = localStorage.getItem('userToken');

    if (userToken) {
      this._userService
        .getUserOrders(userToken).subscribe(
          (res) => {
            this.userOrders = res.data;

          }
        );
      this._userService.getUserData(userToken).subscribe(
        (res) => {
          this.userData = res.user;
      
        }
      );
     

    }
  }
}
