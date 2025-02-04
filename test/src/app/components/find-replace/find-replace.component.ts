import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-find-replace',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './find-replace.component.html',
  styleUrl: './find-replace.component.css',
})
export class FindReplaceComponent {
  inputText: string = '';

  findText: string = '';
  replaceText: string = '';

  resultText: string = '';
  errorMessage: string = '';

  findAndReplace() {
    this.errorMessage = '';

    if (!this.findText || !this.replaceText) {
      this.errorMessage = 'Please Enter both Find and Replace Text';
      return;
    }

    if (this.findText && this.replaceText) {
      const regex = new RegExp(this.findText, 'gi'); //For case sensitive use "g" instead of "gi"
      this.resultText = this.inputText.replace(regex, this.replaceText);
      // } else {
      //   alert('Please provide both find and replace Text.');
    }

    // Validation to Check if both Find and Replace texts are provided

    // If match not found, show an error message
    if (this.resultText === this.inputText) {
      this.errorMessage = 'No match found for the text you want to replace!';
    }
  }
}
