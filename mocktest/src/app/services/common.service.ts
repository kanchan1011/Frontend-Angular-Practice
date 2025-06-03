import { Injectable } from '@angular/core';
import { DynamicField } from '../models/dynamic-fields.model';
import { Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  fields: DynamicField[] = [
    {
      type: 'text',
      name: 'firstName',
      label: 'First Name',
      validations: [Validators.required],
    },
    {
      type: 'email',
      name: 'email',
      label: 'Email',
      validations: [Validators.required, Validators.email],
    },
    {
      type: 'select',
      name: 'country',
      label: 'Country',
      options: ['USA', 'Canada'],
      validations: [],
    },
  ];

  constructor(private http: HttpClient) {}
  getFormConfig(): Observable<DynamicField[]> {
    return of(this.fields);  //of() is from RxJS — it wraps your static JSON in an observable like an API would.
  }
}
