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
  constructor(private http:HttpClientModule) {
    this.user = new User("", "", "", "")
   }
}
https://api.github.com/users/daneden?access_token=85587e4d58e56bc92d46526d6c53161828bc96cc
