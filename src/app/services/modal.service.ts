import { Injectable } from '@angular/core';
import { DomService } from './dom.service';
import { fromEvent, Subscription } from 'rxjs';

@Injectable()
export class ModalService {
  escListener: Subscription;
  returnId: string;

  constructor(private domService: DomService) {}

  private modalElementId = 'modal-container';
  private overlayElementId = 'overlay';

  init(component: any, returnId?: string) {
    this.returnId = returnId;
    this.domService.appendComponentTo(this.modalElementId, component);
    document.body.style.overflow = 'hidden';
    document.getElementById(this.modalElementId).className = 'show';
    document.getElementById(this.overlayElementId).className = 'show';
    // setTimeout(() => document.getElementById(this.overlayElementId).focus(), 1000);

    this.escListener = fromEvent(document, 'keydown').subscribe((e: KeyboardEvent) => {
      console.log('lIOGGING:');
      if (e.key === 'Escape') {
        this.destroy();
      }
    });
  }

  destroy() {
    this.domService.removeComponent();
    document.body.style.overflow = 'visible';
    document.getElementById(this.modalElementId).className = 'hidden';
    document.getElementById(this.overlayElementId).className = 'hidden';
    this.escListener.unsubscribe();
    document.getElementById(this.returnId).focus();
  }
}
