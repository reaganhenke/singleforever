import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoDateComponent } from './who-date.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';
import { FacebookService } from 'ngx-facebook';

describe('WhoDateComponent', () => {
  let component: WhoDateComponent;
  let fixture: ComponentFixture<WhoDateComponent>;

  const mockFacebookService = {
    ui: jest.fn()
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhoDateComponent ],
      imports: [ ReactiveFormsModule, ClipboardModule ],
      providers: [{
        provide: FacebookService,
        useValue: mockFacebookService
      }]
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
