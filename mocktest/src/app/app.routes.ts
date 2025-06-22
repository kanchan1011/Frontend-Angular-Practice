import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { PersonalDetailsComponent } from './components/personal-details/personal-details.component';
import { SearchComponent } from './components/search/search.component';
import { SearchUserComponent } from './components/search-user/search-user.component';
import { TodoComponent } from './components/todo/todo.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent, title: 'Home Page' },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'user-list', component: UserListComponent, title: 'User List' },
  {
    path: 'personal-details',
    component: PersonalDetailsComponent,
    title: 'Personal Details',
  },
  { path: 'search', component: SearchComponent, title: 'Search Page' },
  {
    path: 'search-user',
    component: SearchUserComponent,
    title: 'Search User Page',
  },
  { path: 'todo', component: TodoComponent, title: 'ToDo List Page' },
];
