import { async, TestBed } from '@angular/core/testing';
import { DomService } from './dom.service';
import { Component } from '@angular/core';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

@Component({
  selector: 'app-mock-component',
  template: '<div></div>'
})
class MockComponent {}


describe('DomService', () => {
  let service: DomService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ DomService ],
      })
    .compileComponents();

    TestBed.overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [ MockComponent ]
      }
    });
  }));

  beforeEach(() => {
    service = TestBed.get(DomService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

});
