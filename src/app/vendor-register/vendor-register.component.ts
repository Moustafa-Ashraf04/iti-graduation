import { AuthVendor } from './../services/authVendor.service';
import { Component, NgModule, OnInit } from '@angular/core';
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
  ValidatorFn,
  AbstractControl,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Password } from 'primeng/password';
import { ThemeService } from '../services/theme.service';
import { NgClass } from '@angular/common';

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
    CommonModule,
    HttpClientModule,
  ],
  providers: [AuthVendor],
  templateUrl: './vendor-register.component.html',
  styleUrl: './vendor-register.component.css',
})
export class VendorRegisterComponent {
  is_loading: boolean = false;
  error: string = '';
  // backerror: string = '';
  frontidFile!: File;
  backidFile!: File;
  logoFile!: File;

  constructor(
    private _Router: Router,
    private http: HttpClient,
    private AuthService: AuthVendor,
public _themeservice:ThemeService

  ) {}

  passwordMatchValidator(control: AbstractControl) {
    return control.get('password')?.value ===
      control.get('confirmPassword')?.value
      ? null
      : { notmatching: true };
  }

  // Define the password match validator function

  addfrontid(event: any) {
    if (event.target.files.length > 0) {
      this.frontidFile = event.target.files[0];

      this.registerformvendor.patchValue({
        image: this.frontidFile,
      });
    }
  }
  addbackid(event: any) {
    if (event.target.files.length > 0) {
      this.backidFile = event.target.files[0];

      this.registerformvendor.patchValue({
        image: this.backidFile,
      });
    }
  }
  addlogo(event: any) {
    if (event.target.files.length > 0) {
      this.logoFile = event.target.files[0];

      this.registerformvendor.patchValue({
        image: this.logoFile,
      });
    }
  }

  registerformvendor: FormGroup = new FormGroup(
    {
      first_name: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15),
      ]),
      last_name: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15),
      ]),
      business_name: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(30),
      ]),
      email: new FormControl(null, [Validators.email, Validators.required]),
      phoneNumber: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^(012|010|011|015)\d{8}$/),
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
      ]),
      confirmPassword: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
      ]),
      frontid: new FormControl(null, Validators.required),
      backid: new FormControl(null, Validators.required),
      logopic: new FormControl(null, Validators.required),
      plan: new FormControl(null, Validators.required),
    },
    {
      validators: this.passwordMatchValidator,
    }
  );

  submitregistrationVendor() {
    this.is_loading = true;

    const formdata = new FormData();
    formdata.append('fname', this.registerformvendor.get('first_name')?.value);
    formdata.append('lname', this.registerformvendor.get('last_name')?.value);
    formdata.append('email', this.registerformvendor.get('email')?.value);
    formdata.append(
      'business_name',
      this.registerformvendor.get('business_name')?.value
    );
    formdata.append(
      'phone_number',
      this.registerformvendor.get('phoneNumber')?.value
    );
    formdata.append('password', this.registerformvendor.get('password')?.value);
    formdata.append('id_photo_front', this.frontidFile);
    formdata.append('id_photo_back', this.backidFile);
    formdata.append('logo_pic', this.logoFile);
    formdata.append('plan_id', this.registerformvendor.get('plan')?.value);

    this.AuthService.singupVendor(formdata).subscribe({
      next: (res) => {
        this.is_loading = false;
        // console.log(res);
        // console.log(this.registerformvendor.get('plan')?.value);
        alert(
          'Registered successfully. Your application is under verification for up to 24 hours. You will receive an email once verified.'
        );
        this.registerformvendor.reset();
        // if we want to navigate him to login
        // this._Router.navigate(['/login']);
      },
      error: (err) => console.log(err),
      complete: () => {},
    });

    // for testing after backend changes
    // this.AuthService.singupVendor(formdata).subscribe({
    //   next: (res) => {
    //     if (res.message === 'success') {
    //       alert(
    //         'Registered successfully. Your application is under verification for up to 24 hours. You will receive an email once verified.'
    //       );
    //       this.registerformvendor.reset();
    //     } else {
    //       this.error = res.message;
    //     }
    //   },
    //   error: (err) => console.log(err),
    //   complete: () => {},
    // });
  }
}

// doesnt show if there is an error with the data requested
// confirmpassword function is working but not showing the error in the page
