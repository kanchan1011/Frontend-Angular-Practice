import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UserComponent } from './components/user/user.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Home Page' },
  { path: 'user', component: UserComponent, title: 'User List' },
  { path: 'about', component: AboutComponent, title: 'About Us Page' },
  { path: 'contact', component: ContactComponent, title: 'Contact Us Page' },
  { path: '**', component: PageNotFoundComponent, title: 'Page Not Found' },
];
