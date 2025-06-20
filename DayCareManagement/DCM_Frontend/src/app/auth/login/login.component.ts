import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule  } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-login',
  imports: [FormsModule,MatFormFieldModule,MatInputModule,MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private auth: AuthService, private router: Router) {}

  submit() {
    console.log("Email n Password: ",this.email,this.password)
    this.auth
      .login({ email: this.email, password: this.password })
      .subscribe((res: any) => {
        localStorage.setItem('token', res.token);
        console.log("token: ",res.token)
        this.router.navigate(['/dashboard']);
      });
  }
}
