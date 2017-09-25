import { HomepageComponent } from './homepage.component';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const APP_ROUTES: Routes = [
    { path: '', component: HomepageComponent },
];

export const homepageRouting: ModuleWithProviders = RouterModule.forChild(APP_ROUTES);