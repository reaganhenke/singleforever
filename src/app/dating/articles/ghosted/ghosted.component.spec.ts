import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GhostedComponent } from './ghosted.component';

describe('GhostedComponent', () => {
  let component: GhostedComponent;
  let fixture: ComponentFixture<GhostedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GhostedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GhostedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
