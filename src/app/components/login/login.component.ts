import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from '../../usuario';
import { AuthserviceService } from '../../services/authService/authservice.service';
import { UsuarioService } from '../../services/usuario/usuario.service';

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

  constructor(private rota: Router, private usuarioService: UsuarioService, private authService: AuthserviceService) { }


  ValidarLogin() {
    this.usuarioService.getUsuarios().subscribe((dado) => {
      this.usuarios = dado;

      for (const usuario of this.usuarios){
        if (usuario.login == this.email && usuario.senha == this.senha) {
          this.authService.login(usuario);//Enviando token de usuario logado
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
