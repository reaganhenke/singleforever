import { NgModule } from '@angular/core';
import { QuizzesComponent } from './quizzes.component';
import { QuizzesRoutingModule } from './quizzes-routing.module';

@NgModule({
  declarations: [
    QuizzesComponent,
  ],
  imports: [
    QuizzesRoutingModule
  ],
  exports: [
  ],
  providers: [],
})
export class QuizzesModule { }
