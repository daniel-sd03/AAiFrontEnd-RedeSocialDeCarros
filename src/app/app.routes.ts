import { Routes } from '@angular/router';
import { FeedComponent } from './components/feed/feed.component';
import { LoginComponent } from './components/login/login.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { AuthGuard } from './guards/auth.guard';
import { ConfiguracaoComponent } from './components/configuracao/configuracao.component';
import { PublicacaoComponent } from './components/publicacao/publicacao.component';
import { FeedUsuarioComponent } from './components/feed-usuario/feed-usuario.component';

export const routes: Routes = [
  {path: 'feed', component: FeedComponent, canActivate: [AuthGuard]},
  { path: '', component: LoginComponent },
  {path : 'cadastro', component: CadastroComponent},
  {path : 'configuracao', component: ConfiguracaoComponent, canActivate: [AuthGuard]},
  {path : 'publicação', component: PublicacaoComponent, canActivate: [AuthGuard]},
  {path : 'perfil', component: FeedUsuarioComponent, canActivate: [AuthGuard]}
];
