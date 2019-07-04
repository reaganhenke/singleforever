import { NgModule } from '@angular/core';
import { RedFlagsComponent } from './red-flags.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    RedFlagsComponent
  ],
  imports: [
    RouterModule.forChild([{path: '', component: RedFlagsComponent}])
  ]
})
export class RedFlagsModule { }
