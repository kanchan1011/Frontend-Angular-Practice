import { Component } from '@angular/core';
import { PaymentsService } from '../../services/payments.service';

@Component({
  selector: 'app-payments',
  imports: [],
  templateUrl: './payments.component.html',
  styleUrl: './payments.component.css'
})
export class PaymentsComponent {
payments: any[] = [];
  payment = { childId: 0, amount: 0 };

  constructor(private service: PaymentsService) {}

  ngOnInit(): void {
    this.loadPayments();
  }

  loadPayments() {
    this.service.getAll().subscribe((res: any) => this.payments = res);
  }

  submit() {
    this.service.add(this.payment).subscribe(() => this.loadPayments());
    this.payment = { childId: 0, amount: 0 };
  }
}
