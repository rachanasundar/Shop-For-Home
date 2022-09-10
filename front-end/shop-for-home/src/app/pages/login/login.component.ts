import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
 import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  logInRef=new FormGroup({
    email:new FormControl("", Validators.required),
    password:new FormControl("",Validators.required)
    });
    logInMsg=""
    username:string=''

  constructor( 
    public userService:UserService,
    private router: Router) { 

  }

  ngOnInit(): void {
  }

  userLogin():void{
    let login = this.logInRef.value
    // console.log(login)
    this.userService.userLogin(login).subscribe(
      result=>
      {this.logInMsg=result;
        alert(this.logInMsg);
            if(this.logInMsg.includes("Sucess")){
              sessionStorage.setItem("userLogInFlag", "1")
              sessionStorage.setItem("userEmail",login.email)
              this.router.navigateByUrl('/userdashboard');
            }
        }
          ,
      error=>console.log(error)
    )
  }

}
