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
import { QuizzesComponent } from './quizzes/quizzes.component';
import { DatingComponent } from './dating/dating.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { AboutComponent } from './about/about.component';
import { QuizzesModule } from './quizzes/quiz-list/quizzes.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MobileMenuComponent,
    QuizzesComponent,
    DatingComponent,
    LifestyleComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    A11yModule,
    QuizzesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
