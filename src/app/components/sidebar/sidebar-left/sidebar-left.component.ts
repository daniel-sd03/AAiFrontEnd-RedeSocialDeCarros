import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from '../../../services/authService/authservice.service';
import { CommonModule } from '@angular/common';
import { SiderbarService } from '../../../services/siderbar/siderbar.service';

@Component({
  selector: 'app-sidebar-left',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar-left.component.html',
  styleUrl: './sidebar-left.component.css'
})
export class SidebarLeftComponent implements OnInit{

  isSidebarOpen: boolean = false;

  constructor(private rota: Router, private authService: AuthserviceService, private sidebarService: SiderbarService){}

  ngOnInit(): void {
      // Inscreve-se no estado do sidebar
      this.sidebarService.getSidebarStatus().subscribe(status => {
        this.isSidebarOpen = status; // Atualiza o estado do sidebar
      });
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

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
