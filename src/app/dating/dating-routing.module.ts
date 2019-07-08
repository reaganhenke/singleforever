import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatingComponent } from './dating.component';

const routes: Routes = [
  {
    path: '',
    component: DatingComponent,
  }, {
    path: 'ghosted',
    loadChildren: () => import('./articles/ghosted/ghosted.module').then(mod => mod.GhostedModule)
  }, {
    path: 'moveon',
    loadChildren: () => import('./articles/moveon/moveon.module').then(mod => mod.MoveonModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatingRoutingModule { }
