import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import 'rxjs/Rx';
import { map } from 'rxjs/operators';
import { Repo } from '../repo';
import {environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RepoService {
  repos:Repo[]=[];
  repo:Repo;
  repoName:string;
  error:boolean;
  constructor(private http:HttpClient) {
    this.repoName = "Quotes";
  }

  getRepos() {
   return this.http.get(`https://api.github.com/search/repositories?q=tetris&per_page=1000?access_token=${environment.apiKey}`).pipe(map(res => res));
 }

  getUserRepos(username) {
   return this.http.get(`https://api.github.com/users/${username}/repos?access_token=${environment.apiKey}`)
   .pipe(map(res => res));
 }

}
/*https://api.github.com/search/repositories?q=tetris*/
 // this.http.get<ApiResponse>(`https://api.github.com/search/repositories?q=${this.repoName}?access_token=${environment.apiKey}`).pipe(map(res => res)).subscribe(data=>{
 //      // Succesful API request
 //       this.repo = new Repo(response.full_name, response.html_url, response.description,  response.language, response.stargazers_count);
 //       this.repos = data.items;/*new Quote(data.author, data.quote)*/
 //     },err=>{
 //         /*this.repo = new Q("Winston Churchill","Never never give up!")*/
 //         console.log("An error occurred")
 //     })
 // interface ApiResponse{
 //   total_count: number,
 //   incomplete_results: boolean,
 //   items:Repo[];/* [
  //   {
// //       full_name:string;
// //       html_url:string;
// //       description:string;
// //       language:string;
// //       stargazers_count:number;
// //     }
// //   ]*/
