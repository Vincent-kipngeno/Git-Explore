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

  constructor(private http:HttpClient) {

  }

  getUserRepos(username) {
   return this.http.get(`https://api.github.com/users/${username}/repos?access_token=${environment.apiKey}`)
   .pipe(map(res => res));
 }

}
