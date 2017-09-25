<<<<<<< HEAD
import { DirectivesModule } from './directives/directives.module';
import { ContactModule } from './pages/contact/contact.module';
import { RouterModule } from '@angular/router';
import { HomepageModule } from './pages/homepage/homepage.module';
import { AppRoutingModule } from './app-routes.module';
import { ThemeModule } from './theme/theme.module';
=======
>>>>>>> 330b361be59a9fc7129698a70c71ad60e4b23a73
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    // base
    AppRoutingModule,
    BrowserModule,
<<<<<<< HEAD
    RouterModule,
    DirectivesModule,

    // plugins
    MDBBootstrapModule.forRoot(),

    // our modules
    HomepageModule,
    ContactModule,
    ThemeModule,
=======
    MDBBootstrapModule.forRoot()
>>>>>>> 330b361be59a9fc7129698a70c71ad60e4b23a73
  ],
  providers: [],
  schemas: [ NO_ERRORS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
