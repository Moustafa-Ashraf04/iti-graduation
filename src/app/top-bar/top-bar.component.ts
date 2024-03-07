import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css',
})
export class TopBarComponent {
  // toggleTheme: boolean = true;

  // darkMode: string = 'background-color: #000; color: red';

  // lightMode: string = 'background-color: #f0f1f3; color: #212529';

  // changeToggleTheme() {
  //   this.toggleTheme = !this.toggleTheme;
  // }
}

// 99% done 