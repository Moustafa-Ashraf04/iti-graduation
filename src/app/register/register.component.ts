import { Component, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { PasswordModule } from 'primeng/password';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-registr',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    HeaderComponent,
    FooterComponent,
    PasswordModule,
    FormsModule,
    CalendarModule,
    CommonModule,
    RouterLink,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  is_loading: boolean = false;

  error: string = '';
  constructor(private _Router: Router) {}
  registerform: FormGroup = new FormGroup({
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
    phoneNumber: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^(012|010|011|015)\d{8}$/),
    ]),
    // country: new FormControl( [Validators.required]),
    country: new FormControl('', [Validators.required]),

    // validation for country
  });

  submitregistration(registerform: FormGroup) {
    // this.is_loading = true;
    // this._Auhtservices.signUp(registerform.value).subscribe({
    //   next: (response) => {
    //     this.is_loading = false;
    //     if (response.message === 'success') {
    //       this._Router.navigate(['/login']);
    //     } else {
    //       this.error = response.message;
    //     }
    //   },
    // });
    console.log(registerform.value);
  }
}
