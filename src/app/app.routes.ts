import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { AuthGuard } from './guards/auth.guard';
import { ConfiguracaoComponent } from './components/configuracao/configuracao.component';
import { PublicacaoComponent } from './components/publicacao/publicacao/publicacao.component';
import { TesteComponent } from './components/teste/teste.component';
import { FeedComponent } from './components/feeds/feed/feed.component';
import { PerfilComponent } from './components/perfil\'s/perfil/perfil.component';

export const routes: Routes = [
  {path: 'feed', component: FeedComponent, canActivate: [AuthGuard]},
  { path: '', component: LoginComponent },
  {path : 'cadastro', component: CadastroComponent},
  {path : 'configuracao', component: ConfiguracaoComponent, canActivate: [AuthGuard]},
  {path : 'publicação', component: PublicacaoComponent},
  {path : 'perfil', component: PerfilComponent, canActivate: [AuthGuard]},
  {path : 'teste', component: TesteComponent}
]
