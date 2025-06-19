import { Component } from '@angular/core';
import { AttendanceService } from '../../services/attendance.service';

@Component({
  selector: 'app-attendance',
  imports: [],
  templateUrl: './attendance.component.html',
  styleUrl: './attendance.component.css'
})
export class AttendanceComponent {
attendance: any[] = [];
  childId: number = 0;

  constructor(private service: AttendanceService) {}

  ngOnInit() {
    this.loadAttendance();
  }

  loadAttendance() {
    this.service.getAttendance().subscribe((data: any) => this.attendance = data);
  }

  markPresent(id: number) {
    this.service.markPresent(id).subscribe(() => this.loadAttendance());
  }
}
