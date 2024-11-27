import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { PublicacaoComponent } from './components/publicacao/publicacao/publicacao.component';
import { FeedComponent } from './components/feeds/feed/feed.component';
import { PerfilComponent } from './components/perfil\'s/perfil/perfil.component';
import { ConfiguracaoComponent } from './components/configuracao\'s/configuracao/configuracao.component';
import { CadastroComponent } from './components/cadastro\'s/cadastro/cadastro.component';
import { LoginComponent } from './components/login\'s/login/login.component';

export const routes: Routes = [
  {path: 'feed', component: FeedComponent, canActivate: [AuthGuard]},
  { path: '', component: LoginComponent },
  {path : 'cadastro', component: CadastroComponent},
  {path : 'configuracao', component: ConfiguracaoComponent, canActivate: [AuthGuard]},
  {path : 'publicacao', component: PublicacaoComponent},
  {path : 'perfil', component: PerfilComponent, canActivate: [AuthGuard]}
]
