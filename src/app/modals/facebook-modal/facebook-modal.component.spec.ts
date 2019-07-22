import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookModalComponent } from './facebook-modal.component';

describe('FacebookModalComponent', () => {
  let component: FacebookModalComponent;
  let fixture: ComponentFixture<FacebookModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacebookModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacebookModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
