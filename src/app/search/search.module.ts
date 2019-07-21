import { NgModule } from '@angular/core';
import { SearchComponent } from './search.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


const routes: Routes = [
  {
    path: '',
    component: SearchComponent,
  }
];

@NgModule({
  declarations: [
    SearchComponent,
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
  ],
  providers: [],
})
export class SearchModule { }
