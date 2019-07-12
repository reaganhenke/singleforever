import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { texts } from './models/texts.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  showSearch = false;
  togglingSearch = false;
  currUrl: string;
  navListener: Subscription;
  text: string;
  time: string;

  searchForm = new FormGroup({
    searchInput: new FormControl({value: '', disabled: true})
  });

  constructor(private router: Router) { }

  ngOnInit() {
    this.navListener = this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((navEnd: NavigationEnd) => {
        const currentUrl = navEnd.urlAfterRedirects.split('/')[1];
        this.currUrl = currentUrl ? currentUrl : 'home';
        this.updateText();
      });
  }

  updateText() {
    this.text = texts[Math.floor(Math.random() * texts.length)];
    const today = new Date();
    let minutes = today.getMinutes().toString();
    minutes = (minutes.length) > 1 ? minutes : '0' + minutes;
    this.time = (today.getHours() % 12) + ':' + minutes + (today.getHours() < 12 ? 'am' : 'pm');
  }

  toggleSearch() {
    if (!this.togglingSearch) {
      if (this.showSearch) {
        this.showSearch = false;
        this.togglingSearch = true;
        setTimeout(() => {
          this.searchForm.get('searchInput').disable();
          this.togglingSearch = false;
        }, 500);
      } else {
        this.searchForm.get('searchInput').enable();
        this.togglingSearch = true;
        setTimeout(() => { this.showSearch = true; }, 10);
        setTimeout(() => {
          document.getElementById('searchInput').focus();
          this.togglingSearch = false;
        }, 500);
      }
    }
  }

  ngOnDestroy() {
    this.navListener.unsubscribe();
  }
}
