import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  tasks: Array<Task> = [];
  edit: boolean = false;
  taskEdit: Task = null;

  handleOpenTaskDetails(task: Task){
    this.edit = false;
    setTimeout( ()=> {
      this.taskEdit = task;
      this.edit = true;
    })
  }

  handleCloseDetails(){
      this.edit = false;
      this.taskEdit = null;
  }

  handleNewTask(event: Task){
    event.setId(this.tasks.length + 1);
    this.tasks.push(event);
  }

  handleDeleteTask(event: Task){
    this.handleCloseDetails();
    const index = this.tasks.findIndex(task => task.id == event.id);
    this.tasks.splice(index,1);
  }

}
