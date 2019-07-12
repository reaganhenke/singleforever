import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedFlagsComponent } from './red-flags.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';
import { FacebookService } from 'ngx-facebook';

describe('RedFlagsComponent', () => {
  let component: RedFlagsComponent;
  let fixture: ComponentFixture<RedFlagsComponent>;

  const mockFacebookService = {
    ui: jest.fn()
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedFlagsComponent ],
      imports: [ ReactiveFormsModule, ClipboardModule ],
      providers: [{
        provide: FacebookService,
        useValue: mockFacebookService
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedFlagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
