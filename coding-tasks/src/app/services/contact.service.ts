import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private apiUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  submitContactData(data: any): Observable<any> {
    return this.http.post(this.apiUrl+"/userData", data);
  }
}
