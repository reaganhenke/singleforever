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
  }, {
    path: 'whodate',
    loadChildren: () => import('./quiz-list/who-date/who-date.module').then(mod => mod.WhoDateModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizzesRoutingModule { }
