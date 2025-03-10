import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee, IAPIResponse, IEarnedLeave } from '../model/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  apiURL: string = 'https://projectapi.gerasim.in/api/EmployeeManagement/';

  loggedUserData: any;

  constructor(private http: HttpClient) {
    const localData = localStorage.getItem('leaveUser');
    if (localData) {
      this.loggedUserData = JSON.parse(localData);
    }
  }

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

  deleteEmployee(id: number): Observable<Employee> {
    return this.http.delete<Employee>(this.apiURL + 'DeleteEmployee/' + id);
  }

  getAllChildDepartment(): Observable<IAPIResponse> {
    return this.http.get<IAPIResponse>(this.apiURL + 'GetAllChildDepartment');
  }

  updateEmployee(emp: Employee): Observable<Employee> {
    return this.http.put<Employee>(
      this.apiURL + 'UpdateEmployee/' + emp.employeeId,
      emp
    );
  }

  addEarnedLeave(emp: IEarnedLeave): Observable<IAPIResponse> {
    return this.http.post<IAPIResponse>(this.apiURL + 'AddNewEarnedLeave', emp);
  }

  getAllEarnedLeaves(): Observable<IAPIResponse> {
    return this.http.get<IAPIResponse>(this.apiURL + 'GetAllEarnedLeaves');
  }
}
