import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from 'src/app/class/product';
import { ProductService } from 'src/app/service/product.service';
import {  NgForm } from '@angular/forms';
import { CSVRecord } from 'src/app/class/csvrecord';

@Component({
  selector: 'app-product-for-admin',
  templateUrl: './product-for-admin.component.html',
  styleUrls: ['./product-for-admin.component.css']
})
export class ProductForAdminComponent implements OnInit {
  products:Array<Product>=[]
  flag:boolean=true
  addFlag:boolean=false
  updateFlag:boolean=false
  nameFlag:boolean=true
  priceFlag:boolean=true
  urlFlag:boolean=true
  stockFlag:boolean=true
  categoriesFlag:boolean=true
  productId:number=0
  productName:String=''
  productPrice:number=0
  imageUrl  :String=''
  stock:number=0
  categories:String=''
  updateMsg:String=''
  storeMsg:String=''
  deleteMsg:String=''
  bulkFlag:boolean=false
  bulkFile:any=File
  newProduct:Array<any>=[]
  resultProduct:Array<Product>=[]
  resultFlag:boolean=false
  constructor(
    public productService:ProductService
  ) { }

  ngOnInit(): void {
    this.loadAllProduct()
  }
  loadAllProduct(){
    this.productService.loadAllProductsForAdmin().subscribe(
      result=>{ 
      this.products=result;
      console.log(this.products)},
      error=>console.log(error)
    )
     //console.log(this.products)
  }

  updateBtn(product:Product){
this.updateFlag = true
this.flag=false
//  console.log(product)
this.productId=product.productId
this.productName=product.productName
this.productPrice=product.productPrice
this.imageUrl=product.imageUrl
this.stock =product.stock
this.categories=product.categories
 }

  storeProductsBtn(){
this.addFlag=true
this.flag=false
  }
  storeProducts(productRef:NgForm){
       this.productService.storeProduct(productRef.value).subscribe(
      result=>{
        this.storeMsg=result
      alert(this.storeMsg)},
      error=>console.log(error),
      ()=>this.loadAllProduct()
    )
    console.log(productRef.value)
    this.addFlag=false
  }

  updateProductName(){
    let product ={
      "productId":this.productId,
      "productName":this.productName
    }
    this.productService.updateProductName(product).subscribe(
      result=>{
        this.updateMsg=result
        alert(this.updateMsg)
      },
      error=>console.log(error),
      ()=>this.loadAllProduct()
    )
this.nameFlag=false
  }


  updateProductPrice(){
    let product ={
      "productId":this.productId,
      "productPrice":this.productPrice
    }
    this.productService.updateProductPrice(product).subscribe(
      result=>{
        this.updateMsg=result
        alert(this.updateMsg)
      },
      error=>console.log(error),
      ()=>this.loadAllProduct()
    )
this.priceFlag=false
  }
  updateProductUrl(){
    let product ={
      "productId":this.productId,
      "imageUrl":this.imageUrl
    }
    this.productService.updateProductImageUrl(product).subscribe(
      result=>{
        this.updateMsg=result
        alert(this.updateMsg)
      },
      error=>console.log(error),
      ()=>this.loadAllProduct()
    )
this.urlFlag=false
  }
  updateProductStock(){
    let product ={
      "productId":this.productId,
      "stock":this.stock
    }
    this.productService.updateProductStock(product).subscribe(
      result=>{
        this.updateMsg=result
        alert(this.updateMsg)
      },
      error=>console.log(error),
      ()=>this.loadAllProduct()
    )
this.stockFlag=false
  }
  updateProductCategory(){
    let product ={
      "productId":this.productId,
      "categories":this.categories
    }
    this.productService.updateProductCategory(product).subscribe(
      result=>{
        this.updateMsg=result
        alert(this.updateMsg)
      },
      error=>console.log(error),
      ()=>this.loadAllProduct()
    )
this.categoriesFlag=false
  }
  closeBtn(){
    this.updateFlag=false
    this.nameFlag=true
    this.priceFlag=true
    this.urlFlag=true
    this.stockFlag=true
    this.categoriesFlag=true
    this.flag=true
    this.addFlag=false
    this.resultFlag=false
  }
  delete(pid:number){
console.log("d event")
this.productService.deleteProductById(pid).subscribe(
  result=>{
    this.deleteMsg=result
    alert(this.deleteMsg)
  },
  error=>console.log(error),
  ()=>this.loadAllProduct()
)
  }
  
  search(searchRef:NgForm){
    this.flag=false
let text=searchRef.value
console.log(text)
this.productService.searchProduct(text.searchText).subscribe(
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

  bulkBtn(){
    this.bulkFlag=true
    this.flag=false
  }
  onFileSelect($data:any) {
    if($data.target.files){
      var reader = new FileReader();
      reader.readAsDataURL($data.target.files[0]);
     console.log(reader)

  }
}



// //   public record:{
// // "productId":any,
// // "productName":any,
// // "productPrice":any,
// // "imageUrl":any,

// //   }

// //  records: Array<Product> = [];  
// //   @ViewChild('csvReader') csvReader: any;  
// //   uploadListener($event: any): void {  
  
// //     let text = [];  
// //     let files = $event.srcElement.files;  
  
// //     if (this.isValidCSVFile(files[0])) {  
  
// //       let input = $event.target;  
// //       let reader = new FileReader();  
// //       reader.readAsText(input.files[0]);  
  
// //       reader.onload = () => {  
// //         let csvData = reader.result;  
// //         let csvRecordsArray = (<string>csvData).split(/\r\n|\n/);  
  
// //         let headersRow = this.getHeaderArray(csvRecordsArray);  
  
// //         this.records = this.getDataRecordsArrayFromCSVFile(csvRecordsArray, headersRow.length);  
// //       console.log(this.records)
// //       };  
  
// //       reader.onerror = function () {  
// //         console.log('error is occured while reading file!');  
// //       };  
  
// //     } else {  
// //       alert("Please import valid .csv file.");  
// //       this.fileReset();  
// //     }  
// //   }  
  
// //   getDataRecordsArrayFromCSVFile(csvRecordsArray: any, headerLength: any) {  
// //     let csvArr = [];  
  
// //     for (let i = 1; i < csvRecordsArray.length; i++) {  
// //       let curruntRecord = (<string>csvRecordsArray[i]).split(',');  
// //       if (curruntRecord.length == headerLength) {  
// //         let csvRecord: CSVRecord = new CSVRecord();  
// //         csvRecord.productId = curruntRecord[0].trim();  
// //         csvRecord.productName = curruntRecord[1].trim();  
// //         csvRecord.productPrice = curruntRecord[2].trim();  
// //         csvRecord.imageUrl = curruntRecord[3].trim();  
// //         csvRecord.stock = curruntRecord[4].trim();  
// //         csvRecord.categories = curruntRecord[5].trim();  
// //         csvArr.push(csvRecord);  
// //       }  
// //     }  
// //     return csvArr;  
// //   }  
  
// //   isValidCSVFile(file: any) {  
// //     return file.name.endsWith(".csv");  
// //   }  
  
// //   getHeaderArray(csvRecordsArr: any) {  
// //     let headers = (<string>csvRecordsArr[0]).split(',');  
// //     let headerArray = [];  
// //     for (let j = 0; j < headers.length; j++) {  
// //       headerArray.push(headers[j]);  
// //     }  
// //     return headerArray;  
// //   }  
  
// //   fileReset() {  
// //     this.csvReader.nativeElement.value = "";  
// //     this.records = [];  
// //   }

 upload(){
 
   }
   //onFileSelect(event:any){

   //}
}



