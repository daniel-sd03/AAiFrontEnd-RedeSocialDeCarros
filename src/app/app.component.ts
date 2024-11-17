import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FeedComponent } from "./components/feed/feed.component";
import { LoginComponent } from './components/login/login.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { ConfiguracaoComponent } from './components/configuracao/configuracao.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AAIFrontEnd-RedeSocialCarro';
}
