import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AttendanceService {
  private apiUrl = 'http://localhost:3000/api/attendance';

  constructor(private http: HttpClient) {}

  markPresent(childId: number) {
    return this.http.post(this.apiUrl, { childId });
  }

  getAttendance(childId?: number) {
    return this.http.get(`${this.apiUrl}${childId ? '/' + childId : ''}`);
  }
}
