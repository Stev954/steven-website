import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home';
import { BlogPage } from './pages/blog/blog';
import { BlogDetail } from './pages/blog-detail/blog-detail';
import { About } from './pages/about/about';
import { Pricing } from './pages/pricing/pricing';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'about', component: About },
  { path: 'blog', component: BlogPage },
  { path: 'blog/:slug', component: BlogDetail },
  { path: 'pricing', component: Pricing }
];
