import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../../services/usuario/usuario.service';
import { Usuario } from '../../../usuario';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cadastro-dados',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './cadastro-dados.component.html',
  styleUrl: './cadastro-dados.component.css'
})
export class CadastroDadosComponent {
  constructor(private rota: Router,private usuarioService: UsuarioService){}

  usuario: Usuario = {
    id: undefined,
    nome: '',
    dtNasc: '',
    fotoPerfil: '',
    email: '',
    nomeUsuario: '',
    senha: ''
  };

  cadastrar(){
    this.usuarioService.cadastrarUsuario(this.usuario).subscribe({
      next: response => {
        console.log('Usuário cadastrado com sucesso:', response);
        alert('Cadastro realizado com sucesso!');
        this.rota.navigate(['/']);
      },
      error: err => {
        console.error('Erro ao cadastrar usuário:', err);
        alert('Ocorreu um erro no cadastro. Tente novamente.');
      }
    });
  }
}
