import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizzesComponent } from './quizzes.component';

const routes: Routes = [
  {
    path: '',
    component: QuizzesComponent,
  }, {
    path: 'red',
    loadChildren: () => import('./quiz-list/red-flags/red-flags.module').then(mod => mod.RedFlagsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizzesRoutingModule { }
