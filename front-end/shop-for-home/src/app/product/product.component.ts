import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cart } from '../class/cart';
import { Product } from '../class/product';
import { WishList } from '../class/wish-list';
import { CartService } from '../service/cart.service';
import { ProductService } from '../service/product.service';
import { WishListService } from '../service/wish-list.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
products:Array<Product>=[]
productsLowToHigh:Array<Product>=[]
productsHighToLow:Array<Product>=[]
userLogInFlag:boolean=false
email:String=''
cartMsg:String=''
wishListMsg:String=''
flag:boolean=true
lowToHighFlag:boolean=false
highToLowFlag:boolean=false
resultProduct:Array<Product>=[]
resultFlag:boolean=false
  constructor(
  
    public productService:ProductService,
    public cartService:CartService,
    public wishListService:WishListService
  ) { }

  ngOnInit(): void {
    this.loadAllProduct();
    let obj1=sessionStorage.getItem("userLogInFlag")
    let obj2=sessionStorage.getItem("userEmail")
    if(obj1!=null && obj1=="1"){
      // console.log(obj1)
      this.userLogInFlag=true
    }
    if(obj2!=null){
      console.log(obj2)
      this.email=obj2
    }
  }

  loadAllProduct(){
    this.productService.loadAllProductsForUser().subscribe(
      result=>{
        this.products=result
      },
      error=>console.log(error)
    )
  }
  //email get frm login success result 

  addToCart(product:Product){

    let cart:Cart={
      "keys":{
        "email" :this.email,
      "productId":product.productId,
      },
      "productName":product.productName,
      "productPrice":product.productPrice,
      "imageUrl":product.imageUrl,
      "quantity":1,
      "categories": product.categories
    }
    this.cartService.addToCart(cart).subscribe(
      result=>{
        this.cartMsg=result,
        alert(this.cartMsg)

      },error=>console.log(error)
      
    )
    // console.log(cart)
  }
  addToWishList(product:Product){

    let wishList:WishList={
      "keys":{
        "email" :this.email,
      "productId":product.productId,
      },
      "productName":product.productName,
      "productPrice":product.productPrice,
      "imageUrl":product.imageUrl,
      "categories": product.categories
    }
    this.wishListService.addToWishList(wishList).subscribe(
      result=>{
        this.wishListMsg=result,
        alert(this.wishListMsg)

      },error=>console.log(error)
      
    )
    
  }

  increasingPrice(){
      this.products.sort(
            (p1:Product,p2:Product)=>{
              return p1.productPrice-p2.productPrice
            })


  }
  decreasingPrice(){
        this.products.sort(
          (p1:Product,p2:Product)=>{
            return p2.productPrice-p1.productPrice
          })


  }

  search(searchRef:NgForm){
    this.flag=false
let text=searchRef.value
console.log(text)
this.productService.searchProductUser(text.searchText).subscribe(
  result=>{
    this.resultProduct=result
    console.log(result)
    if(this.resultProduct.length==0){
      alert("No product found")
    }
    this.resultFlag=true
  }
)

  }
  closeBtn(){
    
    this.flag=true
   
    this.resultFlag=false
  }
}
