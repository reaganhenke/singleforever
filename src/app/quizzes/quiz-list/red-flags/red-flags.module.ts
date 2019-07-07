import { NgModule } from '@angular/core';
import { RedFlagsComponent } from './red-flags.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    RedFlagsComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild([{path: '', component: RedFlagsComponent}])
  ]
})
export class RedFlagsModule { }
