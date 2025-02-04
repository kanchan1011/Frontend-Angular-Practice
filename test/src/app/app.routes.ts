import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FindReplaceComponent } from './components/find-replace/find-replace.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Home Page' },
  {
    path: 'find-replace',
    component: FindReplaceComponent,
    title: 'Find & Replace Page',
  },
  { path: '**', component: PageNotFoundComponent },
];
