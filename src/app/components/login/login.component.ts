import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../usuario';
import { provideHttpClient } from '@angular/common/http';
import { AuthserviceService } from '../../services/authservice.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usuarios: Usuario[] = [];
  email: String = "";
  senha: String = "";
  usariolog = {
    nome: '',
    login: ''
  };

  constructor(private rota: Router, private usuarioService: UsuarioService, private authService: AuthserviceService) { }


  ValidarLogin() {
    this.usuarioService.getUsuarios().subscribe((dado) => {
      this.usuarios = dado;

      for (const usuario of this.usuarios){
        if (usuario.login == this.email && usuario.senha == this.senha) {
          this.usariolog.nome =  usuario.nome;
          this.usariolog.login = usuario.login;
          localStorage.setItem('usariolog', JSON.stringify(this.usariolog));//enviando dados do usuario logado
          this.authService.login();//Enviando token de usuario logado
          this.rota.navigate(['/feed']);
          return;
        }
      }
      alert('Usuario invalido');
    })
  }

  redirecionaCadastro() {
    this.rota.navigate(['/cadastro']);
  }
}
