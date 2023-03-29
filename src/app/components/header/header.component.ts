import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output() addTaskEvent = new EventEmitter<Task>();

  addNewTask(title: string) {
    if (!title) {
      return;
    }
    const task: Task = {
      id: Math.floor(Math.random() * 1000000),
      title: title.trim(),
      completed: false,
    };
    console.log(task, 'task');
    this.addTaskEvent.emit(task);
  }
}
