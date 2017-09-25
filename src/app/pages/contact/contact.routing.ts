import { ContactComponent } from './contact.component';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const APP_ROUTES: Routes = [
    { path: '', component: ContactComponent },
];

export const contactRouting: ModuleWithProviders = RouterModule.forChild(APP_ROUTES);