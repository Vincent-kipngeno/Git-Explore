import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import 'rxjs/add/operator/map';
import {environment } from '../../environments/environment';
import { User } from './user'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User;
  userName: string;
  error:boolean;
  constructor(private http:HttpClientModule) {
    this.user = new User("", "", "", "")
    this.userName = vincent-kipngeno
  }

  quoteRequest(){

     interface ApiResponse{
       login:string;
       avatar_url:string;
       public_gists:number;
       public_repos:number
     }
     let promise = new Promise((resolve,reject)=>{
       this.http.get<ApiResponse>(`https://api.github.com/users/${this.userName}?access_token=${environment.apiKey}`).map(res => res.json()).toPromise().then(response=>{
         this.error = false;
         this.user.login = response.login;
         this.user.avatar_url = response.avatar_url;
         this.user.public_gists = response.public_gists;
         this.user.public_gists = response.public_gists;

         resolve(response)
       },
       error=>{
         console.log("error ocurred");
         this.error = true;
         reject(error)
       })
     })
     return promise
   }

}
https://api.github.com/users/daneden?access_token=85587e4d58e56bc92d46526d6c53161828bc96cc
