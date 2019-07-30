import { NgModule } from '@angular/core';
import { DatingComponent } from './dating.component';
import { DatingRoutingModule } from './dating-routing.module';
import { PreviewsModule } from 'app/previews.module';

@NgModule({
  declarations: [
    DatingComponent
  ],
  imports: [
    DatingRoutingModule,
    PreviewsModule
  ],
  exports: [
  ],
  providers: [],
})
export class DatingModule { }
