import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) {}

  getUserList(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  // searchUsers(query:string):Observable<User[]>{
  //   return 
  // }
}
