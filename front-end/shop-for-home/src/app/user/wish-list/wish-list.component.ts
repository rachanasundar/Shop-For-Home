import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/class/cart';
import { WishList } from 'src/app/class/wish-list';
import { CartService } from 'src/app/service/cart.service';
import { WishListService } from 'src/app/service/wish-list.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {
  email:String=''
  listOfWishList:Array<WishList>=[]
  CartMsg:String=''
  emptyFlag:boolean=false
  constructor(
    public cartService:CartService,
    public wishListService:WishListService
  ) { }

  ngOnInit(): void {
    let obj=sessionStorage.getItem("userEmail")
    if(obj!=null){
      this.email=obj
    }
    this.loadWishList()
  }

  loadWishList(){
    if(this.email!=null){
      
         this.wishListService.getWishList(this.email).subscribe(
        result=>
        {
          this.listOfWishList=result
        // console.log(this.listOfWishList)
        if(this.listOfWishList.length==0){
          this.emptyFlag=true
        }

        },
        error=>console.log(error)
      )
    }
  }
  moveToCart(list:WishList){
    let key={
      "email" :list.keys.email,
    "productId":list.keys.productId,
    }
    let cart:Cart={
      "keys":key,
      "productName":list.productName,
      "productPrice":list.productPrice,
      "imageUrl":list.imageUrl,
      "quantity":1,
      "categories": list.categories
    }
    this.cartService.addToCart(cart).subscribe(
      result=>{
        this.CartMsg=result,
         alert(this.CartMsg)
        this.deleteFromWishList(key)
      },error=>console.log(error),
      ()=>this.loadWishList()
    )

  }

  deleteFromWishList(key:any){
    this.wishListService.deleteFromWishList(key).subscribe(
      result=>{
        this.CartMsg=result,
        alert(this.CartMsg)
      },error=>console.log(error),
      ()=>this.loadWishList()
    )
  }
}
