import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.css']
})
export class TaskViewComponent implements OnInit {

  @Input() task: Task;
  @Input() size: string = '';
  
  @Output() editTask = new EventEmitter<Task>();
  @Output() deleteTask = new EventEmitter<Task>();
  @Output() openTaskDetails = new EventEmitter<Task>();

  edit: boolean = false;
  

  constructor() { }

  ngOnInit() {
  }

  taskChangeStatus(status: number){
    this.task.status = status;
    for(const subtask of this.task.subTasks){
      subtask.status = status;
    }
    this.editTask.emit(this.task);
  }

  taskDelete(){
    this.deleteTask.emit(this.task);
  }

  openDetails(){
    this.openTaskDetails.emit(this.task);
  }


}
