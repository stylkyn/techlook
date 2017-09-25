import { contactRouting } from './contact.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';

@NgModule({
  imports: [
    CommonModule,
    contactRouting
  ],
  declarations: [ContactComponent]
})
export class ContactModule { }