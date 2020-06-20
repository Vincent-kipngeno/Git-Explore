import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
/*import 'rxjs/add/operator/map';*/
import {environment } from '../../environments/environment';
import { User } from '../user'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User;
  private userName: string;
  private error:boolean;
  users: User[];
  constructor(private http:HttpClient) {
    this.user = new User("", "", "", 0, 0)
    this.userName = "vincent-kipngeno"
  }

  quoteRequest(){

     interface ApiResponse{
       login:string;
       avatar_url:string;
       public_gists:number;
       public_repos:number
       location:string
     }
     let promise = new Promise((resolve,reject)=>{
       this.http.get<ApiResponse>(`https://api.github.com/users/${this.userName}?access_token=${environment.apiKey}`).toPromise().then(response=>{
         this.user.login = response.login;
         this.user.avatar_url = response.avatar_url;
         this.user.public_gists = response.public_gists;
         this.user.public_gists = response.public_gists;
         this.user.location = response.location;
         resolve()
       },
       error=>{
         console.log("error ocurred");
         this.error = true;
         reject(error)
       })
     })
     return promise
   }

   /*updateUserName(username: string){
     this.userName = username;
   }*/

}
