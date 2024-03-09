import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  NgControl,
  FormsModule,
  FormControl,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AdminDashboardService } from '../../services/admin-dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-methods',
  standalone: true,
  imports: [NavBarComponent, CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './payment-methods.component.html',
  styleUrl: './payment-methods.component.css',
})
export class PaymentMethodsComponent {
  payments: any[] = [];

  constructor(
    private _adminDashboard: AdminDashboardService,

    private router: Router
  ) {
    const adminToken = sessionStorage.getItem('adminToken');
    if (adminToken) {
      this._adminDashboard.getPaymentMethods(adminToken).subscribe(
        (res) => {
          this.payments = res.data;
        },
        (error) => {
          console.error('message:', error);
        }
      );
    } else {
      console.error('Admin token not found.');
    }
  }

  formdata: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
  });

  addPaymentMethod() {
    const formdata = new FormData();
    formdata.append('name', this.formdata.get('name')?.value);

    const adminToken = sessionStorage.getItem('adminToken');
    if (adminToken) {
      this._adminDashboard.addPaymentMethod(formdata, adminToken).subscribe({
        next: (res: any) => {
          console.log(res);
          this.formdata.reset();
          window.location.reload();
        },
        error: (error) => {
          console.log(error.error.errors, 'errors');
        },
      });
    }
  }

  deletePayment(paymentId: string) {
    const adminToken = sessionStorage.getItem('adminToken');
    console.log(adminToken);
    console.log(paymentId);

    if (adminToken) {
      this._adminDashboard.deletePaymentMethod(adminToken, paymentId).subscribe(
        (res) => {
          alert('Payment Deleted Successfully');
          location.reload();
        },
        (error) => {
          console.error('Error fetching products:', error);
          console.log(adminToken);
        }
      );
    }
  }
}
