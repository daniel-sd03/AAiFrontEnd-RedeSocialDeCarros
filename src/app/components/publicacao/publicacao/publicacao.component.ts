import { Component } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";
import { SidebarLeftComponent } from "../../sidebar/sidebar-left/sidebar-left.component";
import { PublicacaoAddComponent } from "../publicacao-add/publicacao-add.component";
import { publicacao } from '../../../publicacao';
import { PublicacaoService } from '../../../services/publicacao/publicacao.service';

@Component({
  selector: 'app-publicacao',
  standalone: true,
  imports: [NavbarComponent, SidebarLeftComponent, PublicacaoAddComponent],
  templateUrl: './publicacao.component.html',
  styleUrl: './publicacao.component.css'
})
export class PublicacaoComponent {

  constructor(private publicaoService: PublicacaoService){}

  adicionarPublicacao(publicacao: publicacao){
    console.log("Passou aq 2");
   this.publicaoService.cadastrarPublicacao(publicacao).subscribe({
      next: response => {
      },
      error: err => {
        console.error('Erro ao fazer publicação:', err);
        alert('Ocorreu um erro no cadastro. Tente novamente.');
      }
    });
  }

}

