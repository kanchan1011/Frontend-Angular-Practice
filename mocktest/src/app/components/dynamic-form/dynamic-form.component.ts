import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonService } from '../../services/common.service';
import { DynamicField } from '../../models/dynamic-fields.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dynamic-form',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.css',
  standalone:true
})
export class DynamicFormComponent implements OnInit {
  form!: FormGroup;
  fields: DynamicField[] = [];

  constructor(private fb: FormBuilder, private commonService: CommonService) {}

  ngOnInit() {
    this.commonService.getFormConfig().subscribe((config) => {
      this.fields = config;

      let group: any = {};
      this.fields.forEach((field) => {
        group[field.name] = new FormControl(
          field.value || '',
          field.validations || []
        );
      });
      this.form = new FormGroup(group);
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
}
