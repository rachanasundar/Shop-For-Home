import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/class/product';
import { ReportService } from 'src/app/service/report.service';

@Component({
  selector: 'app-stock-report',
  templateUrl: './stock-report.component.html',
  styleUrls: ['./stock-report.component.css']
})
export class StockReportComponent implements OnInit {
stocks:Array<Product>=[]
isEmpty:boolean=false
  constructor(
    public reportService: ReportService 
  ) { }

  ngOnInit(): void {
    this.loadStock()
  }
 loadStock(){
   this.reportService.getAllStocks().subscribe(
     result=>{
       this.stocks=result
       if(this.stocks.length==0){
         this.isEmpty=true
       }
     },
     error=>console.log(error)
   )

 }
}
