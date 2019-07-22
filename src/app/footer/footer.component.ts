import { Component } from '@angular/core';
import { ModalService } from 'app/services/modal.service';
import { FacebookModalComponent } from 'app/modals/facebook-modal/facebook-modal.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(private modalService: ModalService) { }

  openFacebookModal() {
    this.modalService.init(FacebookModalComponent, 'facebook-link');
  }
}
