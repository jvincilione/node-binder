import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'pages', component: PageComponent },
    { path: 'pages/:pageId', component: PageComponent },
    { path: 'users', component: UserComponent },
    { path: 'users/:userId', component: UserComponent },
    { path: 'media', component: MediaComponent },
    { path: 'media/:mediaId', component: MediaComponent },
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes);
