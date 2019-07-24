import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookModalComponent } from './facebook-modal.component';
import { ModalService } from 'app/services/modal.service';
import { DomService } from 'app/services/dom.service';

describe('FacebookModalComponent', () => {
  let component: FacebookModalComponent;
  let fixture: ComponentFixture<FacebookModalComponent>;
  let modalService: ModalService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ {
        provide: ModalService,
        useValue: {
          destroy: jest.fn()
        }
      }, DomService ],
      declarations: [ FacebookModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacebookModalComponent);
    component = fixture.componentInstance;
    modalService = TestBed.get(ModalService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should destroy', () => {
    component.close();
    expect(modalService.destroy).toHaveBeenCalled();
  });
});
