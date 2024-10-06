import { Component } from '@angular/core';
import {ImportsModule} from "../../imports";

@Component({
  selector: 'app-ui-libraries',
  standalone: true,
  imports: [
    ImportsModule,
  ],
  templateUrl: './ui-libraries.component.html',
  styleUrl: './ui-libraries.component.scss'
})
export class UILibrariesComponent {

}
