import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { SidebarLeftComponent } from "../sidebar/sidebar-left/sidebar-left.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-configuracao',
  standalone: true,
  imports: [NavbarComponent, SidebarLeftComponent, FooterComponent],
  templateUrl: './configuracao.component.html',
  styleUrl: './configuracao.component.css'
})
export class ConfiguracaoComponent {

}
