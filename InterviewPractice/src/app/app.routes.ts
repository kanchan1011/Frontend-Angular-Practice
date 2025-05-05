import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { LoginComponent } from './shared-components/login/login.component';
import { PersonalPortfolioComponent } from './shared-components/personal-portfolio/personal-portfolio.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Home Page' },
  { path: 'about', component: AboutComponent, title: 'About Page' },
  { path: 'blog', component: BlogComponent, title: 'Blog Page' },
  { path: 'login', component: LoginComponent, title: 'Login Page' },
  {path:'portfolio',component:PersonalPortfolioComponent,title:'Portfolio Page'},
  // Lazy loading example (uncomment if needed)
  { path: '**', component: PageNotFoundComponent, title: 'Page Not Found' },
];
