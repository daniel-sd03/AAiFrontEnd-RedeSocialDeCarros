import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../usuario';
import { provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usuarios: Usuario [] = []
  email: String = "";
  senha: String= "";

  constructor(private rota: Router, private  usuarioService: UsuarioService){}

  ValidarLogin(){
    this.usuarioService.getUsuarios().subscribe((dado) =>{
      this.usuarios = dado;

      this.usuarios.forEach(usuario => {
        if(usuario.login == this.email && usuario.senha == this.senha){
          this.rota.navigate(['/feed']);
        }else{
          alert("Erro");
        }
      });

    }


  )}

}
