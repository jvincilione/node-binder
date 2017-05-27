import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: ':slug', component: PageComponent },
    { path: ':slug/:slug2', component: PageComponent },
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes);
