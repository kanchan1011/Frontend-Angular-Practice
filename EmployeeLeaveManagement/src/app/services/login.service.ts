import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  apiURL = 'https://projectapi.gerasim.in/api/EmployeeManagement';
  http = inject(HttpClient);
  constructor() {}

  onLogin(loginObj: any) {
   return this.http.post(this.apiURL + '/login', loginObj);
  }
}
