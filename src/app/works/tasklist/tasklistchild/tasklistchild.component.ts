import { Component, Input, OnInit } from '@angular/core';
import { ITask } from '../task.interface';

@Component({
  selector: 'app-tasklistchild',
  templateUrl: './tasklistchild.component.html',
  styleUrls: ['./tasklistchild.component.css']
})
export class TasklistchildComponent implements OnInit {

  @Input() taskMessage!: Array<ITask>;
  public editTask!: string;
  public isEdit = false;
  public editIndex!: number;
  ngOnInit(): void {
  }
  changeStatus(task: any): void {
    task.status = !task.status;
  }
  deleteTask(index: number): void {
    this.taskMessage.splice(index, 1)
  }
  edit(index: number): void {
    this.editTask = this.taskMessage[index].task;
    this.isEdit = true;
    this.editIndex = index;
  }
  saveTask(): void {
    this.taskMessage[this.editIndex].task = this.editTask;
    this.editTask = '';
    this.isEdit = false
  }

}
