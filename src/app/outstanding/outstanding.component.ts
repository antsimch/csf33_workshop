import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-outstanding',
  templateUrl: './outstanding.component.html',
  styleUrls: ['./outstanding.component.css']
})
export class OutstandingComponent {
  
  @Input()
  outstandingTasks: Task[] = []; 

  deleteTask(taskToDelete: Task) {
    this.outstandingTasks = this.outstandingTasks.filter(
      (task) => {
        return task !== taskToDelete;
      }
    );
  }
}
