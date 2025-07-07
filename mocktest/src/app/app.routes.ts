import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { PersonalDetailsComponent } from './components/personal-details/personal-details.component';
import { SearchComponent } from './components/search/search.component';
import { SearchUserComponent } from './components/search-user/search-user.component';
import { TodoComponent } from './components/todo/todo.component';
import { SurveyFormComponent } from './components/survey-form/survey-form.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { MavericInterviewTaskComponent } from './components/maveric-interview-task/maveric-interview-task.component';

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
  { path: 'survey', component: SurveyFormComponent, title: 'Survey Form Page' },
  {path:'todo-list',component:TodoListComponent,title:'List Of TODOs'},
  {path:'todo-item',component:TodoItemComponent,title:'Todo Items'},
  {path:'maveric',component:MavericInterviewTaskComponent,title:'Maveric Interview Task'}
];
