import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ForgetpasswordComponent } from './forgetpassword.component';


 const route:Routes =[{
path:'',component:ForgetpasswordComponent
}]


@NgModule({
    imports:[RouterModule.forChild(route)],
    exports:[RouterModule]
})

export class  ForgetpasswordModule{

}