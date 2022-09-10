import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/class/order';
import { ReportService } from 'src/app/service/report.service';

@Component({
  selector: 'app-sales-report',
  templateUrl: './sales-report.component.html',
  styleUrls: ['./sales-report.component.css']
})
export class SalesReportComponent implements OnInit {
sales:Array<Order> =[]
  constructor(
    public reportService: ReportService 
  ) { }

  ngOnInit(): void {
  }
  getTodaysSales(){
    
    this.reportService.getTodaysSale().subscribe(
      result=>{
        this.sales=result
      },error=>console.log(error)
    )
  }
  getThisMonthsSales(){
    this.reportService.getMonthsSale().subscribe(
      result=>{
        
        this.sales=result
      },error=>console.log(error)
    )
  }
  getAllSales(){
    this.reportService.getAllSales().subscribe(
      result=>{
        this.sales=result
      },error=>console.log(error)
    )
   }
}
