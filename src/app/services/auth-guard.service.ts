import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CanActivate } from '@angular/router/src/interfaces';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
     private auth: AuthService
  ) { }

  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot){

    console.log(next);

    if( this.auth.isAuthenticated() ){
      console.log('Access provided');
      return true;
    } else {
      console.log('error blocked');
      return false;
    }


  }
}
