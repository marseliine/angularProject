import { Injectable, Inject } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {FlightsInterface} from "./flights.interface";
import { Observable } from 'rxjs';
import { SERVER } from "../app.module"

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  constructor(private http: HttpClient, @Inject(SERVER) private SERVER:any
  ) { }

  getFlights():Observable<Array<any>>{
    return this.http.get<Array<any>>(`${this.SERVER}/flights?departure_date=2017-08-25&arrival_airport=DME&departure_airport=CSY&max_transits=3`)
  }
  deleteFlights(flight_id: any){
    return this.http.delete(`${this.SERVER}/flights/${flight_id}`);
  }

  updateFlight(flight: FlightsInterface): Observable<FlightsInterface>{
    const headers = new HttpHeaders({'Access-Control-Allow-Origin': '*'});
    const httpOptions = {
      headers: headers
    };

    return this.http.put<FlightsInterface>(`${this.SERVER}/flights/${flight.flight_id}`, flight, httpOptions)
  }

  addFlight(flight: FlightsInterface): Observable<FlightsInterface>{
    const headers = new HttpHeaders({'Access-Control-Allow-Origin': '*'});
    const httpOptions = {
      headers: headers
    };

    return this.http.post<FlightsInterface>(`${this.SERVER}/flights`, flight, httpOptions)
  }

}
