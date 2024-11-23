import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from '../../../usuario';
import { AuthserviceService } from '../../../services/authService/authservice.service';
import { UsuarioService } from '../../../services/usuario/usuario.service';
import { CommonModule } from '@angular/common';
import { LoginDadosComponent } from "../login-dados/login-dados.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, LoginDadosComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private rota: Router) { }


  redirecionaCadastro() {
    this.rota.navigate(['/cadastro']);
  }
}
