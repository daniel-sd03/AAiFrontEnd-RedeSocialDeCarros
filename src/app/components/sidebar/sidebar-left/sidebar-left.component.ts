import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from '../../../services/authservice.service';

@Component({
  selector: 'app-sidebar-left',
  standalone: true,
  imports: [],
  templateUrl: './sidebar-left.component.html',
  styleUrl: './sidebar-left.component.css'
})
export class SidebarLeftComponent {

  constructor(private rota: Router, private authService: AuthserviceService){}

  redirectHome(){
    this.rota.navigate(['/feed']);
  }

  redirectPerfil(){
    this.rota.navigate(['/perfil']);
  }

  redirectConfig(){
    this.rota.navigate(['/configuracao']);
  }

  logout() {
    this.authService.logout();
    this.rota.navigate(['/']);
  }
}
