import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showSearch = false;
  searchForm = new FormGroup({
    searchInput: new FormControl({value: '', disabled: true})
  });
  togglingSearch = false;

  constructor() { }

  ngOnInit() {
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

}
