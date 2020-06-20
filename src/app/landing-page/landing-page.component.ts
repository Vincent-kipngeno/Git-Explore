import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../User-service/user.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  user: User;
  userName: string;
  constructor(private userService:UserService) {
  }


  ngOnInit(): void {

    this.userService.quoteRequest();
    this.user = this.userService.user;
  }

}
