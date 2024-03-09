import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { CommonModule } from '@angular/common';
import { AdminDashboardService } from '../../services/admin-dashboard.service';
import {
  FormGroup,
  Validators,
  ReactiveFormsModule,
  FormsModule,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [NavBarComponent, CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent {
  categories: any[] = [];

  categoryImage!: File;

  addImage(event: any) {
    if (event.target.files.length > 0) {
      this.categoryImage = event.target.files[0];

      this.newCategory.patchValue({
        image: this.categoryImage,
      });
    }
  }

  // read categories
  constructor(private _adminDashboard: AdminDashboardService) {
    const adminToken = sessionStorage.getItem('adminToken');
    if (adminToken) {
      this._adminDashboard.getAllCategories().subscribe(
        (res) => {
          this.categories = res.data;
        },
        (error) => {
          console.error('message:', error);
        }
      );
    }
  }

  // create new category form
  newCategory: FormGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
    category_image: new FormControl(null, Validators.required),
  });

  createCategory() {
    const formdata = new FormData();
    formdata.append('name', this.newCategory.get('name')?.value);

    formdata.append('category_image', this.categoryImage);
    console.log(formdata);

    const adminToken = sessionStorage.getItem('adminToken');
    if (adminToken) {
      this._adminDashboard.addCategory(formdata, adminToken).subscribe({
        next: (res: any) => {
          this.newCategory.reset();
          window.location.reload();
        },
        error: (error) => {
          console.log(error.error.errors, 'errors');
        },
      });
    }
  }
  deleteCategory(categoryId: any) {
    const adminToken = sessionStorage.getItem('adminToken');
    if (adminToken) {
      this._adminDashboard.deleteCategory(adminToken, categoryId).subscribe(
        (res) => {
          location.reload();
        },
        (error) => {
          console.error('Error fetching products:', error);
        }
      );
    }
  }
  // editCategory(categoryId) {}
}
