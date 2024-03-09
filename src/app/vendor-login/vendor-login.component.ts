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

@Component({
  selector: 'app-vendor-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgClass,
    HeaderComponent,
    FooterComponent,
    FormsModule,
    RouterLink,
    TopBarComponent,
    HttpClientModule,
  ],
  providers: [AuthVendor],

  templateUrl: './vendor-login.component.html',
  styleUrl: './vendor-login.component.css',
})
export class VendorLoginComponent {
  backerror: string = '';
  error: string = '';
  isVendorLogin: boolean = false;

  constructor(
    private _Router: Router,
    private http: HttpClient,
    private AuthService: AuthVendor,
    public _themeservice:ThemeService
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

  loginform: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  submitlogin() {
    const formdata = new FormData();

    formdata.append('email', this.loginform.get('email')?.value);
    formdata.append('password', this.loginform.get('password')?.value);

    this.AuthService.login(formdata).subscribe({
      next: (res) => {
        localStorage.setItem('token', res.token);
        this.AuthService.saveVendorData();
        this._Router.navigate(['/vendor/dashboard']);
      },
      error: (err) => console.log(err.error.error),
      complete: () => {},
    });
  }
}


// no errors to display if the Credentials are incorrect check api response for that
