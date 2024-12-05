import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";
import { SidebarLeftComponent } from "../../sidebar/sidebar-left/sidebar-left.component";
import { FooterComponent } from "../../footer/footer.component";
import { atualizaDadodadosComponent } from "../atualizaDado-dados/atualizaDado-dados.component";

@Component({
  selector: 'app-configuracao',
  standalone: true,
  imports: [NavbarComponent, SidebarLeftComponent, atualizaDadodadosComponent],
  templateUrl: './atualizaDado.component.html',
  styleUrl: './atualizaDado.component.css'
})
export class AtualizaDadoComponent {



}
