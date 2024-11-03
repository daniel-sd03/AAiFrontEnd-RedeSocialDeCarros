import { Routes } from '@angular/router';
import { FeedComponent } from './components/feed/feed.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  { path: 'feed', component: FeedComponent },
  { path: '', component: LoginComponent },
];
