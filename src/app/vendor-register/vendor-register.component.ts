import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  FormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthServiceService } from '../services/auth-service.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-vendor-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    HeaderComponent,
    FooterComponent,
    FormsModule,
    CommonModule,
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
  ],
  templateUrl: './vendor-register.component.html',
  styleUrl: './vendor-register.component.css',
})
export class VendorRegisterComponent {
  is_loading: boolean = false;
  error: string = '';
  constructor(
    private _Router: Router,
  ) {}
  registerformvendor: FormGroup = new FormGroup({
    first_name: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(15),
    ]),
    last_name: new FormControl(null, [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(15),
    ]),
    business_name: new FormControl(null, [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(30),
    ]),
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(8),
    ]),
    confirmPassword: new FormControl(null, [
      Validators.required,
      Validators.minLength(8),
    ]),
    termsCheckbox: new FormControl(Validators.requiredTrue),
  });

  submitregistrationVendor(registerform: FormGroup) {
    // this.is_loading = true;
    // this.AuthService.signupVendor(registerform.value).subscribe({
    //   next: (response) => {
    //     // this.is_loading = false;
    //     // if (response.message === 'success') {
    //     //   this._Router.navigate(['/login']);
    //     // } else {
    //     //   this.error = response.message;
    //     // }
    //   },
    // });
    console.log(registerform.value);
  }
}
