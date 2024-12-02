import { Component } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";
import { SidebarLeftComponent } from "../../sidebar/sidebar-left/sidebar-left.component";
import { atualizaDadodadosComponent } from "../../atualizaDado's/atualizaDado-dados/atualizaDado-dados.component";
import { ExcluirContaDadosComponent } from "../excluir-conta-dados/excluir-conta-dados.component";

@Component({
  selector: 'app-excluir-conta',
  standalone: true,
  imports: [NavbarComponent, SidebarLeftComponent, atualizaDadodadosComponent, ExcluirContaDadosComponent],
  templateUrl: './excluir-conta.component.html',
  styleUrl: './excluir-conta.component.css'
})
export class ExcluirContaComponent {

}
