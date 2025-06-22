import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-user',
  imports: [FormsModule,CommonModule],
  templateUrl: './search-user.component.html',
  styleUrl: './search-user.component.css',
})
export class SearchUserComponent {
  searchUser: string = '';
  users=[
    {
      id: 1,
      name: "Sham Kale",
      username: "Bret",
      email: "Sincere@april.biz",
    },
    {
      id: 2,
      name: "Ram Jain",
      username: "Antonette",
      email: "Shanna@melissa.tv",
    },
    {
      id: 3,
      name: "Riya Doke",
      username: "Samantha",
      email: "Nathan@yesenia.net",
    },
    {
      id: 4,
      name: "Sita Kumari",
      username: "Karianne",
      email: "Julianne.OConner@kory.org",
    },
  ]

  get filterUsers(){
    console.log(this.users)
    return this.users.filter(user=>{
      user.name.toLowerCase().includes(this.searchUser.toLowerCase())
      // console.log(user.name.toLowerCase().includes(this.searchUser.toLowerCase()))
  });
  }
}
