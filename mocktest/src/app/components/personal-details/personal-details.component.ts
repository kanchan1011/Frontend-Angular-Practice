import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EducationComponent } from "../education/education.component";
import { ReviewComponent } from '../review/review.component';

@Component({
  selector: 'app-personal-details',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './personal-details.component.html',
  styleUrl: './personal-details.component.css',
})
export class PersonalDetailsComponent {
  form!: FormGroup;
  @Output() stepSubmit = new EventEmitter<FormGroup>();
  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      firstName: ['', Validators.required],
      middleName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: [
        '',
        [
          Validators.required,
          //Validators.minLength(10),
          //Validators.maxLength(10),
          Validators.pattern(/^\d{10}$/), // Exactly 10 digits (if not empty)
          Validators.pattern(/^\d*$/) //Only digits allowed
        ],
      ],
      address: ['', Validators.required],
    });
  }

  submit() {
    if (this.form.valid) {
      this.stepSubmit.emit(this.form.value);
    }
    console.log(this.form.value)
  }
}
