import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import 'rxjs/Rx';
import { map } from 'rxjs/operators';
import {environment } from '../../environments/environment';
import { User } from '../user'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User;
  private userName: string;
  private error:boolean;
  users: User[] = [];
  constructor(private http:HttpClient) {
    this.user = new User("", "", "", 0, 0, "", "", "", true, "", "", 0, 0, new Date());
    this.userName = "vincent-kipngeno"

  }
  quoteRequest(){

    interface ApiResponse{
      login:string;
      avatar_url:string;
      public_gists:number;
      public_repos:number
      location:string;
      name: string;
      company: string;
      email: string;
      hireable: boolean;
      bio: string;
      twitter_username: string;
      followers: number;
      following: number;
      created_at: Date;
    }

     let promise = new Promise((resolve,reject)=>{
       this.http.get<ApiResponse>(`https://api.github.com/users/${this.userName}?access_token=${environment.apiKey}`).pipe(map(res => res)).toPromise().then(response=>{
         this.user.login = response.login;
         this.user.avatar_url = response.avatar_url;
         this.user.public_gists = response.public_gists;
         this.user.public_repos = response.public_repos;
         this.user.location = response.location;
         this.user.name = response.name;
         this.user.company = response.company;
         this.user.email = response.email;
         this.user.hireable = response.hireable;
         this.user.bio = response.bio;
         this.user.twitter_username = response.twitter_username;
         this.user.followers = response.followers;
         this.user.following = response.following;
         this.user.created_at = response.created_at;
         /*this.user = new User(response.login, response.avatar_url, response.location,  response.public_gists, response.public_repos, response.name, response.company, response.email, response.hireable,response.bio, response.twitter_username, response.followers, response.following, response.created_at);*/
         resolve()
       },
       error=>{
         console.log("error ocurred");
         this.error = true;
         reject(error)
       })
     })
     return promise;
   }

   getProfileRepos() {
     interface ApiResponse{
       login:string;
       avatar_url:string;
       public_gists:number;
       public_repos:number
       location:string;
       name: string;
       company: string;
       email: string;
       hireable: boolean;
       bio: string;
       twitter_username: string;
       followers: number;
       following: number;
       created_at: Date;
     }
  	return this.http.get<ApiResponse[]>(`https://api.github.com/users/${this.userName}/repos?access_token=${environment.apiKey}`)
  	.pipe(map(res => res));
  }

   /*updateUserName(username: string){
     this.userName = username;
   }*/

}
