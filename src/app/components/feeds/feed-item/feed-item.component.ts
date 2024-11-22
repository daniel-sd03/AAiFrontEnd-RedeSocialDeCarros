import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PostMoldeComponent } from "../../post-molde/post-molde.component";

@Component({
  selector: 'app-feed-item',
  standalone: true,
  imports: [CommonModule, PostMoldeComponent],
  templateUrl: './feed-item.component.html',
  styleUrl: './feed-item.component.css'
})
export class FeedItemComponent implements OnInit {
  usariolog = {
    nome: '',
    login: ''
  };
  
  publicacao = { idUsuario: 0, legenda: '', imageUrl: 'https://motorshow.com.br/wp-content/uploads/sites/2/2019/03/8_ms426_formula1_1-e1580995498795.jpg'};

  ngOnInit(): void {
    const usariologString = localStorage.getItem('usuariolog');
    if (usariologString) {
      this.usariolog = JSON.parse(usariologString);
    } else {
      alert("erro");
    }
  }
}
