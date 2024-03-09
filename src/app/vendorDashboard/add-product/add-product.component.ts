import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { TopBarComponent } from '../../top-bar/top-bar.component';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { HeaderComponent } from '../../header/header.component';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [RouterLink, TopBarComponent, ReactiveFormsModule,NgClass],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
})
export class AddProductComponent {
  constructor(private router: Router,public _themeservice:ThemeService) {}


  onSubmit(event: Event) {

    // Process form data here
    event.preventDefault(); // Prevent default form submission behavior

    this.router.navigate(['/dashboard/products']); // Redirect to desired route
  }
}
