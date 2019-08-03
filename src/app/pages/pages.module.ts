import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages.routing-module';
import { PagesComponent } from './pages.component';
import { AuthGuard } from './pages.guard';





@NgModule({
    imports:[PagesRoutingModule],
    declarations:[PagesComponent],
    providers:[AuthGuard]


})






export class PagesModule {

}