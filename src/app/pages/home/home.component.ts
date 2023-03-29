import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  constructor() {}
  tasks: Task[] = [];

  ngOnInit(): void {}

  addTask(task: Task) {
    console.log(task, 'task');
    this.tasks.push(task);
  }
}
