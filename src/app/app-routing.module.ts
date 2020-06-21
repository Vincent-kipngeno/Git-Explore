import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { GithubUsersComponent } from './github-users/github-users.component';
import { GithubUsersReposComponent } from './github-users-repos/github-users-repos.component';
import { RepositoriesComponent } from './repositories/repositories.component';

const routes: Routes = [
  { path: 'landing', component: LandingPageComponent},
  { path: 'landing/:username', component: GithubUsersReposComponent},
  { path: 'users', component: GithubUsersComponent},
  { path: 'repos', component: RepositoriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
