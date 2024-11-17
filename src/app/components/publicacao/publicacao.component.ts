import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { SidebarLeftComponent } from "../sidebar/sidebar-left/sidebar-left.component";

@Component({
  selector: 'app-publicacao',
  standalone: true,
  imports: [NavbarComponent, SidebarLeftComponent],
  templateUrl: './publicacao.component.html',
  styleUrl: './publicacao.component.css'
})
export class PublicacaoComponent {

}
