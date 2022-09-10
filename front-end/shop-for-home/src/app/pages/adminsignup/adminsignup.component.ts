import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-adminsignup',
  templateUrl: './adminsignup.component.html',
  styleUrls: ['./adminsignup.component.css']
})
export class AdminsignupComponent implements OnInit {
  signInRef=new FormGroup({
    email:new FormControl("", Validators.required),
    name:new FormControl("",Validators.required),
    password:new FormControl("",Validators.required)
    });
    signInMsg=""
  constructor(
     public admin :AdminService
  ) { }

  ngOnInit(): void {
  }
  storeAdmin():void{
    let signin = this.signInRef.value
    console.log(signin)
    this.admin.adminRegistration(signin).subscribe(
      result=>{
      this.signInMsg=result
    alert(this.signInMsg)},

      error=>console.log(error)
    )
//display an alter msg of log in result 

  }
}
