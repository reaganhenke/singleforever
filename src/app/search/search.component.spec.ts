import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let router: Router;
  let route: ActivatedRoute;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule, RouterTestingModule ],
      declarations: [ SearchComponent ],
      providers: [{
          provide: ActivatedRoute, useValue: {
            queryParams: of({ q: 'test' })
          }
    }]})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    router = TestBed.get(Router);
    route = TestBed.get(ActivatedRoute);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should subscribe and set value', () => {
    component.ngOnInit();
    expect(component.searchedForm.get('searchInput').value).toEqual('test');
  });

  it('should close search', () => {
    const spy = spyOn(router, 'navigate');
    component.closeSearch();
    expect(spy).toHaveBeenCalledWith(['/']);
  });

  it('should unsubscribe on destroy', () => {
    const spy = spyOn(component.searchSubscription, 'unsubscribe');
    component.ngOnDestroy();
    expect(spy).toHaveBeenCalled();
  });
});
