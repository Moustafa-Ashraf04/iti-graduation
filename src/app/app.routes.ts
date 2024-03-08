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
import { FlashDealsComponent } from './flash-deals/flash-deals.component';
import { CategoryProductsComponent } from './category-products/category-products.component';
import { VendorPlansComponent } from './vendor-plans/vendor-plans.component';
import { VendorDashboardComponent } from './vendorDashboard/vendor-dashboard/vendor-dashboard.component';
import { VendorOrdersComponent } from './vendorDashboard/vendor-orders/vendor-orders.component';
import { VendorProductsComponent } from './vendorDashboard/vendor-products/vendor-products.component';
import { AccountSettingsComponent } from './vendorDashboard/account-settings/account-settings.component';
import { RatingsComponent } from './vendorDashboard/ratings/ratings.component';
import { PromocodesComponent } from './vendorDashboard/promocodes/promocodes.component';
import { AddProductComponent } from './vendorDashboard/add-product/add-product.component';
import { VendorLoginComponent } from './vendor-login/vendor-login.component';
import { EditProductComponent } from './vendorDashboard/edit-product/edit-product.component';
import { AuthGuard } from './guards/vendor-auth-guard.guard';

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
    path: 'product/details/:id',
    component: DetailsComponent,
    title: 'Details',
  },
  {
    path: 'help-page',
    component: HelpPageComponent,
    title: 'help-page',
  },
  {
    path: 'vendor/register',
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
    component: CartComponent,
    title: 'cart',
  },
  {
    path: 'vendor/dashboard/orders',

    component: VendorOrdersComponent,
    title: 'Orders',
  },
  {
    path: 'vendor/dashboard/accountsettings',

    component: AccountSettingsComponent,
    title: 'Account Settings',
  },
  {
    path: 'vendor/dashboard/ratings',

    component: RatingsComponent,
    title: 'Ratings and Reviews',
  },
  {
    path: 'vendor/dashboard/promocodes',

    component: PromocodesComponent,
    title: 'Promo Codes',
  },
  {
    path: 'vendor/dashboard/products/addproduct',

    component: AddProductComponent,
    title: 'New Product',
  },
  {
    path: 'vendor/dashboard/product',

    component: EditProductComponent,
    title: 'Edit Product',
  },
  {
    path: 'vendor/dashboard/products',

    component: VendorProductsComponent,
    title: 'My Products',
  },
  {
    path: 'contactus',
    component: ContactUsComponent,
    title: 'Contact Us',
  },
  {
    path: 'vendor',
    component: VendorPlansComponent,
    title: 'Vendor Plans',
  },
  {
    path: 'vendor/login',
    component: VendorLoginComponent,
    title: 'Vendor Login',
  },
  {
    path: 'vendor/dashboard',
    canActivate: [AuthGuard],
    component: VendorDashboardComponent,
    title: 'Vendor Dashboard',
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login',
  },
  {
    path: 'deals',
    component: FlashDealsComponent,
    title: 'Flash Deals',
  },
  {
    path: 'category',
    component: CategoryProductsComponent,
    title: 'Category Products',
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
