import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactService } from '../../services/contact.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  contactData = {
    name: '',
    email: '',
    message: '',
  };
  errorMessage = '';

  constructor(private contactService: ContactService) {}

  onSubmit() {
    this.contactService.submitContactData(this.contactData).subscribe(
      (res: any) => {
        console.log('Form submitted successfully', res);
      },
      (error) => {
        this.errorMessage = error;
      }
    );
  }
}
