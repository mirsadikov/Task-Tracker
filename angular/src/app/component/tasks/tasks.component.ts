import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { TASKS } from '../../mock-tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = TASKS;

  constructor() {}

  ngOnInit(): void {}

  deleteTask(task: Task) {
    this.tasks = this.tasks.filter((t) => t.id !== task.id);
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
  }

  addTask(task: Task) {
    this.tasks.push(task);
  }
}
