import { AnimateDirective } from './animate.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesComponent } from './directives.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AnimateDirective
  ],
  exports: [
    AnimateDirective
  ]
})
export class DirectivesModule { }