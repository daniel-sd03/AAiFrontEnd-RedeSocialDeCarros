import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { publicacao } from '../../publicacao';
import { Usuario } from '../../usuario';
import { UsuarioService } from '../../services/usuario/usuario.service';

@Component({
  selector: 'app-post-molde',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-molde.component.html',
  styleUrl: './post-molde.component.css'
})
export class PostMoldeComponent  implements OnInit{
  @Input() publicacao: any;
  usuario!:Usuario;
  isFtPerfil!: boolean;
  primeiraLetra: string = '';

  constructor(private ususarioService: UsuarioService){}

  ngOnInit(): void {
    this.getUsuario();
    this.validandoFormatoImg();
  }

  validandoFormatoImg() {
    if (this.publicacao.imageUrl) {
      const img = new Image();
      img.src = this.publicacao.imageUrl;
      img.onload = () => {
        const width = img.width;
        const height = img.height;
        if (width === height) {
          this.publicacao.imageClass = 'square';
        } else if (width > height) {
          this.publicacao.imageClass = 'landscape';
        } else {
          this.publicacao.imageClass = 'portrait';
        }
      };
    } else {
      this.publicacao.imageClass = ''; // Reset if no URL
    }
  }


  validarFtPerfil() {
    if(!this.usuario.fotoPerfil) {
      this.primeiraLetra = this.getPrimeiraLetra(this.usuario.nome);
      this.isFtPerfil = false;
    }
  } 
  getPrimeiraLetra(dado: String): string {
    return dado ? dado.charAt(0).toUpperCase(): '';
  }

  getUsuario(){
    this.ususarioService.getUsuarioId(this.publicacao.idUsuario).subscribe((dado) => {
      this.usuario = dado; // Atribui o usuário carregado
  
      // Exibe o nome do usuário após ele ser carregado
      alert(this.usuario.nome);
  
      // Chama a função validarFtPerfil após garantir que o usuário foi carregado
      this.validarFtPerfil();
    }, (erro) => {
      console.error('Erro ao carregar usuário', erro);
    });
  }
  
}
