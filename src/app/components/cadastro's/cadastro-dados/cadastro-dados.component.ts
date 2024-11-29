import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../../services/usuario/usuario.service';
import { Usuario } from '../../../usuario';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { firstValueFrom, Observable } from 'rxjs';

@Component({
  selector: 'app-cadastro-dados',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './cadastro-dados.component.html',
  styleUrl: './cadastro-dados.component.css'
})
export class CadastroDadosComponent {
  isDadoInvalid: boolean = false;
  msgDadoInvalid: string = "";
  usuario: Usuario = {
    nome: '',
    dtNasc: '',
    fotoPerfil: '',
    email: '',
    nomeUsuario: '',
    senha: ''
  };
  constructor(
    private rota: Router,
    private usuarioService: UsuarioService,
  ) { }


  async cadastrar() {
    this.isDadoInvalid = false;
    this.msgDadoInvalid = '';
    if (await this.verificaDadoExiste('nomeUsuario', this.usuario.nomeUsuario)) {//Verificando nome usuario
      this.isDadoInvalid = true;
      this.msgDadoInvalid = "O nome de usuario não é permitido. Tente novamente."
    } else if (await this.verificaDadoExiste('email', this.usuario.email)) {//Verificando email
      this.isDadoInvalid = true;
      this.msgDadoInvalid = "O email digitado não é permitido. Tente novamente."
    } else {
      this.usuarioService.cadastrarUsuario(this.usuario).subscribe({
        next: response => {
          console.log('Usuário cadastrado com sucesso:', response);
          this.rota.navigate(['/']);
        },
        error: err => {
          console.error('Erro ao cadastrar usuário:', err);
          alert('Ocorreu um erro no cadastro. Tente novamente.');
        }
      });
    }
  }

  async verificaDadoExiste(tipo: keyof Usuario, valor: string): Promise<boolean> {
    const existe = await firstValueFrom(this.usuarioService.verificarDadoExistente(tipo, valor));
    return existe ?? false;
  }

  isEmailValido(): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(this.usuario.email || '');
  }
}


