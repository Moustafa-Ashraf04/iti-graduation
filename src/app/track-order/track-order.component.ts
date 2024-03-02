import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import {
  FormGroup,
  FormsModule,
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';

interface Country {
  name: string;
  code: string;
}

@Component({
  selector: 'app-track-order',
  standalone: true,
  imports: [
    RouterLink,
    HeaderComponent,
    FooterComponent,
    ButtonModule,
    CalendarModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    DropdownModule,
  ],
  templateUrl: './track-order.component.html',
  styleUrl: './track-order.component.css',
})
export class TrackOrderComponent {
  showForm1 = true;

  toggleForms() {
    this.showForm1 = !this.showForm1; // Toggle the flag to switch between forms
  }

  messages: string[] = ['Message 1', 'Message 2'];
  currentIndex: number = 0;

  toggleMessages(): void {
    this.currentIndex = (this.currentIndex + 1) % this.messages.length;
  }

  form1: FormGroup;
  form2: FormGroup;
  activeForm: number = 1;
  message: string = 'Message 1';

  constructor() {
    this.form1 = new FormGroup({
      // Define form controls for form 1
    });

    this.form2 = new FormGroup({
      // Define form controls for form 2
    });
  }

  toggleMessage(): void {
    this.message = this.activeForm === 1 ? 'Message 2' : 'Message 1';
  }

  switchForm(formNumber: number): void {
    this.activeForm = formNumber;
    this.message = this.activeForm === 1 ? 'Message 1' : 'Message 2';
  }
}
