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
import { PaymentComponent } from './help-page/payment/payment.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserProfileOrdersComponent } from './user-profile-orders/user-profile-orders.component';
import { vendorAuthGuard } from './guards/vendor-auth.guard';
import { adminAuthGuard } from './guards/admin-auth.guard';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { LoginAdminComponent } from './admin/login-admin/login-admin.component';
import { CategoriesComponent } from './admin/categories/categories.component';
import { VendorsComponent } from './admin/vendors/vendors.component';
import { PaymentMethodsComponent } from './admin/payment-methods/payment-methods.component';
import { ReviewsComponent } from './admin/reviews/reviews.component';
import { PromoCodesComponent } from './admin/promo-codes/promo-codes.component';

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
    title: 'details',
  },
  {
    path: 'help-page',
    component: HelpPageComponent,
    title: 'help-page',
    children: [
      { path: 'payment', component: PaymentComponent, title: 'help payment' },
    ],
  },
  {
    path: 'payment',
    component: PaymentComponent,
    title: 'help payment',
  },
  {
    path: 'user-profile/update-profile',
    component: UpdateProfileComponent,
    title: 'update profile',
  },
  {
    path: 'orders',
    component: UserProfileOrdersComponent,
    title: 'user profile orders',
  },

  {
    path: 'user-profile',
    component: UserProfileComponent,
    title: 'user profile',
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
    canActivate: [vendorAuthGuard],
    title: 'Orders',
  },
  {
    path: 'vendor/dashboard/accountsettings',
    component: AccountSettingsComponent,
    canActivate: [vendorAuthGuard],
    title: 'Account Settings',
  },
  {
    path: 'vendor/dashboard/ratings',
    component: RatingsComponent,
    canActivate: [vendorAuthGuard],
    title: 'Ratings and Reviews',
  },
  {
    path: 'vendor/dashboard/promocodes',
    component: PromocodesComponent,
    canActivate: [vendorAuthGuard],
    title: 'Promo Codes',
  },
  {
    path: 'vendor/dashboard/products/addproduct',
    component: AddProductComponent,
    canActivate: [vendorAuthGuard],

    title: 'New Product',
  },
  {
    path: 'vendor/dashboard/products/:id',
    component: EditProductComponent,
    canActivate: [vendorAuthGuard],
    title: 'Edit Product',
  },
  {
    path: 'vendor/dashboard/products',
    component: VendorProductsComponent,
    canActivate: [vendorAuthGuard],

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
    component: VendorDashboardComponent,
    canActivate: [vendorAuthGuard],
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
    path: 'admin',
    component: LoginAdminComponent,
    title: 'Admin Login',
  },
  {
    path: 'admin/dashboard',
    component: AdminDashboardComponent,
    canActivate: [adminAuthGuard],
    title: 'Admin Dashboard',
  },
  {
    path: 'admin/dashboard/categories',
    component: CategoriesComponent,
    canActivate: [adminAuthGuard],
    title: 'Admin Categories',
  },
  // {
  //   path: 'admin/dashboard/vendors',
  //   component: VendorsComponent,
  //   title: 'Admin vendors',
  // },
  // {
  //   path: 'admin/dashboard/reviews',
  //   component: VendorsComponent,
  //   title: 'Admin Reviews',
  // },
  // {
  //   path: 'admin/dashboard/paymentmethods',
  //   component: PaymentMethodsComponent,
  //   title: 'Admin Users Payments Methods',
  // },
  // {
  //   path: 'admin/dashboard/promocodes',
  //   component: PaymentMethodsComponent,
  //   title: 'Admin Promocodes',
  // },
  // {
  //   path: 'admin',
  //   component: LoginAdminComponent,
  //   children: [
  //     {
  //       path: 'dashboard',
  //       component: AdminDashboardComponent,
  //       canActivate: [adminAuthGuard],
  //       children: [
  //         {
  //           path: 'categories',
  //           component: CategoriesComponent,
  //           title: 'Admin Categories',
  //         },
  //         {
  //           path: 'vendors',
  //           component: VendorsComponent,
  //           title: 'Admin Vendors',
  //         },
  //         {
  //           path: 'reviews',
  //           component: ReviewsComponent,
  //           title: 'Admin Reviews',
  //         },
  //         {
  //           path: 'paymentmethods',
  //           component: PaymentMethodsComponent,
  //           title: 'Admin Payment Methods',
  //         },
  //         {
  //           path: 'promocodes',
  //           component: PromoCodesComponent,
  //           title: 'Admin Promo Codes',
  //         },
  //       ],
  //     },
  //   ],
  // },

  {
    path: '**',
    component: NotFoundComponent,
  },
];
