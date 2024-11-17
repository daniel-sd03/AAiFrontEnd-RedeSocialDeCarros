import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { SidebarLeftComponent } from "../sidebar/sidebar-left/sidebar-left.component";

@Component({
  selector: 'app-feed-usuario',
  standalone: true,
  imports: [NavbarComponent, SidebarLeftComponent],
  templateUrl: './feed-usuario.component.html',
  styleUrl: './feed-usuario.component.css'
})
export class FeedUsuarioComponent {

}
