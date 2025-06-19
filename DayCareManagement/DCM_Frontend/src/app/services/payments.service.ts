import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {

   private apiUrl= 'http://localhost:3000/api/payments';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(this.apiUrl);
  }

  add(payment: any) {
    return this.http.post(this.apiUrl, payment);
  }
}
