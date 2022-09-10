import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgForm } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './homepage/navbar/navbar.component';
import { FooterComponent } from './homepage/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ProductComponent } from './product/product.component';
import { AdminloginComponent } from './pages/adminlogin/adminlogin.component';
import { AdminsignupComponent } from './pages/adminsignup/adminsignup.component';
import { AdmindashboardComponent } from './pages/admindashboard/admindashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { UserForAdminComponent } from './admin/user-for-admin/user-for-admin.component';
import { ProductForAdminComponent } from './admin/product-for-admin/product-for-admin.component';
import { UserdashboardComponent } from './pages/userdashboard/userdashboard.component';
import { SalesReportComponent } from './admin/sales-report/sales-report.component';
import { StockReportComponent } from './admin/stock-report/stock-report.component';
import { CartComponent } from './user/cart/cart.component';
import { OrdersComponent } from './user/orders/orders.component';
import { WishListComponent } from './user/wish-list/wish-list.component';
import { DiscountCouponsComponent } from './admin/discount-coupons/discount-coupons.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ProductComponent,
    AdminloginComponent,
    AdminsignupComponent,
    AdmindashboardComponent,
    ProductForAdminComponent,
    UserForAdminComponent,
    UserdashboardComponent,
    SalesReportComponent,
    StockReportComponent,
    CartComponent,
    OrdersComponent,
    WishListComponent,
    DiscountCouponsComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
