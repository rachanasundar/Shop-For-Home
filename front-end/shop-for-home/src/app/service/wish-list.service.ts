import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { WishList } from '../class/wish-list';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WishListService {

  constructor(
    public http:HttpClient
  ) { }

  addToWishList(list:WishList):Observable<String>{
    return this.http.post("http://localhost:8282/wishList/addToWishList",list,{responseType:'text'})
  }
    getWishList(email:String):Observable<WishList[]>{
      return this.http.get<WishList[]>("http://localhost:8282/wishList/getWishList/"+email)
    }
    deleteFromWishList(key:any):Observable<String>{
      return this.http.patch("http://localhost:8282/wishList/deleteFromWishList",key,{responseType:'text'})
  
    }
}
