import { Component, OnInit } from '@angular/core';
import { texts } from './models/texts.model';

@Component({
  selector: 'app-ghosted',
  templateUrl: './ghosted.component.html',
  styleUrls: ['./ghosted.component.scss']
})
export class GhostedComponent implements OnInit {
  scrolled = 0;
  windowHeight = 0;
  scrollHeight = 0;
  numTexts = 0;

  constructor() { }

  ngOnInit() {
    this.windowHeight = document.getElementById('texts').clientHeight;
    this.scrollHeight = document.getElementById('texts').scrollHeight;
  }

  onScroll() {
    this.scrolled = document.getElementById('texts').scrollTop;

    // if at the bottom
    if (this.scrolled === (this.scrollHeight - this.windowHeight)) {

      const newText = document.createElement('div');
      newText.textContent = texts[(Math.floor(Math.random() * texts.length))];

      setTimeout(() => {
        document.getElementById('her').appendChild(newText);
        this.scrollHeight = document.getElementById('texts').scrollHeight;
        this.numTexts = document.getElementById('her').childNodes.length;
      }, 500);
    }
  }
}
