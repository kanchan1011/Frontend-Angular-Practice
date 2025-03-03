import { Component, inject } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet,RouterModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  router = inject(Router);

  loggedUserData: any;

  constructor() {
    const localData = localStorage.getItem('leaveUser');
    if (localData) {
      this.loggedUserData = JSON.parse(localData);
    }
  }

  onLogOff() {
    localStorage.removeItem('leaveUser');
    this.router.navigateByUrl('login');
  }
}
