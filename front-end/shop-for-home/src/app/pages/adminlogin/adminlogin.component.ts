import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  logInRef=new FormGroup({
    email:new FormControl("", Validators.required),
    password:new FormControl("",Validators.required)
    });
    logInMsg=""
  constructor(
  public admin:AdminService,
  private router: Router
  ) { }

  ngOnInit(): void {
  }
  adminLogin():void{
    let login = this.logInRef.value
    console.log(login)
    this.admin.adminLogIn(login).subscribe(
      result=>{
        this.logInMsg=result
      
        alert(this.logInMsg);
        if(this.logInMsg.includes("Success")){
          // console.log(this.logInMsg)
          sessionStorage.setItem("adminLogInFlag", "1")
          sessionStorage.setItem("adminEmail",login.email)
          // this.getUserName(login.email)
          this.router.navigateByUrl('');
        }
      },
      error=>console.log(error)
    ) 

  }
}
