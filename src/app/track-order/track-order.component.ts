import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Component, NgModule, OnInit } from '@angular/core';
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
  Validators,
  AbstractControl,
  NgModel,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-track-order',
  standalone: true,
  imports: [
    RouterLink,
    HeaderComponent,
    FooterComponent,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
  ],
  templateUrl: './track-order.component.html',
  styleUrl: './track-order.component.css',
})
export class TrackOrderComponent {
  inputData: string = '';
  FileUrl = 'https://api.escuelajs.co/api/v1/files/';
  uploadFileNames: string[] = [];
  constructor(private http: HttpClient) {}
  uploadImage(event: any) {
    // debugger;
    const file = event.currentTarget.files[0];
    // console.log(file);
    // file to be only image/png and size less than 5 mb
    if (file.type === 'image/png' && file.size < 5000000) {
      const formObj = new FormData();

      formObj.append('file', file);
      // debugger;
      this.http
        .post('https://api.escuelajs.co/api/v1/files/upload', formObj)
        .subscribe((res: any) => {
          // debugger;
          console.log(res);

          this.uploadFileNames.push(res.fileName);
        });
      // to empty the input after uploading
      this.inputData = '';
    } else {
      if (file.size < 5000000) {
        alert('file size must be less than 2 MB');
      } else if (file.type !== 'image/png') {
        alert('only files with png extention');
      }
      this.inputData = '';
    }
  }
}


// i think this will include in the help center 
// remove everything in the html it was for testing only 