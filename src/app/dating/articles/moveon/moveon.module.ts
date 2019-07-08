import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MoveonComponent } from './moveon.component';

@NgModule({
  declarations: [
    MoveonComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: MoveonComponent}])
  ]
})
export class MoveonModule { }
