import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  imports: [],
  templateUrl: './countdown-timer.component.html',
  styleUrl: './countdown-timer.component.css',
})
export class CountdownTimerComponent implements OnDestroy {
  totalTime: number = 300; // 5 minutes in seconds
  remainingTime: number = this.totalTime;
  timer: any = null;
  isRunning: boolean = false;

  startTimer() {
    if (this.isRunning) return;
    this.isRunning = true;

    this.timer = setInterval(() => {
      if (this.remainingTime > 0) {
        this.remainingTime--;
      } else {
        this.pauseTimer(); // stop when timer ends
      }
    }, 1000);
  }

  pauseTimer() {
    this.isRunning = false;
    clearInterval(this.timer);
  }

  resetTimer() {
    this.pauseTimer();
    this.remainingTime = this.totalTime;
  }

  formatTime(seconds: number): string {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${this.pad(mins)}:${this.pad(secs)}`;
  }

  pad(val: number): string {
    return val < 10 ? '0' + val : val.toString();
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }
}
