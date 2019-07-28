import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MealprepComponent } from './mealprep.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MealprepComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([{path: '', component: MealprepComponent}])
  ]
})
export class MealprepModule { }
