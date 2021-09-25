import { Component, OnInit } from '@angular/core';
import { ITask } from './task.interface';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {
  ngOnInit(): void {
    
  }
  
  public item!: string;
  public newTask!: string;
  public editedTask !: string;

  arrTasksParent: Array<ITask> = [
    {
      task: 'HTML',
      status: true
    },
    {
      task: 'Angular',
      status: false
    },
    {
      task: 'JavaScript',
      status: false
    }
  ]
  
  send(): void {
    this.item = this.newTask;
    this.newTask = '';
    let taskFromInput: ITask = {
      task: this.item,
      status: false,
    }
    this.arrTasksParent.push(taskFromInput);
  }

}
