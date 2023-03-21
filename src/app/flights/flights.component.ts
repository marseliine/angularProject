import { Component, OnInit } from '@angular/core';
import {FlightsService} from "./flights.service";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import {ModalsService} from "../modals/modals.service";
import {FlightsInterface} from "./flights.interface";

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent {

  flightsRequest$:Observable<Array<any>> = this.flightService.getFlights().pipe(map(el1=> {

    const dataObj: Array<any> =[];
    const arrFlight:number = 0;
    const arrFlightDetail:number = 1;

    for(let i =0; i<el1.length; i++){
      for(let j=0; j<el1[i][arrFlightDetail].length; j++ ){
        const obj:any = {};
        obj['all_the_way'] = el1[i][arrFlight].join('->');
        obj['flight_id'] = el1[i][arrFlightDetail][j].flight_id;
        obj['scheduled_departure'] = el1[i][arrFlightDetail][j].scheduled_departure;
        obj['scheduled_arrival'] = el1[i][arrFlightDetail][j].scheduled_arrival;
        obj['flight_no'] = el1[i][arrFlightDetail][j].flight_no;
        obj['departure_airport'] = el1[i][arrFlightDetail][j].departure_airport;
        obj['arrival_airport'] = el1[i][arrFlightDetail][j].arrival_airport;
        obj['aircraft_code'] = el1[i][arrFlightDetail][j].aircraft_code;
        dataObj.push(obj);
      }
    }
    return dataObj;
  }));

  constructor(private flightService: FlightsService, private flightServiceTwo: ModalsService) {

  }
  addOrEdit(flight?: FlightsInterface){
    this.flightServiceTwo.dynamicDialogAddFlight(flight);
  }
  ngOnInit(): void {

  }

  delete(flight_id: any) {
    this.flightService.deleteFlights(flight_id).subscribe((res) => {
      this.flightsRequest$ = this.flightService.getFlights()
    })
  }

}

