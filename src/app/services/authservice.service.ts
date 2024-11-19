import { Injectable } from '@angular/core';
import { Usuario } from '../usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor() { }

  login(usuariolog: Usuario){
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('usuariolog', JSON.stringify(usuariolog));//Mantendo os dados do usario logado em cache
    alert(usuariolog);
  }

  logout(){
    localStorage.clear();
  }

  isAuthenticated() : boolean{
    return (localStorage.getItem('isLoggedIn') === 'true');
  }

  getUsuario(): Usuario | null {
    const usuarioString = localStorage.getItem('usuariolog');

    if (usuarioString) {
      return JSON.parse(usuarioString);  // Retorna o objeto do usuário
    }
    return null;  // Retorna null se o usuário não estiver no localStorage
  }

}
