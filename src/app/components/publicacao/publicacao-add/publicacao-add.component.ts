import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthserviceService } from '../../../services/authService/authservice.service';
import { Usuario } from '../../../usuario';
import { publicacao } from '../../../publicacao';

@Component({
  selector: 'app-publicacao-add',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './publicacao-add.component.html',
  styleUrl: './publicacao-add.component.css'
})
export class PublicacaoAddComponent implements OnInit {

  @Output() publicacaoAdicionada = new EventEmitter<any>();
  isPublicaEnviada: boolean = false;
  //inicializando variaveis
  novaPublicacao: publicacao = {
    idUsuario: 0,
    legenda: '',
    imageUrl: '',
    dtPublicacao: ''
  };

  usuarioLog: Usuario | null = null;

  constructor(private authService: AuthserviceService) {}

  ngOnInit(): void {
    this.usuarioLog = this.authService.getUsuario();
    if(!this.usuarioLog){
      alert("Erro ao carregar usuario!");
    }
  }

  capturarDataHora(): string {
    const agora = new Date();
    const ano = agora.getFullYear();
    const mes = String(agora.getMonth() + 1).padStart(2, '0');
    const dia = String(agora.getDate()).padStart(2, '0');
    const hora = String(agora.getHours()).padStart(2, '0');
    const minuto = String(agora.getMinutes()).padStart(2, '0');

    // Formata a data e hora para o formato 'YYYY-MM-DD HH:mm'
    return `${ano}-${mes}-${dia} ${hora}:${minuto}`;
  }

  adicionarPublicacao() {
    this.novaPublicacao.dtPublicacao = this.capturarDataHora();
    this.novaPublicacao.idUsuario = this.usuarioLog!.id!;
    this.publicacaoAdicionada.emit(this.novaPublicacao);
    this.isPublicaEnviada = true;
    this.novaPublicacao = {
      idUsuario: 0,
      legenda: '',
      imageUrl: '',
      dtPublicacao: ''
    };
  }
}
