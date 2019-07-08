import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MorningComponent } from './morning.component';

@NgModule({
  declarations: [
    MorningComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: MorningComponent}])
  ]
})
export class MorningModule { }
