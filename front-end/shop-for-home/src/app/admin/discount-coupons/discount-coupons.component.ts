import { asLiteral } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Discount } from 'src/app/class/discount';
import { User } from 'src/app/class/user';
import { DiscountService } from 'src/app/service/discount.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-discount-coupons',
  templateUrl: './discount-coupons.component.html',
  styleUrls: ['./discount-coupons.component.css']
})
export class DiscountCouponsComponent implements OnInit {
discounts:Array<Discount>=[]
flag:boolean=true
addFlag:boolean=false
addFormFlag:boolean=false
updateFlag:boolean=false
email:String=""
coupon:String=""
discount:number=0
users:Array<User>=[]
  constructor(
    public discountService:DiscountService,
    public userService:UserService
  ) { }

  ngOnInit(): void {
    this.loadAllCoupons()
  }
loadAllCoupons(){
  this.discountService.getAllCoupon().subscribe(
    result=>{
      this.discounts=result
    },
  )
}
updateBtn(discount:Discount){
this.updateFlag=true
this.flag=false
this.email=discount.key.email
this.coupon=discount.key.coupon
this.discount=discount.discount
}
update(){
  let discountCoupon={
    "key":{
      "email":this.email,
      "coupon":this.coupon
  },
  "discount":this.discount
  }
this.discountService.updatCoupon(discountCoupon).subscribe(
  result=>{
     alert(result)
    this.closeBtn()
  },error=>console.log(error),
  ()=>this.loadAllCoupons()
  
)
}
closeBtn(){
  this.flag=true
this.updateFlag=false
this.addFlag=false
this.addFormFlag=false
}
delete(key:any){
  this.discountService.removeCoupon(key).subscribe(
    result=>{
      
      alert(result)
    },error=>console.log(error),
    ()=>this.loadAllCoupons()
  )
}
loadAllUser(){
  this.userService.getAllUsers().subscribe(
    result=>this.users=result,
    error=>console.log(error)
  )
  }
add(){
  this.updateFlag=false
this.flag=false
this.addFlag=true
this.loadAllUser()
}
addBtn(email:String){
this.email=email
this.coupon=''
this.discount=0
this.addFormFlag=true
this.addFlag=false
}

storeCoupon(){
  let newCoupon={
      "key":{
        "email":this.email,
        "coupon":this.coupon
    },
    "discount":this.discount
    }
this.discountService.storeCoupon(newCoupon).subscribe(
  result=>{
    alert(result)
    this.closeBtn()
  },error=>console.log(error),
  ()=>this.loadAllCoupons()

)
}
}
