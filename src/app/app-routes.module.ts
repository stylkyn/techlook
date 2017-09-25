import { HomepageComponent } from './pages/homepage/homepage.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


const APP_ROUTES: Routes = [
    { path: '', redirectTo: 'homepage', pathMatch: 'full' },
 //   { path: 'homepage', component: HomepageComponent},
    { path: 'homepage', loadChildren: 'app/pages/homepage/homepage.module#HomepageModule'},
    { path: 'contact', loadChildren: 'app/pages/contact/contact.module#ContactModule'},
];

@NgModule({
    imports: [ RouterModule.forRoot(APP_ROUTES) ],
    exports: [ RouterModule ],
})

export class AppRoutingModule {}

