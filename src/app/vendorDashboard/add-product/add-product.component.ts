import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { TopBarComponent } from '../../top-bar/top-bar.component';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [RouterLink, TopBarComponent, ReactiveFormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
})
export class AddProductComponent {
  constructor(private router: Router) {}

  onSubmit(event: Event) {
    // Process form data here
    event.preventDefault(); // Prevent default form submission behavior

    this.router.navigate(['/dashboard/products']); // Redirect to desired route
  }
}
