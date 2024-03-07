import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule, Router } from '@angular/router';
import { TopBarComponent } from '../../top-bar/top-bar.component';
import { SideBarComponent } from '../side-bar/side-bar.component';

import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  FormsModule,
} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    TopBarComponent,
    SideBarComponent,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
  ],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css',
})
export class EditProductComponent {
  constructor(private _Router: Router) {}

  onDelete() {}

  updateProductForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    price: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required]),
    discount: new FormControl(null, [Validators.required]),
    first_name: new FormControl(null, [Validators.required]),
    images: new FormControl(null, [Validators.required]),
  });

  onEditProduct() {}
}
