import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DogsurveyComponent } from './dogsurvey/dogsurvey.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CarouselComponent } from './carousel/carousel.component';
import { WhatwedoComponent } from './whatwedo/whatwedo.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { RouterModule, Routes } from '@angular/router';
import { DogregisterComponent } from './dogregister/dogregister.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { CardComponent } from './card/card.component';
import { BrowsepageComponent } from './browsepage/browsepage.component';

const appRoutes: Routes = [
  {path: '',component: HomePageComponent},
  {path: 'survey', component: DogsurveyComponent},
  {path: 'register', component: DogregisterComponent},
  {path: 'login', component: LoginpageComponent},
  {path: 'card', component: CardComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    DogsurveyComponent,
    HomePageComponent,
    CarouselComponent,
    WhatwedoComponent,
    AboutusComponent,
    NavigationbarComponent,
    DogregisterComponent,
    LoginpageComponent,
    CardComponent,
    BrowsepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    NgbModule
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
