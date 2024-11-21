import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from '../../usuario';
import { AuthserviceService } from '../../services/authService/authservice.service';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usuarios: Usuario[] = [];
  login: String = "";
  senha: String = "";
  isLoginInvalid: boolean = false;

  constructor(private rota: Router, private usuarioService: UsuarioService, private authService: AuthserviceService) { }


  validarLogin() {
    this.usuarioService.getUsuarios().subscribe((dado) => {
      this.usuarios = dado;

      for (const usuario of this.usuarios){
        if ( (usuario.login == this.login || usuario.email == this.login) && usuario.senha == this.senha) {
          this.authService.login(usuario);//Enviando token de usuario logado
          this.rota.navigate(['/feed']);
          return;
        }
      }
      this.isLoginInvalid = true;
    })
  }

  redirecionaCadastro() {
    this.rota.navigate(['/cadastro']);
  }
}
