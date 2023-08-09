import { Component } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'csf32_workshop';

  tasks: Task[] = [];
  taskToEdit: Task | undefined;

  addToOutstanding(event: any) {
    console.log(JSON.stringify(event.value));
    this.tasks.push(event.value);
  }
}
