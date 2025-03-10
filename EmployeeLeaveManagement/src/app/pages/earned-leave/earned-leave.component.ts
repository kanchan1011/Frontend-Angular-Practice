import { Component, inject, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { Employee, IAPIResponse, IEarnedLeave } from '../../model/employee';
import { Observable } from 'rxjs';
import { AsyncPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-earned-leave',
  standalone: true,
  imports: [ReactiveFormsModule, AsyncPipe,DatePipe],
  templateUrl: './earned-leave.component.html',
  styleUrl: './earned-leave.component.scss',
})
export class EarnedLeaveComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  employeeService = inject(EmployeeService);
  employee$: Observable<Employee[]> = new Observable<Employee[]>();
  earnedLeaves: IEarnedLeave[] = [];

  constructor() {
    this.initializeForm();
    this.employee$ = this.employeeService.getAllEmployees();
  }

  ngOnInit() {
    this.getData();
  }

  initializeForm() {
    this.form = new FormGroup({
      earnedLeaveId: new FormControl(0, Validators.required),
      employeeId: new FormControl(0, Validators.required),
      totalEarnedLeaves: new FormControl(0, Validators.required),
      lastUpdatedDate: new FormControl(new Date(), Validators.required),
    });
  }

  getData() {
    this.employeeService.getAllEarnedLeaves().subscribe((res: IAPIResponse) => {
      this.earnedLeaves = res.data;
    });
  }

  onSubmit() {
    console.log(this.form.value);
    const formValu = this.form.value;
    this.employeeService
      .addEarnedLeave(formValu)
      .subscribe((res: IAPIResponse) => {
        console.log(res.data);
        if (res.result) {
          alert('Earned Leave Added Successfully');
        } else {
          alert(res.message);
        }
      });
  }
}
