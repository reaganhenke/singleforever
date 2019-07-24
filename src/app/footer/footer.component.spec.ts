import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import { ModalService } from 'app/services/modal.service';
import { DomService } from 'app/services/dom.service';
import { FacebookModalComponent } from 'app/modals/facebook-modal/facebook-modal.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let modalService: ModalService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ {
        provide: ModalService,
        useValue: {
          init: jest.fn()
        }
      }, DomService ],
      declarations: [ FooterComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    modalService = TestBed.get(ModalService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open modal', () => {
    component.openFacebookModal();
    expect(modalService.init).toHaveBeenCalledWith(FacebookModalComponent, 'facebook-link');
  });
});
