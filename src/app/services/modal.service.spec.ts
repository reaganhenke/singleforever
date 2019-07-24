import { async, TestBed } from '@angular/core/testing';
import { ModalService } from './modal.service';
import { DomService } from './dom.service';
import { of } from 'rxjs';
import { Component } from '@angular/core';

@Component({
  selector: 'app-mock-component',
  template: '<div></div>'
})
class MockComponent {}

describe('ModalService', () => {
  let service: ModalService;
  let domService: DomService;

  document.body.innerHTML = '<div id="modal-container"/> <div id="overlay"/> <div id="return-id"/>';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ ModalService, {
        provide: DomService,
        useValue: {
          removeComponent: jest.fn(),
          appendComponentTo: jest.fn()
        }
       }],
      })
    .compileComponents();
  }));

  beforeEach(() => {
    service = TestBed.get(ModalService);
    domService = TestBed.get(DomService);

    const element = document.getElementById('return-id');
    element.focus = jest.fn();
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should destroy on esc', () => {
    service.init(MockComponent, 'return-id');
    const spy = spyOn(service, 'destroy');

    const event = new KeyboardEvent('keydown', {key: 'Escape'});
    document.dispatchEvent(event);

    expect(spy).toHaveBeenCalled();
  });

  it('shouldn\'t destroy on other key presses', () => {
    service.init(MockComponent, 'return-id');
    const spy = spyOn(service, 'destroy');

    const event = new KeyboardEvent('keydown', {key: 'Space'});
    document.dispatchEvent(event);

    expect(spy).not.toHaveBeenCalled();
  });

  it('should destroy', () => {
    service.returnId = 'return-id';

    const modalElement = document.getElementById('modal-container');
    service.escListener = of(new KeyboardEvent('keypress')).subscribe();
    service.destroy();
    expect(modalElement.className).toEqual('hidden');
  });
});
