import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-review',
  imports: [],
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})
export class ReviewComponent implements OnInit {
 @Input() data: any;
  @Output() back = new EventEmitter<void>();
  @Output() finalSubmit = new EventEmitter<void>();

  ngOnInit(){
  console.log("Input Data: ",this.data)
  }
  submit() {
    this.finalSubmit.emit();
  }
}
