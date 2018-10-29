import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { NavComponent } from './nav/nav.component';
import { WrapComponent } from './wrap/wrap.component';
import { TopComponent } from './top/top.component';
import { ExploreComponent } from './explore/explore.component';
import { FooterComponent } from './footer/footer.component';
import { HttpModule } from '@angular/http';
import { JasonService } from './json.service';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    NavComponent,
    WrapComponent,
    TopComponent,
    ExploreComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    HttpModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [JasonService],
  bootstrap: [AppComponent]
})

export class AppModule { }
