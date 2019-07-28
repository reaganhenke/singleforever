import { Component, OnInit } from '@angular/core';
import { recipes } from './models/recipes.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-mealprep',
  templateUrl: './mealprep.component.html',
  styleUrls: ['./mealprep.component.scss']
})
export class MealprepComponent implements OnInit {
  recipes = recipes;
  sortMethod = new FormControl('e-high');

  constructor() { }

  ngOnInit() {
  }

  updateSort() {
    console.log('sorting: ', this.sortMethod.value);
  }

  print(id: string) {
    document.getElementById(id).className = 'recipe-card';
    window.print();
    document.getElementById(id).className = 'recipe-card not-print';
  }

}
