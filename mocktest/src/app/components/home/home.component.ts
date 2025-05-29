import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  message: string = '';

  loadData() {
    console.log('Button clicked. Statring Async task....');

    setTimeout(() => {
      this.message = 'Data Loaded!';
      console.log('Async task completed...');
    }, 2000);
  }
}
