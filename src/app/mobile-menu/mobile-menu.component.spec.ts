import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileMenuComponent } from './mobile-menu.component';
import { RouterModule } from '@angular/router';

describe('MobileMenuComponent', () => {
  let component: MobileMenuComponent;
  let fixture: ComponentFixture<MobileMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileMenuComponent ],
      imports: [ RouterModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open menu if currently closed', () => {
    jest.useFakeTimers();

    component.closed = true;
    component.toggleMenu();
    expect(component.closed).toBeFalsy();
    jest.advanceTimersByTime(10);
    expect(component.opening).toBeTruthy();

    jest.useRealTimers();
  });

  it('should close menu if currently open', () => {
    jest.useFakeTimers();

    component.closed = false;
    component.opening = true;
    component.toggleMenu();
    expect(component.opening).toBeFalsy();
    jest.advanceTimersByTime(500);
    expect(component.closed).toBeTruthy();

    jest.useRealTimers();
  });
});
