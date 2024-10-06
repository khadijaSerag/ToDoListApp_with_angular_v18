import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.scss'
})
export class ToDoComponent {
  title: string = "To Do List Application";
  imgLink: string = "https://cdn-icons-png.flaticon.com/512/4697/4697260.png"

  newTask: string = '';
  tasks: string[] = [];

  isAvaliable: boolean = false;
  isAdd: boolean = true;

  editIndex: number = 0;


  addTask() {
    this.isAdd = true;
    if (this.newTask.trim() != '') {
      this.tasks.push(this.newTask);
      this.newTask = '';
      this.isAvaliable = true;
    }
    console.log("tasks", this.tasks);
  }


  editTask(index: number): string | void {
    this.isAdd = false;
    this.editIndex = index;
    this.newTask = this.tasks[index];
  }

  save(index: number) {
    this.isAdd = true;
    if (this.newTask.trim() != '') {
      this.tasks[index] = this.newTask.trim();
      this.newTask = '';
    }
  }


  removeTask(index: number) {
    this.tasks.splice(index, 1); // for delete
    if (this.tasks.length <= 0) {
      this.isAvaliable = false;
    }
  }


}
