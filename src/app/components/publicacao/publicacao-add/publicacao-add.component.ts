import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthserviceService } from '../../../services/authservice.service';
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
  //inicializando variaveis
  novaPublicacao: publicacao = {
    idUsuario: 0,
    legenda: '',
    fotoUrl: '',
  };
  usuarioLog: Usuario | null = null;

  constructor(private authService: AuthserviceService) { }

  ngOnInit(): void {
    this.usuarioLog = this.authService.getUsuario();
    if(!this.usuarioLog){
      alert("Erro ao carregar usuario!");
    }else{
      this.novaPublicacao.idUsuario = this.usuarioLog.id!;
      alert(this.usuarioLog.id);
    }
  }

  adicionarPublicacao() {



    this.publicacaoAdicionada.emit(this.novaPublicacao);

  }

}
