import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IUser } from '../../models/user.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { DateFormatPipe } from '../../pipes/date-format.pipe';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule,DateFormatPipe],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
// class User implements IUser {
//   constructor(
//     username: string,
//     email: string,
//     mobile: string,
//     gender: string,
//     address: string,
//     state: string,
//     city: string
//   ) {
//     this.username = username;
//     this.email = email;
//     this.mobile = mobile;
//     this.address = address;
//     this.city = city;
//     this.gender = gender;
//     this.state = state;
//   }
//   gender: string;
//   address: string;
//   state: string;
//   city: string;
//   username: string;
//   email: string;
//   mobile: string;
// }
export class UserComponent implements OnInit {
  userList: IUser[] = [];
  isLoading = true;
  errorMessage = '';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUser();
  }

  // userList: any = [
  //   {
  //     username: 'Kanchan',
  //     gender: 'Female',
  //   },
  //   {
  //     username: 'Arya',
  //     gender: 'Female',
  //   },
  //   {
  //     username: 'Yash',
  //     gender: 'Male',
  //   },
  //   {
  //     username: 'Reva',
  //     gender: 'Female',
  //   },
  // ];
  newUser: any = { username: '', gender: '' };

  addUser() {
    if (this.newUser.username && this.newUser.gender) {
      this.userList.push({ ...this.newUser });
      this.newUser = { username: '', gender: '' };
    }
  }

  getUser() {
    this.userService.getUser().subscribe(
      (res: IUser[]) => {
        this.userList = res;
        this.isLoading = false;
      },
      (error) => {
        this.errorMessage = 'Error fetching data..';
        this.isLoading = false;
      }
    );
  }
}
