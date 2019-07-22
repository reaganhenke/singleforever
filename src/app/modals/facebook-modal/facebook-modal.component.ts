import { Component, OnInit } from '@angular/core';
import { ModalService } from 'app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './facebook-modal.component.html',
  styleUrls: ['./facebook-modal.component.scss', '../modals.scss']
})
export class FacebookModalComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  ngOnInit() {
    console.log('inititing');
    document.getElementById('test').focus();
  }

  public close() {
    this.modalService.destroy();
  }
}
