import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { routes } from '../pages/pages.routing-module';


export const route: Routes = [{
    path: 'auth',
    component: AuthComponent,
    children: [
        { path: '', redirectTo: 'login', pathMatch: 'full' },
        {
            path: 'login',
            loadChildren: () => import('./login/login.module').then(omar => omar.LoginModule)
        }
        ,
        {
            path: 'forgetpassword',
            loadChildren: () => import('./forgetpassword/forgetpassword.module').then(omar => omar.ForgetPasswordModule)
        }
    ]
}]





@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})





export class AuthRoutingModule {

}