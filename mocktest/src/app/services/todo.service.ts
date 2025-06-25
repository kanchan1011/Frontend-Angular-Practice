import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: Todo[] = [];
  nextId = 0;

  constructor() {}

  getTodos(): Todo[] {
    return this.todos;
  }

  addTodo(title: string) {
    this.todos.push({
      id: this.nextId++,
      task: title,
      completed: false,
    });
    console.log('Todo List: ', this.todos);
  }

  editTodo(title: string, id: number) {
    const isEditTodo = this.todos.find((todo) => todo.id === id);
    if (isEditTodo) {
      this.todos.push({ id: id, task: title, completed: true });
    }
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    console.log(this.todos, id);
  }

  toggleTodo(id: number) {
    const todo = this.todos.find((todo) => todo.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
    console.log(this.todos);
  }
}
