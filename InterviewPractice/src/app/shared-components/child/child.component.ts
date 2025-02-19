import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
  viewChild,
} from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent implements AfterViewInit {
  @Input() childData: string | undefined;

  @ViewChild('myDiv', { static: false }) myDiv!: ElementRef;

  ngAfterViewInit(): void {
    console.log(this.myDiv.nativeElement.textContent);
  }
  onChangeText() {
    this.myDiv.nativeElement.textContent = 'Text Changed';
  }
}
