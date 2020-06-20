import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-users',
  templateUrl: './github-users.component.html',
  styleUrls: ['./github-users.component.css']
})
export class GithubUsersComponent implements OnInit {

  constructor() { }

  /*getUser(){

    this.userService.updateUserName(this.userName);
    this.userService.quoteRequest();
    this.user = this.userService.user;
  }*/

  ngOnInit(): void {
  }

}
