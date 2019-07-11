import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { WhoDateComponent } from './who-date.component';
import { ClipboardModule } from 'ngx-clipboard';

@NgModule({
  declarations: [
    WhoDateComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    ClipboardModule,
    RouterModule.forChild([{path: '', component: WhoDateComponent}])
  ]
})
export class WhoDateModule { }
