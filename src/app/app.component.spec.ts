import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: '<p>Mock Header</p>'
})
class MockHeaderComponent {}

@Component({
  selector: 'app-footer',
  template: '<p>Mock Footer</p>'
})
class MockFooterComponent {}

@Component({
  selector: 'app-mobile-menu',
  template: '<p>Mock Mobile Menu</p>'
})
class MockMobileMenuComponent {}

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        MockHeaderComponent,
        MockFooterComponent,
        MockMobileMenuComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'single-forever'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('single-forever');
  });

});
