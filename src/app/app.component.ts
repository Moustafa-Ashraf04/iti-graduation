import { AuthVendor } from './services/authVendor.service';
import { Component } from '@angular/core';
import { CommonModule, IMAGE_CONFIG } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RegisterComponent,
    HttpClientModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
}
