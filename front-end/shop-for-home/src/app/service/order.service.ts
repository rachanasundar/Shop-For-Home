import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Order } from '../class/order';
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    public http:HttpClient
  ) { }

placeOrder(order:Array<Order>):Observable<String>{
  return this.http.post("http://localhost:8282/order/placeOrder",order,{responseType:'text'})
}

getOrder(email:String):Observable<Order[]>{
  return this.http.get<Order[]>("http://localhost:8282/order/getAllOrder/"+email)
}
}
