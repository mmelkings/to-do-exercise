import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../models/task';


@Pipe({
  name: 'status',
  pure: false
})
export class StatusPipe implements PipeTransform {

  transform(allTask: Task[], s: number): any {
    return allTask.filter(task => task.status === s);
  }

}
