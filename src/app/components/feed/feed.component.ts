import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { NavbarComponent } from "../navbar/navbar.component";
import { SidebarLeftComponent } from "../sidebar/sidebar-left/sidebar-left.component";
import { SidebarRightComponent } from "../sidebar/sidebar-right/sidebar-right.component";

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [NavbarComponent, SidebarLeftComponent, SidebarRightComponent],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.css'
})
export class FeedComponent implements OnInit {
  nomeUsuario: String = '';
  usariolog = {
    nome: '',
    login: ''
  };

  constructor(private rota: Router) {}

  ngOnInit(): void {
    const usariologString = localStorage.getItem('usariolog');

    if (usariologString) {
      this.usariolog = JSON.parse(usariologString);
      this.nomeUsuario = this.usariolog.nome
    }else{
      alert("erro");
    }
  }

 

}

