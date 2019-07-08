import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MealprepComponent } from './mealprep.component';

@NgModule({
  declarations: [
    MealprepComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: MealprepComponent}])
  ]
})
export class MealprepModule { }
