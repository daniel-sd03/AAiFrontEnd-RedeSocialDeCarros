import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { SidebarLeftComponent } from "../sidebar/sidebar-left/sidebar-left.component";

@Component({
  selector: 'app-configuracao',
  standalone: true,
  imports: [NavbarComponent, SidebarLeftComponent],
  templateUrl: './configuracao.component.html',
  styleUrl: './configuracao.component.css'
})
export class ConfiguracaoComponent {

}
