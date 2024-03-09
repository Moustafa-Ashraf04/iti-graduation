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
  selector: 'app-promo-codes',
  standalone: true,
  imports: [NavBarComponent, CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './promo-codes.component.html',
  styleUrl: './promo-codes.component.css',
})
export class PromoCodesComponent {
  promoCodes: any[] = [];

  constructor(
    private _adminDashboard: AdminDashboardService,

    private router: Router
  ) {
    const adminToken = sessionStorage.getItem('adminToken');
    if (adminToken) {
      this._adminDashboard.getAllPromoCodes(adminToken).subscribe(
        (res) => {
          this.promoCodes = res.promoCodes;
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
    code: new FormControl('', Validators.required),
    percentage: new FormControl(null, Validators.required),
  });

  addPromoCode() {
    const formdata = new FormData();
    formdata.append('code', this.formdata.get('code')?.value);
    formdata.append('percentage', this.formdata.get('percentage')?.value);

    const adminToken = sessionStorage.getItem('adminToken');
    if (adminToken) {
      this._adminDashboard.addPromo(formdata, adminToken).subscribe({
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

  deletePromo(promoId: string) {
    const adminToken = sessionStorage.getItem('adminToken');
    console.log(adminToken);
    console.log(promoId);

    if (adminToken) {
      this._adminDashboard.deletePromoCode(adminToken, promoId).subscribe(
        (res) => {
          alert('promo Deleted successfully');
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
