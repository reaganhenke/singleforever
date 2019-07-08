import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GhostedComponent } from './ghosted.component';

@NgModule({
  declarations: [
    GhostedComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: GhostedComponent}])
  ]
})
export class GhostedModule { }
