import { Component } from '@angular/core';
import { TopBarComponent } from '../../top-bar/top-bar.component';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-account-settings',
  standalone: true,
  imports: [TopBarComponent, SideBarComponent, CommonModule],
  templateUrl: './account-settings.component.html',
  styleUrl: './account-settings.component.css',
})
export class AccountSettingsComponent {
  is_loading: boolean = false;
Plan: any;
}
