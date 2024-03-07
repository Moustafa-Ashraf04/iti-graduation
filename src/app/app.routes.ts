import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { TrackOrderComponent } from './track-order/track-order.component';
import { VendorRegisterComponent } from './vendor-register/vendor-register.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CartComponent } from './cart/cart.component';
import { HelpPageComponent } from './help-page/help-page.component';
import { DetailsComponent } from './details/details.component';



export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    title: 'Home',
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: 'Register',
  },
  {
    path: 'details',
    component: DetailsComponent,
    title: 'details',
  },
  {
    path: 'help-page',
    component: HelpPageComponent,
    title: 'help-page',
  },
  {
    path: 'VendorRegister',
    component: VendorRegisterComponent,
    title: 'Register as vendor',
  },
  {
    path: 'trackorder',
    component: TrackOrderComponent,
    title: 'Track your order',
  },
  {
    path: 'cart',
    component:CartComponent ,
    title: 'cart',
  },
  {
    path: 'contactus',
    component: ContactUsComponent,
    title: 'Contact Us',
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login',
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
