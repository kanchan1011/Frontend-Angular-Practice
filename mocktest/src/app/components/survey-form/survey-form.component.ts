import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-survey-form',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './survey-form.component.html',
  styleUrl: './survey-form.component.css',
})
export class SurveyFormComponent {
  surveyForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.surveyForm = fb.group({
      questions: fb.array([]), //formArray for Dynamic Ques
    });
  }

  get questions(): FormArray {
    return this.surveyForm.get('questions') as FormArray;
  }

  createQuestion(): FormGroup {
    return this.fb.group({
      questionText: ['', Validators.required],
      answers: this.fb.array([this.fb.control('')]), //default one answer
    });
  }

  addQuestion() {
    this.questions.push(this.createQuestion());
  }

  removeQuestion(index: number) {
    this.questions.removeAt(index);
  }

  answers(index: number): FormArray {
    return this.questions.at(index).get('answers') as FormArray;
  }

  addAnswer(qIndex: number) {
    this.answers(qIndex).push(this.fb.control(''));
  }

  removeAnswer(qIndex: number, aIndex: number) {
    this.answers(qIndex).removeAt(aIndex);
  }

  onSubmit(){
    console.log(this.surveyForm.value);
  }
}
