import { Injectable } from '@angular/core';
import { Usuario } from '../../usuario';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {
  urlUsuario = 'http://localhost:3000/usuarios';

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.urlUsuario);
  }

  getUsuariosId(id: number): Observable<Usuario> {
    const url = `${this.urlUsuario}/${id}`;
    return this.http.get<Usuario>(url);
  }

  cadastrarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.urlUsuario, usuario);
  }

  atualizarDados(id: number, usuario: Usuario): Observable<Usuario>{
    const url = `${this.urlUsuario}/${id}`;
    return this.http.put<Usuario>(url, usuario);
  }

  deletarUsuario(id: number): Observable<void>{
    const url = `${this.urlUsuario}/${id}`;
    return this.http.delete<void>(url);
  }
}
