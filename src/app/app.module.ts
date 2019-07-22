import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';
import { A11yModule } from '@angular/cdk/a11y';
import { FacebookModule } from 'ngx-facebook';
import { ClipboardModule } from 'ngx-clipboard';
import { FacebookModalComponent } from './modals/facebook-modal/facebook-modal.component';
import { ModalService } from './services/modal.service';
import { DomService } from './services/dom.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MobileMenuComponent,
    FacebookModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    A11yModule,
    ClipboardModule,
    FacebookModule.forRoot()
  ],
  providers: [
    ModalService,
    DomService
  ],
  entryComponents: [
    FacebookModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
