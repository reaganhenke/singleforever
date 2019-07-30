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
    this.updateSort();
  }

  updateSort() {
    switch (this.sortMethod.value) {
      case 'e-high':
        recipes.sort((a, b) => (a.energy > b.energy) ? -1 : 1);
        break;
      case 'e-low':
        recipes.sort((a, b) => (a.energy < b.energy) ? -1 : 1);
        break;
      case 'n-high':
        recipes.sort((a, b) => (a.nutrition > b.nutrition) ? -1 : 1);
        break;
      case 'n-low':
        recipes.sort((a, b) => (a.nutrition < b.nutrition) ? -1 : 1);
        break;
    }
  }

  print(id: string) {
    document.getElementById(id).className = 'recipe-card';
    window.print();
    document.getElementById(id).className = 'recipe-card not-print';
  }

}
