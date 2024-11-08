import { Routes } from '@angular/router';
import { FeedComponent } from './components/feed/feed.component';
import { LoginComponent } from './components/login/login.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';

export const routes: Routes = [
  { path: 'feed', component: FeedComponent },
  { path: '', component: LoginComponent },
  {path : 'cadastro', component: CadastroComponent}
];
