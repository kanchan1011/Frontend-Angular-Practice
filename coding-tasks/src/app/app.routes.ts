import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UserComponent } from './components/user/user.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Home Page' },
  { path: 'user', component: UserComponent, title: 'User List' },
  { path: 'about', component: AboutComponent, title: 'About Us Page' },
  { path: 'contact', component: ContactComponent, title: 'Contact Us Page' },
  { path: 'login', component: LoginComponent, title: 'Login Page' },
  { path: 'signup', component: RegisterComponent, title: 'Register Page' },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    title: 'Forgot Password Page',
  },
  {
    path: 'shared',
    loadChildren: () =>
      import('./modules/shared/shared.module').then((m) => m.SharedModule),
  },
  {
    path: 'feature',
    loadChildren: () =>
      import('./modules/feature/feature.module').then((m) => m.FeatureModule),
  },
  { path: '**', component: PageNotFoundComponent, title: 'Page Not Found' },
 
];
