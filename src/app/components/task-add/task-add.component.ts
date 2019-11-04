import { Component, OnInit, Output, EventEmitter, Input, ViewChild, ElementRef } from '@angular/core';

import { Task } from '../../models/task';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {

  @Output() editTask = new EventEmitter<Task>();

  @Input() placeholder: string = 'Write your task and enter';
  @Input() name: string = null;
  
  @ViewChild('input', {static: false}) inputEl:ElementRef;


  constructor() { }

  task: string = '';
  

  ngOnInit() {
    if(this.name !== null ){
      this.task = this.name;
      setTimeout(()=>{
        this.inputEl.nativeElement.focus();
      },0); 
    }
  }

  handleEdit(){
    if(this.task === '') return;

    const taskModel = new Task(this.task);
    this.editTask.emit(taskModel);
    this.task = '';
  }

}
