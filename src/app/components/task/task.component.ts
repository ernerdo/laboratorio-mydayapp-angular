import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  @Output() removeTaskEvent: EventEmitter<Task> = new EventEmitter();
  @Input() task: Task = { id: 0, title: '', completed: false };
  editing: boolean = false;

  toggleCompleted(task: Task) {
    task.completed = !task.completed;
  }
  updateTask(task: Task, title: string) {
    task.title = title;
    this.editing = false;
  }
  editMode() {
    this.editing = true;
  }
  removeTask(task: Task) {
    this.removeTaskEvent.emit(task);
  }
}
