import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { TodoItem } from '../../shared/types/TodoItem';
import { MatListModule } from '@angular/material/list';
import { UpperCasePipe } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [MatCardModule, MatListModule, UpperCasePipe, TodoItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  todoList: TodoItem[] = [
    {
      icon: "",
      title: "My First Task",
      completed: false,
      description: "Walk"
    },
    {
      icon: "",
      title: "My Second Task",
      completed: false,
      description: "Eat"
    },
    {
      icon: "",
      title: "My Third Task",
      completed: false,
      description: "Sleep"
    }
  ];

  removeItem(index: number) {
    this.todoList.splice(index, 1)
  }
}