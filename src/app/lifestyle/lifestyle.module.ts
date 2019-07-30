import { NgModule } from '@angular/core';
import { LifestyleComponent } from './lifestyle.component';
import { LifestyleRoutingModule } from './lifestyle-routing.module';
import { PreviewsModule } from 'app/previews.module';

@NgModule({
  declarations: [
    LifestyleComponent
  ],
  imports: [
    LifestyleRoutingModule,
    PreviewsModule
  ],
  exports: [
  ],
  providers: [],
})
export class LifestyleModule { }
