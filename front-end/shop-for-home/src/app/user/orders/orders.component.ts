import { asLiteral } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Cart } from 'src/app/class/cart';
import { Discount } from 'src/app/class/discount';
import { Order } from 'src/app/class/order';
import { CartService } from 'src/app/service/cart.service';
import { DiscountService } from 'src/app/service/discount.service';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
noOrder:boolean=false
newOrder:boolean=false
couponFLag:boolean=false
email:String=''
total:number=0
newTotal:number=0
size:number=0
listOfCart:Array<Cart>=[]
mycart:Array<Cart>=[]
coupons:Array<String>=[]
userDiscount:Array<Discount>=[]
discount:number=0
listOfOrder:Array<Order>=[]
listOfOrderWithCoupon:Array<Order>=[]
dateTime:Date=new Date()
finalBill:boolean=false
allOrders:boolean=true
finalBill1:boolean=false
  constructor(
    public cartService:CartService,
    public discountService:DiscountService,
    public orderService:OrderService,
    private router: Router
  ) { }

  ngOnInit(): void {
    let obj=sessionStorage.getItem("userEmail")
    if(obj!=null){
      this.email=obj
    }
    let obj1=sessionStorage.getItem("order")
    if(obj1!=null&&obj1=="1"){
      this.newOrder=true
      this.noOrder=false
      this.allOrders=false
      this.loadCart()
      sessionStorage.removeItem("order")
    }
    this.getAllOrders()
  }
loadCart(){
  if(this.email!=null){
    // let user:String=this.email
       this.cartService.getCart(this.email).subscribe(
      result=>
      {
        this.listOfCart=result
        this.size=this.listOfCart.length
        this.mycart=this.listOfCart
        this.total=0
        this.allOrders=false
        this.listOfCart.forEach(cart => {
          this.total+=cart.productPrice
          
        });
      this.getStoredCoupon()
      },
      error=>console.log(error)
    )
  }
  
}
getStoredCoupon(){
this.discountService.getStoredCoupon().subscribe(
result=>{
  this.coupons=result
  // console.log(this.coupons)
},error=>console.log(error)
)
}

verifyCoupon(couponRef:NgForm){
  let code=couponRef.value

let couponCode:any={
    "email":this.email,
    "coupon":code.couponApplied

}
console.log(couponCode)
this.discountService.verifyCoupons(couponCode).subscribe(
  result=>{
    this.discount=result
    console.log(result)
    if(result==0){
      alert(code.couponApplied+ " Coupons is not Alloted to you")
    }else{
      alert(code.couponApplied+ " Coupons: "+result+"% Discount")
      this.couponFLag=true
      this.newOrder=false
      this.noOrder=false
      this.allOrders=false
      this.newTotal=0
      this.mycart.forEach(cart => {
      cart.productPrice=cart.productPrice-(cart.productPrice*this.discount/100)
        this.newTotal+=cart.productPrice
      });
    }
  },error=>console.log(error)
)


}

close(){
  this.couponFLag=false
      this.newOrder=true
      this.noOrder=false
      this.allOrders=false
     this.loadCart() 
}

bill(){
  console.log(this.listOfCart)
  console.log(this.total)
  console.log(this.dateTime)
  this.listOfCart.forEach(cart => {
    let newOrder:Order={
      "keys":{
        "dateAndTime":this.dateTime.toDateString(),
        "email":this.email,
    "productId":cart.keys.productId},
    "productName":cart.productName,
      "productPrice":cart.productPrice,
      "imageUrl":cart.imageUrl,
      "quantity":cart.quantity,
      "categories": cart.categories
  }
  this.listOfOrder.push(newOrder)
  });
  console.log(this.listOfOrder)
  this.orderService.placeOrder(this.listOfOrder).subscribe(
    result=>{
    alert(result)
  
    },error=>console.log(error)
  )
  this.finalBill=true
  this.newOrder=false
  this.allOrders=false

}
billWithCoupon(){
  console.log(this.mycart)
  console.log(this.newTotal)
  console.log(this.dateTime)
  this.mycart.forEach(cart => {
    let newOrder:Order={
      "keys":{
        "dateAndTime":this.dateTime.toDateString(),
        "email":this.email,
    "productId":cart.keys.productId},
    "productName":cart.productName,
      "productPrice":cart.productPrice,
      "imageUrl":cart.imageUrl,
      "quantity":cart.quantity,
      "categories": cart.categories
  }
  this.listOfOrderWithCoupon.push(newOrder)
  });
  console.log(this.listOfOrderWithCoupon)
  this.orderService.placeOrder(this.listOfOrderWithCoupon).subscribe(
    result=>{
    alert(result)
  
    },error=>console.log(error)
  )
  this.finalBill1=true
  this.newOrder=false
  this.allOrders=false
  this.couponFLag=false
}
//Thu 10 Feb 2022 17:29:41

pay(){
  this.finalBill=false
  this.finalBill1=false
  this.allOrders=true
  this.couponFLag=false
  alert("Order Placed Successfully")
  this.cartService.deleteAllFromCart(this.email).subscribe(
    result=>
    alert(result),error=>console.log(error),
    ()=>this.getAllOrders()

  )

    }

    pay1(){
      this.finalBill=false
      this.finalBill1=false
      this.allOrders=true
      this.couponFLag=false
      alert("New Order Placed Successfully")
      this.cartService.deleteAllFromCart(this.email).subscribe(
        result=>
        alert(result),error=>console.log(error),
        ()=>this.getAllOrders()
    
      )
    }

allOrderList:Array<Order>=[]
getAllOrders(){
  this.orderService.getOrder(this.email).subscribe(
    result=>{
      console.log(result);
      this.allOrderList=result
      if(this.allOrderList.length==0){
        this.noOrder=true
      }else if(!this.newOrder){
        this.allOrders=true
      }

    },error=>console.log(error)
  )
}
}

