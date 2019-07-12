import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedFlagsComponent } from './red-flags.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';
import { FacebookService } from 'ngx-facebook';

describe('RedFlagsComponent', () => {
  let component: RedFlagsComponent;
  let fixture: ComponentFixture<RedFlagsComponent>;
  let fb: FacebookService;

  Object.defineProperty(window, 'open', {
    configurable: true,
  });
  window.open = jest.fn();

  const mockFacebookService = {
    ui: jest.fn(() => new Promise(jest.fn()))
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedFlagsComponent ],
      imports: [ ReactiveFormsModule, ClipboardModule ],
      providers: [{
        provide: FacebookService,
        useValue: mockFacebookService
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedFlagsComponent);
    fb = TestBed.get(FacebookService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should submit', () => {
    jest.useFakeTimers();

    component.submit();
    expect(component.finished).toBeTruthy();
    expect(component.redFlagsForm.disabled).toBeTruthy();

    expect(setTimeout).toHaveBeenCalledWith(jasmine.any(Function), 10);
    jest.advanceTimersByTime(10);
    expect(component.heightPercent).toEqual('0%');
    jest.useRealTimers();
  });

  it('should reset', () => {
    component.redFlagsForm.reset = jest.fn();
    component.redFlagsForm.enable = jest.fn();
    component.reset();
    expect(component.finished).toBeFalsy();
    expect(component.redFlagsForm.reset).toHaveBeenCalled();
    expect(component.redFlagsForm.enable).toHaveBeenCalled();
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
