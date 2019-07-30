import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  idxOne = '';
  idxTwo = 'whodate';
  templateIds = ['whodate', 'redflags', 'moveon', 'ghosted', 'mealprep', 'morning'];

  constructor() { }

  ngOnInit() {
    const numOne = Math.floor(Math.random() * 6);
    let numTwo: number;

    do {
      numTwo = Math.floor(Math.random() * 6);
    } while (numOne === numTwo);

    this.idxOne = this.templateIds[numOne];
    this.idxTwo = this.templateIds[numTwo];
  }
}
