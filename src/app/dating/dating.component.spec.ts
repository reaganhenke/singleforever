import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatingComponent } from './dating.component';

describe('DatingComponent', () => {
  let component: DatingComponent;
  let fixture: ComponentFixture<DatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
