import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/class/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-for-admin',
  templateUrl: './user-for-admin.component.html',
  styleUrls: ['./user-for-admin.component.css']
})
export class UserForAdminComponent implements OnInit {
users:Array<User>=[]
flag:boolean=true
addFlag:boolean=false
updateFlag:boolean=false
storeMsg:String=''
updateMsg:String=''
deleteMsg:String=''
email:String=''
name:String=''
password:String=''
nameFlag:boolean=true
passFlag:boolean=true
  constructor(
    public userService:UserService
  ) { }

  ngOnInit(): void {
    this.loadAllUser()
  }
loadAllUser(){
this.userService.getAllUsers().subscribe(
  result=>this.users=result,
  error=>console.log(error)
)
}
storeBtn(){
  this.addFlag=true
  this.flag=false
    }
storeUser(userRef:NgForm){
this.userService.storeUser(userRef.value).subscribe(
  result=>{
    this.storeMsg=result
  alert(this.storeMsg)},
  error=>console.log(error),
  ()=>this.loadAllUser()
)
this.addFlag=false
}
updateBtn(user:User){
  this.updateFlag=true
  this.flag=false
this.email=user.email
this.password=user.password
this.name=user.name
}
updateName(){
let user={
  "email":this.email,
  "name" : this.name
}
this.userService.updateUserName(user).subscribe(
  result=>{
    this.updateMsg=result
  alert(this.updateMsg)},
  error=>console.log(error),
  ()=>this.loadAllUser()
)
this.nameFlag=false
}
updatePassword(){
  let user={
    "email":this.email,
    "password" : this.password
  }
  this.userService.updateUserPassword(user).subscribe(
    result=>{
      this.updateMsg=result
    alert(this.updateMsg)},
    error=>console.log(error),
    ()=>this.loadAllUser()
  )
  this.passFlag=false

}
delete(email:String){
this.userService.deleteUserById(email).subscribe(
  result=>{
    this.deleteMsg=result
  alert(this.deleteMsg)
  },
    error=>console.log(error),
    ()=>this.loadAllUser()
)
}
closeBtn(){
  this.updateFlag=false
  this.nameFlag=true
  this.passFlag=true
  this.flag=true
  this.addFlag=false
}
}
