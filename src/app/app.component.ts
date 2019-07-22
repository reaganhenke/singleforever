import { Component, OnInit } from '@angular/core';
import { FacebookService } from 'ngx-facebook';
import { ModalService } from './services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'single-forever';

  constructor(private fb: FacebookService, private modalService: ModalService) {}

  ngOnInit() {
    const params = {
      appId: '707415399687104',
      xfbml: true,
      version: 'v3.3'
    };

    this.fb.init(params);
    // https://developers.facebook.com/apps/707415399687104/settings/basic/
  }

  removeModal() {
    this.modalService.destroy();
  }
}
