import { Component, OnInit } from '@angular/core';
import { PostMoldeComponent } from "../../post-molde/post-molde.component";
import { Usuario } from '../../../usuario';
import { CommonModule } from '@angular/common';
import { publicacao } from '../../../publicacao';
import { PublicacaoService } from '../../../services/publicacao/publicacao.service';

@Component({
  selector: 'app-perfil-item',
  standalone: true,
  imports: [CommonModule,PostMoldeComponent],
  templateUrl: './perfil-item.component.html',
  styleUrl: './perfil-item.component.css'
})
export class PerfilItemComponent implements OnInit {
  usuarioLog: Usuario = {
    nome: '',
    dtNasc: '',
    email: '',
    nomeUsuario: '',
    senha: ''
  };

  publicacoes: publicacao[] = [];

  constructor(private publicacaoService: PublicacaoService){}


  ngOnInit(): void {
    const usariologString = localStorage.getItem('usuariolog');
    if (usariologString) {
      this.usuarioLog = JSON.parse(usariologString);
    } else {
      alert("erro");
    }
    this.getPublicacaoUsuario();
  }

  getPublicacaoUsuario() {
    if (this.usuarioLog.id) {
      this.publicacaoService.getPublicacoesPorUsuario(this.usuarioLog.id).subscribe((dados) => {
        this.publicacoes = dados;

        // Ordena as publicações após as receber
        this.publicacoes.sort((a, b) => {
          // Converte as datas para o formato Date
          const dataA = new Date(a.dtPublicacao.replace(' ', 'T')); // Formato "YYYY-MM-DD HH:mm" para "YYYY-MM-DDTHH:mm"
          const dataB = new Date(b.dtPublicacao.replace(' ', 'T')); // Faz a mesma coisa para a segunda data
          
          // Verifica se as datas são válidas
          if (isNaN(dataA.getTime()) || isNaN(dataB.getTime())) {
            console.error('Data inválida:', a.dtPublicacao, b.dtPublicacao);
            return 0; // Se alguma data for inválida, não altera a ordem
          }
          
          // Ordena pela data de forma decrescente: mais recente primeiro
          return dataB.getTime() - dataA.getTime(); // (dataB - dataA) para ordem decrescente
        });
      });
    }
  }
}