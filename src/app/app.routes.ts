import { Routes } from '@angular/router';
import { LoginPageComponent} from "./ecomarket/pages/login-page/login-page.component";
import { LayoutComponent } from "./ecomarket/pages/layout/layout.component";
import { SignupPageComponent } from "./ecomarket/pages/signup-page/signup-page.component";
import {
  DonationsPageComponent
} from "./ecomarket/pages/donation-management/components/donations-page/donations-page.component";
import {EditProfileComponent} from "./ecomarket/components/profile/edit-profile/edit-profile.component";
import {ProductListComponent} from "./ecomarket/pages/product-list/product-list.component";
import { ProfileCustomerComponent } from "./ecomarket/pages/profile-customer/profile-customer.component";
import {AddProductComponent} from "./ecomarket/components/products/add-product/add-product.component";
import {EditProfileUserComponent} from "./ecomarket/components/profile/edit-profile-user/edit-profile-user.component";
import {PurchaseConfirmationComponent} from "./ecomarket/pages/purchase-confirmation/purchase-confirmation.component";
import {SellerProfileComponent} from "./ecomarket/components/seller-profile/seller-profile.component";
import {ProductListCustomersComponent} from "./ecomarket/pages/product-list-customers/product-list-customers.component";
import {ShoppingCartPageComponent} from "./ecomarket/pages/shopping-cart-page/shopping-cart-page.component";
import {CheckoutPageComponent} from "./ecomarket/pages/checkout-page/checkout-page.component";
import {PurchasesPageComponent} from "./ecomarket/pages/purchases-history/components/purchases-page/purchases-page.component";
import {ReviewListComponent} from "./ecomarket/pages/review-list/review-list.component";
import {ProductAddComponent} from "./ecomarket/pages/product-add/product-add.component";

export const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'edit-profile-user', component: EditProfileComponent
  },
  {
    path: 'login', component: LoginPageComponent
  },
  {
    path: 'signup', component: SignupPageComponent
  },
  {
    path: 'layout', component: LayoutComponent,
    /*children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      }
    ]*/
  },
  {
    path: 'donations',
    component: DonationsPageComponent
  },

  {
    path: 'profile-customer/:id',
    component: ProfileCustomerComponent
  },

  {
    path:'profile/edit-profile',
    component: EditProfileComponent
  },
  {
    path: 'profile/edit-user-profile/:id',
    component: EditProfileUserComponent
  },
  {
    path:'add-product',
    component: AddProductComponent
  },
  {
    path: 'Confirmation',
    component: PurchaseConfirmationComponent
  },

  {
    path: 'product-list', component: ProductListComponent
  },
  {
    path:'seller-profile',
    component: SellerProfileComponent
  },
  {
    path:'product-list-customers',
    component: ProductListCustomersComponent
  },
 {
    path: 'product-add',
    component: ProductAddComponent
  },
  {
    path:'review-list', component: ReviewListComponent
  },
  {
    path:'shopping-cart/:id',
    component: ShoppingCartPageComponent
  },
  {
    path: 'checkout/:cartId',
    component: CheckoutPageComponent
  },
  {
    path: 'user/purchases/history',
    component: PurchasesPageComponent
  }
];
