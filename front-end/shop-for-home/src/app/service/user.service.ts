import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../class/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    public http:HttpClient
  ) { }
  userLogin(user:User):Observable<string>{
    return this.http.post("http://localhost:8282/user/login", user,{responseType:'text'})
  }

  userSignin(user:User):Observable<string>{
return this.http.post("http://localhost:8282/user/register",user,{responseType:'text'})
  }

  userLogout():Observable<string>{
    return this.http.get<string>("http://localhost:8282/user/logout")
  }

  storeUser(user:User):Observable<string>{
return this.http.post("http://localhost:8181/user/storeUserInfo",user,{responseType:'text'})
  }

  getAllUsers():Observable<User[]>{
    return this.http.get<User[]>("http://localhost:8181/user/getAllUser")
  }

  updateUserName(user:any):Observable<string>{
    return this.http.patch("http://localhost:8181/user/updateUserName",user,{responseType:'text'})
  }

  updateUserPassword(user:any):Observable<string>{  
    return this.http.patch("http://localhost:8181/user/updateUserPassword",user,{responseType:'text'})
  }

  deleteUserById(email:String):Observable<string>{
    return this.http.delete("http://localhost:8181/user/deleteUserInfo/"+email,{responseType:'text'})
  }
  getUserName(email:String):Observable<string>{
    
    return this.http.get<string>("http://localhost:8282/user/userName/"+email)
  }
}
