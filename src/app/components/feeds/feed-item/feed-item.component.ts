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
    })
  }
}
