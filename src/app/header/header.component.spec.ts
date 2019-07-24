import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { NavigationEnd, Router } from '@angular/router';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let router: Router;

  document.body.innerHTML = '<input id="searchInput"/> <div id="first-link"/>';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [ ReactiveFormsModule, RouterTestingModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    router = TestBed.get(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set currUrl', () => {
    TestBed.get(Router).events.next(new NavigationEnd(0, '/quizzes', '/quizzes/1'));
    expect(component.currUrl).toEqual('quizzes');
  });

  it('should set currUrl to home when /', () => {
    TestBed.get(Router).events.next(new NavigationEnd(0, '/', '/'));
    component.ngOnInit();
    expect(component.currUrl).toEqual('home');
  });

  describe('updateText', () => {
    it('should set current time', () => {
      global.Date.now = jest.fn(() => 1391234461000);
      component.updateText();
      expect(component.time).toEqual('1:01am');
    });

    it('should set current time and populate extra zeros', () => {
      global.Date.now = jest.fn(() => 1391237401000);
      component.updateText();
      expect(component.time).toEqual('1:50am');
    });

    it('should set time if pm', () => {
      global.Date.now = jest.fn(() => 1555091400000);
      component.updateText();
      expect(component.time).toEqual('1:50pm');
    });
  });

  describe('toggle search', () => {
    it('should navigate if something was searched', () => {
      component.searchForm.get('searchInput').setValue('query');
      component.showSearch = true;
      const spy = spyOn(router, 'navigate');
      component.toggleSearch();
      expect(spy).toHaveBeenCalledWith(['/search'], {queryParams: { q: 'query'}});
      expect(component.searchForm.get('searchInput').value).toEqual('');
    });

    it('shouldn\'t do anything if search is toggling', () => {
      component.togglingSearch = true;
      component.showSearch = false;
      component.toggleSearch();
      expect(component.showSearch).toBeFalsy();
    });

    it('should close search if currently open', () => {
      jest.useFakeTimers();

      component.showSearch = true;
      component.togglingSearch = false;
      component.searchForm.get('searchInput').enable();
      component.toggleSearch();
      expect(component.showSearch).toBeFalsy();
      expect(component.togglingSearch).toBeTruthy();
      expect(setTimeout).toHaveBeenCalledWith(jasmine.any(Function), 500);
      jest.advanceTimersByTime(500);
      expect(component.searchForm.get('searchInput').enabled).toBeFalsy();
      expect(component.togglingSearch).toBeFalsy();

      jest.useRealTimers();
    });

    it('should open search if currently closed', () => {
      jest.useFakeTimers();

      component.showSearch = false;
      component.togglingSearch = false;
      component.searchForm.get('searchInput').disable();
      component.toggleSearch();
      expect(component.togglingSearch).toBeTruthy();
      expect(component.searchForm.get('searchInput').enabled).toBeTruthy();
      jest.advanceTimersByTime(10);
      expect(component.showSearch).toBeTruthy();
      jest.advanceTimersByTime(490);
      expect(component.togglingSearch).toBeFalsy();

      jest.useRealTimers();
    });
  });

  it('should return notSearch', () => {
    component.currUrl = 'home';
    expect(component.notSearch).toBeTruthy();
    component.currUrl = 'search/?';
    expect(component.notSearch).toBeFalsy();
  });

  it('should unsubscribe on destroy', () => {
    const spy = spyOn(component.navListener, 'unsubscribe');
    component.ngOnDestroy();
    expect(spy).toHaveBeenCalled();
  });

  it('should skip nav', () => {
    const element = document.getElementById('first-link');
    element.scrollIntoView = jest.fn();
    element.focus = jest.fn();
    const scrollSpy = spyOn(element, 'scrollIntoView');
    const focusSpy = spyOn(element, 'focus');
    component.skipNav();
    expect(scrollSpy).toHaveBeenCalled();
    expect(focusSpy).toHaveBeenCalled();
  });
});
