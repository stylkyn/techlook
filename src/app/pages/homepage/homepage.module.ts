import { RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { homepageRouting } from './homepage.routing';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';

@NgModule({
  imports: [
    CommonModule,
    homepageRouting,
    MDBBootstrapModule.forRoot(),
    RouterModule
  ],
  declarations: [HomepageComponent],
  exports: [HomepageComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class HomepageModule { }