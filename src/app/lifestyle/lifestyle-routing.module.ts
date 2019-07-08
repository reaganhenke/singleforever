import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LifestyleComponent } from './lifestyle.component';

const routes: Routes = [
  {
    path: '',
    component: LifestyleComponent,
  }, {
    path: 'morning',
    loadChildren: () => import('./articles/morning/morning.module').then(mod => mod.MorningModule)
  }, {
    path: 'mealprep',
    loadChildren: () => import('./articles/mealprep/mealprep.module').then(mod => mod.MealprepModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LifestyleRoutingModule { }
