import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DogsurveyComponent } from './dogsurvey/dogsurvey.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CarouselComponent } from './carousel/carousel.component';
import { WhatwedoComponent } from './whatwedo/whatwedo.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {path: '',component: HomePageComponent},
  {path: 'survey', component: DogsurveyComponent}
]
import { DogregisterComponent } from './dogregister/dogregister.component';

@NgModule({
  declarations: [
    AppComponent,
    DogsurveyComponent,
    HomePageComponent,
    CarouselComponent,
    WhatwedoComponent,
    AboutusComponent,
    NavigationbarComponent,
    DogregisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
