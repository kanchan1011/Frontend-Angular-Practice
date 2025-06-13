import { Component } from '@angular/core';
import { PersonalDetailsComponent } from "../personal-details/personal-details.component";
import { EducationComponent } from "../education/education.component";
import { CommonModule } from '@angular/common';
import { ReviewComponent } from '../review/review.component';

@Component({
  selector: 'app-multistep-parent',
  imports: [PersonalDetailsComponent, EducationComponent,ReviewComponent, CommonModule],
  templateUrl: './multistep-parent.component.html',
  styleUrl: './multistep-parent.component.css'
})
export class MultistepParentComponent {
  step = 1;
  formData: any = {};

  nextStep(currentStep: number, data: any) {
    // Save step data
    this.formData = { ...this.formData, ...data };
    this.step = currentStep + 1;
  }

  prevStep() {
    this.step--;
  }

  submitAll() {
    console.log('Final submitted data:', this.formData);
    alert('Form submitted successfully! Check console for data.');
    // Reset form or redirect user here
    this.step = 1;
    this.formData = {};
  }
}
