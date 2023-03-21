import {Component} from "@angular/core";
import {DynamicDialogRef} from "primeng/dynamicdialog";
import {DynamicDialogConfig} from "primeng/dynamicdialog";
import {config} from "rxjs";
import {FlightsService} from "../../flights/flights.service";


@Component({
  selector: 'my',
  templateUrl: 'flightsAdd.component.html'
})
export class FlightsAdd {
  flagForm:boolean
  flight_id: any;
  scheduled_departure: any;
  scheduled_arrival: any;
  flight_no: any ;
  departure_airport: any
  arrival_airport: any;
  aircraft_code: any ;


  constructor(private flightService: FlightsService, public ref: DynamicDialogRef, public config: DynamicDialogConfig,) {
    console.log(config.data.flights)

    this.flagForm = true
    let dataFlight = config.data.flights
    if(dataFlight===undefined){
      this.flagForm = false;
    }
    else {
      this.flight_id = dataFlight.flight_id
      this.scheduled_departure = dataFlight.scheduled_departure
      this.scheduled_arrival = dataFlight.scheduled_arrival
      this.flight_no = dataFlight.flight_no
      this.departure_airport = dataFlight.departure_airport
      this.arrival_airport = dataFlight.arrival_airport
      this.aircraft_code = dataFlight.aircraft_code
    }

  }

  editFlight(flight_id:number,
             scheduled_departure:string,
             scheduled_arrival:string,
             flight_no:string,
             departure_airport:string,
             arrival_airport:string,
             aircraft_code:string
             ){
    console.log(flight_id)
    console.log(scheduled_departure)
    console.log(scheduled_arrival)
    console.log(flight_no)
    console.log(departure_airport)
    console.log(arrival_airport)
    console.log(aircraft_code)

    let newDataFlight = this.config.data.flights
    newDataFlight.flight_id = flight_id
    newDataFlight.scheduled_departure = scheduled_departure
    newDataFlight.scheduled_arrival = scheduled_arrival
    newDataFlight.flight_no = flight_no
    newDataFlight.departure_airport = departure_airport
    newDataFlight.arrival_airport = arrival_airport
    newDataFlight.aircraft_code = aircraft_code
    delete newDataFlight.all_the_way

    console.log(newDataFlight)
    this.flightService.updateFlight(newDataFlight).subscribe(newDataFlight => {
      console.log(`Dialog result: ${newDataFlight}`)
    })
  }


}
