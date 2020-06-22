import { Component, OnInit, ViewEncapsulation, AfterViewInit, Output, EventEmitter, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {
  navbarOpen = false;
  public clicked = false;
  _el: any;
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  constructor(private router: Router,) {}
  ngOnInit() {}
  onClick(event): void {
    event.preventDefault();
    event.stopPropagation();
    this.clicked = true;
  }
  /*@HostListener(‘document:click’, [‘event’])
  private clickedOutside(event): void {
    if (this.clicked) {
      this._el.nativeElement.querySelector(‘.dropdown-menu’).classList.toggle(‘show’);
    }
  }*/
}
