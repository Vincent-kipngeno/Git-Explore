import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { GithubUsersComponent } from './github-users/github-users.component';
import { GithubUsersReposComponent } from './github-users-repos/github-users-repos.component';
import { RepositoriesComponent } from './repositories/repositories.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    GithubUsersComponent,
    GithubUsersReposComponent,
    RepositoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
