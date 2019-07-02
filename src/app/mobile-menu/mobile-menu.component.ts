import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss']
})
export class MobileMenuComponent implements OnInit {
  closed = true;
  opening = false;

  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
    if (this.closed) {
      this.closed = false;
      setTimeout(() => {
        this.opening = true;
        document.body.style.overflow = 'hidden';
      }, 10);
    } else {
      this.opening = false;
      setTimeout(() => {
        this.closed = true;
        document.body.style.overflow = 'visible';
      }, 500);
    }
  }
}
