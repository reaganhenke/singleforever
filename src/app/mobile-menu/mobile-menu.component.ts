import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss']
})
export class MobileMenuComponent {
  closed = true;
  opening = false;

  constructor() { }

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
