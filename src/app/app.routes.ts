import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { ProjetoDetailComponent } from './projeto-detail/projeto-detail.component';
import { InstagramPostsComponent } from './instagram-posts/instagram-posts.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projetos', component: ProjetosComponent },
  { path: 'projeto-financaspro', component: ProjetoDetailComponent, data: { id: 'financaspro' } },
  { path: 'projeto-clinica', component: ProjetoDetailComponent, data: { id: 'clinica' } },
  { path: 'projeto-ecommerce', component: ProjetoDetailComponent, data: { id: 'ecommerce' } },
  { path: 'projeto-assistente', component: ProjetoDetailComponent, data: { id: 'assistente' } },
  { path: 'instagram/posts', component: InstagramPostsComponent },
  { path: '**', redirectTo: '' }
];