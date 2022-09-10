import { asLiteral } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Cart } from 'src/app/class/cart';
import { WishList } from 'src/app/class/wish-list';
import { CartService } from 'src/app/service/cart.service';
import { WishListService } from 'src/app/service/wish-list.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  email:String=''
  listOfCart:Array<Cart>=[]
  wishListMsg:String=''
  emptyFlag:boolean=false
  total:number=0
  i:number=1
  quantity:number=1
  constructor(
    public cartService:CartService,
    public wishListService:WishListService,
    private router: Router
  ) { }

  ngOnInit(): void {
    
    let obj=sessionStorage.getItem("userEmail")
    if(obj!=null){
      this.email=obj
    }
    this.loadCart()
  }
loadCart()
{
if(this.email!=null){
  let user:String=this.email
     this.cartService.getCart(user).subscribe(
    result=>
    {
      this.listOfCart=result
    // console.log(this.listOfCart)
    if(this.listOfCart.length==0){
      this.emptyFlag=true
    }else{
      this.total=0
      this.listOfCart.forEach(cart => {
        
        this.total+=cart.productPrice
        
      });
    }
    },
    error=>console.log(error)
  )
}
}
moveToWishList(cart:Cart){
  let key={
    "email" :cart.keys.email,
  "productId":cart.keys.productId,
  }
  let wishList:WishList={
    "keys":key,
    "productName":cart.productName,
    "productPrice":cart.productPrice,
    "imageUrl":cart.imageUrl,
    "categories": cart.categories
  }
  this.wishListService.addToWishList(wishList).subscribe(
    result=>{
      this.wishListMsg=result,
      alert(this.wishListMsg)
      this.deleteFromCart(key)
    },error=>console.log(error),
    ()=>this.loadCart()
  )
  
}
deleteFromCart(key:any){
  this.cartService.deleteFromCart(key).subscribe(
    result=>{
      this.wishListMsg=result,
      alert(this.wishListMsg)
    },error=>console.log(error),
    ()=>this.loadCart()
  )
}
qPid:number=0
productId(pid:number){
this.qPid=pid

}
updateQuantity(quantityRef:NgForm){
// console.log(quantityRef.value)
// console.log(this.qPid)
let q= quantityRef.value
let cart={
  "keys": {
    "email":this.email ,
    "productId": this.qPid
 },
"quantity": q.newQuantity
}
console.log(cart)
this.cartService.alterQuantity(cart).subscribe(
  result=>{
    alert(result)
  },error=>console.log(error),
  ()=>this.loadCart()
)
}

order(){
  this.router.navigateByUrl('orders')
  sessionStorage.setItem("order","1")
}
}
