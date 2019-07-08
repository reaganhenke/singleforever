import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealprepComponent } from './mealprep.component';

describe('MealprepComponent', () => {
  let component: MealprepComponent;
  let fixture: ComponentFixture<MealprepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealprepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealprepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
