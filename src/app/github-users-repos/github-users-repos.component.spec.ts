import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubUsersReposComponent } from './github-users-repos.component';

describe('GithubUsersReposComponent', () => {
  let component: GithubUsersReposComponent;
  let fixture: ComponentFixture<GithubUsersReposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubUsersReposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubUsersReposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
