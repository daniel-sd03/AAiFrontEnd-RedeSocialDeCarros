import { Component, OnInit } from '@angular/core';
import { PostMoldeComponent } from "../../post-molde/post-molde.component";
import { Usuario } from '../../../usuario';

@Component({
  selector: 'app-perfil-item',
  standalone: true,
  imports: [PostMoldeComponent],
  templateUrl: './perfil-item.component.html',
  styleUrl: './perfil-item.component.css'
})
export class PerfilItemComponent implements OnInit {
  usuarioLog!: Usuario;

  publicacao = { idUsuario: 0, legenda: '', imageUrl: 'https://motorshow.com.br/wp-content/uploads/sites/2/2019/03/8_ms426_formula1_1-e1580995498795.jpg'};

  ngOnInit(): void {
    const usariologString = localStorage.getItem('usuariolog');
    if (usariologString) {
      this.usuarioLog = JSON.parse(usariologString);
    } else {
      alert("erro");
    }
  }
}