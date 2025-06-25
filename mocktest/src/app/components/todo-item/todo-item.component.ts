import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../models/todo';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-item',
  imports: [CommonModule,FormsModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
})
export class TodoItemComponent {
  @Input() todo!: Todo;
  @Output() toggle = new EventEmitter<number>();
  @Output() delete = new EventEmitter<number>();
  @Output() edit = new EventEmitter<{  title: string,id: number; }>();

  editing = false;
  editTitle = '';

  startEdit() {
    this.editing = true;
    this.editTitle = this.todo.task;
  }

  saveEdit() {
    if (this.editTitle.trim()) {
      this.edit.emit({ id: this.todo.id, title: this.editTitle.trim() });
      this.editing = false;
    }
  }

  cancelEdit(){
    this.editing=false;
  }
}
