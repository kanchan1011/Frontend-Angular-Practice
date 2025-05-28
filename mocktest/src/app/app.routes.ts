import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserListComponent } from './components/user-list/user-list.component';

export const routes: Routes = [
    {path:'',component:HomeComponent, title:'Home Page'},
    {path:'', pathMatch:'full',redirectTo:'home'},
    {path:'user-list',component:UserListComponent,title:'User List'}

];
