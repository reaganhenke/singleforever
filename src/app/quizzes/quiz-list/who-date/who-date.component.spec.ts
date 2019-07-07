import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoDateComponent } from './who-date.component';

describe('WhoDateComponent', () => {
  let component: WhoDateComponent;
  let fixture: ComponentFixture<WhoDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhoDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
