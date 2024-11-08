  import { Injectable } from '@angular/core';
  import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

  @Injectable({
    providedIn: 'root'
  })
  export class AuthGuard implements CanActivate {

    constructor(private rota: Router) {}

    canActivate(){
      if(localStorage.getItem("isLoggedIn") === 'true'){
        return true;
      }else{
        this.rota.navigate(['/']);
        return false;
      }
    }
  }
