import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DynamicFormComponent } from '../dynamic-form/dynamic-form.component';
import { CountdownTimerComponent } from '../countdown-timer/countdown-timer.component';
import { StarRatingComponent } from '../star-rating/star-rating.component';
import { RouterModule } from '@angular/router';
import { EducationComponent } from "../education/education.component";

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    DynamicFormComponent,
    CountdownTimerComponent,
    StarRatingComponent,
    RouterModule,
    EducationComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  message: string = '';
  currentRating = 3;

  handleRatingChange(newRating: number) {
    console.log('New rating selected..', newRating);
    this.currentRating = newRating;
  }

  loadData() {
    console.log('Button clicked. Statring Async task....');

    setTimeout(() => {
      this.message = 'Data Loaded!';
      console.log('Async task completed...');
    }, 2000);
  }
}
