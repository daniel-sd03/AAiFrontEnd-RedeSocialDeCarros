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
  isConfigMenuOpen: boolean = true;

  constructor(private rota: Router, private authService: AuthserviceService, private sidebarService: SiderbarService){}

  ngOnInit(): void {
      this.sidebarService.getSidebarStatus().subscribe(status => {
        this.isSidebarOpen = status;
      });
  }

  alternarConfigMenu(){
    this.isConfigMenuOpen = !this.isConfigMenuOpen;
  }


  alternarSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  redirectHome(){
    this.rota.navigate(['/feed']);
  }

  redirectPerfil(){
    this.rota.navigate(['/perfil']);
  }

  redirectAtualizaDado(){
    this.rota.navigate(['/atulizarDados']);
  }

  redirectPublicar(){
    this.rota.navigate(['/publicacao']);
  }

  logout() {
    this.authService.logout();
    this.rota.navigate(['/']);
  }
}
