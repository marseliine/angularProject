import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SeatsComponent} from "./seats.component";
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";



@NgModule({
  declarations: [SeatsComponent],
    imports: [
        CommonModule,
        TableModule,
        ButtonModule,
    ],
  exports: [SeatsComponent]
})
export class SeatsModule { }
