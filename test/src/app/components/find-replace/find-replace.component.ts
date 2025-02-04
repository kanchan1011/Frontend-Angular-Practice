import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-find-replace',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './find-replace.component.html',
  styleUrl: './find-replace.component.css'
})
export class FindReplaceComponent {

  
  inputText: string = '';
 
  findText: string = '';
  replaceText: string = '';
  
  resultText: string = '';

  findAndReplace() {
    if (this.findText && this.replaceText) {
      const regex = new RegExp(this.findText, 'gi'); //For case sensitive use "g" instead of "gi"
      this.resultText = this.inputText.replace(regex, this.replaceText);
    } else {
      alert('Please provide both find and replace Text.');
    }
  }
}
