import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  apiURL = 'https://projectapi.gerasim.in/api/EmployeeManagement';

  constructor(private http: HttpClient) {}

  getAllEmployees() {
    return this.http.get(this.apiURL + '/GetAllEmployees');
  }
}
