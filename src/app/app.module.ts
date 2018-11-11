import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpModule } from '@angular/http';
import { Routes , RouterModule} from '@angular/router';

import { NguCarouselModule } from '@ngu/carousel';

import { AppComponent } from './app.component';
import { SampleComponent } from './slider/slider.component';
import { NavComponent } from './nav/nav.component';
import { WrapComponent } from './wrap/wrap.component';
import { TopComponent } from './top/top.component';
import { ExploreComponent } from './explore/explore.component';
import { FooterComponent } from './footer/footer.component';
import { AboutBodyComponent } from './about/about-body/about-body.component';
import { HomeComponent } from './home/home.component';
import { AboutTeamComponent } from './about/about-body/about-team/about-team.component';



const appRoutes: Routes = [
    { path: 'about', component: AboutBodyComponent },
    { path: '', component: HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    NavComponent,
    WrapComponent,
    TopComponent,
    ExploreComponent,
    FooterComponent,
    AboutBodyComponent,
    HomeComponent,
    AboutTeamComponent,
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    HttpModule,
    RouterModule.forRoot(appRoutes),
    NguCarouselModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  bootstrap: [AppComponent]
})

export class AppModule { }
