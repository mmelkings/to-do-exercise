import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {

  @Input() task: Task = null;
  @Output() saveEvent = new EventEmitter<any>();

  subtask: string = '';

  constructor() { }


  ngOnInit() {
  }

  saveChanges(){
    this.saveEvent.emit(this.task);
  }

  handleAddSubtask(subtask:Task){
    this.task.subTasks.push(subtask);
  }

  deleteSub(event: Task){
    const index = this.task.subTasks.findIndex(task => task.id == event.id);
    this.task.subTasks.splice(index,1);
  }

}
