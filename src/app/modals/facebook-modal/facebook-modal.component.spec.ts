import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookModalComponent } from './facebook-modal.component';
import { ModalService } from 'app/services/modal.service';
import { DomService } from 'app/services/dom.service';

describe('FacebookModalComponent', () => {
  let component: FacebookModalComponent;
  let fixture: ComponentFixture<FacebookModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ ModalService, DomService ],
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
