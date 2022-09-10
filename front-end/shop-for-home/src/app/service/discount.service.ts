import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs'
import { Discount } from '../class/discount';
@Injectable({
  providedIn: 'root'
})
export class DiscountService {

  constructor(
    public http:HttpClient
  ) { }

  getAllCoupon():Observable<Discount[]>{
    return this.http.get<Discount[]>("http://localhost:8383/discount/getAllCoupons")
  }

  storeCoupon(coupon:Discount):Observable<String>{
    return this.http.post("http://localhost:8383/discount/storeCoupon",coupon,{responseType:'text'})
  }
  updatCoupon(coupon:any):Observable<String>{
return this.http.patch("http://localhost:8383/discount/updatCoupon",coupon,{responseType:'text'})
  }
   
  removeCoupon(key:any):Observable<String>{
    return this.http.patch("http://localhost:8383/discount/removeCoupon",key,{responseType:'text'})
  }

  getStoredCoupon():Observable<String[]>{
    return this.http.get<String[]>("http://localhost:8383/discount/getStoredCoupons")
  }

  verifyCoupons(key:any):Observable<any>{
    return this.http.post("http://localhost:8383/discount/verifyCoupon",key)
  }
}
