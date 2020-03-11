import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  canActivate() : boolean{
    if(localStorage.getItem('loggedIn')){
      return true
    }else{
      return false
    }
  }

  constructor() { }


}
