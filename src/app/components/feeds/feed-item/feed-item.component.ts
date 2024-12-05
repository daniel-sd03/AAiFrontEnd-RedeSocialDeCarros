import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PostMoldeComponent } from "../../post-molde/post-molde.component";
import { Usuario } from '../../../usuario';
import { UsuarioService } from '../../../services/usuario/usuario.service';
import { PublicacaoService } from '../../../services/publicacao/publicacao.service';
import { publicacao } from '../../../publicacao';

@Component({
  selector: 'app-feed-item',
  standalone: true,
  imports: [CommonModule, PostMoldeComponent],
  templateUrl: './feed-item.component.html',
  styleUrl: './feed-item.component.css'
})
export class FeedItemComponent implements OnInit {
  usuarios: Usuario[] = [];
  publicacoes: publicacao[] = [];


  constructor(private ususarioService: UsuarioService, private publicacaoService: PublicacaoService){}

  ngOnInit(): void {
  this.getPublicacao();
  }

  getPublicacao() {
    this.publicacaoService.getPublicacao().subscribe((dado) => {
      this.publicacoes = dado;

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
