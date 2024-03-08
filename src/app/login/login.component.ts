import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  FormsModule,
} from '@angular/forms';
import { CommonModule, NgClass } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { TopBarComponent } from '../top-bar/top-bar.component';
import { AuthVendor } from '../services/authVendor.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { ThemeService } from '../services/theme.service';
import { AuthUserService } from '../services/auth-user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FooterComponent,
    FormsModule,
    RouterLink,
    TopBarComponent,
    HttpClientModule,
    HeaderComponent,
    NgClass,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  // backerror: string = '';
  error: string = '';
  isuserLogin: boolean = false;

  constructor(
    private _Router: Router,
    private http: HttpClient,
    private AuthService: AuthUserService,
    public _themeservice: ThemeService
  ) {}
  ngOnInit(): void {
    this.AuthService.userToken.subscribe({
      next: () => {
        if (this.AuthService.userToken.getValue() != null) {
          this.isuserLogin = true;
        } else {
          this.isuserLogin = false;
        }
      },
    });
  }

  loginform: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  taggleDarkMood() {
    this._themeservice.toggleDarkMood();
  }
  submitlogin() {
    const formdata = new FormData();

    formdata.append('email', this.loginform.get('email')?.value);
    formdata.append('password', this.loginform.get('password')?.value);

    this.AuthService.loginUser(formdata).subscribe({
      next: (res) => {
        localStorage.setItem('userToken', res.token);
        this.AuthService.saveUserData();
        this._Router.navigate(['']);
      },
      error: (err) => console.log(err.error.error),
      complete: () => {},
    });
  }
}

// this is fixed for the vendor login for now
// need to adjust it after we get the user login and registration apis
