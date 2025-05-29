import { Component, inject, Inject, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { CommonModule, JsonPipe } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounce, debounceTime, delay, distinctUntilChanged, filter, map, Observable, of, switchMap } from 'rxjs';
import { query } from '@angular/animations';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent implements OnInit {
  userList: User[] = [];
  userService = inject(UserService);
  searchControl = new FormControl('');
  user$: Observable<User[]> | undefined;

  ngOnInit(): void {
    this.userService.getUserList().subscribe((res: User[]) => {
      this.userList = res;
      console.log(this.userList);
    });

    //Search User
    this.user$=this.searchControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      filter((query): query is string => query !== null),
      switchMap(query=>this.searchUsers(query))
    )
  }

  searchUsers(query: string): Observable<User[]> {
    return of(this.userList).pipe(
      delay(300), // simulate HTTP delay
      map((userList) =>
        userList.filter((user) =>
          user.name.toLowerCase().includes(query.toLowerCase())
        )
      )
    );
  }
}
