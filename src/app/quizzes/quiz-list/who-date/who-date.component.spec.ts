import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoDateComponent } from './who-date.component';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';
import { FacebookService } from 'ngx-facebook';
import { dateQuestions } from './models/who-date.model';

describe('WhoDateComponent', () => {
  let component: WhoDateComponent;
  let fixture: ComponentFixture<WhoDateComponent>;
  let fb: FacebookService;

  Object.defineProperty(window, 'open', {
    configurable: true,
  });
  window.open = jest.fn();

  const mockFacebookService = {
    ui: jest.fn()
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhoDateComponent ],
      imports: [ ReactiveFormsModule, ClipboardModule ],
      providers: [{
        provide: FacebookService,
        useValue: mockFacebookService
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoDateComponent);
    fb = TestBed.get(FacebookService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select', () => {
    const value = dateQuestions[0].question;
    component.winner = 'winner';
    component.select(value, 'val');
    expect(component.whoDateForm.get(value).value).toBe('');
    component.winner = undefined;
    component.select(value, 'val');
    expect(component.whoDateForm.get(value).value).toBe('val');
  });

  it('should submit', () => {
    component.whoDateForm = new FormGroup({
      a: new FormControl('a'),
      b: new FormControl('b'),
      c: new FormControl('a')
    });
    component.submit();
    expect(component.winner).toBe('a');
    expect(component.whoDateForm.enabled).toBeFalsy();
  });

  it('should reset', () => {
    component.whoDateForm.reset = jest.fn();
    component.whoDateForm.enable = jest.fn();
    component.reset();
    expect(component.winner).not.toBeDefined();
    expect(component.whoDateForm.reset).toHaveBeenCalled();
    expect(component.whoDateForm.enable).toHaveBeenCalled();
  });

  it('should share', () => {
    component.share();
    expect(fb.ui).toHaveBeenCalled();
  });


  it('should tweet', () => {
    jest.spyOn(window, 'open');
    component.tweet();
    expect(window.open).toHaveBeenCalled();
  });


  it('should copy success', () => {
    jest.useFakeTimers();
    component.copySuccess();
    expect(component.copied).toBeTruthy();
    expect(setTimeout).toHaveBeenCalledWith(jasmine.any(Function), 1000);
    jest.advanceTimersByTime(1000);
    expect(component.copied).toBeFalsy();
    jest.useRealTimers();
  });
});
