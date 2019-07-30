import { NgModule } from '@angular/core';

import { MoveonPreviewComponent } from './dating/article-previews/moveon/moveon.component';
import { GhostedPreviewComponent } from './dating/article-previews/ghosted/ghosted.component';
import { RouterModule } from '@angular/router';
import { MorningPreviewComponent } from './lifestyle/article-previews/morning/morning.component';
import { MealprepPreviewComponent } from './lifestyle/article-previews/mealprep/mealprep.component';
import { RedFlagsPreviewComponent } from './quizzes/quiz-previews/red-flags/red-flags.component';
import { WhoDatePreviewComponent } from './quizzes/quiz-previews/who-date/who-date.component';

const previews = [ MoveonPreviewComponent, GhostedPreviewComponent,
  MorningPreviewComponent, MealprepPreviewComponent,
  RedFlagsPreviewComponent, WhoDatePreviewComponent ];

@NgModule({
  declarations: [
    ...previews
  ],
  imports: [
    RouterModule
  ],
  exports: [
    ...previews
  ]
})
export class PreviewsModule { }
