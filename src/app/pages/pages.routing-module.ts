import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { AuthGuard } from './pages.guard';

export const routes: Routes = [{

    path: 'pages',

    component: PagesComponent,
    // canActivate: [AuthGuard],

    children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        {
            path: 'home',
            loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule)
        }
        ,
        {
            path: 'about',
            loadChildren: () => import('./about/about.module').then(mod => mod.AboutModule)

        }
        ,
        {
            path: 'contact',
            loadChildren: () => import('./contact/contact.module').then(mod => mod.ContactModule)
        }
    ]



}];







@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})










export class PagesRoutingModule {

}