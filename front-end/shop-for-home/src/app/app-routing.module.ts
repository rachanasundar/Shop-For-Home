import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscountCouponsComponent } from './admin/discount-coupons/discount-coupons.component';
import { ProductForAdminComponent } from './admin/product-for-admin/product-for-admin.component';
import { SalesReportComponent } from './admin/sales-report/sales-report.component';
import { StockReportComponent } from './admin/stock-report/stock-report.component';
import { UserForAdminComponent } from './admin/user-for-admin/user-for-admin.component';
import { AdmindashboardComponent } from './pages/admindashboard/admindashboard.component';
import { AdminloginComponent } from './pages/adminlogin/adminlogin.component';
import { AdminsignupComponent } from './pages/adminsignup/adminsignup.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserdashboardComponent } from './pages/userdashboard/userdashboard.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './user/cart/cart.component';

import { OrdersComponent } from './user/orders/orders.component';
import { WishListComponent } from './user/wish-list/wish-list.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'adminsignup',component:AdminsignupComponent},
  {path:'products', component:ProductComponent},
  {path:'viewProduct', component:ProductForAdminComponent},
  {path:'viewUser', component:UserForAdminComponent},
  {path:'admindashboard',component:AdmindashboardComponent},
  {path:'userdashboard',component:UserdashboardComponent},
  {path:'viewStocks',component:StockReportComponent},
  {path:'viewSales', component:SalesReportComponent},
  {path:'cart',component:CartComponent},
  {path:'wishlist', component:WishListComponent},
  {path:'orders',component:OrdersComponent},
  {path:'discoutCoupons', component:DiscountCouponsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
