import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {UILibrariesComponent} from "./built-in themes-testing/ui-libraries/ui-libraries.component";
import {ToDoComponent} from "./Components/to-do/to-do.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    UILibrariesComponent,
    ToDoComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ToDoList';
}
