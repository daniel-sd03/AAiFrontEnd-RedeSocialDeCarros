import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { publicacao } from '../../publicacao';

@Component({
  selector: 'app-post-molde',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-molde.component.html',
  styleUrl: './post-molde.component.css'
})
export class PostMoldeComponent  implements OnInit{
  @Input() publicacao: any;
  @Input() usuario: any;

  ngOnInit(): void {
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
}
