import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'quizzes',
    loadChildren: () => import('./quizzes/quizzes.module').then(mod => mod.QuizzesModule)
  },
  {
    path: 'dating',
    loadChildren: () => import('./dating/dating.module').then(mod => mod.DatingModule)
  },
  {
    path: 'lifestyle',
    loadChildren: () => import('./lifestyle/lifestyle.module').then(mod => mod.LifestyleModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(mod => mod.AboutModule)
  },
  {
    path: '**',
    redirectTo: '',
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
