import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

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
      });
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
