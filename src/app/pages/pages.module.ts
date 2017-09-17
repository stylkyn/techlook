import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { HomepageComponent } from './homepage/homepage.component';
//import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  imports: [
    CommonModule,
//    MDBBootstrapModule.forRoot(),
    RouterModule
  ],
  declarations: [
    PagesComponent,
    HomepageComponent
  ],
  exports: [
    PagesComponent,
    HomepageComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class PagesModule { }