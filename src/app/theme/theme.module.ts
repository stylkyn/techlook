import { DirectivesModule } from './../directives/directives.module';
import { RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeComponent } from './theme.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MDBBootstrapModule.forRoot(),
    DirectivesModule
  ],
  declarations: [ThemeComponent],
  schemas: [NO_ERRORS_SCHEMA],
  exports: [ThemeComponent]
})
export class ThemeModule { }