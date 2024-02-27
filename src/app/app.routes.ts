import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegistrComponent } from './registr/registr.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    title: 'Home',
  },
  {
    path: 'registr',
    component: RegistrComponent,
    title: 'registr',
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
