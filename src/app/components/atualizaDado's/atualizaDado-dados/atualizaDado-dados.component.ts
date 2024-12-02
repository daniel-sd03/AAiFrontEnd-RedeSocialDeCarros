import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../usuario';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UsuarioService } from '../../../services/usuario/usuario.service';
import { AuthserviceService } from '../../../services/authService/authservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-atualizaDado-dados',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './atualizaDado-dados.component.html',
  styleUrl: './atualizaDado-dados.component.css'
})
export class atualizaDadodadosComponent implements OnInit {
  usuarioLog!: Usuario;
  iconeSenha: string = 'bi bi-eye';
  visivelSenha: boolean = false;
  isDadoSalvo: boolean = false;

  constructor(private usuarioService: UsuarioService, private authService: AuthserviceService, private rota: Router){}

  ngOnInit(): void {
    const usariologString = localStorage.getItem('usuariolog');
    if (usariologString) {
      this.usuarioLog = JSON.parse(usariologString);
    } else {
      alert("erro");
    }
  }

  atualizarDados(){
    this.usuarioService.getUsuarioId(this.usuarioLog.id!).subscribe((dado) => {
      this.usuarioLog = dado;
    })
    this.authService.atualizarDadosUsuario(this.usuarioLog);
  }

  deletarConta(){
    this.usuarioService.deletarUsuario(this.usuarioLog.id!).subscribe({
      next: response => {
        this.authService.logout();
        this.rota.navigate(['/']);
      },
      error: err => {
        console.error('Erro ao deletar usuario', err);
        alert('Ocorreu um erro ao deletar usuario. Tente novamente!.');
      }
    });
  }

  alterarIconeSenha(){
    this.visivelSenha = !this.visivelSenha;
    const senhaInput = document.getElementById('senha') as HTMLInputElement;
    if(this.visivelSenha){
      senhaInput.type = 'text';
      this.iconeSenha = 'bi bi-eye-slash';
    }else{
      senhaInput.type = 'password';
      this.iconeSenha = 'bi bi-eye'
    }
  }

  alterarDados(){
    this.usuarioService.atualizarDados(this.usuarioLog.id!, this.usuarioLog).subscribe({
      next: response => {
        this.isDadoSalvo = true;
        this.atualizarDados();
      },
      error: err => {
        console.error('Erro ao alterar dados', err);
        alert('Ocorreu um erro ao alterar dados. Tente novamente!.');
      }
    });
  }

}
