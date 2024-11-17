  import { Injectable } from '@angular/core';
  import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthserviceService } from '../services/authservice.service';

  @Injectable({
    providedIn: 'root'
  })
  export class AuthGuard implements CanActivate {

    constructor(private rota: Router, private authService: AuthserviceService) {}

    canActivate(){
      if(this.authService.isAuthenticated()){
        return true;
      }else{
        this.rota.navigate(['/']);
        return false;
      }
    }
  }
