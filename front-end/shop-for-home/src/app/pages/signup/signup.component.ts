import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signInRef=new FormGroup({
    email:new FormControl("", Validators.required),
    name:new FormControl("",Validators.required),
    password:new FormControl("",Validators.required)
    });
    signInMsg=""
  constructor(
      public user:UserService,
      private router: Router
  ) { }


  ngOnInit(): void {
  }
  storeUser():void{
    let signin = this.signInRef.value
    console.log(signin)
    this.user.userSignin(signin).subscribe(
      result=>{
        this.signInMsg=result
      alert(this.signInMsg)
      
            if(this.signInMsg.includes("Sucess")){
                 this.router.navigateByUrl('/login');
            }
        
    },
      error=>console.log(error)
     )

  }
}
