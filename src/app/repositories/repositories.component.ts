import { Component, OnInit } from '@angular/core';
import { RepoService } from '../Repo-service/repo.service';
import { Repo } from '../repo';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  reposits:Array<any>;
  repos:Repo[];
  repo:Repo;
  repoName:string;
  constructor(private repoService: RepoService) { }
  findRepository(){
    this.repo = this.repoService.repo;
    this.repos = this.repoService.repos;
    this.repoService.getRepos(this.repoName).subscribe((data) =>{
      console.log(data['items']);
      this.repos = data['items'];
      console.log(this.repos);
    },
    (error) => {
         console.error(error);
       });

  }

  ngOnInit(): void {
    this.repo = this.repoService.repo;
    this.repos = this.repoService.repos;
    this.repoService.getRepos("tetris").subscribe((data) =>{
      console.log(data['items']);
      this.repos = data['items'];
      console.log(this.repos);
    },
    (error) => {
         console.error(error);
       });
  }

}
