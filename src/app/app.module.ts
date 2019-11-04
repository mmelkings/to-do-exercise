import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { TaskAddComponent } from './components/task-add/task-add.component';
import { TaskViewComponent } from './components/task-view/task-view.component';
import { StatusPipe } from './pipes/status.pipe';
import { TaskDetailsComponent } from './components/task-details/task-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TaskAddComponent,
    TaskViewComponent,
    StatusPipe,
    TaskDetailsComponent,
  ],
  imports: [
    BrowserModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
