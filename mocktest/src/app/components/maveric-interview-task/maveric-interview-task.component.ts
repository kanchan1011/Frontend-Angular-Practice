import { Component } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-maveric-interview-task',
  imports: [CommonModule],
  templateUrl: './maveric-interview-task.component.html',
  styleUrl: './maveric-interview-task.component.css'
})
export class MavericInterviewTaskComponent {
userData:User[]=[];
headers:string[]=[];


constructor(private userService:UserService){}

ngOnInit(){
this.userService.getUserList().subscribe(data=>{
  this.userData=data;
  this.headers=Object.keys(data[0]);
  this.headers=this.headers.slice(0,5); //To display limited headers
  console.log("Users: ",this.userData);
  console.log("Dynamic Header: ",this.headers);
})  
}
}
