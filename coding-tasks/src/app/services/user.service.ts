import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:3000';
  //private apiUrl = 'api-data/user-data.json';

  constructor(private http: HttpClient) {}

  getUser(): Observable<IUser[]> {
    console.log(this.apiUrl);
    return this.http.get<IUser[]>(this.apiUrl + '/users');
  }
}
