import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { LoginService } from '../../services/login.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  loginObj: any = {
    userName: '',
    password: '',
  };
  constructor(private employeeService: EmployeeService) {}

  http = inject(HttpClient);
  loginService = inject(LoginService);
  router = inject(Router);

  ngOnInit(): void {
    this.employeeService.getAllEmployees().subscribe(
      (res) => {
        if (res) {
          console.log(res);
        }
      },
      (error) => console.log('While fetching Employee data error occured')
    );
  }

  onLogin() {
    this.loginService.onLogin(this.loginObj).subscribe((res: any) => {
        if (res.result) {
          localStorage.setItem('leaveUser', JSON.stringify(res.data));
          console.log(res.data);
          this.router.navigateByUrl('dashboard');
        } else {
          alert(res.message);
        }
      });
  }
}
