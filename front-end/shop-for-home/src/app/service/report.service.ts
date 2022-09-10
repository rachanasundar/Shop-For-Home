import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Product } from '../class/product';
import { Order } from '../class/order';
@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(
    public http:HttpClient
  ) { }

  getAllStocks():Observable<Product[]>{
    return this.http.get<Product[]>("http://localhost:8484/stock/getAllStock")
  }

  getTodaysSale():Observable<Order[]>{
    return this.http.get<Order[]>("http://localhost:8484/sales/getTodaysSale")
  }
  getMonthsSale():Observable<Order[]>{
    return this.http.get<Order[]>("http://localhost:8484/sales/getMonthlySale")
  }
  getAllSales():Observable<Order[]>{
    return this.http.get<Order[]>("http://localhost:8484/sales/getAllSale")
  }

}
