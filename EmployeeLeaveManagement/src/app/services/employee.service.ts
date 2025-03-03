import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee, IAPIResponse } from '../model/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  apiURL: string = 'https://projectapi.gerasim.in/api/EmployeeManagement/';

  constructor(private http: HttpClient) {}

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiURL + 'GetAllEmployees');
  }

  getDepartment(): Observable<IAPIResponse> {
    return this.http.get<IAPIResponse>(this.apiURL + 'GetParentDepartment');
  }

  getChildDepartmentByParentId(id: string): Observable<IAPIResponse> {
    return this.http.get<IAPIResponse>(
      this.apiURL + 'GetChildDepartmentByParentId?deptId=' + id
    );
  }

  createNewEmployee(obj: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.apiURL + 'CreateEmployee', obj);
  }

  deleteEmployee(id: number): Observable<Employee[]> {
    return this.http.delete<Employee[]>(this.apiURL + 'DeleteEmployee/' + id);
  }
}
