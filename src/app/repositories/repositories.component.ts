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
  isComplete:boolean;
  constructor(private repoService: RepoService) { }
  findRepository(){
    this.repo = this.repoService.repo;
    this.repos = this.repoService.repos;
    this.repoService.getRepos(this.repoName).subscribe((data) =>{
      console.log(data['items']);
      this.repos = data['items'];
      console.log(this.repos);
      if (data['total_count']=0) {
        this.isComplete = false;
      } else{
        this.isComplete = true;
      }
    },
    (error) => {
         this.isComplete = false;
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
      if (data['total_count']=0) {
        this.isComplete = false;
      } else{
        this.isComplete = true;
      }
    },
    (error) => {
         this.isComplete = false;
         console.error(error);
       });
  }

}
