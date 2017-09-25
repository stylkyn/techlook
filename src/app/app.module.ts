import { DirectivesModule } from './directives/directives.module';
import { ContactModule } from './pages/contact/contact.module';
import { RouterModule } from '@angular/router';
import { HomepageModule } from './pages/homepage/homepage.module';
import { AppRoutingModule } from './app-routes.module';
import { ThemeModule } from './theme/theme.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA  } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    // base
    AppRoutingModule,
    BrowserModule,
    RouterModule,
    DirectivesModule,

    // plugins
    MDBBootstrapModule.forRoot(),

    // our modules
    HomepageModule,
    ContactModule,
    ThemeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA  ]
})
export class AppModule { }
