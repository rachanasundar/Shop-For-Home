import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Admin } from '../class/admin';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
    public http:HttpClient
  ) { }
  adminRegistration(admin:Admin):Observable<string>{
    return this.http.post("http://localhost:8181/admin/adminSignIn",admin,{responseType:'text'})

  }
  adminLogIn(admin:Admin):Observable<string>{
    return this.http.post("http://localhost:8181/admin/adminLogIn",admin,{responseType:'text'})
  }
  adminLogOut(admin:Admin):Observable<string>{
    return this.http.get<string>("http://localhost:8181/admin/logout")
  }
}
