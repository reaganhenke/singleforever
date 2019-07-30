import { NgModule } from '@angular/core';
import { QuizzesComponent } from './quizzes.component';
import { QuizzesRoutingModule } from './quizzes-routing.module';
import { PreviewsModule } from 'app/previews.module';

@NgModule({
  declarations: [
    QuizzesComponent,
  ],
  imports: [
    PreviewsModule,
    QuizzesRoutingModule
  ],
  exports: [
  ],
  providers: [],
})
export class QuizzesModule { }
