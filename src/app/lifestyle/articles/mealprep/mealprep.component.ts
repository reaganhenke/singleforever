import { Component, OnInit } from '@angular/core';
import { recipes } from './models/recipes.model';

@Component({
  selector: 'app-mealprep',
  templateUrl: './mealprep.component.html',
  styleUrls: ['./mealprep.component.scss']
})
export class MealprepComponent implements OnInit {
  recipes = recipes;

  constructor() { }

  ngOnInit() {
  }

}
