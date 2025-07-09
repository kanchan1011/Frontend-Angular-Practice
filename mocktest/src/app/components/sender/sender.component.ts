import { Component } from '@angular/core';
import { TypeOfSubjectService } from '../../services/type-of-subject.service';

@Component({
  selector: 'app-sender',
  imports: [],
  templateUrl: './sender.component.html',
  styleUrl: './sender.component.css'
})
export class SenderComponent {

  constructor(private typeOfSubjectService:TypeOfSubjectService){}

  sendMessage(){
    this.typeOfSubjectService.emitEvent('Event From Sender Component...');
  }
}
