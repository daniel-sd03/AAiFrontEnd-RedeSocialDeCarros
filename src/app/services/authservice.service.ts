import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor() { }

  login(){
    localStorage.setItem('isLoggedIn', 'true');
  }

  logout(){
    localStorage.clear();
  }

  isAuthenticated() : boolean{
    return (localStorage.getItem('isLoggedIn') === 'true');
  }

}
