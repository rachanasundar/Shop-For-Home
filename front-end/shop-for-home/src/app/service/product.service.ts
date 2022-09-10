import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Product } from '../class/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    public http:HttpClient
  ) { }

  loadAllProductsForUser():Observable<Product[]>{
    return this.http.get<Product[]>("http://localhost:8282/product/getAllProduct")
  }
  loadAllProductsForAdmin():Observable<Product[]>{
    return this.http.get<Product[]>("http://localhost:8181/product/getAllProduct")
  }
  storeProduct(product:Product):Observable<string>{
   return this.http.post("http://localhost:8181/product/storeProductInfo",product,{responseType:'text'})
 }
 
  updateProductName(product:any):Observable<string>{
    return this.http.patch("http://localhost:8181/product/updateProductName",product,{responseType:'text'})
  }
 
  updateProductPrice(product:any):Observable<string>{
    return this.http.patch("http://localhost:8181/product/updateProductPrice",product,{responseType:'text'})
  }
  updateProductImageUrl(product:any):Observable<string>{
    return this.http.patch("http://localhost:8181/product/updateProductImageUrl",product,{responseType:'text'})
  }
  updateProductStock(product:any):Observable<string>{
    return this.http.patch("http://localhost:8181/product/updateStock",product,{responseType:'text'})
  }
  updateProductCategory(product:any):Observable<string>{
    return this.http.patch("http://localhost:8181/product/updateCategory",product,{responseType:'text'})
  }
  deleteProductById(pid:number):Observable<string>{
    return this.http.delete("http://localhost:8181/product/deleteProductById/"+pid,{responseType:'text'})
  }

  searchProduct(text:String):Observable<Product[]>{
    return this.http.post<Product[]>("http://localhost:8181/product/search/",text)
  }
  searchProductUser(text:String):Observable<Product[]>{
    return this.http.post<Product[]>("http://localhost:8282/product/search/",text)
  }
}
