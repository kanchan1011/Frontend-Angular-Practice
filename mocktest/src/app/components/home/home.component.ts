import { CommonModule } from '@angular/common';
import { Component, inject, Inject, OnInit } from '@angular/core';
import { DynamicFormComponent } from '../dynamic-form/dynamic-form.component';
import { CountdownTimerComponent } from '../countdown-timer/countdown-timer.component';
import { StarRatingComponent } from '../star-rating/star-rating.component';
import { RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { SortByNamePipe } from "../../pipes/sort-by-name.pipe";

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    DynamicFormComponent,
    CountdownTimerComponent,
    StarRatingComponent,
    RouterModule,
    SortByNamePipe
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  message: string = '';
  currentRating = 3;
  userList:User[]=[];
  usernames:string[]=[];
  private userService = inject(UserService);

  ngOnInit(): void {
    this.userService.getUserList().subscribe((user) => {
      this.userList=user;
      this.usernames=user.map(user=>user.username)
      console.log("User List: ", this.userList,this.usernames);
    });
  }

  handleRatingChange(newRating: number) {
    console.log('New rating selected..', newRating);
    this.currentRating = newRating;
  }

  loadData() {
    console.log('Button clicked. Statring Async task....');

    setTimeout(() => {
      this.message = 'Data Loaded!';
      console.log('Async task completed...');
    }, 2000);
  }
}
