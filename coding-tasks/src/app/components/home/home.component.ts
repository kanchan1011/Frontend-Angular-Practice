import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  inputValue: any = '';
  submittedValue: any = undefined;

  ngOnInit(): void {
    //this.onClick(this.inputValue);
  }

  onClick(form: NgForm) {
    // this.firstName =
    console.log(`Input Value ${this.inputValue}`);
    this.submittedValue = this.inputValue;
    console.log('submitted value: ', this.submittedValue);
    this.inputValue = '';
  }
}
