import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  imports: [FormsModule,CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  newTodo: string = '';
  todos: { id: number; text: string; isEditing: boolean }[] = [];
  nextId: number = 1;

  addTodo() {
    const text = this.newTodo.trim();
    if (text) {
      this.todos.push({ id: this.nextId++, text, isEditing: false });
      this.newTodo = '';
    }
    console.log(this.todos);
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((todo) => todo.id != id);
  }

  editTodo(todo: any) {
    todo.isEditing = true;
  }
  cancelEdit(todo: any) {
    todo.isEditing = false;
  }

  updateTodo(todo: any, updatedText: string) {
    const text = updatedText.trim();
    if (text) {
      todo.text = text;
      todo.isEditing = false;
    }
  }
}
