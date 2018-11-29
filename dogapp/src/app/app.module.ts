import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DogsurveyComponent } from './dogsurvey/dogsurvey.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CarouselComponent } from './carousel/carousel.component';
import { WhatwedoComponent } from './whatwedo/whatwedo.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';

@NgModule({
  declarations: [
    AppComponent,
    DogsurveyComponent,
    HomePageComponent,
    CarouselComponent,
    WhatwedoComponent,
    AboutusComponent,
    NavigationbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
