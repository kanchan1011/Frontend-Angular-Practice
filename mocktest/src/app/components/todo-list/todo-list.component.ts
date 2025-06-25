import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../models/todo';
import { TodoService } from '../../services/todo.service';
import { TodoItemComponent } from "../todo-item/todo-item.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  imports: [FormsModule, TodoItemComponent,CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  newTodo: string = '';

  constructor(private todoService:TodoService){}
  ngOnInit() {
    //console.log(this.newTodo);
  }

  get todos():Todo[]{
    return this.todoService.getTodos();
  }

  addTodo() {
    if(this.newTodo.trim()){
    this.todoService.addTodo(this.newTodo.trim())
   
    this.newTodo = '';
    }
  }

  editTodo(title:string,id:number) {
    this.todoService.editTodo(title,id);
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id);
  }

  toggleTodo(id: number) {
   this.todoService.toggleTodo(id);
}
}