import { Component } from '@angular/core';
import { Employee } from '../../model/employee';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss',
})
export class EmployeeComponent {
  employeeObj: Employee = new Employee();
  parentDeptId: string = '';

  //Need to start from getParentDepartment API
  //https://www.youtube.com/watch?v=CKdzOR_mLG8   => YOUtube URL
  //  API URL= https://projectapi.gerasim.in/index.html
}
