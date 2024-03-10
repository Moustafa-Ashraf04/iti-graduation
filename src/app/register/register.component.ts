import { Component, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  FormsModule,
  AbstractControl,
} from '@angular/forms';
import { CommonModule, NgClass } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CalendarModule } from 'primeng/calendar';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { TopBarComponent } from '../top-bar/top-bar.component';
import { ThemeService } from '../services/theme.service';
import { AuthUserService } from '../services/auth-user.service';

@Component({
  selector: 'app-registr',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    TopBarComponent,
    FormsModule,
    CalendarModule,
    CommonModule,
    RouterLink,
    CalendarModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    NgClass,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  is_loading: boolean = false;
  date: Date | undefined;
  error: string = '';
  constructor(
    private _Router: Router,
    public _themeservice: ThemeService,
    private _AuthUser: AuthUserService
  ) {}

  passwordMatchValidator(control: AbstractControl) {
    return control.get('password')?.value ===
      control.get('confirmPassword')?.value
      ? null
      : { notmatching: true };
  }
  registerform: FormGroup = new FormGroup(
    {
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
      address: new FormControl(null, Validators.required),
      birthDate: new FormControl(null, Validators.required),
    },
    {
      validators: this.passwordMatchValidator,
    }
  );



  submitregistration(registerform: FormGroup) {
    this.is_loading = true;
    const formdata = new FormData();

    formdata.append('fname', this.registerform.get('first_name')?.value);
    formdata.append('lname', this.registerform.get('last_name')?.value);
    formdata.append('email', this.registerform.get('email')?.value);
    formdata.append(
      'phone_number',
      this.registerform.get('phoneNumber')?.value
    );
    formdata.append('password', this.registerform.get('password')?.value);

    formdata.append('birth_date', this.registerform.get('birthDate')?.value);
    formdata.append('address', this.registerform.get('address')?.value);

      


    this._AuthUser.signupUser(formdata).subscribe({
      next: (res) => {
        this.is_loading = false;
        console.log(res);
        // console.log(this.registerformvendor.get('plan')?.value);
        alert('Registered successfully.');
        this.registerform.reset();
        // if we want to navigate him to login
        // this._Router.navigate(['/login']);
      },
      error: (err) => console.log(err),
      complete: () => {},
    });
  }
}
