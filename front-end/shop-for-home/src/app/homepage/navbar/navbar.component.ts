import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userLogInFlag:boolean=false
  adminLogInFlag:boolean=false
  homeFlag:boolean=true
  constructor() { }

  ngOnInit(): void {
    console.log("Nav")
    let obj1=sessionStorage.getItem("userLogInFlag")
    let obj2=sessionStorage.getItem("adminLogInFlag")
    if(obj1!=null && obj1=="1"){
      // console.log(obj1)
      this.userLogInFlag=true
      this.homeFlag=false
      this.adminLogInFlag=false
    }
    if(obj2!=null && obj2=="1"){
      // console.log(obj1)
      this.userLogInFlag=false
      this.homeFlag=false
      this.adminLogInFlag=true
    }
  }

  logout()
{
  console.log(" log out")
  this.userLogInFlag=false
  this.adminLogInFlag=false
  this.homeFlag=true
  sessionStorage.removeItem("userLogInFlag")
  sessionStorage.removeItem("adminLogInFlag")
  alert("Logout Successful");
}
}
