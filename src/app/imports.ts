// Import PrimeNG modules
import { NgModule } from '@angular/core';
import {ButtonGroupModule} from "primeng/buttongroup";
import {ButtonModule} from "primeng/button";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {MatButtonModule} from "@angular/material/button";
import {IconFieldModule} from "primeng/iconfield";


@NgModule({
  imports: [
    MatSlideToggleModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    ButtonModule,
    ButtonGroupModule,
  ],
  exports: [
    MatSlideToggleModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    ButtonModule,
    ButtonGroupModule,
  ],
  providers: [  ]
})
export class ImportsModule {}
