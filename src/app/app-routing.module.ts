import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DatingComponent } from './dating/dating.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { AboutComponent } from './about/about.component';

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
    component: DatingComponent,
  },
  {
    path: 'lifestyle',
    component: LifestyleComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
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
