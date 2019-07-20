import { Component } from '@angular/core';
import { steps } from './models/steps.model';

@Component({
  selector: 'app-moveon',
  templateUrl: './moveon.component.html',
  styleUrls: ['./moveon.component.scss']
})
export class MoveonComponent {
  steps = steps;
  idx = 0;

  constructor() { }

  move(d: number) {
    this.idx = this.idx + d;
  }

}
