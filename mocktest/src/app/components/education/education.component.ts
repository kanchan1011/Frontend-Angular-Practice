import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-education',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css',
})
export class EducationComponent {
  @Output() stepSubmit = new EventEmitter<FormGroup>();
  @Output() back = new EventEmitter<void>();
  form!: FormGroup;
  skillList = ['HTML', 'CSS', 'JavaScript', 'Angular'];
  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      qualification: ['', Validators.required],
      experience: [0, [Validators.required, Validators.min(0)]],
      skills: this.fb.array([]),
    });
  }

  onCheckboxChange(e: any) {
    const checkArray: FormArray = this.form.get('skills') as FormArray;

    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      const index = checkArray.controls.findIndex(x => x.value === e.target.value);
      if (index !== -1) {
        checkArray.removeAt(index);
      }
    }
  }

  
  submit() {
    if (this.form.valid) {
      this.stepSubmit.emit(this.form.value);
    }
    console.log(this.form.value);
  }

  goBack() {
    this.back.emit();
  }
}
