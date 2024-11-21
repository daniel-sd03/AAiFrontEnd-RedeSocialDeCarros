import { Component } from '@angular/core';
import { SiderbarService } from '../../services/siderbar/siderbar.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private siderbarService: SiderbarService) { }

  alterarSidebar() {
    this.siderbarService.alterarSidebar(); //altera o valor do siderbar
  }

}
