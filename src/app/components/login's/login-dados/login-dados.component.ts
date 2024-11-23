import { Component } from '@angular/core';
import { AuthserviceService } from '../../../services/authService/authservice.service';
import { UsuarioService } from '../../../services/usuario/usuario.service';
import { Router } from '@angular/router';
import { Usuario } from '../../../usuario';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-dados',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login-dados.component.html',
  styleUrl: './login-dados.component.css'
})
export class LoginDadosComponent {
  usuarios: Usuario[] = [];
  login: String = "";
  senha: String = "";
  isLoginInvalid: boolean = false;

  constructor(private rota: Router, private usuarioService: UsuarioService, private authService: AuthserviceService) { }

  validarLogin() {
    this.usuarioService.getUsuarios().subscribe((dado) => {
      this.usuarios = dado;

      for (const usuario of this.usuarios){
        if ( (usuario.nomeUsuario == this.login || usuario.email == this.login) && usuario.senha == this.senha) {
          this.authService.login(usuario);//Enviando token de usuario logado
          this.rota.navigate(['/feed']);
          return;
        }
      }
      this.isLoginInvalid = true;
    })
  }
}
