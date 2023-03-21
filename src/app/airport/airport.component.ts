import {Component, InjectionToken, Injector, Input, OnDestroy, Output} from '@angular/core';
import {AirportService} from './airport.service';
import {DialogService} from 'primeng/dynamicdialog';
import { ModalsService } from "../modals/modals.service";
import {AirportInterfaceComponent} from "./airport-interface.component";
import {Observable} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './airport.component.html',
  styleUrls: ['./airport.component.css']
})
export class HomeComponent {

  airports: any

  constructor(private airportService: AirportService, private modalService: ModalsService) {
  }
  displayModal: boolean = false;
  airportRequest$: Observable<Array<any>> = this.airportService.getAirport();

  dynamicDialogEdit(airport?: AirportInterfaceComponent){
    this.modalService.dynamicDialogEditAirport(airport);
  }

  fetchAllAirports() {
    this.airportService.getAirports().subscribe((res) => {
      this.airports = res;
    });
  }
  delete(name: any) {
    this.airportService.deleteAirport(name).subscribe((res) => {
      this.fetchAllAirports();
    })
  }
}
