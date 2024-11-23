import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";
import { SidebarLeftComponent } from "../../sidebar/sidebar-left/sidebar-left.component";
import { FooterComponent } from "../../footer/footer.component";
import { FormsModule } from '@angular/forms';
import { ConfiguracaoDadosComponent } from "../configuracao-dados/configuracao-dados.component";

@Component({
  selector: 'app-configuracao',
  standalone: true,
  imports: [NavbarComponent, SidebarLeftComponent, FooterComponent, ConfiguracaoDadosComponent],
  templateUrl: './configuracao.component.html',
  styleUrl: './configuracao.component.css'
})
export class ConfiguracaoComponent {
}
