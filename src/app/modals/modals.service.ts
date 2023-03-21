import {Component, Injectable, Input, Output, Type} from "@angular/core";
import {DialogService, DynamicDialogRef} from 'primeng/dynamicdialog';
import {AirportInterfaceComponent} from "../airport/airport-interface.component";
import {AirportEditAddComponent} from "./airport-edit-add/airport-edit-add.component";
import {Observable} from "rxjs";
import {MessageService} from "primeng/api";
import {FlightsAdd} from "./flightsAddEdit/flightsAdd";
import {FlightsInterface} from "../flights/flights.interface";
import {SeatsInterface} from "../seats/seats-interface.component";
import {SeatsModalComponent} from "./SeatsModalsForm/SeatsModalsForm";
// import {SeatsModalComponent} from "./SeatsModalsForm/SeatsModalsForm";

// import { Se }

@Injectable({
  providedIn: 'root',
})
export class ModalsService{
  constructor(private dialogService:DialogService) {

  }
  dynamicDialogEditAirport(airport: AirportInterfaceComponent | undefined) {
    let data;
    if (airport) {
      data = {'airport': airport};
    } else {
      data = {};
    }
    this.dialogService.open(AirportEditAddComponent, {
      width: '70%',
      closable: true,
      contentStyle: {
        'max-height': '500px',
        overflow: 'auto'
      },
      data: data,
      baseZIndex: 10000,
    })
  }
  dynamicDialogAddFlight(flights: FlightsInterface | undefined) {

    let dataFlight;
    if(flights){
      dataFlight = {'flights': flights}
    }

    else{
      dataFlight = {};
    }

    this.dialogService.open(FlightsAdd, {
      header: "Окно полета",
      width: '40%',
      height: '57%',
      closable: true,
      contentStyle: {
        'max-height': '600px',
        overflow: 'auto'
      },
      data: dataFlight,
      baseZIndex: 10000
    })
  }
  seatsEditor(mode: string, code: string | null, nome: string| null): Observable<any> {
    let data;
    let ref;
    if (code) {
      data = {mode: mode, code: code, nome: nome};
    } else {
      data = {mode: mode, code: null, nome: null};
    }
    ref = this.dialogService.open(SeatsModalComponent, {
      header: "Редактирование места",

      width: '50%',
      closable: true,
      contentStyle: {
        height: '50%',
        overflow: 'auto'
      },
      data: data,
      modal: true,
      baseZIndex: 10000,
    });
    console.log(ref.onClose, ref);
    return  ref.onClose;
  }

}
