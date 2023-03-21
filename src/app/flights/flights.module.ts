import {InjectionToken, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {DialogService} from "primeng/dynamicdialog";
import {MessageService} from "primeng/api";
import {ModalsService} from "../modals/modals.service";
import {FlightsComponent} from "./flights.component";
import {TableModule} from "primeng/table";
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {DialogModule} from "primeng/dialog";
import {ToolbarModule} from 'primeng/toolbar';
import {InputMaskModule} from 'primeng/inputmask';
import {CalendarModule} from 'primeng/calendar';
import {DropdownModule} from "primeng/dropdown";

@NgModule({
  declarations: [FlightsComponent],
  imports: [
    CommonModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    DynamicDialogModule,
    DialogModule,
    BrowserAnimationsModule,
    ToolbarModule,
    InputMaskModule,
    CalendarModule,
    DropdownModule

  ],
  exports: [
    FlightsComponent
  ],
  providers: [DialogService, MessageService, ModalsService]
})
export class FlightsModule { }
