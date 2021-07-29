import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';
import { AdminAddUserComponent } from './admin-add-user/admin-add-user.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminUserUpdateComponent } from './admin-user-update/admin-user-update.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { CategoryListingComponent } from './category-listing/category-listing.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AdminComponent } from './admin/admin.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { AuthGuard } from './services/auth-guard.service';
import { RegisterComponent } from './register/register.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { UsereditprofileComponent } from './usereditprofile/usereditprofile.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {path:'', redirectTo:'homepage', pathMatch:'full'},
  {path:'register',component:RegisterComponent},
  {path:'userlogin',component:UserloginComponent},
  {path:'userprofile',component:UserprofileComponent},
  {path:'usereditprofile',component:UsereditprofileComponent},
  {path:'admin/users', component:AdminUsersComponent},
  {path:'admin/addUser', component: AdminAddUserComponent},
  {path: 'admin/users/update/:id', component:AdminUserUpdateComponent},
  {path: 'homepage', component: HomepageComponent},
  //{path:'category-listing', component:CategoryListingComponent},
  {path:'category-listing/:department', component: CategoryListingComponent},
  //{path:'product-detail', component:ProductDetailComponent},
  {path:'product-detail/:id', component: ProductDetailComponent},
  {path:'admin-login', component:AdminLoginComponent},
  {path:'admin', component:AdminComponent},
  {path:'admin/add-new-product', component:AddNewProductComponent},
  { path:'admin/manage-products', component:ManageProductsComponent},
  {path:'admin/manage-products/:id', component:ProductDetailsComponent},
  {path:'admin/manage-products/edit/:id', component:ProductUpdateComponent},
  { path: 'cart', component: CartComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation:'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
