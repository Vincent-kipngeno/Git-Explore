import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../User-service/user.service';
import { RepoService } from '../Repo-service/repo.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  user: User;
  userName: string;
  users: User[];
  repos: any;
  constructor(private userService:UserService, private repoService:RepoService) {
  }


  ngOnInit(): void {

    this.userService.quoteRequest();
    this.user = this.userService.user;
    this.repoService.getUserRepos("vincent-kipngeno").subscribe(repositories =>{
      console.log(repositories);
      this.repos = repositories;
    })


    }
  }
