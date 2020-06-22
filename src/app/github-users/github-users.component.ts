import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../User-service/user.service';
import { RepoService } from '../Repo-service/repo.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-github-users',
  templateUrl: './github-users.component.html',
  styleUrls: ['./github-users.component.css']
})
export class GithubUsersComponent implements OnInit {

  user: User;
  userName: string
  users: User[];
  repos: any;
  isComplete: boolean;
  constructor(private router:Router, private userService:UserService, private repoService:RepoService) {

  }
  getUser(){
    if (!this.userName) {
      this.userName = "alvin"
    }
    this.userService.updateUserName(this.userName);
    this.userService.quoteRequest();
    this.user = this.userService.user;
    this.repoService.getUserRepos(this.userName).subscribe(repositories =>{
      console.log(repositories);
      this.repos = repositories;
    })
  }

  goToUrl(){
    if (!this.userName) {
      this.userName = "alvin"
    }
    this.router.navigate(['/landing',this.userName ]);
  }


  ngOnInit(): void {
    this.userService.updateUserName("alvin");
    this.userService.quoteRequest();
    this.user = this.userService.user;
    this.repoService.getUserRepos("alvin").subscribe(repositories =>{
      console.log(repositories);
      this.repos = repositories;
      this.isComplete = true;
    },
    (error) => {
         this.isComplete = false;
         console.error(error);
       });
    }
  }
