import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from '../../usuario';
import { CommonModule } from '@angular/common';
import { UsuarioService } from '../../services/usuario/usuario.service';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  usuario: Usuario = {
    id: undefined,
    nome: '',
    dtNasc: '',
    fotoPerfil: '',
    email: '',
    login: '',
    senha: ''
  };
  constructor(private rota: Router,private usuarioService: UsuarioService){}

  redirecionaLogin(){
    this.rota.navigate(['/'])
  }

  cadastrar(){
    const novoUsuario = { ...this.usuario };
    delete novoUsuario.id;
    this.usuarioService.cadastrarUsuario(novoUsuario).subscribe({
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
