import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TypeOfSubjectService {
  private eventSubject = new Subject<string>();
  event$ = this.eventSubject.asObservable();
  constructor() {}

  emitEvent(value: string) {
    this.eventSubject.next(value);
  }

  
}
