import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { WhoDateComponent } from './who-date.component';

@NgModule({
  declarations: [
    WhoDateComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild([{path: '', component: WhoDateComponent}])
  ]
})
export class WhoDateModule { }
