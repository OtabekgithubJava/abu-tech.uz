import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { AboutAbutechComponent } from './pages/about-abutech/about-abutech.component';
import { ResultsComponent } from './pages/results/results.component';
import { WhyStudyAtAbutechComponent } from './pages/why-study-at-abutech/why-study-at-abutech.component';
import { StudentsFeedbackComponent } from './pages/students-feedback/students-feedback.component';
import { PromoteAbutechComponent } from './pages/promote-abutech/promote-abutech.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { LocationComponent } from './pages/location/location.component';
import { ExamplesCaruselComponent } from './pages/examples-carusel/examples-carusel.component';
import { FooterComponent } from './pages/footer/footer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomeComponent,
    AboutAbutechComponent,
    ResultsComponent,
    WhyStudyAtAbutechComponent,
    StudentsFeedbackComponent,
    PromoteAbutechComponent,
    CoursesComponent,
    LocationComponent,
    ExamplesCaruselComponent,
    FooterComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
