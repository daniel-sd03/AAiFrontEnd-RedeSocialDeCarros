import { Component, OnInit } from '@angular/core';
import { SidebarLeftComponent } from "../../sidebar/sidebar-left/sidebar-left.component";
import { NavbarComponent } from "../../navbar/navbar.component";
import { PostMoldeComponent } from "../../post-molde/post-molde.component";
import { PerfilItemComponent } from "../perfil-item/perfil-item.component";

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [SidebarLeftComponent, NavbarComponent, PostMoldeComponent, PerfilItemComponent],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent  implements OnInit {
  imageUrl: string = '';
  imageClass = ' ';

  ngOnInit(): void {
   this.validandoFormatoImg();
  }



  validandoFormatoImg() {
    if (this.imageUrl) {
      const img = new Image();
      img.src = this.imageUrl;
      img.onload = () => {
        const width = img.width;
        const height = img.height;
        if (width === height) {
          this.imageClass = 'square';
        } else if (width > height) {
          this.imageClass = 'landscape';
        } else {
          this.imageClass = 'portrait';
        }
      };
    } else {
      this.imageClass = ''; // Reset if no URL
    }
  }
}
