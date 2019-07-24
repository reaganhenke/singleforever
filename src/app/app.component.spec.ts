import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';
import { FacebookService } from 'ngx-facebook';
import { ModalService } from './services/modal.service';
import { DomService } from './services/dom.service';

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

const mockFacebookService = {
  init: jest.fn()
};

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let fb: FacebookService;
  let modalService: ModalService;

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
      providers: [{
        provide: FacebookService,
        useValue: mockFacebookService
      },
      ModalService,
      DomService
    ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    fb = TestBed.get(FacebookService);
    modalService = TestBed.get(ModalService);
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'single-forever'`, () => {
    expect(app.title).toEqual('single-forever');
  });

  it(`should have as title 'single-forever'`, () => {
    app.ngOnInit();
    expect(fb.init).toHaveBeenCalled();
  });

  it(`should remove modal service'`, () => {
    const spy = spyOn(modalService, 'destroy');
    app.removeModal();
    expect(spy).toHaveBeenCalled();
  });
});
