import { Component } from '@angular/core';
import { TypeOfSubjectService } from '../../services/type-of-subject.service';

@Component({
  selector: 'app-receiver',
  imports: [],
  templateUrl: './receiver.component.html',
  styleUrl: './receiver.component.css',
})
export class ReceiverComponent {
  receivedMsg: string | undefined;
  constructor(private typeOfSubjectService: TypeOfSubjectService) {}

  ngOnInit() {
    this.typeOfSubjectService.event$.subscribe((msg) => {
      console.log('Received msg: ', msg);
      this.receivedMsg = msg;
    });
  }
}
