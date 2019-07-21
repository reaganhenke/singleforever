import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, take } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  searchedForm: FormGroup;
  searchSubscription: Subscription;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router) {
    this.searchedForm = this.fb.group({searchInput: [{ value: '', disabled: true }]});
  }

  ngOnInit() {
    this.searchSubscription = this.route.queryParams.pipe(
    filter(params => params.q))
    .subscribe(params => {
      this.searchedForm.get('searchInput').setValue(params.q);
    });

  }

  closeSearch() {
    this.router.navigate(['/']);
  }

  ngOnDestroy() {
    this.searchSubscription.unsubscribe();
  }
}
