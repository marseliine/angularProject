import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import {InputTextModule} from "primeng/inputtext";
import {TableModule} from "primeng/table";
import {ModalsService} from "./modals.service";
import {ButtonModule} from "primeng/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AirportEditAddComponent} from "./airport-edit-add/airport-edit-add.component";
import {DialogService} from "primeng/dynamicdialog";
import {MessageService} from "primeng/api";
import {FlightsAdd} from "./flightsAddEdit/flightsAdd";
import {DynamicDialogModule} from "primeng/dynamicdialog";
import {BrowserModule} from "@angular/platform-browser";
import {SeatsModalComponent} from "./SeatsModalsForm/SeatsModalsForm";


@NgModule({
  declarations: [
    FlightsAdd,
    AirportEditAddComponent,
    SeatsModalComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    InputTextModule,
    TableModule,
    ButtonModule,
    FormsModule,
    DynamicDialogModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,


  ],
  exports: [
    FlightsAdd, AirportEditAddComponent
  ],
  providers:[DialogService, MessageService,ModalsService]
})
export class ModalsModule { }
