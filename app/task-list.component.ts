import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'task-list',
  template: `
  <ul>
    <li [class]="priorityColor(currentTask)" (click)="isDone(currentTask)" *ngFor="let childTaskList of tasks">{{currentTask.description}} <button (click)="editTask(currentTask)">Edit!</button></li>
  </ul>
  `
})

export class TaskListComponent {
  @Input() childTaskList: Task[];
  masterTaskList: Task[] = [
    new Task('Finish some Angular homework stuff', 3),
    new Task('Begin brainstorming possible JavaScript group projects', 2),
    new Task('Add README file to last few Angular repos on GitHub', 1)
  ];

  isDone(clickedTask: Task) {
    if(clickedTask.done === true) {
      alert("This task is done!");
    } else {
      alert("This task is not done. Better get to work!")
    }
  }

  priorityColor(currentTask){
    if(currentTask.priority === 3) {
      return "bg-danger";
    } else if (currentTask.priority === 2) {
      return "bg-warning";
    } else {
      return "bg-success";
    }
  }

}
