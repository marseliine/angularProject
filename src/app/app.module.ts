import {InjectionToken, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TableModule} from "primeng/table";
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {DialogModule} from "primeng/dialog";
import {AirportModule} from "./airport/airport.module";
import { AirportEditAddComponent } from "./modals/airport-edit-add/airport-edit-add.component";
import {environment} from "../environments/environment";
import {ToolbarModule} from 'primeng/toolbar';
import {InputMaskModule} from 'primeng/inputmask';
import {CalendarModule} from 'primeng/calendar';
import {DropdownModule} from "primeng/dropdown";
import {FlightsModule} from "./flights/flights.module";
import {ModalsModule} from "./modals/modals.module";
import {SeatsComponent} from "./seats/seats.component";
import {SeatsModule} from "./seats/seats.module";

export const SERVER = new InjectionToken<string>('213')

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    DynamicDialogModule,
    DialogModule,
    BrowserAnimationsModule,
    AirportModule,
    ToolbarModule,
    InputMaskModule,
    CalendarModule,
    DropdownModule,
    FlightsModule,
    ModalsModule,
    AirportModule,
    ReactiveFormsModule,
    SeatsModule

  ],
  providers: [
    {provide: SERVER,useValue: environment.baseUrlAirport},
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
