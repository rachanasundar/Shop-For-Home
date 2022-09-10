import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Cart } from '../class/cart';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(
    public http:HttpClient
  ) { }

  addToCart(cart:Cart):Observable<String>{
     return this.http.post("http://localhost:8282/cart/addToCart",cart,{responseType:'text'})

  }
  getCart(email:String):Observable<Cart[]>{
       return this.http.get<Cart[]>("http://localhost:8282/cart/getCart/"+email)
  }
  alterQuantity(cart:any):Observable<String>{
    return this.http.patch("http://localhost:8282/cart/alterQuantity",cart,{responseType:'text'})
  }
   deleteFromCart(key:any):Observable<String>{
    return this.http.patch("http://localhost:8282/cart/deleteFromCart/",key,{responseType:'text'})

  }

  deleteAllFromCart(email:String):Observable<String>{
    return this.http.delete("http://localhost:8282/cart/deleteAllFromCart/"+email,{responseType:'text'})
  }
}
