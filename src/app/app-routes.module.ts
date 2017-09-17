import { HomepageComponent } from './pages/homepage/homepage.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


const APP_ROUTES: Routes = [
//    { path: '', redirectTo: 'homepage', pathMatch: 'full' },
    // {
    //     path: 'dashboard',
    //     loadChildren: 'app/pages/dashboard/dashboard.module#DashboardModule'
    // },
    //  { path: 'homepage', component: HomepageComponent},
];

@NgModule({
    imports: [ RouterModule.forRoot(APP_ROUTES) ],
    exports: [ RouterModule ],
})

export class AppRoutingModule {}

