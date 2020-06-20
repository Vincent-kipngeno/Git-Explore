import { Component, OnInit } from '@angular/core';
import { RepoService } from '../Repo-service/repo.service';
import { Router } from '@angular/router';
import {  ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-github-users-repos',
  templateUrl: './github-users-repos.component.html',
  styleUrls: ['./github-users-repos.component.css']
})
export class GithubUsersReposComponent implements OnInit {
  repos:any;
  constructor(private router:ActivatedRoute, private repoService:RepoService) { }

  ngOnInit(): void {
    let username = this.router.snapshot.paramMap.get('username');
    this.repoService.getUserRepos(username).subscribe(repositories =>{
      console.log(repositories);
      this.repos = repositories;
    })
  }

}
