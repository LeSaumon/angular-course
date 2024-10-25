import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoItem } from '../../shared/types/TodoItem';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [UpperCasePipe],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss'
})
export class TodoItemComponent {
  @Input() item?: TodoItem & { index: number }
  @Output() deleteItemEvent = new EventEmitter<number>();

  removeItem(index: number | undefined): void {
    console.log(`Removing item ${index}`)
    this.deleteItemEvent.emit(index);
  }
}
