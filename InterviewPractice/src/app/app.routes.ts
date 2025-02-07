import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Home Page' },
  { path: 'about', component: AboutComponent ,title:'About Page'},
  { path: '**', component: PageNotFoundComponent, title: 'Page Not Found' },
];
