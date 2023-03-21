import {LOCALE_ID, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './airport.component'
import {HttpClientModule} from "@angular/common/http";
import {InputTextModule} from "primeng/inputtext";
import {TableModule} from "primeng/table";
import {FormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {DialogModule} from "primeng/dialog";
import {DialogService} from "primeng/dynamicdialog";
import {MessageService} from "primeng/api";
import {ModalsService} from "../modals/modals.service";

// @ts-ignore
@NgModule({
  declarations: [
    HomeComponent
  ],
  exports: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    InputTextModule,
    TableModule,
    FormsModule,
    ButtonModule,
    DialogModule
  ],
  providers: [
    DialogService,
    MessageService,
    ModalsService,
  ]
})
export class AirportModule { }

