import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveonComponent } from './moveon.component';

describe('MoveonComponent', () => {
  let component: MoveonComponent;
  let fixture: ComponentFixture<MoveonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoveonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should move', () => {
    component.idx = 1;
    component.move(1);
    expect(component.idx).toEqual(2);
    component.move(-1);
    expect(component.idx).toEqual(1);
  });
});
