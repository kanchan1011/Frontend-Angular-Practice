import { Component, inject, OnInit } from '@angular/core';
import {
  Employee,
  IAPIResponse,
  IChildDept,
  IParentDept,
} from '../../model/employee';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss',
})
export class EmployeeComponent implements OnInit {
  employeeObj: Employee = new Employee();
  parentDeptId: string = '';
  employeeService = inject(EmployeeService);
  parentDepartmentList: IParentDept[] = [];
  childDepartmentList: IChildDept[] = [];
  employeeList: Employee[] = [];

  ngOnInit(): void {
    this.loadParentDepartment();
    this.loadEmployee();
  }

  loadParentDepartment() {
    this.employeeService.getDepartment().subscribe((res: IAPIResponse) => {
      console.log(res);
      this.parentDepartmentList = res.data;
    });
  }
  getAllChild() {
    this.employeeService
      .getAllChildDepartment()
      .subscribe((res: IAPIResponse) => {
        console.log(res);
        this.childDepartmentList = res.data;
      });
  }

  loadEmployee() {
    this.employeeService.getAllEmployees().subscribe((res: Employee[]) => {
      console.log(res);
      this.employeeList = res;
    });
  }

  onDeptChange() {
    this.employeeService
      .getChildDepartmentByParentId(this.parentDeptId)
      .subscribe((res: IAPIResponse) => {
        this.childDepartmentList = res.data;
        console.log(this.childDepartmentList);
      });
  }

  //Create New Employee
  onSavemployee() {
    this.employeeService
      .createNewEmployee(this.employeeObj)
      .subscribe((res: Employee) => {
        alert('Employee Created Successfully...');
        this.employeeObj = new Employee();
        this.loadEmployee();
      });
  }

  //Coding Done but giving error while deleting
  onDelete(id: number) {
    const isDelete = confirm('Are you sure want to Delete?');
    if (isDelete) {
      this.employeeService.deleteEmployee(id).subscribe((res: Employee) => {
        this.loadEmployee();
      });
    }
  }

  //On Edit
  onEdit(item: Employee) {
    this.employeeObj = item;
    this.getAllChild();
  }

  onUpdateEmployee() {
    this.employeeService
      .updateEmployee(this.employeeObj)
      .subscribe((res: Employee) => {
        alert('Employee Updated Successfully...');
        this.employeeObj = new Employee();
        this.loadEmployee();
      });
  }
}
