import { Routes } from '@angular/router';
import { FeedComponent } from './components/feed/feed.component';
import { LoginComponent } from './components/login/login.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: 'feed', component: FeedComponent, canActivate: [AuthGuard]},
  { path: '', component: LoginComponent },
  {path : 'cadastro', component: CadastroComponent}
];
