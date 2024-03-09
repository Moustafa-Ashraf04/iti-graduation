import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  FormsModule,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthAdminService } from './../../services/auth-admin.service';

@Component({
  selector: 'app-login-admin',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterLink,
    HttpClientModule,
  ],
  templateUrl: './login-admin.component.html',
  styleUrl: './login-admin.component.css',
})
export class LoginAdminComponent {
  error: string = '';

  constructor(
    private _Router: Router,
    private http: HttpClient,
    private AuthService: AuthAdminService
  ) {}

  loginAdminForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  submitlogin() {
    const formdata = new FormData();

    formdata.append('email', this.loginAdminForm.get('email')?.value);
    formdata.append('password', this.loginAdminForm.get('password')?.value);

    this.AuthService.loginAdmin(formdata).subscribe({
      next: (res) => {
        sessionStorage.setItem('adminToken', res.token);
        // this._AuthVendor.saveVendorData();
        // console.log(res.token);
        this._Router.navigate(['admin/dashboard']);
        // console.log(res.user);
      },
      error: (err) => console.log(err.error.error),

      complete: () => {},
    });
  }
}
