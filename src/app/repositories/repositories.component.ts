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
  constructor(private repoService: RepoService) { }

  ngOnInit(): void {
    this.repos = this.repoService.repos;
    this.repoService.getRepos().subscribe((data) =>{
      console.log(data['items']);
      this.repos = data['items'];
      console.log(this.repos);
    });
    this.repo = this.repoService.repo;
    //console.log(this.repos);
    console.log('hello');
  }

}
