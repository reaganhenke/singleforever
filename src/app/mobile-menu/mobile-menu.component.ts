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
        window.onscroll = () => { window.scrollTo(0, 0); };
      }, 10);
    } else {
      this.opening = false;
      window.onscroll = () => {};
      setTimeout(() => { this.closed = true; }, 500);
    }
  }
}
