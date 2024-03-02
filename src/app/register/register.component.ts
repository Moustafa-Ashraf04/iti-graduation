import { Component, NgModule } from '@angular/core';
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
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { PasswordModule } from 'primeng/password';
import { CalendarModule } from 'primeng/calendar';
import { AuthServiceService } from '../services/auth-service.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

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
    CalendarModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [AuthServiceService],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  is_loading: boolean = false;
  date: Date | undefined;
  error: string = '';
  constructor(
    private _Router: Router,
    private AuthService: AuthServiceService
  ) {}
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
    birthDate: new FormControl(null, Validators.required),
  });

  submitregistration(registerform: FormGroup) {
    this.is_loading = true;
    this.AuthService.signupUser(registerform.value).subscribe({
      next: (response) => {
        this.is_loading = false;
        if (response.message === 'success') {
          this._Router.navigate(['/login']);
        } else {
          this.error = response.message;
        }
      },
    });
    console.log(registerform.value);
  }
}
