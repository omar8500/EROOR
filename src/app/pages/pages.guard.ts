import { Injectable } from "@angular/core";
import { CanActivate } from '@angular/router';





@Injectable()
export class AuthGuard implements CanActivate{
    canActivate() 
    {
        const user = localStorage.getItem('user');
        if(user === 'omar')
        {
            return true;
        }
        else{
            return false;
        }
    }
}