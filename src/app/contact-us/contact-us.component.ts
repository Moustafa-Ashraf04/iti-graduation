import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { withLatestFrom } from 'rxjs';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [RouterLink, HeaderComponent, FooterComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css',
})
export class ContactUsComponent {

  // this is a placeholder page can change later 
  // need to see if we can send the form info to the back end to store that data 
}
