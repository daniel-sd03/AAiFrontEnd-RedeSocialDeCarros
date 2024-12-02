import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { PublicacaoComponent } from './components/publicacao/publicacao/publicacao.component';
import { FeedComponent } from './components/feeds/feed/feed.component';
import { PerfilComponent } from './components/perfil\'s/perfil/perfil.component';
import { CadastroComponent } from './components/cadastro\'s/cadastro/cadastro.component';
import { LoginComponent } from './components/login\'s/login/login.component';
import { AtualizaDadoComponent } from './components/atualizaDado\'s/atualizaDado/atualizaDado.component';
import { ExcluirContaComponent } from './components/excluirContas/excluir-conta/excluir-conta.component';

export const routes: Routes = [
  {path: 'feed', component: FeedComponent, canActivate: [AuthGuard]},
  { path: '', component: LoginComponent },
  {path : 'cadastro', component: CadastroComponent},
  {path : 'atulizarDados', component: AtualizaDadoComponent, canActivate: [AuthGuard]},
  {path : 'excluirConta', component: ExcluirContaComponent, canActivate: [AuthGuard]},
  {path : 'publicacao', component: PublicacaoComponent},
  {path : 'perfil', component: PerfilComponent, canActivate: [AuthGuard]}
]
