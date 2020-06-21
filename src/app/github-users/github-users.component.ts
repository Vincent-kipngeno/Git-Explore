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
  userName: string;
  users: User[];
  repos: any;
  constructor(private router:Router, private userService:UserService, private repoService:RepoService) {
  }
  getUser(){

    this.userService.updateUserName(this.userName);
    this.userService.quoteRequest();
    this.user = this.userService.user;
    this.repoService.getUserRepos(this.userName).subscribe(repositories =>{
      console.log(repositories);
      this.repos = repositories;
    })
  }

  goToUrl(){
    this.router.navigate(['/landing','vincent-kipngeno']);
  }


  ngOnInit(): void {

    }
  }
