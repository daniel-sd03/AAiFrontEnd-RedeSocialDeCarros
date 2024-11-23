import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CadastroDadosComponent } from "../cadastro-dados/cadastro-dados.component";

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule, CadastroDadosComponent],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  constructor(private rota: Router){}

  redirecionaLogin(){
    this.rota.navigate(['/'])
  }

}
