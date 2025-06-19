import { Component } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [CurrencyPipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  summary: any = {};

  constructor(private service: DashboardService) {}

  ngOnInit(): void {
    this.service.getSummary().subscribe((res: any) => (this.summary = res));
  }
}
